import QuestionPage from '@/components/QuestionPage';

const WhatIsGoogleSearchConsole = () => {
  return (
    <QuestionPage
      question="What is Google Search Console?"
      slug="what-is-google-search-console"
      shortAnswer="Google Search Console (GSC) is a free tool from Google that helps you monitor, maintain, and troubleshoot your website's presence in Google Search results. It provides data on search performance, indexing status, and technical issues."
      category="tools"
      lastUpdated="2025-01-10"
      readTime="9 min read"
      featuredImage={{
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        alt: "Google Search Console dashboard showing website performance metrics and search analytics for SEO monitoring"
      }}
      introduction="Google Search Console is an indispensable tool for anyone serious about SEO. Formerly known as Google Webmaster Tools, this free platform provides invaluable insights into how Google sees and interacts with your website. From monitoring search performance to identifying technical issues that could hurt your rankings, Search Console is your direct line of communication with Google. This comprehensive guide explores every aspect of Google Search Console, helping you understand how to leverage its features to improve your website's search visibility and performance."
      tableOfContents={[
        { id: 'what-is-gsc', title: 'What is Google Search Console?' },
        { id: 'key-features', title: 'Key Features Overview' },
        { id: 'performance-reports', title: 'Performance Reports' },
        { id: 'indexing', title: 'Indexing & Coverage' },
        { id: 'enhancements', title: 'Experience & Enhancements' },
        { id: 'setup', title: 'Setup & Verification' },
        { id: 'best-practices', title: 'Best Practices' }
      ]}
      contentSections={[
        {
          id: 'what-is-gsc',
          title: 'What is Google Search Console?',
          content: `**Google Search Console (GSC)** is a free web service provided by Google that helps website owners understand how their site performs in Google Search.

**Core Purpose:**
Search Console serves as the bridge between your website and Google. It provides data and tools that help you:
- Monitor how Google crawls and indexes your site
- Understand which queries bring users to your site
- Identify and fix technical problems
- Submit content for indexing
- Receive alerts about issues

**Who Should Use It:**
- Website owners and administrators
- SEO professionals and marketers
- Web developers
- Content creators
- Business owners

GSC is completely free and essential for any website that wants to succeed in Google Search. Without it, you're essentially optimizing blind.`
        },
        {
          id: 'key-features',
          title: 'Key Features Overview',
          content: `Google Search Console offers a comprehensive suite of tools organized into several main sections.

**Performance:**
- Search queries driving traffic
- Clicks, impressions, CTR, position data
- Page-level performance
- Device and country breakdowns

**Indexing:**
- Page indexing status
- Coverage issues and errors
- Sitemap submission
- URL inspection tool

**Experience:**
- Core Web Vitals scores
- Mobile usability issues
- Page experience signals

**Enhancements:**
- Structured data validation
- Rich results status
- AMP validation (if applicable)

**Security & Manual Actions:**
- Security issues detected
- Manual penalties from Google
- Spam issues

**Links:**
- External links to your site
- Internal linking structure
- Top linking sites`
        },
        {
          id: 'performance-reports',
          title: 'Performance Reports: Your Search Analytics',
          content: `The Performance report is where SEO magic happens. It shows exactly how users find your site through Google Search.

**Four Key Metrics:**
1. **Clicks**: Times users clicked to your site
2. **Impressions**: Times your URL appeared in results
3. **CTR**: Click-through rate (clicks ÷ impressions)
4. **Average Position**: Mean ranking position

**Filtering Options:**
- Date range (up to 16 months of data)
- Query (search terms used)
- Page (specific URLs)
- Country
- Device (desktop, mobile, tablet)
- Search appearance (rich results, AMP)

**How to Use This Data:**
- Find high-impression, low-CTR pages (optimize titles/descriptions)
- Identify ranking keywords you didn't know about
- Track position changes over time
- Discover mobile vs. desktop performance gaps
- Compare performance across time periods

**Pro Tip:** Export this data monthly to build historical records beyond Google's 16-month limit.`
        },
        {
          id: 'indexing',
          title: 'Indexing & Coverage: Ensuring Discovery',
          content: `The indexing section helps you understand which pages Google has indexed and identify any problems.

**Page Indexing Report:**
Shows pages that are:
- **Indexed**: Successfully in Google's index
- **Not indexed**: Excluded for various reasons

**Common Coverage Issues:**
- Crawl errors (404s, server errors)
- Blocked by robots.txt
- Noindex tags
- Duplicate content (canonical issues)
- Redirect issues

**URL Inspection Tool:**
For any URL, you can see:
- Current index status
- Last crawl date
- Mobile usability status
- Canonical URL selection
- Page experience status

**Sitemap Submission:**
- Submit XML sitemaps
- Monitor sitemap processing
- See discovered vs. indexed URLs
- Identify sitemap errors

**Request Indexing:**
After publishing new content or fixing issues, you can request Google recrawl and index specific URLs. This speeds up the discovery process significantly.`
        },
        {
          id: 'enhancements',
          title: 'Experience & Enhancements',
          content: `These sections help ensure your site provides excellent user experiences and takes advantage of enhanced search features.

**Core Web Vitals:**
Measures real-world user experience:
- **LCP** (Largest Contentful Paint): Loading speed
- **INP** (Interaction to Next Paint): Interactivity
- **CLS** (Cumulative Layout Shift): Visual stability

Reports show URLs as Good, Needs Improvement, or Poor.

**Mobile Usability:**
Identifies mobile-specific issues:
- Text too small to read
- Clickable elements too close
- Content wider than screen
- Viewport not configured

**Structured Data Reports:**
Validates your schema markup:
- Product structured data
- FAQ schema
- Recipe markup
- How-to schema
- And many more types

Each enhancement report shows:
- Valid items
- Items with warnings
- Invalid items with specific errors

Fix invalid items to become eligible for rich results like star ratings, FAQs, and featured snippets.`
        },
        {
          id: 'setup',
          title: 'Setup & Verification',
          content: `Getting started with Google Search Console is straightforward.

**Step 1: Add Property**
Choose property type:
- **Domain**: Covers all subdomains and protocols (recommended)
- **URL prefix**: Specific URL pattern only

**Step 2: Verify Ownership**
Verification methods:
- **DNS record** (for domain properties)
- **HTML file upload**
- **HTML meta tag**
- **Google Analytics**
- **Google Tag Manager**

**Step 3: Wait for Data**
After verification:
- Historical data appears within 24-48 hours
- Full data collection takes several days
- Some reports need sufficient traffic volume

**Recommended Setup:**
1. Verify as domain property
2. Submit your sitemap
3. Connect to Google Analytics
4. Set up email notifications
5. Add team members as needed

**User Permissions:**
- **Owner**: Full access, can add/remove users
- **Full user**: All data, most features
- **Restricted user**: Limited access`
        },
        {
          id: 'best-practices',
          title: 'Best Practices for Using GSC',
          content: `Maximize your Search Console value with these practices.

**Weekly Tasks:**
- Check Performance report for trends
- Review any new indexing issues
- Monitor Core Web Vitals status
- Respond to security alerts immediately

**Monthly Tasks:**
- Export performance data for records
- Analyze top-performing content
- Review coverage report in detail
- Check for structured data errors
- Audit mobile usability issues

**Quarterly Tasks:**
- Compare YoY performance trends
- Review and update sitemaps
- Comprehensive technical SEO audit using GSC data
- Analyze backlink profile changes

**Common Mistakes to Avoid:**
- Ignoring email notifications
- Not requesting indexing after updates
- Overlooking mobile-specific issues
- Failing to act on manual actions
- Not connecting with Analytics

**Power Tips:**
- Use regex filters for advanced analysis
- Compare date ranges to spot trends
- Export data to spreadsheets for deeper analysis
- Set up multiple properties (staging, production)
- Regularly review the security section

Google Search Console is the foundation of data-driven SEO. Master it, and you'll have the insights needed to make informed optimization decisions.`
        }
      ]}
      chartData={{
        type: 'pie',
        title: 'Most Used Search Console Features by SEO Professionals',
        data: [
          { name: 'Performance Reports', value: 35 },
          { name: 'URL Inspection', value: 25 },
          { name: 'Coverage/Indexing', value: 20 },
          { name: 'Core Web Vitals', value: 12 },
          { name: 'Links Report', value: 8 }
        ]
      }}
      relatedQuestions={[
        { slug: 'what-is-google-analytics', question: 'What is Google Analytics?' },
        { slug: 'how-to-track-keyword-rankings', question: 'How do I track keyword rankings?' },
        { slug: 'how-to-do-a-site-audit', question: 'How do I do an SEO site audit?' },
        { slug: 'what-are-core-web-vitals', question: 'What are Core Web Vitals?' }
      ]}
      relatedTerms={[
        { slug: 'core-web-vitals', term: 'Core Web Vitals' },
        { slug: 'xml-sitemap', term: 'XML Sitemap' },
        { slug: 'crawlability', term: 'Crawlability' },
        { slug: 'indexability', term: 'Indexability' }
      ]}
    />
  );
};

export default WhatIsGoogleSearchConsole;