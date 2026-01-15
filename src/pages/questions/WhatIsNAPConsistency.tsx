import QuestionPage from '@/components/QuestionPage';

const WhatIsNAPConsistency = () => (
  <QuestionPage
    slug="what-is-nap-consistency"
    question="What is NAP consistency?"
    shortAnswer="NAP consistency means having your business Name, Address, and Phone number displayed identically across all online platforms—your website, Google Business Profile, directories, and social media."
    content={{
      introduction: `NAP stands for Name, Address, and Phone number—the three most critical pieces of business information for local SEO. NAP consistency means ensuring this information appears exactly the same way across every online platform where your business is listed.

Search engines use NAP information to verify your business exists and to understand where it's located. When your NAP is consistent across many sources, search engines gain confidence in your business information and reward you with better local rankings.

Inconsistent NAP information—even minor variations like "Street" vs "St." or different phone formats—can confuse search engines and dilute your local SEO efforts. Maintaining NAP consistency is one of the most fundamental yet often overlooked aspects of local search optimization.`,
      sections: [
        {
          id: 'why-consistency-matters',
          title: 'Why NAP Consistency Matters',
          content: `**Search Engine Trust**: Google cross-references your business information across the web. Consistent data builds trust and improves rankings.

**Avoiding Confusion**: Inconsistent information can make search engines think you have multiple locations or that your data is unreliable.

**Customer Experience**: Customers who find incorrect phone numbers or addresses get frustrated and may choose competitors instead.

**Citation Value**: Citations only help your SEO if the information is accurate. Inconsistent citations can actually hurt rankings.

**Map Accuracy**: Incorrect address information can cause your Google Maps pin to appear in the wrong location.

**Brand Trust**: Professional businesses maintain consistent information. Inconsistencies make you appear disorganized or untrustworthy.`
        },
        {
          id: 'common-inconsistencies',
          title: 'Common NAP Inconsistencies',
          content: `**Business Name Variations**: "Joe's Plumbing" vs "Joe's Plumbing LLC" vs "Joe's Plumbing Services" are all different to search engines.

**Address Format Differences**: "123 Main Street, Suite 100" vs "123 Main St. #100" vs "123 Main Street Ste 100" create inconsistency.

**Phone Number Formats**: "(555) 123-4567" vs "555-123-4567" vs "5551234567" can all be treated differently.

**Old Information**: Phone numbers or addresses from before you moved or changed numbers that were never updated.

**Abbreviations**: "North" vs "N." or "Boulevard" vs "Blvd." create variations search engines may not reconcile.

**Missing Suite/Unit Numbers**: Sometimes included, sometimes omitted, causing address mismatches.`
        },
        {
          id: 'establishing-consistency',
          title: 'Establishing Your Standard NAP',
          content: `**Choose One Format**: Decide exactly how you'll write your business name, address, and phone number. Document this as your official NAP.

**Match Google Business Profile**: Since Google is the most important platform, use whatever format appears on your verified Google Business Profile.

**Include Full Legal Name**: Decide whether to include "LLC," "Inc.," or other designations and be consistent.

**Standardize Address Format**: Choose whether to use abbreviations and stick with that choice everywhere.

**Use Consistent Phone Format**: Pick one format and use it across all platforms.

**Create a Reference Document**: Keep your official NAP in a document that anyone managing your listings can reference.`
        },
        {
          id: 'auditing-fixing',
          title: 'Auditing and Fixing NAP Issues',
          content: `**Search for Your Business**: Google your business name to find existing listings and check each for accuracy.

**Use Citation Tools**: Services like Moz Local, BrightLocal, or Yext can scan for citations and identify inconsistencies.

**Prioritize High-Authority Sites**: Fix Google, Bing, Yelp, Facebook, and major directories first, then work down to smaller sites.

**Claim Unclaimed Listings**: Many directories create listings automatically. Claim these to gain control and fix errors.

**Contact Data Aggregators**: Updating major aggregators like Data Axle and Neustar can cascade corrections to many directories.

**Monitor Ongoing**: Set up alerts and check periodically. Auto-generated listings and user suggestions can introduce new errors.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'why-consistency-matters', title: 'Why It Matters' },
      { id: 'common-inconsistencies', title: 'Common Issues' },
      { id: 'establishing-consistency', title: 'Establishing Standards' },
      { id: 'auditing-fixing', title: 'Auditing & Fixing' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Impact of NAP Inconsistencies on Rankings',
      data: [
        { name: 'Name Variations', value: 35 },
        { name: 'Address Errors', value: 30 },
        { name: 'Phone Format', value: 15 },
        { name: 'Missing Info', value: 12 },
        { name: 'Old Data', value: 8 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop"
    imageAlt="Business NAP consistency showing name address phone number standardization across directories"
    relatedQuestions={[
      { slug: 'what-are-local-citations', question: 'What are local citations?' },
      { slug: 'what-is-local-seo', question: 'What is local SEO?' },
      { slug: 'what-is-google-business-profile', question: 'What is Google Business Profile?' }
    ]}
    relatedTerms={[
      { slug: 'nap-consistency', term: 'NAP Consistency' },
      { slug: 'local-citations', term: 'Local Citations' },
      { slug: 'local-seo', term: 'Local SEO' }
    ]}
  />
);

export default WhatIsNAPConsistency;