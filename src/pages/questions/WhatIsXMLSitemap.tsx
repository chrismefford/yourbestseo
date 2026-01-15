import QuestionPage from '@/components/QuestionPage';

const WhatIsXMLSitemap = () => (
  <QuestionPage
    slug="what-is-an-xml-sitemap"
    question="What is an XML Sitemap?"
    shortAnswer="An XML sitemap is a file that lists all important pages on your website, helping search engines discover and crawl your content more efficiently."
    content={{
      introduction: `An XML sitemap is a file that provides search engines with a structured list of the important pages on your website. Think of it as a roadmap that helps Google, Bing, and other search engines find and understand all the content you want them to index.

While search engines can discover pages through links on your site, an XML sitemap ensures that even pages with fewer internal links get found. This is particularly valuable for large websites, new sites with few external links, sites with complex navigation, or pages that are updated frequently.

The sitemap doesn't guarantee that pages will be indexed or ranked well—it simply helps search engines discover your content. Combined with other SEO best practices, a well-maintained sitemap can improve how efficiently search engines crawl and index your site.`,
      sections: [
        {
          id: 'how-sitemaps-work',
          title: 'How XML Sitemaps Work',
          content: `XML sitemaps follow a specific format that search engines understand:

**Basic Sitemap Structure:**
- XML format with specific tags recognized by search engines
- Lists URLs with optional metadata (last modified, priority, change frequency)
- Must be valid XML and follow sitemap protocol standards

**Key Sitemap Tags:**
- **<loc>**: The URL of the page (required)
- **<lastmod>**: When the page was last updated (recommended)
- **<changefreq>**: How often the page changes (optional, often ignored)
- **<priority>**: Relative importance within your site (optional, often ignored)

**Sitemap Limits:**
- Maximum 50,000 URLs per sitemap file
- Maximum 50MB uncompressed file size
- Use sitemap index files for larger sites

**Sitemap Index Files:**
For sites with more than 50,000 pages, create multiple sitemaps and reference them in a sitemap index file. This keeps individual files manageable and allows for better organization by content type.`
        },
        {
          id: 'creating-sitemap',
          title: 'Creating and Submitting Your Sitemap',
          content: `Several methods exist for creating and managing XML sitemaps:

**Automatic Generation:**
- Most CMS platforms (WordPress, Shopify, Wix) generate sitemaps automatically
- SEO plugins like Yoast SEO or Rank Math create and update sitemaps
- Dynamic sitemaps update automatically when you add or remove content

**Manual Creation:**
- Use sitemap generator tools like Screaming Frog or XML-Sitemaps.com
- Create manually for small, static sites (not recommended for large sites)
- Useful for one-time audits or specific sitemap needs

**Submitting Your Sitemap:**
1. Create or locate your sitemap (usually at yoursite.com/sitemap.xml)
2. Sign in to Google Search Console
3. Navigate to Sitemaps in the left menu
4. Enter your sitemap URL and click Submit
5. Also submit to Bing Webmaster Tools

**Robots.txt Reference:**
Add your sitemap location to robots.txt for additional discovery:
Sitemap: https://yoursite.com/sitemap.xml`
        },
        {
          id: 'sitemap-best-practices',
          title: 'XML Sitemap Best Practices',
          content: `Follow these guidelines for optimal sitemap performance:

**What to Include:**
- All important, indexable pages
- Pages you want search engines to find and rank
- Recently updated or added content
- Deep pages that might not get crawled otherwise

**What NOT to Include:**
- Pages blocked by robots.txt
- Pages with noindex tags
- Duplicate content or paginated archives
- Private or password-protected pages
- Redirect URLs (include the destination URL instead)
- Error pages (404, 500)

**Maintenance Tips:**
- Keep sitemaps updated—remove deleted pages promptly
- Use accurate lastmod dates (don't fake freshness)
- Test sitemaps regularly for errors
- Monitor sitemap coverage in Search Console

**Types of Specialized Sitemaps:**
- **Image sitemaps**: Help Google discover images for Image Search
- **Video sitemaps**: Provide metadata about video content
- **News sitemaps**: For Google News inclusion (strict requirements)
- **Mobile sitemaps**: Legacy format, rarely needed now

**Common Sitemap Errors:**
- Including non-canonical URLs
- Listing blocked or noindexed pages
- Broken or outdated URLs
- Incorrect XML formatting
- Not updating after content changes`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'how-sitemaps-work', title: 'How They Work' },
      { id: 'creating-sitemap', title: 'Creation & Submission' },
      { id: 'sitemap-best-practices', title: 'Best Practices' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Sitemap Impact on Indexation',
      data: [
        { name: 'With Sitemap', value: 95 },
        { name: 'Without Sitemap', value: 70 },
        { name: 'New Sites (With)', value: 85 },
        { name: 'New Sites (Without)', value: 45 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
    imageAlt="Server and website architecture representing XML sitemap structure"
    relatedQuestions={[
      { slug: 'what-is-technical-seo', question: 'What is technical SEO?' },
      { slug: 'what-is-robots-txt', question: 'What is robots.txt?' },
      { slug: 'what-is-crawl-budget', question: 'What is crawl budget?' }
    ]}
    relatedTerms={[
      { slug: 'xml-sitemap', term: 'XML Sitemap' },
      { slug: 'crawlability', term: 'Crawlability' },
      { slug: 'indexability', term: 'Indexability' }
    ]}
  />
);

export default WhatIsXMLSitemap;
