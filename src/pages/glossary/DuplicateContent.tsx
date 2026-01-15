import GlossaryTermPage from '@/components/GlossaryTermPage';

const DuplicateContentGlossary = () => (
  <GlossaryTermPage
    slug="duplicate-content"
    term="Duplicate Content"
    category="content-seo"
    definition="Duplicate content refers to substantial blocks of content that appear on multiple URLs, either within a single website or across different domains, potentially causing ranking and crawl issues."
    content={{
      introduction: `Duplicate content occurs when the same or very similar content exists at multiple URLs. While Google doesn't have a formal "duplicate content penalty," it creates challenges: search engines must choose which version to rank, link equity gets split, and crawl budget is wasted. Understanding and resolving duplicates is essential for SEO health.`,
      sections: [
        { id: 'types', title: 'Types of Duplicate Content', content: `Duplicates come from: Internal duplicates (www vs non-www, HTTP vs HTTPS, trailing slashes), URL parameters creating multiple versions, Printer-friendly pages, Session IDs in URLs, Scraped or syndicated content, and Product descriptions used by multiple retailers.` },
        { id: 'issues', title: 'Problems Caused', content: `Duplicate content causes: Diluted ranking signals across versions, Wasted crawl budget on redundant pages, Unpredictable ranking of preferred version, Split backlink equity, Confused user experience, and Potential filtering from search results (not penalty, but non-indexing).` },
        { id: 'detection', title: 'Finding Duplicates', content: `Detect duplicates using: Site crawlers like Screaming Frog, Google Search Console coverage reports, Copyscape for external duplicates, "site:" searches with quoted content, SEO tools' duplicate content reports, and Manual review of thin content areas.` },
        { id: 'solutions', title: 'Resolution Methods', content: `Fix duplicates through: Canonical tags pointing to preferred version, 301 redirects for consolidation, Parameter handling in Search Console, Consistent internal linking, rel="nofollow" for syndicated content, and Rewriting to create unique versions when necessary.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'types', title: 'Types of Duplicates' },
      { id: 'issues', title: 'Problems Caused' },
      { id: 'detection', title: 'Finding Duplicates' },
      { id: 'solutions', title: 'Resolution Methods' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Common Duplicate Sources', data: [{ name: 'URL Variations', value: 35 }, { name: 'Parameters', value: 25 }, { name: 'Syndication', value: 20 }, { name: 'Boilerplate', value: 12 }, { name: 'Scraped', value: 8 }] }}
    imageUrl="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=400&fit=crop"
    imageAlt="Duplicate content detection and resolution"
  />
);

export default DuplicateContentGlossary;