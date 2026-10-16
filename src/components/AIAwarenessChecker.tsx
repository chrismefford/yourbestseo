import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Gift, Loader2, Lock, MapPin, MessageCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import BookingScheduler from "@/components/BookingScheduler";
import { awarenessQuestions, getAwarenessResult, type AwarenessAnswer } from "@/lib/ai-awareness";

const choices = [{ value: "2", label: "Yes" }, { value: "1", label: "Somewhat" }, { value: "0", label: "Not yet" }, { value: "3", label: "Not sure" }];
type Stage = "quiz" | "capture" | "results";
const empty = { name: "", phone: "", email: "", website: "" };

export default function AIAwarenessChecker() {
  const [stage, setStage] = useState<Stage>("quiz");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AwarenessAnswer[]>([]);
  const [details, setDetails] = useState(empty);
  const [leadId, setLeadId] = useState<string>();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const question = awarenessQuestions[step];
  const result = getAwarenessResult(answers);
  const totalSteps = awarenessQuestions.length + 1;
  const reset = () => { setStage("quiz"); setStep(0); setAnswers([]); setError(""); };

  const capture = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending || !result.complete) return;
    setSending(true); setError("");
    const { data, error: err } = await supabase.functions.invoke("booking", { body: { action: "lead", ...details, score: result.score, answers } });
    setSending(false);
    if (err || data?.success !== true) { setError("Something went wrong saving your details. Please try again or call (615) 772-6641."); return; }
    setLeadId(data.leadId);
    setStage("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (stage === "quiz" && question) return <div className="max-w-2xl mx-auto" id="awareness-checker">
    <section className="rounded-lg border border-border bg-card p-6 sm:p-10" aria-label="AI awareness quiz">
      <div className="flex justify-between text-sm text-muted-foreground mb-3"><span>How visible are you on ChatGPT?</span><span>Step {step + 1} of {totalSteps}</span></div>
      <Progress value={step / totalSteps * 100} className="h-1.5 mb-8" />
      <MessageCircle className="h-8 w-8 text-primary mb-5" />
      <h2 className="font-display text-2xl sm:text-3xl leading-snug mb-8">{question.title}</h2>
      <RadioGroup value={answers[step]?.toString() ?? ""} onValueChange={value => {
        if (!["0", "1", "2", "3"].includes(value)) return;
        const next = [...answers]; next[step] = Number(value) as AwarenessAnswer; setAnswers(next);
      }} className="gap-3">
        {choices.map(c => <Label key={c.value} htmlFor={`${question.id}-${c.value}`} className="flex items-center gap-4 border border-border rounded-lg p-4 cursor-pointer has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"><RadioGroupItem id={`${question.id}-${c.value}`} value={c.value} />{c.label}</Label>)}
      </RadioGroup>
      <div className="flex justify-between gap-3 mt-8">
        <Button variant="ghost" disabled={step === 0} onClick={() => setStep(step - 1)}><ArrowLeft className="w-4 h-4 mr-2" />Back</Button>
        <Button variant="hero" disabled={answers[step] === undefined} onClick={() => step === awarenessQuestions.length - 1 ? setStage("capture") : setStep(step + 1)}>Next<ArrowRight className="w-4 h-4 ml-2" /></Button>
      </div>
    </section>
  </div>;

  if (stage === "capture") return <div className="max-w-2xl mx-auto" id="awareness-checker">
    <section className="rounded-lg border border-border bg-card p-6 sm:p-10" aria-label="Unlock your results">
      <div className="flex justify-between text-sm text-muted-foreground mb-3"><span>Almost done</span><span>Step {totalSteps} of {totalSteps}</span></div>
      <Progress value={95} className="h-1.5 mb-8" />
      <Lock className="h-8 w-8 text-primary mb-5" />
      <h2 className="font-display text-2xl sm:text-3xl leading-snug mb-2">Your score is ready.</h2>
      <p className="text-muted-foreground mb-8">Tell us how to reach you to unlock your results and your free Google Business review.</p>
      <form onSubmit={capture} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">{([
          ["name", "Your name", "text", true], ["phone", "Phone number", "tel", true], ["email", "Email", "email", true], ["website", "Website", "text", true],
        ] as const).map(([k, label, type, required]) => <div key={k} className="space-y-2"><Label htmlFor={`lead-${k}`}>{label}{required ? " *" : ""}</Label><Input id={`lead-${k}`} type={type} inputMode={k === "website" ? "url" : undefined} required={required} maxLength={250} value={details[k]} disabled={sending} placeholder={k === "website" ? "yourbusiness.com" : undefined} onChange={e => setDetails(p => ({ ...p, [k]: e.target.value }))} /></div>)}</div>
        {error && <p role="alert" className="text-destructive">{error}</p>}
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-3">
          <Button type="button" variant="ghost" onClick={() => setStage("quiz")}><ArrowLeft className="w-4 h-4 mr-2" />Back</Button>
          <Button type="submit" variant="hero" size="lg" disabled={sending}>{sending ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Unlocking…</> : <>Show my results<ArrowRight className="w-4 h-4 ml-2" /></>}</Button>
        </div>
        <p className="text-xs text-muted-foreground">No spam. Chris may call or email you about your results.</p>
      </form>
    </section>
  </div>;

  return <div className="max-w-2xl mx-auto" id="awareness-checker">
    <section aria-label="Your results">
      <div className="text-center pb-8 border-b border-border">
        <p className="text-muted-foreground mb-2">{details.name.split(" ")[0]}, here's where your business stands</p>
        <span className="text-primary font-display text-6xl font-bold">{result.score}<span className="text-xl text-muted-foreground"> / 100</span></span>
        <h2 className="font-display text-3xl mt-4 mb-3">{result.label}</h2>
        <p className="text-sm text-muted-foreground">Based on your answers — a starting point, not a live scan of ChatGPT.</p>
      </div>
      <div className="py-8 space-y-6">
        {awarenessQuestions.map((item, i) => <div key={item.id} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-1" /><div><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.tip}</p><p className="text-xs text-primary mt-2">Your answer: {choices.find(c => c.value === String(answers[i]))?.label}</p></div></div>)}
      </div>
    </section>

    <section className="rounded-xl border-2 border-primary bg-card p-6 sm:p-10" aria-label="Your free offer">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary px-3 py-1 text-sm font-medium mb-4"><Gift className="h-4 w-4" />Your free bonus</div>
      <h2 className="font-display text-3xl mb-3">Free Google Business Profile Review</h2>
      <p className="text-muted-foreground mb-4">A 30-minute call with Chris. We'll look at your Google Maps listing, what ChatGPT says about your business, and the 3 fastest fixes to get more calls.</p>
      <ul className="space-y-2 mb-8 text-sm">
        {["Where you rank in Google Maps today", "What AI tools say when customers ask about you", "A simple plan to get more appointments"].map(t => <li key={t} className="flex gap-2"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />{t}</li>)}
      </ul>
      <BookingScheduler contact={details} leadId={leadId} score={result.score} answers={answers} />
    </section>
    <Button variant="ghost" className="mt-6" onClick={reset}><RotateCcw className="h-4 w-4 mr-2" />Retake quiz</Button>
  </div>;
}
