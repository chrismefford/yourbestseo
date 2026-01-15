import QuestionPage from '@/components/QuestionPage';

const WhatAreCoreWebVitals = () => (
  <QuestionPage
    slug="what-are-core-web-vitals"
    question="What are Core Web Vitals?"
    shortAnswer="Core Web Vitals are three specific metrics Google uses to measure user experience: Largest Contentful Paint (loading), Interaction to Next Paint (interactivity), and Cumulative Layout Shift (visual stability)."
    content={{
      introduction: `Core Web Vitals are a set of specific factors that Google considers important in a webpage's overall user experience. Introduced as part of Google's page experience signals, these metrics measure real-world user experience for loading performance, interactivity, and visual stability.

Google has made Core Web Vitals a ranking factor, meaning pages that provide good user experiences may rank higher than those with poor experiences. This represents Google's shift toward prioritizing user-centric metrics rather than just content relevance.

Understanding and optimizing for Core Web Vitals is now essential for SEO. These metrics are measured using real-world Chrome user data (field data) and lab testing tools, giving you actionable insights into how users actually experience your site.`,
      sections: [
        {
          id: 'three-metrics',
          title: 'The Three Core Web Vitals Metrics',
          content: `**Largest Contentful Paint (LCP)**: Measures loading performance—how long it takes for the largest content element (image, video, or text block) to become visible. Good LCP is under 2.5 seconds.

**Interaction to Next Paint (INP)**: Measures interactivity—how quickly the page responds to user interactions like clicks, taps, or keyboard input. Good INP is under 200 milliseconds. (INP replaced First Input Delay in 2024)

**Cumulative Layout Shift (CLS)**: Measures visual stability—how much the page layout unexpectedly shifts during loading. Good CLS is under 0.1. This prevents frustrating experiences where buttons move as you try to click them.

Each metric has thresholds: Good (green), Needs Improvement (orange), and Poor (red). Aim for good scores across all three metrics.`
        },
        {
          id: 'improving-lcp',
          title: 'Improving Largest Contentful Paint',
          content: `**Optimize Images**: The LCP element is often an image. Compress, resize, and use modern formats like WebP.

**Preload Critical Resources**: Use preload hints for LCP images and critical CSS to prioritize important resources.

**Use a CDN**: Serve content from servers closer to users to reduce network latency.

**Optimize Server Response Time**: Fast Time to First Byte (TTFB) is crucial. Upgrade hosting if needed.

**Remove Render-Blocking Resources**: Defer non-critical JavaScript and inline critical CSS.

**Avoid Lazy Loading LCP**: Don't lazy load the image that's likely to be the LCP element—it should load immediately.`
        },
        {
          id: 'improving-inp',
          title: 'Improving Interaction to Next Paint',
          content: `**Reduce JavaScript Execution**: Long JavaScript tasks block the main thread and delay response to interactions.

**Break Up Long Tasks**: Split tasks over 50ms into smaller chunks so the browser can respond to user input.

**Minimize Third-Party Impact**: Third-party scripts often cause INP problems. Audit and remove unnecessary scripts.

**Optimize Event Handlers**: Ensure click handlers and other event listeners execute quickly.

**Use Web Workers**: Move heavy computations off the main thread to keep the UI responsive.

**Implement Proper Loading Strategies**: Prioritize interactive elements and defer non-critical functionality.`
        },
        {
          id: 'improving-cls',
          title: 'Improving Cumulative Layout Shift',
          content: `**Specify Image Dimensions**: Always include width and height attributes on images and videos so browsers reserve space.

**Reserve Space for Ads**: Ad slots often cause layout shift. Define dimensions or use CSS aspect-ratio to hold space.

**Avoid Inserting Content Above Existing Content**: Dynamically loaded content should appear below visible content or in reserved spaces.

**Use Transform for Animations**: CSS transform doesn't cause layout shifts. Avoid animating properties that trigger layout.

**Preload Fonts and Prevent FOUT**: Use font-display: optional or preload fonts to prevent text from shifting when fonts load.

**Avoid Late-Loading Embeds**: Social embeds, maps, and videos should have placeholder dimensions.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'three-metrics', title: 'The Three Metrics' },
      { id: 'improving-lcp', title: 'Improving LCP' },
      { id: 'improving-inp', title: 'Improving INP' },
      { id: 'improving-cls', title: 'Improving CLS' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Core Web Vitals Thresholds',
      data: [
        { name: 'LCP (seconds)', value: 2.5 },
        { name: 'INP (ms/100)', value: 2 },
        { name: 'CLS (x10)', value: 1 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    imageAlt="Core Web Vitals metrics showing LCP INP and CLS performance measurements for website optimization"
    relatedQuestions={[
      { slug: 'how-to-improve-page-speed', question: 'How do I improve page speed?' },
      { slug: 'what-is-technical-seo', question: 'What is technical SEO?' },
      { slug: 'what-is-mobile-first-indexing', question: 'What is mobile-first indexing?' }
    ]}
    relatedTerms={[
      { slug: 'core-web-vitals', term: 'Core Web Vitals' },
      { slug: 'page-speed', term: 'Page Speed' },
      { slug: 'mobile-first-indexing', term: 'Mobile-First Indexing' }
    ]}
  />
);

export default WhatAreCoreWebVitals;