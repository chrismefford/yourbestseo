import GlossaryTermPage from '@/components/GlossaryTermPage';

const AnchorTextGlossary = () => (
  <GlossaryTermPage
    slug="anchor-text"
    term="Anchor Text"
    category="on-page-seo"
    definition="Anchor text is the clickable text in a hyperlink that provides context about the linked page's content to both users and search engines."
    content={{
      introduction: `Anchor text is the visible, clickable text within a hyperlink. It serves as a signal to search engines about the topic of the linked page. Well-optimized anchor text helps both users understand what to expect and search engines understand content relationships.`,
      sections: [
        { id: 'types', title: 'Types of Anchor Text', content: `Common anchor text types: Exact match (uses target keyword exactly), Partial match (includes keyword with other words), Branded (uses brand or company name), Naked URL (displays the full URL), Generic (like "click here" or "learn more"), and Image anchors (alt text serves as anchor for linked images).` },
        { id: 'seo-impact', title: 'SEO Impact', content: `Anchor text affects SEO through: Relevance signals to search engines, Context for linked page topics, Link equity distribution, User experience and click expectations, and Over-optimization penalties if manipulated. Natural diversity in anchor text is key.` },
        { id: 'best-practices', title: 'Best Practices', content: `Optimize anchor text by: Using descriptive, relevant text, Maintaining natural variety, Avoiding over-optimization with exact match, Keeping anchors concise but meaningful, Ensuring context makes sense to readers, and Varying internal link anchors across pages.` },
        { id: 'mistakes', title: 'Common Mistakes', content: `Avoid these errors: Over-using exact match anchors (looks manipulative), Generic anchors that waste opportunity, Irrelevant anchor text that confuses users, Too-long anchor text that loses impact, and Ignoring anchor text for internal links. Balance optimization with natural language.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'types', title: 'Types of Anchor Text' },
      { id: 'seo-impact', title: 'SEO Impact' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'mistakes', title: 'Common Mistakes' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Healthy Anchor Text Distribution', data: [{ name: 'Branded', value: 40 }, { name: 'Partial Match', value: 25 }, { name: 'Naked URL', value: 15 }, { name: 'Generic', value: 10 }, { name: 'Exact Match', value: 10 }] }}
    imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
    imageAlt="Anchor text optimization showing clickable hyperlink text examples for SEO"
  />
);

export default AnchorTextGlossary;