import GlossaryTermPage from '@/components/GlossaryTermPage';

const StructuredDataGlossary = () => (
  <GlossaryTermPage
    slug="structured-data"
    term="Structured Data"
    category="technical-seo"
    definition="Structured data is a standardized format for providing information about a page and classifying its content, helping search engines understand context and display rich results."
    content={{
      introduction: `Structured data uses a specific vocabulary (typically Schema.org) to describe page content in a machine-readable format. When search engines understand your content precisely, they can display enhanced search results with additional visual elements like star ratings, prices, FAQs, and more—collectively known as rich results or rich snippets.`,
      sections: [
        { id: 'formats', title: 'Structured Data Formats', content: `Three main formats exist: JSON-LD (JavaScript Object Notation for Linked Data) - recommended by Google, easy to implement, Microdata - HTML-embedded approach, older method, and RDFa (Resource Description Framework in Attributes) - HTML attribute-based. Google recommends JSON-LD for its simplicity and separation from HTML content.` },
        { id: 'types', title: 'Common Schema Types', content: `Popular structured data types include: LocalBusiness for local SEO, Product for e-commerce, Article and BlogPosting for content, FAQPage for questions and answers, HowTo for instructions, Review and AggregateRating, Event for dates and locations, Organization for company info, and Person for individual profiles.` },
        { id: 'implementation', title: 'Implementation Methods', content: `Add structured data by: Manually coding JSON-LD scripts, Using CMS plugins (Yoast, Rank Math), Google Tag Manager deployment, Schema generators and tools, and Template-based automation. Always validate with Google's Rich Results Test before going live.` },
        { id: 'benefits', title: 'SEO Benefits', content: `Structured data provides: Enhanced SERP visibility with rich snippets, Higher click-through rates, Better content understanding by search engines, Eligibility for special search features, Competitive advantage in results, and Improved voice search compatibility. While not a direct ranking factor, the indirect benefits are significant.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'formats', title: 'Data Formats' },
      { id: 'types', title: 'Schema Types' },
      { id: 'implementation', title: 'Implementation' },
      { id: 'benefits', title: 'SEO Benefits' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'CTR Improvement by Rich Result Type', data: [{ name: 'FAQ', value: 87 }, { name: 'Review Stars', value: 75 }, { name: 'Product', value: 68 }, { name: 'Recipe', value: 82 }, { name: 'How-To', value: 55 }] }}
    imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
    imageAlt="Structured data and schema markup implementation for rich search results and SEO"
  />
);

export default StructuredDataGlossary;
