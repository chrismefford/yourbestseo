import GlossaryTermPage from '@/components/GlossaryTermPage';

const FeaturedSnippetsGlossary = () => (
  <GlossaryTermPage
    slug="featured-snippets"
    term="Featured Snippets"
    category="fundamentals"
    definition="Featured snippets are selected search results that appear at the top of Google's organic results in a special box, providing a direct answer to the user's query. Often called 'Position Zero,' they extract and display content from a webpage."
    content={{
      introduction: `Featured snippets represent prime real estate in search results—appearing above the first organic result with highlighted, expanded visibility. They're Google's way of providing quick answers to user queries without requiring a click. For website owners, earning a featured snippet means massive visibility gains and brand authority, even if some users get their answer without clicking through.

Research shows featured snippets appear in approximately 12% of search queries, predominantly for informational searches. Websites featured in snippets see click-through rate increases of 8%+ despite the content being visible directly in search results. The brand visibility and authority boost often outweighs any traffic loss from users not needing to click.`,
      sections: [
        { id: 'types', title: 'Types of Featured Snippets', content: `Google displays several snippet formats:\n\n**Paragraph Snippets**: The most common type (70%+ of snippets). A block of text answering "what is," "why," or "how" questions. Usually 40-60 words.\n\n**List Snippets**: Numbered or bulleted lists for "how to" steps, rankings, or item collections. Can be ordered (steps) or unordered (lists).\n\n**Table Snippets**: Structured data comparisons, specifications, pricing, or schedules displayed in table format.\n\n**Video Snippets**: YouTube videos with timestamps for queries where video answers are preferred.\n\n**Accordion Snippets**: Multiple expandable sections (often seen in "People Also Ask" integrations).\n\nGoogle chooses the format based on what best answers the query—your content should match that format.` },
        { id: 'optimizing', title: 'How to Win Featured Snippets', content: `Strategic optimization increases snippet chances:\n\n**Already Rank Page 1**: 99% of snippets come from pages already ranking in the top 10. Get to page one first.\n\n**Answer Questions Directly**: Use the question as a header, then answer immediately and concisely in 40-60 words.\n\n**Use Proper Formatting**: If top snippets are lists, format your content as lists. If tables, use tables.\n\n**Include the Query**: Use the exact query or close variation in your content.\n\n**Provide Depth After the Answer**: Give the quick answer first, then elaborate—this satisfies both snippet extraction AND readers who want more.\n\n**Optimize for Related Queries**: One page can earn multiple snippets for related questions with proper structure.` },
        { id: 'structure', title: 'Content Structure for Snippets', content: `Format content for extraction:\n\n**For Paragraph Snippets**:\nH2: What is [topic]?\nImmediately follow with a 40-60 word definition/answer.\n\n**For List Snippets**:\nH2: How to [achieve goal]\n1. Step one\n2. Step two\n3. Step three...\n\n**For Table Snippets**:\nH2: [Comparison topic]\n| Column 1 | Column 2 | Column 3 |\n|----------|----------|----------|\n| Data     | Data     | Data     |\n\n**Key Principles**:\n- Use clear H2/H3 headers with the query\n- Answer immediately after the header\n- Keep answer sections self-contained\n- Use schema markup to help Google understand structure` },
        { id: 'tracking', title: 'Tracking and Maintaining Snippets', content: `Monitor your snippet performance:\n\n**Track with Tools**: Semrush, Ahrefs, and specialized tools like SERPstat track which queries you hold snippets for.\n\n**Monitor Fluctuations**: Snippets can change frequently. A competitor improving their answer can steal your snippet.\n\n**Defend Your Position**: Regularly update snippet-winning content to maintain freshness and relevance.\n\n**Expand Opportunities**: Once you win one snippet, audit related queries for additional opportunities.\n\n**Measure Impact**: Track CTR changes in Search Console when you win or lose snippets.\n\n**Note**: Google may not show snippets for all queries—some are too complex, sensitive, or lack clear answers. Not every query has snippet potential.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'types', title: 'Types of Snippets' },
      { id: 'optimizing', title: 'Winning Snippets' },
      { id: 'structure', title: 'Content Structure' },
      { id: 'tracking', title: 'Tracking Snippets' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Featured Snippet Types Distribution', data: [{ name: 'Paragraph', value: 70 }, { name: 'List', value: 19 }, { name: 'Table', value: 6 }, { name: 'Video', value: 5 }] }}
    imageUrl="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=400&fit=crop"
    imageAlt="Google search results showing featured snippet box"
  />
);

export default FeaturedSnippetsGlossary;
