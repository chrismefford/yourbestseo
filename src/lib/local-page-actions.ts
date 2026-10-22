export const BOOKING_TIME_ZONE = "America/Los_Angeles";

export function upcomingOpenings(values: unknown[], now = Date.now()): string[] {
  return [...new Set(values.filter((value): value is string => typeof value === "string" && Number.isFinite(Date.parse(value)) && Date.parse(value) > now))]
    .sort((a, b) => Date.parse(a) - Date.parse(b)).slice(0, 3);
}

export function localCheckPath(area: string): string {
  return `/free-audit?${new URLSearchParams({ area })}`;
}

export function bookingPath(slot: string): string {
  return `/book?${new URLSearchParams({ slot })}`;
}

export function openingLabel(slot: string, now = new Date()): string {
  const date = new Date(slot);
  const dateKey = (d: Date) => d.toLocaleDateString("en-CA", { timeZone: BOOKING_TIME_ZONE });
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const day = dateKey(date) === dateKey(now) ? "Today" : dateKey(date) === dateKey(tomorrow) ? "Tomorrow" : date.toLocaleDateString("en-US", { timeZone: BOOKING_TIME_ZONE, weekday: "short", month: "short", day: "numeric" });
  return `${day} · ${date.toLocaleTimeString("en-US", { timeZone: BOOKING_TIME_ZONE, hour: "numeric", minute: "2-digit" })}`;
}