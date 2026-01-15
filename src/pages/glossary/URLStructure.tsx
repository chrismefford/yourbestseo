import GlossaryTermPage from '@/components/GlossaryTermPage';

const URLStructureGlossary = () => (
  <GlossaryTermPage
    slug="url-structure"
    term="URL Structure"
    category="technical-seo"
    definition="URL structure refers to the format and organization of webpage addresses, impacting how users and search engines understand site hierarchy, navigation, and content topics."
    content={{
      introduction: `A well-designed URL structure serves multiple purposes: it helps users understand where they are on your site, provides search engines with contextual clues about page content, and creates a logical hierarchy that distributes authority throughout your site. Clean, descriptive URLs are both user-friendly and SEO-friendly.`,
      sections: [
        { id: 'best-practices', title: 'URL Best Practices', content: `Optimize URLs by: Keeping them short and descriptive, Using hyphens to separate words, Including relevant keywords naturally, Maintaining lowercase consistency, Avoiding special characters and spaces, Using HTTPS for security, Creating logical folder hierarchies, and Removing unnecessary parameters when possible.` },
        { id: 'hierarchy', title: 'Site Hierarchy in URLs', content: `URL paths should reflect site structure: Homepage: domain.com, Category: domain.com/category/, Subcategory: domain.com/category/subcategory/, Product/Post: domain.com/category/product-name/. This hierarchy helps crawlers understand relationships and distributes page authority logically.` },
        { id: 'common-issues', title: 'Common URL Issues', content: `Avoid these URL problems: Dynamic parameters creating duplicate content, Session IDs in URLs, Overly long URLs (aim for under 75 characters), Keyword stuffing in paths, Mixed case causing duplicates, Inconsistent trailing slashes, Date-based URLs for evergreen content, and Category changes breaking old URLs.` },
        { id: 'redirects', title: 'URL Changes and Redirects', content: `When changing URLs: Implement 301 redirects from old to new, Update internal links to point to new URLs, Update sitemaps with new URLs, Request re-crawl in Search Console, Monitor for 404 errors, and Avoid redirect chains. URL changes should be planned carefully to minimize SEO disruption.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'hierarchy', title: 'Site Hierarchy' },
      { id: 'common-issues', title: 'Common Issues' },
      { id: 'redirects', title: 'URL Changes' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'URL Characteristics Correlation with Rankings', data: [{ name: 'Short URLs', value: 75 }, { name: 'Keywords', value: 68 }, { name: 'HTTPS', value: 82 }, { name: 'Clean Structure', value: 71 }, { name: 'No Params', value: 65 }] }}
    imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
    imageAlt="URL structure and website organization"
  />
);

export default URLStructureGlossary;
