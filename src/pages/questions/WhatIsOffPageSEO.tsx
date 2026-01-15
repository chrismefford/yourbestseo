import QuestionPage from '@/components/QuestionPage';

const WhatIsOffPageSEO = () => (
  <QuestionPage
    slug="what-is-off-page-seo"
    question="What is Off-Page SEO?"
    shortAnswer="Off-page SEO refers to optimization activities done outside your website to improve rankings, primarily through building backlinks, brand mentions, and social signals."
    content={{
      introduction: `Off-page SEO encompasses all the actions taken outside of your own website to impact your rankings within search engine results pages. While on-page SEO focuses on optimizing elements you control directly on your site, off-page SEO is about building your website's reputation, authority, and trustworthiness across the web.

The most significant off-page factor is backlinks—links from other websites pointing to yours. Search engines view backlinks as votes of confidence. When reputable websites link to your content, it signals to Google that your site is a trustworthy, valuable resource worth recommending to searchers.

However, off-page SEO extends beyond just link building. It includes brand building, social media marketing, influencer outreach, guest posting, and managing your online reputation. Essentially, off-page SEO is about demonstrating to search engines that your website is popular, relevant, and authoritative within your industry.`,
      sections: [
        {
          id: 'link-building-strategies',
          title: 'Link Building Strategies',
          content: `Link building remains the cornerstone of off-page SEO. Here are effective strategies for earning quality backlinks:

**Content Marketing**: Create exceptional content that naturally attracts links. This includes original research, comprehensive guides, infographics, and tools that others want to reference.

**Guest Blogging**: Write valuable articles for other websites in your industry. In exchange, you typically receive a link back to your site in your author bio or within the content.

**Broken Link Building**: Find broken links on relevant websites and suggest your content as a replacement. This provides value to the site owner while earning you a link.

**Resource Page Link Building**: Identify pages that curate resources in your industry and pitch your content for inclusion.

**HARO (Help A Reporter Out)**: Respond to journalist queries to get quoted and linked in news articles and publications.

**Digital PR**: Create newsworthy content or campaigns that media outlets want to cover and link to.

**Competitor Link Analysis**: Study where competitors get their links and pursue similar opportunities.

**Quality Over Quantity**: One link from a high-authority, relevant website is worth more than dozens of links from low-quality sites. Focus on earning links from trusted sources in your industry.`
        },
        {
          id: 'brand-signals',
          title: 'Brand Signals and Mentions',
          content: `Beyond links, search engines consider various brand signals when evaluating your site's authority:

**Brand Mentions**: Even unlinked mentions of your brand name can impact SEO. Google can associate these mentions with your website and view them as indicators of authority and popularity.

**Social Signals**: While social media links are typically nofollow and don't directly pass SEO value, strong social engagement can indirectly boost rankings by increasing visibility and earning natural backlinks.

**Online Reviews**: Reviews on Google Business Profile, Yelp, and industry-specific platforms influence local SEO and overall brand perception.

**Brand Searches**: When people search directly for your brand name, it signals to Google that you're a recognized entity worth ranking for related queries.

**Building Brand Authority:**
- Maintain consistent NAP (Name, Address, Phone) across all platforms
- Engage actively on social media with valuable content
- Participate in industry forums and communities
- Respond professionally to reviews and comments
- Speak at conferences and webinars in your industry
- Publish thought leadership content
- Collaborate with industry influencers`
        },
        {
          id: 'off-page-best-practices',
          title: 'Off-Page SEO Best Practices',
          content: `Successful off-page SEO requires a strategic, ethical approach:

**Focus on Relevance**: Prioritize links and mentions from websites in your industry or related fields. A link from a relevant site carries more weight than one from an unrelated source.

**Build Relationships**: Genuine relationships with bloggers, journalists, and industry peers lead to natural link opportunities over time.

**Diversify Your Link Profile**: A healthy backlink profile includes various types of links—editorial, guest posts, resources, press mentions—from different domains.

**Avoid Black Hat Tactics**: Never buy links, participate in link schemes, or use private blog networks (PBNs). These tactics can result in severe Google penalties.

**Monitor Your Backlinks**: Regularly audit your backlink profile using tools like Ahrefs or Moz. Disavow toxic links that could harm your rankings.

**Be Patient**: Building genuine authority takes time. Focus on sustainable strategies rather than quick wins that might backfire.

**Off-Page SEO Metrics to Track:**
- Domain Authority/Domain Rating
- Number of referring domains
- Quality and relevance of backlinks
- Brand mention volume
- Social engagement metrics
- Referral traffic from backlinks
- Review quantity and ratings`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'link-building-strategies', title: 'Link Building' },
      { id: 'brand-signals', title: 'Brand Signals' },
      { id: 'off-page-best-practices', title: 'Best Practices' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Off-Page SEO Ranking Factors',
      data: [
        { name: 'Backlink Quality', value: 35 },
        { name: 'Backlink Quantity', value: 20 },
        { name: 'Brand Signals', value: 18 },
        { name: 'Social Signals', value: 12 },
        { name: 'Online Reviews', value: 10 },
        { name: 'Other Factors', value: 5 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=800&h=400&fit=crop"
    imageAlt="Network connections representing off-page SEO link building and brand authority"
    relatedQuestions={[
      { slug: 'what-is-a-backlink', question: 'What is a backlink?' },
      { slug: 'what-is-domain-authority', question: 'What is Domain Authority?' },
      { slug: 'what-is-seo', question: 'What is SEO?' }
    ]}
    relatedTerms={[
      { slug: 'backlinks', term: 'Backlinks' },
      { slug: 'link-building', term: 'Link Building' },
      { slug: 'domain-authority', term: 'Domain Authority' }
    ]}
  />
);

export default WhatIsOffPageSEO;
