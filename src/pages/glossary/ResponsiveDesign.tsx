import GlossaryTermPage from '@/components/GlossaryTermPage';

const ResponsiveDesignGlossary = () => (
  <GlossaryTermPage
    slug="responsive-design"
    term="Responsive Design"
    category="technical-seo"
    definition="Responsive design is a web development approach that creates pages that automatically adjust their layout, images, and functionality to provide optimal viewing across all screen sizes and devices."
    content={{
      introduction: `Responsive web design uses flexible layouts, images, and CSS media queries to detect screen size and adjust content accordingly. Rather than building separate sites for different devices, responsive design creates a single site that works everywhere—from desktop monitors to tablets to smartphones—improving user experience and simplifying SEO efforts.`,
      sections: [
        { id: 'core-principles', title: 'Core Principles', content: `Responsive design relies on: Fluid grids using relative units (%, em, rem), Flexible images that scale with containers, CSS media queries for breakpoint styling, Mobile-first development approach, Touch-friendly navigation and buttons, and Readable text without horizontal scrolling. These elements work together to create seamless experiences.` },
        { id: 'seo-benefits', title: 'SEO Benefits', content: `Responsive design helps SEO through: Single URL structure (no split authority), Easier link building (one URL to promote), Simplified content management, Lower bounce rates from mobile users, Improved Core Web Vitals scores, Better crawl efficiency (one version to index), and Google's explicit preference for responsive sites.` },
        { id: 'best-practices', title: 'Implementation Best Practices', content: `Build responsive sites by: Starting mobile-first then enhancing for larger screens, Using CSS Flexbox and Grid for layouts, Setting appropriate viewport meta tags, Optimizing images for all screen sizes, Testing across real devices and browsers, Considering touch targets (minimum 44x44 pixels), and Avoiding hover-only interactions.` },
        { id: 'testing', title: 'Testing Responsiveness', content: `Verify responsive design with: Chrome DevTools device emulation, BrowserStack or Sauce Labs, Real device testing lab, Google's Mobile-Friendly Test, Responsive design checker tools, and User testing across devices. Don't rely solely on emulators—test on actual devices.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'core-principles', title: 'Core Principles' },
      { id: 'seo-benefits', title: 'SEO Benefits' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'testing', title: 'Testing' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'User Engagement by Design Type', data: [{ name: 'Responsive', value: 85 }, { name: 'Adaptive', value: 72 }, { name: 'Separate Mobile', value: 58 }, { name: 'Desktop Only', value: 25 }] }}
    imageUrl="https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=400&fit=crop"
    imageAlt="Responsive web design showing adaptive layouts across desktop, tablet, and mobile devices for SEO"
  />
);

export default ResponsiveDesignGlossary;
