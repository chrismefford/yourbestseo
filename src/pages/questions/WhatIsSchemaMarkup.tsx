import QuestionPage from '@/components/QuestionPage';

const WhatIsSchemaMarkup = () => (
  <QuestionPage
    slug="what-is-schema-markup"
    question="What is Schema Markup?"
    shortAnswer="Schema markup is structured data code added to your website that helps search engines understand your content better, enabling rich snippets and enhanced search results."
    content={{
      introduction: `Schema markup, also known as structured data, is a powerful SEO technique that helps search engines understand the context and meaning of your web content. By adding this specialized code to your pages, you're essentially providing a detailed blueprint that tells Google, Bing, and other search engines exactly what your content is about.

Think of schema markup as a translator between your website and search engines. While humans can easily understand that a page is about a recipe, a product, or a local business, search engines need additional context. Schema markup provides this context in a standardized format that all major search engines can interpret.

The most visible benefit of schema markup is the ability to earn "rich results" or "rich snippets" in search results. These enhanced listings can include star ratings, prices, availability, cooking times, event dates, and much more. Rich results stand out visually and often achieve higher click-through rates than standard blue links, making schema markup a valuable tool for increasing organic traffic.`,
      sections: [
        {
          id: 'types-of-schema',
          title: 'Common Types of Schema Markup',
          content: `Schema.org provides hundreds of schema types, but some are particularly valuable for SEO:

**Local Business Schema**: Essential for local SEO, this includes your business name, address, phone number, hours, and more. It helps you appear in local search results and Google Maps.

**Product Schema**: For e-commerce sites, product schema displays price, availability, and reviews directly in search results, driving more qualified traffic.

**Review/Rating Schema**: Adds star ratings to your search listings, which can significantly improve click-through rates. Average ratings appear as yellow stars beneath your listing.

**FAQ Schema**: Displays frequently asked questions and answers directly in search results, taking up more real estate and providing immediate value to searchers.

**Article Schema**: Helps news articles and blog posts appear in Google's Top Stories and other special article features.

**Recipe Schema**: Shows cooking time, calorie count, ratings, and images for recipes, making them stand out in food-related searches.

**Event Schema**: Displays event dates, times, locations, and ticket information, perfect for concerts, conferences, and local events.

**How-To Schema**: Presents step-by-step instructions in search results, ideal for tutorials and guides.`
        },
        {
          id: 'implementing-schema',
          title: 'How to Implement Schema Markup',
          content: `There are three main formats for implementing schema markup, each with its own advantages:

**JSON-LD (Recommended)**: JavaScript Object Notation for Linked Data is Google's preferred format. It's added to your page's head section and doesn't interfere with your HTML. It's easy to implement and maintain, making it ideal for most websites.

**Microdata**: This format involves adding attributes directly to your HTML elements. While it works well, it's more complex to implement and maintain than JSON-LD.

**RDFa**: Resource Description Framework in Attributes is similar to microdata but follows a different specification. It's less commonly used for SEO purposes.

**Implementation Steps:**
1. Identify which schema types are relevant to your content
2. Use Google's Structured Data Markup Helper to generate code
3. Add the code to your website (preferably JSON-LD in the head section)
4. Test using Google's Rich Results Test tool
5. Monitor performance in Google Search Console

**Best Practices:**
- Only mark up visible content on your pages
- Be accurate—don't exaggerate ratings or availability
- Keep schema updated when content changes
- Use the most specific schema type applicable
- Don't mark up content that isn't relevant to the primary page topic`
        },
        {
          id: 'schema-seo-benefits',
          title: 'SEO Benefits of Schema Markup',
          content: `Implementing schema markup provides numerous advantages for your SEO strategy:

**Enhanced Search Visibility**: Rich results are more visually appealing and take up more space in search results, making your listings stand out from competitors.

**Higher Click-Through Rates**: Studies show rich results can increase CTR by 20-30% or more, depending on the type of enhancement and industry.

**Voice Search Optimization**: As voice assistants become more popular, schema helps them understand and present your content accurately in voice search results.

**Knowledge Graph Inclusion**: Proper schema markup increases your chances of appearing in Google's Knowledge Graph, the information boxes that appear alongside search results.

**Better Content Understanding**: Even without rich results, schema helps search engines understand your content context, potentially improving rankings for relevant queries.

**Competitive Advantage**: Many websites still don't use schema markup, so implementing it can give you an edge over competitors in search results.

While schema markup isn't a direct ranking factor, the indirect benefits—improved CTR, better content understanding, and enhanced visibility—make it an essential component of modern SEO.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'types-of-schema', title: 'Schema Types' },
      { id: 'implementing-schema', title: 'Implementation' },
      { id: 'schema-seo-benefits', title: 'SEO Benefits' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'bar',
      title: 'CTR Improvement by Schema Type',
      data: [
        { name: 'Product', value: 35 },
        { name: 'Review', value: 30 },
        { name: 'FAQ', value: 25 },
        { name: 'Recipe', value: 28 },
        { name: 'Event', value: 22 },
        { name: 'How-To', value: 20 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop"
    imageAlt="Code implementation representing schema markup and structured data for SEO"
    relatedQuestions={[
      { slug: 'what-is-technical-seo', question: 'What is technical SEO?' },
      { slug: 'what-is-seo', question: 'What is SEO?' },
      { slug: 'what-is-a-serp', question: 'What is a SERP?' }
    ]}
    relatedTerms={[
      { slug: 'schema-markup', term: 'Schema Markup' },
      { slug: 'structured-data', term: 'Structured Data' },
      { slug: 'featured-snippets', term: 'Featured Snippets' }
    ]}
  />
);

export default WhatIsSchemaMarkup;
