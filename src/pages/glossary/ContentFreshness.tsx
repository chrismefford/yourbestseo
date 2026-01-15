import GlossaryTermPage from '@/components/GlossaryTermPage';

const ContentFreshnessGlossary = () => (
  <GlossaryTermPage
    slug="content-freshness"
    term="Content Freshness"
    category="content-seo"
    definition="Content freshness refers to how recently content was created or updated, a ranking factor Google considers particularly important for time-sensitive and trending topics."
    content={{
      introduction: `Google's "Freshness" algorithm, introduced in 2011, gives preference to recently updated content for certain types of queries. Fresh content signals active maintenance, current accuracy, and relevance. However, freshness matters more for some topics than others—understanding when to prioritize updates is key.`,
      sections: [
        { id: 'when-matters', title: 'When Freshness Matters', content: `Freshness is important for: Breaking news and current events, Trending topics and viral content, Recurring events (elections, sports seasons), Fast-changing industries (tech, finance), Product and service updates, and Time-sensitive searches (best 2024 phones). Evergreen content may not need frequent updates.` },
        { id: 'signals', title: 'Freshness Signals', content: `Google evaluates freshness through: Page creation/modification dates, Content changes (not just timestamp updates), New page discovery, Link velocity (new links to content), User engagement changes, Structured data with dates, and Social sharing patterns.` },
        { id: 'updating', title: 'Content Update Strategy', content: `Maintain freshness by: Auditing content quarterly or annually, Updating statistics and references, Adding new sections for developments, Refreshing outdated examples, Improving based on user feedback, Consolidating older related posts, and Republishing significantly updated content.` },
        { id: 'balance', title: 'Balancing Freshness', content: `Strategic considerations: Don't update content for the sake of dates alone, Focus updates on genuinely improved value, Track performance changes after updates, Prioritize high-traffic pages for refresh, Create new content for new angles, and Maintain URL stability for link equity.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'when-matters', title: 'When Freshness Matters' },
      { id: 'signals', title: 'Freshness Signals' },
      { id: 'updating', title: 'Update Strategy' },
      { id: 'balance', title: 'Balancing Freshness' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Query Types by Freshness Importance', data: [{ name: 'High Freshness Need', value: 25 }, { name: 'Moderate Need', value: 35 }, { name: 'Low Need (Evergreen)', value: 40 }] }}
    imageUrl="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop"
    imageAlt="Content freshness strategy showing regular content updates for improved SEO rankings"
  />
);

export default ContentFreshnessGlossary;