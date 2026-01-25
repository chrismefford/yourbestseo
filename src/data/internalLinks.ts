/**
 * Internal Linking Configuration
 * 
 * This module provides semantic relationships between all site content
 * to enable intelligent cross-linking for better SEO and user experience.
 */

// ============= Service Links =============
export interface ServiceLink {
  slug: string;
  name: string;
  path: string;
  relatedGlossary: string[];
  relatedQuestions: string[];
}

export const serviceLinks: ServiceLink[] = [
  {
    slug: "seo-blog-posts",
    name: "SEO Blog Posts",
    path: "/services/seo-blog-posts",
    relatedGlossary: ["content-freshness", "long-tail-keywords", "search-intent", "eeat"],
    relatedQuestions: ["how-to-write-seo-content", "how-long-should-blog-posts-be", "how-often-should-i-publish-content"],
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    path: "/services/technical-seo",
    relatedGlossary: ["core-web-vitals", "crawl-budget", "page-speed", "mobile-first-indexing", "xml-sitemap"],
    relatedQuestions: ["what-is-technical-seo", "how-to-improve-page-speed", "what-are-core-web-vitals"],
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile",
    path: "/services/google-business-profile",
    relatedGlossary: ["google-business-profile", "local-pack", "nap-consistency", "local-seo"],
    relatedQuestions: ["what-is-google-business-profile", "how-to-rank-in-google-maps", "what-is-local-seo"],
  },
  {
    slug: "keyword-research",
    name: "Keyword Research",
    path: "/services/keyword-research",
    relatedGlossary: ["keyword-research", "long-tail-keywords", "short-tail-keywords", "search-volume", "keyword-difficulty"],
    relatedQuestions: ["what-is-keyword-research", "what-are-long-tail-keywords", "how-to-do-local-keyword-research"],
  },
  {
    slug: "competitor-analysis",
    name: "Competitor Analysis",
    path: "/services/competitor-analysis",
    relatedGlossary: ["domain-authority", "backlinks", "keyword-research", "serp"],
    relatedQuestions: ["how-to-do-competitor-analysis", "what-is-domain-authority", "best-seo-tools"],
  },
  {
    slug: "white-hat-backlinks",
    name: "White-Hat Backlinks",
    path: "/services/white-hat-backlinks",
    relatedGlossary: ["backlinks", "link-building", "domain-authority", "anchor-text", "page-authority"],
    relatedQuestions: ["what-is-a-backlink", "what-is-link-building", "what-is-white-hat-seo"],
  },
  {
    slug: "local-citations",
    name: "Local Citations",
    path: "/services/local-citations",
    relatedGlossary: ["local-citations", "nap-consistency", "local-seo", "local-pack"],
    relatedQuestions: ["what-are-local-citations", "what-is-nap-consistency", "what-is-local-seo"],
  },
  {
    slug: "review-management",
    name: "Review Management",
    path: "/services/review-management",
    relatedGlossary: ["google-business-profile", "local-seo", "eeat"],
    relatedQuestions: ["how-to-get-more-google-reviews", "what-is-local-seo", "how-to-rank-in-google-maps"],
  },
  {
    slug: "schema-markup",
    name: "Schema Markup",
    path: "/services/schema-markup",
    relatedGlossary: ["schema-markup", "structured-data", "featured-snippets", "serp"],
    relatedQuestions: ["what-is-schema-markup", "what-is-a-serp"],
  },
  {
    slug: "ranking-reports",
    name: "Ranking Reports",
    path: "/services/ranking-reports",
    relatedGlossary: ["serp", "click-through-rate", "impressions", "organic-traffic"],
    relatedQuestions: ["how-to-track-keyword-rankings", "what-is-google-search-console", "what-is-google-analytics"],
  },
];

