import GlossaryTermPage from '@/components/GlossaryTermPage';

const CoreWebVitalsGlossary = () => (
  <GlossaryTermPage
    slug="core-web-vitals"
    term="Core Web Vitals"
    category="technical-seo"
    definition="Core Web Vitals are a set of specific metrics that Google uses to measure real-world user experience on websites, focusing on loading performance (LCP), interactivity (INP), and visual stability (CLS). These metrics are official Google ranking factors."
    content={{
      introduction: `Core Web Vitals represent Google's effort to quantify user experience as a ranking factor. Introduced as part of the Page Experience update, these metrics measure what users actually experience when visiting your website. Unlike traditional speed metrics, Core Web Vitals focus on perceived performance—how fast content appears, how quickly pages respond to interaction, and how stable the layout is during loading. Websites that deliver excellent Core Web Vitals scores not only rank better but also convert better, with studies showing that improving these metrics can increase conversions by up to 24%.`,
      sections: [
        { id: 'three-metrics', title: 'The Three Core Metrics', content: `**Largest Contentful Paint (LCP)**: Measures loading performance—how long until the largest visible content element loads. Good: under 2.5 seconds. **Interaction to Next Paint (INP)**: Measures responsiveness—how quickly the page responds to user interactions throughout the entire visit. Good: under 200 milliseconds. **Cumulative Layout Shift (CLS)**: Measures visual stability—how much the page layout shifts unexpectedly during loading. Good: under 0.1. Each metric has thresholds for "Good," "Needs Improvement," and "Poor."` },
        { id: 'measuring', title: 'Measuring Core Web Vitals', content: `Multiple tools measure these metrics: Google Search Console's Core Web Vitals report shows real-user data for your entire site, PageSpeed Insights provides both lab and field data for individual URLs, Chrome DevTools and Lighthouse offer detailed lab testing, Web Vitals Chrome extension shows real-time metrics while browsing, and CrUX (Chrome User Experience Report) provides the actual data Google uses for rankings.` },
        { id: 'improving-lcp', title: 'Improving LCP', content: `Optimize Largest Contentful Paint by: Optimizing and compressing images (use WebP/AVIF formats), implementing lazy loading for below-fold images, using a CDN for faster asset delivery, minimizing render-blocking CSS and JavaScript, preloading critical resources, optimizing server response times (TTFB), and removing unnecessary third-party scripts that delay loading.` },
        { id: 'improving-inp-cls', title: 'Improving INP and CLS', content: `**For INP**: Break up long JavaScript tasks, use web workers for heavy processing, optimize event handlers, defer non-critical JavaScript, and minimize main thread work. **For CLS**: Always include width and height attributes on images and videos, reserve space for ads and embeds, avoid inserting content above existing content, use CSS transform for animations instead of properties that trigger layout, and preload web fonts to prevent FOIT/FOUT.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'three-metrics', title: 'The Three Metrics' },
      { id: 'measuring', title: 'Measuring' },
      { id: 'improving-lcp', title: 'Improving LCP' },
      { id: 'improving-inp-cls', title: 'Improving INP & CLS' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Sites Passing Core Web Vitals (2024)', data: [{ name: 'Pass All', value: 42 }, { name: 'Fail LCP', value: 28 }, { name: 'Fail CLS', value: 18 }, { name: 'Fail INP', value: 12 }] }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    imageAlt="Performance dashboard showing website speed metrics"
  />
);

export default CoreWebVitalsGlossary;
