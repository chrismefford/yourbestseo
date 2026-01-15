import GlossaryTermPage from '@/components/GlossaryTermPage';

const ShortTailKeywordsGlossary = () => (
  <GlossaryTermPage
    slug="short-tail-keywords"
    term="Short-Tail Keywords"
    category="fundamentals"
    definition="Short-tail keywords are broad, generic search terms typically consisting of one to two words that have high search volume but also high competition and often lower conversion rates."
    content={{
      introduction: `Short-tail keywords, also known as head terms, represent the broadest level of search intent. Terms like "shoes," "coffee," or "marketing" attract massive audiences but come with intense competition. While challenging to rank for, they serve important purposes in brand awareness and establishing topical authority.`,
      sections: [
        { id: 'characteristics', title: 'Key Characteristics', content: `Short-tail keywords have distinct traits: Very high search volume (often thousands to millions monthly), Intense competition from major brands, Broad and ambiguous search intent, Lower conversion rates due to varied user intentions, Difficulty ranking without significant domain authority, and Higher cost-per-click in paid advertising.` },
        { id: 'vs-longtail', title: 'Short-Tail vs Long-Tail', content: `The key differences: Length (1-2 words vs 3+ words), Search volume (very high vs lower), Competition (intense vs moderate), Intent clarity (vague vs specific), Conversion rate (lower vs higher), and Time to rank (longer vs shorter). Most effective SEO strategies balance both.` },
        { id: 'strategy', title: 'When to Target Short-Tail', content: `Short-tail keywords work best for: Brand awareness campaigns, Content pillar pages, Sites with high domain authority, Establishing industry presence, and Supporting topic cluster strategies. Build authority through long-tail content first before competing for head terms.` },
        { id: 'best-practices', title: 'Best Practices', content: `To succeed with short-tail keywords: Create comprehensive, authoritative content covering all angles, Build quality backlinks from relevant sources, Develop topical depth across related terms, Be patient (ranking takes months or years), Use them for research to discover long-tail variations, and Balance your keyword portfolio strategically.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'characteristics', title: 'Key Characteristics' },
      { id: 'vs-longtail', title: 'Short-Tail vs Long-Tail' },
      { id: 'strategy', title: 'When to Target' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Keyword Type Comparison', data: [{ name: 'Short-Tail Volume', value: 85 }, { name: 'Short-Tail Competition', value: 90 }, { name: 'Long-Tail Volume', value: 25 }, { name: 'Long-Tail Competition', value: 30 }] }}
    imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
    imageAlt="Short-tail keywords showing high-volume competitive head terms for SEO keyword strategy"
  />
);

export default ShortTailKeywordsGlossary;