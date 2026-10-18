import BookingScheduler from "@/components/BookingScheduler";
import { useState } from "react";
import { ArrowRight, Download, Loader2, Mail, RotateCcw, Search, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { FOLLOW_UP_WORDING, normalizeWebsite, reportText, type Report } from "@/lib/local-search";

export default function AIAwarenessChecker() {
  const [input, setInput] = useState({ website: "", city: "", service: "", profile: "" });
  const [report, setReport] = useState<Report>();
  const [reportId, setReportId] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [contact, setContact] = useState({ name: "", email: "" });
  const [followUp, setFollowUp] = useState(false);
  const [emailBusy, setEmailBusy] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [emailed, setEmailed] = useState(false);
  const [q, setQ] = useState(0);
  const [knows, setKnows] = useState("");
  const prompts = report?.review?.prompts ?? [];
  const opportunities = report ? [
    ...(report.review?.steps ?? []).map(s => ({ title: s.title, text: s.action })),
    ...report.findings.filter(f => f.status === "opportunity").map(f => ({ title: f.title, text: f.next })),
  ].slice(0, 5) : [];

  async function next(e: React.FormEvent) {
    e.preventDefault(); if (busy) return;
    setError("");
    if (q === 0) { try { normalizeWebsite(input.website); setQ(1); } catch (err) { setError(err instanceof Error ? err.message : "Enter a valid website."); } return; }
    if (q < 3) { setQ(q + 1); return; }
    setBusy(true);
    try {
      const { data, error: requestError } = await supabase.functions.invoke("local-search-check", { body: { action: "check", ...input } });
      if (requestError) { const details = await requestError.context?.json?.().catch(() => null); throw new Error(details?.error ?? "We couldn't complete the check. Please try again."); }
      if (!data?.success || !data.report) throw new Error(data?.error ?? "The check could not be completed.");
      setReport(data.report); setReportId(data.reportId);
      document.getElementById("awareness-checker")?.scrollIntoView({ block: "start" });
      setEmailMessage(""); setEmailed(false);
    } catch (err) { setError(err instanceof Error ? err.message : "The check could not be completed."); }
    finally { setBusy(false); }
  }
  async function email(e: React.FormEvent) {
    e.preventDefault(); if (emailBusy || !reportId) return;
    setEmailBusy(true); setEmailMessage("");
    try {
      const { data, error: requestError } = await supabase.functions.invoke("local-search-check", { body: { action: "email", reportId, ...contact, followUp } });
      if (requestError) throw new Error("We couldn't send your report. You can download it below or try again.");
      if (!data?.success) throw new Error(data?.error ?? "Email delivery could not be confirmed.");
      setEmailed(true); setEmailMessage("Your full report has been sent to your email.");
    } catch (err) { setEmailMessage(err instanceof Error ? err.message : "Email delivery could not be confirmed."); }
    finally { setEmailBusy(false); }
  }
  function download() {
    if (!report) return;
    const url = URL.createObjectURL(new Blob([reportText(report)], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "local-search-opportunity-report.txt"; anchor.click(); URL.revokeObjectURL(url);
  }
  function Progress({ step, total = 3 }: { step: number; total?: number }) {
    return <div className="mb-6"><p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Step {step} of {total}</p><div className="h-1.5 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary transition-all duration-500" style={{ width: `${(step / total) * 100}%` }} /></div></div>;
  }
  return <div className="max-w-3xl mx-auto" id="awareness-checker" style={{ scrollMarginTop: "7rem" }}>
    {!report ? <section className="border border-border rounded-lg bg-card p-6 sm:p-10 min-h-[340px] flex flex-col" aria-label="Check your website">
      <Progress step={q + 1} total={4} />
      <form onSubmit={next} className="flex-1 flex flex-col" key={q}>
        {q === 0 && <><Label htmlFor="check-website" className="font-display text-3xl font-normal leading-tight mb-2">What's your website?</Label><p className="text-muted-foreground mb-6">Just the address—like yourbusiness.com.</p><Input id="check-website" autoFocus inputMode="url" autoComplete="url" placeholder="yourbusiness.com" required maxLength={500} className="h-14 text-lg" value={input.website} onChange={e => setInput(p => ({ ...p, website: e.target.value }))} /></>}
        {q === 1 && <><h2 className="font-display text-3xl leading-tight mb-2">Do you know what customers ask ChatGPT when looking for a business like yours?</h2><p className="text-muted-foreground mb-6">No wrong answers.</p><div className="grid sm:grid-cols-3 gap-3">{["Yes", "Kind of", "No idea"].map(a => <button key={a} type="button" onClick={() => { setKnows(a); setQ(2); }} className={`rounded-lg border p-4 text-lg font-medium transition-colors ${knows === a ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary hover:bg-primary/10"}`}>{a}</button>)}</div></>}
        {q === 2 && <><Label htmlFor="check-service" className="font-display text-3xl font-normal leading-tight mb-2">What kind of business are you?</Label><p className="text-muted-foreground mb-6">Your main service—like dentist, HVAC repair, or roofing.</p><Input id="check-service" autoFocus placeholder="HVAC repair" required minLength={2} maxLength={100} className="h-14 text-lg" value={input.service} onChange={e => setInput(p => ({ ...p, service: e.target.value }))} /></>}
        {q === 3 && <><Label htmlFor="check-city" className="font-display text-3xl font-normal leading-tight mb-2">Where are your customers?</Label><p className="text-muted-foreground mb-6">Your city or service area.</p><Input id="check-city" autoFocus placeholder="San Diego" required minLength={2} maxLength={100} className="h-14 text-lg" value={input.city} disabled={busy} onChange={e => setInput(p => ({ ...p, city: e.target.value }))} /></>}
        {error && <p role="alert" className="text-destructive mt-4">{error}</p>}
        <div className="mt-auto pt-8 flex items-center gap-3">
          {q > 0 && <Button type="button" variant="ghost" disabled={busy} onClick={() => setQ(q - 1)}>Back</Button>}
          {q !== 1 && <Button variant="hero" size="lg" type="submit" className="flex-1 gap-2" disabled={busy}>{busy ? <><Loader2 className="w-5 h-5 animate-spin" />Finding what customers ask AI…</> : q === 3 ? <><Search className="w-5 h-5" />Show my results</> : <>Next<ArrowRight className="w-5 h-5" /></>}</Button>}
        </div>
        {q === 0 && <p className="text-sm text-muted-foreground text-center flex justify-center items-center gap-2 mt-4"><ShieldCheck className="w-4 h-4 shrink-0" />Free. Just 4 quick questions. No contact details needed.</p>}
      </form>
    </section> : <>
      <section aria-label="Your opportunities" className="space-y-8">
        {report.aiError && <p role="alert" className="border border-border p-4 text-sm">{report.aiError}</p>}
        {prompts.length > 0 && <div><p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">{knows === "Yes" ? "Let's see if you were right" : "Here's what customers are likely asking"}</p><h2 className="font-display text-3xl mb-5">10 questions your customers are likely asking AI</h2><ol className="divide-y divide-border border-y border-border">{prompts.map((p, i) => <li key={i} className="flex gap-4 py-3"><span className="text-muted-foreground text-sm w-6 shrink-0 pt-1">{i + 1}</span><span className="text-lg leading-snug">{p}</span></li>)}</ol></div>}
        <div><h2 className="font-display text-3xl mb-2">Your next steps</h2><p className="text-muted-foreground break-words">For {report.website}</p></div>
        <ol className="space-y-4">{opportunities.slice(0, 3).map((o, i) => <li key={i} className="flex gap-4 rounded-lg border border-border bg-card p-5"><span className="w-8 h-8 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">{i + 1}</span><div><h3 className="font-display text-xl mb-1">{o.title}</h3><p className="leading-relaxed text-muted-foreground">{o.text}</p></div></li>)}</ol>
        <p className="text-xs text-muted-foreground">Questions are suggestions based on your business type and area, not measured search counts. Being recommended by AI or ranking higher is not guaranteed.</p>
      </section>
      <section aria-label="Email your free report" className="py-8 border-b border-border">
        <Mail className="w-6 h-6 text-primary mb-3" /><h2 className="font-display text-2xl mb-2">Email me the full report</h2><p className="text-muted-foreground text-sm mb-6">All 10 questions, your opportunities, and the website details for your web person. Free.</p>
        {!emailed && <form onSubmit={email} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5"><div className="space-y-2"><Label htmlFor="report-name">Your name</Label><Input id="report-name" autoComplete="name" required maxLength={100} value={contact.name} disabled={emailBusy} onChange={e => setContact(p => ({ ...p, name: e.target.value }))} /></div><div className="space-y-2"><Label htmlFor="report-email">Email address</Label><Input id="report-email" type="email" autoComplete="email" required maxLength={250} value={contact.email} disabled={emailBusy} onChange={e => setContact(p => ({ ...p, email: e.target.value }))} /></div></div>
          <div className="flex items-start gap-3"><Checkbox id="report-follow-up" checked={followUp} disabled={emailBusy} onCheckedChange={checked => setFollowUp(checked === true)} /><Label htmlFor="report-follow-up" className="text-sm font-normal leading-relaxed">{FOLLOW_UP_WORDING}</Label></div>
          <p className="text-xs text-muted-foreground">We save your request and report to fulfill this request. <Link to="/privacy-policy" className="underline">Privacy Policy</Link></p>
          <Button variant="hero" type="submit" disabled={emailBusy} className="gap-2">{emailBusy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />}Email my free report</Button>
        </form>}
        {emailMessage && <p role="status" className="text-sm mt-4">{emailMessage}</p>}
        <Button variant="ghost" onClick={download} className="gap-2 mt-4"><Download className="w-4 h-4" />Download full report</Button>
      </section>
      <section className="py-8 border-t border-border" aria-label="Book a free call"><h2 className="font-display text-2xl mb-2">Want help with the next step?</h2><p className="text-sm text-muted-foreground mb-6">Pick a phone call or Zoom—a free 30-minute call with Chris about becoming the answer to these questions.</p><BookingScheduler key={emailed ? "known" : "new"} prefill={{ website: report.website, ...(emailed ? contact : {}) }} /></section>
      <Button variant="ghost" className="gap-2" onClick={() => { setReport(undefined); setQ(0); setKnows(""); setError(""); setFollowUp(false); window.scrollTo({ top: 0 }); }}><RotateCcw className="w-4 h-4" />Check another website</Button>
    </>}
  </div>;
}
