import GlossaryTermPage from '@/components/GlossaryTermPage';

const URLStructureGlossary = () => (
  <GlossaryTermPage
    slug="url-structure"
    term="URL Structure"
    category="technical-seo"
    definition="URL structure refers to the format and organization of webpage addresses, impacting how users and search engines understand site hierarchy, navigation, and content topics."
    content={{
      introduction: `A well-designed URL structure serves multiple purposes: it helps users understand where they are on your site, provides search engines with contextual clues about page content, and creates a logical hierarchy that distributes authority throughout your site. Clean, descriptive URLs are both user-friendly and SEO-friendly.

URL structure is foundational to site architecture. While individual URL optimization has modest SEO impact, the cumulative effect of consistent, logical URL patterns significantly influences crawlability, user experience, and how search engines understand your content hierarchy.

The best URL structures are invisible—they make sense so naturally that neither users nor SEO professionals notice them. When URLs require explanation or cause confusion, structure needs improvement. Good URLs feel obvious in hindsight.`,
      whyItMatters: `URL structure impacts multiple aspects of SEO:

**User Experience**: Users see URLs in search results, browser bars, and when sharing links. Clean URLs build trust and communicate content.

**Search Engine Understanding**: URL paths provide context about page content and site hierarchy. Well-structured URLs help search engines categorize content.

**Click-Through Rates**: Descriptive URLs in search results encourage clicks. Messy, parameter-filled URLs create hesitation.

**Internal Link Value**: Logical hierarchies help distribute link equity appropriately through your site.

**Site Architecture**: URLs reflect and reinforce site organization. Good structure supports both SEO and user navigation.

**Maintenance**: Consistent patterns make content management easier and reduce the need for redirects.`,
      howItWorks: `URL structure operates through several components:

**Protocol**: https:// (secure, required for SEO) vs http:// (insecure, avoided)

**Domain**: yourdomain.com - your primary web address

**Subdomain**: blog.yourdomain.com or www.yourdomain.com (optional)

**Path**: /category/subcategory/page-name/ - the hierarchical structure

**Slug**: The final segment identifying the specific page (page-name in the example above)

**Parameters**: ?sort=price&filter=red - query strings for dynamic content (often problematic for SEO)

**Fragments**: #section - jumps to page sections (not typically indexed separately)

**Hierarchy Signal**: Each forward slash indicates a level in your site structure, signaling relationships between pages.`,
      sections: [
        { id: 'best-practices', title: 'URL Best Practices', content: `Optimize URLs with these guidelines:

**Keep Them Short**: Aim for under 75 characters. Shorter URLs are easier to read, share, and remember.

**Use Keywords**: Include relevant keywords in the URL path. /seo-guide/ is better than /article-12345/.

**Separate Words with Hyphens**: Use hyphens (-) between words. Avoid underscores, spaces, or running words together.

**Lowercase Only**: Use lowercase letters exclusively to avoid duplicate content from case variations.

**Avoid Special Characters**: Stick to letters, numbers, and hyphens. Special characters cause encoding issues.

**Use HTTPS**: SSL is required for modern SEO. Google uses HTTPS as a ranking signal.

**Logical Hierarchy**: Structure paths to reflect content organization: /category/subcategory/page/

**Static URLs Preferred**: Avoid dynamic parameters when possible. /products/blue-widget/ beats /products?id=12345&color=blue.

**No Trailing File Extensions**: Avoid .html, .php, .aspx in URLs. Modern sites don't need them.` },
        { id: 'hierarchy', title: 'Site Hierarchy in URLs', content: `URL paths should reflect site structure:

**Homepage**: domain.com/ or domain.com
The root of your site, highest authority page.

**Category Level**: domain.com/category/
Main sections of your site (products, blog, services).

**Subcategory Level**: domain.com/category/subcategory/
Subdivisions within categories when needed.

**Page Level**: domain.com/category/page-name/
Individual pages within their categorical context.

**Depth Considerations**:
- Shallower is generally better (fewer levels)
- Important pages should be 1-2 clicks from homepage
- Deep pages (4+ levels) may receive less crawl priority

**Hierarchy Benefits**:
- Users understand context from URL
- Search engines infer relationships
- Authority flows from parent to child pages
- Categories group related content

**Flat vs Deep**: Many sites benefit from flatter structures. /blog/post-name/ is often better than /blog/2024/03/category/post-name/.` },
        { id: 'common-issues', title: 'Common URL Issues', content: `Avoid these URL problems:

**Dynamic Parameter Pollution**: ?id=123&session=abc&sort=date&page=3 creates infinite URL variations. Use canonical tags or robots.txt to control.

**Session IDs in URLs**: Adding session identifiers creates duplicate content nightmares. Use cookies instead.

**Excessively Long URLs**: domain.com/category/subcategory/sub-subcategory/another-level/and-another/finally-the-page/ is too deep and long.

**Keyword Stuffing**: /best-shoes-buy-shoes-cheap-shoes-discount-shoes/ is spammy and counterproductive.

**Mixed Case Issues**: URLs are often case-sensitive. MyPage and mypage might be different URLs, creating duplicates.

**Inconsistent Trailing Slashes**: /page and /page/ treated as different URLs without proper canonicalization.

**Date-Based Structures**: /2020/03/15/blog-post/ makes content appear outdated and adds unnecessary length.

**Category Changes**: Moving content between categories breaks URLs without redirects.

**Language/Region Problems**: Inconsistent implementation of /en/, /fr/, /us/ patterns causes indexing confusion.` },
        { id: 'redirects', title: 'URL Changes and Redirects', content: `Handle URL changes carefully:

**When URLs Must Change**:
- Rebranding or renaming content
- Restructuring site architecture
- Fixing poorly structured legacy URLs
- Consolidating duplicate content

**301 Redirect Implementation**:
- Always redirect old URLs to new ones with 301 (permanent) redirects
- Pass approximately 90-99% of link equity to new URL
- Maintain redirects indefinitely for important pages

**Redirect Best Practices**:
- Redirect to most relevant equivalent content
- Avoid redirect chains (A→B→C; instead, A→C directly)
- Update internal links to point to new URLs (don't rely on redirects)
- Update external links where possible (reach out to important linking sites)

**Post-Change Monitoring**:
- Check Search Console for crawl errors
- Monitor traffic to old and new URLs
- Verify redirects work correctly
- Update sitemaps with new URLs

**Avoiding Changes**:
The best strategy is choosing good URLs initially to minimize change need. Plan URL structures before launching, not after.

**Migration Mapping**:
For large restructures, create comprehensive mapping documents: old URL → new URL, with redirect rules documented.` }
      ],
      bestPractices: [
        'Keep URLs under 75 characters with descriptive, keyword-rich paths',
        'Use hyphens to separate words—never underscores, spaces, or concatenated words',
        'Maintain consistent lowercase-only URLs to prevent duplicate content',
        'Structure URLs to reflect logical site hierarchy without excessive depth',
        'Use HTTPS exclusively—there\'s no reason for HTTP in modern SEO',
        'Implement 301 redirects when URLs must change, and update internal links accordingly'
      ],
      commonMistakes: [
        'Using dynamic parameters that create thousands of indexable URL variations',
        'Creating deep URL hierarchies that bury important content too many levels down',
        'Changing URLs without implementing proper 301 redirects',
        'Including dates in evergreen content URLs that make content appear outdated',
        'Inconsistent patterns across site sections (different conventions for blog vs products)',
        'Ignoring URL structure during initial site development and retrofitting later'
      ],
      example: `An e-commerce site had chaotic URLs: /products.php?cat=12&subcat=45&id=789&color=blue&size=large. These parameter-heavy URLs created duplicate content issues (same product at multiple URLs), poor user experience (meaningless URLs in search results), and crawl budget waste (Google crawling endless parameter combinations). They restructured to: /shoes/running/nike-air-max-270-blue/. The new structure: descriptive paths, category hierarchy, product name as slug, and color as part of the canonical URL with size selection on-page. They implemented 301 redirects from all old URLs and added canonical tags for any remaining parameter variations. Results after 4 months: crawl budget utilization improved (70% fewer pages crawled with better coverage of unique content), CTR from search increased 23% (cleaner URLs in results), and indexation issues decreased dramatically (previously had 40,000+ indexed URLs, reduced to 5,000 actual unique products). The restructure required significant development effort but resolved years of accumulated technical debt.`
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-it-matters', title: 'Why Structure Matters' },
      { id: 'how-it-works', title: 'URL Components' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'hierarchy', title: 'Site Hierarchy' },
      { id: 'common-issues', title: 'Common Issues' },
      { id: 'redirects', title: 'URL Changes' },
      { id: 'best-practices-list', title: 'Best Practices List' },
      { id: 'common-mistakes', title: 'Mistakes to Avoid' },
      { id: 'example', title: 'Real Example' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'URL Characteristics Correlation with Rankings', data: [{ name: 'Short URLs', value: 75 }, { name: 'Keywords Present', value: 68 }, { name: 'HTTPS', value: 82 }, { name: 'Clean Structure', value: 71 }, { name: 'No Parameters', value: 65 }] }}
    imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
    imageAlt="URL structure optimization showing SEO-friendly website address hierarchy and organization"
  />
);

export default URLStructureGlossary;