// ============= Glossary → Question Mappings =============
export const glossaryToQuestions: Record<string, string[]> = {
  "search-engine-optimization": ["what-is-seo", "how-long-does-seo-take", "how-much-does-seo-cost"],
  "organic-traffic": ["what-is-organic-traffic", "seo-vs-ppc"],
  "backlinks": ["what-is-a-backlink", "what-is-link-building", "what-is-off-page-seo"],
  "keyword-research": ["what-is-keyword-research", "how-to-do-local-keyword-research", "what-are-long-tail-keywords"],
  "local-seo": ["what-is-local-seo", "how-to-rank-in-google-maps", "what-is-the-local-pack"],
  "google-business-profile": ["what-is-google-business-profile", "how-to-get-more-google-reviews"],
  "local-pack": ["what-is-the-local-pack", "how-to-rank-in-google-maps"],
  "nap-consistency": ["what-is-nap-consistency", "what-are-local-citations"],
  "local-citations": ["what-are-local-citations", "what-is-local-seo"],
  "schema-markup": ["what-is-schema-markup"],
  "structured-data": ["what-is-schema-markup"],
  "core-web-vitals": ["what-are-core-web-vitals", "how-to-improve-page-speed"],
  "page-speed": ["how-to-improve-page-speed", "what-are-core-web-vitals"],
  "crawl-budget": ["what-is-crawl-budget", "what-is-technical-seo"],
  "mobile-first-indexing": ["what-is-mobile-first-indexing", "what-is-technical-seo"],
  "xml-sitemap": ["what-is-an-xml-sitemap", "what-is-technical-seo"],
  "robots-txt": ["what-is-robots-txt", "what-is-technical-seo"],
  "canonical-tags": ["what-are-canonical-tags", "how-to-fix-duplicate-content"],
  "duplicate-content": ["how-to-fix-duplicate-content", "what-are-canonical-tags"],
  "serp": ["what-is-a-serp"],
  "featured-snippets": ["what-is-a-serp"],
  "domain-authority": ["what-is-domain-authority", "what-is-a-backlink"],
  "link-building": ["what-is-link-building", "what-is-a-backlink", "what-is-off-page-seo"],
  "anchor-text": ["what-is-a-backlink", "what-is-link-building"],
  "long-tail-keywords": ["what-are-long-tail-keywords", "what-is-keyword-research"],
  "short-tail-keywords": ["what-are-long-tail-keywords", "what-is-keyword-research"],
  "search-intent": ["what-is-search-intent", "what-is-keyword-research"],
  "eeat": ["what-is-eeat", "what-is-white-hat-seo"],
  "content-freshness": ["what-is-content-freshness", "how-often-should-i-publish-content"],
  "topic-clusters": ["how-to-build-topic-clusters"],
  "pillar-pages": ["how-to-build-topic-clusters"],
  "meta-description": ["what-is-on-page-seo"],
  "title-tag": ["what-is-on-page-seo"],
  "meta-title": ["what-is-on-page-seo"],
  "header-tags": ["what-is-on-page-seo"],
  "internal-linking": ["what-is-on-page-seo"],
  "image-alt-text": ["what-is-on-page-seo"],
  "click-through-rate": ["how-to-track-keyword-rankings", "what-is-google-search-console"],
  "impressions": ["how-to-track-keyword-rankings", "what-is-google-search-console"],
};

