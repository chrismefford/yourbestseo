import GlossaryTermPage from '@/components/GlossaryTermPage';

const CrawlabilityGlossary = () => (
  <GlossaryTermPage
    slug="crawlability"
    term="Crawlability"
    category="technical-seo"
    definition="Crawlability refers to a search engine's ability to access, navigate, and read the content on your website. If search engine bots can't crawl your pages, they won't be indexed or appear in search results, no matter how great your content is."
    content={{
      introduction: `Crawlability is the foundation of technical SEO. Before Google can rank your pages, its bots (Googlebot) must first be able to discover and access them. Think of crawlers as digital explorers navigating your website through links. If pathways are blocked, broken, or too complex, these explorers can't reach your content, and it won't appear in search results. Many websites unknowingly block search engines through technical misconfigurations, wasting valuable content that could drive organic traffic. Ensuring strong crawlability means removing barriers and creating clear paths for search engines to discover every important page on your site.`,
      sections: [
        { id: 'how-crawling-works', title: 'How Search Engine Crawling Works', content: `Search engine bots discover pages through links. Starting from known pages (like your homepage), they follow links to find new content. The crawl budget—how many pages Google will crawl on your site—depends on site size, update frequency, and server capacity. Large sites must prioritize which pages get crawled. Bots also use sitemaps to discover pages and respect robots.txt instructions about what to crawl or avoid.` },
        { id: 'common-issues', title: 'Common Crawlability Issues', content: `Several factors can prevent successful crawling: Robots.txt blocking important pages, noindex tags on content you want indexed, broken internal links creating dead ends, slow server response times causing timeouts, infinite URL parameters creating crawler traps, orphan pages with no internal links, JavaScript-dependent content that bots can't render, redirect chains and loops confusing crawlers, and server errors (5xx) preventing access.` },
        { id: 'optimization', title: 'Improving Crawlability', content: `Optimize crawlability through: Clean site architecture with logical hierarchy, XML sitemaps submitted to Search Console, robots.txt that allows important content, fast server response times (under 200ms ideal), proper internal linking to all important pages, fixing broken links and redirect chains, using HTML for critical content (not just JavaScript), canonical tags to prevent duplicate content issues, and regular crawl audits using tools like Screaming Frog.` },
        { id: 'monitoring', title: 'Monitoring Crawl Health', content: `Track crawlability through Google Search Console's Crawl Stats report showing pages crawled per day, average response time, and crawl budget allocation. Index Coverage report identifies crawl errors. Log file analysis reveals exactly which pages bots access. Third-party crawlers like Screaming Frog simulate bot behavior to identify issues before they impact rankings.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'how-crawling-works', title: 'How Crawling Works' },
      { id: 'common-issues', title: 'Common Issues' },
      { id: 'optimization', title: 'Optimization' },
      { id: 'monitoring', title: 'Monitoring' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Common Crawl Issues by Frequency', data: [{ name: 'Slow Response', value: 32 }, { name: 'Broken Links', value: 28 }, { name: 'Robots.txt', value: 18 }, { name: 'Redirects', value: 14 }] }}
    imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
    imageAlt="Server room representing website crawling infrastructure"
  />
);

export default CrawlabilityGlossary;
