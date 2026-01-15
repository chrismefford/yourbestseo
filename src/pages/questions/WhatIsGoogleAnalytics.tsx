import QuestionPage from '@/components/QuestionPage';

const WhatIsGoogleAnalytics = () => (
  <QuestionPage
    slug="what-is-google-analytics"
    question="What is Google Analytics?"
    shortAnswer="Google Analytics is a web analytics platform that tracks website traffic and user behavior. It helps you measure acquisition channels, engagement, conversions, and the effectiveness of marketing—including SEO."
    content={{
      introduction: `Google Analytics is the most widely used analytics tool for understanding how visitors find and use your website. In its modern version (GA4), it uses an event-based model that tracks user interactions across devices.

For SEO, Analytics is especially useful after the click—helping you see whether organic visitors engage, convert, and return.`,
      sections: [
        {
          id: 'what-is-ga',
          title: 'What is Google Analytics?',
          content: `Google Analytics tracks:
- Where users come from (organic, direct, referral, paid)
- Which pages they visit
- How long they stay and what they do
- Which actions count as conversions

GA4 is built around events, allowing more flexible tracking than older versions.`
        },
        {
          id: 'ga4-features',
          title: 'GA4 Key Features',
          content: `Key GA4 features include:
- Event-based tracking
- Cross-device analysis
- Enhanced measurement (scrolls, outbound clicks, etc.)
- Explorations (funnels, paths)
- Predictive audiences (in some setups)

It’s designed for privacy and a cookieless future compared to older analytics models.`
        },
        {
          id: 'key-metrics',
          title: 'Essential Metrics',
          content: `Useful metrics for SEO analysis include:
- Users and sessions (volume)
- Engagement rate (quality)
- Average engagement time
- Conversions and conversion rate
- Landing page performance
- Traffic source breakdown (organic search)`
        },
        {
          id: 'reports',
          title: 'Report Types',
          content: `GA4 organizes data into:
- Realtime
- Acquisition
- Engagement
- Monetization (if ecommerce)
- Retention

Use Explorations for deeper analysis like funnels and user journeys.`
        },
        {
          id: 'seo-analytics',
          title: 'Using GA for SEO',
          content: `For SEO, focus on:
- Organic landing pages (which pages get traffic from search)
- Engagement and conversions from organic users
- Content that drives assisted conversions
- Mobile vs desktop performance

Combine GA4 with Search Console:
- Search Console = queries + impressions
- Analytics = behavior + conversions after the click` 
        },
        {
          id: 'setup',
          title: 'Setup Guide',
          content: `Typical setup steps:
1. Create a GA4 property
2. Install tracking (Tag Manager recommended)
3. Enable enhanced measurement
4. Define conversions
5. Connect Search Console if possible

Validate installation by checking Realtime and triggering events on your site.`
        },
        {
          id: 'best-practices',
          title: 'Best Practices',
          content: `- Filter internal traffic
- Use consistent UTM tagging for campaigns
- Track key conversions (forms, calls, purchases)
- Review organic landing pages monthly
- Segment by device and location

Analytics turns SEO from “ranking reports” into “business outcomes.”`
        }
      ]
    }}
    tableOfContents={[
      { id: 'what-is-ga', title: 'What is Google Analytics?' },
      { id: 'ga4-features', title: 'GA4 Key Features' },
      { id: 'key-metrics', title: 'Essential Metrics' },
      { id: 'reports', title: 'Report Types' },
      { id: 'seo-analytics', title: 'Using GA for SEO' },
      { id: 'setup', title: 'Setup Guide' },
      { id: 'best-practices', title: 'Best Practices' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Example Website Traffic Source Mix',
      data: [
        { name: 'Organic', value: 45 },
        { name: 'Direct', value: 25 },
        { name: 'Referral', value: 15 },
        { name: 'Social', value: 10 },
        { name: 'Paid', value: 5 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
    imageAlt="Google Analytics dashboard showing website traffic data and user behavior metrics for digital marketing analysis"
    relatedQuestions={[
      { slug: 'what-is-google-search-console', question: 'What is Google Search Console?' },
      { slug: 'what-is-organic-traffic', question: 'What is organic traffic?' },
      { slug: 'how-to-track-keyword-rankings', question: 'How do I track keyword rankings?' },
      { slug: 'what-is-seo-roi', question: 'What is the ROI of SEO?' }
    ]}
    relatedTerms={[
      { slug: 'organic-traffic', term: 'Organic Traffic' },
      { slug: 'click-through-rate', term: 'Click-Through Rate' },
      { slug: 'impressions', term: 'Impressions' },
      { slug: 'serp', term: 'SERP' }
    ]}
  />
);

export default WhatIsGoogleAnalytics;
