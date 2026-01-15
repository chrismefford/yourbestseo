import QuestionPage from '@/components/QuestionPage';

const HowToDoASiteAudit = () => (
  <QuestionPage
    slug="how-to-do-a-site-audit"
    question="How do I do an SEO site audit?"
    shortAnswer="An SEO site audit involves crawling your website to identify technical issues, reviewing indexing/crawlability, analyzing on-page elements, evaluating content quality, and checking speed and mobile usability to prioritize fixes that improve rankings."
    content={{
      introduction: `An SEO site audit is the foundation of any effective optimization strategy. Like a health checkup for your website, it surfaces technical blockers, content gaps, and on-page issues that prevent your pages from performing.

This step-by-step process will help you run a practical audit, prioritize fixes, and turn findings into an action plan.`,
      sections: [
        {
          id: 'what-is-audit',
          title: 'What is an SEO Audit?',
          content: `An **SEO audit** is a structured review of the factors that influence your search visibility.

A complete audit typically covers:
- Crawlability and indexation
- Technical performance (speed, mobile)
- On-page SEO (titles, headings, internal links)
- Content quality and intent match
- Backlinks and authority signals

The goal is to create a prioritized list of fixes and opportunities, not just a long list of issues.`
        },
        {
          id: 'tools-needed',
          title: 'Tools You’ll Need',
          content: `You can do a strong audit with a small stack:

- **Crawler:** Screaming Frog (or a cloud audit tool)
- **Search performance:** Google Search Console
- **Traffic + behavior:** Google Analytics
- **Speed:** PageSpeed Insights + Lighthouse

Optional add-ons:
- Ahrefs/Semrush for backlink and competitor data
- Sitebulb for visual audits

Use the simplest tools that give you reliable, actionable data.`
        },
        {
          id: 'technical-audit',
          title: 'Technical SEO Audit',
          content: `Start with the basics that can block rankings:

**Crawlability & Indexing**
- Check robots.txt and meta robots
- Verify sitemap submission and errors
- Review Search Console “Pages” report for exclusions

**Status Codes & Redirects**
- Fix 404s
- Reduce redirect chains
- Ensure canonical URLs return 200

**Site Performance**
- Improve Core Web Vitals (LCP, INP, CLS)
- Reduce large images and render-blocking assets
- Improve server response time

**Mobile Usability**
- Ensure content is responsive
- Fix tap target issues
- Avoid horizontal scrolling

If Google can’t crawl, render, or trust your site, content work won’t fully pay off.`
        },
        {
          id: 'on-page-audit',
          title: 'On-Page SEO Audit',
          content: `On-page elements help Google understand each page.

Check for:
- Unique **title tags** (50–60 chars) aligned to intent
- Strong **meta descriptions** (150–160 chars) to improve CTR
- One clear **H1** per page, with logical H2/H3 structure
- Optimized **URLs** (short, descriptive, consistent)
- Images with descriptive **alt text**
- Internal links that connect related pages

Your crawler makes it easy to export missing/duplicate titles and descriptions to fix in batches.`
        },
        {
          id: 'content-audit',
          title: 'Content Audit',
          content: `Evaluate whether content is actually helpful and aligned to search intent.

Look for:
- Thin content that doesn’t answer the query
- Duplicate or overlapping pages (cannibalization)
- Outdated posts that need refresh
- Missing subtopics vs. competitors

Classify content into actions:
- **Keep** (performing well)
- **Improve** (high potential, needs work)
- **Merge** (overlapping pages)
- **Remove/Redirect** (no value)
- **Create** (clear gaps)`
        },
        {
          id: 'backlink-audit',
          title: 'Backlink Audit',
          content: `Backlinks influence authority and ranking potential.

Review:
- Total referring domains and link growth
- Anchor text distribution (avoid over-optimized patterns)
- Toxic/spam links (rarely need action, but monitor)
- Lost links (reclaim valuable mentions)

Use Ahrefs/Semrush (or similar) to compare your backlink profile with competitors and identify link opportunities.`
        },
        {
          id: 'prioritizing',
          title: 'Prioritizing Fixes',
          content: `Use an impact vs. effort approach.

**Fix first (high impact):**
- Indexing blockers, noindex, canonical mistakes
- Broken important pages
- Major speed/mobile issues

**Then (quick wins):**
- Duplicate titles, missing meta descriptions
- Internal linking improvements
- Refresh pages ranking positions 11–20

Turn findings into a simple roadmap with owners and dates. An audit only matters if it becomes action.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'what-is-audit', title: 'What is an SEO Audit?' },
      { id: 'tools-needed', title: 'Tools You’ll Need' },
      { id: 'technical-audit', title: 'Technical SEO Audit' },
      { id: 'on-page-audit', title: 'On-Page SEO Audit' },
      { id: 'content-audit', title: 'Content Audit' },
      { id: 'backlink-audit', title: 'Backlink Audit' },
      { id: 'prioritizing', title: 'Prioritizing Fixes' }
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
    imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
    imageAlt="SEO site audit checklist and technical analysis dashboard showing website health metrics and optimization opportunities"
    relatedQuestions={[
      { slug: 'what-is-seo-audit', question: 'What is an SEO audit?' },
      { slug: 'what-is-technical-seo', question: 'What is technical SEO?' },
      { slug: 'what-are-core-web-vitals', question: 'What are Core Web Vitals?' },
      { slug: 'what-is-screaming-frog', question: 'What is Screaming Frog?' }
    ]}
    relatedTerms={[
      { slug: 'crawlability', term: 'Crawlability' },
      { slug: 'indexability', term: 'Indexability' },
      { slug: 'core-web-vitals', term: 'Core Web Vitals' },
      { slug: 'robots-txt', term: 'Robots.txt' }
    ]}
  />
);

export default HowToDoASiteAudit;
