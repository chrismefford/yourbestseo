import QuestionPage from '@/components/QuestionPage';

const WhatAreLocalCitations = () => (
  <QuestionPage
    slug="what-are-local-citations"
    question="What are local citations?"
    shortAnswer="Local citations are online mentions of your business name, address, and phone number (NAP) on directories, websites, and social platforms. They help verify your business legitimacy and improve local search rankings."
    content={{
      introduction: `Local citations are any online mention of your business's name, address, and phone number (NAP). These mentions can appear on business directories, websites, apps, and social platforms. Citations help search engines verify that your business exists, is legitimate, and is located where you claim.

Think of citations as votes of confidence for your business. The more consistent citations you have across reputable platforms, the more trust search engines place in your business information. This trust translates into better visibility in local search results.

Citations are a fundamental component of local SEO. While they're not as powerful as they once were, they remain an important ranking factor, especially for new businesses trying to establish local presence.`,
      sections: [
        {
          id: 'types-of-citations',
          title: 'Types of Local Citations',
          content: `**Structured Citations**: These appear on business directories in a structured format with designated fields for business name, address, phone, website, and other details. Examples include Yelp, Yellow Pages, and industry-specific directories.

**Unstructured Citations**: These are mentions of your business information in blog posts, news articles, press releases, or social media posts. The information appears within content rather than in a structured listing.

**Core Citations**: High-authority directories that every local business should be listed on, such as Google Business Profile, Bing Places, Apple Maps, Yelp, and Facebook.

**Industry-Specific Citations**: Directories focused on your industry. A restaurant might prioritize TripAdvisor and OpenTable, while a contractor might focus on Angi and HomeAdvisor.

**Local Citations**: Regional or city-specific directories and chambers of commerce that serve your geographic area.

**Aggregator Citations**: Data aggregators like Data Axle, Neustar Localeze, and Foursquare distribute your information to many other directories.`
        },
        {
          id: 'why-citations-matter',
          title: 'Why Citations Matter for SEO',
          content: `**Search Engine Verification**: Citations help Google and other search engines verify your business information is accurate and your business is legitimate.

**Local Pack Rankings**: Citation consistency and volume are ranking factors for the local pack—the map results that appear for local searches.

**Trust and Authority**: Listings on reputable directories signal that your business is established and trustworthy.

**Discovery Opportunities**: Many directories have their own search traffic, providing additional ways for customers to find you.

**NAP Consistency Signals**: Consistent NAP across citations reinforces your business information to search engines.

**Competitive Advantage**: Businesses with more quality citations often outrank those with fewer citations in local results.`
        },
        {
          id: 'building-citations',
          title: 'Building Quality Citations',
          content: `**Start with Core Platforms**: Ensure you're listed on Google Business Profile, Bing Places, Apple Maps, Yelp, Facebook, and other major platforms.

**Use Data Aggregators**: Submit to major aggregators to have your information distributed to hundreds of smaller directories.

**Find Industry Directories**: Research directories specific to your industry and claim or create listings on the most reputable ones.

**Check Local Directories**: Look for city-specific directories, local chamber of commerce listings, and regional business directories.

**Claim Existing Listings**: Many directories auto-create listings from aggregator data. Claim these to ensure accuracy and completeness.

**Complete All Fields**: Don't just add NAP—fill out descriptions, categories, hours, photos, and any other available fields.`
        },
        {
          id: 'maintaining-citations',
          title: 'Maintaining Citation Health',
          content: `**Audit Regularly**: Use citation tracking tools to find existing citations and identify inconsistencies or duplicates.

**Fix Inconsistencies**: Any variation in your business name, address, or phone number can confuse search engines. Standardize across all platforms.

**Update When Info Changes**: If you move, change phone numbers, or rebrand, update all citations. Old information hurts rankings.

**Remove Duplicates**: Multiple listings for the same location on a single platform dilutes your presence and confuses search engines.

**Monitor for Errors**: User suggestions and automated updates can introduce errors. Check important citations periodically.

**Track Competitors**: See where competitors are listed to identify citation opportunities you may have missed.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'types-of-citations', title: 'Types of Citations' },
      { id: 'why-citations-matter', title: 'Why They Matter' },
      { id: 'building-citations', title: 'Building Citations' },
      { id: 'maintaining-citations', title: 'Maintaining Citations' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Citation Sources by Importance',
      data: [
        { name: 'Google Business', value: 30 },
        { name: 'Data Aggregators', value: 25 },
        { name: 'Industry Directories', value: 20 },
        { name: 'Major Platforms', value: 15 },
        { name: 'Local Directories', value: 10 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop"
    imageAlt="Local business citation management showing directory listings and NAP consistency across platforms"
    relatedQuestions={[
      { slug: 'what-is-nap-consistency', question: 'What is NAP consistency?' },
      { slug: 'what-is-local-seo', question: 'What is local SEO?' },
      { slug: 'how-to-rank-in-google-maps', question: 'How do I rank higher in Google Maps?' }
    ]}
    relatedTerms={[
      { slug: 'local-citations', term: 'Local Citations' },
      { slug: 'nap-consistency', term: 'NAP Consistency' },
      { slug: 'local-seo', term: 'Local SEO' }
    ]}
  />
);

export default WhatAreLocalCitations;