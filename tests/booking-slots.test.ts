import { describe, expect, test } from "bun:test";
import { generateSlots, isBookableSlot } from "../supabase/functions/_shared/booking-slots";

// Wed Oct 14 2026, 6:00 AM Pacific (PDT, UTC-7)
const now = new Date("2026-10-14T13:00:00Z");

describe("booking slots", () => {
  test("offers 30-minute weekday slots 9am–5pm Pacific", () => {
    const slots = generateSlots(now);
    expect(slots[0]).toBe("2026-10-14T16:00:00.000Z"); // 9:00 AM PDT
    expect(slots.filter(s => s.startsWith("2026-10-14"))).toHaveLength(16);
    expect(slots).toContain("2026-10-14T23:30:00.000Z"); // 4:30 PM PDT, last slot
  });
  test("skips weekends", () => {
    expect(generateSlots(now).some(s => s.startsWith("2026-10-17") || s.startsWith("2026-10-18"))).toBe(false);
  });
  test("follows daylight saving (9am PST is 17:00 UTC in November)", () => {
    expect(generateSlots(new Date("2026-10-30T13:00:00Z"))).toContain("2026-11-02T17:00:00.000Z");
  });
  test("requires 2 hours notice", () => {
    const late = new Date("2026-10-14T17:30:00Z"); // 10:30 AM PDT
    expect(generateSlots(late)[0]).toBe("2026-10-14T19:30:00.000Z"); // 12:30 PM
  });
  test("removes times already busy on the calendar", () => {
    const busy = [{ start: "2026-10-14T16:00:00Z", end: "2026-10-14T17:00:00Z" }];
    expect(isBookableSlot("2026-10-14T16:30:00.000Z", now, busy)).toBe(false);
    expect(isBookableSlot("2026-10-14T17:00:00.000Z", now, busy)).toBe(true);
  });
});
