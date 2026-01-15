import QuestionPage from '@/components/QuestionPage';

const WhatIsOrganicTraffic = () => (
  <QuestionPage
    slug="what-is-organic-traffic"
    question="What is organic traffic?"
    shortAnswer="Organic traffic consists of visitors who find your website through unpaid search engine results, as opposed to paid advertisements, social media, or direct visits. It represents users who discovered your content naturally through search queries."
    content={{
      introduction: `Organic traffic is often considered the holy grail of digital marketing because it represents free, sustainable, high-quality visitors. When someone searches for something on Google, clicks on an unpaid (non-ad) result, and lands on your website—that's organic traffic.

This type of traffic is incredibly valuable for several reasons. First, it's essentially free once you've achieved rankings (unlike pay-per-click advertising). Second, organic visitors tend to be more qualified because they actively searched for something related to what you offer. Third, organic traffic compounds over time as your content continues ranking.

Studies show that organic search drives 53% of all website traffic, making it the largest single source of visitors for most websites. Understanding organic traffic is fundamental to building a successful online presence.`,
      sections: [
        {
          id: 'organic-vs-paid',
          title: 'Organic vs. Paid Traffic',
          content: `Understanding the difference between organic and paid traffic helps inform your marketing strategy:

**Organic Traffic**
- Free (no per-click cost)
- Takes time to build (3-6+ months)
- Long-lasting results
- Higher trust from users (70-80% of users skip ads)
- Compounds over time
- Subject to algorithm changes

**Paid Traffic (PPC)**
- Immediate results
- Costs money for each click
- Stops when budget stops
- Precise targeting options
- Easier to scale quickly
- Lower perceived trust from users

The most effective digital marketing strategies combine both organic and paid approaches, using paid for immediate needs while building organic for long-term sustainability.`
        },
        {
          id: 'measuring-organic',
          title: 'Measuring Organic Traffic',
          content: `Tracking organic traffic accurately is essential for understanding SEO performance:

**Google Analytics 4**
Navigate to Reports > Acquisition > Traffic acquisition and filter by "Organic Search" to see sessions, users, engagement metrics, and conversions from organic sources.

**Google Search Console**
Provides search-specific data including impressions (how often you appear), clicks, click-through rate, and average position for each keyword driving traffic.

**Key Metrics to Track**
- Organic sessions and users
- Pages per session
- Average session duration
- Bounce rate
- Conversion rate from organic
- Top landing pages
- Keyword performance

**Third-Party Tools**
Platforms like Ahrefs, Semrush, and Moz estimate organic traffic and track keyword rankings over time, useful for competitive analysis.`
        },
        {
          id: 'growing-organic',
          title: 'Growing Organic Traffic',
          content: `Building organic traffic requires consistent effort across multiple areas:

**Content Strategy**
Create high-quality content that addresses user needs and targets relevant keywords. Focus on topics your audience actually searches for.

**Keyword Optimization**
Research and target keywords with meaningful search volume. Balance between achievable terms and high-value targets.

**Technical SEO**
Ensure your site is fast, mobile-friendly, and easily crawlable. Fix technical issues that prevent search engines from indexing your content.

**Link Building**
Earn backlinks from reputable websites to build domain authority. Quality matters more than quantity.

**User Experience**
Create engaging experiences that keep visitors on your site. Good engagement signals help maintain and improve rankings.

**Content Freshness**
Regularly update existing content and publish new material to signal that your site is active and authoritative.`
        },
        {
          id: 'quality-matters',
          title: 'Quality Over Quantity',
          content: `Not all organic traffic is equally valuable:

**High-Quality Traffic**
- Visitors who match your target audience
- Users who engage with content
- Visitors who convert (buy, subscribe, contact)
- Traffic from relevant keywords

**Low-Quality Traffic**
- Random visitors with no purchase intent
- Users who bounce immediately
- Traffic from irrelevant keywords
- Visitors outside your service area (for local businesses)

**Focus on Intent**
Prioritize keywords with commercial or transactional intent if revenue is your goal. Informational keywords are valuable for building awareness and authority but may not directly convert.

**Measure What Matters**
Track conversions and revenue from organic traffic, not just traffic volume. A hundred targeted visitors often outperform thousands of random ones.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'organic-vs-paid', title: 'Organic vs. Paid' },
      { id: 'measuring-organic', title: 'Measuring Traffic' },
      { id: 'growing-organic', title: 'Growing Traffic' },
      { id: 'quality-matters', title: 'Quality Over Quantity' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Website Traffic Sources (Average)',
      data: [
        { name: 'Organic Search', value: 53 },
        { name: 'Direct', value: 22 },
        { name: 'Paid Search', value: 15 },
        { name: 'Social', value: 5 },
        { name: 'Other', value: 5 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    imageAlt="Organic traffic analytics dashboard showing website visitors from search engine results and growth metrics"
    relatedQuestions={[
      { slug: 'what-is-seo', question: 'What is SEO?' },
      { slug: 'how-to-write-seo-content', question: 'How do I write SEO-friendly content?' },
      { slug: 'what-is-keyword-research', question: 'What is keyword research?' }
    ]}
    relatedTerms={[
      { slug: 'organic-traffic', term: 'Organic Traffic' },
      { slug: 'click-through-rate', term: 'Click-Through Rate' },
      { slug: 'serp', term: 'SERP' }
    ]}
  />
);

export default WhatIsOrganicTraffic;
