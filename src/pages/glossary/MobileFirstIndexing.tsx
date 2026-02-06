import GlossaryTermPage from '@/components/GlossaryTermPage';

const MobileFirstIndexingGlossary = () => (
  <GlossaryTermPage
    slug="mobile-first-indexing"
    term="Mobile-First Indexing"
    category="technical-seo"
    definition="Mobile-first indexing means Google predominantly uses the mobile version of a website's content for indexing and ranking, reflecting the majority of users accessing the web via mobile devices."
    content={{
      introduction: `Since 2019, Google has progressively shifted to mobile-first indexing for all websites. This means Google's crawler (Googlebot) primarily uses the mobile version of your site for indexing and ranking. If your mobile site has different content, features, or structure than your desktop version, the mobile version is what counts for SEO.

This fundamental shift reflects reality: over 60% of global searches occur on mobile devices. Google is simply prioritizing what most users experience. For website owners, mobile-first indexing means mobile optimization isn't optional—it's the foundation of your SEO strategy.

Understanding mobile-first indexing requires abandoning desktop-centric thinking. Your mobile experience isn't a "secondary" version of your site—it IS your site in Google's eyes. Content hidden on mobile, features that don't work on mobile, or poor mobile performance directly impact your search rankings.`,
      whyItMatters: `Mobile-first indexing fundamentally impacts SEO:

**Ranking Is Based on Mobile**: Google evaluates and ranks your site based on its mobile version. Desktop-only optimizations don't count if they're missing on mobile.

**Hidden Content Won't Rank**: Content collapsed in accordions, behind tabs, or hidden via CSS on mobile may not be indexed. If users can't easily see it on mobile, Google may ignore it.

**User Experience Signals**: Mobile page speed, mobile usability, and Core Web Vitals on mobile directly affect rankings. Poor mobile experience means poor rankings.

**Parity Requirements**: Your mobile and desktop versions need consistent content. Removing content from mobile "to simplify" actively hurts your SEO.

**Structured Data Matters**: Schema markup must be present on mobile pages. Desktop-only structured data won't be indexed.

**Competitive Disadvantage**: Competitors with excellent mobile experiences will outrank you regardless of your desktop quality.`,
      howItWorks: `Mobile-first indexing operates through specific mechanisms:

**Googlebot Smartphone**: Google primarily crawls using its mobile user-agent (Googlebot Smartphone). This version of Googlebot sees what mobile users see.

**Rendering and Evaluation**: Google renders your mobile pages and evaluates content, structure, and performance as mobile users would experience them.

**Content Indexing**: The text, images, videos, and links found on your mobile pages are what get indexed and used for ranking.

**Desktop Crawling Continues**: Google still crawls desktop versions occasionally, but mobile is primary for indexing decisions.

**Switch Timeline**: Google began mobile-first indexing in 2018 and completed the transition for all sites by 2021. All new sites are automatically mobile-first indexed.

**Unified Index**: There's only one index—Google doesn't maintain separate mobile and desktop indexes. Your mobile content determines your position in that single index.`,
      sections: [
        { id: 'requirements', title: 'Mobile-First Requirements', content: `Ensure compliance with these requirements:

**Content Parity**: Mobile and desktop versions must have the same primary content. Don't hide important content on mobile—if it matters for SEO, it must be visible and accessible.

**Identical Structured Data**: Include the same schema markup on mobile pages. Verify with Google's Rich Results Test using mobile user-agent.

**Same Meta Tags**: Title tags, meta descriptions, and meta robots directives must be consistent across versions.

**High-Quality Images**: Don't serve tiny, low-quality images on mobile. Include proper alt text on mobile images.

**Accessible Navigation**: Ensure all internal links work on mobile. Navigation should be complete and functional.

**Playable Media**: Videos and other media must work on mobile devices. No Flash, no desktop-only players.

**Verify Googlebot Access**: Ensure your mobile version doesn't block Googlebot. Check robots.txt and verify rendering.` },
        { id: 'responsive', title: 'Responsive Design Benefits', content: `Responsive design is Google's recommended approach:

**Single URL Structure**: One URL serves all devices. No duplicate content issues, no split authority between m.domain.com and www.domain.com.

**Easier Maintenance**: Update content once, and it's updated everywhere. No synchronization issues between versions.

**Natural Link Building**: All backlinks point to the same URL, consolidating authority.

**Google's Preference**: Google explicitly recommends responsive design. It's the simplest to implement correctly.

**Analytics Simplicity**: One URL makes tracking straightforward. No need to combine or compare data across versions.

**Future-Proof**: Responsive designs adapt to new device sizes without additional development.

**Alternatives**: If responsive isn't possible, Google also supports dynamic serving (same URL, different HTML) and separate mobile URLs (m.domain.com). Both require additional technical considerations like Vary headers and bidirectional annotations.` },
        { id: 'testing', title: 'Testing Mobile Readiness', content: `Verify mobile optimization through multiple methods:

**Google's Mobile-Friendly Test**: Enter any URL to check if Google considers it mobile-friendly. Shows specific issues to fix.

**Search Console Mobile Usability Report**: Identifies mobile usability issues across your entire site—clickable elements too close together, content wider than screen, etc.

**URL Inspection Tool**: Check individual URLs to see how Googlebot sees your mobile page. Verify that rendered content matches expectations.

**Lighthouse Mobile Audits**: Chrome DevTools Lighthouse provides comprehensive mobile performance and usability assessments.

**Core Web Vitals**: Check mobile-specific Core Web Vitals in Search Console. Mobile and desktop metrics can differ significantly.

**Real Device Testing**: Emulators are helpful, but test on actual mobile devices to catch issues simulators miss.

**Scroll and Tap Testing**: Manually verify that all content is accessible via normal mobile interactions. Check accordions, tabs, and interactive elements.` }
      ],
      bestPractices: [
        'Use responsive design as your primary approach—one site that works everywhere',
        'Test mobile rendering regularly using Google\'s Mobile-Friendly Test and Search Console',
        'Ensure content parity—mobile users and Googlebot should see the same content as desktop',
        'Optimize Core Web Vitals specifically for mobile connections and devices',
        'Include structured data on mobile pages with identical markup to desktop',
        'Verify internal linking works correctly on mobile navigation'
      ],
      commonMistakes: [
        'Hiding content on mobile that exists on desktop—Google may not index hidden content',
        'Using different URLs for mobile without proper annotations and canonicalization',
        'Blocking CSS, JavaScript, or other resources needed for mobile rendering',
        'Ignoring mobile page speed while optimizing desktop performance',
        'Assuming desktop rankings reflect mobile reality—check mobile-specific data',
        'Forgetting structured data on mobile versions when using separate mobile sites'
      ],
      example: `A large news publisher maintained separate mobile (m.domain.com) and desktop sites. Desktop had full articles with related content widgets, author bios, and extensive schema markup. Mobile had condensed articles with minimal extras and no structured data. When Google completed mobile-first indexing transition, they saw dramatic ranking drops—articles that ranked position 1-3 fell to positions 10-15 within months. Analysis revealed that Google was now indexing the stripped-down mobile versions, missing rich content that had driven rankings. They invested in a responsive redesign, ensuring content parity, mobile structured data, and optimized Core Web Vitals. After launch and reindexing, rankings recovered over 6 weeks and eventually exceeded previous positions. Mobile traffic increased 40% as both rankings improved and the new responsive experience reduced bounce rates. The lesson: mobile-first isn't about having a mobile site—it's about having your best content accessible on mobile.`
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-it-matters', title: 'Why It Matters' },
      { id: 'how-it-works', title: 'How It Works' },
      { id: 'requirements', title: 'Requirements' },
      { id: 'responsive', title: 'Responsive Design' },
      { id: 'testing', title: 'Testing' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'common-mistakes', title: 'Common Mistakes' },
      { id: 'example', title: 'Real Example' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Global Search Traffic by Device Type', data: [{ name: 'Mobile', value: 63 }, { name: 'Desktop', value: 34 }, { name: 'Tablet', value: 3 }] }}
    imageUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop"
    imageAlt="Mobile-first indexing concept showing responsive website design on smartphone for Google SEO"
  />
);

export default MobileFirstIndexingGlossary;
