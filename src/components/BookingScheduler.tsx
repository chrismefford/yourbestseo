import { useEffect, useMemo, useState } from "react";
import { CalendarCheck, Loader2, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

export interface BookingContact { name: string; email: string; phone: string; website: string }

interface Props { contact?: BookingContact; leadId?: string; score?: number | null; answers?: number[] }

const TZ = "America/Los_Angeles";
const dayLabel = (iso: string) => new Date(iso).toLocaleDateString("en-US", { timeZone: TZ, weekday: "short", month: "short", day: "numeric" });
const timeLabel = (iso: string) => new Date(iso).toLocaleTimeString("en-US", { timeZone: TZ, hour: "numeric", minute: "2-digit" });

export default function BookingScheduler({ contact: given, leadId, score, answers }: Props) {
  const [slots, setSlots] = useState<string[] | null>(null);
  const [loadError, setLoadError] = useState("");
  const [day, setDay] = useState("");
  const [slot, setSlot] = useState("");
  const [meetingType, setMeetingType] = useState<"phone" | "zoom">("phone");
  const [contact, setContact] = useState<BookingContact>(given ?? { name: "", email: "", phone: "", website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const load = async () => {
    setLoadError("");
    const { data, error } = await supabase.functions.invoke("booking", { body: { action: "slots" } });
    if (error || !Array.isArray(data?.slots)) { setLoadError("Couldn't load open times. Please call (615) 772-6641."); return; }
    setSlots(data.slots);
    setDay(data.slots[0] ? dayLabel(data.slots[0]) : "");
  };
  useEffect(() => { load(); }, []);

  const days = useMemo(() => {
    const map = new Map<string, string[]>();
    (slots ?? []).forEach(s => { const k = dayLabel(s); map.set(k, [...(map.get(k) ?? []), s]); });
    return map;
  }, [slots]);

  const book = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!slot || status === "sending") return;
    setError(""); setStatus("sending");
    const { data, error: err } = await supabase.functions.invoke("booking", { body: { action: "book", slot, meetingType, leadId, score, answers, ...contact } });
    if (err || data?.success !== true) {
      let msg = "Couldn't book that time. Please try another or call (615) 772-6641.";
      try { const body = await (err as { context?: Response })?.context?.json(); if (body?.error) msg = body.error; } catch { /* keep default */ }
      setError(msg); setStatus("idle");
      if (msg.includes("taken")) { setSlot(""); load(); }
      return;
    }
    setStatus("done");
    localStorage.setItem("exitPopupConverted", "true");
  };

  if (status === "done") return <div role="status" className="rounded-lg border border-primary/40 bg-primary/5 p-8 text-center">
    <CalendarCheck className="h-12 w-12 text-primary mx-auto mb-4" />
    <h3 className="font-display text-2xl mb-2">You're booked!</h3>
    <p className="text-muted-foreground">{dayLabel(slot)} at {timeLabel(slot)} Pacific · {meetingType === "zoom" ? "Zoom (Chris will send the link)" : `Chris will call you at ${contact.phone}`}.</p>
    <p className="text-sm text-muted-foreground mt-3">A calendar invite is on its way to {contact.email}.</p>
  </div>;

  return <form onSubmit={book} className="space-y-6" aria-label="Book a meeting">
    {!given && <div className="grid sm:grid-cols-2 gap-4">{([
      ["name", "Your name", "text"], ["phone", "Phone", "tel"], ["email", "Email", "email"], ["website", "Website", "text"],
    ] as const).map(([k, label, type]) => <div key={k} className="space-y-2"><Label htmlFor={`book-${k}`}>{label} *</Label><Input id={`book-${k}`} type={type} required maxLength={250} value={contact[k]} onChange={e => setContact(p => ({ ...p, [k]: e.target.value }))} /></div>)}</div>}

    <div>
      <Label className="block mb-3">How should we meet?</Label>
      <div className="grid grid-cols-2 gap-3">
        {([["phone", "Phone call", Phone], ["zoom", "Zoom", Video]] as const).map(([v, label, Icon]) => <button type="button" key={v} onClick={() => setMeetingType(v)} aria-pressed={meetingType === v} className={`flex items-center justify-center gap-2 rounded-lg border p-3 transition-colors ${meetingType === v ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50"}`}><Icon className="h-4 w-4" />{label}</button>)}
      </div>
    </div>

    <div>
      <Label className="block mb-3">Pick a day <span className="text-muted-foreground font-normal">(30 minutes, Pacific time)</span></Label>
      {loadError ? <p role="alert" className="text-destructive">{loadError}</p> : !slots ? <p className="text-muted-foreground flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" />Loading open times…</p> : days.size === 0 ? <p className="text-muted-foreground">No open times right now — please call (615) 772-6641.</p> : <>
        <div className="flex gap-2 overflow-x-auto pb-2">{[...days.keys()].map(d => <button type="button" key={d} onClick={() => { setDay(d); setSlot(""); }} className={`shrink-0 rounded-lg border px-4 py-2 text-sm ${day === d ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/50"}`}>{d}</button>)}</div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">{(days.get(day) ?? []).map(s => <button type="button" key={s} onClick={() => setSlot(s)} className={`rounded-lg border py-2 text-sm ${slot === s ? "border-primary bg-primary/15 text-primary font-semibold" : "border-border hover:border-primary/50"}`}>{timeLabel(s)}</button>)}</div>
      </>}
    </div>

    {error && <p role="alert" className="text-destructive">{error}</p>}
    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={!slot || status === "sending"}>
      {status === "sending" ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Booking…</> : slot ? `Book ${dayLabel(slot)} at ${timeLabel(slot)}` : "Pick a time"}
    </Button>
  </form>;
}
