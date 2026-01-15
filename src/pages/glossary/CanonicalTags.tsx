import GlossaryTermPage from '@/components/GlossaryTermPage';

const CanonicalTagsGlossary = () => (
  <GlossaryTermPage
    slug="canonical-tags"
    term="Canonical Tags"
    category="technical-seo"
    definition="Canonical tags (rel='canonical') are HTML elements that tell search engines which version of a URL is the preferred 'master' copy when duplicate or similar content exists across multiple URLs."
    content={{
      introduction: `Duplicate content is common on websites—product pages with filter parameters, print versions of articles, or HTTP vs HTTPS versions of pages. Without guidance, search engines must guess which version to index and rank. Canonical tags solve this by explicitly declaring the preferred URL, helping consolidate ranking signals and preventing content dilution.`,
      sections: [
        { id: 'how-works', title: 'How Canonicals Work', content: `The canonical tag: Lives in the <head> section of HTML, Points to the preferred version of the page, Consolidates ranking signals to the canonical URL, Is a hint (not directive) to search engines, Can be self-referential (page points to itself), and Works across domains for syndicated content. Google generally respects canonicals but may ignore conflicting signals.` },
        { id: 'use-cases', title: 'When to Use Canonicals', content: `Implement canonical tags for: URL parameters (sorting, filtering, tracking), www vs non-www versions, HTTP vs HTTPS pages, Mobile URLs pointing to desktop, Pagination (debated—Google recommends self-canonicalizing), Syndicated content from other sites, and Product variations with similar content.` },
        { id: 'common-mistakes', title: 'Common Mistakes', content: `Avoid these canonical errors: Pointing to non-indexable pages (noindexed, redirected), Chain canonicals (A→B→C), Canonicals to significantly different content, Conflicting signals (sitemap, hreflang, internal links), Canonicals in body instead of head, and Relative URLs (use absolute URLs). These confuse search engines and waste crawl budget.` },
        { id: 'verification', title: 'Verification and Monitoring', content: `Check canonicals using: Google Search Console URL Inspection, Screaming Frog crawl audits, Ahrefs or SEMrush site audits, Manual inspection via View Source, and Chrome extensions (SEO Meta). Regular audits catch issues before they impact rankings.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'how-works', title: 'How They Work' },
      { id: 'use-cases', title: 'Use Cases' },
      { id: 'common-mistakes', title: 'Common Mistakes' },
      { id: 'verification', title: 'Verification' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Canonical Implementation Issues', data: [{ name: 'Missing', value: 35 }, { name: 'Incorrect', value: 25 }, { name: 'Chain', value: 15 }, { name: 'Conflicting', value: 18 }, { name: 'Correct', value: 7 }] }}
    imageUrl="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop"
    imageAlt="Canonical tags and URL management"
  />
);

export default CanonicalTagsGlossary;
