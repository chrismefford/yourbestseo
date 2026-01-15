import GlossaryTermPage from '@/components/GlossaryTermPage';

const PageSpeedGlossary = () => (
  <GlossaryTermPage
    slug="page-speed"
    term="Page Speed"
    category="technical-seo"
    definition="Page speed measures how quickly a webpage's content loads and becomes interactive, directly impacting user experience, conversion rates, and search engine rankings."
    content={{
      introduction: `Page speed has evolved from a nice-to-have to a critical ranking factor. Google officially uses page speed as a ranking signal, and the correlation between fast loading times and user engagement is well-documented. Studies show that a one-second delay in page load time can reduce conversions by 7% and page views by 11%.`,
      sections: [
        { id: 'metrics', title: 'Speed Metrics', content: `Key page speed metrics include: Time to First Byte (TTFB) - server response time, First Contentful Paint (FCP) - first content visible, Largest Contentful Paint (LCP) - main content loaded, Time to Interactive (TTI) - page fully interactive, Cumulative Layout Shift (CLS) - visual stability, and Total Blocking Time (TBT) - input responsiveness.` },
        { id: 'factors', title: 'Factors Affecting Speed', content: `Speed is impacted by: Server response time and hosting quality, Unoptimized images (format, size, compression), Render-blocking JavaScript and CSS, Excessive HTTP requests, Lack of browser caching, No content delivery network (CDN), and Third-party scripts (ads, trackers, widgets).` },
        { id: 'optimization', title: 'Optimization Techniques', content: `Improve page speed through: Compressing and resizing images, Enabling GZIP compression, Minifying CSS, JavaScript, and HTML, Implementing lazy loading, Using browser caching headers, Deploying a CDN, Deferring non-critical JavaScript, and Preloading critical resources.` },
        { id: 'tools', title: 'Speed Testing Tools', content: `Measure performance with: Google PageSpeed Insights, GTmetrix, WebPageTest, Lighthouse (Chrome DevTools), Pingdom Website Speed Test, and Google Search Console Core Web Vitals report. Test regularly and from multiple locations.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'metrics', title: 'Speed Metrics' },
      { id: 'factors', title: 'Speed Factors' },
      { id: 'optimization', title: 'Optimization' },
      { id: 'tools', title: 'Testing Tools' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Bounce Rate by Load Time', data: [{ name: '1-2s', value: 9 }, { name: '2-3s', value: 24 }, { name: '3-5s', value: 38 }, { name: '5-10s', value: 58 }, { name: '10s+', value: 78 }] }}
    imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    imageAlt="Page speed optimization and performance metrics"
  />
);

export default PageSpeedGlossary;
