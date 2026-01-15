import QuestionPage from '@/components/QuestionPage';

const WhatIsTechnicalSEO = () => (
  <QuestionPage
    slug="what-is-technical-seo"
    question="What is technical SEO?"
    shortAnswer="Technical SEO involves optimizing your website's infrastructure and backend elements to help search engines crawl, index, and render your pages effectively. It covers site speed, mobile-friendliness, security, and structured data."
    content={{
      introduction: `Technical SEO focuses on the behind-the-scenes elements that help search engines access, crawl, interpret, and index your website. While content and links get most of the attention, technical SEO provides the foundation that makes everything else work.

Think of technical SEO as building a house's foundation and infrastructure. You can have beautiful furniture and decorations (content), but if the foundation is cracked or the plumbing doesn't work, you'll have problems. Similarly, great content can't rank well if search engines can't access and understand it.

Technical SEO has become increasingly important as websites have become more complex and search engines more sophisticated. Modern websites use JavaScript, have complex architectures, and need to perform well on mobile devices—all areas where technical SEO plays a crucial role.`,
      sections: [
        {
          id: 'core-elements',
          title: 'Core Elements of Technical SEO',
          content: `**Crawlability**: Ensuring search engine bots can access and navigate all your important pages through proper site architecture and internal linking.

**Indexability**: Making sure your pages can be added to search engine indexes. This involves robots.txt, meta robots tags, and canonical tags.

**Site Speed**: Optimizing page load times, which affects both rankings and user experience. Core Web Vitals are now ranking factors.

**Mobile-Friendliness**: Ensuring your site works well on mobile devices, essential since Google uses mobile-first indexing.

**Security**: Implementing HTTPS to encrypt data and protect users, which is a confirmed ranking factor.

**Structured Data**: Adding schema markup to help search engines understand your content and enable rich results.`
        },
        {
          id: 'crawling-indexing',
          title: 'Crawling and Indexing Optimization',
          content: `**XML Sitemaps**: Create and submit sitemaps that list all important pages, helping search engines discover your content.

**Robots.txt**: Configure this file to guide search engines on which pages to crawl and which to skip.

**Internal Linking**: Build a logical link structure that helps bots navigate from page to page efficiently.

**Fix Crawl Errors**: Monitor Google Search Console for 404 errors, server errors, and other crawl issues.

**Manage Redirect Chains**: Keep redirects simple. Long chains of redirects waste crawl budget and slow down users.

**Control Indexation**: Use canonical tags to indicate preferred versions and noindex tags for pages that shouldn't appear in search.`
        },
        {
          id: 'performance-optimization',
          title: 'Site Performance Optimization',
          content: `**Core Web Vitals**: Optimize for LCP (loading), INP (interactivity), and CLS (visual stability)—Google's key performance metrics.

**Image Optimization**: Compress images, use modern formats like WebP, and implement lazy loading.

**Code Optimization**: Minify CSS and JavaScript, eliminate render-blocking resources, and defer non-critical scripts.

**Browser Caching**: Set appropriate cache headers so returning visitors load pages faster.

**Content Delivery Network**: Use a CDN to serve content from servers geographically closer to users.

**Server Response Time**: Optimize your server and database to respond quickly to requests.`
        },
        {
          id: 'mobile-security',
          title: 'Mobile and Security Considerations',
          content: `**Responsive Design**: Ensure your site adapts properly to all screen sizes and devices.

**Mobile-First Indexing**: Google primarily uses the mobile version of your site for indexing, so mobile must be complete.

**Touch-Friendly Elements**: Buttons and links should be large enough and spaced well for touch interaction.

**HTTPS Implementation**: Secure your entire site with SSL/TLS certificates. Mixed content issues should be resolved.

**Security Headers**: Implement headers like HSTS, X-Content-Type-Options, and CSP to enhance security.

**Malware Protection**: Keep software updated and monitor for security vulnerabilities that could lead to hacking.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'core-elements', title: 'Core Elements' },
      { id: 'crawling-indexing', title: 'Crawling & Indexing' },
      { id: 'performance-optimization', title: 'Performance' },
      { id: 'mobile-security', title: 'Mobile & Security' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Technical SEO Priority Areas',
      data: [
        { name: 'Site Speed', value: 30 },
        { name: 'Crawlability', value: 25 },
        { name: 'Mobile', value: 20 },
        { name: 'Indexation', value: 15 },
        { name: 'Security', value: 10 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
    imageAlt="Technical SEO infrastructure showing server optimization website crawling and site architecture"
    relatedQuestions={[
      { slug: 'what-are-core-web-vitals', question: 'What are Core Web Vitals?' },
      { slug: 'how-to-improve-page-speed', question: 'How do I improve page speed?' },
      { slug: 'what-is-mobile-first-indexing', question: 'What is mobile-first indexing?' }
    ]}
    relatedTerms={[
      { slug: 'core-web-vitals', term: 'Core Web Vitals' },
      { slug: 'crawlability', term: 'Crawlability' },
      { slug: 'mobile-first-indexing', term: 'Mobile-First Indexing' }
    ]}
  />
);

export default WhatIsTechnicalSEO;