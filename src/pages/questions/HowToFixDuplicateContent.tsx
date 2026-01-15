import QuestionPage from '@/components/QuestionPage';

const HowToFixDuplicateContent = () => (
  <QuestionPage
    slug="how-to-fix-duplicate-content"
    question="How Do I Fix Duplicate Content?"
    shortAnswer="Fix duplicate content using canonical tags, 301 redirects, or by consolidating similar pages to ensure search engines know which version to index."
    content={{
      introduction: `Duplicate content occurs when substantially similar content appears at multiple URLs on your website or across different domains. While search engines rarely impose explicit penalties for duplicate content, it creates problems: search engines may index the wrong version, ranking signals get split between duplicates, and crawl budget is wasted on redundant pages.

The good news is that duplicate content is usually a technical issue with straightforward solutions. Whether it's URL parameters creating multiple versions of the same page, content syndication across sites, or site architecture causing the same content to appear at multiple paths, there are established best practices for handling each scenario.

Understanding why duplicate content exists on your site is the first step to fixing it. Once you identify the cause, you can implement the appropriate solution—whether that's canonical tags, redirects, or restructuring your site architecture.`,
      sections: [
        {
          id: 'identifying-duplicate-content',
          title: 'Identifying Duplicate Content',
          content: `Before fixing duplicates, you need to find them:

**Common Causes of Duplicate Content:**
- URL parameters (tracking codes, filters, sorting)
- WWW vs. non-WWW versions
- HTTP vs. HTTPS versions
- Trailing slash variations (/page vs /page/)
- Session IDs in URLs
- Print-friendly page versions
- Mobile sites with separate URLs
- Content syndication across domains
- Pagination and archive pages
- Product variations with minimal content differences

**Tools to Find Duplicates:**
- **Google Search Console**: Check "Excluded" pages for duplicates
- **Screaming Frog**: Crawl site and check for near-duplicates
- **Copyscape/Siteliner**: Find both internal and external duplicates
- **Site: search**: site:example.com "exact phrase" to find repeated content
- **Ahrefs/SEMrush**: Duplicate content reports in site audits

**Signs of Duplicate Content Issues:**
- Wrong version of pages appearing in search results
- Fewer pages indexed than expected
- Multiple URLs ranking for the same keywords
- Crawl errors or coverage issues in Search Console`
        },
        {
          id: 'fixing-methods',
          title: 'Methods for Fixing Duplicate Content',
          content: `Choose the appropriate solution based on your situation:

**1. Canonical Tags:**
Best for: Pages that should both exist but point to one as primary.
- Same content with different URL parameters
- Multiple paths to the same content
- Cross-domain syndication where you control the duplicate

Implementation: Add <link rel="canonical" href="preferred-url" /> to duplicate pages.

**2. 301 Redirects:**
Best for: Pages that shouldn't exist at all.
- Old URLs after site migration
- Consolidated pages you've merged
- HTTP to HTTPS migration
- WWW to non-WWW (or vice versa)

Implementation: Set up server-level redirects to the preferred URL.

**3. Noindex Meta Tag:**
Best for: Pages that should exist for users but not search engines.
- Internal search results pages
- Thank-you/confirmation pages
- Paginated archives (sometimes)

Implementation: Add <meta name="robots" content="noindex" /> to pages.

**4. URL Parameter Handling:**
Best for: Tracking and filter parameters that create duplicates.
- Configure in Google Search Console (limited control now)
- Use canonical tags on parameterized URLs
- Block problematic parameters in robots.txt (careful approach)

**5. Content Consolidation:**
Best for: Multiple thin pages covering similar topics.
- Merge similar pages into one comprehensive resource
- Redirect old URLs to the new consolidated page
- Remove redundant content entirely`
        },
        {
          id: 'prevention-strategies',
          title: 'Preventing Future Duplicate Content',
          content: `Proactive measures prevent duplicate content from occurring:

**Site Configuration:**
- Choose one version (www or non-www, HTTP or HTTPS) and redirect all others
- Implement trailing slash consistency (pick one and redirect)
- Use relative URLs internally to maintain consistency
- Set self-referencing canonicals on all pages

**URL Structure:**
- Create clean, logical URL hierarchy
- Avoid session IDs and unnecessary parameters in URLs
- Use consistent lowercase URLs
- Implement proper URL parameter handling

**Content Management:**
- Unique product descriptions for variations
- Avoid boilerplate content across pages
- Use unique meta titles and descriptions for each page
- Consolidate thin content into comprehensive pages

**CMS and Platform Settings:**
- Configure WordPress/CMS to handle canonicals automatically
- Set up proper pagination handling (rel=prev/next is deprecated but canonical still helps)
- Ensure media/attachment pages don't create duplicates

**Syndication Best Practices:**
- Get syndication partners to use canonical back to your original
- Alternatively, get noindex on syndicated copies
- Consider timing—delay syndication to give your version time to index

**Monitoring:**
- Regular site audits to catch new duplicates
- Monitor Search Console coverage report
- Track indexed page counts for unexpected changes
- Check for canonicalization issues in site crawls`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'identifying-duplicate-content', title: 'Finding Duplicates' },
      { id: 'fixing-methods', title: 'Fixing Methods' },
      { id: 'prevention-strategies', title: 'Prevention' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Common Causes of Duplicate Content',
      data: [
        { name: 'URL Parameters', value: 30 },
        { name: 'HTTP/HTTPS & WWW', value: 22 },
        { name: 'Multiple URL Paths', value: 20 },
        { name: 'Pagination/Archives', value: 15 },
        { name: 'Syndication', value: 8 },
        { name: 'Other', value: 5 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop"
    imageAlt="Person analyzing duplicate content issues on computer screen"
    relatedQuestions={[
      { slug: 'what-are-canonical-tags', question: 'What are canonical tags?' },
      { slug: 'what-is-technical-seo', question: 'What is technical SEO?' },
      { slug: 'what-is-crawl-budget', question: 'What is crawl budget?' }
    ]}
    relatedTerms={[
      { slug: 'duplicate-content', term: 'Duplicate Content' },
      { slug: 'canonical-tags', term: 'Canonical Tags' },
      { slug: 'crawlability', term: 'Crawlability' }
    ]}
  />
);

export default HowToFixDuplicateContent;
