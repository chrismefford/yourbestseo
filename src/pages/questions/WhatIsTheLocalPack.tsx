import QuestionPage from '@/components/QuestionPage';

const WhatIsTheLocalPack = () => (
  <QuestionPage
    slug="what-is-the-local-pack"
    question="What is the local pack?"
    shortAnswer="The local pack (or map pack) is the section of Google search results that displays a map with three local business listings. It appears for location-based queries and is prime real estate for local businesses."
    content={{
      introduction: `The local pack, also known as the "map pack" or "3-pack," is a prominent feature in Google search results that displays three local business listings along with a map. It appears when Google determines the searcher has local intent—looking for a business, service, or place nearby.

Appearing in the local pack is extremely valuable because it positions your business above organic search results and includes your rating, address, hours, and a direct link to your Google Business Profile. Studies show the local pack receives a significant portion of clicks for local searches.

Competition for local pack positions is fierce. Understanding what influences local pack rankings and how to optimize for them is essential for any business that serves customers in a specific geographic area.`,
      sections: [
        {
          id: 'local-pack-features',
          title: 'Features of the Local Pack',
          content: `**Map Display**: A Google Maps view showing the locations of the three featured businesses with pins.

**Business Listings**: Three businesses displayed with their name, star rating, review count, and category.

**Business Details**: Address, hours of operation, and sometimes phone numbers or special attributes.

**Star Ratings**: Aggregate rating displayed prominently, heavily influencing click-through rates.

**"More Places" Link**: Expands to show additional businesses beyond the top three.

**Direct Actions**: Users can click to call, get directions, or visit the website directly from the listing.`
        },
        {
          id: 'ranking-factors',
          title: 'Local Pack Ranking Factors',
          content: `**Relevance**: How well your business matches the search query. Complete Google Business Profiles with accurate categories rank better.

**Distance**: How far your business is from the searcher or the location specified in the query. Physical proximity matters.

**Prominence**: How well-known your business is. This includes review quantity and quality, citations, backlinks, and overall web presence.

**Google Business Profile Quality**: Complete profiles with photos, posts, and accurate information outrank incomplete ones.

**Reviews and Ratings**: Businesses with more positive reviews and higher ratings tend to rank higher.

**Website Optimization**: Your website's local SEO signals also influence local pack rankings.`
        },
        {
          id: 'optimization-strategies',
          title: 'Strategies to Rank in the Local Pack',
          content: `**Optimize Google Business Profile**: Complete every field, add photos regularly, post updates, and respond to reviews.

**Build Quality Reviews**: Encourage satisfied customers to leave reviews and respond to all reviews promptly.

**Ensure NAP Consistency**: Your business name, address, and phone number should be identical everywhere online.

**Build Local Citations**: Get listed on major directories and industry-specific platforms with consistent information.

**Optimize Website for Local**: Include location in titles, add local schema markup, and create location-specific content.

**Earn Local Backlinks**: Build links from local businesses, organizations, and news sites to strengthen local authority.`
        },
        {
          id: 'tracking-performance',
          title: 'Tracking Local Pack Performance',
          content: `**Monitor Rankings**: Track your position in the local pack for target keywords. Rankings can vary by location.

**Track Impressions**: Google Business Profile insights show how often you appear in local results.

**Measure Actions**: Track calls, direction requests, and website clicks from your profile.

**Check Competitor Rankings**: Understand who ranks above you and analyze what they're doing differently.

**Use Grid Tracking**: Local rank tracking tools show your rankings across a geographic grid to understand visibility.

**Analyze Search Terms**: See what queries trigger your local pack appearance in Search Console and GBP insights.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'local-pack-features', title: 'Local Pack Features' },
      { id: 'ranking-factors', title: 'Ranking Factors' },
      { id: 'optimization-strategies', title: 'Optimization Strategies' },
      { id: 'tracking-performance', title: 'Tracking Performance' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Local Pack Ranking Factor Weights',
      data: [
        { name: 'GBP Signals', value: 32 },
        { name: 'Reviews', value: 28 },
        { name: 'On-Page SEO', value: 18 },
        { name: 'Citations', value: 12 },
        { name: 'Backlinks', value: 10 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=800&h=400&fit=crop"
    imageAlt="Google local pack showing three business listings with map and star ratings for local search"
    relatedQuestions={[
      { slug: 'how-to-rank-in-google-maps', question: 'How do I rank higher in Google Maps?' },
      { slug: 'what-is-local-seo', question: 'What is local SEO?' },
      { slug: 'what-is-google-business-profile', question: 'What is Google Business Profile?' }
    ]}
    relatedTerms={[
      { slug: 'local-pack', term: 'Local Pack' },
      { slug: 'google-business-profile', term: 'Google Business Profile' },
      { slug: 'local-seo', term: 'Local SEO' }
    ]}
  />
);

export default WhatIsTheLocalPack;