import QuestionPage from '@/components/QuestionPage';

const WhatIsScreamingFrog = () => (
  <QuestionPage
    slug="what-is-screaming-frog"
    question="What is Screaming Frog?"
    shortAnswer="Screaming Frog is a desktop website crawler (SEO Spider) that audits technical SEO by crawling your site like a search engine. It finds broken links, redirect chains, duplicate content, missing metadata, and other SEO issues."
    content={{
      introduction: `Screaming Frog SEO Spider is one of the most commonly used technical SEO tools in the industry. It crawls websites the way search engines do and extracts data about URLs, status codes, titles, descriptions, headings, internal links, and more.

If you’ve ever needed to quickly find broken links, duplicate title tags, redirect chains, or missing meta descriptions across an entire site, this is the go-to tool.`,
      sections: [
        {
          id: 'what-is-sf',
          title: 'What is Screaming Frog SEO Spider?',
          content: `Screaming Frog is a desktop crawler for Windows/Mac/Linux that:
- Visits URLs like a search engine bot
- Collects SEO-critical page data
- Exports findings to CSV/Excel

It’s fast, configurable, and reliable—making it a staple in SEO audits and migrations.`
        },
        {
          id: 'key-features',
          title: 'Key Features',
          content: `Common features include:
- Status code reporting (200/301/404/500)
- Duplicate titles/descriptions
- Missing H1s and header structure issues
- Canonical tag validation
- Image alt text checks
- Internal link analysis
- Custom extraction (XPath/regex)

Paid versions add integrations and unlimited crawling.`
        },
        {
          id: 'common-uses',
          title: 'Common Use Cases',
          content: `Screaming Frog is great for:
- Technical SEO audits
- Finding broken internal/external links
- Auditing titles and meta descriptions at scale
- Analyzing content depth and duplicates
- Site migrations (URL inventories + redirect validation)
- Competitor structural research` 
        },
        {
          id: 'how-to-use',
          title: 'How to Use It',
          content: `Basic workflow:
1. Enter your site URL
2. Click Start
3. Review key tabs (Internal, Response Codes, Page Titles, Meta Description, H1)
4. Filter issues (Missing, Duplicate, 4xx)
5. Export and prioritize fixes

Adjust crawl settings if your site is large or heavily JavaScript-rendered.`
        },
        {
          id: 'free-vs-paid',
          title: 'Free vs Paid',
          content: `Free version:
- Crawls up to 500 URLs

Paid version:
- Unlimited crawling
- Save projects
- Scheduled crawls
- Integrations (Analytics/Search Console)
- Advanced extraction and reports

If your site has more than 500 pages or you audit regularly, the paid version is usually worth it.`
        },
        {
          id: 'tips',
          title: 'Pro Tips',
          content: `- Crawl slowly to avoid server strain
- Exclude parameters and admin paths
- Use JavaScript rendering for SPAs
- Export “issues lists” and batch fixes
- Compare crawls over time to track improvements

Use it alongside Search Console data for the most complete picture.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'what-is-sf', title: 'What is Screaming Frog?' },
      { id: 'key-features', title: 'Key Features' },
      { id: 'common-uses', title: 'Common Use Cases' },
      { id: 'how-to-use', title: 'How to Use It' },
      { id: 'free-vs-paid', title: 'Free vs. Paid' },
      { id: 'tips', title: 'Pro Tips' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Most Common Issues Found in Crawls (Example)',
      data: [
        { name: 'Broken Links', value: 25 },
        { name: 'Title Issues', value: 22 },
        { name: 'Meta Description', value: 18 },
        { name: 'Redirects', value: 15 },
        { name: 'Missing Alt Text', value: 12 },
        { name: 'Other', value: 8 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
    imageAlt="Screaming Frog SEO spider tool interface showing website crawl data and technical SEO analysis results"
    relatedQuestions={[
      { slug: 'how-to-do-a-site-audit', question: 'How do I do an SEO site audit?' },
      { slug: 'best-seo-tools', question: 'What are the best SEO tools?' },
      { slug: 'what-is-technical-seo', question: 'What is technical SEO?' },
      { slug: 'how-to-fix-duplicate-content', question: 'How do I fix duplicate content?' }
    ]}
    relatedTerms={[
      { slug: 'crawlability', term: 'Crawlability' },
      { slug: 'canonical-tags', term: 'Canonical Tags' },
      { slug: 'robots-txt', term: 'Robots.txt' },
      { slug: 'meta-title', term: 'Meta Title' }
    ]}
  />
);

export default WhatIsScreamingFrog;
