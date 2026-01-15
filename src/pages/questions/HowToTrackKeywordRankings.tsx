import QuestionPage from '@/components/QuestionPage';

const HowToTrackKeywordRankings = () => (
  <QuestionPage
    slug="how-to-track-keyword-rankings"
    question="How do I track keyword rankings?"
    shortAnswer="Track keyword rankings with Google Search Console (free) for real Google data, plus rank tracking tools like Ahrefs or Semrush for daily position monitoring, competitor comparisons, and location/device-specific tracking."
    content={{
      introduction: `Tracking keyword rankings helps you measure SEO progress, spot opportunities, and diagnose problems early. While rankings aren’t the only metric that matters, they’re a helpful leading indicator—especially when combined with traffic and conversion data.

This guide explains what to track, which tools to use, and how to interpret ranking changes without getting distracted by daily fluctuations.`,
      sections: [
        {
          id: 'why-track',
          title: 'Why Track Rankings?',
          content: `Rank tracking helps you:

- Verify your SEO work is improving visibility
- Identify “striking distance” keywords (positions 11–20)
- Monitor impacts from site changes and algorithm updates
- Compare performance against competitors
- Report progress to stakeholders

Focus on trends over time, not single-day swings.`
        },
        {
          id: 'tools',
          title: 'Rank Tracking Tools',
          content: `**Free:**
- Google Search Console (average position, clicks, impressions)

**Paid suites:**
- Ahrefs / Semrush (rank tracking + competitors)

**Dedicated rank trackers:**
- AccuRanker, Nightwatch, SERPWatcher

Use Search Console for the most trustworthy first-party data, and a paid tool when you need daily tracking and competitor visibility.`
        },
        {
          id: 'gsc-method',
          title: 'Using Google Search Console',
          content: `In Search Console → Performance:
- Enable **Average position**
- Review queries and pages
- Compare date ranges to find movement

Remember: it’s an **average** position, so it can hide variability across location and personalization.`
        },
        {
          id: 'what-to-track',
          title: 'What to Track',
          content: `Prioritize:
- Core service/product keywords
- Branded terms
- Top landing pages and their queries
- Keywords near page 1
- Local variants if you serve specific areas

Group keywords by topic and intent so you can spot patterns.`
        },
        {
          id: 'frequency',
          title: 'How Often to Track',
          content: `Typical cadence:
- **Daily:** during launches, migrations, or major updates
- **Weekly:** standard monitoring
- **Monthly:** reporting + strategy adjustments

Avoid manual daily checking; automated reports and alerts are better.`
        },
        {
          id: 'interpreting',
          title: 'Interpreting Ranking Changes',
          content: `Small changes (±1–3 positions) are normal.

Investigate when:
- Multiple keywords drop together
- High-traffic pages move from page 1 to page 2
- Drops persist for 2+ weeks

Cross-check:
- Indexing issues
- Site changes
- Competitor gains
- Algorithm updates
- Page experience / speed issues` 
        },
        {
          id: 'best-practices',
          title: 'Best Practices',
          content: `- Track mobile and desktop separately
- Use location tracking for local SEO
- Watch SERP features (snippets, local pack)
- Connect ranking movement to traffic and conversions
- Keep notes on site changes and updates so you can explain swings

Rankings are a means to an end—traffic and revenue matter most.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'why-track', title: 'Why Track Rankings?' },
      { id: 'tools', title: 'Rank Tracking Tools' },
      { id: 'gsc-method', title: 'Google Search Console Method' },
      { id: 'what-to-track', title: 'What to Track' },
      { id: 'frequency', title: 'Tracking Frequency' },
      { id: 'interpreting', title: 'Interpreting Data' },
      { id: 'best-practices', title: 'Best Practices' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Typical CTR by Organic Position',
      data: [
        { name: 'Position 1', value: 28 },
        { name: 'Position 2', value: 15 },
        { name: 'Position 3', value: 11 },
        { name: 'Position 4-5', value: 8 },
        { name: 'Position 6-10', value: 4 },
        { name: 'Page 2', value: 1 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
    imageAlt="Keyword ranking tracker dashboard showing search position changes and SEO performance metrics over time"
    relatedQuestions={[
      { slug: 'what-is-google-search-console', question: 'What is Google Search Console?' },
      { slug: 'best-seo-tools', question: 'What are the best SEO tools?' },
      { slug: 'what-is-seo-roi', question: 'What is the ROI of SEO?' },
      { slug: 'how-long-does-seo-take', question: 'How long does SEO take?' }
    ]}
    relatedTerms={[
      { slug: 'serp', term: 'SERP' },
      { slug: 'click-through-rate', term: 'Click-Through Rate' },
      { slug: 'impressions', term: 'Impressions' },
      { slug: 'keyword-research', term: 'Keyword Research' }
    ]}
  />
);

export default HowToTrackKeywordRankings;
