import GlossaryTermPage from '@/components/GlossaryTermPage';

const RobotsTxtGlossary = () => (
  <GlossaryTermPage
    slug="robots-txt"
    term="Robots.txt"
    category="technical-seo"
    definition="Robots.txt is a text file placed at a website's root that instructs search engine crawlers which pages or sections they can or cannot access and crawl."
    content={{
      introduction: `The robots.txt file serves as the first point of contact between your website and search engine crawlers. Located at yourdomain.com/robots.txt, it provides directives that control crawler access to specific areas of your site. While crawlers generally respect these rules, robots.txt is more of a suggestion than a security barrier—it won't hide content from determined users.

Understanding robots.txt is essential for technical SEO. Misconfigured files can accidentally block important pages from being indexed, while strategic use helps manage crawl budget on large sites. Every SEO professional should know how to read, write, and troubleshoot robots.txt files.

It's critical to understand what robots.txt can and cannot do. It instructs crawlers which URLs to access, but it cannot prevent indexing of pages that are linked to from other sites. If you need to keep a page out of search results entirely, you need noindex meta tags or HTTP headers—robots.txt alone is insufficient for hiding sensitive content.`,
      whyItMatters: `Robots.txt serves important SEO functions:

**Crawl Budget Management**: Large sites have limited crawl budget—the number of pages Google will crawl in a given timeframe. Blocking unimportant sections (admin areas, filtered product pages, internal search results) preserves budget for valuable content.

**Preventing Duplicate Content Crawling**: Block crawlers from URL parameters that create duplicate versions of pages, reducing indexing issues.

**Protecting Server Resources**: Aggressive crawling can strain server resources. Robots.txt helps manage crawler load, especially for sites with limited hosting capacity.

**Staging Environment Protection**: Block search engines from development or staging sites to prevent accidental indexing of incomplete content.

**Directing to Sitemap**: Robots.txt is the standard location to specify your XML sitemap location, helping search engines discover your content.

**Preventing Soft 404 Crawling**: Block sections that commonly generate soft 404s (like expired promotions or out-of-stock products) to improve crawl efficiency.`,
      howItWorks: `Robots.txt uses specific syntax that crawlers interpret:

**User-agent**: Specifies which crawler the following rules apply to. "*" means all crawlers. "Googlebot" targets Google specifically.

**Disallow**: Blocks access to specific paths. "Disallow: /admin/" blocks anything under the admin directory.

**Allow**: Permits access to specific paths within blocked areas. Useful for allowing specific files in otherwise blocked directories.

**Sitemap**: Points crawlers to your XML sitemap location. Can include multiple sitemap directives.

**Crawl-delay**: Suggests time between requests (not supported by Google, but respected by Bing and others).

**Rule Processing**: Crawlers read top-to-bottom, applying the most specific matching rule. Order matters when combining Allow and Disallow.

**Caching**: Crawlers cache robots.txt and check periodically for updates. Changes aren't immediately reflected in crawler behavior.`,
      sections: [
        { id: 'syntax', title: 'Robots.txt Syntax Guide', content: `Master the proper syntax for robots.txt:

**Basic Structure**:
User-agent: *
Disallow: /private/
Allow: /private/public-page.html
Sitemap: https://example.com/sitemap.xml

**Targeting Specific Crawlers**:
User-agent: Googlebot
Disallow: /google-specific-block/

User-agent: Bingbot
Crawl-delay: 10

**Wildcards** (Google extension):
- * matches any sequence: Disallow: /*.pdf blocks all PDFs
- $ matches URL end: Disallow: /*?* blocks URLs with parameters

**Path Matching**:
- "/folder" matches /folder, /folder/, /folder/page
- "/" with nothing else blocks entire site
- Empty Disallow allows everything

**Case Sensitivity**: Paths are case-sensitive. /Admin/ and /admin/ are different.

**Comments**: Lines starting with # are comments for human readers.` },
        { id: 'use-cases', title: 'Common Use Cases', content: `Strategic applications of robots.txt:

**Block Admin and Login Pages**:
Disallow: /wp-admin/
Disallow: /admin/
Disallow: /login/
These pages don't need indexing and waste crawl budget.

**Block Internal Search Results**:
Disallow: /search/
Disallow: /*?s=
Internal search results create infinite low-value pages.

**Block Parameter URLs**:
Disallow: /*?sort=
Disallow: /*?filter=
Prevents duplicate content from filtering and sorting.

**Block Staging Environments**:
User-agent: *
Disallow: /
(Only use on staging subdomain, never production!)

**Block Resource Directories**:
Disallow: /scripts/
Disallow: /includes/
Note: Don't block CSS/JS needed for page rendering.

**Allow Specific Files in Blocked Folders**:
Disallow: /assets/
Allow: /assets/logo.png

**Point to Sitemap**:
Sitemap: https://example.com/sitemap.xml
Sitemap: https://example.com/sitemap-products.xml` },
        { id: 'mistakes', title: 'Common Mistakes to Avoid', content: `Avoid these frequent robots.txt errors:

**Blocking Entire Site Accidentally**: A misplaced "Disallow: /" blocks everything. Triple-check before deploying.

**Blocking CSS and JavaScript**: Google needs to render pages properly. Blocking CSS/JS can severely hurt mobile rankings and indexability.

**Using for Security**: Robots.txt is publicly visible at /robots.txt. Never rely on it to hide sensitive information—use authentication.

**Forgetting Trailing Slashes**: "/folder" and "/folder/" can match differently. Be consistent and intentional.

**Conflicting Directives**: Poorly ordered rules can create unexpected behavior. More specific rules should come after general ones.

**Not Testing Changes**: Always validate changes before deploying to production using Google's testing tools.

**Ignoring After Launch**: Robots.txt often contains development-era blocks that persist into production. Audit regularly.

**Blocking Sitemap Location**: Don't block the directory containing your sitemap from crawling.` },
        { id: 'testing', title: 'Testing and Validation', content: `Validate robots.txt before and after deployment:

**Google Search Console robots.txt Tester**: The most authoritative tool. Enter URLs to see if they're blocked, and identify syntax errors.

**URL Inspection Tool**: Check individual URL crawl status. Shows whether robots.txt blocks the page.

**Site: Search Operator**: Search "site:yourdomain.com/blocked-path" to verify pages aren't indexed. However, URLs can appear in search even if blocked from crawling (just without content snippets).

**Bing Webmaster Tools**: Provides robots.txt analysis for Bing's crawler.

**Third-Party Validators**: Tools like Screaming Frog can validate syntax and test URL matching.

**Manual Testing**: View yourdomain.com/robots.txt directly to confirm the live file matches your intended configuration.

**After Changes**: Use URL Inspection's "Request Indexing" to prompt Google to recrawl after updates. Monitor Search Console for new errors.` }
      ],
      bestPractices: [
        'Always include a Sitemap directive pointing to your XML sitemap',
        'Test robots.txt changes in Search Console before deploying to production',
        'Never block CSS, JavaScript, or image files needed for page rendering',
        'Use noindex for pages you want excluded from search results—robots.txt only controls crawling',
        'Keep robots.txt simple and readable—complex files are prone to errors',
        'Audit robots.txt quarterly to remove outdated directives'
      ],
      commonMistakes: [
        'Blocking the entire site with an overly broad Disallow directive',
        'Relying on robots.txt as a security measure (it is publicly visible)',
        'Blocking CSS/JavaScript files that Google needs for mobile rendering',
        'Forgetting to remove staging-era blocks after launching production site',
        'Using inconsistent URL patterns that don\'t match actual site structure',
        'Not specifying sitemap location in robots.txt'
      ],
      example: `A B2B software company noticed that 60% of Googlebot crawls targeted their filtered product catalog pages (URLs with ?category=, ?sort=, ?filter= parameters). Their 50,000 product variations created millions of URL combinations, exhausting crawl budget while core content went weeks without fresh crawls. They implemented strategic robots.txt rules: "Disallow: /*?*filter=" and "Disallow: /*?*sort=" while using canonical tags to point filtered pages to clean URLs. Within weeks, crawl distribution shifted dramatically—documentation, blog posts, and primary product pages saw 3x more Googlebot visits. They also discovered their old staging site was still being crawled (staging.company.com), wasting crawl budget. A simple "Disallow: /" on the staging robots.txt stopped this immediately. Core page indexation improved, and organic traffic grew 22% over two months as important content was crawled and indexed more frequently.`
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-it-matters', title: 'Why It Matters' },
      { id: 'how-it-works', title: 'How It Works' },
      { id: 'syntax', title: 'Syntax Guide' },
      { id: 'use-cases', title: 'Use Cases' },
      { id: 'mistakes', title: 'Common Mistakes' },
      { id: 'testing', title: 'Testing' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'common-mistakes', title: 'Mistakes to Avoid' },
      { id: 'example', title: 'Real Example' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'Most Common Robots.txt Directives Usage', data: [{ name: 'User-agent', value: 95 }, { name: 'Disallow', value: 85 }, { name: 'Sitemap', value: 72 }, { name: 'Allow', value: 45 }, { name: 'Crawl-delay', value: 18 }] }}
    imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
    imageAlt="Robots.txt file configuration showing search engine crawler access control for technical SEO"
  />
);

export default RobotsTxtGlossary;
