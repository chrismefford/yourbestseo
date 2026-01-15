import GlossaryTermPage from '@/components/GlossaryTermPage';

const MetaTitleGlossary = () => (
  <GlossaryTermPage
    slug="meta-title"
    term="Meta Title (Title Tag)"
    category="on-page-seo"
    definition="A meta title, also called a title tag, is an HTML element that specifies the title of a webpage, appearing in browser tabs, search results, and social shares."
    content={{
      introduction: `The meta title is one of the most important on-page SEO elements. It appears as the clickable headline in search results, in browser tabs, and when pages are shared on social media. Compelling, keyword-optimized titles directly impact rankings and click-through rates.`,
      sections: [
        { id: 'importance', title: 'Why Titles Matter', content: `Title tags are critical for: Primary ranking factor for relevance, First impression in search results, Direct impact on click-through rates, Brand visibility and recognition, and Social sharing appearances. Small improvements in titles can significantly increase organic traffic.` },
        { id: 'best-practices', title: 'Title Tag Best Practices', content: `Optimize titles by: Keeping length 50-60 characters, Placing primary keyword near the beginning, Making each page title unique, Including brand name (typically at end), Writing for humans while including keywords, and Creating accurate descriptions of page content.` },
        { id: 'formulas', title: 'Title Formulas That Work', content: `Proven formats: Blog posts - "[Number] [Adjective] [Topic] [Result]", Products - "[Product] - [Feature] | [Brand]", Services - "[Service] in [Location] | [Brand]", How-to - "How to [Result] [Method/Timeframe]". Power words: Ultimate, Essential, Proven, Free, Complete, Best.` },
        { id: 'mistakes', title: 'Common Mistakes', content: `Avoid these errors: Titles over 60 characters (truncation), Too short (wasted opportunity), Keyword stuffing (looks spammy), Generic titles like "Home" or "Welcome", Duplicate titles across pages, Missing target keywords, and Misleading titles that increase bounce rate.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'importance', title: 'Why Titles Matter' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'formulas', title: 'Title Formulas' },
      { id: 'mistakes', title: 'Common Mistakes' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Title Impact on CTR', data: [{ name: 'Optimized Title', value: 12 }, { name: 'Average Title', value: 5 }, { name: 'Poor Title', value: 2 }] }}
    imageUrl="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=400&fit=crop"
    imageAlt="Meta title tag optimization showing SEO title elements for improved search engine rankings"
  />
);

export default MetaTitleGlossary;