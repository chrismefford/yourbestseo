import { describe, expect, test } from "bun:test";
import { buildReport, normalizeWebsite, robotAccess, type Page } from "../supabase/functions/local-search-check/rules";

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
});