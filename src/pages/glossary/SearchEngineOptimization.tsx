import GlossaryTermPage from '@/components/GlossaryTermPage';

const SearchEngineOptimizationGlossary = () => (
  <GlossaryTermPage
    slug="search-engine-optimization"
    term="Search Engine Optimization (SEO)"
    category="fundamentals"
    definition="Search Engine Optimization (SEO) is the practice of optimizing websites to rank higher in search engine results pages (SERPs) for relevant keywords, thereby increasing the quantity and quality of organic (non-paid) traffic to your website."
    content={{
      introduction: `Search Engine Optimization is the foundation of digital marketing success in the modern internet era. At its core, SEO is about understanding what people are searching for online, the answers they seek, the words they use, and the type of content they want to consume. By aligning your website's content with these user needs while following search engine guidelines, you can attract visitors who are actively looking for what you offer.

SEO has evolved dramatically since the early days of keyword stuffing and link schemes. Today, it encompasses hundreds of ranking factors including technical website health, content quality, user experience, and off-site signals like backlinks and brand mentions. Google processes over 8.5 billion searches per day, and appearing prominently in these results can transform a business. Studies show that the first organic result captures approximately 27.6% of all clicks, while results on page two receive less than 1% of traffic combined.`,
      sections: [
        { id: 'three-pillars', title: 'The Three Pillars of SEO', content: `SEO is typically divided into three main categories:\n\n**Technical SEO**: Ensures search engines can crawl, index, and render your website properly. This includes site speed, mobile-friendliness, secure connections (HTTPS), structured data, and crawlable site architecture.\n\n**On-Page SEO**: Optimizes individual pages to rank for target keywords. This encompasses title tags, meta descriptions, header structure, content quality, keyword usage, internal linking, and image optimization.\n\n**Off-Page SEO**: Builds your site's authority through external signals, primarily backlinks from other websites, but also brand mentions, social signals, and online reputation management.` },
        { id: 'how-search-works', title: 'How Search Engines Work', content: `Understanding search engine mechanics helps explain why SEO matters:\n\n**Crawling**: Search engines use bots (spiders/crawlers) to discover pages by following links across the web. They start from known pages and discover new content through link connections.\n\n**Indexing**: Once crawled, pages are analyzed and stored in a massive database. Search engines extract meaning, categorize content, and assess quality signals.\n\n**Ranking**: When users search, algorithms instantly evaluate indexed pages against hundreds of factors to deliver the most relevant results in milliseconds.` },
        { id: 'seo-benefits', title: 'Why SEO Matters for Business', content: `Investing in SEO delivers compounding returns:\n\n**Cost-Effective Traffic**: Unlike paid ads that stop when you stop paying, SEO builds sustainable traffic assets.\n\n**High-Intent Visitors**: People searching are actively looking for solutions—making them more likely to convert than passive audiences.\n\n**Competitive Advantage**: Ranking above competitors in search results captures market share and builds brand authority.\n\n**Trust and Credibility**: Users trust organic results more than ads, with 70-80% of users ignoring paid advertisements entirely.\n\n**Long-Term ROI**: While SEO requires patience (typically 3-6 months for results), the traffic compounds over time unlike paid campaigns.` },
        { id: 'getting-started', title: 'Getting Started with SEO', content: `Begin your SEO journey with these foundational steps:\n\n1. **Audit your current state**: Use tools like Google Search Console to understand existing performance\n2. **Research your keywords**: Identify what your target audience searches for\n3. **Fix technical issues**: Ensure your site is crawlable, fast, and mobile-friendly\n4. **Create quality content**: Develop pages that genuinely help users\n5. **Build authority**: Earn backlinks through valuable content and outreach\n6. **Measure and iterate**: Track rankings, traffic, and conversions to refine strategy` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'three-pillars', title: 'The Three Pillars' },
      { id: 'how-search-works', title: 'How Search Works' },
      { id: 'seo-benefits', title: 'Why SEO Matters' },
      { id: 'getting-started', title: 'Getting Started' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Click-Through Rate by Search Position', data: [{ name: 'Position 1', value: 27.6 }, { name: 'Position 2', value: 15.8 }, { name: 'Position 3', value: 11.0 }, { name: 'Position 10', value: 2.4 }] }}
    imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    imageAlt="Search engine optimization SEO strategy dashboard with ranking metrics and website performance analytics"
  />
);

export default SearchEngineOptimizationGlossary;
