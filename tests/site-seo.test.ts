import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { allRoutes, generateSitemapXML } from '../src/data/routes';
import { stripSeoFallback } from '../scripts/seo-html';

describe('indexable route coverage', () => {
  test('covers every public registered route except the transaction confirmation', () => {
    const router = readFileSync(new URL('../src/router.tsx', import.meta.url), 'utf8');
    const registered = ['/', ...Array.from(router.matchAll(/path: "([^"]+)"/g), m => m[1])
      .filter(path => !['/', '*', 'payment-success', 'pricing', 'authority/white-label-seo'].includes(path))
      .map(path => `/${path}`)];
    expect(allRoutes.map(route => route.path).sort()).toEqual(registered.sort());
  });
  test('does not list removed blog or payment confirmation', () => {
    expect(allRoutes.some(route => route.path === '/blog')).toBe(false);
    expect(allRoutes.some(route => route.path === '/payment-success')).toBe(false);
  });
});

describe('sitemap modification dates', () => {
  test('does not invent modification timestamps for pages', () => {
    expect(generateSitemapXML()).not.toContain('<lastmod>');
  });
  test('preserves existing page-specific dates and omits dates for new entries', () => {
    const xml = generateSitemapXML('<url><loc>https://yourbestseo.com/about</loc><lastmod>2026-01-31</lastmod></url>');
    expect(xml).toContain('<loc>https://yourbestseo.com/about</loc>\n    <lastmod>2026-01-31</lastmod>');
    expect(xml.match(/<lastmod>/g)?.length).toBe(1);
  });
});

describe('SSG fallback isolation', () => {
  test('removes source fallback before injecting unique route metadata', () => {
    expect(stripSeoFallback('<head><!-- seo-fallback:start --><title>Fallback</title><!-- seo-fallback:end --><link rel="icon" href="/favicon.png"></head>'))
      .toBe('<head>\n<link rel="icon" href="/favicon.png"></head>');
  });
});