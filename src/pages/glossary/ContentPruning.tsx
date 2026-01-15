import GlossaryTermPage from '@/components/GlossaryTermPage';

const ContentPruningGlossary = () => (
  <GlossaryTermPage
    slug="content-pruning"
    term="Content Pruning"
    category="content-seo"
    definition="Content pruning is the practice of removing, consolidating, or improving low-performing content on a website to improve overall site quality, crawl efficiency, and search rankings."
    content={{
      introduction: `Just as gardeners prune dead branches to help plants thrive, content pruning removes underperforming pages that drag down your site's overall quality. Google evaluates sites holistically—too much thin, outdated, or low-value content can negatively impact how search engines perceive your entire domain. Strategic pruning can lead to significant ranking improvements.`,
      sections: [
        { id: 'identify', title: 'Identifying Prune Candidates', content: `Pages to evaluate include: Zero or near-zero organic traffic, High bounce rate with low time on page, No backlinks or social shares, Outdated information (no longer accurate), Thin content (under 300 words with little value), Duplicate or near-duplicate content, Topics no longer relevant to business, and Pages with poor engagement metrics.` },
        { id: 'options', title: 'Pruning Options', content: `Four main approaches: Delete - remove completely with 410 status, Redirect - 301 to a better relevant page, Consolidate - merge similar pages into comprehensive content, and Improve - update and expand thin content. Choose based on page potential and resource availability.` },
        { id: 'process', title: 'Pruning Process', content: `Execute content pruning by: Auditing all content using analytics and SEO tools, Categorizing pages into prune options, Checking for backlinks before deletion, Setting up proper redirects, Updating internal links, Removing from sitemaps, Monitoring rankings after pruning, and Documenting all changes.` },
        { id: 'results', title: 'Expected Results', content: `Benefits of content pruning: Improved crawl efficiency, Higher average content quality, Better distribution of PageRank, Cleaner site architecture, Improved rankings for remaining content, Reduced maintenance burden, and Often significant traffic increases. Case studies show 10-50% traffic gains post-pruning.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'identify', title: 'Identify Candidates' },
      { id: 'options', title: 'Pruning Options' },
      { id: 'process', title: 'Pruning Process' },
      { id: 'results', title: 'Expected Results' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Common Pruning Decisions', data: [{ name: 'Improve', value: 40 }, { name: 'Consolidate', value: 25 }, { name: 'Redirect', value: 20 }, { name: 'Delete', value: 15 }] }}
    imageUrl="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop"
    imageAlt="Content pruning and website optimization"
  />
);

export default ContentPruningGlossary;
