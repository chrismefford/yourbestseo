import GlossaryTermPage from '@/components/GlossaryTermPage';

const MetaTitleGlossary = () => (
  <GlossaryTermPage
    slug="meta-title"
    term="Meta Title (Title Tag)"
    category="on-page-seo"
    definition="A meta title, also called a title tag, is an HTML element that specifies the title of a webpage, appearing in browser tabs, search results, and social shares. This crucial on-page SEO element serves as the first impression users have of your content in search engine results pages (SERPs), directly influencing both rankings and click-through rates. Properly optimized title tags can significantly improve organic traffic and user engagement."
    content={{
      introduction: `The meta title is one of the most important on-page SEO elements. It appears as the clickable headline in search results, in browser tabs, and when pages are shared on social media. Compelling, keyword-optimized titles directly impact rankings and click-through rates. Title tags tell both search engines and users what your page is about, making them essential for visibility and engagement. A well-crafted title can be the difference between a user clicking on your result or choosing a competitor.`,
      whyItMatters: `Title tags are critical because they serve as one of the strongest ranking signals for search engines while simultaneously being the most visible element in search results. Google uses title tags to understand page relevance and topic focus, weighing keywords in titles heavily when determining rankings. For users, the title is often the deciding factor in whether they click through to your page. Studies show that optimized titles can increase click-through rates by 20-40%, directly impacting organic traffic. Additionally, title tags appear when pages are shared on social media, affecting how your content is perceived and shared across platforms.`,
      howItWorks: `When search engine crawlers index your page, they read the title tag in the HTML head section to understand the page's primary topic. Google displays up to approximately 60 characters of your title in desktop search results (slightly less on mobile), truncating longer titles with an ellipsis. The search algorithm analyzes keyword placement, relevance, and uniqueness of titles across your site. Keywords placed earlier in the title typically carry more weight. Google may also rewrite titles in search results if it determines the original doesn't accurately represent the page content or match the search query well.`,
      sections: [
        { id: 'importance', title: 'Why Titles Matter', content: `Title tags are critical for: Primary ranking factor for relevance—Google uses title keywords as strong signals for understanding page topics. First impression in search results—your title is the headline users see and judge. Direct impact on click-through rates—compelling titles dramatically increase clicks. Brand visibility and recognition—including your brand name builds trust and awareness. Social sharing appearances—titles become headlines when shared on Facebook, Twitter, and LinkedIn.` },
        { id: 'best-practices', title: 'Title Tag Best Practices', content: `Optimize titles by: Keeping length 50-60 characters to avoid truncation in search results. Placing primary keyword near the beginning where it carries more weight. Making each page title unique across your entire site to avoid confusion. Including brand name (typically at end) for recognition and trust. Writing for humans while including keywords naturally. Creating accurate descriptions of page content to reduce bounce rates.` },
        { id: 'formulas', title: 'Title Formulas That Work', content: `Proven formats: Blog posts use "[Number] [Adjective] [Topic] [Result]" like "7 Proven SEO Strategies That Double Traffic". Products use "[Product] - [Key Feature] | [Brand]" format. Services use "[Service] in [Location] | [Brand]" for local targeting. How-to content follows "How to [Achieve Result] [Method/Timeframe]". Power words that boost CTR include: Ultimate, Essential, Proven, Free, Complete, Best, Guide, and specific numbers.` },
        { id: 'mistakes', title: 'Common Mistakes', content: `Avoid these errors: Titles over 60 characters get truncated and lose impact. Too-short titles waste valuable real estate. Keyword stuffing makes titles look spammy and hurts CTR. Generic titles like "Home" or "Welcome" provide no SEO value. Duplicate titles across pages confuse search engines and users. Missing target keywords means missing ranking opportunities. Misleading titles increase bounce rate and hurt rankings over time.` }
      ],
      bestPractices: [
        'Front-load important keywords—place your primary keyword within the first 3-4 words of the title for maximum SEO impact',
        'Keep titles between 50-60 characters to ensure full visibility in search results without truncation',
        'Write unique titles for every page—duplicate titles dilute ranking signals and confuse users',
        'Include your brand name at the end using a separator like | or - for consistency and recognition',
        'Use power words and numbers to increase emotional appeal and click-through rates'
      ],
      commonMistakes: [
        'Keyword stuffing by repeating the same keyword multiple times, which looks spammy and can trigger penalties',
        'Creating vague or generic titles like "Products" or "Services" that provide no SEO value or user context',
        'Ignoring mobile truncation—titles may be cut shorter on mobile devices, so lead with the most important information'
      ],
      example: `A local plumber initially used the title "Home | ABC Plumbing" on their homepage. After optimization, they changed it to "24/7 Emergency Plumber in Austin TX | ABC Plumbing - Same Day Service". The new title includes the primary keyword "Emergency Plumber in Austin TX" at the front, specifies the service area, includes the brand, and adds a value proposition. This change resulted in a 35% increase in click-through rate from search results and a 3-position improvement in rankings for "emergency plumber Austin" within 6 weeks.`
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-it-matters', title: 'Why It Matters' },
      { id: 'how-it-works', title: 'How It Works' },
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