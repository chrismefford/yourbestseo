import { describe, expect, test } from "bun:test";
import { buildSmsConsentEvidence, readSmsConsent } from "../supabase/functions/_shared/sms-consent";

describe("appointment SMS consent", () => {
  test("booking without consent stays opted out", () => {
    expect(readSmsConsent(undefined, undefined)).toBe(false);
    expect(readSmsConsent(false, "2026-10-17")).toBe(false);
  });
  test("only explicit current consent opts in", () => {
    expect(readSmsConsent(true, "2026-10-17")).toBe(true);
    expect(() => readSmsConsent("true", "2026-10-17")).toThrow();
    expect(() => readSmsConsent(true, "old")).toThrow();
  });
  test("evidence retains the number and fixes source to the actual booking pages", () => {
    const evidence = buildSmsConsentEvidence(true, "+16155550123", "test@example.com", "2026-10-19T16:00:00.000Z", "/free-audit");
    expect(evidence.phone).toBe("+16155550123");
    expect(evidence.opted_in).toBe(true);
    expect(evidence.source_url).toBe("https://yourbestseo.com/free-audit");
    expect(buildSmsConsentEvidence(false, "+16155550123", "test@example.com", "2026-10-19T16:00:00.000Z", "https://bad.example").source_url).toBe("https://yourbestseo.com/book");
  });
});