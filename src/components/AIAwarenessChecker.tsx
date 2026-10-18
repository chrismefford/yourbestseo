import BookingScheduler from "@/components/BookingScheduler";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Loader2, RotateCcw, Search, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { FOLLOW_UP_WORDING, normalizeWebsite, reportText, type Report } from "@/lib/local-search";

const FACTS = [
  { q: "91% of people search online before visiting a local business.", a: "If they can't find you—or what they find is unclear—they pick someone else.", src: "https://145692682.fs1.hubspotusercontent-eu1.net/hubfs/145692682/Assets%202025/EN/Consumer%20Report%20%7C%20The%20Lowdown%20on%20Local%20Search.pdf" },
  { q: "AI tools are now the 4th most-used way people find local businesses.", a: "ChatGPT, Gemini, and others are already part of how customers choose.", src: "https://145692682.fs1.hubspotusercontent-eu1.net/hubfs/145692682/Assets%202025/EN/Consumer%20Report%20%7C%20The%20Lowdown%20on%20Local%20Search.pdf" },
  { q: "About 1 in 5 Americans now prefer ChatGPT for finding nearby businesses.", a: "In a 2025 survey of 1,151 U.S. adults, 21.9% picked ChatGPT as their go-to—Google Search was 31.7%.", src: "https://drugstorenews.com/how-are-americans-using-ai-find-local-businesses" },
  { q: "85% of people visit a business within a week of finding it online.", a: "Being found is the difference between a booked appointment and a missed one.", src: "https://145692682.fs1.hubspotusercontent-eu1.net/hubfs/145692682/Assets%202025/EN/Consumer%20Report%20%7C%20The%20Lowdown%20on%20Local%20Search.pdf" },
  { q: "48% of customers walked away because prices were unclear online.", a: "Answering the questions people actually ask—like cost—keeps them from leaving.", src: "https://145692682.fs1.hubspotusercontent-eu1.net/hubfs/145692682/Assets%202025/EN/Consumer%20Report%20%7C%20The%20Lowdown%20on%20Local%20Search.pdf" },
];

