import GlossaryTermPage from '@/components/GlossaryTermPage';

const SearchVolumeGlossary = () => (
  <GlossaryTermPage
    slug="search-volume"
    term="Search Volume"
    category="fundamentals"
    definition="Search volume refers to the average number of times a specific keyword is searched in a search engine within a given time period, typically measured monthly."
    content={{
      introduction: `Search volume represents keyword popularity—how many times users enter a query into search engines. Most SEO tools report monthly search volume (MSV), helping marketers estimate traffic potential and prioritize keywords. Understanding volume helps validate market demand and plan content strategy.`,
      sections: [
        { id: 'measurement', title: 'How Volume is Measured', content: `Search volume data comes from: Google Keyword Planner (ranges for advertisers), Third-party tools using clickstream data, Google Search Console (actual impressions for your site), and Proprietary algorithms combining multiple sources. Remember these are estimates, not exact counts.` },
        { id: 'interpretation', title: 'Interpreting Volume Data', content: `Volume context matters by industry: B2B SaaS (100-500 is medium), E-commerce (1,000-10,000 is medium), News/Media (10,000-100,000 is medium). Also consider seasonality, trending topics, and that volume doesn't equal traffic due to SERP features and zero-click searches.` },
        { id: 'strategy', title: 'Volume and Strategy', content: `High volume: Maximum potential but high competition. Medium volume: Balanced opportunity and effort. Low volume: Lower competition, higher conversions, requires more content pieces. Smart SEO balances all three based on business goals and competitive position.` },
        { id: 'beyond-volume', title: 'Beyond Raw Numbers', content: `Quality considerations: Search intent (buyer intent vs informational), Conversion potential of the traffic, Brand fit and relevance, Competition context, Seasonal patterns and trends, and Long-tail aggregation (many small keywords can equal one large one).` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'measurement', title: 'How Volume is Measured' },
      { id: 'interpretation', title: 'Interpreting Data' },
      { id: 'strategy', title: 'Volume and Strategy' },
      { id: 'beyond-volume', title: 'Beyond Raw Numbers' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Search Volume by Keyword Type', data: [{ name: 'Head Terms', value: 50000 }, { name: 'Body Keywords', value: 5000 }, { name: 'Long-Tail', value: 500 }] }}
    imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    imageAlt="Search volume data showing monthly keyword search frequency metrics and SEO traffic potential analysis"
  />
);

export default SearchVolumeGlossary;