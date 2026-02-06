import GlossaryTermPage from '@/components/GlossaryTermPage';

const ImpressionsGlossary = () => (
  <GlossaryTermPage
    slug="impressions"
    term="Impressions"
    category="fundamentals"
    definition="Impressions represent the number of times a webpage appears in search results, regardless of whether users click on it. Each display counts as one impression."
    content={{
      introduction: `In SEO, an impression occurs each time your webpage URL appears in Google search results. Impressions measure visibility—how often your pages are seen by potential visitors. While clicks drive traffic, impressions indicate your reach and potential audience.

Understanding impressions is fundamental to SEO success. They serve as leading indicators of ranking performance and help identify opportunities for optimization. A page generating thousands of impressions but few clicks presents a clear CTR optimization opportunity. Conversely, a page with high CTR but low impressions may need improved rankings to reach more searchers.

Google Search Console tracks impressions automatically, providing data on which queries trigger your pages in results. This visibility data is invaluable for understanding your true search presence—you might rank for keywords you never intentionally targeted, or discover that your main keywords generate fewer impressions than expected. Impressions tell the story of your visibility before users ever make a choice to click.`,
      whyItMatters: `Impressions are valuable for multiple reasons:

**Measuring Visibility**: Impressions quantify how often your content appears before potential visitors. High impressions indicate strong search presence, while low impressions suggest ranking or indexing issues.

**Tracking SEO Progress**: Rising impressions signal expanding visibility. Even before rankings improve enough to drive clicks, growing impressions indicate positive momentum.

**Identifying CTR Opportunities**: Pages with high impressions but low clicks represent optimization goldmines. Improving titles and meta descriptions can dramatically increase traffic without needing better rankings.

**Keyword Discovery**: Search Console reveals impression data for queries you may not have targeted intentionally. This uncovers new keyword opportunities and content gaps.

**Brand Awareness**: Even without clicks, impressions build brand recognition. Searchers see your brand repeatedly, building familiarity that influences future decisions.

**Leading Indicators**: Impressions often change before clicks. Dropping impressions can signal ranking losses before traffic declines become obvious.`,
      howItWorks: `Google counts impressions differently depending on context:

**Standard Search Results**: An impression is counted when your URL appears in the viewport—whether or not the user scrolls to see it. If your result is on position 8 and users don't scroll, you still get an impression.

**Infinite Scroll**: With Google's continuous scrolling, impressions count when your URL loads into the page, even if below the visible area.

**Featured Snippets**: If you appear in a featured snippet AND in regular results, it may count as one or two impressions depending on the specific implementation.

**Image and Video Results**: Carousels and specialized results count impressions when your content appears in those features.

**Position and Impressions**: Higher positions generally mean more impressions, but even position 8-10 results receive impressions—users just see them less frequently.

**Filtering and Deduplication**: Google aggregates impression data by URL and query, helping you understand which keywords drive visibility for specific pages.`,
      sections: [
        { id: 'analysis', title: 'Analyzing Impression Data', content: `Interpret impression patterns strategically:

**High Impressions + Low Clicks = CTR Opportunity**: Your page ranks and appears frequently, but something discourages clicks. Optimize your title tag and meta description. Consider whether your page matches search intent.

**High Impressions + Low Position = Ranking Improvement Needed**: You're appearing for valuable queries but in lower positions where clicks are rare. Focus on content quality, backlinks, and on-page optimization to climb rankings.

**Low Impressions + High Position = Low-Volume Terms**: You rank well but for queries few people search. Either these are valuable niche terms or you need to target higher-volume keywords.

**Growing Impressions Over Time**: Indicates expanding visibility—your SEO efforts are working even if clicks haven't caught up yet.

**Declining Impressions**: Warning sign of ranking losses, algorithm impacts, or reduced search demand for your terms. Investigate promptly.

Use Search Console to filter by query, page, device, and country for granular analysis.` },
        { id: 'ctr-relationship', title: 'Impressions and Click-Through Rate', content: `The relationship between impressions and CTR is crucial for optimization:

**Understanding the Math**: CTR = Clicks ÷ Impressions. A 5% CTR means 5 clicks per 100 impressions.

**CTR Benchmarks by Position**:
- Position 1: Average 28-32% CTR
- Position 2: Average 15-18% CTR
- Position 3: Average 10-12% CTR
- Positions 4-10: 2-8% CTR
- Page 2+: Under 2% CTR

**Quality Over Quantity**: More impressions don't guarantee more traffic. A page with 10,000 impressions at 1% CTR gets 100 clicks. Another with 5,000 impressions at 4% CTR gets 200 clicks—twice the traffic with half the impressions.

**Optimizing Both**: The ideal strategy improves rankings (more impressions) while also optimizing titles and descriptions (higher CTR). Don't neglect either dimension.

**Intent Matters**: Some queries have inherently lower CTR because Google answers them directly (zero-click searches). High impressions with low CTR isn't always a problem—it may reflect query type.` },
        { id: 'strategy', title: 'Using Impressions Strategically', content: `Leverage impression data for SEO success:

**Content Gap Analysis**: Pages with zero impressions for target keywords indicate content gaps or indexing issues. Either create content or fix technical problems.

**Keyword Prioritization**: Sort by impressions to find high-visibility opportunities. Improving CTR on high-impression pages delivers more traffic than optimizing low-impression pages.

**Cannibalization Detection**: Multiple pages getting impressions for the same query may indicate keyword cannibalization. Consider consolidating content.

**Seasonal Trends**: Track impression patterns over time to identify seasonal demand. Prepare content before peak seasons.

**Competitive Intelligence**: Compare your impression share against estimated total search volume. If you're getting 1,000 impressions for a 10,000 monthly volume keyword, competitors capture the other 90%.

**Feature Snippet Opportunities**: High impressions with position 1-5 rankings are prime candidates for featured snippet optimization—you're already visible, now aim for position zero.` }
      ],
      bestPractices: [
        'Monitor impressions weekly in Google Search Console to catch visibility changes early',
        'Segment analysis by query type, page, and device for actionable insights',
        'Calculate CTR for high-impression pages and prioritize title/description optimization',
        'Use impression data to validate keyword research and content strategy',
        'Track impression trends over time rather than focusing on single-day fluctuations',
        'Compare impressions against search volume estimates to gauge market share'
      ],
      commonMistakes: [
        'Focusing only on clicks while ignoring impression trends that predict future traffic',
        'Misinterpreting low CTR without considering position and query type',
        'Ignoring impression data for keywords you didn\'t intentionally target',
        'Expecting immediate impression changes after SEO improvements (give it 2-4 weeks)',
        'Not filtering by device—mobile and desktop can show very different patterns',
        'Treating all impressions equally regardless of query commercial value'
      ],
      example: `A local accounting firm discovered through Search Console that their "tax preparation services" page received 8,500 monthly impressions but only 85 clicks (1% CTR). Analysis showed they ranked position 4-7 for most queries. They optimized the title from "Tax Services - ABC Accounting" to "Expert Tax Preparation in Denver | Free Consultation | ABC Accounting" and added a compelling meta description highlighting their 25 years of experience and same-day appointments. Within 6 weeks, CTR improved to 3.2%, generating 272 clicks from the same impressions—3x more traffic with zero ranking improvements. They then focused on content quality and backlinks to improve rankings, eventually reaching positions 1-3 and seeing impressions grow to 15,000+ monthly.`
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-it-matters', title: 'Why Impressions Matter' },
      { id: 'how-it-works', title: 'How Impressions Work' },
      { id: 'analysis', title: 'Analyzing Data' },
      { id: 'ctr-relationship', title: 'Impressions and CTR' },
      { id: 'strategy', title: 'Strategic Use' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'common-mistakes', title: 'Common Mistakes' },
      { id: 'example', title: 'Real Example' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Impression Sources Distribution', data: [{ name: 'Standard Results', value: 60 }, { name: 'Featured Snippets', value: 15 }, { name: 'Image Results', value: 15 }, { name: 'Rich Results', value: 10 }] }}
    imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    imageAlt="Search impressions analytics showing website visibility metrics in Google Search Console"
  />
);

export default ImpressionsGlossary;