// ============= Question → Glossary Mappings =============
export const questionToGlossary: Record<string, string[]> = {
  "what-is-seo": ["search-engine-optimization", "organic-traffic", "serp", "keyword-research"],
  "how-long-does-seo-take": ["search-engine-optimization", "domain-authority", "backlinks"],
  "how-much-does-seo-cost": ["search-engine-optimization"],
  "what-is-organic-traffic": ["organic-traffic", "serp", "click-through-rate"],
  "what-are-keywords": ["keyword-research", "long-tail-keywords", "short-tail-keywords"],
  "what-is-a-backlink": ["backlinks", "link-building", "anchor-text", "domain-authority"],
  "what-is-domain-authority": ["domain-authority", "page-authority", "backlinks"],
  "what-is-a-serp": ["serp", "featured-snippets", "local-pack"],
  "what-is-local-seo": ["local-seo", "google-business-profile", "local-pack", "local-citations", "nap-consistency"],
  "how-to-rank-in-google-maps": ["google-business-profile", "local-pack", "local-citations", "nap-consistency"],
  "what-is-google-business-profile": ["google-business-profile", "local-seo", "local-pack"],
  "how-to-get-more-google-reviews": ["google-business-profile", "local-seo", "eeat"],
  "what-are-local-citations": ["local-citations", "nap-consistency", "local-seo"],
  "what-is-nap-consistency": ["nap-consistency", "local-citations", "local-seo"],
  "how-to-optimize-for-near-me-searches": ["local-seo", "google-business-profile", "local-pack"],
  "what-is-the-local-pack": ["local-pack", "google-business-profile", "local-seo"],
  "what-is-technical-seo": ["crawl-budget", "core-web-vitals", "mobile-first-indexing", "xml-sitemap", "robots-txt"],
  "how-to-improve-page-speed": ["page-speed", "core-web-vitals"],
  "what-are-core-web-vitals": ["core-web-vitals", "page-speed"],
  "what-is-crawl-budget": ["crawl-budget", "xml-sitemap", "robots-txt"],
  "what-is-schema-markup": ["schema-markup", "structured-data", "featured-snippets"],
  "what-is-mobile-first-indexing": ["mobile-first-indexing", "responsive-design"],
  "what-is-on-page-seo": ["title-tag", "meta-description", "header-tags", "internal-linking", "image-alt-text"],
  "what-is-off-page-seo": ["backlinks", "link-building", "domain-authority"],
  "what-is-keyword-research": ["keyword-research", "long-tail-keywords", "search-intent", "search-volume"],
  "how-to-do-local-keyword-research": ["keyword-research", "local-seo", "search-volume"],
  "what-is-content-marketing": ["content-freshness", "eeat", "topic-clusters"],
  "what-is-an-seo-audit": ["crawl-budget", "core-web-vitals", "backlinks"],
  "what-is-search-intent": ["search-intent", "keyword-research"],
  "what-is-an-xml-sitemap": ["xml-sitemap", "crawl-budget"],
  "what-is-robots-txt": ["robots-txt", "crawl-budget"],
  "what-are-canonical-tags": ["canonical-tags", "duplicate-content"],
  "how-to-fix-duplicate-content": ["duplicate-content", "canonical-tags"],
  "what-are-long-tail-keywords": ["long-tail-keywords", "short-tail-keywords", "keyword-research"],
  "what-is-eeat": ["eeat"],
  "how-long-should-blog-posts-be": ["content-freshness", "long-tail-keywords"],
  "how-to-write-seo-content": ["content-freshness", "eeat", "keyword-research", "search-intent"],
  "how-often-should-i-publish-content": ["content-freshness"],
  "what-is-content-freshness": ["content-freshness"],
  "how-to-do-competitor-analysis": ["domain-authority", "backlinks", "keyword-research"],
  "what-is-link-building": ["link-building", "backlinks", "anchor-text", "domain-authority"],
  "how-to-recover-from-google-penalty": ["backlinks", "link-building"],
  "what-is-white-hat-seo": ["eeat", "link-building", "backlinks"],
  "what-is-black-hat-seo": ["link-building", "backlinks"],
  "how-to-build-topic-clusters": ["topic-clusters", "pillar-pages", "internal-linking"],
  "what-is-seo-roi": ["organic-traffic", "click-through-rate"],
  "seo-vs-ppc": ["organic-traffic", "click-through-rate"],
  "what-is-google-search-console": ["impressions", "click-through-rate", "crawl-budget"],
  "what-is-google-analytics": ["organic-traffic", "click-through-rate"],
  "best-seo-tools": ["crawl-budget", "domain-authority", "keyword-research"],
  "how-to-track-keyword-rankings": ["serp", "click-through-rate", "impressions"],
  "how-to-do-a-site-audit": ["crawl-budget", "core-web-vitals", "backlinks", "duplicate-content"],
  "what-is-screaming-frog": ["crawl-budget", "duplicate-content"],
};

// ============= Question → Service Mappings =============
export const questionToService: Record<string, string[]> = {
  "what-is-seo": ["keyword-research", "technical-seo", "seo-blog-posts"],
  "what-is-local-seo": ["google-business-profile", "local-citations", "review-management"],
  "how-to-rank-in-google-maps": ["google-business-profile", "local-citations", "review-management"],
  "what-is-google-business-profile": ["google-business-profile", "review-management"],
  "how-to-get-more-google-reviews": ["review-management", "google-business-profile"],
  "what-are-local-citations": ["local-citations", "google-business-profile"],
  "what-is-nap-consistency": ["local-citations"],
  "what-is-technical-seo": ["technical-seo"],
  "how-to-improve-page-speed": ["technical-seo"],
  "what-are-core-web-vitals": ["technical-seo"],
  "what-is-crawl-budget": ["technical-seo"],
  "what-is-schema-markup": ["schema-markup"],
  "what-is-keyword-research": ["keyword-research"],
  "what-are-long-tail-keywords": ["keyword-research", "seo-blog-posts"],
  "how-to-write-seo-content": ["seo-blog-posts"],
  "how-long-should-blog-posts-be": ["seo-blog-posts"],
  "how-often-should-i-publish-content": ["seo-blog-posts"],
  "what-is-a-backlink": ["white-hat-backlinks"],
  "what-is-link-building": ["white-hat-backlinks"],
  "how-to-do-competitor-analysis": ["competitor-analysis", "keyword-research"],
  "how-to-track-keyword-rankings": ["ranking-reports"],
  "what-is-google-search-console": ["ranking-reports", "technical-seo"],
};

