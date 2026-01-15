import QuestionPage from '@/components/QuestionPage';

const HowToDoCompetitorAnalysis = () => (
  <QuestionPage
    slug="how-to-do-competitor-analysis"
    question="How Do I Do SEO Competitor Analysis?"
    shortAnswer="Analyze competitors' keywords, backlinks, content, and rankings to identify opportunities and gaps you can exploit in your own SEO strategy."
    content={{
      introduction: `SEO competitor analysis is the process of researching and evaluating your competitors' search engine optimization strategies to inform and improve your own. By understanding what works for websites ranking above you, you can identify opportunities, avoid their mistakes, and develop strategies to outperform them.

Effective competitor analysis goes beyond simply seeing where competitors rank. It involves understanding why they rank—what content they've created, what backlinks they've earned, how their sites are structured, and what keywords they target. This intelligence helps you make strategic decisions about where to focus your SEO efforts.

Regular competitor analysis should be part of your ongoing SEO strategy. The search landscape constantly evolves, and staying aware of competitor movements helps you adapt and maintain your competitive position.`,
      sections: [
        {
          id: 'identifying-competitors',
          title: 'Identifying Your SEO Competitors',
          content: `Your SEO competitors may differ from your business competitors:

**Types of SEO Competitors:**
- **Direct competitors**: Businesses offering similar products/services
- **SERP competitors**: Any site ranking for your target keywords
- **Content competitors**: Sites creating content for your audience

**How to Find SEO Competitors:**
1. Search your main keywords and note who ranks
2. Use SEMrush/Ahrefs competitive analysis tools
3. Check who ranks for multiple keywords you target
4. Look for sites appearing across different query types

**Prioritizing Competitors to Analyze:**
- Focus on sites ranking in top 10 for your key terms
- Include a mix of direct and content competitors
- Analyze 3-5 main competitors in depth
- Monitor 10-15 competitors more broadly

**What to Note About Each Competitor:**
- Domain authority/rating
- Estimated organic traffic
- Number of ranking keywords
- Content volume and quality
- Backlink profile size
- Site age and history`
        },
        {
          id: 'keyword-analysis',
          title: 'Competitor Keyword Analysis',
          content: `Understanding competitor keywords reveals opportunities:

**Finding Competitor Keywords:**
- Use SEMrush, Ahrefs, or Moz to see rankings
- Export their full keyword list
- Filter by position (top 10, top 20, etc.)
- Note search volume and difficulty

**Keyword Gap Analysis:**
Identify keywords competitors rank for that you don't:
1. Enter your domain and competitors in gap tool
2. Find keywords where you're missing entirely
3. Find keywords where competitors rank higher
4. Prioritize by volume and difficulty

**Types of Keyword Opportunities:**
- Keywords you don't target at all
- Keywords where you rank lower
- Long-tail variations you're missing
- Question-based keywords
- Local keyword variations

**Analyzing Keyword Intent:**
- What content type ranks for each keyword?
- Is intent informational or transactional?
- What content format does Google prefer?

**Keyword Difficulty Assessment:**
- How strong are ranking pages?
- What domain authority is needed?
- Is this keyword realistic for your site?`
        },
        {
          id: 'content-backlink-analysis',
          title: 'Content and Backlink Analysis',
          content: `Analyze what content earns rankings and links:

**Content Analysis:**
- What topics do competitors cover?
- How comprehensive is their content?
- What formats do they use (guides, lists, tools)?
- How often do they publish?
- What content earns the most traffic?

**Content Gap Identification:**
- Topics you haven't covered
- Subtopics within your existing content
- Content formats you're not using
- Angles or perspectives you haven't taken

**Backlink Analysis:**
Use Ahrefs, Moz, or SEMrush to examine:
- Total number of backlinks and referring domains
- Quality of linking sites
- Anchor text distribution
- Which pages earn the most links
- Types of content that attract links

**Link Gap Analysis:**
Find sites linking to competitors but not you:
1. Run link intersect analysis
2. Identify high-quality opportunities
3. Note what content earned those links
4. Plan outreach or content to earn similar links

**Technical Analysis:**
- Site speed comparison
- Mobile experience
- Site structure and navigation
- Schema markup implementation
- Core Web Vitals performance

**Creating Your Action Plan:**
1. Prioritize quick wins (low-hanging fruit)
2. Plan content to close keyword gaps
3. List link opportunities to pursue
4. Identify technical improvements needed
5. Set timeline and track progress`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'identifying-competitors', title: 'Finding Competitors' },
      { id: 'keyword-analysis', title: 'Keyword Analysis' },
      { id: 'content-backlink-analysis', title: 'Content & Links' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Competitor Analysis Focus Areas',
      data: [
        { name: 'Keyword Gaps', value: 30 },
        { name: 'Content Strategy', value: 25 },
        { name: 'Backlink Profile', value: 22 },
        { name: 'Technical SEO', value: 13 },
        { name: 'User Experience', value: 10 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    imageAlt="Analytics dashboard comparing competitor SEO performance metrics"
    relatedQuestions={[
      { slug: 'what-is-keyword-research', question: 'What is keyword research?' },
      { slug: 'what-is-link-building', question: 'What is link building?' },
      { slug: 'what-is-domain-authority', question: 'What is domain authority?' }
    ]}
    relatedTerms={[
      { slug: 'keyword-research', term: 'Keyword Research' },
      { slug: 'backlinks', term: 'Backlinks' },
      { slug: 'domain-authority', term: 'Domain Authority' }
    ]}
  />
);

export default HowToDoCompetitorAnalysis;
