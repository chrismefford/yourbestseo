import GlossaryTermPage from '@/components/GlossaryTermPage';

const SchemaMarkupGlossary = () => (
  <GlossaryTermPage
    slug="schema-markup"
    term="Schema Markup"
    category="technical-seo"
    definition="Schema markup is a form of structured data code that you add to your website to help search engines understand your content better and display enhanced results (rich snippets) in search engine results pages."
    content={{
      introduction: `Schema markup is a semantic vocabulary of tags (or microdata) that you can add to your HTML to improve the way search engines read and represent your page in SERPs. Created through a collaboration between Google, Bing, Yahoo, and Yandex, Schema.org provides a universal language for describing web content. When implemented correctly, schema markup can result in rich snippets—enhanced search results that display additional information like ratings, prices, availability, and more directly in search results. These rich results increase click-through rates by making your listings more visually appealing and informative than standard blue links.`,
      sections: [
        { id: 'types', title: 'Common Schema Types', content: `The most valuable schema types for businesses include: LocalBusiness schema for contact info and hours, Product schema for e-commerce with prices and availability, Review/Rating schema for star ratings in search results, FAQ schema for expandable Q&A in search results, Article schema for blog posts and news, Event schema for upcoming events with dates, and HowTo schema for step-by-step guides. Each type has specific properties that should be included for maximum benefit.` },
        { id: 'implementation', title: 'Implementation Methods', content: `Schema can be implemented in three formats: JSON-LD (recommended by Google, placed in <script> tags), Microdata (inline HTML attributes), and RDFa (similar to Microdata). JSON-LD is preferred because it's easier to implement and maintain, doesn't require modifying existing HTML, and can be dynamically generated. Google's Structured Data Markup Helper and Schema.org's documentation provide templates for implementation.` },
        { id: 'testing', title: 'Testing and Validation', content: `Always validate schema using Google's Rich Results Test and Schema.org's validator before deployment. Common errors include missing required properties, incorrect data types, and mismatched markup. Monitor Google Search Console's Enhancements reports for ongoing issues. Test on staging before production deployment.` },
        { id: 'benefits', title: 'SEO Benefits', content: `Schema markup provides competitive advantages including 30% higher CTR from rich snippets, improved voice search compatibility, better content understanding by search engines, eligibility for featured snippets and knowledge panels, and enhanced mobile search appearance. While not a direct ranking factor, the indirect benefits significantly impact organic performance.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'types', title: 'Common Schema Types' },
      { id: 'implementation', title: 'Implementation' },
      { id: 'testing', title: 'Testing & Validation' },
      { id: 'benefits', title: 'SEO Benefits' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'CTR Improvement by Schema Type', data: [{ name: 'Review', value: 35 }, { name: 'FAQ', value: 28 }, { name: 'Product', value: 25 }, { name: 'HowTo', value: 22 }] }}
    imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
    imageAlt="Schema markup structured data code implementation for rich snippets in search results"
  />
);

export default SchemaMarkupGlossary;
