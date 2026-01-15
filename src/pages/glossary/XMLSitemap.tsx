import GlossaryTermPage from '@/components/GlossaryTermPage';

const XMLSitemapGlossary = () => (
  <GlossaryTermPage
    slug="xml-sitemap"
    term="XML Sitemap"
    category="technical-seo"
    definition="An XML sitemap is a file that lists all important URLs on your website, helping search engines discover, crawl, and index your content more efficiently."
    content={{
      introduction: `XML sitemaps serve as roadmaps for search engine crawlers, listing the pages you want indexed along with metadata about each URL. While search engines can discover pages through links, sitemaps ensure no important content is missed, especially on large sites or those with complex architectures.`,
      sections: [
        { id: 'structure', title: 'Sitemap Structure', content: `XML sitemaps contain: URL location (loc) - the page address, Last modified (lastmod) - when content changed, Change frequency (changefreq) - how often it updates, Priority (priority) - relative importance (0.0-1.0). Only loc is required; others are hints to crawlers that may be ignored.` },
        { id: 'benefits', title: 'Benefits of Sitemaps', content: `Sitemaps help with: Faster discovery of new content, Indexing orphan pages with few links, Communicating content priorities, Helping large sites get crawled, Indexing dynamic content, and Providing metadata about pages. They're especially valuable for new sites and major content additions.` },
        { id: 'best-practices', title: 'Best Practices', content: `Optimize your sitemap by: Including only indexable, canonical URLs, Keeping under 50,000 URLs per sitemap, Using sitemap index for large sites, Updating lastmod only for real changes, Excluding noindex and redirected pages, Submitting to Google Search Console, and Referencing in robots.txt.` },
        { id: 'types', title: 'Sitemap Types', content: `Different sitemap varieties: Standard XML sitemap for web pages, Image sitemap for image content, Video sitemap for video content, News sitemap for Google News publishers, and Sitemap index combining multiple sitemaps. Each type helps search engines understand specific content types.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'structure', title: 'Sitemap Structure' },
      { id: 'benefits', title: 'Benefits of Sitemaps' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'types', title: 'Sitemap Types' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Sitemap Impact on Indexing', data: [{ name: 'With Sitemap', value: 85 }, { name: 'Without Sitemap', value: 60 }] }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    imageAlt="XML sitemap file structure showing website URL mapping for search engine crawling"
  />
);

export default XMLSitemapGlossary;