import QuestionPage from '@/components/QuestionPage';

const WhatIsABacklink = () => (
  <QuestionPage
    slug="what-is-a-backlink"
    question="What is a backlink?"
    shortAnswer="A backlink is a link from another website that points to your website. Backlinks act as votes of confidence, signaling to search engines that your content is valuable and trustworthy, which helps improve your search rankings."
    content={{
      introduction: `Backlinks are one of the most important ranking factors in SEO. When another website links to yours, it's essentially telling search engines, "This content is valuable enough to reference." The more quality backlinks you have, the more authoritative your site appears to Google.

Think of backlinks like academic citations. Just as a research paper gains credibility when cited by other respected publications, your website gains authority when linked to by reputable sites. However, not all backlinks are created equal—quality matters far more than quantity.

Google's original algorithm, PageRank, was built on the concept that links between pages represent votes of confidence. While the algorithm has evolved dramatically, backlinks remain a core ranking factor. Understanding how to earn quality backlinks is essential for SEO success.`,
      sections: [
        {
          id: 'types-of-backlinks',
          title: 'Types of Backlinks',
          content: `Different types of backlinks carry different value:

**Editorial Backlinks**
Links earned because someone found your content valuable and chose to reference it. These are the most valuable type.

**Guest Post Links**
Links from content you contribute to other websites. Valuable when from relevant, quality sites.

**Directory Links**
Links from business directories like Yelp, industry associations, or local chambers of commerce.

**Comment/Forum Links**
Links from blog comments or forum posts. Generally low value and often nofollow.

**Social Profile Links**
Links from social media profiles. Typically nofollow but help with brand visibility.

**Press/Media Links**
Links from news articles and press coverage. High value when from authoritative publications.

**Resource Page Links**
Links from curated lists of helpful resources in your industry.`
        },
        {
          id: 'quality-factors',
          title: 'What Makes a Quality Backlink?',
          content: `Evaluate backlink quality using these factors:

**Domain Authority**
Links from high-authority websites (like major publications) carry more weight than links from new or low-quality sites.

**Relevance**
Links from websites in your industry or related topics are more valuable than random unrelated sites.

**Anchor Text**
The clickable text of the link provides context. Relevant anchor text helps, but over-optimized anchors can look spammy.

**Link Placement**
Links within main content (editorial) are more valuable than footer or sidebar links.

**Dofollow vs. Nofollow**
Dofollow links pass SEO value. Nofollow links tell search engines not to count the link for ranking purposes.

**Traffic/Engagement**
Links from pages that actually receive traffic can send referral visitors in addition to SEO value.

**Uniqueness**
A link from a site that doesn't link to everyone is more valuable than one from a site that links freely.`
        },
        {
          id: 'building-backlinks',
          title: 'How to Build Quality Backlinks',
          content: `Earning backlinks requires strategy and effort:

**Create Link-Worthy Content**
Produce content so valuable that others want to reference it—original research, comprehensive guides, useful tools, or unique insights.

**Guest Posting**
Contribute quality articles to relevant industry publications that allow author bios with links.

**Digital PR**
Get featured in news articles and publications through newsworthy announcements, expert commentary, or unique data.

**Broken Link Building**
Find broken links on other sites and suggest your content as a replacement.

**Resource Link Building**
Create comprehensive resources and reach out to sites with resource pages in your industry.

**Competitor Analysis**
See where competitors get backlinks and pursue similar opportunities.

**Relationship Building**
Network with industry peers, influencers, and publications who may naturally link to your content.`
        },
        {
          id: 'avoiding-bad-links',
          title: 'Backlinks to Avoid',
          content: `Some backlinks can hurt rather than help your rankings:

**Paid Links**
Buying links violates Google's guidelines and can result in penalties.

**Link Farms/PBNs**
Networks of low-quality sites created solely for linking. Google identifies and penalizes these.

**Irrelevant Links**
Links from completely unrelated websites look unnatural and provide little value.

**Spammy Directories**
Low-quality directories that accept any submission.

**Excessive Reciprocal Links**
Trading links with other sites purely for SEO benefit.

**Automated Link Building**
Software that creates links automatically through comments or profiles.

**What to Do About Bad Links**
If you have toxic backlinks (from previous SEO efforts or negative SEO attacks), use Google's Disavow Tool to tell Google to ignore them.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'types-of-backlinks', title: 'Types of Backlinks' },
      { id: 'quality-factors', title: 'Quality Factors' },
      { id: 'building-backlinks', title: 'Building Backlinks' },
      { id: 'avoiding-bad-links', title: 'Links to Avoid' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Backlink Value by Source Type',
      data: [
        { name: 'Editorial', value: 95 },
        { name: 'Guest Post', value: 75 },
        { name: 'Resource Page', value: 70 },
        { name: 'Directory', value: 40 },
        { name: 'Comment', value: 10 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
    imageAlt="Backlinks network visualization showing link building connections between websites for SEO authority"
    relatedQuestions={[
      { slug: 'what-is-link-building', question: 'What is link building?' },
      { slug: 'what-is-domain-authority', question: 'What is domain authority?' },
      { slug: 'what-is-white-hat-seo', question: 'What is white hat SEO?' }
    ]}
    relatedTerms={[
      { slug: 'backlinks', term: 'Backlinks' },
      { slug: 'link-building', term: 'Link Building' },
      { slug: 'domain-authority', term: 'Domain Authority' }
    ]}
  />
);

export default WhatIsABacklink;
