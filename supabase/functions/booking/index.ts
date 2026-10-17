import { createClient } from "npm:@supabase/supabase-js@2";
import { BOOKING_DAYS_AHEAD, BOOKING_TIMEZONE, SLOT_MINUTES, generateSlots, isBookableSlot, type BusyRange } from "../_shared/booking-slots.ts";
import { buildSmsConsentEvidence, readSmsConsent } from "../_shared/sms-consent.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_calendar/calendar/v3";
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

async function gcal(path: string, init: RequestInit = {}) {
  const res = await fetch(`${GATEWAY_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${Deno.env.get("LOVABLE_API_KEY")}`,
      "X-Connection-Api-Key": Deno.env.get("GOOGLE_CALENDAR_API_KEY")!,
      "Content-Type": "application/json",
    },
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`Calendar request failed [${res.status}]: ${text}`);
  return JSON.parse(text);
}

async function busyRanges(): Promise<BusyRange[]> {
  const now = new Date();
  const data = await gcal("/freeBusy", {
    method: "POST",
    body: JSON.stringify({ timeMin: now.toISOString(), timeMax: new Date(now.getTime() + (BOOKING_DAYS_AHEAD + 1) * 86400000).toISOString(), timeZone: BOOKING_TIMEZONE, items: [{ id: "primary" }] }),
  });
  return data.calendars?.primary?.busy ?? [];
}

const str = (v: unknown, max = 250) => typeof v === "string" ? v.trim().slice(0, max) : "";
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const esc = (v: string) => v.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

function normalizeWebsite(v: string): string {
  const s = v.trim().replace(/^https?:\/\//i, "").replace(/^www\./i, "").replace(/\/.*$/, "");
  return /^[a-z0-9][a-z0-9.-]*\.[a-z]{2,}$/i.test(s) ? s.toLowerCase() : "";
}

function readLead(body: Record<string, unknown>) {
  const lead = {
    name: str(body.name), email: str(body.email), phone: str(body.phone, 40), business: str(body.business),
    location: str(body.location), website: normalizeWebsite(str(body.website)), service: str(body.service),
    score: typeof body.score === "number" ? Math.max(0, Math.min(100, Math.round(body.score))) : null,
    answers: Array.isArray(body.answers) ? body.answers.slice(0, 10) : null,
  };
  if (!lead.name || !isEmail(lead.email) || lead.phone.replace(/\D/g, "").length < 7 || !lead.website) return null;
  return lead;
}

async function notifyChris(subject: string, lines: string[]) {
  const key = Deno.env.get("RESEND_API_KEY");
  if (!key) return;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: "YourBestSEO <contact@yourbestseo.com>", to: ["chris@yourbestseo.com"], subject, html: lines.map(l => `<p>${esc(l)}</p>`).join("") }),
    });
    if (!res.ok) console.error(`Notification email failed [${res.status}]: ${await res.text()}`);
  } catch (e) { console.error("Notification email error", e); }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const body = await req.json().catch(() => ({}));
    const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

    if (body.action === "slots") {
      return json({ slots: generateSlots(new Date(), await busyRanges()), timezone: BOOKING_TIMEZONE });
    }

    if (body.action === "lead") {
      const lead = readLead(body);
      if (!lead) return json({ error: "Please fill in your name, email, phone, and website." }, 400);
      const { data, error } = await db.from("funnel_leads").insert(lead).select("id").single();
      if (error) throw error;
      await notifyChris(`New AI checker lead: ${lead.name}`, [`Name: ${lead.name}`, `Phone: ${lead.phone}`, `Email: ${lead.email}`, `Website: ${lead.website || "—"}`, `Score: ${lead.score ?? "—"}/100`]);
      return json({ success: true, leadId: data.id });
    }

    if (body.action === "book") {
      const lead = readLead(body);
      const slot = str(body.slot, 40);
      const meetingType = body.meetingType === "zoom" ? "zoom" : "phone";
      let smsConsent: boolean;
      try { smsConsent = readSmsConsent(body.smsConsent, body.smsConsentVersion); }
      catch { return json({ error: "Please review the text message consent and try again." }, 400); }
      if (!lead || !slot || isNaN(Date.parse(slot))) return json({ error: "Missing booking details." }, 400);
      if (!isBookableSlot(slot, new Date(), await busyRanges())) return json({ error: "That time was just taken. Please pick another." }, 409);
      const start = new Date(slot);
      const end = new Date(start.getTime() + SLOT_MINUTES * 60000);
      // Persist server-authored consent evidence before creating the appointment.
      // This records the submitted preference even if calendar creation later fails.
      const { error: consentError } = await db.from("appointment_sms_consents").insert(buildSmsConsentEvidence(smsConsent, lead.phone, lead.email, start.toISOString(), body.smsConsentSource));
      if (consentError) throw consentError;
      const how = meetingType === "zoom" ? "Zoom (Chris will send the link)" : `Phone call — Chris will call ${lead.phone}`;
      await gcal("/calendars/primary/events?sendUpdates=all", {
        method: "POST",
        body: JSON.stringify({
          summary: `Free Google Business Review — ${lead.name}`,
          description: [`Meeting: ${how}`, `Name: ${lead.name}`, `Phone: ${lead.phone}`, `Email: ${lead.email}`, `Website: ${lead.website || "—"}`, `AI awareness score: ${lead.score ?? "—"}/100`, "Booked from yourbestseo.com"].join("\n"),
          start: { dateTime: start.toISOString(), timeZone: BOOKING_TIMEZONE },
          end: { dateTime: end.toISOString(), timeZone: BOOKING_TIMEZONE },
          attendees: [{ email: lead.email, displayName: lead.name }],
          reminders: { useDefault: true },
        }),
      });
      const leadId = str(body.leadId, 40);
      const update = { appointment_at: start.toISOString(), meeting_type: meetingType };
      const { error } = leadId ? await db.from("funnel_leads").update(update).eq("id", leadId) : await db.from("funnel_leads").insert({ ...lead, ...update });
      if (error) console.error("Lead save failed", error);
      const when = start.toLocaleString("en-US", { timeZone: BOOKING_TIMEZONE, dateStyle: "full", timeStyle: "short" });
      await notifyChris(`New meeting booked: ${lead.name} — ${when}`, [`When: ${when} Pacific`, `How: ${how}`, `Name: ${lead.name}`, `Phone: ${lead.phone}`, `Email: ${lead.email}`, `Website: ${lead.website}`]);
      return json({ success: true, start: start.toISOString() });
    }

    return json({ error: "Unknown action" }, 400);
  } catch (e) {
    console.error(e);
    return json({ error: "Something went wrong. Please call (619) 903-6599." }, 500);
  }
});
