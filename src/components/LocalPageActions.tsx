import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, Loader2, RefreshCw, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { bookingPath, localCheckPath, openingLabel, upcomingOpenings } from "@/lib/local-page-actions";

export default function LocalPageActions({ area }: { area: string }) {
  const [slots, setSlots] = useState<string[]>([]);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const { data, error } = await supabase.functions.invoke("booking", { body: { action: "slots" } });
        if (!active) return;
        if (error || !Array.isArray(data?.slots)) { setState("error"); setSlots([]); return; }
        setSlots(upcomingOpenings(data.slots));
        setState("ready");
      } catch { if (active) { setState("error"); setSlots([]); } }
    }
    load();
    const interval = window.setInterval(load, 5 * 60 * 1000);
    const onFocus = () => { load(); };
    window.addEventListener("focus", onFocus);
    return () => { active = false; window.clearInterval(interval); window.removeEventListener("focus", onFocus); };
  }, [refresh]);

  return <section aria-label={`Free search check and call times for ${area}`} className="light-surface bg-background text-foreground border-y border-border py-12 sm:py-16">
    <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
      <div className="space-y-5">
        <Search className="h-7 w-7" aria-hidden="true" />
        <h2 className="font-display text-3xl leading-tight">Could customers find your {area} business in AI search?</h2>
        <p className="text-muted-foreground leading-relaxed max-w-xl">Get a free check tailored to {area}. Explore the questions customers might ask about your business—and where your website could do more to answer them.</p>
        <Button size="lg" asChild className="h-auto whitespace-normal py-4 text-left gap-3">
          <Link to={localCheckPath(area)}>Check my {area} business<ArrowRight className="w-5 h-5 shrink-0" /></Link>
        </Button>
        <p className="text-xs text-muted-foreground">Suggested customer questions, not a measurement of AI rankings or search volume.</p>
      </div>
      <div className="border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12 space-y-5">
        <CalendarDays className="h-7 w-7" aria-hidden="true" />
        <h2 className="font-display text-3xl leading-tight">Next open times with Chris</h2>
        <p className="text-muted-foreground">A free 30-minute call or Zoom to talk through your local search opportunities.</p>
        <div aria-live="polite">
          {state === "loading" ? <p className="flex items-center gap-2 text-muted-foreground"><Loader2 className="w-4 h-4 animate-spin motion-reduce:animate-none" />Checking Chris’s calendar…</p> : state === "error" ? <div className="space-y-3"><p className="text-muted-foreground">We couldn’t check the calendar. Call <a className="underline" href="tel:+16199036599">(619) 903-6599</a> or try again.</p><Button variant="outline" onClick={() => { setState("loading"); setRefresh(v => v + 1); }} className="gap-2"><RefreshCw className="w-4 h-4" />Try again</Button></div> : slots.length ? <div className="flex flex-wrap gap-3">{slots.map(slot => <Button key={slot} variant="outline" asChild className="h-auto py-3 border-foreground/20 hover:bg-primary hover:text-primary-foreground"><Link to={bookingPath(slot)}>{openingLabel(slot)}</Link></Button>)}</div> : <p className="text-muted-foreground">No open times right now. Call <a href="tel:+16199036599" className="underline">(619) 903-6599</a> to arrange a time.</p>}
        </div>
        <p className="text-xs text-muted-foreground">Pacific time. Availability refreshes from Chris’s calendar. Select a time, then confirm your details to book.</p>
        <Link to="/book" className="inline-flex items-center gap-2 font-medium underline underline-offset-4">See the full calendar<ArrowRight className="h-4 w-4" /></Link>
      </div>
    </div>
  </section>;
}