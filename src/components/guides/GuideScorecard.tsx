import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GUIDE_SCORECARDS, SCORECARD_TIERS, tierForScore } from "@/data/guide-scorecards";
import { trackEvent } from "@/lib/analytics";

type Phase = "intro" | "quiz" | "result";

/**
 * Per-guide readiness funnel: three quick one-question-at-a-time self-checks,
 * an instant tier diagnosis, and a bridge into the free audit call.
 * Answers persist in localStorage so the funnel doesn't nag on repeat visits.
 */
export function GuideScorecard({ slug }: { slug: string }) {
  const card = GUIDE_SCORECARDS[slug];
  const storageKey = `guide-scorecard:${slug}`;

  const [phase, setPhase] = useState<Phase>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    if (!card) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (Array.isArray(saved) && saved.length === card.questions.length && saved.every((n) => n >= 0 && n <= 2)) {
        setAnswers(saved);
        setPhase("result");
      }
    } catch {
      // Storage blocked; the scorecard still works for this visit.
    }
  }, [card, storageKey]);

  const score = useMemo(() => answers.reduce((total, optionIndex, questionIndex) => total + (card?.questions[questionIndex].options[optionIndex]?.score ?? 0), 0), [answers, card]);

  if (!card) return null;

  const totalQuestions = card.questions.length;
  const tier = tierForScore(score);
  const progress = phase === "result" ? 100 : phase === "quiz" ? Math.round((step / totalQuestions) * 100) : 0;

  const choose = (optionIndex: number) => {
    const next = [...answers];
    next[step] = optionIndex;
    setAnswers(next);
    window.setTimeout(() => {
      if (step + 1 < totalQuestions) {
        setStep(step + 1);
      } else {
        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
        } catch {
          // Storage blocked; ignore.
        }
        trackEvent("guide_scorecard_completed");
        setPhase("result");
      }
    }, 220);
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
    setPhase("quiz");
  };

  return (
    <section aria-labelledby={`scorecard-${slug}`} className="no-print mt-14 rounded-3xl border-2 border-primary bg-card p-7 sm:p-10">
      <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
        <Gauge className="h-4 w-4" aria-hidden="true" />
        Free 20-second self-check
      </p>
      <h2 id={`scorecard-${slug}`} className="font-display text-2xl font-bold tracking-normal sm:text-3xl">
        How ready is your business?
      </h2>

      {/* Progress bar */}
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Self-check progress">
        <motion.div className="h-full bg-primary" initial={false} animate={{ width: `${progress}%` }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
      </div>

      <AnimatePresence mode="wait">
        {phase === "intro" && (
          <motion.div key="intro" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="mt-6">
            <p className="max-w-xl text-base leading-relaxed sm:text-lg">
              Three questions. No email required. You'll get an honest read on where you stand — and what I'd look at first.
            </p>
            <Button variant="hero" size="lg" className="mt-6 gap-2" onClick={() => setPhase("quiz")}>
              Start the self-check
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </motion.div>
        )}

        {phase === "quiz" && (
          <motion.div key={`q-${step}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="mt-6">
            <p className="mb-2 text-sm font-semibold text-muted-foreground">
              Question {step + 1} of {totalQuestions}
            </p>
            <h3 className="mb-6 font-display text-xl font-bold tracking-normal sm:text-2xl">{card.questions[step].question}</h3>
            <div className="space-y-3">
              {card.questions[step].options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  type="button"
                  onClick={() => choose(optionIndex)}
                  className="w-full rounded-2xl border-2 border-border bg-card px-5 py-4 text-left text-base font-semibold transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:border-primary focus-visible:outline-none sm:text-lg"
                >
                  {option.label}
                </button>
              ))}
            </div>
            {step > 0 && (
              <button type="button" onClick={() => setStep(step - 1)} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </button>
            )}
          </motion.div>
        )}

        {phase === "result" && (
          <motion.div key="result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="mt-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-display text-2xl font-bold tracking-normal sm:text-3xl">{SCORECARD_TIERS[tier]}</p>
              <span className="rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">{score} / 6</span>
            </div>

            {/* Stage ladder */}
            <div className="mt-5 grid grid-cols-4 gap-2" aria-hidden="true">
              {SCORECARD_TIERS.map((name, index) => (
                <motion.div
                  key={name}
                  initial={{ scaleY: 0.4, opacity: 0.3 }}
                  animate={{ scaleY: index <= tier ? 1 : 0.4, opacity: index <= tier ? 1 : 0.3 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  className={`h-3 origin-bottom rounded-full ${index <= tier ? "bg-primary" : "bg-muted"}`}
                />
              ))}
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">{card.results[tier]}</p>

            <div className="mt-6 rounded-2xl bg-muted p-5 sm:p-6">
              <p className="font-semibold">One honest caveat</p>
              <p className="mt-2 max-w-xl leading-relaxed">
                This score comes from your answers — not your actual website. The only way to know what's really holding you back is to have
                someone look. That's what I do: in a free 30-minute call, I'll show you exactly what I'd fix first.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="hero" className="gap-2">
                  <Link to="/book">
                    Book a free call
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link to="/free-audit">
                    Run the free AI search check
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            <button type="button" onClick={restart} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
              Retake the self-check
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
