import GlossaryTermPage from '@/components/GlossaryTermPage';

const InternalLinkingGlossary = () => (
  <GlossaryTermPage
    slug="internal-linking"
    term="Internal Linking"
    category="on-page-seo"
    definition="Internal linking is the practice of creating hyperlinks that connect one page on your website to another page on the same website, helping navigation and distributing page authority."
    content={{
      introduction: `Internal links connect pages within your website through hyperlinks. Unlike external links pointing to other sites, internal links keep users and crawlers within your domain while establishing content relationships. Strategic internal linking improves crawlability, distributes authority, and enhances user experience.`,
      sections: [
        { id: 'types', title: 'Types of Internal Links', content: `Internal links come in several forms: Navigational links (menus, headers, footers), Contextual links (within body content), Breadcrumb links (hierarchical paths), Related content links (suggested reading), Footer links (site-wide navigation), and Sidebar links (category browsing).` },
        { id: 'benefits', title: 'Why Internal Linking Matters', content: `Key benefits include: Improved crawlability for search engines, Authority distribution between pages, Better user experience and engagement, Content hierarchy establishment, Keyword relevance through anchor text, Reduced bounce rates, and Increased pages per session.` },
        { id: 'best-practices', title: 'Best Practices', content: `Optimize internal links by: Using descriptive anchor text, Linking deep pages (not just homepage), Maintaining contextual relevance, Keeping reasonable link counts, Fixing broken internal links, Using follow links (default), and Creating hub-and-spoke structures.` },
        { id: 'strategy', title: 'Internal Linking Strategy', content: `Strategic approaches: Topic clusters with pillar pages, Hub-and-spoke content models, Hierarchy-based linking structure, Strategic PageRank flow from high-authority pages, Regular audits for orphan pages, and Connecting new content to relevant existing pages.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'types', title: 'Types of Links' },
      { id: 'benefits', title: 'Why It Matters' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'strategy', title: 'Linking Strategy' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Internal Link Types', data: [{ name: 'Contextual', value: 45 }, { name: 'Navigation', value: 30 }, { name: 'Breadcrumbs', value: 15 }, { name: 'Related Posts', value: 10 }] }}
    imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
    imageAlt="Internal linking structure showing connected web pages for SEO authority distribution"
  />
);

export default InternalLinkingGlossary;