import GlossaryTermPage from '@/components/GlossaryTermPage';

const ClickThroughRateGlossary = () => (
  <GlossaryTermPage
    slug="click-through-rate"
    term="Click-Through Rate (CTR)"
    category="fundamentals"
    definition="Click-through rate (CTR) is the percentage of users who click on a specific link compared to the total number of users who view the search result or page element."
    content={{
      introduction: `CTR measures how often people click your link after seeing it. In SEO, it typically refers to organic search results—the ratio of clicks to impressions. Higher CTR means more traffic from the same ranking position, making CTR optimization a high-leverage SEO activity.`,
      sections: [
        { id: 'why-matters', title: 'Why CTR Matters', content: `CTR impacts SEO significantly: Direct traffic increase without ranking changes, Potential ranking signal (debated but likely), Quality indicator for your listings, Competitive advantage over lower-CTR competitors, and Revenue impact from more qualified visitors reaching your site.` },
        { id: 'averages', title: 'Average CTR by Position', content: `Typical organic CTR: Position #1 (27-32%), Position #2 (15-17%), Position #3 (10-11%), Position #4 (7-8%), Position #5 (5-6%), Positions #6-10 (2-4%). These vary significantly by query type, industry, and SERP features present.` },
        { id: 'improvement', title: 'How to Improve CTR', content: `Optimization tactics: Compelling title tags with power words and numbers, Meta descriptions with clear value propositions and CTAs, Rich snippets through schema markup, Testing different title approaches, Matching search intent precisely, and Monitoring performance in Search Console.` },
        { id: 'factors', title: 'Factors Affecting CTR', content: `Multiple elements influence CTR: Title tag quality and relevance, Meta description effectiveness, URL readability, SERP features (ads, snippets, PAA), Query type (branded vs informational), Competition and their listings, and Mobile vs desktop display differences.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-matters', title: 'Why CTR Matters' },
      { id: 'averages', title: 'Average CTR by Position' },
      { id: 'improvement', title: 'How to Improve CTR' },
      { id: 'factors', title: 'Affecting Factors' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'CTR by SERP Position', data: [{ name: 'Position 1', value: 30 }, { name: 'Position 2', value: 16 }, { name: 'Position 3', value: 11 }, { name: 'Position 4', value: 8 }, { name: 'Position 5', value: 5 }] }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    imageAlt="Click-through rate analytics and performance metrics"
  />
);

export default ClickThroughRateGlossary;