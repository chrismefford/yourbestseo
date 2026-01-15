import GlossaryTermPage from '@/components/GlossaryTermPage';

const DomainAuthorityGlossary = () => (
  <GlossaryTermPage
    slug="domain-authority"
    term="Domain Authority"
    category="off-page-seo"
    definition="Domain Authority (DA) is a search engine ranking score developed by Moz that predicts how likely a website is to rank in search engine result pages (SERPs). Scores range from 1 to 100, with higher scores indicating greater ranking potential."
    content={{
      introduction: `Domain Authority is one of the most widely used metrics in SEO for evaluating website strength and ranking potential. While it's important to understand that DA is a third-party metric (created by Moz, not Google) and is not a direct ranking factor, it serves as a useful comparative tool for understanding a website's competitive position. The score is calculated based on multiple factors, primarily the quality and quantity of backlinks pointing to a domain. Higher DA generally correlates with better rankings, though Google uses its own proprietary signals that may differ from DA calculations.`,
      sections: [
        { id: 'how-calculated', title: 'How Domain Authority is Calculated', content: `Moz calculates DA using a machine learning model that considers: Number of total backlinks pointing to the domain, number of unique linking root domains, quality and authority of those linking domains, spam score of the backlink profile, and other link equity factors. The algorithm is updated periodically, so DA scores can fluctuate even without changes to your link profile. Scores are logarithmic—it's easier to grow from 20 to 30 than from 70 to 80.` },
        { id: 'similar-metrics', title: 'Similar Authority Metrics', content: `Other tools offer comparable metrics: **Ahrefs Domain Rating (DR)**: Similar concept, different algorithm, **Semrush Authority Score**: Combines multiple signals including traffic, **Majestic Trust Flow**: Measures link quality and trustworthiness, **Majestic Citation Flow**: Measures link quantity. Each tool uses different methodologies, so scores aren't directly comparable. Use the same tool consistently for tracking progress.` },
        { id: 'improving-da', title: 'Improving Domain Authority', content: `Increase DA through link building best practices: Earn high-quality backlinks from authoritative sites, focus on links from relevant, topically-related domains, diversify your link profile (different sources and types), remove or disavow toxic and spammy links, create linkable content assets that attract natural links, build relationships for ongoing link opportunities, and be patient—DA grows slowly with consistent effort.` },
        { id: 'proper-use', title: 'Using DA Properly', content: `Apply DA appropriately in your SEO strategy: Use for competitive analysis—compare your DA to competitors, evaluate link building opportunities based on source DA, track your DA trend over time (not absolute value), don't obsess over the number—focus on ranking and traffic, understand DA is relative (as the web grows, all scores shift), and remember DA is directional, not definitive. High DA doesn't guarantee rankings; low DA doesn't prevent them.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'how-calculated', title: 'How It\'s Calculated' },
      { id: 'similar-metrics', title: 'Similar Metrics' },
      { id: 'improving-da', title: 'Improving DA' },
      { id: 'proper-use', title: 'Using DA Properly' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Avg DA by Search Result Position', data: [{ name: 'Position 1', value: 77 }, { name: 'Position 3', value: 68 }, { name: 'Position 5', value: 58 }, { name: 'Position 10', value: 42 }] }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    imageAlt="Analytics dashboard showing domain authority metrics"
  />
);

export default DomainAuthorityGlossary;
