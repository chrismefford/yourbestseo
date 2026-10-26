/**
 * Parser for the Small Business Guides markdown articles.
 *
 * Pure functions only (no Node APIs) so the same parser runs in the build
 * script and in tests. The article copy is preserved word for word; the
 * parser only splits it into blocks, pulls out the SEO brief for metadata,
 * and extracts the FAQ pairs and the closing call to action.
 */

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideCta {
  heading: string;
  paragraphs: string[];
  buttonLabel: string;
  buttonHref: string;
}

export type GuideBlock =
  | { kind: "h2"; id: string; text: string }
  | { kind: "h3"; id: string; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "checklist"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] }
  | { kind: "quote"; lines: string[] };

export interface ParsedGuide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  dateISO: string;
  dateLabel: string;
  blocks: GuideBlock[];
  faqs: GuideFaq[];
  cta: GuideCta;
  linksTo: string[];
}

export const HUB_SLUG = "local-seo-checklist";

export interface GuideParseOptions {
  slug: string;
  /** H2 section headings to remove from the rendered article (placeholder sections). */
  stripSections?: string[];
}

const BRIEF_HEADING = "## SEO brief (delete before publishing)";
const NOTE_PREFIX = "The client stories in this article are illustrative";

const BYLINE_RE = /^([A-Z][a-z]{2} \d{1,2}, \d{4}) · Chris Mefford$/;
const H2_RE = /^## (.+)$/;
const H3_RE = /^### (.+)$/;
const CHECKLIST_RE = /^- \[ \] /;
const UL_RE = /^- /;
const OL_RE = /^\d+\.\s/;
const QUOTE_RE = /^>/;
const TABLE_RE = /^\|/;
const TABLE_SEPARATOR_RE = /^:?-{2,}:?$/;
const CTA_LINK_RE = /\[([^\]]+)\]\(#\)/;

/** Lowercase, strip apostrophes, collapse anything else to single dashes. */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Remove inline markdown markers for plain-text uses (JSON-LD, search). */
export function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1");
}

function parseTableRow(row: string): string[] {
  return row
    .split("|")
    .slice(1, -1)
    .map((cell) => cell.trim());
}

function isSeparatorRow(cells: string[]): boolean {
  return cells.length > 0 && cells.every((cell) => TABLE_SEPARATOR_RE.test(cell));
}

function parseFaqs(lines: string[]): GuideFaq[] {
  const faqs: GuideFaq[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const question = trimmed.match(/^\*\*(.+)\*\*$/);
    if (question) {
      faqs.push({ question: question[1].trim(), answer: "" });
      continue;
    }
    if (faqs.length === 0) continue;
    const current = faqs[faqs.length - 1];
    current.answer = current.answer ? `${current.answer} ${trimmed}` : trimmed;
  }
  return faqs.filter((faq) => faq.question && faq.answer);
}

function parseCta(lines: string[]): GuideCta {
  const headingLine = lines.find((line) => H2_RE.test(line));
  if (!headingLine) throw new Error("CTA section is missing an H2 heading");
  const heading = headingLine.replace(H2_RE, "$1").trim();

  const paragraphs: string[] = [];
  let buttonLabel = "";
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || H2_RE.test(trimmed)) continue;
    const link = trimmed.match(CTA_LINK_RE);
    if (link) {
      buttonLabel = link[1].trim();
    }
    const withoutLink = trimmed.replace(CTA_LINK_RE, "").replace(/\s{2,}/g, " ").trim();
    if (withoutLink) paragraphs.push(withoutLink);
  }
  if (!buttonLabel) throw new Error("CTA section is missing a button link");
  return { heading, paragraphs, buttonLabel, buttonHref: "/book" };
}

function parseBlocks(lines: string[]): GuideBlock[] {
  const blocks: GuideBlock[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    const h2 = line.match(H2_RE);
    if (h2) {
      blocks.push({ kind: "h2", id: slugifyHeading(h2[1]), text: h2[1].trim() });
      i++;
      continue;
    }
    const h3 = line.match(H3_RE);
    if (h3) {
      const text = h3[1].trim();
      const numbered = text.match(/^(\d+)\./);
      blocks.push({ kind: "h3", id: numbered ? `fix-${numbered[1]}` : slugifyHeading(text), text });
      i++;
      continue;
    }
    if (CHECKLIST_RE.test(line)) {
      const items: string[] = [];
      while (i < lines.length && CHECKLIST_RE.test(lines[i])) {
        items.push(lines[i].replace(CHECKLIST_RE, "").trim());
        i++;
      }
      blocks.push({ kind: "checklist", items });
      continue;
    }
    if (UL_RE.test(line)) {
      const items: string[] = [];
      while (i < lines.length && UL_RE.test(lines[i]) && !CHECKLIST_RE.test(lines[i])) {
        items.push(lines[i].replace(UL_RE, "").trim());
        i++;
      }
      blocks.push({ kind: "ul", items });
      continue;
    }
    if (OL_RE.test(line)) {
      const items: string[] = [];
      while (i < lines.length && OL_RE.test(lines[i])) {
        items.push(lines[i].replace(OL_RE, "").trim());
        i++;
      }
      blocks.push({ kind: "ol", items });
      continue;
    }
    if (QUOTE_RE.test(line)) {
      const quoteLines: string[] = [];
      while (i < lines.length && QUOTE_RE.test(lines[i])) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ kind: "quote", lines: quoteLines });
      continue;
    }
    if (TABLE_RE.test(line)) {
      const rows: string[][] = [];
      while (i < lines.length && TABLE_RE.test(lines[i])) {
        const cells = parseTableRow(lines[i]);
        if (!isSeparatorRow(cells)) rows.push(cells);
        i++;
      }
      const [head, ...body] = rows;
      blocks.push({ kind: "table", head: head ?? [], rows: body });
      continue;
    }
    blocks.push({ kind: "p", text: line.trim() });
    i++;
  }
  return blocks;
}

