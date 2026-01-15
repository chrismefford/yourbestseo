import GlossaryTermPage from '@/components/GlossaryTermPage';

const RobotsTxtGlossary = () => (
  <GlossaryTermPage
    slug="robots-txt"
    term="Robots.txt"
    category="technical-seo"
    definition="Robots.txt is a text file placed at a website's root that instructs search engine crawlers which pages or sections they can or cannot access and crawl."
    content={{
      introduction: `The robots.txt file serves as the first point of contact between your website and search engine crawlers. Located at yourdomain.com/robots.txt, it provides directives that control crawler access to specific areas of your site. While crawlers generally respect these rules, robots.txt is more of a suggestion than a security barrier—it won't hide content from determined users.`,
      sections: [
        { id: 'syntax', title: 'Robots.txt Syntax', content: `Key directives include: User-agent: specifies which crawler (Googlebot, *, etc.), Disallow: blocks access to specific paths, Allow: permits access within blocked areas, Sitemap: points to your XML sitemap, and Crawl-delay: suggests crawl speed (not universally supported). Directives apply to user-agents listed above them until the next user-agent line.` },
        { id: 'use-cases', title: 'Common Use Cases', content: `Block with robots.txt: Admin and login pages, Internal search results, Staging or development sections, Duplicate parameter URLs, Private user directories, and PDF or resource libraries. Remember: blocking a URL prevents crawling but pages may still appear in search if linked to from other sites.` },
        { id: 'mistakes', title: 'Common Mistakes', content: `Avoid these errors: Blocking entire site accidentally, Using robots.txt for security (use authentication instead), Blocking CSS/JS files (hurts mobile rendering), Forgetting trailing slashes (affects path matching), and Conflicting directives without proper order. Test changes before deploying.` },
        { id: 'testing', title: 'Testing and Validation', content: `Validate robots.txt with: Google Search Console's robots.txt Tester, Bing Webmaster Tools, Third-party validators, and Manual testing with site: searches. After changes, use Search Console's URL Inspection to verify pages are crawlable.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'syntax', title: 'Syntax Guide' },
      { id: 'use-cases', title: 'Use Cases' },
      { id: 'mistakes', title: 'Common Mistakes' },
      { id: 'testing', title: 'Testing' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Most Common Robots.txt Directives', data: [{ name: 'Disallow', value: 85 }, { name: 'Allow', value: 45 }, { name: 'Sitemap', value: 72 }, { name: 'User-agent', value: 95 }, { name: 'Crawl-delay', value: 18 }] }}
    imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
    imageAlt="Robots.txt file configuration and crawler control"
  />
);

export default RobotsTxtGlossary;
