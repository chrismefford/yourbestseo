import BookingScheduler from "@/components/BookingScheduler";
import { useState } from "react";
import { ArrowRight, Download, Globe2, Loader2, Mail, RotateCcw, Search, ShieldCheck } from "lucide-react";
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
  const [stage, setStage] = useState<"pick" | "answer" | "results">("pick");
  const [picks, setPicks] = useState<number[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const prompts = report?.review?.prompts ?? [];
  const gaps = picks.filter(i => answers[i] && answers[i] !== "Yes");
  const opportunities = report ? [
    ...gaps.map(i => ({ title: `Answer: "${prompts[i]}"`, text: "Add a clear, plain answer to this on your website—ideally on the page for that service—so AI and Google can match you to it." })),
    ...(report.review?.steps ?? []).map(s => ({ title: s.title, text: s.action })),
    ...report.findings.filter(f => f.status === "opportunity").map(f => ({ title: f.title, text: f.next })),
  ].slice(0, 5) : [];
  function go(next: typeof stage) { setStage(next); document.getElementById("awareness-checker")?.scrollIntoView({ block: "start", behavior: "smooth" }); }

  async function check(e: React.FormEvent) {
    e.preventDefault(); if (busy) return;
    setError("");
    try { normalizeWebsite(input.website); } catch (err) { setError(err instanceof Error ? err.message : "Enter a valid website."); return; }
    setBusy(true);
    try {
      const { data, error: requestError } = await supabase.functions.invoke("local-search-check", { body: { action: "check", ...input } });
      if (requestError) { const details = await requestError.context?.json?.().catch(() => null); throw new Error(details?.error ?? "We couldn't complete the check. Please try again."); }
      if (!data?.success || !data.report) throw new Error(data?.error ?? "The check could not be completed.");
      setReport(data.report); setReportId(data.reportId); setStage("pick"); setPicks([]); setAnswers({});
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
  function Progress({ step }: { step: number }) {
    return <div className="mb-6"><p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Step {step} of 3</p><div className="h-1.5 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary transition-all duration-500" style={{ width: `${step * 33.4}%` }} /></div></div>;
  }
  return <div className="max-w-3xl mx-auto" id="awareness-checker">
    {!report ? <section className="border border-border rounded-lg bg-card p-6 sm:p-8" aria-label="Check your website">
      <div className="flex items-center gap-3 mb-6"><Globe2 className="w-6 h-6 text-primary" /><h2 className="font-display text-2xl">Do you know what customers ask AI about businesses like yours?</h2></div>
      <form onSubmit={check} className="space-y-5">
        <div className="space-y-2"><Label htmlFor="check-website">Website address</Label><Input id="check-website" inputMode="url" autoComplete="url" placeholder="yourbusiness.com" required maxLength={500} value={input.website} disabled={busy} onChange={e => setInput(p => ({ ...p, website: e.target.value }))} /></div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2"><Label htmlFor="check-city">City or service area</Label><Input id="check-city" placeholder="San Diego" required minLength={2} maxLength={100} value={input.city} disabled={busy} onChange={e => setInput(p => ({ ...p, city: e.target.value }))} /></div>
          <div className="space-y-2"><Label htmlFor="check-service">Main service or product</Label><Input id="check-service" placeholder="HVAC repair" required minLength={2} maxLength={100} value={input.service} disabled={busy} onChange={e => setInput(p => ({ ...p, service: e.target.value }))} /></div>
        </div>
        <div className="space-y-2"><Label htmlFor="check-profile">Google Business Profile link <span className="text-muted-foreground font-normal">(optional)</span></Label><Input id="check-profile" type="url" placeholder="https://maps.google.com/…" maxLength={500} value={input.profile} disabled={busy} onChange={e => setInput(p => ({ ...p, profile: e.target.value }))} /><p className="text-xs text-muted-foreground">This check focuses on your website—not an audit of your Google profile.</p></div>
        {error && <p role="alert" className="text-destructive">{error}</p>}
        <Button variant="hero" size="lg" type="submit" className="w-full gap-2" disabled={busy}>{busy ? <><Loader2 className="w-5 h-5 animate-spin" />Finding what customers ask AI…</> : <><Search className="w-5 h-5" />Show me the questions<ArrowRight className="w-5 h-5" /></>}</Button>
        <p className="text-sm text-muted-foreground text-center flex justify-center items-center gap-2"><ShieldCheck className="w-4 h-4 shrink-0" />Free questions. No contact details required.</p>
      </form>
    </section> : stage === "pick" && prompts.length ? <section className="border border-border rounded-lg bg-card p-6 sm:p-8" aria-label="Pick the top questions">
      <Progress step={1} />
      <h2 className="font-display text-3xl mb-2">10 questions your customers are likely asking AI</h2>
      <p className="text-muted-foreground mb-6">Quick test: which <strong className="text-foreground">3</strong> do you think customers ask most before choosing a business like yours?</p>
      <ul className="space-y-3">{prompts.map((q, i) => { const on = picks.includes(i); const n = picks.indexOf(i) + 1; return <li key={i}><button type="button" aria-pressed={on} onClick={() => setPicks(p => on ? p.filter(x => x !== i) : p.length < 3 ? [...p, i] : p)} className={`w-full text-left flex gap-4 items-start rounded-lg border p-4 transition-colors ${on ? "border-primary bg-primary/15" : "border-border hover:border-foreground/40"}`}><span className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-sm font-semibold ${on ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{on ? n : ""}</span><span className="text-lg leading-snug">{q}</span></button></li>; })}</ul>
      <Button variant="hero" size="lg" className="w-full gap-2 mt-6" disabled={picks.length < 3} onClick={() => go("answer")}>{picks.length < 3 ? `Pick ${3 - picks.length} more` : "Next"}<ArrowRight className="w-5 h-5" /></Button>
    </section> : stage === "answer" && prompts.length ? <section className="border border-border rounded-lg bg-card p-6 sm:p-8" aria-label="Does your website answer them">
      <Progress step={2} />
      <h2 className="font-display text-3xl mb-2">Does your website answer these today?</h2>
      <p className="text-muted-foreground mb-6">AI tends to recommend businesses whose websites clearly answer the question. Be honest—this is just for you.</p>
      <div className="space-y-6">{picks.map(i => <div key={i}><p className="text-lg font-medium mb-3">{prompts[i]}</p><div className="grid grid-cols-3 gap-2">{(["Yes", "No", "Not sure"] as const).map(a => <button key={a} type="button" aria-pressed={answers[i] === a} onClick={() => setAnswers(p => ({ ...p, [i]: a }))} className={`rounded-lg border p-3 text-sm font-medium transition-colors ${answers[i] === a ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground/40"}`}>{a}</button>)}</div></div>)}</div>
      <div className="flex gap-3 mt-8"><Button variant="ghost" onClick={() => go("pick")}>Back</Button><Button variant="hero" size="lg" className="flex-1 gap-2" disabled={picks.some(i => !answers[i])} onClick={() => go("results")}>See my opportunities<ArrowRight className="w-5 h-5" /></Button></div>
    </section> : <>
      <section aria-label="Your opportunities" className="space-y-8">
        {prompts.length > 0 && <Progress step={3} />}
        {report.aiError && <p role="alert" className="border border-border p-4 text-sm">{report.aiError}</p>}
        <div><h2 className="font-display text-3xl mb-3">Your opportunities</h2>{gaps.length > 0 ? <p className="text-lg leading-relaxed">You picked 3 top questions—and your website {gaps.length === 3 ? "may not answer any of them" : `may not answer ${gaps.length} of them`}. Those are customers going to someone else.</p> : prompts.length > 0 ? <p className="text-lg leading-relaxed">Nice—you say your website answers your top 3. Here's how to make sure AI and Google notice.</p> : null}<p className="text-xs text-muted-foreground mt-2 break-words">{report.website}</p></div>
        <ol className="space-y-4">{opportunities.map((o, i) => <li key={i} className="flex gap-4 rounded-lg border border-border bg-card p-5"><span className="w-8 h-8 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">{i + 1}</span><div><h3 className="font-display text-xl mb-1">{o.title}</h3><p className="leading-relaxed text-muted-foreground">{o.text}</p></div></li>)}</ol>
        {prompts.length > 0 && <details className="border-t border-border pt-4"><summary className="cursor-pointer font-medium">See all 10 questions</summary><ol className="list-decimal pl-6 mt-3 space-y-2">{prompts.map((q, i) => <li key={i}>{q}</li>)}</ol></details>}
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
      <Button variant="ghost" className="gap-2" onClick={() => { setReport(undefined); setError(""); setFollowUp(false); window.scrollTo({ top: 0 }); }}><RotateCcw className="w-4 h-4" />Check another website</Button>
    </>}
  </div>;
}
