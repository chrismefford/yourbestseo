import GlossaryTermPage from '@/components/GlossaryTermPage';

const MobileFirstIndexingGlossary = () => (
  <GlossaryTermPage
    slug="mobile-first-indexing"
    term="Mobile-First Indexing"
    category="technical-seo"
    definition="Mobile-first indexing means Google predominantly uses the mobile version of a website's content for indexing and ranking, reflecting the majority of users accessing the web via mobile devices."
    content={{
      introduction: `Since 2019, Google has progressively shifted to mobile-first indexing for all websites. This means Google's crawler (Googlebot) primarily uses the mobile version of your site for indexing and ranking. If your mobile site has different content, features, or structure than your desktop version, the mobile version is what counts for SEO.`,
      sections: [
        { id: 'why-matters', title: 'Why It Matters', content: `Mobile-first indexing is crucial because: Over 60% of searches occur on mobile devices, Google ranks based on mobile content, Desktop-only content may not be indexed, Mobile user experience directly impacts rankings, and Sites without mobile optimization lose visibility. If your mobile site is inferior to desktop, your rankings suffer.` },
        { id: 'requirements', title: 'Mobile-First Requirements', content: `Ensure compliance by: Having identical content on mobile and desktop, Using the same structured data on both versions, Maintaining meta robots tags across versions, Including all important images with proper alt text, Using mobile-friendly media formats, and Ensuring videos are playable on mobile.` },
        { id: 'responsive', title: 'Responsive Design Benefits', content: `Responsive design is recommended because: Same content served to all devices, Single URL structure (no duplicate content issues), Easier maintenance and updates, Google's preferred approach, Better user experience across devices, and Simplified analytics tracking. Separate mobile sites (m.domain.com) require more careful management.` },
        { id: 'testing', title: 'Testing Mobile Readiness', content: `Verify mobile optimization with: Google's Mobile-Friendly Test, Search Console Mobile Usability report, Lighthouse mobile audits, Manual testing on real devices, and Checking for mobile-specific errors. Address issues promptly as they directly impact rankings.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-matters', title: 'Why It Matters' },
      { id: 'requirements', title: 'Requirements' },
      { id: 'responsive', title: 'Responsive Design' },
      { id: 'testing', title: 'Testing' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Global Search Traffic by Device', data: [{ name: 'Mobile', value: 63 }, { name: 'Desktop', value: 34 }, { name: 'Tablet', value: 3 }] }}
    imageUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop"
    imageAlt="Mobile-first indexing and responsive design"
  />
);

export default MobileFirstIndexingGlossary;
