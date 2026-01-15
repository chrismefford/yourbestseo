import GlossaryTermPage from '@/components/GlossaryTermPage';

const LocalCitationsGlossary = () => {
  return (
    <GlossaryTermPage
      slug="local-citations"
      term="Local Citations"
      category="local-seo"
      definition="Local citations are online mentions of your business that include your name, address, and phone number (NAP). Citations can appear on business directories, websites, social platforms, and apps, serving as references that help search engines verify your business information and determine local search rankings."
      content={{
        introduction: `Local citations are the digital equivalent of word-of-mouth recommendations for search engines. Every time your business information appears online—whether on Yelp, Yellow Pages, your local chamber of commerce website, or an industry-specific directory—it creates a citation that search engines use to verify and rank your business in local search results.

Citations serve two primary purposes in local SEO. First, they act as trust signals, helping Google and other search engines confirm that your business exists, is located where you say it is, and is legitimate. The more consistent citations you have across authoritative platforms, the more confident search engines become in your business information. Second, citations from high-quality directories can drive direct referral traffic to your website or physical location.

Research from local SEO studies consistently shows that citation quantity and quality correlate strongly with Local Pack rankings. Businesses in the top three Local Pack positions have an average of 85 citations from quality sources, compared to just 29 citations for businesses ranking outside the top ten. However, citation building is about quality over quantity—a handful of citations on authoritative, relevant platforms outweigh hundreds on low-quality, spammy directories.`,
        sections: [
          {
            id: 'types-of-citations',
            title: 'Types of Citations',
            content: `Citations come in two main forms, each playing a different role in your local SEO strategy:

**Structured Citations**
These are listings on business directories and platforms with standardized formats for business information:

- Major search engines and maps (Google Business Profile, Apple Maps, Bing Places)
- General directories (Yelp, Yellow Pages, BBB, Foursquare)
- Data aggregators (Acxiom, Infogroup, Localeze, Factual)
- Social platforms (Facebook, LinkedIn, Instagram)
- Industry-specific directories (TripAdvisor for restaurants, Avvo for lawyers)
- Local directories (Chamber of commerce, local business associations)

**Unstructured Citations**
These are mentions of your business in non-standardized formats across the web:

- Blog posts mentioning your business
- News articles and press releases
- Event listings and sponsorship pages
- Forum discussions and community websites
- Business partnerships and supplier pages
- Local newspaper websites

Both types contribute to your citation profile, though structured citations on authoritative directories typically carry more weight for local ranking purposes.`
          },
          {
            id: 'building-citations',
            title: 'Building a Strong Citation Profile',
            content: `Creating an effective citation strategy requires a systematic approach:

**Start with Data Aggregators**
Data aggregators distribute your business information to hundreds of smaller directories. Getting your NAP correct with the four major aggregators (Acxiom, Infogroup, Localeze, and Factual) creates a foundation of consistent information that propagates throughout the web.

**Claim Major Platforms First**
Focus on the platforms that carry the most authority:
1. Google Business Profile
2. Apple Maps
3. Bing Places
4. Yelp
5. Facebook
6. Better Business Bureau
7. Yellow Pages/White Pages
8. Foursquare

**Target Industry-Specific Directories**
Every industry has authoritative directories that matter for that niche:
- Restaurants: TripAdvisor, OpenTable, Zomato
- Healthcare: Healthgrades, Vitals, ZocDoc
- Legal: Avvo, FindLaw, Justia
- Home Services: Angi, HomeAdvisor, Thumbtack
- Automotive: Cars.com, AutoTrader, CarGurus

**Build Local Citations**
Local sources add geographic relevance:
- Chamber of commerce membership
- Local business associations
- City/town business directories
- Regional news site business listings
- Local event sponsorships
- Community organization memberships

**Quality Over Quantity**
Focus on directories that are:
- Regularly updated and maintained
- Indexed by search engines
- Relevant to your industry or location
- Established with domain authority
- Free from spammy or low-quality listings`
          },
          {
            id: 'citation-management',
            title: 'Managing and Maintaining Citations',
            content: `Citation management is an ongoing process that requires attention and tools:

**Regular Auditing**
Conduct citation audits quarterly to:
- Identify inconsistent NAP information
- Find duplicate listings that need merging
- Discover new citation opportunities
- Remove listings on low-quality or spammy sites
- Update information that has changed

**Using Citation Management Tools**
Several tools can help automate citation management:
- Moz Local: Submits to major directories and monitors accuracy
- BrightLocal: Comprehensive citation tracking and building
- Yext: PowerListings for automated sync across directories
- Whitespark: Citation finder and link prospector
- Semrush: Local SEO toolkit with citation tracking

**Handling Business Changes**
When business information changes (new address, phone, or name), you must update citations systematically:
1. Update Google Business Profile first
2. Update data aggregators
3. Update major directories
4. Work through remaining citations
5. Monitor for auto-generated incorrect listings

**Duplicate Management**
Duplicates confuse search engines and split review counts:
- Search for your business on each platform to identify duplicates
- Request merges or deletions through platform support
- Keep the listing with the most history and reviews
- Document duplicates removed for tracking

**Monitoring New Citations**
Set up Google Alerts for your business name to catch:
- New mentions requiring NAP correction
- Unauthorized listings to claim or correct
- Opportunities for additional citations
- Negative content requiring response`
          },
          {
            id: 'measuring-impact',
            title: 'Measuring Citation Impact',
            content: `Understanding how citations affect your local SEO helps prioritize efforts:

**Citation Metrics to Track**
- Total citation count across platforms
- Citation accuracy score (percentage with correct NAP)
- Domain authority of citation sources
- Referral traffic from citation sources
- Local Pack ranking changes over time

**Correlation with Rankings**
While citations alone don't guarantee rankings, there are clear correlations:
- Businesses ranking #1-3 in Local Pack average 80+ quality citations
- Accurate citations correlate with 33% higher ranking likelihood
- Industry-specific citations boost relevance for niche searches
- Local citations strengthen geographic relevance signals

**Direct Business Value**
Beyond rankings, citations provide:
- Direct click-through traffic from directories
- Phone calls from directory listings
- Brand visibility and awareness
- Trust signals for potential customers researching online
- Backlinks from some directory platforms

**ROI Considerations**
Calculate citation ROI by tracking:
- Cost of citation building/management tools
- Time invested in manual updates
- Traffic and conversions from citation sources
- Ranking improvements and resulting traffic gains

Most businesses see the strongest returns from getting the top 40-50 authoritative directories correct, with diminishing returns from extensive citation building beyond that point. Focus on quality sources with high domain authority and relevance to your business.`
          }
        ]
      }}
      tableOfContents={[
        { id: 'introduction', title: 'Introduction' },
        { id: 'types-of-citations', title: 'Types of Citations' },
        { id: 'building-citations', title: 'Building Citations' },
        { id: 'citation-management', title: 'Citation Management' },
        { id: 'measuring-impact', title: 'Measuring Impact' },
        { id: 'data-insights', title: 'Data Insights' },
        { id: 'related-terms', title: 'Related Terms' }
      ]}
      chartData={{
        type: 'bar',
        title: 'Average Citations by Local Pack Position',
        data: [
          { name: 'Position 1', value: 92 },
          { name: 'Position 2', value: 85 },
          { name: 'Position 3', value: 78 },
          { name: 'Positions 4-10', value: 41 }
        ]
      }}
      imageUrl="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=400&fit=crop"
      imageAlt="Local citations showing business listings across online directories for local SEO visibility"
    />
  );
};

export default LocalCitationsGlossary;
