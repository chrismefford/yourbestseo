import GlossaryTermPage from '@/components/GlossaryTermPage';

const IndexabilityGlossary = () => (
  <GlossaryTermPage
    slug="indexability"
    term="Indexability"
    category="technical-seo"
    definition="Indexability refers to a search engine's ability to analyze and add a webpage to its index after crawling it. A page must be both crawlable and indexable to appear in search results and rank for relevant queries."
    content={{
      introduction: `While crawlability determines whether search engines can access your pages, indexability determines whether they'll add those pages to their searchable database. Even if Googlebot successfully crawls a page, various factors can prevent indexing—from explicit noindex directives to quality issues that make Google decide the page isn't worth including. Understanding the difference between crawling and indexing is crucial: crawling is discovery, indexing is acceptance into Google's library of searchable content. Without indexability, your content exists in a void, invisible to searchers regardless of its quality or relevance.`,
      sections: [
        { id: 'crawling-vs-indexing', title: 'Crawling vs. Indexing', content: `These are distinct processes: **Crawling** is when Googlebot visits and reads your page content. **Indexing** is when Google processes that content and adds it to its searchable database. A page can be crawled but not indexed if Google determines it's low-quality, duplicate, or explicitly blocked from indexing. Conversely, pages blocked from crawling via robots.txt might still get indexed if Google finds links to them (showing URL only, no content).` },
        { id: 'blocking-indexing', title: 'What Prevents Indexing', content: `Several factors prevent pages from being indexed: **Noindex meta tag** explicitly tells search engines not to index, **Noindex X-Robots-Tag** HTTP header serves the same purpose, **Canonical pointing elsewhere** signals duplicate content, **Low-quality or thin content** may not meet Google's quality threshold, **Duplicate content** across your site or the web, **Soft 404s** (pages that should return 404 but don't), **Crawl budget exhaustion** on large sites, and **Manual actions** or penalties from Google.` },
        { id: 'checking-status', title: 'Checking Index Status', content: `Verify indexing through multiple methods: **Google Search Console Index Coverage** report shows indexed, excluded, and error pages, **URL Inspection tool** reveals the exact status of individual URLs, **site: search operator** (site:yourdomain.com) shows indexed pages, **Cache check** via cache:URL shows Google's stored version. Regular monitoring catches indexing issues before they impact traffic significantly.` },
        { id: 'improving', title: 'Improving Indexability', content: `Ensure your important pages get indexed: Create unique, valuable content that deserves indexing, use proper canonical tags to consolidate duplicate content, submit XML sitemaps to help Google discover pages, build internal links to orphan pages, remove noindex from pages you want indexed, fix soft 404s and server errors, improve page quality for thin content, request indexing via URL Inspection for priority pages, and ensure mobile-friendliness for mobile-first indexing.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'crawling-vs-indexing', title: 'Crawling vs. Indexing' },
      { id: 'blocking-indexing', title: 'What Prevents Indexing' },
      { id: 'checking-status', title: 'Checking Status' },
      { id: 'improving', title: 'Improving Indexability' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Common Indexing Exclusion Reasons', data: [{ name: 'Duplicate', value: 35 }, { name: 'Noindex', value: 25 }, { name: 'Crawled Not Indexed', value: 22 }, { name: 'Soft 404', value: 12 }] }}
    imageUrl="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop"
    imageAlt="Filing cabinet representing search engine indexing database"
  />
);

export default IndexabilityGlossary;
