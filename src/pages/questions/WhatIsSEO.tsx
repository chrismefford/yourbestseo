import QuestionPage from '@/components/QuestionPage';

const WhatIsSEO = () => (
  <QuestionPage
    slug="what-is-seo"
    question="What is SEO?"
    shortAnswer="SEO (Search Engine Optimization) is the practice of optimizing websites to rank higher in search engine results pages (SERPs), thereby increasing organic (non-paid) traffic to your website."
    content={{
      introduction: `Search Engine Optimization, commonly known as SEO, is one of the most important digital marketing strategies for businesses of all sizes. At its core, SEO is about making your website more visible to people who are searching for products, services, or information related to what you offer.

When someone types a query into Google, Bing, or another search engine, algorithms analyze billions of web pages to deliver the most relevant results. SEO is the process of optimizing your website so that search engines understand your content and consider it valuable enough to show prominently in search results.

The importance of SEO cannot be overstated. Over 90% of online experiences begin with a search engine, and the first page of Google captures 71% of search traffic clicks. If your website isn't appearing on page one for relevant searches, you're missing out on potential customers who are actively looking for what you offer.`,
      sections: [
        {
          id: 'how-seo-works',
          title: 'How Does SEO Work?',
          content: `SEO works by aligning your website with the factors that search engines use to rank pages. While Google's algorithm considers over 200 ranking factors, they can be grouped into three main categories:

**Technical SEO** ensures search engines can crawl and index your website properly. This includes site speed, mobile-friendliness, secure connections (HTTPS), and proper site architecture.

**On-Page SEO** optimizes individual pages for specific keywords. This involves crafting compelling title tags, meta descriptions, headers, and content that matches what users are searching for.

**Off-Page SEO** builds your website's authority through external signals, primarily backlinks from other reputable websites. When other sites link to yours, it signals to search engines that your content is valuable and trustworthy.`
        },
        {
          id: 'benefits',
          title: 'Benefits of SEO',
          content: `Investing in SEO provides numerous long-term benefits for your business:

**Cost-Effective Traffic**: Unlike paid advertising where you pay for each click, organic traffic is essentially free once you've achieved rankings. This makes SEO one of the highest ROI marketing channels.

**Builds Credibility**: Users trust organic results more than ads. Ranking highly signals to potential customers that you're an authority in your industry.

**Long-Term Results**: While SEO takes time, the results compound over time. A well-optimized page can generate traffic for years, unlike paid ads that stop the moment you stop paying.

**Targeted Visitors**: SEO attracts people who are actively searching for what you offer, making them more likely to convert than passive audiences reached through display advertising.

**Competitive Advantage**: If your competitors are investing in SEO and you're not, they're capturing potential customers who would otherwise find you.`
        },
        {
          id: 'getting-started',
          title: 'Getting Started with SEO',
          content: `Beginning your SEO journey involves several key steps:

**1. Keyword Research**: Identify the terms your target audience uses when searching for your products or services. Tools like Google Keyword Planner, Ahrefs, or Semrush can help.

**2. Technical Audit**: Ensure your website is technically sound. Check for crawl errors, broken links, slow loading pages, and mobile-friendliness issues.

**3. Content Optimization**: Create high-quality content that addresses user needs. Optimize title tags, meta descriptions, and headers for your target keywords.

**4. Build Authority**: Earn backlinks from reputable websites through content marketing, guest posting, and building relationships in your industry.

**5. Track and Measure**: Use Google Search Console and Google Analytics to monitor your progress and identify opportunities for improvement.

SEO is a marathon, not a sprint. Results typically take 3-6 months to materialize, but the long-term benefits make it one of the most valuable investments you can make in your online presence.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'how-seo-works', title: 'How SEO Works' },
      { id: 'benefits', title: 'Benefits of SEO' },
      { id: 'getting-started', title: 'Getting Started' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Traffic Distribution by Google Position',
      data: [
        { name: 'Position 1', value: 28 },
        { name: 'Position 2', value: 16 },
        { name: 'Position 3', value: 11 },
        { name: 'Position 4-10', value: 15 },
        { name: 'Page 2+', value: 1 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=400&fit=crop"
    imageAlt="SEO search engine optimization strategy planning with analytics dashboard and keyword research tools"
    relatedQuestions={[
      { slug: 'how-long-does-seo-take', question: 'How long does SEO take to work?' },
      { slug: 'how-much-does-seo-cost', question: 'How much does SEO cost?' },
      { slug: 'what-is-organic-traffic', question: 'What is organic traffic?' }
    ]}
    relatedTerms={[
      { slug: 'search-engine-optimization', term: 'Search Engine Optimization' },
      { slug: 'organic-traffic', term: 'Organic Traffic' },
      { slug: 'keyword-research', term: 'Keyword Research' }
    ]}
  />
);

export default WhatIsSEO;
