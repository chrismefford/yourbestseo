import QuestionPage from '@/components/QuestionPage';

const WhatIsGoogleBusinessProfile = () => (
  <QuestionPage
    slug="what-is-google-business-profile"
    question="What is Google Business Profile?"
    shortAnswer="Google Business Profile (formerly Google My Business) is a free tool that lets businesses manage their online presence across Google Search and Maps, displaying essential information like hours, location, and reviews."
    content={{
      introduction: `Google Business Profile is one of the most powerful free tools available for local businesses. It allows you to control how your business appears when people search for you on Google or look for businesses like yours on Google Maps.

When someone searches for "coffee shop near me" or "plumber in [city]," Google displays a map with local businesses. Your Google Business Profile determines whether you appear in these results and what information potential customers see about your business.

Having an optimized Google Business Profile is essential for local SEO success. It's often the first impression potential customers have of your business, and it directly influences whether they choose to visit your store, call your number, or click through to your website.`,
      sections: [
        {
          id: 'key-features',
          title: 'Key Features of Google Business Profile',
          content: `**Business Information**: Display your business name, address, phone number, website, and hours of operation. Keep this information accurate and up-to-date.

**Photos and Videos**: Showcase your products, services, team, and location through visual content. Businesses with photos receive 42% more requests for directions.

**Reviews and Ratings**: Collect and respond to customer reviews. Your star rating appears prominently in search results and influences click-through rates.

**Posts and Updates**: Share news, offers, events, and products directly on your profile. These appear in your business listing and keep customers informed.

**Messaging**: Allow customers to message you directly through your profile. Quick responses improve customer satisfaction and engagement.

**Insights and Analytics**: Track how customers find you, what actions they take, and how your profile performs over time.`
        },
        {
          id: 'setup-optimization',
          title: 'Setting Up and Optimizing Your Profile',
          content: `**Claim and Verify**: First, claim your business at business.google.com and verify ownership through mail, phone, or email verification.

**Complete Every Section**: Fill out every available field—categories, attributes, services, products, and descriptions. Complete profiles rank higher.

**Choose Accurate Categories**: Select a primary category that best describes your business, then add relevant secondary categories.

**Write a Compelling Description**: Use all 750 characters to describe your business, naturally incorporating keywords customers might search for.

**Add High-Quality Photos**: Upload at least 10 photos including your logo, cover photo, interior, exterior, team, and products or services.

**Set Accurate Hours**: Include regular hours, holiday hours, and special hours. Inaccurate hours frustrate customers and hurt rankings.`
        },
        {
          id: 'reviews-reputation',
          title: 'Managing Reviews and Reputation',
          content: `**Encourage Reviews**: Ask satisfied customers to leave reviews. Make it easy by sending direct links to your review page.

**Respond to All Reviews**: Reply to positive reviews with thanks and address negative reviews professionally. Response rate affects rankings.

**Handle Negative Reviews**: Acknowledge concerns, apologize if appropriate, offer to resolve issues offline. Never argue publicly.

**Monitor Regularly**: Check your profile frequently for new reviews, questions, and suggested edits from users.

**Report Fake Reviews**: If you receive fake or spam reviews, report them to Google for removal. Document patterns of abuse.

**Use Reviews in Marketing**: Feature positive reviews on your website and social media (with permission) to build social proof.`
        },
        {
          id: 'ranking-factors',
          title: 'How Google Ranks Business Profiles',
          content: `**Relevance**: How well your profile matches what someone is searching for. Complete profiles with accurate categories rank better.

**Distance**: How far your business is from the searcher or the location in their query. You can't change your location, but you can optimize other factors.

**Prominence**: How well-known your business is. This includes review count and score, local citations, backlinks, and overall web presence.

**Engagement**: Active profiles with regular posts, photo uploads, and review responses signal to Google that the business is active and engaged.

**Website Quality**: Your website's SEO affects your Google Business Profile rankings. Ensure your site is optimized for local search.

**NAP Consistency**: Your Name, Address, and Phone number should be identical across your website, Google Business Profile, and all other online directories.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'key-features', title: 'Key Features' },
      { id: 'setup-optimization', title: 'Setup & Optimization' },
      { id: 'reviews-reputation', title: 'Reviews & Reputation' },
      { id: 'ranking-factors', title: 'Ranking Factors' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Impact of GBP Features on Local Rankings',
      data: [
        { name: 'Reviews', value: 35 },
        { name: 'Completeness', value: 25 },
        { name: 'Photos', value: 20 },
        { name: 'Posts', value: 12 },
        { name: 'Q&A', value: 8 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=400&fit=crop"
    imageAlt="Google Business Profile optimization showing local business listing on Google Maps and Search results"
    relatedQuestions={[
      { slug: 'what-is-local-seo', question: 'What is local SEO?' },
      { slug: 'how-to-rank-in-google-maps', question: 'How do I rank higher in Google Maps?' },
      { slug: 'how-to-get-more-google-reviews', question: 'How do I get more Google reviews?' }
    ]}
    relatedTerms={[
      { slug: 'google-business-profile', term: 'Google Business Profile' },
      { slug: 'local-pack', term: 'Local Pack' },
      { slug: 'nap-consistency', term: 'NAP Consistency' }
    ]}
  />
);

export default WhatIsGoogleBusinessProfile;