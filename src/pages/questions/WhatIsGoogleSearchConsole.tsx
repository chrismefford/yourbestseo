import QuestionPage from '@/components/QuestionPage';

const WhatIsGoogleSearchConsole = () => (
  <QuestionPage
    slug="what-is-google-search-console"
    question="What is Google Search Console?"
    shortAnswer="Google Search Console is a free tool from Google that helps you monitor how your site appears in Google Search, diagnose indexing issues, and measure performance (clicks, impressions, CTR, and average positions)."
    content={{
      introduction: `Google Search Console (GSC) is one of the most important tools in SEO because it gives you direct feedback from Google about how your website is being crawled, indexed, and shown in search results.

If you want to improve rankings, fix indexing problems, or understand which queries drive traffic, GSC is where you start.`,
      sections: [
        {
          id: 'what-is-gsc',
          title: 'What is Google Search Console?',
          content: `Google Search Console is a free platform that helps you:

- See which queries and pages get impressions and clicks
- Monitor indexing coverage (what’s indexed vs excluded)
- Diagnose technical issues (crawl errors, mobile usability)
- Validate structured data eligibility
- Submit sitemaps and request indexing

It’s first-party data—meaning it comes from Google itself.`
        },
        {
          id: 'key-features',
          title: 'Key Features Overview',
          content: `Core areas in Search Console include:

- **Performance:** queries, pages, CTR, position
- **Indexing:** which pages are indexed and why others aren’t
- **Experience:** Core Web Vitals and usability
- **Enhancements:** structured data and rich results
- **Links:** internal and external linking insights
- **Security & Manual Actions:** penalties and security issues` 
        },
        {
          id: 'performance-reports',
          title: 'Performance Reports',
          content: `The Performance report shows:
- Clicks
- Impressions
- CTR
- Average position

Use it to:
- Find high-impression / low-CTR pages (optimize titles/descriptions)
- Identify ranking opportunities (positions 8–20)
- Compare periods to spot trends
- See mobile vs desktop differences` 
        },
        {
          id: 'indexing',
          title: 'Indexing & Coverage',
          content: `The Indexing section helps you understand why pages are (or aren’t) in Google.

Common reasons pages aren’t indexed:
- Blocked by robots.txt
- Marked noindex
- Duplicate/canonicalized
- Soft 404s
- Redirects

Use URL Inspection to debug a specific URL and request indexing after fixes.`
        },
        {
          id: 'enhancements',
          title: 'Experience & Enhancements',
          content: `These reports connect SEO and UX.

- **Core Web Vitals:** LCP, INP, CLS
- **Mobile Usability:** layout and tap target issues
- **Structured Data:** errors/warnings that affect rich results eligibility

Fixing these issues often improves both rankings and conversions.`
        },
        {
          id: 'setup',
          title: 'Setup & Verification',
          content: `To use Search Console:
1. Add your site as a property
2. Verify ownership (DNS is best for full domain coverage)
3. Submit your XML sitemap
4. Turn on email notifications

After setup, performance data typically appears within 1–2 days.`
        },
        {
          id: 'best-practices',
          title: 'Best Practices',
          content: `- Check GSC weekly for new issues
- Export performance data monthly for long-term history
- Request indexing after major updates
- Use query data to guide content planning
- Monitor coverage changes after migrations

If you only use one SEO tool, Search Console should be it.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'what-is-gsc', title: 'What is Google Search Console?' },
      { id: 'key-features', title: 'Key Features Overview' },
      { id: 'performance-reports', title: 'Performance Reports' },
      { id: 'indexing', title: 'Indexing & Coverage' },
      { id: 'enhancements', title: 'Experience & Enhancements' },
      { id: 'setup', title: 'Setup & Verification' },
      { id: 'best-practices', title: 'Best Practices' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Most Used Search Console Features (Example)',
      data: [
        { name: 'Performance', value: 35 },
        { name: 'URL Inspection', value: 25 },
        { name: 'Indexing', value: 20 },
        { name: 'Core Web Vitals', value: 12 },
        { name: 'Links', value: 8 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
    imageAlt="Google Search Console dashboard showing website performance metrics and search analytics for SEO monitoring"
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

export default WhatIsGoogleSearchConsole;