export function parseGuide(raw: string, options: GuideParseOptions): ParsedGuide {
  let lines = raw.replace(/\r\n/g, "\n").split("\n");

  // 1. Extract and remove the SEO brief section (heading, table, editor note).
  const briefIdx = lines.findIndex((line) => line.trim() === BRIEF_HEADING);
  if (briefIdx === -1) throw new Error(`${options.slug}: missing SEO brief section`);

  const brief = new Map<string, string>();
  let cursor = briefIdx + 1;
  while (cursor < lines.length && TABLE_RE.test(lines[cursor])) {
    const [key, value] = parseTableRow(lines[cursor]);
    if (key) brief.set(key, value ?? "");
    cursor++;
  }
  let noteIdx = cursor;
  while (noteIdx < lines.length && !lines[noteIdx].trim()) noteIdx++;
  if (!lines[noteIdx]?.startsWith(NOTE_PREFIX)) {
    throw new Error(`${options.slug}: expected editor note after the SEO brief`);
  }
  lines = [...lines.slice(0, briefIdx), ...lines.slice(noteIdx + 1)];

  const metaTitle = brief.get("Meta title");
  const metaDescription = brief.get("Meta description");
  const briefSlug = brief.get("Slug");
  if (!metaTitle || !metaDescription) throw new Error(`${options.slug}: brief is missing title or description`);
  if (briefSlug !== `/${options.slug}`) throw new Error(`${options.slug}: brief slug mismatch (${briefSlug})`);

  // 2. Remove placeholder sections the editor asked us to cut.
  for (const section of options.stripSections ?? []) {
    const start = lines.findIndex((line) => line.trim() === `## ${section}`);
    if (start === -1) throw new Error(`${options.slug}: strip section not found: ${section}`);
    let end = start + 1;
    while (end < lines.length && !H2_RE.test(lines[end])) end++;
    lines = [...lines.slice(0, start), ...lines.slice(end)];
  }

  // 3. Title and byline.
  const titleLine = lines.find((line) => line.startsWith("# "));
  if (!titleLine) throw new Error(`${options.slug}: missing H1`);
  const title = titleLine.slice(2).trim();

  const bylineIdx = lines.findIndex((line) => BYLINE_RE.test(line.trim()));
  if (bylineIdx === -1) throw new Error(`${options.slug}: missing byline`);
  const dateLabel = lines[bylineIdx].trim().match(BYLINE_RE)![1];
  const parsedDate = new Date(dateLabel);
  if (Number.isNaN(parsedDate.getTime())) throw new Error(`${options.slug}: unparseable byline date`);
  const dateISO = parsedDate.toISOString().slice(0, 10);
  lines = [...lines.slice(0, bylineIdx), ...lines.slice(bylineIdx + 1)];

  // 4. Split the article: body, FAQ, and the closing CTA section (after the FAQ).
  const faqIdx = lines.findIndex((line) => line.trim() === "## FAQ");
  if (faqIdx === -1) throw new Error(`${options.slug}: missing FAQ section`);
  const h2Indices = lines.reduce<number[]>((acc, line, index) => {
    if (H2_RE.test(line)) acc.push(index);
    return acc;
  }, []);
  const ctaIdx = h2Indices[h2Indices.length - 1];
  if (ctaIdx <= faqIdx) throw new Error(`${options.slug}: expected the CTA section after the FAQ`);

  const blocks = parseBlocks(lines.slice(0, faqIdx));
  const faqs = parseFaqs(lines.slice(faqIdx + 1, ctaIdx));
  const cta = parseCta(lines.slice(ctaIdx));
  if (faqs.length < 3) throw new Error(`${options.slug}: expected at least 3 FAQ pairs`);

  // 5. Related links from the brief ("Links to" row); the hub links to everything.
  const linksTo = Array.from(brief.get("Links to")?.matchAll(/\/[a-z0-9-]+/g) ?? [], (m) => m[0])
    .map((path) => path.slice(1))
    .filter((slug) => slug !== HUB_SLUG && slug !== options.slug);

  const parsed: ParsedGuide = { slug: options.slug, title, metaTitle, metaDescription, dateISO, dateLabel, blocks, faqs, cta, linksTo };

  // 6. Guard against editor placeholder text leaking into the rendered page.
  const serialized = JSON.stringify(parsed);
  for (const forbidden of ["SEO brief", "illustrative examples", "$X", "Replace with your real packages", "](#)"]) {
    if (serialized.includes(forbidden)) throw new Error(`${options.slug}: placeholder text leaked into output: ${forbidden}`);
  }

  return parsed;
}
