import QuestionPage from '@/components/QuestionPage';

const WhatIsOnPageSEO = () => (
  <QuestionPage
    slug="what-is-on-page-seo"
    question="What is On-Page SEO?"
    shortAnswer="On-page SEO refers to the practice of optimizing individual web pages to rank higher in search engines, including content optimization, HTML elements, and internal linking strategies."
    content={{
      introduction: `On-page SEO, also known as on-site SEO, encompasses all the optimization techniques you can apply directly to your web pages to improve search engine rankings and attract organic traffic. Unlike off-page SEO (which focuses on external factors like backlinks), on-page SEO is entirely within your control and forms the foundation of any successful SEO strategy.

The goal of on-page SEO is twofold: first, to help search engines understand what your content is about and determine its relevance for specific search queries; second, to provide an excellent user experience that keeps visitors engaged and encourages them to take action.

When done correctly, on-page SEO ensures that your carefully crafted content gets the visibility it deserves. Even the most valuable content will struggle to rank if it's not properly optimized for search engines. On-page SEO bridges the gap between great content and search visibility, making it an essential skill for anyone managing a website.`,
      sections: [
        {
          id: 'key-on-page-elements',
          title: 'Key On-Page SEO Elements',
          content: `On-page SEO involves optimizing multiple elements of your web pages:

**Title Tags**: The HTML title that appears in search results and browser tabs. Keep it under 60 characters, include your target keyword near the beginning, and make it compelling enough to earn clicks.

**Meta Descriptions**: The snippet that appears below your title in search results. While not a direct ranking factor, a well-written meta description (under 160 characters) can significantly improve click-through rates.

**Header Tags (H1-H6)**: Structure your content with proper heading hierarchy. Use one H1 per page (typically your main title), and organize subtopics with H2s and H3s. Include relevant keywords naturally.

**URL Structure**: Create clean, descriptive URLs that include your target keyword. Avoid long strings of numbers or parameters. Keep URLs short and meaningful.

**Content Quality**: The core of on-page SEO. Content should be comprehensive, original, and provide genuine value to users. Aim to be the best resource available for your target topic.

**Keyword Optimization**: Include your target keyword in strategic locations—title, first paragraph, headers, and throughout the content—but avoid keyword stuffing. Write naturally for humans first.

**Internal Linking**: Link to other relevant pages on your site to help users navigate and distribute page authority throughout your site.

**Image Optimization**: Use descriptive file names, compress images for fast loading, and write meaningful alt text that describes the image content.`
        },
        {
          id: 'content-optimization',
          title: 'Content Optimization Best Practices',
          content: `High-quality content is the cornerstone of on-page SEO. Here's how to optimize your content effectively:

**Match Search Intent**: Before writing, understand what users are actually looking for when they search your target keyword. Are they seeking information, looking to buy, or comparing options? Your content should directly address this intent.

**Comprehensive Coverage**: Cover your topic thoroughly. Research what competing pages include and ensure your content addresses all relevant subtopics and questions users might have.

**Readability**: Use short paragraphs, bullet points, and subheadings to make content scannable. Online readers tend to skim, so make key points easy to find.

**Freshness**: Regularly update your content to keep it current and relevant. Google favors fresh content, especially for topics that change over time.

**E-E-A-T Signals**: Demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness. Include author bios, cite sources, and show real expertise in your subject matter.

**User Engagement**: Create content that encourages interaction—comments, shares, and time on page. Engaged users signal to Google that your content is valuable.

**Multimedia**: Enhance text with relevant images, videos, infographics, and charts. Rich media can increase engagement and provide additional ranking opportunities.`
        },
        {
          id: 'technical-on-page-factors',
          title: 'Technical On-Page Factors',
          content: `Beyond content, several technical elements impact on-page SEO:

**Page Speed**: Fast-loading pages rank better and provide better user experience. Optimize images, minify code, and leverage browser caching.

**Mobile Responsiveness**: With mobile-first indexing, your pages must work flawlessly on all devices. Use responsive design and test on multiple screen sizes.

**Schema Markup**: Add structured data to help search engines understand your content and potentially earn rich results in search listings.

**Canonical Tags**: Use canonical tags to indicate the preferred version of a page when duplicate or similar content exists.

**SSL Certificate**: Ensure your site uses HTTPS. Security is a ranking factor, and browsers warn users about insecure sites.

**Core Web Vitals**: Optimize for Google's page experience metrics—Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).

**On-Page SEO Checklist:**
1. Keyword in title tag (near the beginning)
2. Compelling meta description with keyword
3. Keyword in H1 and at least one H2
4. Clean, keyword-inclusive URL
5. Keyword in first 100 words
6. Optimized images with alt text
7. Internal links to related content
8. External links to authoritative sources
9. Mobile-friendly design
10. Fast page load speed`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'key-on-page-elements', title: 'Key Elements' },
      { id: 'content-optimization', title: 'Content Best Practices' },
      { id: 'technical-on-page-factors', title: 'Technical Factors' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'bar',
      title: 'On-Page SEO Impact by Element',
      data: [
        { name: 'Content Quality', value: 32 },
        { name: 'Title Tags', value: 22 },
        { name: 'Internal Links', value: 18 },
        { name: 'Header Tags', value: 12 },
        { name: 'URL Structure', value: 9 },
        { name: 'Meta Description', value: 7 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    imageAlt="Website optimization dashboard showing on-page SEO elements and metrics"
    relatedQuestions={[
      { slug: 'what-is-seo', question: 'What is SEO?' },
      { slug: 'what-are-keywords', question: 'What are keywords?' },
      { slug: 'what-is-technical-seo', question: 'What is technical SEO?' }
    ]}
    relatedTerms={[
      { slug: 'keyword-optimization', term: 'Keyword Optimization' },
      { slug: 'meta-description', term: 'Meta Description' },
      { slug: 'title-tag', term: 'Title Tag' }
    ]}
  />
);

export default WhatIsOnPageSEO;
