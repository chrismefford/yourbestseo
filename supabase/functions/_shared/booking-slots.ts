// Pure booking-slot rules shared by the booking function and tests.
export const BOOKING_TIMEZONE = "America/Los_Angeles";
export const SLOT_MINUTES = 30;
export const DAY_START_HOUR = 9;
export const DAY_END_HOUR = 17;
export const BOOKING_DAYS_AHEAD = 14;
export const MIN_LEAD_MINUTES = 120;

export interface BusyRange { start: string; end: string }

function zoneParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: BOOKING_TIMEZONE, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", weekday: "short",
  }).formatToParts(date);
  const get = (type: string) => parts.find(p => p.type === type)!.value;
  return { year: +get("year"), month: +get("month"), day: +get("day"), hour: +get("hour"), minute: +get("minute"), second: +get("second"), weekday: get("weekday") };
}

function offsetMs(date: Date) {
  const p = zoneParts(date);
  return Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second) - Math.floor(date.getTime() / 1000) * 1000;
}

/** Converts a Pacific wall-clock time to a UTC Date (handles daylight saving). */
export function pacificToUtc(year: number, month: number, day: number, hour: number, minute: number) {
  const guess = Date.UTC(year, month - 1, day, hour, minute);
  let utc = guess - offsetMs(new Date(guess));
  utc = guess - offsetMs(new Date(utc));
  return new Date(utc);
}

export function generateSlots(now: Date, busy: BusyRange[] = []): string[] {
  const earliest = now.getTime() + MIN_LEAD_MINUTES * 60_000;
  const busyMs = busy.map(b => [Date.parse(b.start), Date.parse(b.end)] as const);
  const slots: string[] = [];
  const today = zoneParts(now);
  for (let i = 0; i <= BOOKING_DAYS_AHEAD; i++) {
    const d = new Date(Date.UTC(today.year, today.month - 1, today.day + i));
    const dow = d.getUTCDay();
    if (dow === 0 || dow === 6) continue;
    for (let mins = DAY_START_HOUR * 60; mins + SLOT_MINUTES <= DAY_END_HOUR * 60; mins += SLOT_MINUTES) {
      const start = pacificToUtc(d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate(), Math.floor(mins / 60), mins % 60).getTime();
      const end = start + SLOT_MINUTES * 60_000;
      if (start < earliest) continue;
      if (busyMs.some(([bs, be]) => start < be && end > bs)) continue;
      slots.push(new Date(start).toISOString());
    }
  }
  return slots;
}

export function isBookableSlot(slot: string, now: Date, busy: BusyRange[] = []) {
  return generateSlots(now, busy).includes(new Date(slot).toISOString());
}
