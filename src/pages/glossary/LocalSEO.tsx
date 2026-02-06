import GlossaryTermPage from '@/components/GlossaryTermPage';

const LocalSEOGlossary = () => (
  <GlossaryTermPage
    slug="local-seo"
    term="Local SEO"
    category="local-seo"
    definition="Local SEO is the practice of optimizing your online presence to attract more business from relevant local searches. It focuses on improving visibility in location-based search results, Google Maps, and the local pack—the map and business listings that appear for queries with local intent."
    content={{
      introduction: `Local SEO is essential for any business that serves customers in a specific geographic area. Whether you're a restaurant, law firm, plumber, or retail store, when people search for services "near me" or in a specific city, local SEO determines whether your business appears in those critical results.

The local search landscape is dominated by Google Maps and the local pack—the prominent map with three business listings that appears above organic results for local queries. Appearing in this prime real estate can dramatically increase calls, directions requests, and foot traffic.`,
      whyItMatters: `Local searches have massive commercial intent. When someone searches "plumber near me" or "best pizza in Seattle," they're typically ready to make a decision soon. These aren't casual researchers—they're customers looking to buy, book, or visit.

Statistics underscore this urgency: 46% of all Google searches have local intent, 76% of people who search for something nearby visit a business within a day, and 28% of those searches result in a purchase. For local businesses, appearing in these search results directly drives revenue.

Local SEO also levels the playing field. A well-optimized small business can outrank national chains in local results because Google prioritizes proximity and local relevance over pure domain authority.`,
      howItWorks: `Local search rankings depend on three core factors: relevance, distance, and prominence.

**Relevance** measures how well your business matches the search query. This depends on your Google Business Profile categories, website content, and how well your services align with what people search for.

**Distance** considers how close your business is to the searcher or the location specified in the query. This factor is largely outside your control but reinforces why NAP consistency and accurate address information matter.

**Prominence** reflects how well-known your business is, based on information Google has from across the web—reviews, citations, backlinks, and brand mentions.

Google synthesizes these factors differently for the local pack (where distance weighs heavily) versus local organic results (where traditional SEO factors play larger roles). Optimizing for both requires a comprehensive strategy.`,
      sections: [
        {
          id: 'components',
          title: 'Key Components of Local SEO',
          content: `Successful local SEO requires attention to multiple elements:

**Google Business Profile**: Your GBP listing is the foundation of local visibility. Complete profiles with accurate information, photos, posts, and reviews outperform incomplete competitors.

**NAP Consistency**: Your business name, address, and phone number must be identical across your website, GBP, and all citations. Inconsistencies confuse search engines and hurt rankings.

**Local Citations**: Listings on directories like Yelp, Yellow Pages, and industry-specific sites reinforce your legitimacy and provide ranking signals.

**Reviews**: Quantity, quality, and recency of Google reviews significantly impact local pack rankings. Actively soliciting and responding to reviews is essential.

**Localized Website Content**: Location pages, service area descriptions, and locally-relevant content signal geographic relevance to search engines.

**Local Link Building**: Backlinks from local businesses, organizations, and news sites strengthen local authority.

**Technical SEO**: Mobile optimization, page speed, and LocalBusiness schema markup support local rankings.`
        },
        {
          id: 'ranking-factors',
          title: 'Local Pack vs. Organic Rankings',
          content: `The local pack and local organic results are influenced by different ranking factors:

**Local Pack (Map) Factors**:
- Google Business Profile completeness and accuracy
- Primary category relevance to the query
- Proximity to the searcher
- Review quantity, quality, and velocity
- GBP engagement (posts, Q&A, photos)
- NAP consistency across citations

**Local Organic Factors**:
- On-page optimization for local keywords
- Traditional backlink authority
- Quality localized content
- Technical SEO fundamentals
- Behavioral signals (CTR, engagement)

Smart local SEO strategies target both. The local pack delivers high-intent traffic, while organic rankings capture longer-tail searches and build lasting authority. Many businesses appear in both, maximizing their local visibility.`
        }
      ],
      bestPractices: [
        "Claim and fully optimize your Google Business Profile with accurate categories, complete information, photos, and regular posts",
        "Ensure NAP consistency across your website, GBP, and all citations—even small variations (St. vs Street) can cause issues",
        "Actively generate and respond to Google reviews, aiming for consistent new reviews rather than occasional bursts",
        "Create location-specific pages if you serve multiple areas, with unique content relevant to each community",
        "Build citations on relevant local and industry directories, prioritizing quality and accuracy over quantity"
      ],
      commonMistakes: [
        "Neglecting your Google Business Profile by setting it up once and forgetting it—GBP requires ongoing optimization with posts, photos, and review management",
        "Having inconsistent NAP information across directories, which confuses search engines and dilutes local ranking signals",
        "Keyword stuffing your business name in GBP, which violates guidelines and risks suspension of your listing"
      ],
      example: `A family-owned pizza restaurant in Austin, Texas struggles to appear in local search results despite great food and loyal customers. Their Google Business Profile was incomplete, had no photos, and only 12 reviews. Their website didn't mention "Austin" or their neighborhood anywhere.

They implement a local SEO strategy: completing their GBP with hours, menu links, and 50 appetizing photos. They launch a review campaign, asking satisfied customers to share their experience on Google. They create neighborhood-specific landing pages: "Pizza Delivery in South Austin" and "Best Pizza near UT Campus."

They also claim and correct their listings on Yelp, TripAdvisor, and local directories, ensuring NAP consistency. Within four months, their GBP reviews grow to 85, they appear in the local 3-pack for "pizza near me" for users within 5 miles, and their organic page for "best pizza South Austin" ranks on page one.

The combined effect increases online orders by 60% and phone calls by 40%, demonstrating how local SEO translates directly to revenue for location-based businesses.`
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-it-matters', title: 'Why Local SEO Matters' },
      { id: 'how-it-works', title: 'How It Works' },
      { id: 'components', title: 'Key Components' },
      { id: 'ranking-factors', title: 'Ranking Factors' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'common-mistakes', title: 'Common Mistakes' },
      { id: 'real-world-example', title: 'Real-World Example' },
      { id: 'key-takeaways', title: 'Key Takeaways' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Local Pack Ranking Factor Weights',
      data: [
        { name: 'GBP Signals', value: 36 },
        { name: 'Reviews', value: 17 },
        { name: 'On-Page SEO', value: 16 },
        { name: 'Citations', value: 13 },
        { name: 'Backlinks', value: 10 },
        { name: 'Behavioral', value: 8 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=400&fit=crop"
    imageAlt="Local SEO concept showing Google Maps and local business search results optimization"
  />
);

export default LocalSEOGlossary;
