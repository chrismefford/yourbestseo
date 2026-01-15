import QuestionPage from '@/components/QuestionPage';

const WhatIsContentFreshness = () => (
  <QuestionPage
    slug="what-is-content-freshness"
    question="What is Content Freshness?"
    shortAnswer="Content freshness refers to how recently content was updated—important for time-sensitive topics where Google prioritizes current, up-to-date information."
    content={{
      introduction: `Content freshness is a concept in SEO that refers to how recently a piece of content was created or updated. Google considers freshness as a ranking factor for certain types of queries, particularly those where up-to-date information is important to the searcher.

Not all searches require fresh content. If you're searching for "how photosynthesis works," the answer hasn't changed in decades. But for queries like "best smartphones 2024" or "election results," freshness is crucial—users want the latest information, and Google aims to deliver it.

Understanding when freshness matters—and when it doesn't—helps you prioritize your content strategy. For some topics, creating new content regularly is essential. For others, updating existing comprehensive content is more effective than publishing something new.`,
      sections: [
        {
          id: 'when-freshness-matters',
          title: 'When Content Freshness Matters',
          content: `Freshness is a ranking factor for specific types of queries:

**Query Deserves Freshness (QDF):**
Google's algorithm identifies queries that benefit from fresh content:
- Breaking news and current events
- Recurring events (elections, sports, awards)
- Trending topics and viral content
- Product releases and updates
- Time-sensitive information

**Types of Fresh-Sensitive Content:**
- News articles and current events
- "Best of [year]" lists and roundups
- Product reviews and comparisons
- Industry statistics and data
- Event coverage and recaps
- Price and availability information

**When Freshness Doesn't Matter:**
- Evergreen educational content
- Historical information
- How-to guides for stable processes
- Definition pages and glossaries
- Reference content

**Signals Google Uses for Freshness:**
- Publication date
- Last modified date
- Amount of new content added
- Rate of new page creation
- Changes to core page content
- New backlinks and mentions`
        },
        {
          id: 'freshness-strategies',
          title: 'Content Freshness Strategies',
          content: `Different approaches to maintaining fresh content:

**1. Regular Updates:**
- Refresh existing content with new information
- Update statistics and data annually
- Add new sections as topics evolve
- Remove outdated information
- Update publication dates when significant changes are made

**2. New Content Creation:**
- Create timely content for trending topics
- Publish annual guides and roundups
- Cover industry news and developments
- Create event-based content

**3. Content Calendar Planning:**
- Schedule regular content audits
- Plan updates for time-sensitive content
- Prepare seasonal content in advance
- Monitor topics for update triggers

**What to Update:**
- Statistics and data (annually at minimum)
- Product recommendations and reviews
- Screenshots and visual examples
- Links to external sources
- Prices and availability
- Best practices that have evolved

**Update Best Practices:**
- Don't change dates without substantial updates
- Make meaningful improvements, not superficial changes
- Update comprehensively rather than piecemeal
- Add new value with each update
- Maintain URL structure when possible`
        },
        {
          id: 'measuring-impact',
          title: 'Measuring Freshness Impact',
          content: `Track how freshness affects your content performance:

**Metrics to Monitor:**
- Rankings before and after updates
- Organic traffic changes post-update
- Click-through rate improvements
- Time on page and engagement
- Backlinks attracted by updated content

**Content Audit Process:**
1. Identify pages that could benefit from updates
2. Prioritize by traffic potential and effort required
3. Research what's changed in the topic
4. Make comprehensive updates
5. Track performance for 4-8 weeks

**Signs Content Needs Updating:**
- Traffic declining over time
- Rankings dropping for target keywords
- Outdated statistics or examples
- Broken links or missing images
- Competitors have fresher content
- User comments mentioning outdated info

**Tools for Freshness Management:**
- Google Search Console (performance trends)
- Content audit spreadsheets
- Screaming Frog (last modified dates)
- Ahrefs/SEMrush (content gap analysis)

**Freshness Mistakes to Avoid:**
- Updating dates without changing content
- Making trivial changes to appear fresh
- Ignoring evergreen content that's performing well
- Over-publishing new content instead of updating
- Deleting and republishing (loses link equity)`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'when-freshness-matters', title: 'When It Matters' },
      { id: 'freshness-strategies', title: 'Strategies' },
      { id: 'measuring-impact', title: 'Measuring Impact' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Content Types Requiring Freshness',
      data: [
        { name: 'News/Current Events', value: 30 },
        { name: 'Product Reviews', value: 25 },
        { name: 'Statistics/Data', value: 20 },
        { name: 'Annual Guides', value: 15 },
        { name: 'Trending Topics', value: 10 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&h=400&fit=crop"
    imageAlt="Clock and calendar representing content freshness and timely updates"
    relatedQuestions={[
      { slug: 'how-often-should-i-publish-content', question: 'How often should I publish?' },
      { slug: 'how-to-write-seo-content', question: 'How to write SEO content?' },
      { slug: 'what-is-seo', question: 'What is SEO?' }
    ]}
    relatedTerms={[
      { slug: 'content-freshness', term: 'Content Freshness' },
      { slug: 'content-pruning', term: 'Content Pruning' },
      { slug: 'eeat', term: 'E-E-A-T' }
    ]}
  />
);

export default WhatIsContentFreshness;
