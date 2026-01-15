import QuestionPage from '@/components/QuestionPage';

const WhatIsMobileFirstIndexing = () => (
  <QuestionPage
    slug="what-is-mobile-first-indexing"
    question="What is Mobile-First Indexing?"
    shortAnswer="Mobile-first indexing means Google predominantly uses the mobile version of your website for indexing and ranking, reflecting the shift to mobile-dominant internet usage."
    content={{
      introduction: `Mobile-first indexing represents a fundamental shift in how Google crawls, indexes, and ranks websites. Since March 2021, Google has fully transitioned to mobile-first indexing for all websites, meaning the search engine now predominantly uses the mobile version of your site's content for indexing and ranking purposes.

This change reflects the reality of modern internet usage. Over 60% of all web searches now occur on mobile devices, and this percentage continues to grow. Google recognized that to provide the best experience for most searchers, it needed to evaluate websites the way most users experience them—on mobile devices.

For website owners and SEO professionals, mobile-first indexing means that your mobile site is no longer a secondary consideration—it's the primary version that determines your search visibility. If your mobile site has less content, fewer features, or a poor user experience compared to your desktop version, your rankings could suffer significantly.`,
      sections: [
        {
          id: 'how-mobile-first-works',
          title: 'How Mobile-First Indexing Works',
          content: `Under mobile-first indexing, Googlebot primarily crawls your website using a mobile user-agent. Here's what this means in practice:

**Content Evaluation**: Google uses the content visible on your mobile site to understand and rank your pages. If content is hidden or removed on mobile, it may not be indexed at all.

**Structured Data**: Schema markup and structured data on your mobile pages are what Google reads and processes for rich results.

**Meta Data**: Title tags, meta descriptions, and other meta information from your mobile pages are used for indexing and displaying in search results.

**Internal Links**: The internal linking structure of your mobile site affects how Google discovers and ranks your pages.

**Images and Videos**: Media files on your mobile site, along with their alt text and optimization, are what Google evaluates.

**What Mobile-First Doesn't Mean:**
- It doesn't mean mobile-only—Google still indexes desktop content as a secondary option
- It doesn't mean you need a separate mobile site (responsive design works)
- It doesn't mean mobile rankings are different from desktop rankings
- It doesn't guarantee better rankings just for being mobile-friendly`
        },
        {
          id: 'optimizing-for-mobile-first',
          title: 'Optimizing for Mobile-First Indexing',
          content: `To ensure your site performs well under mobile-first indexing, focus on these key areas:

**1. Responsive Design**: Use a single, responsive website that adapts to all screen sizes. This is Google's recommended approach as it ensures content parity between devices.

**2. Content Parity**: Ensure your mobile site has the same valuable content as your desktop version. Avoid hiding content behind tabs, accordions, or "read more" buttons that might not be crawled.

**3. Structured Data**: Implement identical structured data markup on both mobile and desktop versions. Verify it works correctly using Google's Mobile-Friendly Test and Rich Results Test.

**4. Meta Tags**: Use the same meta robots tags, title tags, and meta descriptions on mobile and desktop. Differences can cause indexing issues.

**5. Visual Content**: Ensure images and videos are optimized for mobile—proper sizing, lazy loading, and compressed formats. Include descriptive alt text.

**6. Page Speed**: Mobile page speed is crucial. Use Google's PageSpeed Insights to identify mobile-specific performance issues.

**7. Mobile Usability**: Avoid intrusive interstitials, ensure tap targets are appropriately sized, and use legible font sizes.

**8. Verify Googlebot Access**: Ensure your robots.txt doesn't block Googlebot Smartphone from accessing CSS, JavaScript, or images needed to render your pages.`
        },
        {
          id: 'common-mobile-first-issues',
          title: 'Common Mobile-First Issues to Avoid',
          content: `Many websites encounter problems with mobile-first indexing due to common mistakes:

**Content Disparities**: The most frequent issue is having less content on mobile than desktop. This often happens when designers hide content to "simplify" the mobile experience.

**Lazy-Loading Problems**: Content loaded only when users scroll may not be crawled if implemented incorrectly. Use Intersection Observer API and include proper noscript fallbacks.

**Blocked Resources**: Some sites accidentally block CSS or JavaScript files on mobile, preventing Google from rendering pages correctly.

**Different URLs**: Sites using separate mobile URLs (m.example.com) need proper canonical tags and hreflang annotations to avoid indexing confusion.

**Slow Load Times**: Mobile networks are often slower than desktop connections, making page speed optimization even more critical.

**Missing Alt Text**: Images without alt text on mobile lose SEO value since Google reads the mobile version.

**Interstitials**: Full-screen pop-ups that block content on mobile can result in ranking penalties.

**How to Check Your Mobile-First Status:**
- Use Google Search Console's Mobile Usability report
- Check the URL Inspection tool to see which version Google indexed
- Review the Core Web Vitals report for mobile-specific issues
- Test pages with Google's Mobile-Friendly Test tool`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'how-mobile-first-works', title: 'How It Works' },
      { id: 'optimizing-for-mobile-first', title: 'Optimization Tips' },
      { id: 'common-mobile-first-issues', title: 'Common Issues' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Global Web Traffic by Device (2024)',
      data: [
        { name: 'Mobile', value: 59 },
        { name: 'Desktop', value: 38 },
        { name: 'Tablet', value: 3 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop"
    imageAlt="Mobile phone displaying website representing mobile-first indexing and responsive design"
    relatedQuestions={[
      { slug: 'what-are-core-web-vitals', question: 'What are Core Web Vitals?' },
      { slug: 'how-to-improve-page-speed', question: 'How to improve page speed?' },
      { slug: 'what-is-technical-seo', question: 'What is technical SEO?' }
    ]}
    relatedTerms={[
      { slug: 'mobile-first-indexing', term: 'Mobile-First Indexing' },
      { slug: 'responsive-design', term: 'Responsive Design' },
      { slug: 'core-web-vitals', term: 'Core Web Vitals' }
    ]}
  />
);

export default WhatIsMobileFirstIndexing;
