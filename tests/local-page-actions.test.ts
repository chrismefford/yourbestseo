import { describe, expect, test } from "bun:test";
import { bookingPath, localCheckPath, openingLabel, upcomingOpenings } from "../src/lib/local-page-actions";

describe("local page actions", () => {
  test("shows at most the next three real future openings in order", () => {
    const slots = ["2026-10-23T18:00:00Z", "2026-10-23T16:00:00Z", "2026-10-23T17:30:00Z", "2026-10-23T17:00:00Z", "2026-10-23T17:00:00Z", "invalid", "2026-10-21T16:00:00Z", null];
    expect(upcomingOpenings(slots, Date.parse("2026-10-22T21:07:00Z"))).toEqual(["2026-10-23T16:00:00Z", "2026-10-23T17:00:00Z", "2026-10-23T17:30:00Z"]);
  });
  test("carries the local area to the free check unchanged", () => {
    const url = new URL(localCheckPath("Mission Valley"), "https://yourbestseo.com");
    expect(url.pathname).toBe("/free-audit");
    expect(url.searchParams.get("area")).toBe("Mission Valley");
  });
  test("carries the exact selected calendar time into booking", () => {
    const slot = "2026-10-23T16:00:00.000Z";
    const url = new URL(bookingPath(slot), "https://yourbestseo.com");
    expect(url.pathname).toBe("/book");
    expect(url.searchParams.get("slot")).toBe(slot);
  });
  test("uses Pacific time for today and tomorrow openings", () => {
    expect(openingLabel("2026-10-22T23:30:00Z", new Date("2026-10-22T21:07:00Z"))).toBe("Today · 4:30 PM");
    expect(openingLabel("2026-10-23T16:00:00Z", new Date("2026-10-22T21:07:00Z"))).toBe("Tomorrow · 9:00 AM");
  });
});