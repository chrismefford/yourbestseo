import GlossaryTermPage from '@/components/GlossaryTermPage';

const CanonicalTagsGlossary = () => (
  <GlossaryTermPage
    slug="canonical-tags"
    term="Canonical Tags"
    category="technical-seo"
    definition="Canonical tags (rel='canonical') are HTML elements that tell search engines which version of a URL is the preferred 'master' copy when duplicate or similar content exists across multiple URLs. This essential technical SEO element helps consolidate ranking signals, prevent duplicate content issues, and ensure search engines index the version you want users to find."
    content={{
      introduction: `Duplicate content is common on websites—product pages with filter parameters, print versions of articles, or HTTP vs HTTPS versions of pages. Without guidance, search engines must guess which version to index and rank. Canonical tags solve this by explicitly declaring the preferred URL, helping consolidate ranking signals and preventing content dilution. The canonical tag lives in the HTML <head> section and points to the URL you want search engines to treat as the authoritative version. When implemented correctly, all the SEO value from duplicate pages—backlinks, engagement signals, and relevance—gets credited to the canonical URL rather than being split across multiple versions.`,
      whyItMatters: `Without canonical tags, duplicate content can severely impact your SEO performance. When the same content exists at multiple URLs, search engines must decide which version to index—and they might choose wrong. Worse, ranking signals like backlinks get diluted across multiple URLs instead of consolidating to your preferred page. This means a page that should rank highly might underperform because its authority is fragmented. Canonicals also prevent crawl budget waste—Google won't repeatedly crawl duplicate versions when it knows which URL matters. For e-commerce sites with thousands of product variations or parameter-based URLs, proper canonicalization can mean the difference between products ranking or disappearing from search results.`,
      howItWorks: `The canonical tag is an HTML element placed in the <head> section of a page. It looks like: <link rel="canonical" href="https://example.com/preferred-page/" />. When Googlebot encounters this tag, it treats the specified URL as the master version and consolidates all ranking signals to that URL. The tag is a hint, not a directive—Google may ignore it if the canonical URL is very different from the duplicate, if the canonical points to a noindex page, or if conflicting signals exist. Canonical tags can point to pages on the same domain or different domains (for syndicated content). Pages can be self-referential, meaning they canonicalize to themselves—this is actually a best practice to prevent future duplicate issues.`,
      sections: [
        { id: 'how-works', title: 'How Canonicals Work', content: `The canonical tag: Lives in the <head> section of HTML as a link element. Points to the preferred version of the page using an absolute URL. Consolidates all ranking signals (links, engagement) to the canonical URL. Is a hint, not a strict directive—Google may override if signals conflict. Can be self-referential, where a page points to itself as the canonical. Works across domains for syndicated or republished content. Generally gets respected by Google but can be ignored with conflicting signals.` },
        { id: 'use-cases', title: 'When to Use Canonicals', content: `Implement canonical tags for: URL parameters from sorting, filtering, tracking codes, or session IDs. www vs non-www versions of your domain. HTTP vs HTTPS page versions (in addition to redirects). Mobile URLs pointing to desktop versions when using separate mobile sites. Pagination—pages in a series should typically self-canonicalize. Syndicated content republished from other sites to credit the original. Product variations with nearly identical content.` },
        { id: 'common-mistakes', title: 'Common Mistakes', content: `Avoid these canonical errors: Pointing to non-indexable pages like noindexed or redirected URLs. Creating chain canonicals where A points to B, which points to C. Canonicalizing to significantly different content that confuses Google. Creating conflicting signals between sitemap, hreflang, and internal links. Placing canonicals in the body instead of head section. Using relative URLs instead of absolute URLs with full domain. These mistakes confuse search engines and waste crawl budget.` },
        { id: 'verification', title: 'Verification and Monitoring', content: `Check canonicals using: Google Search Console URL Inspection tool shows how Google interprets canonicals. Screaming Frog crawl audits identify missing, incorrect, or chain canonicals. Ahrefs or SEMrush site audits flag canonical issues at scale. Manual inspection via View Page Source in your browser. Chrome extensions like SEO Meta in 1 Click display canonical information. Regular audits catch issues before they impact rankings significantly.` }
      ],
      bestPractices: [
        'Always use absolute URLs with full domain (https://example.com/page/) rather than relative URLs in canonical tags',
        'Make pages self-referential by default—every page should have a canonical tag pointing to itself unless duplicate content exists',
        'Ensure consistency between canonicals and other signals like internal links, sitemaps, and hreflang tags',
        'Only canonicalize to pages that are indexable—never point to noindex, redirected, or error pages',
        'Use the same canonical URL for both mobile and desktop versions when using responsive design'
      ],
      commonMistakes: [
        'Creating canonical chains (A→B→C) instead of having all duplicates point directly to the preferred URL',
        'Setting canonicals to different content—if pages are substantially different, they shouldn\'t be canonicalized together',
        'Forgetting to update canonicals after site migrations, leaving them pointing to old URLs that no longer exist'
      ],
      example: `An e-commerce site had product pages accessible via multiple URLs due to filtering parameters: /products/blue-widget, /products/blue-widget?sort=price, and /products/blue-widget?ref=homepage. Each URL had the same content but was being indexed separately, diluting the page's ranking signals. They implemented canonical tags on all parameter variations pointing to the clean URL (/products/blue-widget). Within 6 weeks, Google consolidated the indexed versions to the canonical URL, and the product page's rankings improved from position 15 to position 6 for its target keyword as all backlinks and engagement signals were properly attributed.`
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-it-matters', title: 'Why It Matters' },
      { id: 'how-it-works', title: 'How It Works' },
      { id: 'how-works', title: 'How Canonicals Work' },
      { id: 'use-cases', title: 'Use Cases' },
      { id: 'common-mistakes', title: 'Common Mistakes' },
      { id: 'verification', title: 'Verification' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Canonical Implementation Issues', data: [{ name: 'Missing', value: 35 }, { name: 'Incorrect', value: 25 }, { name: 'Chain', value: 15 }, { name: 'Conflicting', value: 18 }, { name: 'Correct', value: 7 }] }}
    imageUrl="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop"
    imageAlt="Canonical tags implementation showing duplicate content management for technical SEO"
  />
);

export default CanonicalTagsGlossary;
