import GlossaryTermPage from '@/components/GlossaryTermPage';

const CoreWebVitalsGlossary = () => (
  <GlossaryTermPage
    slug="core-web-vitals"
    term="Core Web Vitals"
    category="technical-seo"
    definition="Core Web Vitals are a set of specific metrics that Google uses to measure real-world user experience on web pages, focusing on loading performance, interactivity, and visual stability. These metrics—LCP, INP, and CLS—are confirmed ranking factors that affect your site's position in search results."
    content={{
      introduction: `Core Web Vitals represent Google's effort to quantify what makes a webpage feel fast and responsive. Rather than measuring server response times in isolation, these metrics capture the actual experience users have when interacting with your pages. Does content load quickly? Can users interact without frustrating delays? Does the layout jump around unexpectedly?

Since 2021, Core Web Vitals have been ranking factors, meaning poor performance can directly hurt your search visibility. Google provides these metrics through Search Console, PageSpeed Insights, and Chrome User Experience Report, making it possible to track real performance across your site.`,
      whyItMatters: `Core Web Vitals affect rankings. Google has confirmed that page experience signals, anchored by Core Web Vitals, are factored into search ranking algorithms. Sites that provide better user experiences receive a ranking boost, while sites with poor vitals may be disadvantaged.

Beyond rankings, Core Web Vitals impact business outcomes directly. Studies show that faster sites have lower bounce rates, higher conversion rates, and better engagement. Amazon famously calculated that a 100ms slowdown would cost $1.6 billion annually. While your site may not operate at that scale, the principle holds—user experience drives revenue.

Core Web Vitals also provide actionable guidance. Unlike vague directives to "make your site faster," these metrics tell you exactly what to fix with specific thresholds for good, needs improvement, and poor performance.`,
      howItWorks: `Core Web Vitals are measured using real user data (field data) from Chrome browsers, supplemented by lab testing tools. The metrics capture different aspects of user experience:

**Largest Contentful Paint (LCP)** measures loading performance—specifically, how long until the largest visible content element (image, video, or text block) fully renders. Good LCP is under 2.5 seconds.

**Interaction to Next Paint (INP)** measures responsiveness—the delay between user interactions (clicks, taps, key presses) and visual feedback. Good INP is under 200 milliseconds. This replaced First Input Delay (FID) in March 2024.

**Cumulative Layout Shift (CLS)** measures visual stability—how much visible content unexpectedly shifts during page load. Good CLS is under 0.1.

Google evaluates the 75th percentile of page loads across these metrics. This means 75% of your visitors must have a good experience for you to pass. Slow experiences for even a minority of users can fail your site.`,
      sections: [
        {
          id: 'metrics-detail',
          title: 'Understanding Each Metric',
          content: `**Largest Contentful Paint (LCP)** targets the largest element visible in the viewport. For most pages, this is the hero image or main heading. Slow LCP is usually caused by:
- Slow server response times
- Render-blocking CSS/JavaScript  
- Slow resource loading (large images, heavy fonts)
- Client-side rendering that delays content

**Interaction to Next Paint (INP)** captures how responsive the page feels when users try to interact. High INP indicates JavaScript is blocking the main thread, preventing the browser from responding to input. Common causes include:
- Heavy JavaScript execution
- Long tasks blocking the main thread
- Third-party scripts and analytics
- Expensive React re-renders or framework overhead

**Cumulative Layout Shift (CLS)** measures layout instability. Unexpected shifts often happen when images or ads load without reserved space, pushing content around and causing misclicks. High CLS is typically caused by:
- Images or embeds without dimensions
- Late-loading content injected above existing content
- Web fonts causing text reflow (FOIT/FOUT)
- Dynamic content insertion`
        },
        {
          id: 'improvement',
          title: 'Improving Core Web Vitals',
          content: `Systematic approaches to improving each metric:

**LCP Optimization**:
- Optimize and properly size the LCP image
- Use modern image formats (WebP, AVIF)
- Preload critical resources with <link rel="preload">
- Reduce server response time (caching, CDN)
- Remove render-blocking resources

**INP Optimization**:
- Break up long JavaScript tasks
- Reduce main thread work during interactions
- Defer non-essential JavaScript
- Use web workers for heavy processing
- Optimize React/framework rendering

**CLS Optimization**:
- Always include width/height on images and embeds
- Reserve space for dynamic content
- Preload fonts with font-display: optional
- Avoid inserting content above existing content
- Use transform animations instead of layout-triggering properties

Test improvements using PageSpeed Insights, Chrome DevTools, and Web Vitals JavaScript library. Field data in Search Console takes 28 days to update, so lab testing helps validate fixes faster.`
        }
      ],
      bestPractices: [
        "Monitor Core Web Vitals in Search Console's Page Experience report to identify pages failing thresholds and track improvements over time",
        "Prioritize LCP optimization by properly sizing and preloading hero images, which are often the largest contentful element",
        "Always specify width and height attributes on images and iframes to prevent layout shifts during loading",
        "Audit and defer non-critical JavaScript to reduce main thread blocking and improve INP responsiveness",
        "Use a CDN and implement aggressive caching to reduce server response times and accelerate resource delivery"
      ],
      commonMistakes: [
        "Focusing only on lab scores while ignoring field data—real user metrics in Search Console determine your ranking impact",
        "Adding images without dimensions, causing severe layout shifts as images load and push other content around",
        "Loading too much JavaScript upfront, blocking the main thread and making the page feel sluggish to interact with"
      ],
      example: `An e-commerce site's product pages were failing Core Web Vitals: LCP of 4.2 seconds, INP of 380ms, and CLS of 0.28. Their Search Console showed only 15% of pages had a "good" experience.

For LCP, they optimized product images to WebP format, reduced sizes by 70%, and added preload tags for above-the-fold images. Server response time was improved by adding Redis caching. LCP dropped to 2.1 seconds.

For INP, they code-split their JavaScript bundle, deferred third-party analytics, and moved heavy calculations to Web Workers. INP improved to 150ms.

For CLS, they added explicit width/height to all images, reserved space for the "Add to Cart" button before JavaScript loaded, and fixed font loading with font-display: swap. CLS dropped to 0.05.

After four weeks, Search Console field data reflected the improvements. Good URL percentage rose from 15% to 82%. Conversion rate increased 18%, and bounce rate decreased 12%—demonstrating the direct business value of Core Web Vitals optimization.`
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-it-matters', title: 'Why Core Web Vitals Matter' },
      { id: 'how-it-works', title: 'How They Work' },
      { id: 'metrics-detail', title: 'Understanding Each Metric' },
      { id: 'improvement', title: 'Improvement Strategies' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'common-mistakes', title: 'Common Mistakes' },
      { id: 'real-world-example', title: 'Real-World Example' },
      { id: 'key-takeaways', title: 'Key Takeaways' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Core Web Vitals Thresholds (seconds)',
      data: [
        { name: 'LCP Good', value: 2.5 },
        { name: 'LCP Poor', value: 4.0 },
        { name: 'INP Good (ms/100)', value: 2.0 },
        { name: 'INP Poor (ms/100)', value: 5.0 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    imageAlt="Core Web Vitals metrics dashboard showing LCP, INP, and CLS performance measurements"
  />
);

export default CoreWebVitalsGlossary;
