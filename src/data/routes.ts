/**
 * Centralized Routes Configuration
 * 
 * This file is the SINGLE SOURCE OF TRUTH for all routes.
 * When adding a new page:
 * 1. Add the route to the appropriate array below
 * 2. Add the import and Route component in App.tsx
 * 3. Run: npx ts-node scripts/generate-sitemap.ts (or it runs on build)
 * 
 * The sitemap.xml will be automatically generated from this config.
 */

export interface RouteConfig {
  path: string;
  priority?: number;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

// Main pages (highest priority)
export const mainRoutes: RouteConfig[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/services', priority: 0.9, changefreq: 'weekly' },
  { path: '/pricing', priority: 0.9, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/case-studies', priority: 0.8, changefreq: 'monthly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
  { path: '/free-audit', priority: 0.9, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'daily' },
  { path: '/glossary', priority: 0.8, changefreq: 'weekly' },
  { path: '/questions', priority: 0.8, changefreq: 'weekly' },
];

// Service pages
export const serviceRoutes: RouteConfig[] = [
  { path: '/services/seo-blog-posts', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/technical-seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/google-business-profile', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/keyword-research', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/competitor-analysis', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/white-hat-backlinks', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/local-citations', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/review-management', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/schema-markup', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/ranking-reports', priority: 0.8, changefreq: 'monthly' },
];

// Glossary term pages (generated from glossaryTerms.ts slugs)
export const glossaryRoutes: RouteConfig[] = [
  { path: '/glossary/google-business-profile', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/local-pack', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/nap-consistency', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/local-citations', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/schema-markup', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/backlinks', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/meta-description', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/crawlability', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/core-web-vitals', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/indexability', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/title-tag', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/keyword-optimization', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/header-tags', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/domain-authority', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/link-building', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/search-engine-optimization', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/organic-traffic', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/keyword-research', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/search-intent', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/long-tail-keywords', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/serp', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/featured-snippets', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/short-tail-keywords', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/keyword-difficulty', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/search-volume', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/click-through-rate', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/impressions', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/people-also-ask', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/meta-title', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/internal-linking', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/anchor-text', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/page-authority', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/topic-clusters', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/pillar-pages', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/eeat', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/local-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/image-alt-text', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/duplicate-content', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/thin-content', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/content-freshness', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/semantic-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/xml-sitemap', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/ai-content-optimization', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/structured-data', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/crawl-budget', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/robots-txt', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/page-speed', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/mobile-first-indexing', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/responsive-design', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/canonical-tags', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/url-structure', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/slug-optimization', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/content-pruning', priority: 0.7, changefreq: 'monthly' },
  { path: '/glossary/lsi-keywords', priority: 0.7, changefreq: 'monthly' },
];

// Question pages
export const questionRoutes: RouteConfig[] = [
  { path: '/questions/what-is-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-long-does-seo-take', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-much-does-seo-cost', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-organic-traffic', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-are-keywords', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-a-backlink', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-domain-authority', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-a-serp', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-local-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-to-rank-in-google-maps', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-google-business-profile', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-to-get-more-google-reviews', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-are-local-citations', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-nap-consistency', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-to-optimize-for-near-me-searches', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-the-local-pack', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-technical-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-to-improve-page-speed', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-are-core-web-vitals', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-crawl-budget', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-schema-markup', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-mobile-first-indexing', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-on-page-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-off-page-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-keyword-research', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-to-do-local-keyword-research', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-content-marketing', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-an-seo-audit', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-search-intent', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-an-xml-sitemap', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-robots-txt', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-are-canonical-tags', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-to-fix-duplicate-content', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-are-long-tail-keywords', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-eeat', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-long-should-blog-posts-be', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-to-write-seo-content', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-often-should-i-publish-content', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-content-freshness', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-to-do-competitor-analysis', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-link-building', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-to-recover-from-google-penalty', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-white-hat-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-black-hat-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-to-build-topic-clusters', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-seo-roi', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/seo-vs-ppc', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-google-search-console', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-google-analytics', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/best-seo-tools', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-to-track-keyword-rankings', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/how-to-do-a-site-audit', priority: 0.7, changefreq: 'monthly' },
  { path: '/questions/what-is-screaming-frog', priority: 0.7, changefreq: 'monthly' },
];

// State SEO landing pages
export const stateRoutes: RouteConfig[] = [
  { path: '/states/california-seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/states/oregon-seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/states/washington-seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/states/arizona-seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/states/colorado-seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/states/utah-seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/states/nevada-seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/states/hawaii-seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/states/alaska-seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/states/new-mexico-seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/states/idaho-seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/states/montana-seo', priority: 0.8, changefreq: 'monthly' },
  { path: '/states/wyoming-seo', priority: 0.8, changefreq: 'monthly' },
];

// San Diego neighborhood pages
export const neighborhoodRoutes: RouteConfig[] = [
  { path: '/san-diego/downtown-san-diego-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/gaslamp-quarter-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/little-italy-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/east-village-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/marina-district-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/cortez-hill-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/north-park-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/kearny-mesa-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/santee-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/el-cajon-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/la-jolla-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/pacific-beach-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/ocean-beach-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/mission-beach-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/hillcrest-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/mission-valley-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/point-loma-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/chula-vista-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/national-city-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/clairemont-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/university-city-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/mira-mesa-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/san-diego/rancho-bernardo-seo', priority: 0.7, changefreq: 'monthly' },
];

// Combine all routes for sitemap generation
export const allRoutes: RouteConfig[] = [
  ...mainRoutes,
  ...serviceRoutes,
  ...glossaryRoutes,
  ...questionRoutes,
  ...stateRoutes,
  ...neighborhoodRoutes,
];

// Domain configuration
export const SITE_DOMAIN = 'https://yourbestseo.com';

/**
 * Generate sitemap XML string from routes
 */
export function generateSitemapXML(): string {
  const today = new Date().toISOString().split('T')[0];
  
  const urlEntries = allRoutes.map(route => {
    const loc = `${SITE_DOMAIN}${route.path}`;
    const priority = route.priority ?? 0.5;
    const changefreq = route.changefreq ?? 'monthly';
    
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

/**
 * Get total page count for verification
 */
export function getPageCount(): number {
  return allRoutes.length;
}
