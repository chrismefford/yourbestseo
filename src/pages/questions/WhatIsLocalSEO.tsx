import QuestionPage from '@/components/QuestionPage';

const WhatIsLocalSEO = () => (
  <QuestionPage
    slug="what-is-local-seo"
    question="What is local SEO?"
    shortAnswer="Local SEO is the practice of optimizing your online presence to attract more customers from local searches. It focuses on appearing in Google Maps, the local pack, and location-based search results for your service area."
    content={{
      introduction: `Local SEO helps businesses promote their products and services to local customers at the exact moment they're searching. When someone searches for "dentist near me" or "best pizza in San Diego," local SEO determines which businesses appear.

For businesses with physical locations or serving specific geographic areas, local SEO is essential. Nearly half of all Google searches have local intent, and 76% of people who search for something nearby on their phone visit a business within a day. Local search isn't just about visibility—it directly drives foot traffic and phone calls.

Local SEO differs from traditional SEO in several ways. It emphasizes Google Business Profile, local citations, reviews, and geographic relevance. While traditional SEO focuses on ranking nationally or globally, local SEO targets customers in specific cities, neighborhoods, or regions.`,
      sections: [
        {
          id: 'local-seo-elements',
          title: 'Key Elements of Local SEO',
          content: `Local SEO success depends on several interconnected factors:

**Google Business Profile (GBP)**
Your GBP listing is the foundation of local SEO. It appears in Google Maps and the local pack. Optimize with accurate business information, categories, photos, and posts.

**Local Citations**
Mentions of your business name, address, and phone number (NAP) on directories like Yelp, Yellow Pages, and industry-specific sites. Consistency across citations is crucial.

**Reviews**
Google reviews impact local rankings and customer decisions. Quantity, quality, recency, and your responses all matter.

**On-Page Optimization**
Location-specific pages, local keywords in title tags and content, embedded maps, and schema markup for local businesses.

**Link Building**
Backlinks from local businesses, organizations, news sites, and community resources signal local relevance.

**Mobile Optimization**
Most local searches happen on mobile devices. Fast, mobile-friendly websites are essential.`
        },
        {
          id: 'google-business-profile',
          title: 'Optimizing Google Business Profile',
          content: `GBP is the most important local ranking factor:

**Claim and Verify**
Claim your listing at business.google.com and complete the verification process (usually via postcard, phone, or email).

**Complete Every Section**
Fill out every available field—business name, address, phone, website, hours, categories, attributes, description, and more.

**Choose Categories Wisely**
Select your primary category carefully and add relevant secondary categories. Categories directly impact which searches you appear for.

**Add Photos and Videos**
Businesses with photos receive 42% more direction requests. Add exterior, interior, product, team, and action photos.

**Post Regularly**
Use Google Posts to share updates, offers, events, and content. Active profiles signal relevance.

**Respond to Reviews**
Reply to all reviews—positive and negative. This shows engagement and can influence customer decisions.

**Use Messaging and Booking**
Enable direct messaging and booking features if applicable to your business.`
        },
        {
          id: 'local-pack-ranking',
          title: 'Ranking in the Local Pack',
          content: `The local pack (map with 3 listings) appears for location-based searches:

**Relevance**
How well your business matches the search query. Category selection, keywords in your description, and services listed all factor in.

**Distance**
How close your business is to the searcher's location. You can't change your location, but you can optimize for service areas.

**Prominence**
How well-known your business is. Reviews, links, citations, and overall web presence indicate prominence.

**Strategies for Local Pack Success**
- Optimize GBP completely
- Build quality citations
- Earn positive reviews
- Create location-specific website content
- Get backlinks from local sources
- Ensure NAP consistency everywhere

**Service Area Businesses**
If you travel to customers (plumbers, electricians), set service areas in GBP rather than a physical address. Optimize content for each service area.`
        },
        {
          id: 'local-content-strategy',
          title: 'Local Content Strategy',
          content: `Create content that signals geographic relevance:

**Location Pages**
Create dedicated pages for each location or service area. Include unique content about that specific area, not just templated text.

**Local Keywords**
Target keywords that include location modifiers: "SEO agency San Diego," "plumber in La Jolla," "best coffee downtown."

**Local Link Building**
- Sponsor local events or charities
- Join local business associations
- Get featured in local news
- Partner with complementary local businesses
- Create local resource guides

**Community Involvement**
Content about local events, community involvement, and local partnerships signals genuine local presence.

**Customer Stories**
Feature case studies and testimonials from local customers, mentioning their neighborhood or area.

**Local Schema Markup**
Implement LocalBusiness schema markup to help search engines understand your location and service details.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'local-seo-elements', title: 'Key Elements' },
      { id: 'google-business-profile', title: 'Google Business Profile' },
      { id: 'local-pack-ranking', title: 'Local Pack Ranking' },
      { id: 'local-content-strategy', title: 'Content Strategy' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Local SEO Ranking Factors',
      data: [
        { name: 'GBP Signals', value: 36 },
        { name: 'Reviews', value: 17 },
        { name: 'On-Page', value: 16 },
        { name: 'Links', value: 13 },
        { name: 'Citations', value: 10 },
        { name: 'Other', value: 8 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
    imageAlt="Local SEO optimization showing Google Maps business listing and location-based search results for nearby businesses"
    relatedQuestions={[
      { slug: 'how-to-rank-in-google-maps', question: 'How do I rank in Google Maps?' },
      { slug: 'what-is-google-business-profile', question: 'What is Google Business Profile?' },
      { slug: 'how-to-get-more-google-reviews', question: 'How do I get more Google reviews?' }
    ]}
    relatedTerms={[
      { slug: 'local-seo', term: 'Local SEO' },
      { slug: 'google-business-profile', term: 'Google Business Profile' },
      { slug: 'local-pack', term: 'Local Pack' }
    ]}
  />
);

export default WhatIsLocalSEO;
