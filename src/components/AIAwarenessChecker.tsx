import { useState } from "react";
import { ArrowRight, CheckCircle2, Download, Globe2, Loader2, Mail, RotateCcw, Search, ShieldCheck } from "lucide-react";
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

  async function check(e: React.FormEvent) {
    e.preventDefault(); if (busy) return;
    setError("");
    try { normalizeWebsite(input.website); } catch (err) { setError(err instanceof Error ? err.message : "Enter a valid website."); return; }
    setBusy(true);
    try {
      const { data, error: requestError } = await supabase.functions.invoke("local-search-check", { body: { action: "check", ...input } });
      if (requestError) { const details = await requestError.context?.json?.().catch(() => null); throw new Error(details?.error ?? "We couldn't complete the check. Please try again."); }
      if (!data?.success || !data.report) throw new Error(data?.error ?? "The check could not be completed.");
      setReport(data.report); setReportId(data.reportId);
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
  return <div className="max-w-3xl mx-auto" id="awareness-checker">
    {!report ? <section className="border border-border rounded-lg bg-card p-6 sm:p-8" aria-label="Check your website">
      <div className="flex items-center gap-3 mb-6"><Globe2 className="w-6 h-6 text-primary" /><h2 className="font-display text-2xl">Start with your business</h2></div>
      <form onSubmit={check} className="space-y-5">
        <div className="space-y-2"><Label htmlFor="check-website">Website address</Label><Input id="check-website" inputMode="url" autoComplete="url" placeholder="yourbusiness.com" required maxLength={500} value={input.website} disabled={busy} onChange={e => setInput(p => ({ ...p, website: e.target.value }))} /></div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2"><Label htmlFor="check-city">City or service area</Label><Input id="check-city" placeholder="San Diego" required minLength={2} maxLength={100} value={input.city} disabled={busy} onChange={e => setInput(p => ({ ...p, city: e.target.value }))} /></div>
          <div className="space-y-2"><Label htmlFor="check-service">Main service or product</Label><Input id="check-service" placeholder="HVAC repair" required minLength={2} maxLength={100} value={input.service} disabled={busy} onChange={e => setInput(p => ({ ...p, service: e.target.value }))} /></div>
        </div>
        <div className="space-y-2"><Label htmlFor="check-profile">Google Business Profile link <span className="text-muted-foreground font-normal">(optional)</span></Label><Input id="check-profile" type="url" placeholder="https://maps.google.com/…" maxLength={500} value={input.profile} disabled={busy} onChange={e => setInput(p => ({ ...p, profile: e.target.value }))} /><p className="text-xs text-muted-foreground">This check focuses on your website—not an audit of your Google profile.</p></div>
        {error && <p role="alert" className="text-destructive">{error}</p>}
        <Button variant="hero" size="lg" type="submit" className="w-full gap-2" disabled={busy}>{busy ? <><Loader2 className="w-5 h-5 animate-spin" />Checking public pages…</> : <><Search className="w-5 h-5" />Find my opportunities<ArrowRight className="w-5 h-5" /></>}</Button>
        <p className="text-sm text-muted-foreground text-center flex justify-center items-center gap-2"><ShieldCheck className="w-4 h-4 shrink-0" />Free findings first. No contact details required.</p>
      </form>
    </section> : <>
      <section aria-label="Your website findings" className="space-y-6">
        <div className="border-b border-border pb-6"><p className="text-primary text-sm flex items-center gap-2 mb-3"><CheckCircle2 className="w-4 h-4" />Your website check</p><h2 className="font-display text-3xl mb-3">Your starting point</h2><p className="leading-relaxed">{report.summary}</p><p className="text-xs text-muted-foreground mt-4 break-words">{report.website} · Checked {new Date(report.checkedAt).toLocaleDateString()}</p></div>
        <ol className="space-y-4">{report.findings.map((finding, i) => <li key={finding.id} className="border border-border bg-card rounded-lg p-5 sm:p-6">
          <div className="flex justify-between items-start gap-3 mb-3"><h3 className="font-display text-xl"><span className="text-primary mr-2">0{i + 1}</span>{finding.title}</h3><span className="text-xs text-muted-foreground shrink-0">{finding.status === "unknown" ? "Not verified" : finding.status === "opportunity" ? "Opportunity" : "Observed"}</span></div>
          <p className="leading-relaxed">{finding.found}</p><p className="text-sm text-muted-foreground mt-3"><strong className="text-foreground">Why it matters: </strong>{finding.why}</p><p className="text-sm mt-3"><strong className="text-primary">Next step: </strong>{finding.next}</p>
          <a href={finding.evidence} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground underline break-all inline-block mt-4">Checked source</a>
        </li>)}</ol>
        <div className="border-y border-border py-5"><h3 className="font-semibold mb-2">AI search readiness</h3><p className="text-sm text-muted-foreground">{report.checks.find(c => c.id === "ai")?.found}</p><p className="text-xs text-muted-foreground mt-3">{report.scope}</p></div>
      </section>
      <section aria-label="Email your free report" className="py-8 border-b border-border">
        <Mail className="w-6 h-6 text-primary mb-3" /><h2 className="font-display text-2xl mb-2">Email me the full report</h2><p className="text-muted-foreground text-sm mb-6">Free. Includes every completed check, what couldn't be verified, and practical next steps.</p>
        {!emailed && <form onSubmit={email} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5"><div className="space-y-2"><Label htmlFor="report-name">Your name</Label><Input id="report-name" autoComplete="name" required maxLength={100} value={contact.name} disabled={emailBusy} onChange={e => setContact(p => ({ ...p, name: e.target.value }))} /></div><div className="space-y-2"><Label htmlFor="report-email">Email address</Label><Input id="report-email" type="email" autoComplete="email" required maxLength={250} value={contact.email} disabled={emailBusy} onChange={e => setContact(p => ({ ...p, email: e.target.value }))} /></div></div>
          <div className="flex items-start gap-3"><Checkbox id="report-follow-up" checked={followUp} disabled={emailBusy} onCheckedChange={checked => setFollowUp(checked === true)} /><Label htmlFor="report-follow-up" className="text-sm font-normal leading-relaxed">{FOLLOW_UP_WORDING}</Label></div>
          <p className="text-xs text-muted-foreground">We save your request and report to fulfill this request. <Link to="/privacy-policy" className="underline">Privacy Policy</Link></p>
          <Button variant="hero" type="submit" disabled={emailBusy} className="gap-2">{emailBusy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />}Email my free report</Button>
        </form>}
        {emailMessage && <p role="status" className="text-sm mt-4">{emailMessage}</p>}
        <Button variant="ghost" onClick={download} className="gap-2 mt-4"><Download className="w-4 h-4" />Download full report</Button>
      </section>
      <section className="py-8"><h2 className="font-display text-2xl mb-2">Want help with the next step?</h2><p className="text-sm text-muted-foreground mb-5">Talk through your findings with Chris on a free 30-minute call.</p><Button variant="hero" asChild className="gap-2"><Link to="/book">Book a free call<ArrowRight className="w-4 h-4" /></Link></Button></section>
      <Button variant="ghost" className="gap-2" onClick={() => { setReport(undefined); setError(""); setFollowUp(false); }}><RotateCcw className="w-4 h-4" />Check another website</Button>
    </>}
  </div>;
}
