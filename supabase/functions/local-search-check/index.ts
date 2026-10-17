import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";
import { parseHTML } from "npm:linkedom@0.18.12";
import ipaddr from "npm:ipaddr.js@2.5.0";
import { buildReport, normalizeWebsite, reportText, FOLLOW_UP_WORDING, CONSENT_VERSION, type Page, type Report } from "./rules.ts";

const inputSchema = z.object({ website: z.string().trim().min(3).max(500), city: z.string().trim().min(2).max(100), service: z.string().trim().min(2).max(100), profile: z.string().trim().max(500).optional() });
const emailSchema = z.object({ reportId: z.string().uuid(), name: z.string().trim().min(1).max(100), email: z.string().trim().email().max(250), followUp: z.boolean() });
const response = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

async function validatePublic(url: URL) {
  normalizeWebsite(url.href);
  const host = url.hostname.replace(/^\[|\]$/g, "");
  if (ipaddr.isValid(host)) {
    if (ipaddr.process(host).range() !== "unicast") throw new Error("Only public website addresses can be checked.");
  } else {
    const records = await Promise.allSettled([Deno.resolveDns(host, "A"), Deno.resolveDns(host, "AAAA")]);
    const addresses = records.flatMap(r => r.status === "fulfilled" ? r.value : []);
    if (!addresses.length || addresses.some(a => !ipaddr.isValid(a) || ipaddr.process(a).range() !== "unicast")) throw new Error("The website must resolve only to public internet addresses.");
  }
}
async function getPublic(address: string, maxBytes = 1500000) {
  let url = new URL(address);
  for (let redirects = 0; redirects < 5; redirects++) {
    await validatePublic(url);
    const res = await fetch(url, { redirect: "manual", signal: AbortSignal.timeout(10000), headers: { "User-Agent": "YourBestSEO-OpportunityCheck/1.0 (+https://yourbestseo.com/free-audit)", Accept: "text/html,text/plain" } });
    if ([301, 302, 303, 307, 308].includes(res.status)) {
      const location = res.headers.get("location"); await res.body?.cancel();
      if (!location) throw new Error("The website returned an incomplete redirect.");
      url = new URL(location, url); continue;
    }
    const reader = res.body?.getReader(); let bytes = 0; let text = ""; const decoder = new TextDecoder();
    if (reader) try {
      while (true) { const { done, value } = await reader.read(); if (done) break; bytes += value.length; if (bytes > maxBytes) throw new Error("The page is too large for this limited check."); text += decoder.decode(value, { stream: true }); }
      text += decoder.decode();
    } finally { await reader.cancel().catch(() => undefined); }
    return { url: url.href, status: res.status, headers: res.headers, text };
  }
  throw new Error("Too many website redirects to complete the check.");
}
function pageFrom(raw: Awaited<ReturnType<typeof getPublic>>): Page {
  const empty: Page = { url: raw.url, title: "", description: "", headings: [], links: [], localSchema: false, noindex: false };
  if (raw.status < 200 || raw.status >= 300) return { ...empty, unavailable: `The automated request received HTTP ${raw.status}; website checks could not be completed.` };
  if (!raw.headers.get("content-type")?.includes("text/html")) return { ...empty, unavailable: "The response was not an HTML webpage, so page checks could not be completed." };
  const { document } = parseHTML(raw.text);
  const description = Array.from(document.querySelectorAll("meta")).find(m => m.getAttribute("name")?.toLowerCase() === "description")?.getAttribute("content") ?? "";
  const noindex = /\b(noindex|none)\b/i.test(raw.headers.get("x-robots-tag") ?? "") || Array.from(document.querySelectorAll("meta")).some(m => /^(robots|googlebot)$/i.test(m.getAttribute("name") ?? "") && /\b(noindex|none)\b/i.test(m.getAttribute("content") ?? ""));
  const localTypes = /^(LocalBusiness|Dentist|HVACBusiness|Plumber|Electrician|HomeAndConstructionBusiness|ProfessionalService|MedicalBusiness|Restaurant|Store|AutoRepair|LegalService|RealEstateAgent|HealthAndBeautyBusiness|LodgingBusiness|FoodEstablishment|HairSalon|VeterinaryCare)$/;
  const hasLocal = (value: unknown): boolean => {
    if (!value || typeof value !== "object") return false;
    if (Array.isArray(value)) return value.some(hasLocal);
    const v = value as Record<string, unknown>;
    const types = Array.isArray(v["@type"]) ? v["@type"] : [v["@type"]];
    return types.some(t => typeof t === "string" && localTypes.test(t.replace(/^https?:\/\/schema.org\//, ""))) || Object.values(v).some(hasLocal);
  };
  const localSchema = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).some(s => { try { return hasLocal(JSON.parse(s.textContent ?? "")); } catch { return false; } });
  const links = Array.from(document.querySelectorAll("a[href]")).slice(0, 500).flatMap(a => { try { return [{ url: new URL(a.getAttribute("href") ?? "", raw.url).href, text: (a.textContent ?? "").trim().slice(0, 250) }]; } catch { return []; } });
  return { url: raw.url, title: document.querySelector("title")?.textContent?.trim() ?? "", description: description.trim(), headings: Array.from(document.querySelectorAll("h1,h2")).map(h => (h.textContent ?? "").trim()).filter(Boolean), links, localSchema, noindex };
}

Deno.serve(async req => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return response({ error: "Use the website form to submit a check." }, 405);
  try {
    if (Number(req.headers.get("content-length") ?? 0) > 10000) return response({ error: "Request too large." }, 400);
    const body = await req.json();
    const db = createClient(Deno.env.get("SUPABASE_URL") ?? "", Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "");
    if (body.action === "email") {
      const lead = emailSchema.parse(body);
      const { data: saved, error } = await db.from("local_search_reports").select("report").eq("id", lead.reportId).single();
      if (error || !saved) return response({ error: "This report is no longer available. Please run a new check." }, 404);
      const { data: row, error: leadError } = await db.from("local_search_report_leads").insert({ report_id: lead.reportId, name: lead.name, email: lead.email, follow_up_consent: lead.followUp, consent_wording: FOLLOW_UP_WORDING, consent_version: CONSENT_VERSION }).select("id").single();
      if (leadError || !row) return response({ error: "We couldn't save your report request. Please try again." }, 500);
      const key = Deno.env.get("RESEND_API_KEY");
      if (!key) { await db.from("local_search_report_leads").update({ email_status: "failed" }).eq("id", row.id); return response({ success: false, saved: true, error: "Your request is saved, but email delivery is not available. You can download the report below." }); }
      const send = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", "Idempotency-Key": `opportunity-report-${row.id}` }, body: JSON.stringify({ from: "YourBestSEO <contact@yourbestseo.com>", to: [lead.email], subject: "Your free Local Search Opportunity Check", text: `Hello ${lead.name},\n\n${reportText(saved.report as Report)}`, reply_to: "chris@yourbestseo.com" }) });
      await db.from("local_search_report_leads").update({ email_status: send.ok ? "sent" : "failed" }).eq("id", row.id);
      if (!send.ok) { console.error("Report email failed", send.status, await send.text()); return response({ success: false, saved: true, error: "Your request is saved, but the email could not be sent. Download the full report below or contact Chris." }); }
      return response({ success: true, saved: true });
    }
    if (body.action !== "check") return response({ error: "Unknown request." }, 400);
    const input = inputSchema.parse(body);
    input.website = normalizeWebsite(input.website);
    if (input.profile) { const profile = new URL(input.profile); if (!/^https?:$/.test(profile.protocol) || profile.username || profile.password || !/(^|\.)(google\.com|google\.[a-z]{2,3}|g\.page|goo\.gl|maps\.app\.goo\.gl)$/.test(profile.hostname)) throw new Error("Enter a Google Maps or Google Business Profile link."); }
    await validatePublic(new URL(input.website));
    let page: Page;
    try { page = pageFrom(await getPublic(input.website)); } catch { page = { url: input.website, title: "", description: "", headings: [], links: [], localSchema: false, noindex: false, unavailable: "The automated request could not read this page. The host may block checks or the connection may be unavailable." }; }
    const robotsUrl = new URL("/robots.txt", page.url).href;
    let robots: string | null = null; let robotsNote = "robots.txt could not be read; crawler access is unverified.";
    try { const r = await getPublic(robotsUrl, 100000); if (r.status === 404) robots = ""; else if (r.status === 200 && !r.text.trim().startsWith("<")) robots = r.text; else robotsNote = `robots.txt returned an unreadable response (HTTP ${r.status}); crawler access is unverified.`; } catch { /* Explicit unknown below. */ }
    const candidates = Array.from(new Set(page.links.filter(l => { try { const u = new URL(l.url); return u.origin === new URL(page.url).origin && u.pathname !== new URL(page.url).pathname && !/\.(pdf|png|jpe?g|zip|gif|webp)$/i.test(u.pathname) && /service|location|area|contact/i.test(`${l.text} ${u.pathname}`) || (u.origin === new URL(page.url).origin && u.pathname !== new URL(page.url).pathname && input.service.toLowerCase().split(/\s+/).some(w => `${l.text} ${u.pathname}`.toLowerCase().includes(w))); } catch { return false; } }).map(l => l.url))).slice(0, 3);
    const pages = await Promise.all(candidates.map(async url => { try { return pageFrom(await getPublic(url)); } catch { return { url, title: "", description: "", headings: [], links: [], localSchema: false, noindex: false, unavailable: "Linked page could not be checked." }; } }));
    const report = buildReport(input, page, robots, pages, robotsNote);
    const { data: saved, error: saveError } = await db.from("local_search_reports").insert({ input, report }).select("id").single();
    if (saveError || !saved) return response({ error: "We couldn't prepare your report. Please try again." }, 500);
    return response({ success: true, reportId: saved.id, report });
  } catch (error) {
    return response({ error: error instanceof z.ZodError ? "Please enter a valid website, service, city, and contact details." : error instanceof Error ? error.message : "The check could not be completed." }, 400);
  }
});