import QuestionPage from '@/components/QuestionPage';

const WhatIsScreamingFrog = () => {
  return (
    <QuestionPage
      question="What is Screaming Frog?"
      slug="what-is-screaming-frog"
      shortAnswer="Screaming Frog is a desktop website crawler that helps SEO professionals audit websites for technical issues. It crawls sites like search engines do, identifying broken links, duplicate content, redirect chains, and other SEO problems."
      category="tools"
      lastUpdated="2025-01-10"
      readTime="8 min read"
      featuredImage={{
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        alt: "Screaming Frog SEO spider tool interface showing website crawl data and technical SEO analysis results"
      }}
      introduction="Screaming Frog SEO Spider is the industry-standard tool for technical SEO auditing. Used by SEO professionals worldwide, this desktop crawler mimics how search engines crawl websites, uncovering technical issues that could hurt your rankings. From finding broken links to identifying duplicate content, analyzing page titles to mapping site architecture, Screaming Frog provides the technical insights needed to optimize any website. This guide explores what Screaming Frog does, how to use it effectively, and why it's become essential for SEO professionals."
      tableOfContents={[
        { id: 'what-is-sf', title: 'What is Screaming Frog?' },
        { id: 'key-features', title: 'Key Features' },
        { id: 'common-uses', title: 'Common Use Cases' },
        { id: 'how-to-use', title: 'How to Use It' },
        { id: 'free-vs-paid', title: 'Free vs. Paid' },
        { id: 'tips', title: 'Pro Tips' }
      ]}
      contentSections={[
        {
          id: 'what-is-sf',
          title: 'What is Screaming Frog SEO Spider?',
          content: `**Screaming Frog SEO Spider** is a desktop application that crawls websites to analyze and audit technical SEO.

**How It Works:**
The tool visits your website page by page, similar to how Googlebot crawls sites. As it crawls, it collects data on every element it encounters—URLs, titles, meta descriptions, headers, images, links, and more.

**Key Characteristics:**
- Desktop application (Windows, Mac, Linux)
- Crawls locally on your computer
- Fast and efficient processing
- Highly configurable
- Exports to spreadsheets

**Why It's Industry Standard:**
- Used by agencies and in-house teams worldwide
- Trusted data accuracy
- Regular updates and improvements
- Extensive documentation
- Active user community

**Who Uses It:**
- SEO professionals and consultants
- Digital marketing agencies
- Web developers
- In-house marketing teams
- Site auditors`
        },
        {
          id: 'key-features',
          title: 'Key Features Overview',
          content: `Screaming Frog offers comprehensive crawling and analysis capabilities.

**Core Crawling:**
- Crawl websites of any size
- Follow robots.txt rules
- Render JavaScript pages
- Respect crawl delays
- Pause and resume crawls

**Technical Analysis:**
- Find broken links (4xx, 5xx errors)
- Identify redirect chains and loops
- Discover duplicate content
- Check robots.txt blocking
- Validate canonical tags

**On-Page Elements:**
- Analyze title tags (length, duplicates, missing)
- Review meta descriptions
- Check H1 and H2 headers
- Extract meta robots
- Find images without alt text

**Link Analysis:**
- Map internal linking structure
- Count links per page
- Identify orphan pages
- Analyze anchor text
- Find external links

**Advanced Features:**
- Custom extraction with XPath/regex
- Integration with Google Analytics/Search Console
- Scheduled crawling (paid)
- JavaScript rendering
- Custom robots.txt testing`
        },
        {
          id: 'common-uses',
          title: 'Common Use Cases',
          content: `Screaming Frog excels at various SEO tasks.

**Technical Site Audits:**
The primary use case—comprehensive website audits:
- Crawl entire site
- Identify all technical issues
- Prioritize fixes by severity
- Export findings for action

**Finding Broken Links:**
Quickly identify:
- Internal 404 errors
- External broken links
- Redirect chains
- Orphan pages

**Title and Meta Analysis:**
Audit on-page elements:
- Missing titles
- Duplicate titles
- Titles too long/short
- Missing meta descriptions
- Duplicate descriptions

**Content Analysis:**
Understand your content:
- Word counts per page
- Thin content identification
- Duplicate content detection
- Content categorization

**Site Migrations:**
Essential for migrations:
- Crawl old site for URL list
- Verify redirect mapping
- Validate new site structure
- Compare before/after

**Competitor Analysis:**
Analyze competitor sites:
- Understand their structure
- See their page count
- Analyze their content approach
- Identify their technical setup`
        },
        {
          id: 'how-to-use',
          title: 'How to Use Screaming Frog',
          content: `Getting started with Screaming Frog is straightforward.

**Step 1: Install and Launch**
- Download from screamingfrog.co.uk
- Install on your computer
- Launch the application

**Step 2: Enter URL**
- Type your website URL in the top bar
- Click "Start" to begin crawling
- Watch progress in the interface

**Step 3: Review Results**
Key tabs to check:
- **Internal**: All internal URLs found
- **Response Codes**: 200s, 301s, 404s, etc.
- **Page Titles**: Title tag analysis
- **Meta Description**: Description analysis
- **H1/H2**: Header analysis
- **Images**: Image analysis

**Step 4: Filter Issues**
Use filters to find problems:
- "Client Errors 4xx" for broken pages
- "Missing" for pages lacking elements
- "Duplicate" for repeated content
- "Over X Characters" for length issues

**Step 5: Export Data**
- Export individual tabs to CSV/Excel
- Create comprehensive reports
- Share with team members
- Track issues over time

**Configuration Options:**
Before crawling, consider:
- Crawl depth limits
- URL exclusions
- JavaScript rendering
- Crawl speed settings`
        },
        {
          id: 'free-vs-paid',
          title: 'Free vs. Paid Version',
          content: `Screaming Frog offers both free and paid options.

**Free Version Limitations:**
- 500 URL crawl limit
- No saved projects
- No scheduled crawling
- Limited configuration
- No integrations

**Paid Version Features ($259/year):**
- Unlimited URL crawling
- Save and reopen projects
- Schedule automated crawls
- JavaScript rendering
- Google Analytics integration
- Google Search Console integration
- Custom extraction
- Custom robots.txt testing
- Near duplicate detection
- Spelling and grammar checking

**Who Needs Paid:**
- Sites with more than 500 pages
- Agencies managing multiple sites
- Anyone needing scheduled audits
- Users requiring integrations
- Regular auditing workflows

**Who Can Use Free:**
- Small websites (<500 pages)
- One-time audits
- Learning the tool
- Basic technical checks
- Simple crawling needs

**ROI Consideration:**
At $259/year, Screaming Frog pays for itself if it helps you find even one significant issue. For professionals, it's an essential investment.`
        },
        {
          id: 'tips',
          title: 'Pro Tips for Screaming Frog',
          content: `Maximize your efficiency with these advanced tips.

**Before Crawling:**
- Set appropriate crawl speed (respect server limits)
- Configure URL exclusions (admin areas, filters)
- Enable JavaScript rendering for SPAs
- Set user-agent appropriately
- Adjust memory allocation for large sites

**During Crawling:**
- Monitor progress in bottom bar
- Watch for unusual patterns
- Pause if server issues occur
- Check robots.txt interpretation

**Analyzing Results:**
- Use filters liberally
- Export specific tabs for focused analysis
- Compare crawls over time
- Cross-reference with Search Console data

**Custom Extraction:**
Use XPath or regex to extract:
- Structured data
- Custom elements
- Specific content
- Schema markup
- Analytics IDs

**Integrations:**
Connect for richer data:
- Google Analytics (traffic data)
- Google Search Console (clicks, impressions)
- Ahrefs/Majestic (link metrics)
- PageSpeed Insights (speed data)

**Common Mistakes to Avoid:**
- Crawling at max speed (can crash sites)
- Ignoring JavaScript rendering
- Not excluding staging/test environments
- Forgetting to check external links
- Missing filter options for analysis

**Workflow Tips:**
- Create custom configurations for repeated tasks
- Save projects for comparison
- Document findings systematically
- Schedule regular audits`
        }
      ]}
      chartData={{
        type: 'pie',
        title: 'Most Common Issues Found by Screaming Frog',
        data: [
          { name: 'Broken Links', value: 25 },
          { name: 'Title Issues', value: 22 },
          { name: 'Meta Description', value: 18 },
          { name: 'Redirects', value: 15 },
          { name: 'Missing Alt Text', value: 12 },
          { name: 'Other', value: 8 }
        ]
      }}
      relatedQuestions={[
        { slug: 'how-to-do-a-site-audit', question: 'How do I do an SEO site audit?' },
        { slug: 'what-is-technical-seo', question: 'What is technical SEO?' },
        { slug: 'how-to-fix-duplicate-content', question: 'How do I fix duplicate content?' },
        { slug: 'best-seo-tools', question: 'What are the best SEO tools?' }
      ]}
      relatedTerms={[
        { slug: 'crawlability', term: 'Crawlability' },
        { slug: 'canonical-tags', term: 'Canonical Tags' },
        { slug: 'robots-txt', term: 'Robots.txt' },
        { slug: 'meta-title', term: 'Meta Title' }
      ]}
    />
  );
};

export default WhatIsScreamingFrog;