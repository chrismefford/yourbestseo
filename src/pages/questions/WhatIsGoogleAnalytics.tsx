import QuestionPage from '@/components/QuestionPage';

const WhatIsGoogleAnalytics = () => {
  return (
    <QuestionPage
      question="What is Google Analytics?"
      slug="what-is-google-analytics"
      shortAnswer="Google Analytics is a free web analytics service that tracks and reports website traffic, user behavior, and conversions. It helps you understand how visitors interact with your site and measure marketing effectiveness."
      lastUpdated="2025-01-10"
      readTime="9 min read"
      featuredImage={{
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        alt: "Google Analytics dashboard showing website traffic data and user behavior metrics for digital marketing analysis"
      }}
      introduction="Google Analytics is the most widely used web analytics platform in the world, providing invaluable insights into website performance and user behavior. Now in its fourth generation (GA4), Google Analytics helps businesses of all sizes understand their audience, track conversions, and make data-driven decisions. Whether you're measuring the success of SEO campaigns, analyzing user journeys, or identifying your most valuable content, Google Analytics provides the data you need. This comprehensive guide covers everything from basic concepts to advanced features, helping you leverage analytics for better marketing outcomes."
      tableOfContents={[
        { id: 'what-is-ga', title: 'What is Google Analytics?' },
        { id: 'ga4-features', title: 'GA4 Key Features' },
        { id: 'key-metrics', title: 'Essential Metrics' },
        { id: 'reports', title: 'Report Types' },
        { id: 'seo-analytics', title: 'Using GA for SEO' },
        { id: 'setup', title: 'Setup Guide' },
        { id: 'best-practices', title: 'Best Practices' }
      ]}
      contentSections={[
        {
          id: 'what-is-ga',
          title: 'What is Google Analytics?',
          content: `**Google Analytics** is a free web analytics service that tracks and reports website traffic and user behavior.

**Core Capabilities:**
- Track visitor numbers and sources
- Understand user demographics and interests
- Monitor engagement and behavior
- Measure conversions and goals
- Analyze marketing campaign performance

**Evolution to GA4:**
Google Analytics 4 (GA4) replaced Universal Analytics in July 2023. Key differences:
- **Event-based model**: Everything is tracked as events
- **Cross-platform**: Track web and app together
- **Privacy-first**: Designed for a cookieless future
- **AI insights**: Machine learning predictions
- **BigQuery integration**: Free data export

**Who Uses It:**
- 30+ million websites worldwide
- Marketers and SEO professionals
- Business owners and executives
- Product managers
- Developers and analysts

Google Analytics is essential for understanding website performance and making informed marketing decisions.`
        },
        {
          id: 'ga4-features',
          title: 'GA4 Key Features',
          content: `Google Analytics 4 introduces powerful features for modern web analytics.

**Event-Based Tracking:**
Every interaction is an event:
- Page views
- Scrolls
- Clicks
- Video plays
- File downloads
- Form submissions

**Enhanced Measurement:**
Automatic tracking without code:
- Outbound link clicks
- Site search
- Video engagement
- File downloads
- Scroll depth

**Predictive Metrics:**
AI-powered predictions:
- Purchase probability
- Churn probability
- Predicted revenue

**Audiences & Segments:**
Build detailed audiences:
- Behavioral segments
- Demographic targeting
- Custom conditions
- Predictive audiences

**Explorations:**
Advanced analysis tools:
- Funnel exploration
- Path analysis
- Segment overlap
- User lifetime analysis

**Privacy Controls:**
Built-in compliance features:
- Data retention settings
- User deletion tools
- Consent mode integration
- IP anonymization`
        },
        {
          id: 'key-metrics',
          title: 'Essential Metrics to Track',
          content: `Understanding key metrics helps you measure website success.

**User Metrics:**
- **Users**: Unique visitors to your site
- **New Users**: First-time visitors
- **Active Users**: Users with engaged sessions
- **User Retention**: Return visitor rates

**Engagement Metrics:**
- **Sessions**: Individual visits
- **Engaged Sessions**: Sessions >10 seconds, 2+ page views, or conversion
- **Engagement Rate**: Engaged sessions ÷ total sessions
- **Average Engagement Time**: Time actively viewing content

**Acquisition Metrics:**
- **Traffic Sources**: Where users come from
- **Organic Search**: Visits from search engines
- **Direct**: Users typing URL directly
- **Referral**: Links from other sites
- **Social**: Social media traffic

**Behavior Metrics:**
- **Views**: Page or screen views
- **Events**: Tracked interactions
- **Conversions**: Completed goals

**Conversion Metrics:**
- **Conversion Rate**: Conversions ÷ sessions
- **Revenue**: E-commerce sales
- **Event Count**: Total event occurrences`
        },
        {
          id: 'reports',
          title: 'Understanding GA4 Reports',
          content: `GA4 organizes data into several report categories.

**Reports Snapshot:**
Overview dashboard showing:
- User trends
- Recent performance
- Top insights
- Realtime activity

**Realtime Report:**
Live data showing:
- Users on site now
- Top pages being viewed
- Events happening
- Geographic distribution

**Life Cycle Reports:**

**Acquisition:**
- User acquisition (new users by source)
- Traffic acquisition (sessions by source)
- First touch vs. last touch

**Engagement:**
- Pages and screens performance
- Events triggered
- Conversion tracking
- Landing pages

**Monetization:**
- E-commerce revenue
- Purchase behavior
- Product performance

**Retention:**
- Return user rates
- Cohort analysis
- Lifetime value

**User Reports:**
- Demographics (age, gender)
- Tech (devices, browsers)
- Interests`
        },
        {
          id: 'seo-analytics',
          title: 'Using Google Analytics for SEO',
          content: `Google Analytics provides valuable SEO insights when used correctly.

**Tracking Organic Traffic:**
Navigate to Acquisition → Traffic Acquisition and filter by "Organic Search" to see:
- Organic session trends
- Engagement rates from search
- Organic conversions
- Landing page performance

**Analyzing Landing Pages:**
Engagement → Pages and screens shows:
- Top entry pages
- Bounce rates by page
- Average engagement time
- Conversion paths

**Content Performance:**
Identify your best content:
- Most viewed pages
- Highest engagement
- Best converting content
- Content gaps

**Connecting with Search Console:**
Link accounts to see:
- Search queries in GA4
- Impressions and clicks
- Ranking positions
- Combined insights

**Setting Up Goals:**
Track SEO conversions:
- Form submissions
- Phone calls
- Newsletter signups
- Purchase completions

**Custom Reports for SEO:**
Build explorations for:
- Organic landing page funnels
- Content performance by category
- Mobile vs. desktop organic traffic
- Geographic SEO performance`
        },
        {
          id: 'setup',
          title: 'Setup Guide',
          content: `Getting started with GA4 requires proper configuration.

**Step 1: Create Account**
1. Go to analytics.google.com
2. Sign in with Google account
3. Create new GA4 property
4. Configure data streams

**Step 2: Install Tracking Code**
Options for installation:
- Google Tag Manager (recommended)
- Direct gtag.js code
- WordPress plugin
- CMS integration

**Step 3: Configure Enhanced Measurement**
Enable automatic tracking:
- Page views ✓
- Scrolls ✓
- Outbound clicks ✓
- Site search ✓
- Video engagement ✓
- File downloads ✓

**Step 4: Set Up Conversions**
Mark important events as conversions:
- Purchase
- Lead submission
- Sign up
- Contact

**Step 5: Connect Integrations**
Link with:
- Google Search Console
- Google Ads
- BigQuery
- Merchant Center

**Step 6: Configure Users**
Add team members with appropriate access:
- Administrator
- Editor
- Analyst
- Viewer`
        },
        {
          id: 'best-practices',
          title: 'Google Analytics Best Practices',
          content: `Maximize your analytics value with these proven practices.

**Data Quality:**
- Use consistent UTM parameters
- Filter out internal traffic
- Set up cross-domain tracking if needed
- Verify tracking is working correctly

**Regular Monitoring:**
- Check data daily or weekly
- Set up custom alerts
- Review anomalies promptly
- Track against benchmarks

**Reporting:**
- Create custom dashboards
- Schedule automated reports
- Share insights with stakeholders
- Document findings

**Privacy Compliance:**
- Implement consent management
- Configure data retention settings
- Use anonymization features
- Create privacy policy

**Advanced Tips:**
- Use segments for deeper analysis
- Build audiences for remarketing
- Create custom dimensions/metrics
- Export to BigQuery for advanced analysis

**Common Mistakes to Avoid:**
- Not filtering bot traffic
- Ignoring data sampling
- Forgetting to set conversions
- Not linking Search Console
- Overlooking mobile performance

**Integration with SEO:**
Combine GA4 data with Search Console insights for complete picture:
- GSC for search queries and impressions
- GA4 for user behavior post-click
- Both for comprehensive SEO reporting

Google Analytics is essential for measuring SEO success and understanding your audience. Master it to make data-driven marketing decisions.`
        }
      ]}
      chartData={{
        type: 'bar',
        title: 'Typical Website Traffic Sources Distribution',
        data: [
          { name: 'Organic Search', value: 45 },
          { name: 'Direct', value: 25 },
          { name: 'Referral', value: 15 },
          { name: 'Social', value: 10 },
          { name: 'Paid', value: 5 }
        ]
      }}
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
};

export default WhatIsGoogleAnalytics;