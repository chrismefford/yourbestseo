import GlossaryTermPage from '@/components/GlossaryTermPage';

const SemanticSEOGlossary = () => (
  <GlossaryTermPage
    slug="semantic-seo"
    term="Semantic SEO"
    category="content-seo"
    definition="Semantic SEO is an optimization approach focused on topic meaning, context, and user intent rather than just targeting individual keywords."
    content={{
      introduction: `Semantic SEO shifts focus from exact keyword matching to understanding topics holistically. With advances in natural language processing, Google now understands context, synonyms, and related concepts. Semantic optimization means creating comprehensive content that answers the full scope of user questions around a topic.`,
      sections: [
        { id: 'principles', title: 'Core Principles', content: `Semantic SEO is built on: Topic coverage over keyword density, Entity relationships and connections, User intent satisfaction, Natural language patterns, Comprehensive answers to related questions, and Contextual relevance across content. It's about being the best resource on a topic.` },
        { id: 'implementation', title: 'Implementation Tactics', content: `Apply semantic SEO by: Researching full topic scope (not just keywords), Including related entities and concepts, Answering "People Also Ask" questions, Using natural language variations, Building topic clusters, Implementing structured data, and Creating content that addresses multiple intents.` },
        { id: 'entities', title: 'Entities and Knowledge Graphs', content: `Google's Knowledge Graph connects: People, places, things, concepts, Events, organizations, products, and Their relationships to each other. Mentioning related entities helps Google understand your topic expertise. Schema markup helps identify entities explicitly.` },
        { id: 'vs-traditional', title: 'Semantic vs Traditional SEO', content: `Key differences: Traditional - keyword-focused, exact match targeting. Semantic - topic-focused, intent matching. Traditional - keyword density metrics. Semantic - comprehensive coverage. Traditional - link building for keywords. Semantic - topical authority building. Both remain important, but semantic is increasingly dominant.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'principles', title: 'Core Principles' },
      { id: 'implementation', title: 'Implementation' },
      { id: 'entities', title: 'Entities & Knowledge Graph' },
      { id: 'vs-traditional', title: 'Semantic vs Traditional' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Modern SEO Focus Areas', data: [{ name: 'Topic Authority', value: 35 }, { name: 'User Intent', value: 30 }, { name: 'Entity Optimization', value: 20 }, { name: 'Keyword Targeting', value: 15 }] }}
    imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
    imageAlt="Semantic SEO and topic optimization"
  />
);

export default SemanticSEOGlossary;