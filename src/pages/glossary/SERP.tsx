import GlossaryTermPage from '@/components/GlossaryTermPage';

const SERPGlossary = () => (
  <GlossaryTermPage
    slug="serp"
    term="SERP (Search Engine Results Page)"
    category="fundamentals"
    definition="A SERP (Search Engine Results Page) is the page displayed by search engines like Google in response to a user's query, containing a mix of organic listings, paid advertisements, and various SERP features like featured snippets, knowledge panels, and local packs."
    content={{
      introduction: `The SERP is where all SEO efforts culminate—it's the battlefield where websites compete for clicks. Modern SERPs are far more complex than the simple "ten blue links" of early search engines. Today's Google results page can include featured snippets, video carousels, image packs, local results, shopping ads, knowledge panels, and more. Understanding SERP anatomy is essential for SEO success.

Each query produces a unique SERP based on Google's understanding of user intent. A search for "pizza" shows local results and delivery options. "Pizza dough recipe" shows recipe cards and how-to content. "History of pizza" shows informational articles and knowledge panels. Your SEO strategy must account for what type of SERP your target keywords generate.`,
      sections: [
        { id: 'serp-anatomy', title: 'Anatomy of a Modern SERP', content: `Modern SERPs contain multiple elements:\n\n**Paid Results (Ads)**: Marked "Sponsored," appearing at top and bottom. Advertisers pay per click.\n\n**Organic Results**: The traditional "ten blue links" (though often fewer now due to features). Title, URL, meta description.\n\n**Featured Snippets**: Extracted answers appearing in "Position 0" above organic results.\n\n**Knowledge Panels**: Right-side boxes with entity information (businesses, people, places).\n\n**Local Pack**: Map with 3 local business listings for location-based queries.\n\n**People Also Ask**: Expandable related questions with snippet answers.\n\n**Image/Video Carousels**: Visual media results for applicable queries.\n\n**Shopping Results**: Product listings with images and prices.` },
        { id: 'serp-features', title: 'Key SERP Features for SEO', content: `Target these high-visibility features:\n\n**Featured Snippets**: Answer queries concisely in your content using the exact question as a header. Paragraph, list, and table formats work best.\n\n**People Also Ask**: Structure content to answer related questions. Each PAA you capture multiplies visibility.\n\n**Local Pack**: Optimize Google Business Profile and local citations to appear in the map results.\n\n**Video Results**: Create video content for queries where videos appear. Often easier to rank than organic listings.\n\n**Image Pack**: Optimize image alt text, file names, and surrounding content to appear in image results.\n\n**Rich Snippets**: Use schema markup to add review stars, FAQs, how-to steps, and other enhancements to your listings.` },
        { id: 'analyzing-serps', title: 'SERP Analysis for SEO Strategy', content: `Study SERPs to inform your approach:\n\n**Identify Intent**: What types of content rank? This reveals what Google thinks users want.\n\n**Assess Competition**: Who ranks on page one? Evaluate their domain authority, content quality, and backlink profiles.\n\n**Spot Opportunities**: Is there a SERP feature no one is optimizing for? Outdated content you could improve upon?\n\n**Note Content Format**: Are results primarily articles, tools, videos, or product pages? Match the winning format.\n\n**Check SERP Volatility**: Use tools to see if rankings fluctuate. Stable SERPs require stronger signals to break into.\n\n**Calculate Real Click Opportunity**: If the SERP is dominated by ads and features, organic CTR may be lower than volume suggests.` },
        { id: 'zero-click', title: 'Zero-Click Searches and SERP Dominance', content: `Google increasingly answers queries directly:\n\n**Zero-Click Phenomenon**: Studies show 50%+ of searches end without a click to any website. Google provides answers via snippets, knowledge panels, and calculators.\n\n**Impact on SEO**: Traditional click-based success metrics are shifting. Impression-based brand building matters more.\n\n**Adaptation Strategies**:\n- Target queries that require depth Google can't fully answer\n- Use featured snippets for brand visibility even without clicks\n- Focus on transactional queries where users must visit sites\n- Build brand recognition so users seek you directly\n\n**Opportunity**: Featured snippet ownership provides brand exposure to millions, even if they don't click—this has value.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'serp-anatomy', title: 'SERP Anatomy' },
      { id: 'serp-features', title: 'SERP Features' },
      { id: 'analyzing-serps', title: 'SERP Analysis' },
      { id: 'zero-click', title: 'Zero-Click Searches' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'SERP Click Distribution', data: [{ name: 'Organic', value: 45 }, { name: 'Zero-Click', value: 35 }, { name: 'Paid Ads', value: 15 }, { name: 'Other', value: 5 }] }}
    imageUrl="https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=800&h=400&fit=crop"
    imageAlt="Google search results page on computer screen"
  />
);

export default SERPGlossary;
