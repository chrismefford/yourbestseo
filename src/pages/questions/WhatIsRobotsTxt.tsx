import QuestionPage from '@/components/QuestionPage';

const WhatIsRobotsTxt = () => (
  <QuestionPage
    slug="what-is-robots-txt"
    question="What is Robots.txt?"
    shortAnswer="Robots.txt is a text file that tells search engine crawlers which pages or sections of your website they can or cannot access and crawl."
    content={{
      introduction: `Robots.txt is a simple text file placed in your website's root directory that provides instructions to search engine crawlers (also called bots or spiders) about which parts of your site they should or shouldn't access. It's part of the Robots Exclusion Protocol, a standard that websites use to communicate with web crawlers.

While robots.txt is a powerful tool for managing crawler behavior, it's important to understand what it can and cannot do. It's a directive, not a security measure—it tells well-behaved crawlers what to avoid, but malicious bots can ignore it entirely. Pages blocked by robots.txt can still appear in search results if other sites link to them.

Understanding how to properly configure robots.txt is essential for technical SEO. A misconfigured file can accidentally block important content from being indexed, while a well-optimized one can help preserve crawl budget and keep low-value pages out of search results.`,
      sections: [
        {
          id: 'how-robots-txt-works',
          title: 'How Robots.txt Works',
          content: `Robots.txt uses simple syntax to control crawler access:

**Basic Commands:**
- **User-agent**: Specifies which crawler the rules apply to
- **Disallow**: Blocks access to specified URLs or directories
- **Allow**: Permits access (overrides Disallow for specific paths)
- **Sitemap**: Points to your XML sitemap location

**Example Robots.txt File:**
User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /public/
Sitemap: https://example.com/sitemap.xml

**User-Agent Targeting:**
- Use * for all crawlers
- Use specific names for individual bots: Googlebot, Bingbot, etc.
- Different rules can apply to different crawlers

**Path Matching:**
- Disallow: /folder/ blocks all URLs starting with /folder/
- Disallow: /*.pdf$ blocks all PDF files
- Wildcards (*) and end-of-URL markers ($) enable pattern matching

**Important Notes:**
- Robots.txt must be at the root: example.com/robots.txt
- It's case-sensitive: /Admin/ is different from /admin/
- Crawlers check robots.txt before crawling any page`
        },
        {
          id: 'when-to-use-robots-txt',
          title: 'When to Use Robots.txt',
          content: `Strategic use of robots.txt helps manage how search engines interact with your site:

**Good Uses for Robots.txt:**
- Blocking admin and login pages
- Preventing crawling of internal search results pages
- Blocking development or staging environments
- Managing crawl budget on large sites
- Blocking duplicate content from filters or parameters
- Preventing indexing of thank-you or confirmation pages

**When NOT to Use Robots.txt:**
- Hiding sensitive information (use authentication instead)
- Blocking pages you want indexed (use noindex instead)
- Trying to prevent pages from appearing in search (doesn't work)
- Blocking CSS/JavaScript files needed for rendering

**Robots.txt vs. Noindex:**
- Robots.txt: Prevents crawling entirely
- Noindex meta tag: Allows crawling but prevents indexing
- If you block with robots.txt, crawlers can't see noindex tags
- Use noindex when you want content crawled but not indexed

**Common Mistakes:**
- Accidentally blocking entire sites with Disallow: /
- Blocking CSS/JS files Google needs to render pages
- Using robots.txt to hide content (not secure)
- Forgetting to update after site restructuring`
        },
        {
          id: 'testing-robots-txt',
          title: 'Testing and Maintaining Robots.txt',
          content: `Regular testing ensures your robots.txt works as intended:

**Testing Tools:**
- **Google Search Console**: Robots.txt Tester tool
- **Bing Webmaster Tools**: Robots.txt testing feature
- **Technical SEO tools**: Screaming Frog, Sitebulb validate robots.txt

**What to Test:**
- Verify important pages aren't accidentally blocked
- Confirm unwanted pages are properly blocked
- Check for syntax errors that might cause issues
- Test with specific user-agents if using targeted rules

**Maintenance Best Practices:**
- Review robots.txt quarterly or after major site changes
- Document why each rule exists
- Test changes in a staging environment first
- Monitor Google Search Console for crawl errors

**Troubleshooting Blocked Pages:**
1. Check if robots.txt is blocking the page
2. Use Search Console's URL Inspection tool
3. Verify no parent directories are blocked
4. Check for conflicting Allow/Disallow rules

**Robots.txt Template for Most Sites:**
User-agent: *
Disallow: /admin/
Disallow: /cart/
Disallow: /checkout/
Disallow: /account/
Disallow: /*?*sort=
Disallow: /*?*filter=
Allow: /

Sitemap: https://yoursite.com/sitemap.xml`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'how-robots-txt-works', title: 'How It Works' },
      { id: 'when-to-use-robots-txt', title: 'When to Use It' },
      { id: 'testing-robots-txt', title: 'Testing & Maintenance' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Common Robots.txt Configurations',
      data: [
        { name: 'Block Admin Areas', value: 35 },
        { name: 'Block Search/Filters', value: 25 },
        { name: 'Block Staging', value: 18 },
        { name: 'Block User Areas', value: 15 },
        { name: 'Other', value: 7 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
    imageAlt="Robot representing search engine crawlers and robots.txt file configuration"
    relatedQuestions={[
      { slug: 'what-is-an-xml-sitemap', question: 'What is an XML sitemap?' },
      { slug: 'what-is-crawl-budget', question: 'What is crawl budget?' },
      { slug: 'what-is-technical-seo', question: 'What is technical SEO?' }
    ]}
    relatedTerms={[
      { slug: 'robots-txt', term: 'Robots.txt' },
      { slug: 'crawlability', term: 'Crawlability' },
      { slug: 'indexability', term: 'Indexability' }
    ]}
  />
);

export default WhatIsRobotsTxt;
