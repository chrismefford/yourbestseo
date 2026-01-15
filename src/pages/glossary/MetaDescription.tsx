import GlossaryTermPage from '@/components/GlossaryTermPage';

const MetaDescriptionGlossary = () => (
  <GlossaryTermPage
    slug="meta-description"
    term="Meta Description"
    category="on-page-seo"
    definition="A meta description is an HTML element that provides a brief summary of a webpage's content. It appears below the title in search engine results and influences click-through rates, though it's not a direct ranking factor."
    content={{
      introduction: `Meta descriptions are your opportunity to advertise your content to searchers. While Google has confirmed that meta descriptions don't directly impact rankings, they significantly influence click-through rates—which can indirectly affect rankings. A compelling meta description can be the difference between a user clicking your result or choosing a competitor. Google displays meta descriptions in search results about 63% of the time; other times, it generates its own snippet from page content. Writing effective meta descriptions is a blend of SEO best practices and persuasive copywriting.`,
      sections: [
        { id: 'best-practices', title: 'Writing Best Practices', content: `Effective meta descriptions follow key guidelines: Keep length between 150-160 characters (Google truncates longer descriptions), Include your primary keyword naturally (it appears bold when matching search queries), Write unique descriptions for every page, Use active voice and action-oriented language, Include a clear value proposition or benefit, Add a call-to-action when appropriate, Match searcher intent accurately, and Avoid duplicate descriptions across pages.` },
        { id: 'common-mistakes', title: 'Common Mistakes to Avoid', content: `Many websites make preventable meta description errors: Too short (under 100 characters wastes opportunity), Too long (gets truncated, losing key information), Keyword stuffing (reads unnaturally, reduces CTR), Duplicate descriptions (confuses search engines), Missing descriptions entirely (lets Google choose), Misleading content (increases bounce rate), and Generic descriptions (fail to differentiate from competitors).` },
        { id: 'optimization', title: 'Optimization Strategies', content: `Maximize meta description effectiveness: A/B test different descriptions using Google Search Console CTR data, Include numbers and statistics when relevant, Address pain points your content solves, Use emotional triggers appropriately, Include your brand name for recognition, Study competitor descriptions for differentiation opportunities, and Update underperforming descriptions regularly.` },
        { id: 'technical', title: 'Technical Implementation', content: `Proper implementation ensures descriptions display correctly: Use the <meta name="description" content="..."> tag in the <head> section, Implement unique descriptions in your CMS or framework, Use dynamic generation for large sites (but review for quality), Test with Google's Rich Results Test, Monitor Search Console for issues, and Consider Open Graph descriptions for social sharing.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'common-mistakes', title: 'Common Mistakes' },
      { id: 'optimization', title: 'Optimization' },
      { id: 'technical', title: 'Technical Implementation' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'CTR Impact of Meta Description Quality', data: [{ name: 'Optimized', value: 5.8 }, { name: 'Basic', value: 3.2 }, { name: 'Missing', value: 2.1 }, { name: 'Truncated', value: 2.8 }] }}
    imageUrl="https://images.unsplash.com/photo-1522542550221-31fd8575f9d5?w=800&h=400&fit=crop"
    imageAlt="Search engine results page showing meta descriptions"
  />
);

export default MetaDescriptionGlossary;
