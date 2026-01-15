import GlossaryTermPage from '@/components/GlossaryTermPage';

const PageAuthorityGlossary = () => (
  <GlossaryTermPage
    slug="page-authority"
    term="Page Authority"
    category="off-page-seo"
    definition="Page Authority is a Moz metric predicting how well a specific page will rank in search results, scored on a logarithmic scale from 1 to 100."
    content={{
      introduction: `Page Authority (PA) measures the ranking strength of individual pages rather than entire domains. Developed by Moz, PA predicts how well a specific URL will perform in search results based on its backlink profile and other factors. Higher PA generally correlates with better ranking potential.`,
      sections: [
        { id: 'vs-domain', title: 'Page vs Domain Authority', content: `Key differences: Page Authority measures single URL strength while Domain Authority measures entire website strength. PA focuses on specific page backlinks, while DA aggregates domain-wide signals. Both use 1-100 logarithmic scales. PA is useful for comparing individual content pieces.` },
        { id: 'factors', title: 'What Affects PA', content: `Page Authority is influenced by: Number and quality of backlinks to the specific page, Link equity passed from high-authority sources, Relevance of linking pages, Internal linking structure, Age and history of the page, and Overall domain strength providing a baseline.` },
        { id: 'usage', title: 'Using PA Effectively', content: `Apply PA for: Competitive analysis of specific ranking pages, Identifying link building priorities, Evaluating content performance over time, Comparing your pages to competitors, Assessing acquisition targets or guest post opportunities, and Understanding why pages rank differently.` },
        { id: 'improving', title: 'Improving Page Authority', content: `Boost PA by: Earning quality backlinks to specific pages, Strategic internal linking from high-PA pages, Creating comprehensive link-worthy content, Building topical relevance through related content, Updating and refreshing older content, and Fixing broken links pointing to the page.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'vs-domain', title: 'Page vs Domain Authority' },
      { id: 'factors', title: 'What Affects PA' },
      { id: 'usage', title: 'Using PA Effectively' },
      { id: 'improving', title: 'Improving PA' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Page Authority Benchmarks', data: [{ name: 'Top 3 Results', value: 55 }, { name: 'Page 1 Average', value: 40 }, { name: 'Page 2 Average', value: 25 }, { name: 'New Pages', value: 10 }] }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    imageAlt="Page Authority PA score metrics showing individual page ranking strength for off-page SEO"
  />
);

export default PageAuthorityGlossary;