// ============= Glossary → Service Mappings =============
export const glossaryToService: Record<string, string[]> = {
  "local-seo": ["google-business-profile", "local-citations", "review-management"],
  "google-business-profile": ["google-business-profile", "review-management"],
  "local-pack": ["google-business-profile", "local-citations"],
  "local-citations": ["local-citations"],
  "nap-consistency": ["local-citations", "google-business-profile"],
  "backlinks": ["white-hat-backlinks"],
  "link-building": ["white-hat-backlinks"],
  "anchor-text": ["white-hat-backlinks"],
  "domain-authority": ["white-hat-backlinks", "competitor-analysis"],
  "page-authority": ["white-hat-backlinks"],
  "keyword-research": ["keyword-research"],
  "long-tail-keywords": ["keyword-research", "seo-blog-posts"],
  "short-tail-keywords": ["keyword-research"],
  "search-intent": ["keyword-research", "seo-blog-posts"],
  "search-volume": ["keyword-research"],
  "keyword-difficulty": ["keyword-research", "competitor-analysis"],
  "core-web-vitals": ["technical-seo"],
  "crawl-budget": ["technical-seo"],
  "page-speed": ["technical-seo"],
  "mobile-first-indexing": ["technical-seo"],
  "xml-sitemap": ["technical-seo"],
  "robots-txt": ["technical-seo"],
  "canonical-tags": ["technical-seo"],
  "schema-markup": ["schema-markup"],
  "structured-data": ["schema-markup"],
  "content-freshness": ["seo-blog-posts"],
  "eeat": ["seo-blog-posts", "review-management"],
  "topic-clusters": ["seo-blog-posts", "keyword-research"],
  "pillar-pages": ["seo-blog-posts", "keyword-research"],
  "click-through-rate": ["ranking-reports"],
  "impressions": ["ranking-reports"],
  "serp": ["ranking-reports", "keyword-research"],
  "featured-snippets": ["schema-markup", "seo-blog-posts"],
};

// ============= Navigation Categories =============
export const footerNavigation = {
  services: [
    { name: "All Services", path: "/services" },
    { name: "Technical SEO", path: "/services/technical-seo" },
    { name: "Keyword Research", path: "/services/keyword-research" },
    { name: "SEO Blog Posts", path: "/services/seo-blog-posts" },
    { name: "White-Hat Backlinks", path: "/services/white-hat-backlinks" },
    { name: "Local Citations", path: "/services/local-citations" },
    { name: "Schema Markup", path: "/services/schema-markup" },
  ],
  localSeo: [
    { name: "Google Business Profile", path: "/services/google-business-profile" },
    { name: "Review Management", path: "/services/review-management" },
    { name: "Downtown San Diego", path: "/san-diego/downtown-san-diego-seo" },
    { name: "La Jolla", path: "/san-diego/la-jolla-seo" },
    { name: "North Park", path: "/san-diego/north-park-seo" },
    { name: "Hillcrest", path: "/san-diego/hillcrest-seo" },
  ],
  states: [
    { name: "California SEO", path: "/states/california-seo" },
    { name: "Arizona SEO", path: "/states/arizona-seo" },
    { name: "Colorado SEO", path: "/states/colorado-seo" },
    { name: "Nevada SEO", path: "/states/nevada-seo" },
    { name: "Utah SEO", path: "/states/utah-seo" },
    { name: "Oregon SEO", path: "/states/oregon-seo" },
  ],
  learn: [
    { name: "SEO Blog", path: "/blog" },
    { name: "SEO Glossary", path: "/glossary" },
    { name: "SEO Questions", path: "/questions" },
    { name: "What is SEO?", path: "/questions/what-is-seo" },
    { name: "What is Local SEO?", path: "/questions/what-is-local-seo" },
    { name: "What is Technical SEO?", path: "/questions/what-is-technical-seo" },
  ],
  company: [
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "FAQ", path: "/faq" },
    { name: "Free SEO Audit", path: "/free-audit" },
    { name: "Contact", path: "/#contact" },
  ],
};

// ============= Helper Functions =============
export function getRelatedServices(glossarySlug: string): ServiceLink[] {
  const serviceSlugs = glossaryToService[glossarySlug] || [];
  return serviceLinks.filter(s => serviceSlugs.includes(s.slug));
}

export function getRelatedQuestions(glossarySlug: string): string[] {
  return glossaryToQuestions[glossarySlug] || [];
}

export function getRelatedGlossaryTerms(questionSlug: string): string[] {
  return questionToGlossary[questionSlug] || [];
}

export function getRelatedServicesForQuestion(questionSlug: string): ServiceLink[] {
  const serviceSlugs = questionToService[questionSlug] || [];
  return serviceLinks.filter(s => serviceSlugs.includes(s.slug));
}

export function getServiceBySlug(slug: string): ServiceLink | undefined {
  return serviceLinks.find(s => s.slug === slug);
}
