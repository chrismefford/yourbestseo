import GlossaryTermPage from '@/components/GlossaryTermPage';

const ThinContentGlossary = () => (
  <GlossaryTermPage
    slug="thin-content"
    term="Thin Content"
    category="content-seo"
    definition="Thin content refers to web pages with little or no valuable, original content that provide minimal value to users and can negatively impact search rankings."
    content={{
      introduction: `Thin content provides little value to users and can harm your entire site's rankings. Google's Panda algorithm specifically targets thin content, reducing visibility for sites with too many low-quality pages. Identifying and addressing thin content is essential for maintaining SEO health and user satisfaction.`,
      sections: [
        { id: 'examples', title: 'Examples of Thin Content', content: `Common thin content types: Doorway pages targeting variations, Auto-generated content, Scraped or copied content, Affiliate pages with no original value, Empty category pages, Stub pages with minimal text, Duplicate product descriptions, and Pages with only images and no context.` },
        { id: 'impact', title: 'SEO Impact', content: `Thin content affects SEO through: Algorithm penalties (Panda), Reduced crawl budget on quality pages, Lower overall site quality signals, Poor user experience and high bounce rates, Diluted topical authority, and Wasted indexing on low-value pages.` },
        { id: 'identification', title: 'Finding Thin Content', content: `Identify thin pages by: Analyzing word counts across the site, Reviewing Search Console performance data, Checking bounce rates by landing page, Using crawlers to find low-content pages, Evaluating pages with zero or minimal traffic, and Manual content audits for value assessment.` },
        { id: 'solutions', title: 'Addressing Thin Content', content: `Fix thin content by: Expanding pages with valuable information, Consolidating similar thin pages, Adding multimedia and interactive elements, Removing or noindexing low-value pages, Redirecting to relevant comprehensive pages, and Setting minimum content standards for new pages.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'examples', title: 'Examples of Thin Content' },
      { id: 'impact', title: 'SEO Impact' },
      { id: 'identification', title: 'Finding Thin Content' },
      { id: 'solutions', title: 'Addressing Thin Content' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Content Quality Thresholds', data: [{ name: 'Thin (<300)', value: 15 }, { name: 'Basic (300-800)', value: 35 }, { name: 'Standard (800-1500)', value: 30 }, { name: 'Comprehensive (1500+)', value: 20 }] }}
    imageUrl="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=400&fit=crop"
    imageAlt="Thin content analysis showing low-value pages that harm SEO rankings and site quality"
  />
);

export default ThinContentGlossary;