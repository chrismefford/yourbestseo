import GlossaryTermPage from '@/components/GlossaryTermPage';

const CrawlBudgetGlossary = () => (
  <GlossaryTermPage
    slug="crawl-budget"
    term="Crawl Budget"
    category="technical-seo"
    definition="Crawl budget refers to the number of pages search engine bots will crawl on your website within a given timeframe, determined by crawl rate limit and crawl demand. This technical SEO concept is particularly important for large websites with thousands or millions of pages, where efficient crawl budget management ensures important content gets discovered and indexed quickly."
    content={{
      introduction: `Every website has a crawl budget—the resources Google allocates to discovering and indexing your pages. For small sites (under a few thousand pages), crawl budget is rarely a concern. But for large sites with thousands or millions of pages, managing crawl budget becomes critical to ensure important pages get indexed quickly and efficiently. Google's crawlers have limited resources and must prioritize which pages to crawl across the entire web. Your site competes for attention not just with competitors, but with every other site Google indexes. Understanding crawl budget helps you ensure your most valuable pages get crawled regularly while preventing wasted crawls on low-value URLs. Poor crawl budget management can mean new products take weeks to appear in search, or important updates never get noticed.`,
      whyItMatters: `Crawl budget determines how quickly your content appears in search results and how frequently it gets updated. For e-commerce sites adding new products daily, efficient crawl budget means the difference between products appearing in search within days versus weeks. For news sites, it affects whether breaking content gets indexed in minutes or hours. Wasted crawl budget on low-value pages means less crawling of important content—Google might crawl your 404 error pages repeatedly while ignoring new blog posts. Large sites with crawl budget problems often see inconsistent indexing, outdated cached versions in search results, and slow discovery of new content. Optimizing crawl budget improves indexing speed, ensures freshness, and helps all your important content get the attention it deserves.`,
      howItWorks: `Google determines crawl budget through two factors: crawl rate limit and crawl demand. Crawl rate limit is the maximum crawl speed without overloading your server—Google automatically adjusts based on server response times. If your server is slow, Google crawls less to avoid causing problems. Crawl demand is how much Google wants to crawl based on perceived importance—popular, frequently-updated sites get higher demand. These combine into your effective crawl budget. Google prioritizes crawling based on page importance, freshness, and URL discovery. When you waste budget on duplicate content, parameter URLs, or error pages, less budget remains for your important pages. You can monitor crawl activity in Google Search Console's Crawl Stats report.`,
      sections: [
        { id: 'components', title: 'Crawl Budget Components', content: `Two factors determine crawl budget: Crawl rate limit represents the maximum crawl speed Google will use without overloading your servers. If your server responds quickly, Google crawls faster; slow servers get throttled. Crawl demand reflects how much Google wants to crawl based on popularity, freshness signals, and perceived value. Sites with high-value content that updates frequently get higher crawl demand. Combined, these determine your effective crawl budget. High-authority sites with fast servers get the most generous budgets.` },
        { id: 'waste', title: 'What Wastes Crawl Budget', content: `Common crawl budget wasters include: Duplicate content existing at multiple URLs splitting crawl attention. Soft 404 pages that appear empty but return 200 status codes. Infinite URL spaces from calendars, filters, session IDs, or faceted navigation. Low-value pages like thin content, outdated press releases, or empty tags. Redirect chains requiring multiple requests to reach final destinations. Hacked or spam pages that Google keeps trying to access. Orphan pages without internal links that require extra discovery effort.` },
        { id: 'optimization', title: 'Optimization Strategies', content: `Protect crawl budget by: Blocking truly unimportant pages in robots.txt to prevent crawling entirely. Using canonical tags for duplicate content to consolidate crawling. Implementing proper redirects and avoiding chains over 2-3 hops. Improving site speed and server response times for faster crawling. Maintaining clean URL structure without unnecessary parameters. Updating XML sitemaps regularly with only indexable URLs. Removing or consolidating low-value content through content pruning.` },
        { id: 'monitoring', title: 'Monitoring Crawl Activity', content: `Track crawl budget using: Google Search Console's Crawl Stats report showing pages crawled daily, kilobytes downloaded, and average response time. Server log analysis revealing exactly which pages Googlebot accesses and how often. Third-party crawl tools like Screaming Frog or DeepCrawl simulating Google's crawl behavior. Core Web Vitals reports indicating if speed issues might be limiting crawl rate. Index Coverage reports showing whether crawl issues prevent indexing.` }
      ],
      bestPractices: [
        'Use robots.txt to block truly low-value URLs like admin pages, search results pages, and infinite parameter combinations',
        'Implement proper canonicalization to prevent duplicate content from wasting crawl budget',
        'Improve server response times—faster servers get crawled more efficiently',
        'Keep XML sitemaps updated with only canonical, indexable URLs to guide crawlers to important content',
        'Monitor crawl stats in Search Console regularly to identify issues before they impact indexing'
      ],
      commonMistakes: [
        'Blocking important pages in robots.txt, preventing them from being crawled and indexed entirely',
        'Ignoring redirect chains that waste multiple requests reaching a single destination',
        'Having faceted navigation or filters create thousands of parameter URL variations that consume crawl budget'
      ],
      example: `A large e-commerce site with 500,000 product pages noticed new products taking 3-4 weeks to appear in Google search. Analysis revealed significant crawl budget waste: 180,000 URLs from filter combinations (/products?color=red&size=small, etc.), 50,000 pagination URLs, and 30,000 soft 404s from out-of-stock products. They implemented: robots.txt blocking for filter parameters, canonical tags for pagination, proper 404 status for discontinued products, and parameter handling in Search Console. Within 6 weeks, new products appeared in search within 3-5 days, and crawl efficiency (unique pages crawled per day) improved by 280%. The site's overall organic traffic increased by 15% as important pages received more regular crawling and fresher indexing.`
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-it-matters', title: 'Why It Matters' },
      { id: 'how-it-works', title: 'How It Works' },
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
