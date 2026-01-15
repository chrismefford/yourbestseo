import QuestionPage from '@/components/QuestionPage';

const WhatAreCanonicalTags = () => (
  <QuestionPage
    slug="what-are-canonical-tags"
    question="What Are Canonical Tags?"
    shortAnswer="Canonical tags tell search engines which version of a page is the primary one to index when multiple URLs contain similar or identical content."
    content={{
      introduction: `Canonical tags (rel="canonical") are HTML elements that help website owners address duplicate content issues by specifying the preferred version of a web page. When multiple URLs lead to similar or identical content, the canonical tag tells search engines which URL should be treated as the authoritative source.

Duplicate content is a common challenge for websites. Products might be accessible through multiple category URLs, pages might have tracking parameters attached, or content might exist in both HTTP and HTTPS versions. Without canonical tags, search engines must guess which version to index, potentially splitting ranking signals across multiple URLs.

By implementing canonical tags correctly, you consolidate ranking power to a single URL, prevent duplicate content penalties, and ensure users find the correct page in search results. It's one of the most important technical SEO elements for maintaining a clean, well-optimized site.`,
      sections: [
        {
          id: 'how-canonical-tags-work',
          title: 'How Canonical Tags Work',
          content: `Canonical tags are placed in the head section of HTML and point to the preferred URL:

**Basic Implementation:**
<link rel="canonical" href="https://example.com/preferred-page/" />

**Self-Referencing Canonicals:**
Every page should have a canonical tag, even if it points to itself. This prevents issues with URL parameters or other variations.

**Cross-Domain Canonicals:**
You can canonicalize to a different domain if content legitimately exists on multiple sites: <link rel="canonical" href="https://otherdomain.com/original-article/" />

**How Search Engines Process Canonicals:**
1. Crawler discovers duplicate or similar pages
2. Checks for canonical tag on each page
3. Uses the canonical URL as the primary version for indexing
4. Consolidates ranking signals to the canonical URL
5. Shows canonical URL in search results

**Important Notes:**
- Canonicals are hints, not directives—Google may choose a different URL
- The canonical page should exist and return 200 status
- Canonical and indexed page should have same or very similar content
- Use absolute URLs, not relative paths`
        },
        {
          id: 'when-to-use-canonicals',
          title: 'When to Use Canonical Tags',
          content: `Canonical tags solve several common duplicate content scenarios:

**URL Parameter Variations:**
Same content accessible with tracking, sorting, or filtering parameters:
- example.com/shoes
- example.com/shoes?utm_source=newsletter
- example.com/shoes?color=red

**Multiple Path URLs:**
Products accessible through different category structures:
- example.com/mens/shoes/sneakers/product
- example.com/sale/mens-sneakers/product

**WWW vs Non-WWW:**
Site accessible at both:
- www.example.com/page
- example.com/page

**HTTP vs HTTPS:**
Before full HTTPS migration:
- http://example.com/page
- https://example.com/page

**Trailing Slash Variations:**
- example.com/page
- example.com/page/

**Mobile/AMP Versions:**
When content exists on separate mobile or AMP URLs, canonical to the desktop version (with appropriate annotations).

**Syndicated Content:**
When you republish content from another source, canonical to the original.`
        },
        {
          id: 'canonical-best-practices',
          title: 'Canonical Tag Best Practices',
          content: `Follow these guidelines for effective canonical implementation:

**Do's:**
- Use absolute URLs (https://example.com/page, not /page)
- Include self-referencing canonicals on all pages
- Ensure the canonical URL returns 200 status
- Keep content on canonical and duplicate pages substantially similar
- Use lowercase URLs consistently
- Choose a canonical URL and stick with it

**Don'ts:**
- Don't canonical to a page with different content
- Don't use canonicals to resolve redirect chains (use 301 redirects)
- Don't canonical paginated pages to page 1 (they're unique content)
- Don't mix canonical with noindex (contradictory signals)
- Don't have multiple canonical tags on one page
- Don't canonical blocked pages (robots.txt blocks Google from seeing the tag)

**Common Canonical Mistakes:**
- Pointing to 404 or redirected pages
- Incorrect URL format (relative vs. absolute)
- Chain canonicals (A→B→C instead of A→C, B→C)
- Conflicting signals between canonical and sitemap
- Forgetting to update after URL changes

**Monitoring Canonicals:**
- Check Google Search Console for canonical selection issues
- Use site crawlers to verify canonical implementation
- Monitor indexed page count for unexpected changes
- Regularly audit high-priority pages for correct canonicalization`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'how-canonical-tags-work', title: 'How They Work' },
      { id: 'when-to-use-canonicals', title: 'When to Use' },
      { id: 'canonical-best-practices', title: 'Best Practices' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Common Canonical Use Cases',
      data: [
        { name: 'URL Parameters', value: 35 },
        { name: 'Multiple Paths', value: 25 },
        { name: 'WWW/Non-WWW', value: 18 },
        { name: 'HTTP/HTTPS', value: 12 },
        { name: 'Syndication', value: 10 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=400&fit=crop"
    imageAlt="Code on screen representing canonical tag implementation in HTML"
    relatedQuestions={[
      { slug: 'how-to-fix-duplicate-content', question: 'How to fix duplicate content?' },
      { slug: 'what-is-technical-seo', question: 'What is technical SEO?' },
      { slug: 'what-is-crawl-budget', question: 'What is crawl budget?' }
    ]}
    relatedTerms={[
      { slug: 'canonical-tags', term: 'Canonical Tags' },
      { slug: 'duplicate-content', term: 'Duplicate Content' },
      { slug: 'indexability', term: 'Indexability' }
    ]}
  />
);

export default WhatAreCanonicalTags;
