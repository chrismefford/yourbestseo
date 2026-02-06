import GlossaryTermPage from '@/components/GlossaryTermPage';

const SchemaMarkupGlossary = () => (
  <GlossaryTermPage
    slug="schema-markup"
    term="Schema Markup"
    category="technical-seo"
    definition="Schema markup is a structured data vocabulary that you add to your website's HTML to help search engines understand your content more precisely. It enables rich results in search—star ratings, prices, FAQs, and other enhanced displays that increase visibility and click-through rates."
    content={{
      introduction: `Schema markup is code that speaks directly to search engines, explaining exactly what your content means rather than leaving algorithms to guess. When you mark up a recipe page with Recipe schema, Google knows definitively that this is a recipe, not just a page that mentions food. This precision enables rich results—those eye-catching search displays with images, ratings, cooking times, and more.

Implementing schema markup is one of the most impactful technical SEO improvements you can make. While it doesn't directly boost rankings, it dramatically improves how your pages appear in search results, increasing click-through rates by 30% or more in many cases.`,
      whyItMatters: `Schema markup helps your pages stand out in crowded search results. While competitors show basic blue links, your listings can display star ratings, product prices, FAQ accordions, event dates, and more. These rich results grab attention and communicate value before users even click.

Beyond visibility, schema improves search engine understanding. When Google definitively knows a page contains a local business, product, article, or service, it can more confidently rank that page for relevant queries. Schema removes ambiguity.

As search evolves toward AI-powered answers and voice search, structured data becomes increasingly important. Voice assistants and AI summaries rely on structured data to extract factual information. Sites with comprehensive schema are better positioned for this future.`,
      howItWorks: `Schema markup uses a standardized vocabulary from Schema.org, maintained by Google, Bing, Yahoo, and Yandex. You add this vocabulary to your HTML in one of three formats: JSON-LD (recommended by Google), Microdata, or RDFa.

JSON-LD is the preferred format because it's added as a script block rather than inline with content, making it easier to implement and maintain. You define an object type (like "LocalBusiness" or "Article"), then provide properties (name, address, rating, etc.).

Search engines read this structured data during crawling. If the markup is valid and the page qualifies for rich results, Google may display enhanced listings. Not all schema types trigger visible rich results—some simply provide better understanding without visual changes.

Google's Rich Results Test and Schema.org's validator help you verify that your markup is correctly formatted before deploying.`,
      sections: [
        {
          id: 'types',
          title: 'Common Schema Types',
          content: `Dozens of schema types exist, but several are particularly valuable for SEO:

**LocalBusiness**: Essential for local SEO. Includes name, address, phone, hours, and service area. Helps with Google Maps and local pack visibility.

**Product**: For e-commerce pages. Enables price, availability, and review stars in search results. Highly impactful for shopping queries.

**Article/BlogPosting**: For content pages. Includes author, publish date, and featured image. May enable appearance in Google News and Top Stories.

**FAQ**: Displays expandable question-answer pairs directly in search results. Dramatically increases listing size and CTR.

**HowTo**: For instructional content. Can show step-by-step instructions, images, and time estimates in search.

**Review/Rating**: Adds star ratings to listings. One of the most click-inducing rich result types.

**Event**: For events with dates, locations, and ticket info. Enables event-specific search features.

**Organization**: Establishes brand identity with logo, social profiles, and contact information.

**BreadcrumbList**: Shows navigational hierarchy in search results, improving user understanding of page context.`
        },
        {
          id: 'implementation',
          title: 'Implementation Methods',
          content: `Several approaches exist for adding schema markup:

**JSON-LD (Recommended)**: Add a <script type="application/ld+json"> block to your page's head or body containing the structured data as a JavaScript object. This is Google's preferred method because it separates data from content.

**WordPress Plugins**: Plugins like Yoast SEO, Rank Math, and Schema Pro automatically generate common schema types. Good for non-developers but may limit customization.

**Google Tag Manager**: Deploy schema dynamically through GTM. Useful for sites where direct code access is limited, though Google may process it differently.

**CMS-Native Features**: Many modern CMS platforms and e-commerce systems include built-in schema generators for products, articles, and organizations.

**Manual Coding**: For complex or custom schema needs, hand-coding JSON-LD offers complete control. Use Schema.org documentation and Google's guidelines as references.

Regardless of method, always validate your markup using Google's Rich Results Test before and after deployment.`
        }
      ],
      bestPractices: [
        "Prioritize schema types that enable rich results for your content—FAQ, Product, LocalBusiness, and Review schemas offer the most visual impact",
        "Use JSON-LD format for cleaner implementation that's easier to maintain and is explicitly preferred by Google",
        "Validate all schema markup with Google's Rich Results Test before deploying to catch errors that prevent rich results",
        "Keep schema data accurate and synchronized with visible page content—Google may ignore or penalize misleading structured data",
        "Implement Organization and BreadcrumbList schema site-wide to establish brand identity and improve navigational understanding"
      ],
      commonMistakes: [
        "Adding schema for content that doesn't exist on the page—Google requires that structured data reflect visible content and will penalize deception",
        "Using incorrect schema types or properties that don't match the page content, causing validation errors or ignored markup",
        "Neglecting to update schema when page content changes, leading to mismatches that can cause rich results to be revoked"
      ],
      example: `A local HVAC company adds LocalBusiness schema to their homepage, including their name, address, phone number, service area, business hours, and aggregate review rating pulled from their Google reviews.

They also add FAQ schema to their service pages with common questions: "How much does AC installation cost?" "How long does furnace replacement take?" Each question and answer is marked up.

After implementation and validation, their homepage begins showing address and phone number directly in search results. Their service pages display expandable FAQ sections, effectively tripling their visible real estate in search results.

The combination of enhanced visibility and the trust signals from visible ratings increased their organic CTR by 45%. The FAQ rich results also won them position zero for several long-tail questions, driving additional featured snippet traffic.`
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-it-matters', title: 'Why Schema Matters' },
      { id: 'how-it-works', title: 'How It Works' },
      { id: 'types', title: 'Common Schema Types' },
      { id: 'implementation', title: 'Implementation Methods' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'common-mistakes', title: 'Common Mistakes' },
      { id: 'real-world-example', title: 'Real-World Example' },
      { id: 'key-takeaways', title: 'Key Takeaways' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{
      type: 'bar',
      title: 'CTR Increase by Schema Type',
      data: [
        { name: 'FAQ Schema', value: 87 },
        { name: 'Review/Rating', value: 65 },
        { name: 'Product', value: 55 },
        { name: 'HowTo', value: 45 },
        { name: 'LocalBusiness', value: 40 },
        { name: 'Article', value: 25 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    imageAlt="Schema markup code example showing structured data implementation for rich search results"
  />
);

export default SchemaMarkupGlossary;
