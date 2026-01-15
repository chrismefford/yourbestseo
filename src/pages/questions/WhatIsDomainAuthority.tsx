import QuestionPage from '@/components/QuestionPage';

const WhatIsDomainAuthority = () => (
  <QuestionPage
    slug="what-is-domain-authority"
    question="What is domain authority?"
    shortAnswer="Domain Authority (DA) is a score developed by Moz that predicts how well a website will rank in search results. It ranges from 1-100, with higher scores indicating greater ranking potential. It's based primarily on backlink quality and quantity."
    content={{
      introduction: `Domain Authority is one of the most widely used metrics in SEO for evaluating website strength. Created by Moz, DA provides a comparative score that helps predict a site's ranking ability relative to other websites.

It's important to understand that Domain Authority is not a Google metric—it's a third-party calculation designed to approximate how Google might view site authority. Google doesn't use DA in their algorithm, but DA correlates reasonably well with ranking performance because it measures similar signals (primarily backlinks).

DA is most useful for comparing websites against each other rather than as an absolute measure. A DA of 30 might be excellent in a niche industry but mediocre in a competitive market. Context matters when interpreting domain authority scores.`,
      sections: [
        {
          id: 'how-da-works',
          title: 'How Domain Authority Works',
          content: `Understanding DA calculation helps you use it effectively:

**Scoring System**
DA is scored on a logarithmic scale from 1 to 100. This means it's easier to grow from 20 to 30 than from 70 to 80.

**Primary Factors**
- Linking root domains (number of unique sites linking to you)
- Total number of backlinks
- Quality of linking domains
- Link equity passed through those links

**Regular Updates**
Moz updates DA regularly, so scores can fluctuate even if your backlink profile hasn't changed dramatically.

**Similar Metrics**
- Ahrefs Domain Rating (DR)
- Semrush Authority Score
- Majestic Trust Flow

Each tool has its own methodology, so scores differ between platforms. Stick to one tool for consistency.`
        },
        {
          id: 'interpreting-da',
          title: 'Interpreting Domain Authority Scores',
          content: `Context is crucial when evaluating DA:

**General Score Ranges**
- 1-20: New or very small sites
- 21-40: Small to medium sites with some authority
- 41-60: Established sites with moderate authority
- 61-80: Well-established, authoritative sites
- 81-100: Major brands and highly authoritative sites

**Industry Context**
Compare your DA to competitors in your specific industry. A DA of 35 might be strong in local plumbing but weak in national e-commerce.

**Competition Assessment**
When targeting keywords, compare your DA to sites currently ranking. If all top results have DA 60+ and you're at 25, that keyword may be too competitive initially.

**Growth Expectations**
New sites typically start around DA 1-10 and can grow to 20-30 within the first year with consistent link building. Reaching 50+ takes years of sustained effort.`
        },
        {
          id: 'improving-da',
          title: 'How to Improve Domain Authority',
          content: `Building DA requires earning quality backlinks:

**Create Link-Worthy Content**
Produce content that others want to reference—original research, comprehensive guides, tools, or unique perspectives.

**Pursue Quality Over Quantity**
One link from a high-authority site beats dozens from low-quality directories.

**Build Relationships**
Network with industry peers, journalists, and influencers who can link to your content.

**Guest Posting**
Contribute valuable content to reputable publications in your industry.

**Digital PR**
Get featured in news articles and publications through newsworthy stories.

**Fix Technical Issues**
Ensure your site is crawlable and that existing link equity flows properly through your site.

**Be Patient**
DA growth is gradual. Focus on consistent effort rather than quick fixes.`
        },
        {
          id: 'da-limitations',
          title: 'Limitations of Domain Authority',
          content: `Keep these limitations in mind:

**Not a Google Metric**
Google doesn't use DA. It's an approximation, not an actual ranking factor.

**Can Be Manipulated**
Low-quality link schemes can temporarily inflate DA, which is why quality matters more than the number itself.

**Doesn't Equal Rankings**
High DA doesn't guarantee rankings. Page-level factors, content quality, and relevance matter too.

**Relative, Not Absolute**
DA is meaningful only in comparison. A score alone tells you little without context.

**Ignores Many Factors**
Content quality, technical SEO, user experience, and relevance aren't reflected in DA.

**Updates Cause Fluctuations**
Algorithm updates can change your score without any action on your part.

**Use as One Data Point**
DA should be part of your analysis, not the only metric you consider.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'how-da-works', title: 'How DA Works' },
      { id: 'interpreting-da', title: 'Interpreting Scores' },
      { id: 'improving-da', title: 'Improving DA' },
      { id: 'da-limitations', title: 'Limitations' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Domain Authority Score Distribution',
      data: [
        { name: 'New Sites (1-20)', value: 40 },
        { name: 'Growing (21-40)', value: 30 },
        { name: 'Established (41-60)', value: 20 },
        { name: 'Authority (61+)', value: 10 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    imageAlt="Domain authority metrics dashboard showing website authority scores and backlink analysis for SEO"
    relatedQuestions={[
      { slug: 'what-is-a-backlink', question: 'What is a backlink?' },
      { slug: 'what-is-link-building', question: 'What is link building?' },
      { slug: 'how-long-does-seo-take', question: 'How long does SEO take?' }
    ]}
    relatedTerms={[
      { slug: 'domain-authority', term: 'Domain Authority' },
      { slug: 'page-authority', term: 'Page Authority' },
      { slug: 'backlinks', term: 'Backlinks' }
    ]}
  />
);

export default WhatIsDomainAuthority;
