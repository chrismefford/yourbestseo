import { describe, expect, test } from "bun:test";
import { buildReport, normalizeWebsite, robotAccess, groundReview, reportText, type Page, type AIReview } from "../supabase/functions/local-search-check/rules";

const input = { website: "https://example.com/", service: "HVAC", city: "San Diego" };
const page: Page = { url: input.website, title: "Example HVAC San Diego", description: "Local HVAC repairs", headings: ["HVAC in San Diego"], links: [{ url: "tel:+16199036599", text: "Call" }], localSchema: true, noindex: false };
describe("Local Search Opportunity Check rules", () => {
  test("accepts a bare website domain", () => expect(normalizeWebsite("example.com")).toBe("https://example.com/"));
  test("rejects credentials and custom ports", () => { expect(() => normalizeWebsite("https://user:pass@example.com")).toThrow(); expect(() => normalizeWebsite("https://example.com:3000")).toThrow(); });
  test("returns at most three findings", () => expect(buildReport(input, page, "").findings.length).toBe(3));
  test("prioritizes an explicit noindex restriction", () => expect(buildReport(input, { ...page, noindex: true }, "").findings[0].id).toBe("index"));
  test("cannot invent HTML findings when a page cannot be read", () => expect(buildReport(input, { ...page, unavailable: "Blocked" }, null).checks.map(c => c.id)).toEqual(["reach", "crawl", "ai"]));
  test("missing robots response is unknown, not allowed", () => expect(buildReport(input, page, null).checks.find(c => c.id === "ai")?.status).toBe("unknown"));
  test("specific crawler groups override wildcard rules", () => { const robots = "User-agent: *\nDisallow: /\nUser-agent: OAI-SearchBot\nAllow: /"; expect(robotAccess(robots, "Googlebot")).toBe(false); expect(robotAccess(robots, "OAI-SearchBot")).toBe(true); });
  test("longest matching robots path wins and allow wins ties", () => { expect(robotAccess("User-agent: *\nDisallow: /\nAllow: /services", "Googlebot", "/services/hvac")).toBe(true); expect(robotAccess("User-agent: *\nDisallow: /\nAllow: /", "Googlebot")).toBe(true); });
  test("a nonmatch is unknown rather than proof a local page is absent", () => expect(buildReport({ ...input, city: "Los Angeles" }, page, "").checks.find(c => c.id === "local")?.status).toBe("unknown"));
  test("checks three AI search agents, not training crawlers", () => expect(buildReport(input, page, "User-agent: GPTBot\nDisallow: /").checks.find(c => c.id === "ai")?.status).toBe("observed"));
  test("short AI report keeps only three next steps and verified evidence IDs", () => {
    const review: AIReview = { overview: "Accessible website", seo: "Review indexing", ai: "Citation status unknown", strengths: [], sources: [], steps: Array.from({ length: 5 }, () => ({ title: "Review indexing", action: "Check Search Console", why: "Indexing is unverified", evidenceIds: ["index", "invented"] })) };
    const result = groundReview(review, buildReport(input, page, ""));
    expect(result.steps.length).toBe(3); expect(result.steps[0].evidenceIds).toEqual(["index"]);
  });
  test("AI report downloads retain the overview and actionable next steps", () => {
    const report = buildReport(input, page, ""); report.review = { overview: "Public pages are accessible", seo: "Indexing unverified", ai: "Citations unverified", strengths: [], sources: [], steps: [{ title: "Confirm indexing", action: "Inspect your URL in Search Console", why: "HTML access alone is not indexing", evidenceIds: ["index"] }] };
    expect(reportText(report)).toContain("Public pages are accessible"); expect(reportText(report)).toContain("Inspect your URL in Search Console");
  });
  test("customer report keeps ten prompts and three simple next steps", () => {
    const report = buildReport(input, page, "");
    report.review = groundReview({ overview: "Customer questions", seo: "", ai: "", strengths: [], sources: [], prompts: Array.from({ length: 12 }, (_, i) => `${i + 1}. Question ${i + 1}?`), steps: Array.from({ length: 4 }, () => ({ title: "Answer questions", action: "Share clear answers", why: "Help customers", evidenceIds: [] })) }, report);
    expect(report.review.prompts?.length).toBe(10); expect(report.review.steps.length).toBe(3);
    expect(reportText(report)).toContain("10. Question 10?"); expect(reportText(report)).not.toContain("11. Question");
  });
});