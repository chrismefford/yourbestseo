import QuestionPage from '@/components/QuestionPage';

const HowToGetMoreGoogleReviews = () => (
  <QuestionPage
    slug="how-to-get-more-google-reviews"
    question="How do I get more Google reviews?"
    shortAnswer="Get more Google reviews by asking satisfied customers directly, making it easy with direct links, timing requests after positive experiences, training staff to ask, and responding to all existing reviews."
    content={{
      introduction: `Google reviews are critical for local business success. They influence your rankings in local search results, affect click-through rates, and ultimately determine whether potential customers choose your business over competitors.

Studies show that 93% of consumers read online reviews before making a purchase decision, and businesses with higher ratings and more reviews consistently outperform competitors. The good news is that most satisfied customers are willing to leave reviews—they just need to be asked.

Building a systematic approach to collecting reviews takes effort, but the payoff in visibility, credibility, and customer acquisition makes it one of the highest-ROI marketing activities for local businesses.`,
      sections: [
        {
          id: 'asking-strategies',
          title: 'Effective Strategies for Asking',
          content: `**Ask at Peak Satisfaction**: Request reviews immediately after a positive interaction—when a customer thanks you, compliments your service, or expresses satisfaction.

**Make It Personal**: A personal request from a team member is more effective than automated emails. "Would you mind leaving us a Google review?" works better than generic requests.

**Explain Why It Matters**: Tell customers that reviews help other people find your business and support your small business or local team.

**Use Multiple Touchpoints**: Don't rely on just one method. Combine in-person asks with follow-up emails, texts, and receipt prompts.

**Train Your Team**: Ensure all customer-facing employees know how and when to ask for reviews. Role-play scenarios to build confidence.

**Don't Incentivize**: Offering discounts or gifts for reviews violates Google's policies and can result in review removal or account suspension.`
        },
        {
          id: 'making-it-easy',
          title: 'Making It Easy for Customers',
          content: `**Create a Direct Review Link**: Generate a short link that takes customers directly to your review form. Find this in your Google Business Profile dashboard.

**Use QR Codes**: Print QR codes on receipts, business cards, table tents, or signage. Customers can scan and leave a review in seconds.

**Send Text Messages**: SMS has higher open rates than email. Send a brief thank-you message with your review link after service.

**Email Follow-Ups**: Send a polite email 1-2 days after purchase with a clear call-to-action and direct link to leave a review.

**Add to Your Website**: Include a "Leave a Review" button on your thank-you pages and in your website footer.

**Provide Simple Instructions**: Some customers don't know how to leave a review. Include brief instructions for those who need guidance.`
        },
        {
          id: 'timing-frequency',
          title: 'Timing and Frequency',
          content: `**Strike While Iron Is Hot**: The best time to ask is immediately after delivering great service. Waiting days or weeks reduces response rates.

**Post-Purchase Follow-Up**: For online orders, send review requests 2-7 days after delivery when customers have had time to use the product.

**Avoid Over-Asking**: Don't bombard customers with multiple requests. One well-timed ask is more effective than repeated nagging.

**Consider Business Type**: Service businesses should ask at service completion. Retail should wait until after purchase experience is complete.

**Regular Cadence**: Aim to generate reviews consistently rather than in bursts. Steady review flow looks more natural to Google.

**Seasonal Adjustments**: Increase efforts during busy seasons when you have more customer interactions and positive experiences to leverage.`
        },
        {
          id: 'responding-reviews',
          title: 'Responding to Reviews',
          content: `**Respond to Every Review**: Thank positive reviewers and address negative feedback professionally. Response rate affects your visibility.

**Respond Quickly**: Aim to respond within 24-48 hours. Quick responses show you value customer feedback.

**Personalize Responses**: Mention specific details from the review. Generic responses feel automated and impersonal.

**Keep It Professional**: Never argue with negative reviewers. Acknowledge concerns, apologize if appropriate, and offer to resolve issues offline.

**Use Keywords Naturally**: Include relevant keywords in responses where appropriate, but don't stuff keywords unnaturally.

**Encourage Return Visits**: Thank customers and invite them back. Responses are public and influence other potential customers reading reviews.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'asking-strategies', title: 'Asking Strategies' },
      { id: 'making-it-easy', title: 'Making It Easy' },
      { id: 'timing-frequency', title: 'Timing & Frequency' },
      { id: 'responding-reviews', title: 'Responding to Reviews' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Review Request Effectiveness by Method',
      data: [
        { name: 'In-Person', value: 70 },
        { name: 'SMS', value: 45 },
        { name: 'Email', value: 25 },
        { name: 'QR Code', value: 20 },
        { name: 'Receipt', value: 10 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
    imageAlt="Customer leaving a five-star Google review on smartphone showing positive business feedback"
    relatedQuestions={[
      { slug: 'what-is-google-business-profile', question: 'What is Google Business Profile?' },
      { slug: 'how-to-rank-in-google-maps', question: 'How do I rank higher in Google Maps?' },
      { slug: 'what-is-local-seo', question: 'What is local SEO?' }
    ]}
    relatedTerms={[
      { slug: 'google-business-profile', term: 'Google Business Profile' },
      { slug: 'local-seo', term: 'Local SEO' },
      { slug: 'local-pack', term: 'Local Pack' }
    ]}
  />
);

export default HowToGetMoreGoogleReviews;