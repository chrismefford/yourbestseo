import QuestionPage from '@/components/QuestionPage';

const HowToDoASiteAudit = () => {
  return (
    <QuestionPage
      question="How do I do an SEO site audit?"
      slug="how-to-do-a-site-audit"
      shortAnswer="An SEO site audit involves crawling your website with tools like Screaming Frog or Semrush to identify technical issues, analyzing on-page SEO elements, reviewing content quality, checking backlinks, and assessing site speed and mobile-friendliness."
      category="tools"
      lastUpdated="2025-01-10"
      readTime="10 min read"
      featuredImage={{
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
        alt: "SEO site audit checklist and technical analysis dashboard showing website health metrics and optimization opportunities"
      }}
      introduction="An SEO site audit is the foundation of any effective optimization strategy. Like a health checkup for your website, it systematically identifies issues that could be hurting your search visibility and reveals opportunities for improvement. Whether you're taking over a new client's site, launching an SEO initiative, or troubleshooting declining traffic, a comprehensive audit provides the roadmap for action. This step-by-step guide walks you through conducting a thorough SEO audit, from technical foundations to content quality and backlink analysis."
      tableOfContents={[
        { id: 'what-is-audit', title: 'What is an SEO Audit?' },
        { id: 'tools-needed', title: 'Tools You\'ll Need' },
        { id: 'technical-audit', title: 'Technical SEO Audit' },
        { id: 'on-page-audit', title: 'On-Page SEO Audit' },
        { id: 'content-audit', title: 'Content Audit' },
        { id: 'backlink-audit', title: 'Backlink Audit' },
        { id: 'prioritizing', title: 'Prioritizing Fixes' }
      ]}
      contentSections={[
        {
          id: 'what-is-audit',
          title: 'What is an SEO Site Audit?',
          content: `An **SEO site audit** is a comprehensive analysis of a website's ability to appear in search engine results.

**Purpose of an Audit:**
- Identify technical issues blocking indexing
- Find on-page optimization opportunities
- Assess content quality and gaps
- Analyze backlink health
- Benchmark current performance

**When to Conduct Audits:**
- Starting work on a new website
- After significant traffic drops
- Before major site redesigns
- Quarterly as ongoing maintenance
- After algorithm updates

**Audit Scope:**
A complete audit covers:
- Technical infrastructure
- On-page SEO elements
- Content quality and strategy
- Off-page factors (backlinks)
- User experience signals
- Local SEO (if applicable)

**Expected Deliverable:**
The audit produces a prioritized list of issues and recommendations, typically organized by severity and effort required.`
        },
        {
          id: 'tools-needed',
          title: 'Essential Audit Tools',
          content: `You'll need various tools to conduct a thorough audit.

**Crawling Tools:**
- **Screaming Frog** - Industry standard crawler ($259/year or free for 500 URLs)
- **Sitebulb** - Visual audit reports
- **Semrush Site Audit** - Cloud-based crawling

**Google Tools (Free):**
- **Google Search Console** - Index coverage, performance data
- **Google Analytics** - Traffic and engagement data
- **PageSpeed Insights** - Core Web Vitals
- **Mobile-Friendly Test** - Mobile usability

**SEO Platforms:**
- **Ahrefs** - Backlinks, technical issues
- **Semrush** - Comprehensive auditing
- **Moz** - On-page analysis

**Specialty Tools:**
- **GTmetrix** - Page speed analysis
- **Lighthouse** - Chrome DevTools audit
- **Schema Validator** - Structured data testing
- **WAVE** - Accessibility checking

**Recommended Minimum Stack:**
Screaming Frog + Google Search Console + PageSpeed Insights covers most audit needs affordably.`
        },
        {
          id: 'technical-audit',
          title: 'Technical SEO Audit',
          content: `Technical SEO forms the foundation—without it, other optimizations matter less.

**Crawlability Check:**
- Review robots.txt for blocking issues
- Check for crawl errors in Search Console
- Identify pages with noindex tags
- Verify XML sitemap accuracy
- Test site structure/depth

**Indexation Analysis:**
- Compare indexed pages vs. actual pages
- Find orphan pages (no internal links)
- Identify thin/duplicate content pages
- Check canonical tag implementation
- Review index coverage report

**Site Architecture:**
- Analyze URL structure
- Check internal linking patterns
- Verify navigation accessibility
- Assess mobile navigation
- Review breadcrumb implementation

**Page Speed:**
- Test Core Web Vitals (LCP, INP, CLS)
- Check mobile vs. desktop speeds
- Identify large images
- Find render-blocking resources
- Review server response times

**Mobile-Friendliness:**
- Run Mobile-Friendly Test
- Check responsive design
- Test touch element spacing
- Verify viewport configuration

**Security:**
- Confirm HTTPS implementation
- Check for mixed content
- Review security headers`
        },
        {
          id: 'on-page-audit',
          title: 'On-Page SEO Audit',
          content: `On-page elements directly impact how search engines understand your content.

**Title Tags:**
- Check all pages have unique titles
- Verify length (50-60 characters)
- Confirm keyword placement
- Identify missing titles
- Look for duplicate titles

**Meta Descriptions:**
- Ensure all pages have descriptions
- Check length (150-160 characters)
- Verify they're compelling
- Identify duplicates
- Look for keyword inclusion

**Header Structure:**
- Confirm each page has one H1
- Check H1 matches topic/keyword
- Review heading hierarchy (H2, H3, etc.)
- Look for missing headings

**URL Optimization:**
- Check URL structure
- Identify overly long URLs
- Find URLs with parameters
- Look for keyword inclusion
- Review URL consistency

**Image Optimization:**
- Check all images have alt text
- Review alt text quality
- Identify large images
- Check image file names
- Verify lazy loading

**Internal Linking:**
- Analyze anchor text usage
- Identify pages with few internal links
- Check for broken internal links
- Review link equity distribution`
        },
        {
          id: 'content-audit',
          title: 'Content Audit',
          content: `Content quality significantly impacts rankings and user engagement.

**Content Inventory:**
- List all content pages
- Categorize by type (blog, product, landing)
- Note publication/update dates
- Record word counts
- Track current traffic/rankings

**Quality Assessment:**
- Identify thin content (<300 words with no depth)
- Find duplicate or near-duplicate content
- Spot outdated information
- Assess E-E-A-T signals
- Check factual accuracy

**Keyword Mapping:**
- Assign target keywords to pages
- Identify keyword cannibalization
- Find content gaps
- Review keyword rankings
- Assess search intent alignment

**Content Performance:**
- Analyze traffic per page
- Check engagement metrics (time on page, bounce rate)
- Review conversion rates
- Identify underperforming content
- Find top performers to emulate

**Action Categories:**
After assessment, categorize content:
- **Keep**: Performing well, no changes needed
- **Improve**: Good potential, needs optimization
- **Merge**: Combine similar thin content
- **Remove**: No value, redirect or delete
- **Create**: Gaps requiring new content`
        },
        {
          id: 'backlink-audit',
          title: 'Backlink Audit',
          content: `Your backlink profile significantly influences rankings and requires periodic review.

**Profile Overview:**
- Total backlinks and referring domains
- Domain authority/rating trend
- Link growth over time
- Comparison to competitors

**Link Quality Assessment:**
- Identify high-authority links
- Find toxic or spammy links
- Check for unnatural patterns
- Review anchor text distribution

**Red Flags to Watch:**
- Sudden link spikes (could indicate spam)
- High percentage of exact-match anchors
- Links from irrelevant sites
- Links from penalized domains
- Paid link patterns

**Anchor Text Analysis:**
Healthy distribution typically includes:
- Branded anchors (40-50%)
- URL anchors (15-20%)
- Generic anchors ("click here") (10-15%)
- Keyword anchors (5-10%)
- Natural variations

**Lost Links:**
- Identify recently lost backlinks
- Prioritize high-value losses
- Attempt link reclamation
- Understand why links were removed

**Disavow Considerations:**
- Only disavow truly toxic links
- Document reasons for disavowal
- Submit through Search Console
- Review periodically`
        },
        {
          id: 'prioritizing',
          title: 'Prioritizing Audit Findings',
          content: `Not all issues are equally important. Prioritize systematically.

**Priority Framework:**

**Critical (Fix Immediately):**
- Site not being indexed
- Major crawlability blocks
- Security issues
- Manual actions/penalties
- Broken core pages

**High (Fix Within 2 Weeks):**
- Core Web Vitals failures
- Missing or duplicate title tags
- Broken internal links
- Mobile usability issues
- Thin content on key pages

**Medium (Fix Within 1 Month):**
- Meta description issues
- Image optimization
- Internal linking improvements
- Content updates
- Minor technical issues

**Low (Ongoing):**
- Nice-to-have optimizations
- Content expansion
- Link building
- Schema enhancements

**Impact vs. Effort Matrix:**
Plot issues on quadrant:
- **Quick wins**: Low effort, high impact (do first)
- **Major projects**: High effort, high impact (plan carefully)
- **Fill-ins**: Low effort, low impact (when time allows)
- **Time sinks**: High effort, low impact (avoid or deprioritize)

**Creating the Roadmap:**
1. Document all findings
2. Assign priority levels
3. Estimate effort required
4. Create timeline
5. Assign ownership
6. Track progress`
        }
      ]}
      chartData={{
        type: 'pie',
        title: 'Common SEO Audit Issues Distribution',
        data: [
          { name: 'Technical Issues', value: 30 },
          { name: 'On-Page Problems', value: 25 },
          { name: 'Content Issues', value: 25 },
          { name: 'Speed/UX', value: 12 },
          { name: 'Backlink Issues', value: 8 }
        ]
      }}
      relatedQuestions={[
        { slug: 'what-is-screaming-frog', question: 'What is Screaming Frog?' },
        { slug: 'what-is-technical-seo', question: 'What is technical SEO?' },
        { slug: 'what-are-core-web-vitals', question: 'What are Core Web Vitals?' },
        { slug: 'how-to-fix-duplicate-content', question: 'How do I fix duplicate content?' }
      ]}
      relatedTerms={[
        { slug: 'crawlability', term: 'Crawlability' },
        { slug: 'indexability', term: 'Indexability' },
        { slug: 'core-web-vitals', term: 'Core Web Vitals' },
        { slug: 'robots-txt', term: 'Robots.txt' }
      ]}
    />
  );
};

export default HowToDoASiteAudit;