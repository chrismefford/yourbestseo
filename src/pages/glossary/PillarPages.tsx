import GlossaryTermPage from '@/components/GlossaryTermPage';

const PillarPagesGlossary = () => (
  <GlossaryTermPage
    slug="pillar-pages"
    term="Pillar Pages"
    category="content-seo"
    definition="Pillar pages are comprehensive content pieces that broadly cover a core topic, serving as the central hub for a topic cluster with links to more specific subtopic content."
    content={{
      introduction: `Pillar pages are foundational content pieces that provide comprehensive coverage of a broad topic. They serve as the authoritative hub for a topic cluster, linking out to more specific "cluster" content while receiving links back. This structure demonstrates expertise and helps both users and search engines navigate related content.`,
      sections: [
        { id: 'characteristics', title: 'Pillar Page Characteristics', content: `Effective pillar pages: Cover broad topics comprehensively (2,000-10,000+ words), Target competitive head terms, Provide overview-level information, Link to all related cluster content, Are updated regularly with new information, Use clear navigation and formatting, and Serve as the definitive resource on the topic.` },
        { id: 'types', title: 'Types of Pillar Pages', content: `Common formats include: Ultimate Guides - comprehensive how-to content, Resource Pages - curated collections of information, What Is Pages - definitive explanations of concepts, Hub Pages - navigation-focused topic overviews. Choose format based on topic nature and user intent.` },
        { id: 'creation', title: 'Creating Pillar Content', content: `Build pillar pages by: Researching the topic extensively, Outlining all major subtopics to cover, Writing comprehensive but scannable content, Including multimedia (images, videos, infographics), Adding internal links to cluster content, Optimizing for target keywords, and Planning for regular updates.` },
        { id: 'linking', title: 'Linking Strategy', content: `Maximize pillar impact through: Linking to all cluster articles from the pillar, Having cluster content link back to pillar, Using descriptive anchor text, Adding new cluster links as content grows, Promoting pillar pages for backlinks, and Creating visual navigation within the pillar.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'characteristics', title: 'Key Characteristics' },
      { id: 'types', title: 'Types of Pillars' },
      { id: 'creation', title: 'Creating Pillars' },
      { id: 'linking', title: 'Linking Strategy' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Pillar Page Performance', data: [{ name: 'Avg Word Count', value: 4500 }, { name: 'Cluster Links', value: 15 }, { name: 'Backlinks', value: 35 }, { name: 'Keywords Ranking', value: 150 }] }}
    imageUrl="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=400&fit=crop"
    imageAlt="Pillar page content structure and strategy"
  />
);

export default PillarPagesGlossary;