export default function AIAwarenessChecker() {
  const [input, setInput] = useState({ website: "", city: "", service: "", profile: "" });
  const [report, setReport] = useState<Report>();
  const [reportId, setReportId] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [gated, setGated] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  const [ask, setAsk] = useState(0);
  const [fact, setFact] = useState(0);
  const sent = useRef("");
  const [followUp, setFollowUp] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [emailed, setEmailed] = useState(false);
  const [q, setQ] = useState(0);
  const [knows, setKnows] = useState("");
  const [pct, setPct] = useState(0);
  const [guess, setGuess] = useState<number[]>([]);
  const prompts = report?.review?.prompts ?? [];
  const seven = prompts.slice(0, 7);
  const order = useMemo(() => seven.map((_, i) => i).map(i => [Math.random(), i]).sort((a, b) => a[0] - b[0]).map(x => x[1]), [report]); // eslint-disable-line react-hooks/exhaustive-deps
  const hits = guess.filter(i => i < 3).length;
  useEffect(() => {
    if (!busy) { setPct(0); return; }
    const t = setInterval(() => setPct(p => Math.min(95, p + (95 - p) * 0.012)), 400);
    return () => clearInterval(t);
  }, [busy]);
  useEffect(() => { if (!busy && !report) return; const t = setInterval(() => setFact(f => (f + 1) % FACTS.length), 7000); return () => clearInterval(t); }, [busy, report]);
  useEffect(() => {
    if (!report || !gated || !reportId || sent.current === reportId) return;
    sent.current = reportId;
    supabase.functions.invoke("local-search-check", { body: { action: "email", reportId, ...contact, followUp } }).then(({ data }) => {
      setEmailed(!!data?.success); setEmailMessage(data?.success ? "We've emailed your full report." : "Your results are saved. Email delivery isn't available right now—download your report below.");
    });
  }, [report, gated, reportId]); // eslint-disable-line react-hooks/exhaustive-deps
  const phase = pct < 25 ? "Reading your website…" : pct < 55 ? "Searching what customers ask about your business…" : pct < 80 ? "Ranking the most likely questions…" : "Almost done…";

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
      setReport(data.report); setReportId(data.reportId); setGuess([]); setGateOpen(false);
      document.getElementById("awareness-checker")?.scrollIntoView({ block: "start" });
      setEmailMessage(""); setEmailed(false);
    } catch (err) { setError(err instanceof Error ? err.message : "The check could not be completed."); }
    finally { setBusy(false); }
  }
  function download() {
    if (!report) return;
    const url = URL.createObjectURL(new Blob([reportText(report)], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "local-search-opportunity-report.txt"; anchor.click(); URL.revokeObjectURL(url);
  }
  function Progress({ step, total = 3 }: { step: number; total?: number }) {
    return <div className="mb-6"><p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Step {step} of {total}</p><div className="h-1.5 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary transition-all duration-500" style={{ width: `${(step / total) * 100}%` }} /></div></div>;
  }
  const GateForm = <form onSubmit={e => { e.preventDefault(); setGated(true); document.getElementById("awareness-checker")?.scrollIntoView({ block: "start", behavior: "smooth" }); }} className="space-y-5">
    <div><h2 className="font-display text-2xl mb-1">Where should we send your results?</h2><p className="text-sm text-muted-foreground">You'll see them right away, plus a copy by email.</p></div>
    <div className="space-y-2"><Label htmlFor="gate-name">Your name</Label><Input id="gate-name" autoComplete="name" required maxLength={100} value={contact.name} onChange={e => setContact(p => ({ ...p, name: e.target.value }))} /></div>
    <div className="grid sm:grid-cols-2 gap-5"><div className="space-y-2"><Label htmlFor="gate-email">Email</Label><Input id="gate-email" type="email" autoComplete="email" required maxLength={250} value={contact.email} onChange={e => setContact(p => ({ ...p, email: e.target.value }))} /></div><div className="space-y-2"><Label htmlFor="gate-phone">Phone</Label><Input id="gate-phone" type="tel" autoComplete="tel" required pattern="[0-9+().\s-]{7,25}" maxLength={25} value={contact.phone} onChange={e => setContact(p => ({ ...p, phone: e.target.value }))} /></div></div>
    <div className="flex items-start gap-3"><Checkbox id="report-follow-up" checked={followUp} onCheckedChange={checked => setFollowUp(checked === true)} /><Label htmlFor="report-follow-up" className="text-sm font-normal leading-relaxed">{FOLLOW_UP_WORDING}</Label></div>
    <p className="text-xs text-muted-foreground">We save your details and report to deliver your results. We won't text you. <Link to="/privacy-policy" className="underline">Privacy Policy</Link></p>
    <Button variant="hero" size="lg" type="submit" className="w-full gap-2">Show my results<ArrowRight className="w-5 h-5" /></Button>
  </form>;
  return <div className="max-w-3xl mx-auto" id="awareness-checker" style={{ scrollMarginTop: "7rem" }}>
    {busy && !report ? <section className="border border-border rounded-lg bg-card p-6 sm:p-10 space-y-8" aria-label="Finding your questions">
      <div role="status"><div className="flex justify-between text-sm mb-2"><span className="font-medium">{phase}</span><span className="tabular-nums">{Math.round(pct)}%</span></div><div className="h-3 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary transition-all duration-500" style={{ width: `${pct}%` }} /></div><p className="text-xs text-muted-foreground mt-2">This usually takes about a minute—we're doing a real search.</p></div>
      <div className="rounded-lg bg-muted p-6 min-h-[170px]" key={fact}>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Did you know?</p>
        <p className="font-display text-2xl leading-snug mb-3">{FACTS[fact].q}</p>
        <p className="text-muted-foreground">{FACTS[fact].a} <a href={FACTS[fact].src} target="_blank" rel="noopener noreferrer" className="underline text-xs whitespace-nowrap">Source</a></p>
        <div className="flex gap-1.5 mt-4">{FACTS.map((_, i) => <button key={i} type="button" aria-label={`Fact ${i + 1}`} onClick={() => setFact(i)} className={`h-1.5 rounded-full transition-all ${i === fact ? "w-6 bg-primary" : "w-1.5 bg-border"}`} />)}</div>
      </div>
    </section> : !report ? <section className="border border-border rounded-lg bg-card p-6 sm:p-10 min-h-[340px] flex flex-col" aria-label="Check your website">
      <Progress step={q + 1} total={4} />
      <form onSubmit={next} className="flex-1 flex flex-col" key={q}>
        {q === 0 && <><Label htmlFor="check-website" className="font-display text-3xl font-normal leading-tight mb-2">What's your website?</Label><p className="text-muted-foreground mb-6">Just the address—like yourbusiness.com.</p><Input id="check-website" autoFocus inputMode="url" autoComplete="url" placeholder="yourbusiness.com" required maxLength={500} className="h-14 text-lg" value={input.website} onChange={e => setInput(p => ({ ...p, website: e.target.value }))} /></>}
        {q === 1 && <><h2 className="font-display text-3xl leading-tight mb-2">Do you know the top 3 prompts people search in AI for your business or service?</h2><p className="text-muted-foreground mb-6">Be honest—we're about to test you.</p><div className="grid grid-cols-2 gap-3">{["Yes", "No"].map(a => <button key={a} type="button" onClick={() => { setKnows(a); setQ(2); }} className={`rounded-lg border p-4 text-lg font-medium transition-colors ${knows === a ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary hover:bg-primary/10"}`}>{a}</button>)}</div></>}
        {q === 2 && <><Label htmlFor="check-service" className="font-display text-3xl font-normal leading-tight mb-2">What kind of business are you?</Label><p className="text-muted-foreground mb-6">Your main service—like dentist, HVAC repair, or roofing.</p><Input id="check-service" autoFocus placeholder="HVAC repair" required minLength={2} maxLength={100} className="h-14 text-lg" value={input.service} onChange={e => setInput(p => ({ ...p, service: e.target.value }))} /></>}
        {q === 3 && <><Label htmlFor="check-city" className="font-display text-3xl font-normal leading-tight mb-2">Where are your customers?</Label><p className="text-muted-foreground mb-6">Your city or service area.</p><Input id="check-city" autoFocus placeholder="San Diego" required minLength={2} maxLength={100} className="h-14 text-lg" value={input.city} disabled={busy} onChange={e => setInput(p => ({ ...p, city: e.target.value }))} /></>}
        {error && <p role="alert" className="text-destructive mt-4">{error}</p>}
        <div className="mt-auto pt-8 flex items-center gap-3">
          {q > 0 && <Button type="button" variant="ghost" disabled={busy} onClick={() => setQ(q - 1)}>Back</Button>}
          {q !== 1 && <Button variant="hero" size="lg" type="submit" className="flex-1 gap-2" disabled={busy}>{busy ? <><Loader2 className="w-5 h-5 animate-spin" />Finding what customers ask AI…</> : q === 3 ? <><Search className="w-5 h-5" />Show my results</> : <>Next<ArrowRight className="w-5 h-5" /></>}</Button>}
        </div>
        {q === 0 && <p className="text-sm text-muted-foreground text-center flex justify-center items-center gap-2 mt-4"><ShieldCheck className="w-4 h-4 shrink-0" />Free. Just 4 quick questions. No contact details needed.</p>}
      </form>
    </section> : !gated ? (seven.length === 7 && !gateOpen ? <section className="border border-border rounded-lg bg-card p-6 sm:p-10" aria-label="Guess the top questions">
      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Quick quiz</p>
      <h2 className="font-display text-3xl leading-tight mb-2">Which 3 of these do you think customers ask most?</h2>
      <p className="text-muted-foreground mb-6">Here are 7 questions people likely ask AI about a {input.service} in {input.city}. Tap your top 3.</p>
      <ul className="space-y-3">{order.map(i => { const on = guess.includes(i); return <li key={i}><button type="button" aria-pressed={on} onClick={() => setGuess(g => on ? g.filter(x => x !== i) : g.length < 3 ? [...g, i] : g)} className={`w-full text-left flex gap-4 items-center rounded-lg border p-4 transition-colors ${on ? "border-primary bg-primary/15" : "border-border hover:border-foreground/40"}`}><span className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-sm font-semibold ${on ? "bg-primary text-primary-foreground" : "bg-muted"}`}>{on ? guess.indexOf(i) + 1 : ""}</span><span className="text-lg leading-snug">{seven[i]}</span></button></li>; })}</ul>
      <Button variant="hero" size="lg" className="w-full gap-2 mt-6" disabled={guess.length < 3} onClick={() => { setGateOpen(true); document.getElementById("awareness-checker")?.scrollIntoView({ block: "start", behavior: "smooth" }); }}>{guess.length < 3 ? `Pick ${3 - guess.length} more` : "See how I did"}<ArrowRight className="w-5 h-5" /></Button>
    </section> : <section className="border border-border rounded-lg bg-card p-6 sm:p-10" aria-label="Get your results">{GateForm}</section>) : <>
      {report.aiError && <p role="alert" className="border border-border p-4 text-sm mb-6">{report.aiError}</p>}
      <section className="space-y-8" aria-label="Your results" id="awareness-yes" style={{ scrollMarginTop: "7rem" }}>
        {seven.length === 7 && <div className="border border-border rounded-lg bg-card p-6 sm:p-10 text-center">
          <p className="font-display text-6xl mb-2">{hits}/3</p>
          <h2 className="font-display text-3xl mb-3">{hits === 3 ? "Wow—you nailed it." : hits === 2 ? "Close! You got 2 of 3." : hits === 1 ? "You got 1 of 3." : "None this time."}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{hits === 3 ? "You know your customers. Now the question is whether AI knows to send them to you." : "Most owners miss these. Customers are asking questions you might not expect—and AI sends them to whoever answers best."}</p>
          <ol className="text-left mt-8 space-y-3 max-w-xl mx-auto">{[0, 1, 2].map(i => <li key={i} className="flex gap-3 items-start"><span className="w-7 h-7 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">{i + 1}</span><span className="text-lg leading-snug">{seven[i]} {guess.includes(i) ? <span className="text-sm font-medium whitespace-nowrap">✓ you got it</span> : <span className="text-sm text-muted-foreground whitespace-nowrap">— missed</span>}</span></li>)}</ol>
          <p className="text-xs text-muted-foreground mt-6">Ranking is our AI's estimate from a live web search for your business type and area—not exact search counts.</p>
        </div>}
        {ask < 2 && ask >= 0 && <div className="rounded-lg bg-primary text-primary-foreground p-6 sm:p-10 text-center" key={ask}>
          {ask === 0 ? <><h2 className="font-display text-3xl mb-6">Want to know if AI is recommending you—or your competitors?</h2></> : <><h2 className="font-display text-3xl mb-3">Would you like a free full audit?</h2><p className="text-lg leading-relaxed mb-6 max-w-xl mx-auto">Chris will show you exactly how to improve your website, your search results, and how many visitors turn into customers.</p></>}
          <div className="flex justify-center gap-3"><button type="button" onClick={() => { setAsk(ask + 1); if (ask === 1) setTimeout(() => document.getElementById("book-call")?.scrollIntoView({ block: "start", behavior: "smooth" }), 50); }} className="min-w-28 rounded-md bg-foreground text-background px-8 py-3 text-lg font-semibold">Yes</button><button type="button" onClick={() => setAsk(-1)} className="min-w-28 rounded-md border-2 border-foreground px-8 py-3 text-lg font-semibold">No</button></div>
        </div>}
        {ask === -1 && <div className="rounded-lg border border-border p-6 text-center"><p className="mb-3">No problem. If you change your mind, Chris is happy to walk you through it.</p><button type="button" className="underline font-medium" onClick={() => setAsk(1)}>Actually, I'd like the free audit</button> <span className="text-muted-foreground">·</span> <button type="button" className="underline text-muted-foreground" onClick={download}>Download my questions</button></div>}
        {ask >= 1 && <div className="flex flex-col sm:flex-row gap-6 items-start border border-border rounded-lg p-6 sm:p-8">
          <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-3xl shrink-0" aria-hidden="true">CM</div>
          <div><h3 className="font-display text-2xl mb-2">Who you'll talk to: Chris Mefford</h3><p className="leading-relaxed text-muted-foreground">Chris has spent 20 years in marketing, wrote a best-selling book, and ran one of the largest websites in the world—1.2 billion pages. Today he helps local businesses get found on Google Maps and recommended by AI tools like ChatGPT, so more searches turn into booked appointments.</p></div>
        </div>}
      </section>
      {ask === 2 && <section id="book-call" style={{ scrollMarginTop: "7rem" }} className="py-8" aria-label="Book a free call"><h2 className="font-display text-3xl mb-2">Great—pick a time for your free audit</h2><p className="text-muted-foreground mb-6">Phone or Zoom, 30 minutes. Chris will go over your full report with you.</p><BookingScheduler prefill={{ website: report.website, ...contact }} /></section>}
      <Button variant="ghost" className="gap-2" onClick={() => { setReport(undefined); setAsk(0); setGated(false); setGateOpen(false); setGuess([]); setQ(0); setKnows(""); setError(""); setFollowUp(false); window.scrollTo({ top: 0 }); }}><RotateCcw className="w-4 h-4" />Check another website</Button>
    </>}
  </div>;
}
