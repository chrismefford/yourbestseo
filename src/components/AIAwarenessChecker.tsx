import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, MessageCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { awarenessQuestions, buildReviewMessage, getAwarenessResult, type AwarenessAnswer, type ReviewDetails } from "@/lib/ai-awareness";

const choices = [{ value: "2", label: "Yes" }, { value: "1", label: "Somewhat" }, { value: "0", label: "Not yet" }];

export default function AIAwarenessChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AwarenessAnswer[]>([]);
  const [showReview, setShowReview] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const [details, setDetails] = useState<ReviewDetails>({ name: "", email: "", business: "", location: "", website: "", service: "" });
  const question = awarenessQuestions[step];
  const result = getAwarenessResult(answers);
  const reset = () => { setStep(0); setAnswers([]); setShowReview(false); setStatus("idle"); setError(""); };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "sending" || !result.complete) return;
    setError(""); setStatus("sending");
    try {
      const { data, error: requestError } = await supabase.functions.invoke("send-contact-email", { body: { name: details.name.trim(), email: details.email.trim(), message: buildReviewMessage(details, answers) } });
      if (requestError || data?.success !== true) throw new Error("Request failed");
      setStatus("sent");
      localStorage.setItem("exitPopupConverted", "true");
    } catch {
      setStatus("idle");
      setError("Your request couldn't be sent. Please try again or email chris@yourbestseo.com.");
    }
  };

  return <div className="max-w-2xl mx-auto" id="awareness-checker">
    {question ? <section className="rounded-lg border border-border bg-card p-6 sm:p-10" aria-label="AI awareness quiz">
      <div className="flex justify-between text-sm text-muted-foreground mb-3"><span>AI awareness</span><span>Question {step + 1} of {awarenessQuestions.length}</span></div>
      <Progress value={step / awarenessQuestions.length * 100} className="h-1.5 mb-8" />
      <MessageCircle className="h-8 w-8 text-primary mb-5" />
      <h2 className="font-display text-2xl sm:text-3xl leading-snug mb-8">{question.title}</h2>
      <RadioGroup value={answers[step]?.toString() ?? ""} onValueChange={value => {
        if (value !== "0" && value !== "1" && value !== "2") return;
        const next = [...answers]; next[step] = Number(value) as AwarenessAnswer; setAnswers(next);
      }} className="gap-3">
        {choices.map(choice => <Label key={choice.value} htmlFor={`${question.id}-${choice.value}`} className="flex items-center gap-4 border border-border rounded-lg p-4 cursor-pointer has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5"><RadioGroupItem id={`${question.id}-${choice.value}`} value={choice.value} />{choice.label}</Label>)}
      </RadioGroup>
      <div className="flex justify-between gap-3 mt-8">
        <Button variant="ghost" disabled={step === 0} onClick={() => setStep(step - 1)}><ArrowLeft className="w-4 h-4 mr-2" />Back</Button>
        <Button variant="hero" disabled={answers[step] === undefined} onClick={() => setStep(step + 1)}>{step === awarenessQuestions.length - 1 ? "See my results" : "Next"}<ArrowRight className="w-4 h-4 ml-2" /></Button>
      </div>
    </section> : <section aria-label="Your awareness results">
      <div className="text-center pb-8 border-b border-border">
        <span className="text-primary font-display text-6xl font-bold">{result.score}<span className="text-xl text-muted-foreground"> / 100</span></span>
        <h2 className="font-display text-3xl mt-4 mb-3">{result.label}</h2>
        <p className="text-muted-foreground">This is your self-reported AI awareness—not a scan of ChatGPT or a measurement of your business's visibility.</p>
      </div>
      <div className="py-8 space-y-6">
        {awarenessQuestions.map((item, index) => <div key={item.id} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-1" /><div><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.tip}</p><p className="text-xs text-primary mt-2">Your answer: {choices.find(choice => choice.value === String(answers[index]))?.label}</p></div></div>)}
      </div>
      {status === "sent" ? <div role="status" className="border-t border-border pt-8 text-center"><CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-4" /><h3 className="font-display text-2xl mb-3">Your review request is sent.</h3><p className="text-muted-foreground">We'll follow up at {details.email} about {details.business}. Your review will be personalized, not an instant automated report.</p></div> : <div className="border-t border-border pt-8">
        <h3 className="font-display text-2xl mb-3">Now, what about your business?</h3>
        <p className="text-muted-foreground mb-6">Request a free personalized review of your AI visibility, the prompts customers might use, and topics worth investigating. No obligation.</p>
        {!showReview ? <Button variant="hero" size="lg" onClick={() => setShowReview(true)}>Request my business visibility review<ArrowRight className="h-4 w-4 ml-2" /></Button> : <form onSubmit={submit} className="space-y-5" aria-label="Business visibility review request">
          <div className="grid sm:grid-cols-2 gap-5">{([
            ["name", "Your name", "text", true], ["email", "Email address", "email", true], ["business", "Business name", "text", true], ["location", "City / service area", "text", true], ["service", "Main service or business type", "text", true], ["website", "Website (optional)", "url", false],
          ] as const).map(([key, label, type, required]) => <div key={key} className="space-y-2"><Label htmlFor={`review-${key}`}>{label}{required ? " *" : ""}</Label><Input id={`review-${key}`} type={type} required={required} maxLength={250} value={details[key]} disabled={status === "sending"} placeholder={key === "website" ? "https://yourbusiness.com" : undefined} onChange={event => setDetails(prev => ({ ...prev, [key]: event.target.value }))} /></div>)}</div>
          <p className="text-xs text-muted-foreground">By submitting, you agree to an email follow-up about this review. Your quiz answers will be included.</p>
          {error && <p role="alert" className="text-destructive">{error}</p>}
          <Button type="submit" variant="hero" size="lg" className="w-full whitespace-normal h-auto min-h-12" disabled={status === "sending"}>{status === "sending" ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending…</> : <>Send my free review request<ArrowRight className="w-4 h-4 ml-2" /></>}</Button>
        </form>}
      </div>}
      <Button variant="ghost" className="mt-6" onClick={reset}><RotateCcw className="h-4 w-4 mr-2" />Retake quiz</Button>
    </section>}
  </div>;
}