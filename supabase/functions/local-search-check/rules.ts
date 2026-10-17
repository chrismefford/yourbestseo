export const FOLLOW_UP_WORDING = "YourBestSEO.com may email me to follow up about my results. This is optional and is not consent to text messages.";
export const CONSENT_VERSION = "local-search-2026-10-17";
export type Check = { id: string; title: string; status: "opportunity" | "observed" | "unknown"; found: string; why: string; next: string; evidence: string };
export type AuditInput = { website: string; city: string; service: string; profile?: string };
export type Report = { website: string; checkedAt: string; summary: string; checks: Check[]; findings: Check[]; scope: string };
export type Page = { url: string; title: string; description: string; headings: string[]; links: { url: string; text: string }[]; localSchema: boolean; noindex: boolean; unavailable?: string };

export function normalizeWebsite(value: string) {
  const url = new URL(/^https?:\/\//i.test(value.trim()) ? value.trim() : `https://${value.trim()}`);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || (url.port && !["80", "443"].includes(url.port))) throw new Error("Enter a public website address without a password or custom port.");
  if (!url.hostname.includes(".") || /(^|\.)(localhost|local|internal|test|invalid)$/i.test(url.hostname)) throw new Error("Enter a public business website.");
  url.hash = "";
  return url.toString();
}

type RobotGroup = { agents: string[]; rules: { allow: boolean; path: string }[] };
export function robotAccess(text: string, agent: string, path = "/") {
  const groups: RobotGroup[] = []; let group: RobotGroup = { agents: [], rules: [] };
  for (const line of text.split(/\r?\n/)) {
    const match = line.replace(/#.*$/, "").trim().match(/^([\w-]+)\s*:\s*(.*)$/);
    if (!match) continue;
    const key = match[1].toLowerCase(), value = match[2].trim();
    if (key === "user-agent") {
      if (group.rules.length) { groups.push(group); group = { agents: [], rules: [] }; }
      group.agents.push(value.toLowerCase());
    } else if ((key === "allow" || key === "disallow") && group.agents.length && value) group.rules.push({ allow: key === "allow", path: value });
  }
  groups.push(group);
  const exact = groups.filter(g => g.agents.some(a => a !== "*" && agent.toLowerCase().includes(a)));
  const selected = exact.length ? exact : groups.filter(g => g.agents.includes("*"));
  let winner: { allow: boolean; length: number } | undefined;
  for (const g of selected) for (const r of g.rules) {
    const pattern = r.path.replace(/[.+?^{}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
    if (!new RegExp(`^${pattern}`).test(path)) continue;
    const length = r.path.replace(/[*$]/g, "").length;
    if (!winner || length > winner.length || (length === winner.length && r.allow)) winner = { allow: r.allow, length };
  }
  return winner?.allow ?? true;
}

const contains = (text: string, term: string) => term.toLowerCase().split(/\s+/).filter(Boolean).every(word => text.toLowerCase().includes(word));
export function buildReport(input: AuditInput, page: Page, robots: string | null, pages: Page[] = [], robotsNote = "robots.txt could not be read."): Report {
  const checks: Check[] = [];
  const add = (id: string, title: string, status: Check["status"], found: string, why: string, next: string, evidence = page.url) => checks.push({ id, title, status, found, why, next, evidence });
  if (page.unavailable) {
    add("reach", "Website access", "unknown", page.unavailable, "A blocked or unavailable response prevents a reliable website check; it does not prove customers cannot access the site.", "Open the website yourself. If it works, ask your host whether automated checks are blocked.");
  } else {
    add("reach", "Website access", "observed", "The submitted page returned readable public HTML.", "Visitors and automated tools need to reach your pages.", "Keep this page publicly accessible.");
    add("index", "Search access", page.noindex ? "opportunity" : "observed", page.noindex ? "An explicit noindex instruction was found on this page." : "No noindex instruction was found in this response's page metadata or headers.", "A noindex instruction asks search engines not to list a page. Its absence does not prove the page is indexed.", page.noindex ? "Ask your website provider whether this page should be listed and remove unintended noindex instructions." : "Confirm actual indexing in Google Search Console.");
    for (const [id, title, value, why, next] of [
      ["title", "Page title", page.title, "The title helps people understand a search result.", "Add a clear title naming your business and main service."],
      ["description", "Search description", page.description, "A page description can help explain your offer in search results; Google may choose different text.", "Add a concise description of your service, location, and reason to contact you."],
    ]) add(id, title, value ? "observed" : "opportunity", value ? `Found: “${value.slice(0, 220)}”` : `No ${title.toLowerCase()} was found in the returned HTML.`, why, value ? "Review it for accurate, useful business information." : next);
    const headingMatch = page.headings.some(h => contains(h, input.service));
    add("headings", "Service in your headings", headingMatch ? "observed" : "opportunity", headingMatch ? `A visible heading includes the submitted service: “${page.headings.find(h => contains(h, input.service))}”.` : `None of the ${page.headings.length} main headings in the returned HTML contains all words in “${input.service}”.`, "Clear headings help visitors and search systems understand your offer. This is a wording check, not a judgment of writing quality.", "Review the main heading and make your core service clear without stuffing keywords.");
    const contact = page.links.filter(l => /^(tel:|mailto:)/i.test(l.url) || /contact|book|appointment|schedule/i.test(`${l.text} ${l.url}`));
    add("contact", "Ways to contact or book", contact.length ? "observed" : "opportunity", contact.length ? `Found ${contact.length} call, email, contact, or booking links in the returned HTML.` : "No call, email, contact, or booking links were identified in the returned HTML.", "A clear next step makes it easier for visitors to become inquiries. Forms or buttons loaded later may not appear in this check.", "Make a call, contact, or booking option easy to find, especially on a phone.");
    const local = [page, ...pages].find(p => !p.unavailable && contains(`${p.title} ${p.headings.join(" ")}`, input.service) && contains(`${p.title} ${p.headings.join(" ")}`, input.city));
    add("local", "Service and location page", local ? "observed" : "unknown", local ? `A checked page mentions both “${input.service}” and “${input.city}” in its title or main headings.` : `No match for both “${input.service}” and “${input.city}” was verified in ${1 + pages.length} checked pages. Other pages or alternative wording may exist.`, "A useful page explaining a real service in your actual area can answer local customer questions.", "Review your site for a useful service-and-location page; add one only when it describes real work in that area.", local?.url ?? page.url);
    add("schema", "Local business information", page.localSchema ? "observed" : "opportunity", page.localSchema ? "LocalBusiness or a recognized local-business subtype was found in JSON-LD on this page." : "No recognized local-business JSON-LD was found in this page's returned HTML; other formats and pages were not checked.", "Structured data is machine-readable business information. Presence alone does not mean it is complete or eligible for a Google feature.", "Ask your website provider to review accurate business name, address, phone, and service details.");
    const serviceLinks = page.links.filter(l => { try { return new URL(l.url).origin === new URL(page.url).origin && new URL(l.url).pathname !== new URL(page.url).pathname && contains(`${l.text} ${decodeURIComponent(new URL(l.url).pathname).replace(/[-/]/g, " ")}`, input.service); } catch { return false; } });
    add("links", "Links to your service", serviceLinks.length ? "observed" : "opportunity", serviceLinks.length ? `Found ${serviceLinks.length} internal links whose wording or address matches “${input.service}”.` : `No internal link matching the words in “${input.service}” was found on this page.`, "Clear links help visitors and crawlers discover your service pages; alternate wording may not match this check.", "Link to important service pages from your navigation and relevant page content.");
  }
  const path = new URL(page.url).pathname;
  if (robots === null) {
    add("crawl", "Search crawler access", "unknown", robotsNote, "Crawler rules could not be verified.", "Ask your website provider to review robots.txt.");
    add("ai", "AI search readiness", "unknown", robotsNote, "AI crawler access could not be verified. This check does not measure AI recommendations or citations.", "Review access for OAI-SearchBot, PerplexityBot, and Claude-SearchBot.");
  } else {
    const allowed = robotAccess(robots, "Googlebot", path);
    add("crawl", "Search crawler access", allowed ? "observed" : "opportunity", `robots.txt ${allowed ? "does not disallow" : "disallows"} Googlebot for the checked page path.`, "Crawler access is a technical prerequisite, not proof of indexing or ranking.", allowed ? "Keep intended public pages accessible." : "Ask your website provider whether this restriction is intentional.", new URL("/robots.txt", page.url).href);
    const agents = ["OAI-SearchBot", "PerplexityBot", "Claude-SearchBot"];
    const blocked = agents.filter(a => !robotAccess(robots, a, path));
    add("ai", "AI search readiness", blocked.length ? "opportunity" : "observed", blocked.length ? `robots.txt disallows ${blocked.join(", ")} for this page path.` : "robots.txt does not disallow OAI-SearchBot, PerplexityBot, or Claude-SearchBot for this page path.", "This checks published technical access rules only—not whether any AI tool recommends or cites the business, or whether crawlers obey those rules.", blocked.length ? "Review intentional versus accidental AI search crawler restrictions with your website provider." : "Keep service information clear and verify actual citations separately.", new URL("/robots.txt", page.url).href);
  }
  const priority = ["index", "crawl", "contact", "title", "headings", "local", "description", "schema", "links", "ai", "reach"];
  const ranked = [...checks].sort((a, b) => ({ opportunity: 0, unknown: 1, observed: 2 }[a.status] - { opportunity: 0, unknown: 1, observed: 2 }[b.status]) || priority.indexOf(a.id) - priority.indexOf(b.id));
  const findings = ranked.slice(0, 3);
  return { website: page.url, checkedAt: new Date().toISOString(), summary: findings[0]?.found ?? "No checks completed.", checks, findings, scope: `Public HTML from the submitted page and up to three linked pages, plus robots.txt. JavaScript-only content, actual rankings, traffic, AI citations, competitors, and Google Business Profile were not audited.${input.profile ? " Your optional Google Business Profile link was saved for a possible manual review only." : ""}` };
}

export function reportText(report: Report) {
  return ["Local Search Opportunity Check — YourBestSEO.com", report.website, `Checked: ${report.checkedAt}`, report.scope, "", ...report.checks.flatMap(c => [`${c.title} (${c.status})`, `Found: ${c.found}`, `Why it matters: ${c.why}`, `Next: ${c.next}`, `Source: ${c.evidence}`, ""]), "Need help? https://yourbestseo.com/book · (619) 903-6599"].join("\n");
}