import GlossaryTermPage from '@/components/GlossaryTermPage';

const LocalSEOGlossary = () => (
  <GlossaryTermPage
    slug="local-seo"
    term="Local SEO"
    category="local-seo"
    definition="Local SEO is the practice of optimizing a business's online presence to attract customers from relevant local searches on Google and other search engines."
    content={{
      introduction: `Local SEO focuses on increasing visibility for geographically-related searches. When someone searches "pizza near me" or "dentist in [city]," local SEO determines which businesses appear. It's essential for any business with a physical location or serving specific geographic areas.`,
      sections: [
        { id: 'components', title: 'Key Components', content: `Local SEO involves: Google Business Profile optimization, Local citation building and NAP consistency, Reviews and reputation management, Local keyword targeting, Location-specific landing pages, Local link building, and Mobile optimization. Each element contributes to local visibility.` },
        { id: 'ranking-factors', title: 'Local Ranking Factors', content: `Google considers: Relevance (business matches search query), Distance (proximity to searcher), Prominence (how well-known the business is), Review quantity and quality, Citation consistency, On-page optimization, and Behavioral signals. The local pack considers different factors than organic results.` },
        { id: 'gbp', title: 'Google Business Profile', content: `GBP is central to local SEO: Claim and verify your listing, Complete all business information, Choose accurate categories, Add photos and videos regularly, Respond to reviews promptly, Post updates and offers, Answer questions, and Monitor insights for optimization opportunities.` },
        { id: 'strategy', title: 'Local SEO Strategy', content: `Build local presence through: Keyword research with local modifiers, Location pages for each service area, Consistent NAP across all directories, Active review generation campaigns, Local content creation, Community involvement and PR, Local business partnerships, and Schema markup for local businesses.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'components', title: 'Key Components' },
      { id: 'ranking-factors', title: 'Ranking Factors' },
      { id: 'gbp', title: 'Google Business Profile' },
      { id: 'strategy', title: 'Local SEO Strategy' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Local Pack Ranking Factors', data: [{ name: 'GBP Signals', value: 35 }, { name: 'Reviews', value: 20 }, { name: 'On-Page', value: 15 }, { name: 'Citations', value: 15 }, { name: 'Links', value: 15 }] }}
    imageUrl="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop"
    imageAlt="Local SEO and location-based search optimization"
  />
);

export default LocalSEOGlossary;