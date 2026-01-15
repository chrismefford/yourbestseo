import QuestionPage from '@/components/QuestionPage';

const HowToOptimizeForNearMeSearches = () => (
  <QuestionPage
    slug="how-to-optimize-for-near-me-searches"
    question="How do I optimize for 'near me' searches?"
    shortAnswer="Optimize for 'near me' searches by claiming your Google Business Profile, ensuring NAP consistency, getting local reviews, adding location pages to your website, and building local citations and backlinks."
    content={{
      introduction: `"Near me" searches have exploded in popularity as mobile usage has grown. Phrases like "restaurants near me," "dentist near me," or "auto repair near me" are now among the most common local search queries.

The key insight is that you don't actually need to include "near me" in your content. Google understands user intent and location, automatically showing relevant local results based on the searcher's location. Your job is to signal to Google that your business serves the area where searchers are located.

Optimizing for "near me" searches is really about optimizing for local SEO overall. The businesses that rank for these queries have strong local signals across their Google Business Profile, website, and the broader web.`,
      sections: [
        {
          id: 'google-business-optimization',
          title: 'Google Business Profile Optimization',
          content: `**Complete Your Profile**: Fill out every field in your Google Business Profile. Complete profiles rank better for local searches.

**Verify Your Location**: Ensure your business address is verified and the map pin is accurately placed on your actual location.

**Choose Accurate Categories**: Select the most relevant primary category and add applicable secondary categories.

**Add Service Areas**: If you serve customers beyond your physical location, define your service areas in your profile.

**Keep Hours Updated**: Accurate hours help Google show you for "open now" variations of near me searches.

**Post Regularly**: Active profiles with recent posts and updates signal to Google that your business is operating.`
        },
        {
          id: 'website-optimization',
          title: 'Website Local Optimization',
          content: `**Add Location to Key Pages**: Include your city and region in title tags, headings, and content on your homepage and service pages.

**Create Location Pages**: If you serve multiple areas, create dedicated pages for each location with unique, helpful content.

**Embed Google Maps**: Add a Google Maps embed to your contact page showing your exact location.

**Include NAP in Footer**: Display your business name, address, and phone number consistently in your website footer.

**Add Local Schema Markup**: Implement LocalBusiness schema to help search engines understand your location and business type.

**Optimize for Mobile**: Most "near me" searches happen on mobile devices. Ensure your site loads fast and works well on phones.`
        },
        {
          id: 'reviews-reputation',
          title: 'Building Local Reviews and Reputation',
          content: `**Generate Consistent Reviews**: Steady flow of new Google reviews signals ongoing customer satisfaction and business activity.

**Respond to All Reviews**: Engagement with reviews shows Google and customers that you're an active, responsive business.

**Encourage Keyword-Rich Reviews**: When customers mention services or location in reviews, it helps you rank for those terms.

**Monitor All Platforms**: Beyond Google, maintain presence on Yelp, Facebook, and industry-specific review sites.

**Showcase Reviews on Website**: Display reviews on your site to build trust and add fresh, relevant content.

**Address Negative Feedback**: How you handle criticism affects both rankings and customer perception.`
        },
        {
          id: 'citations-backlinks',
          title: 'Local Citations and Backlinks',
          content: `**Build Core Citations**: List your business on major directories like Yelp, Yellow Pages, Bing Places, and Apple Maps.

**Ensure NAP Consistency**: Your business information must be identical across all platforms to maximize local ranking signals.

**Seek Industry Directories**: Get listed on directories specific to your industry that carry authority in your niche.

**Earn Local Backlinks**: Get links from local news sites, community organizations, and local business partners.

**Sponsor Local Events**: Event sponsorships often come with website links and mentions that build local authority.

**Join Local Organizations**: Chamber of commerce memberships and local business associations provide valuable citations.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'google-business-optimization', title: 'Google Business Profile' },
      { id: 'website-optimization', title: 'Website Optimization' },
      { id: 'reviews-reputation', title: 'Reviews & Reputation' },
      { id: 'citations-backlinks', title: 'Citations & Backlinks' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Factors Influencing "Near Me" Rankings',
      data: [
        { name: 'Google Business Profile', value: 35 },
        { name: 'Reviews', value: 25 },
        { name: 'Website Signals', value: 20 },
        { name: 'Citations', value: 12 },
        { name: 'Backlinks', value: 8 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop"
    imageAlt="Mobile phone showing near me search results with local businesses on Google Maps"
    relatedQuestions={[
      { slug: 'what-is-local-seo', question: 'What is local SEO?' },
      { slug: 'how-to-rank-in-google-maps', question: 'How do I rank higher in Google Maps?' },
      { slug: 'what-is-the-local-pack', question: 'What is the local pack?' }
    ]}
    relatedTerms={[
      { slug: 'local-seo', term: 'Local SEO' },
      { slug: 'google-business-profile', term: 'Google Business Profile' },
      { slug: 'local-pack', term: 'Local Pack' }
    ]}
  />
);

export default HowToOptimizeForNearMeSearches;