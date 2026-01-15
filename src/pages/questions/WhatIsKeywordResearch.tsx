import QuestionPage from '@/components/QuestionPage';

const WhatIsKeywordResearch = () => (
  <QuestionPage
    slug="what-is-keyword-research"
    question="What is Keyword Research?"
    shortAnswer="Keyword research is the process of identifying and analyzing search terms that people enter into search engines, helping you understand what your audience is searching for."
    content={{
      introduction: `Keyword research is the foundational practice of SEO that involves discovering, analyzing, and selecting the search terms your target audience uses when looking for products, services, or information related to your business. It's the starting point for virtually every SEO strategy, informing everything from content creation to website architecture.

Understanding what your potential customers are searching for is crucial for connecting with them online. Keyword research reveals not just the words people type into search engines, but also their intent, the competition you'll face, and the opportunities available to reach your audience.

Effective keyword research goes beyond simply finding high-volume terms. It involves understanding user intent, assessing competition, identifying content gaps, and prioritizing opportunities based on your business goals and resources. The insights gained from keyword research shape your entire content strategy and SEO approach.`,
      sections: [
        {
          id: 'keyword-research-process',
          title: 'The Keyword Research Process',
          content: `A systematic approach to keyword research ensures you uncover the best opportunities:

**1. Brainstorm Seed Keywords**: Start with basic terms related to your business, products, or services. Think about what your customers might search for and create a list of broad topic areas.

**2. Expand with Keyword Tools**: Use tools like Google Keyword Planner, Ahrefs, SEMrush, or Ubersuggest to expand your seed keywords into hundreds or thousands of related terms.

**3. Analyze Search Volume**: Evaluate how many people search for each keyword monthly. Higher volume means more potential traffic but often more competition.

**4. Assess Keyword Difficulty**: Determine how hard it will be to rank for each keyword based on the strength of competing pages. New sites should often target lower-difficulty terms initially.

**5. Understand Search Intent**: Categorize keywords by intent—informational (seeking knowledge), navigational (looking for a specific site), commercial (researching products), or transactional (ready to buy).

**6. Evaluate Relevance**: Ensure keywords align with your offerings and business goals. High-volume, low-relevance keywords won't drive meaningful results.

**7. Identify Long-Tail Opportunities**: Longer, more specific phrases often have lower competition and higher conversion rates.`
        },
        {
          id: 'types-of-keywords',
          title: 'Types of Keywords',
          content: `Understanding different keyword types helps you create a balanced strategy:

**Short-Tail Keywords**: Broad, high-volume terms with 1-2 words (e.g., "shoes"). Very competitive and often have ambiguous intent.

**Long-Tail Keywords**: More specific phrases with 3+ words (e.g., "women's running shoes for flat feet"). Lower volume but higher conversion rates and less competition.

**Commercial Keywords**: Terms indicating purchase intent (e.g., "buy," "price," "best"). Ideal for product and service pages.

**Informational Keywords**: Queries seeking knowledge (e.g., "how to," "what is," "guide"). Perfect for blog posts and educational content.

**Local Keywords**: Terms including location modifiers (e.g., "plumber in San Diego"). Essential for local businesses.

**Branded Keywords**: Searches including your brand name. Important to monitor and rank for.

**Competitor Keywords**: Terms your competitors rank for. Can reveal market opportunities.

**LSI Keywords**: Latent Semantic Indexing terms—related concepts and synonyms that help search engines understand context.`
        },
        {
          id: 'keyword-research-tools',
          title: 'Keyword Research Tools and Metrics',
          content: `Several tools and metrics help you conduct effective keyword research:

**Popular Keyword Tools:**
- **Google Keyword Planner**: Free tool with search volume data (ranges) and competition levels
- **Ahrefs Keywords Explorer**: Comprehensive data including keyword difficulty, click potential, and SERP analysis
- **SEMrush Keyword Magic Tool**: Extensive keyword database with grouping and filtering features
- **Moz Keyword Explorer**: Priority scores combining volume, difficulty, and opportunity
- **Ubersuggest**: Affordable option with solid features for beginners
- **AnswerThePublic**: Visualizes question-based keywords for content ideas

**Key Metrics to Consider:**
- **Search Volume**: Monthly searches for a keyword
- **Keyword Difficulty (KD)**: How hard it is to rank (usually 0-100 scale)
- **Cost Per Click (CPC)**: Indicates commercial value
- **Click-Through Rate Potential**: Some keywords have low CTR due to featured snippets or ads
- **Trend Data**: Whether search volume is growing or declining
- **SERP Features**: What appears in results (featured snippets, local pack, videos)

**Best Practices:**
- Don't chase volume alone—consider conversion potential
- Group keywords into topic clusters for content planning
- Regularly refresh your research as search trends evolve
- Consider seasonal fluctuations in your industry
- Balance quick wins with long-term, competitive targets`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'keyword-research-process', title: 'Research Process' },
      { id: 'types-of-keywords', title: 'Keyword Types' },
      { id: 'keyword-research-tools', title: 'Tools & Metrics' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Keyword Distribution by Intent',
      data: [
        { name: 'Informational', value: 55 },
        { name: 'Commercial', value: 20 },
        { name: 'Transactional', value: 15 },
        { name: 'Navigational', value: 10 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=400&fit=crop"
    imageAlt="SEO keyword research tools and analytics dashboard showing search volume data"
    relatedQuestions={[
      { slug: 'what-are-keywords', question: 'What are keywords?' },
      { slug: 'what-is-seo', question: 'What is SEO?' },
      { slug: 'what-is-organic-traffic', question: 'What is organic traffic?' }
    ]}
    relatedTerms={[
      { slug: 'keyword-research', term: 'Keyword Research' },
      { slug: 'long-tail-keywords', term: 'Long-Tail Keywords' },
      { slug: 'search-volume', term: 'Search Volume' }
    ]}
  />
);

export default WhatIsKeywordResearch;
