import GlossaryTermPage from '@/components/GlossaryTermPage';

const TitleTagGlossary = () => (
  <GlossaryTermPage
    slug="title-tag"
    term="Title Tag"
    category="on-page-seo"
    definition="The title tag is an HTML element that specifies the title of a webpage. It appears in browser tabs, search engine results pages (as the clickable headline), and social media shares. Title tags are one of the most important on-page SEO elements."
    content={{
      introduction: `Title tags are arguably the most important on-page SEO element you can optimize. They serve as the first impression in search results, telling both users and search engines what your page is about. A well-crafted title tag can significantly improve click-through rates, while a poorly optimized one can cause your page to be overlooked even if it ranks well. Google has confirmed that title tags are a ranking factor, making them essential for both visibility and traffic. Beyond SEO, title tags appear in browser tabs (helping users navigate multiple open pages) and when content is shared on social media, making them crucial for user experience across multiple touchpoints.`,
      sections: [
        { id: 'best-practices', title: 'Title Tag Best Practices', content: `Effective title tags follow proven guidelines: Keep length between 50-60 characters (Google truncates longer titles), place primary keywords near the beginning, make each title unique across your site, accurately describe page content (misleading titles hurt bounce rates), include your brand name (usually at the end), use separators like | or - for readability, write for humans first (then optimize for search), and create compelling copy that encourages clicks.` },
        { id: 'common-mistakes', title: 'Common Title Tag Mistakes', content: `Avoid these frequent errors: **Keyword stuffing** (cramming multiple keywords unnaturally), **Duplicate titles** across multiple pages, **Too generic** ("Home" or "Welcome"), **Too long** (getting truncated in results), **Missing titles** entirely, **All caps** (appears spammy), **Misleading content** (damages trust and increases bounces), **Ignoring brand** (missing recognition opportunity), and **Not matching search intent** (targeting wrong keywords).` },
        { id: 'optimization-strategy', title: 'Optimization Strategy', content: `Develop titles strategically: Research target keywords and search intent first, analyze competitor titles for gaps, include modifiers like "best," "guide," or current year for long-tail searches, A/B test titles using Google Search Console CTR data, prioritize high-traffic pages for optimization, update titles for seasonal content, and align titles with meta descriptions for consistency.` },
        { id: 'google-rewrites', title: 'When Google Rewrites Titles', content: `Google sometimes displays different titles than what you specify. This happens when: Titles are too long and get truncated, titles don't match search query well, titles are stuffed with keywords, titles don't accurately describe content, or titles are missing entirely. To prevent rewrites: write concise, accurate titles under 60 characters, match user search intent, avoid keyword stuffing, and ensure titles reflect actual page content.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'common-mistakes', title: 'Common Mistakes' },
      { id: 'optimization-strategy', title: 'Strategy' },
      { id: 'google-rewrites', title: 'Google Rewrites' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'CTR Impact by Title Length', data: [{ name: '40-50 chars', value: 6.2 }, { name: '50-60 chars', value: 5.8 }, { name: '60-70 chars', value: 4.1 }, { name: '70+ chars', value: 3.2 }] }}
    imageUrl="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop"
    imageAlt="Title tag optimization showing SEO-optimized HTML title elements in browser tabs and search results"
  />
);

export default TitleTagGlossary;
