import QuestionPage from '@/components/QuestionPage';

const WhatIsCrawlBudget = () => (
  <QuestionPage
    slug="what-is-crawl-budget"
    question="What is Crawl Budget?"
    shortAnswer="Crawl budget is the number of pages Google's crawlers will scan on your website within a given timeframe. Managing it ensures your most important pages get indexed efficiently."
    content={{
      introduction: `Crawl budget is a critical concept in technical SEO that determines how many pages search engine bots will crawl on your website during a specific period. While this might seem like a minor technical detail, understanding and optimizing your crawl budget can significantly impact how quickly your new content gets indexed and how well your entire site performs in search results.

Search engines like Google have finite resources. They can't crawl every page on the internet every day. Instead, they allocate a certain amount of "budget" to each website based on factors like site authority, update frequency, and overall site health. For small websites with fewer than a few hundred pages, crawl budget is rarely a concern. However, for larger sites with thousands or millions of pages, crawl budget optimization becomes essential.

The concept becomes particularly important when you consider that Google might be wasting its crawl budget on pages that don't matter—like duplicate content, thin pages, or irrelevant archives—instead of focusing on your most valuable content. By understanding how crawl budget works, you can ensure search engines spend their time on the pages that drive traffic and conversions.`,
      sections: [
        {
          id: 'how-crawl-budget-works',
          title: 'How Crawl Budget Works',
          content: `Crawl budget is determined by two main factors: **crawl rate limit** and **crawl demand**.

**Crawl Rate Limit**: This is the maximum number of simultaneous connections Googlebot can use to crawl a site, plus the time it waits between fetches. Google adjusts this based on your server's response times—if your server is slow or returns errors, Google reduces the crawl rate to avoid overloading it.

**Crawl Demand**: This represents how much Google wants to crawl your site based on its popularity and freshness. Popular sites with frequently updated content get crawled more often. Google also considers how "stale" your content is in its index—pages that haven't been crawled recently may get priority.

**Factors Affecting Crawl Budget:**
- Site speed and server response times
- Number of internal and external links pointing to pages
- How often content is updated
- Website size and architecture
- Duplicate content and URL parameters
- Redirect chains and 404 errors`
        },
        {
          id: 'why-crawl-budget-matters',
          title: 'Why Crawl Budget Matters',
          content: `For most small to medium-sized websites, crawl budget isn't a major concern. Google is efficient enough to crawl a few hundred pages without issue. However, crawl budget becomes critical in several scenarios:

**Large E-commerce Sites**: Online stores with thousands of products, category pages, filtered views, and variations can quickly accumulate millions of URLs. Without proper management, Google might spend its budget on filtered pages or out-of-stock products instead of your main category and product pages.

**News and Media Sites**: Websites that publish dozens of articles daily need their new content crawled and indexed quickly. If crawl budget is wasted on archives or duplicate pages, fresh content may take longer to appear in search results.

**Sites with Technical Issues**: Websites plagued by duplicate content, infinite URL parameters, or poor site architecture can have their crawl budget depleted before search engines reach important pages.

**User-Generated Content Sites**: Forums, review sites, and social platforms often have millions of pages of varying quality. Prioritizing valuable content over spam or low-quality pages is essential.`
        },
        {
          id: 'optimizing-crawl-budget',
          title: 'How to Optimize Crawl Budget',
          content: `Effective crawl budget optimization involves making it easy for search engines to find and prioritize your important pages:

**1. Improve Site Speed**: Faster servers mean Google can crawl more pages in less time. Optimize server response times, use efficient hosting, and implement caching.

**2. Fix Broken Links and Redirects**: 404 errors and redirect chains waste crawl budget. Regularly audit your site to identify and fix these issues.

**3. Use Robots.txt Wisely**: Block search engines from crawling low-value pages like admin sections, search results pages, and filtered views. Be careful not to block important content.

**4. Implement Canonical Tags**: For duplicate or similar content, use canonical tags to tell Google which version to prioritize, preventing budget waste on duplicates.

**5. Create a Clean URL Structure**: Avoid unnecessary URL parameters and infinite crawl traps. Use static, descriptive URLs where possible.

**6. Optimize XML Sitemaps**: Include only important, indexable pages in your sitemap. Remove redirected, blocked, or low-quality URLs.

**7. Strategic Internal Linking**: Link to important pages from your homepage and key navigation. Orphaned pages are less likely to be crawled regularly.

**8. Monitor Crawl Stats**: Use Google Search Console to track how often Google crawls your site and identify any crawl issues.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'how-crawl-budget-works', title: 'How It Works' },
      { id: 'why-crawl-budget-matters', title: 'Why It Matters' },
      { id: 'optimizing-crawl-budget', title: 'Optimization Tips' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Common Crawl Budget Wasters',
      data: [
        { name: 'Duplicate Content', value: 28 },
        { name: 'URL Parameters', value: 22 },
        { name: 'Redirect Chains', value: 18 },
        { name: '404 Errors', value: 15 },
        { name: 'Thin Content', value: 12 },
        { name: 'Other Issues', value: 5 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
    imageAlt="Server infrastructure representing crawl budget and search engine crawler resources"
    relatedQuestions={[
      { slug: 'what-is-technical-seo', question: 'What is technical SEO?' },
      { slug: 'how-to-improve-page-speed', question: 'How to improve page speed?' },
      { slug: 'what-is-seo', question: 'What is SEO?' }
    ]}
    relatedTerms={[
      { slug: 'crawlability', term: 'Crawlability' },
      { slug: 'indexability', term: 'Indexability' },
      { slug: 'robots-txt', term: 'Robots.txt' }
    ]}
  />
);

export default WhatIsCrawlBudget;
