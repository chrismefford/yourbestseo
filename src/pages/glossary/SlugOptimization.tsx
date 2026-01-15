import GlossaryTermPage from '@/components/GlossaryTermPage';

const SlugOptimizationGlossary = () => (
  <GlossaryTermPage
    slug="slug-optimization"
    term="Slug Optimization"
    category="technical-seo"
    definition="Slug optimization involves crafting clean, keyword-rich URL slugs (the part of the URL after the domain) that are readable, descriptive, and optimized for search engines."
    content={{
      introduction: `The URL slug is the portion of a web address that identifies a specific page in readable format—like "best-seo-practices" in domain.com/blog/best-seo-practices. While a small ranking factor, optimized slugs improve click-through rates in search results, help users understand page content before clicking, and contribute to overall site organization.`,
      sections: [
        { id: 'best-practices', title: 'Slug Best Practices', content: `Create effective slugs by: Including the primary keyword, Keeping slugs short (3-5 words ideal), Using hyphens between words, Removing stop words (a, the, is, and), Writing in lowercase only, Making slugs readable and descriptive, Avoiding dates unless time-sensitive, and Matching the page's topic precisely.` },
        { id: 'keyword-placement', title: 'Keywords in Slugs', content: `Keyword optimization for slugs: Place primary keyword early in the slug, Avoid keyword stuffing, Use natural language phrasing, Match the page's target query, Consider variations and synonyms, and Keep focus on user understanding. Example: "seo-audit-checklist" vs "complete-ultimate-seo-audit-checklist-guide-2024".` },
        { id: 'common-mistakes', title: 'Common Slug Mistakes', content: `Avoid these slug errors: Auto-generated slugs from headlines (too long), Including dates for evergreen content, Using underscores instead of hyphens, Mixed case letters, Special characters or encoded spaces, Generic slugs like "page-1" or "post-123", and Changing slugs after publication (breaks links).` },
        { id: 'cms-tips', title: 'CMS-Specific Tips', content: `Platform considerations: WordPress: Edit permalink after title entry, Shopify: Edit handle in product settings, Webflow: Set slug in page settings, Custom CMS: Build slug generation rules. Always preview URLs before publishing and set up redirects when changes are necessary.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'keyword-placement', title: 'Keywords in Slugs' },
      { id: 'common-mistakes', title: 'Common Mistakes' },
      { id: 'cms-tips', title: 'CMS Tips' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'URL Slug Length vs Performance', data: [{ name: '1-2 words', value: 82 }, { name: '3-4 words', value: 78 }, { name: '5-6 words', value: 65 }, { name: '7+ words', value: 42 }] }}
    imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop"
    imageAlt="URL slug optimization showing clean, keyword-rich web addresses for SEO-friendly URLs"
  />
);

export default SlugOptimizationGlossary;
