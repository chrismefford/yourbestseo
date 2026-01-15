import QuestionPage from '@/components/QuestionPage';

const WhatIsSEOAudit = () => (
  <QuestionPage
    slug="what-is-an-seo-audit"
    question="What is an SEO Audit?"
    shortAnswer="An SEO audit is a comprehensive evaluation of your website's search optimization, identifying issues and opportunities to improve rankings and organic traffic."
    content={{
      introduction: `An SEO audit is a thorough analysis of your website to evaluate how well it's optimized for search engines and identify opportunities for improvement. Think of it as a health checkup for your website's SEO—it diagnoses problems, uncovers hidden issues, and provides a roadmap for improvement.

A comprehensive SEO audit examines every aspect of your website that affects search visibility: technical infrastructure, on-page optimization, content quality, backlink profile, and user experience. The goal is to understand where you currently stand, identify what's holding you back, and prioritize the changes that will have the greatest impact.

Whether you're launching a new SEO campaign, experiencing traffic declines, or simply want to ensure you're following best practices, an SEO audit provides the insights needed to make informed decisions. Regular audits—at least annually—help maintain and improve your search performance over time.`,
      sections: [
        {
          id: 'seo-audit-components',
          title: 'Components of an SEO Audit',
          content: `A comprehensive SEO audit covers multiple areas:

**Technical SEO Audit:**
- Crawlability and indexation status
- Site speed and Core Web Vitals
- Mobile-friendliness and responsive design
- SSL/HTTPS implementation
- XML sitemap and robots.txt configuration
- URL structure and canonicalization
- Redirect chains and 404 errors
- Structured data implementation
- JavaScript rendering issues

**On-Page SEO Audit:**
- Title tags and meta descriptions
- Header tag usage (H1-H6)
- Content quality and depth
- Keyword optimization and targeting
- Internal linking structure
- Image optimization and alt text
- Duplicate content issues
- Thin content identification

**Off-Page SEO Audit:**
- Backlink profile analysis
- Referring domain quality
- Toxic link identification
- Anchor text distribution
- Brand mentions and citations
- Competitor backlink comparison

**Content Audit:**
- Content inventory and categorization
- Content performance analysis
- Content gap identification
- Keyword coverage assessment
- Content freshness evaluation`
        },
        {
          id: 'conducting-seo-audit',
          title: 'How to Conduct an SEO Audit',
          content: `Follow this systematic process for a thorough SEO audit:

**Step 1: Crawl Your Website**
Use tools like Screaming Frog, Sitebulb, or Ahrefs Site Audit to crawl your entire site. This reveals technical issues like broken links, missing meta tags, duplicate content, and crawl errors.

**Step 2: Check Google Search Console**
Review indexation status, crawl errors, Core Web Vitals, mobile usability issues, and manual actions. Search Console provides Google's perspective on your site.

**Step 3: Analyze Site Speed**
Use Google PageSpeed Insights, GTmetrix, or WebPageTest to identify performance issues. Check both mobile and desktop performance.

**Step 4: Review On-Page Elements**
Audit title tags, meta descriptions, headers, and content for keyword optimization and best practices. Identify missing or duplicate elements.

**Step 5: Evaluate Content Quality**
Assess content depth, relevance, and performance. Identify thin content, outdated articles, and underperforming pages.

**Step 6: Audit Backlink Profile**
Use Ahrefs, Moz, or SEMrush to analyze your backlinks. Identify toxic links, anchor text issues, and link building opportunities.

**Step 7: Competitive Analysis**
Compare your SEO performance against key competitors. Identify gaps in keywords, content, and backlinks.

**Step 8: Prioritize and Create Action Plan**
Categorize issues by severity and impact. Create a prioritized roadmap for addressing findings.`
        },
        {
          id: 'seo-audit-tools',
          title: 'SEO Audit Tools and Best Practices',
          content: `Essential tools for conducting SEO audits:

**All-in-One Audit Tools:**
- **Screaming Frog**: Comprehensive site crawler (free up to 500 URLs)
- **Ahrefs Site Audit**: Cloud-based crawler with issue tracking
- **SEMrush Site Audit**: Detailed technical analysis and monitoring
- **Sitebulb**: Visual crawler with actionable insights

**Specific Analysis Tools:**
- **Google Search Console**: Indexation and performance data
- **Google PageSpeed Insights**: Speed and Core Web Vitals
- **Google Mobile-Friendly Test**: Mobile usability check
- **Rich Results Test**: Structured data validation
- **Lighthouse**: Comprehensive page quality audit

**Best Practices for SEO Audits:**
- Document everything—create a detailed audit report
- Take screenshots of issues for reference
- Prioritize issues by impact and difficulty
- Set realistic timelines for fixes
- Track changes and measure results
- Schedule regular follow-up audits

**Common SEO Audit Findings:**
- Missing or duplicate title tags/meta descriptions
- Slow page load times
- Mobile usability issues
- Broken internal and external links
- Thin or duplicate content
- Missing alt text on images
- Improper redirect implementations
- Indexation issues (blocked pages, orphan pages)
- Poor internal linking structure
- Toxic backlinks affecting rankings`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'seo-audit-components', title: 'Audit Components' },
      { id: 'conducting-seo-audit', title: 'Audit Process' },
      { id: 'seo-audit-tools', title: 'Tools & Best Practices' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Most Common SEO Audit Issues',
      data: [
        { name: 'Meta Tag Issues', value: 78 },
        { name: 'Speed Problems', value: 65 },
        { name: 'Broken Links', value: 58 },
        { name: 'Mobile Issues', value: 45 },
        { name: 'Thin Content', value: 40 },
        { name: 'Duplicate Content', value: 35 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    imageAlt="SEO audit dashboard showing website performance metrics and optimization opportunities"
    relatedQuestions={[
      { slug: 'what-is-technical-seo', question: 'What is technical SEO?' },
      { slug: 'what-are-core-web-vitals', question: 'What are Core Web Vitals?' },
      { slug: 'what-is-seo', question: 'What is SEO?' }
    ]}
    relatedTerms={[
      { slug: 'crawlability', term: 'Crawlability' },
      { slug: 'indexability', term: 'Indexability' },
      { slug: 'core-web-vitals', term: 'Core Web Vitals' }
    ]}
  />
);

export default WhatIsSEOAudit;
