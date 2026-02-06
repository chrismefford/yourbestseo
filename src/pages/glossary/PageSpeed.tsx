import GlossaryTermPage from '@/components/GlossaryTermPage';

const PageSpeedGlossary = () => (
  <GlossaryTermPage
    slug="page-speed"
    term="Page Speed"
    category="technical-seo"
    definition="Page speed measures how quickly a webpage's content loads and becomes interactive, directly impacting user experience, conversion rates, and search engine rankings. This technical SEO factor encompasses multiple metrics including Time to First Byte, First Contentful Paint, and Largest Contentful Paint. Google has confirmed page speed as a ranking factor for both mobile and desktop searches, making optimization essential for SEO success."
    content={{
      introduction: `Page speed has evolved from a nice-to-have to a critical ranking factor. Google officially uses page speed as a ranking signal, and the correlation between fast loading times and user engagement is well-documented. Studies show that a one-second delay in page load time can reduce conversions by 7% and page views by 11%. With mobile traffic now dominating web usage, speed is even more critical—users on mobile connections expect fast experiences despite slower network speeds. Google's Core Web Vitals update made page speed a measurable ranking factor, with specific thresholds for metrics like Largest Contentful Paint and First Input Delay. Fast sites don't just rank better; they convert better, engage users longer, and build stronger brand perception.`,
      whyItMatters: `Page speed directly affects both rankings and business outcomes. Google has confirmed speed as a ranking factor since 2010 for desktop and 2018 for mobile. Beyond rankings, speed impacts user behavior dramatically: 53% of mobile users abandon sites that take longer than 3 seconds to load. For e-commerce, Amazon famously calculated that every 100ms of latency cost them 1% in sales. Page speed also affects crawl budget—faster sites get crawled more efficiently, meaning more pages indexed and updated. User experience metrics like bounce rate, time on site, and pages per session all correlate strongly with load times. In competitive markets, speed can be the differentiator that pushes you above competitors with similar content quality.`,
      howItWorks: `Page speed is measured through multiple metrics that capture different aspects of the loading experience. When a user requests a page, the browser must: receive the first byte from the server (TTFB), download and parse HTML, fetch additional resources (CSS, JavaScript, images), render visible content (FCP), load the main content (LCP), and become fully interactive (TTI). Each step can be optimized. Google's PageSpeed Insights and Lighthouse tools measure these metrics and provide lab data (simulated) and field data (real user measurements from Chrome User Experience Report). Core Web Vitals—LCP, FID/INP, and CLS—are the specific metrics Google uses for ranking purposes, with defined thresholds for "good," "needs improvement," and "poor" performance.`,
      sections: [
        { id: 'metrics', title: 'Speed Metrics', content: `Key page speed metrics include: Time to First Byte (TTFB) measures server response time—how long until the first byte arrives. First Contentful Paint (FCP) tracks when the first content becomes visible to users. Largest Contentful Paint (LCP) measures when the main content finishes loading—should be under 2.5 seconds. Time to Interactive (TTI) indicates when the page becomes fully interactive. Cumulative Layout Shift (CLS) measures visual stability—unexpected layout shifts frustrate users. First Input Delay (FID) or Interaction to Next Paint (INP) measures input responsiveness.` },
        { id: 'factors', title: 'Factors Affecting Speed', content: `Speed is impacted by: Server response time and hosting quality—cheap hosting creates bottlenecks. Unoptimized images in wrong formats, dimensions, or compression levels. Render-blocking JavaScript and CSS that delays content display. Excessive HTTP requests from too many files and resources. Lack of browser caching forcing repeat downloads. No content delivery network (CDN) serving files from distant servers. Third-party scripts like ads, analytics, chat widgets, and social embeds.` },
        { id: 'optimization', title: 'Optimization Techniques', content: `Improve page speed through: Compressing and resizing images—use WebP format, responsive sizes, and lazy loading. Enabling GZIP or Brotli compression for text files. Minifying CSS, JavaScript, and HTML to reduce file sizes. Implementing lazy loading for below-the-fold images and videos. Using browser caching headers with appropriate max-age values. Deploying a CDN to serve static assets from edge locations. Deferring non-critical JavaScript with async or defer attributes. Preloading critical resources like fonts and above-the-fold images.` },
        { id: 'tools', title: 'Speed Testing Tools', content: `Measure performance with: Google PageSpeed Insights provides lab and field data with Core Web Vitals. GTmetrix offers detailed waterfall charts and historical tracking. WebPageTest allows testing from multiple locations and connection speeds. Lighthouse in Chrome DevTools gives comprehensive audits with specific recommendations. Pingdom Website Speed Test offers simple, visual performance analysis. Google Search Console Core Web Vitals report shows site-wide performance issues from real user data.` }
      ],
      bestPractices: [
        'Optimize images aggressively—use WebP format, compress appropriately, serve responsive sizes, and implement lazy loading',
        'Use a CDN to serve static assets from edge locations close to your users worldwide',
        'Minimize and defer JavaScript—load critical scripts first and defer everything else',
        'Enable browser caching with appropriate cache-control headers for static resources',
        'Monitor Core Web Vitals in Search Console and fix issues affecting real users'
      ],
      commonMistakes: [
        'Adding too many third-party scripts (analytics, chat, social widgets) without considering their performance impact',
        'Serving full-size images to all devices instead of responsive images optimized for each screen size',
        'Ignoring mobile performance while optimizing only for desktop connections and hardware'
      ],
      example: `An e-commerce site was experiencing high bounce rates and poor mobile conversions. PageSpeed Insights showed a Largest Contentful Paint of 8.2 seconds and a performance score of 23. The team implemented several optimizations: converted images to WebP with responsive srcsets, implemented a CDN, deferred non-critical JavaScript, and removed two unused tracking scripts. After optimization, LCP dropped to 1.8 seconds and the performance score improved to 89. Mobile bounce rate decreased by 35%, and mobile conversion rate increased by 28%. The improvements also correlated with a 15% increase in organic traffic over the following quarter as Core Web Vitals improved.`
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-it-matters', title: 'Why It Matters' },
      { id: 'how-it-works', title: 'How It Works' },
      { id: 'metrics', title: 'Speed Metrics' },
      { id: 'factors', title: 'Speed Factors' },
      { id: 'optimization', title: 'Optimization' },
      { id: 'tools', title: 'Testing Tools' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Bounce Rate by Load Time', data: [{ name: '1-2s', value: 9 }, { name: '2-3s', value: 24 }, { name: '3-5s', value: 38 }, { name: '5-10s', value: 58 }, { name: '10s+', value: 78 }] }}
    imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    imageAlt="Page speed optimization metrics showing website loading performance for SEO and user experience"
  />
);

export default PageSpeedGlossary;
