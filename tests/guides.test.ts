import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { allRoutes, generateSitemapXML } from '../src/data/routes';
import { guides, getGuide, HUB, keepReadingFor } from '../src/data/guides';

const SLUGS = [
  'business-not-showing-on-google',
  'get-customers-without-google-ads',
  'get-business-recommended-by-chatgpt',
  'google-business-profile-checklist',
  'how-much-does-seo-cost',
  'seo-vs-google-ads',
  'how-to-get-more-google-reviews',
  'how-long-does-seo-take',
  'seo-scams',
  'local-seo-checklist',
];

const sourceOf = (slug: string) => readFileSync(new URL(`../src/content/guides/${slug}.md`, import.meta.url), 'utf8');

describe('guide routes', () => {
  test('all 11 guide URLs are registered and in the sitemap', () => {
    const paths = allRoutes.map((route) => route.path);
    for (const path of ['/guides', ...SLUGS.map((slug) => `/${slug}`)]) {
      expect(paths).toContain(path);
    }
    const sitemap = generateSitemapXML();
    for (const path of ['/guides', ...SLUGS.map((slug) => `/${slug}`)]) {
      expect(sitemap).toContain(`<loc>https://yourbestseo.com${path}</loc>`);
    }
  });

  test('every guide has a unique title and description', () => {
    expect(guides).toHaveLength(10);
    expect(new Set(guides.map((g) => g.metaTitle)).size).toBe(10);
    expect(new Set(guides.map((g) => g.metaDescription)).size).toBe(10);
    for (const guide of guides) {
      expect(guide.path).toBe(`/${guide.slug}`);
      expect(guide.dateISO).toBe('2026-10-25');
      expect(guide.faqs.length).toBeGreaterThanOrEqual(3);
      expect(guide.cta.buttonHref).toBe('/book');
      expect(guide.cta.buttonLabel.length).toBeGreaterThan(0);
    }
  });
});

describe('guide content fidelity', () => {
  test('every rendered block appears word for word in the source markdown', () => {
    for (const guide of guides) {
      const source = sourceOf(guide.slug);
      const texts: string[] = [];
      for (const block of guide.blocks) {
        if (block.kind === 'h2' || block.kind === 'h3' || block.kind === 'p') texts.push(block.text);
        if (block.kind === 'ul' || block.kind === 'ol' || block.kind === 'checklist') texts.push(...block.items);
        if (block.kind === 'quote') texts.push(...block.lines.filter((line) => line.trim() !== ''));
        if (block.kind === 'table') {
          texts.push(...block.head.filter(Boolean), ...block.rows.flat().filter(Boolean));
        }
      }
      texts.push(...guide.faqs.map((faq) => faq.question), ...guide.faqs.map((faq) => faq.answer));
      for (const text of texts) {
        expect(source).toContain(text);
      }
    }
  });

  test('no editor notes or placeholder pricing leak into any page', () => {
    const serialized = JSON.stringify(guides);
    expect(serialized).not.toContain('SEO brief');
    expect(serialized).not.toContain('illustrative examples');
    expect(serialized).not.toContain('$X');
    expect(serialized).not.toContain('Replace with your real packages');
    expect(serialized).not.toContain('](#)');
  });

  test('the diagnosis table links to all 12 fix anchors', () => {
    const guide = getGuide('business-not-showing-on-google')!;
    const ids = guide.blocks.filter((b) => b.kind === 'h3').map((b) => b.id);
    for (let n = 1; n <= 12; n++) expect(ids).toContain(`fix-${n}`);
  });

  test('the hub links to all 9 other guides; regular pages keep reading to 3', () => {
    expect(HUB.linksTo).toHaveLength(9);
    expect(keepReadingFor(HUB)).toHaveLength(9);
    for (const guide of guides.filter((g) => g.slug !== HUB.slug)) {
      expect(keepReadingFor(guide)).toHaveLength(3);
    }
  });
});
