import GlossaryTermPage from '@/components/GlossaryTermPage';

const ImpressionsGlossary = () => (
  <GlossaryTermPage
    slug="impressions"
    term="Impressions"
    category="fundamentals"
    definition="Impressions represent the number of times a webpage appears in search results, regardless of whether users click on it. Each display counts as one impression."
    content={{
      introduction: `In SEO, an impression occurs each time your webpage URL appears in Google search results. Impressions measure visibility—how often your pages are seen by potential visitors. While clicks drive traffic, impressions indicate your reach and potential audience.`,
      sections: [
        { id: 'counting', title: 'How Impressions Are Counted', content: `Google counts impressions when: Your URL appears in standard search results, Content shows in image or video carousels, Pages appear in featured snippets, Listings display with rich results. Impressions count even if users don't scroll to see your result.` },
        { id: 'why-matter', title: 'Why Impressions Matter', content: `Impressions are valuable for: Measuring visibility and reach, Tracking SEO progress over time, Identifying CTR optimization opportunities, Discovering keywords you rank for, Assessing brand awareness potential, and Serving as leading indicators of traffic growth.` },
        { id: 'analysis', title: 'Analyzing Impression Data', content: `Interpret patterns: High impressions + low clicks = CTR opportunity, High impressions + low position = ranking improvement needed, Low impressions + high position = low-volume terms, Growing impressions = expanding visibility. Use Search Console to filter by query, page, and device.` },
        { id: 'relationship', title: 'Impressions and CTR', content: `The relationship is crucial: CTR = Clicks ÷ Impressions. More impressions don't guarantee more traffic. A page with 10,000 impressions at 1% CTR gets 100 clicks. Another with 5,000 impressions at 4% CTR gets 200 clicks. Focus on both visibility and conversion.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'counting', title: 'How Impressions Work' },
      { id: 'why-matter', title: 'Why They Matter' },
      { id: 'analysis', title: 'Analyzing Data' },
      { id: 'relationship', title: 'Impressions and CTR' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Impression Sources', data: [{ name: 'Standard Results', value: 60 }, { name: 'Featured Snippets', value: 15 }, { name: 'Image Results', value: 15 }, { name: 'Rich Results', value: 10 }] }}
    imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    imageAlt="Search impressions and visibility analytics"
  />
);

export default ImpressionsGlossary;