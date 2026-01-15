import QuestionPage from '@/components/QuestionPage';

const WhatIsLinkBuilding = () => (
  <QuestionPage
    slug="what-is-link-building"
    question="What is Link Building?"
    shortAnswer="Link building is the process of acquiring backlinks from other websites to improve your search engine rankings and domain authority."
    content={{
      introduction: `Link building is one of the most important—and challenging—aspects of SEO. It involves earning hyperlinks from other websites that point to your pages. These backlinks act as votes of confidence, signaling to search engines that your content is valuable, credible, and worth ranking.

Google's algorithm has always considered backlinks as a key ranking factor. While the algorithm has become more sophisticated over time, quality backlinks remain essential for achieving and maintaining high search rankings, especially in competitive industries.

Effective link building requires a strategic approach. The days of buying links or participating in link schemes are over—these tactics now result in penalties. Modern link building focuses on creating valuable content that naturally attracts links and building genuine relationships that lead to editorial links from quality sources.`,
      sections: [
        {
          id: 'why-links-matter',
          title: 'Why Links Matter for SEO',
          content: `Backlinks remain a crucial ranking factor for several reasons:

**Authority Signal:**
Links from reputable sites pass "authority" to your pages. A link from a trusted site like Forbes or a major university carries significant weight in Google's algorithm.

**Discovery:**
Links help search engines discover new pages. When Google follows links, it finds and indexes content it might otherwise miss.

**Relevance Signal:**
Links from related sites help Google understand what your content is about. A cooking site linked by food blogs signals relevance to food-related searches.

**What Makes a Quality Backlink:**
- **Relevance**: Link from a topically related site
- **Authority**: Link from a trusted, high-DR site
- **Editorial**: Link given naturally, not paid for
- **Placement**: Link within main content (not footer/sidebar)
- **Anchor text**: Descriptive text that's relevant to your page
- **Traffic**: Link from a page that gets real visitors

**Link Metrics to Understand:**
- Domain Rating/Authority (DR/DA): Site-wide authority score
- Page Authority: Specific page's authority
- Referring Domains: Number of unique sites linking to you
- Dofollow vs. Nofollow: Whether link passes ranking value`
        },
        {
          id: 'link-building-strategies',
          title: 'Link Building Strategies',
          content: `Effective strategies for earning quality backlinks:

**Content-Based Strategies:**
- **Original Research**: Studies and data others want to cite
- **Comprehensive Guides**: Ultimate resources others link to as references
- **Infographics**: Visual content that's easy to share and embed
- **Tools and Calculators**: Free resources that solve problems
- **Newsworthy Content**: Stories that attract media coverage

**Outreach-Based Strategies:**
- **Guest Posting**: Writing articles for other sites with a link back
- **Broken Link Building**: Finding broken links and offering your content as replacement
- **Resource Page Outreach**: Getting listed on curated resource pages
- **Expert Roundups**: Contributing quotes to be included in roundups
- **HARO/Journalist Queries**: Responding to journalist requests for sources

**Relationship-Based Strategies:**
- **Industry Networking**: Building relationships that lead to natural links
- **Partnerships**: Collaborating with complementary businesses
- **Interviews and Podcasts**: Being featured in interviews
- **Event Speaking**: Speaking at conferences for visibility

**PR and Media:**
- **Press Releases**: For genuinely newsworthy announcements
- **Media Outreach**: Pitching stories to journalists
- **Digital PR Campaigns**: Creative campaigns designed to earn coverage`
        },
        {
          id: 'link-building-best-practices',
          title: 'Link Building Best Practices',
          content: `Follow these principles for sustainable link building:

**Quality Over Quantity:**
- One link from a high-authority site beats 100 from low-quality sites
- Focus on relevance and editorial value
- Avoid link schemes and paid links

**Diversify Your Link Profile:**
- Mix of different domain types (news, blogs, businesses)
- Variety of anchor text (branded, natural, keyword)
- Links to different pages (not just homepage)
- Mix of dofollow and nofollow (natural)

**Avoid Black Hat Tactics:**
- Buying links (against Google guidelines)
- Link exchanges ("I'll link to you if you link to me")
- Private Blog Networks (PBNs)
- Automated link building
- Comment spam or forum spam

**Link Building Process:**
1. Create link-worthy content first
2. Identify target sites and contacts
3. Personalize outreach messages
4. Follow up professionally
5. Track results and refine approach

**Measuring Success:**
- New referring domains over time
- Domain Rating/Authority changes
- Rankings for target keywords
- Organic traffic growth
- Quality of links earned

**Red Flags to Avoid:**
- Sites with "write for us" pages and no traffic
- Links from irrelevant industries
- Sitewide links (every page linking to you)
- Links from sites with thin content
- Sudden spikes in link acquisition`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'why-links-matter', title: 'Why Links Matter' },
      { id: 'link-building-strategies', title: 'Strategies' },
      { id: 'link-building-best-practices', title: 'Best Practices' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Effective Link Building Tactics',
      data: [
        { name: 'Content Marketing', value: 28 },
        { name: 'Guest Posting', value: 22 },
        { name: 'Digital PR', value: 20 },
        { name: 'Outreach', value: 18 },
        { name: 'Networking', value: 12 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=800&h=400&fit=crop"
    imageAlt="Network of connected nodes representing link building and backlinks"
    relatedQuestions={[
      { slug: 'what-is-a-backlink', question: 'What is a backlink?' },
      { slug: 'what-is-domain-authority', question: 'What is domain authority?' },
      { slug: 'what-is-off-page-seo', question: 'What is off-page SEO?' }
    ]}
    relatedTerms={[
      { slug: 'link-building', term: 'Link Building' },
      { slug: 'backlinks', term: 'Backlinks' },
      { slug: 'domain-authority', term: 'Domain Authority' }
    ]}
  />
);

export default WhatIsLinkBuilding;
