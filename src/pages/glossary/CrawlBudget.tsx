import GlossaryTermPage from '@/components/GlossaryTermPage';

const CrawlBudgetGlossary = () => (
  <GlossaryTermPage
    slug="crawl-budget"
    term="Crawl Budget"
    category="technical-seo"
    definition="Crawl budget refers to the number of pages search engine bots will crawl on your website within a given timeframe, determined by crawl rate limit and crawl demand."
    content={{
      introduction: `Every website has a crawl budget—the resources Google allocates to discovering and indexing your pages. For small sites (under a few thousand pages), crawl budget is rarely a concern. But for large sites with thousands or millions of pages, managing crawl budget becomes critical to ensure important pages get indexed quickly and efficiently.`,
      sections: [
        { id: 'components', title: 'Crawl Budget Components', content: `Two factors determine crawl budget: Crawl rate limit - maximum crawl speed without overloading servers, and Crawl demand - how much Google wants to crawl based on popularity and freshness. Sites with fast servers and high-value content get more generous crawl budgets.` },
        { id: 'waste', title: 'What Wastes Crawl Budget', content: `Common crawl budget wasters include: Duplicate content across multiple URLs, Soft 404 pages (empty pages returning 200 status), Infinite URL spaces (calendars, filters, sessions), Low-value pages (thin content, old press releases), Redirect chains (multiple consecutive redirects), Hacked or spam pages, and Orphan pages without internal links.` },
        { id: 'optimization', title: 'Optimization Strategies', content: `Protect crawl budget by: Blocking unimportant pages in robots.txt, Using canonical tags for duplicate content, Implementing proper redirects (avoid chains), Improving site speed and server response, Maintaining a clean URL structure, Updating XML sitemaps regularly, and Removing or consolidating low-value content.` },
        { id: 'monitoring', title: 'Monitoring Crawl Activity', content: `Track crawl budget using: Google Search Console's Crawl Stats report, Server log analysis, Third-party SEO tools (Screaming Frog, DeepCrawl), and Core Web Vitals reports. Regular monitoring helps identify crawl issues before they impact indexing.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'components', title: 'Budget Components' },
      { id: 'waste', title: 'Budget Wasters' },
      { id: 'optimization', title: 'Optimization Tips' },
      { id: 'monitoring', title: 'Monitoring' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Common Crawl Budget Issues', data: [{ name: 'Duplicates', value: 35 }, { name: 'Soft 404s', value: 25 }, { name: 'Redirects', value: 20 }, { name: 'Low Value', value: 15 }, { name: 'Orphans', value: 5 }] }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    imageAlt="Crawl budget optimization dashboard showing Googlebot crawling efficiency for technical SEO"
  />
);

export default CrawlBudgetGlossary;
