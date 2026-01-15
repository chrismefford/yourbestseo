import QuestionPage from '@/components/QuestionPage';

const WhatAreKeywords = () => (
  <QuestionPage
    slug="what-are-keywords"
    question="What are keywords in SEO?"
    shortAnswer="Keywords are the words and phrases people type into search engines when looking for information, products, or services. In SEO, keywords are the terms you optimize your content for to attract relevant traffic from search engines."
    content={{
      introduction: `Keywords are the foundation of SEO. They represent the bridge between what people are searching for and the content you provide to fill that need. Understanding keywords—what they are, how to find them, and how to use them—is essential for any successful SEO strategy.

When users search on Google, they enter keywords (also called search queries). Search engines then analyze billions of web pages to find the most relevant results for those keywords. Your goal in SEO is to ensure your pages appear prominently when users search for keywords relevant to your business.

Keywords have evolved significantly since the early days of SEO. It's no longer about stuffing exact phrases into your content. Modern SEO focuses on understanding the intent behind keywords and creating content that genuinely serves user needs.`,
      sections: [
        {
          id: 'types-of-keywords',
          title: 'Types of Keywords',
          content: `Keywords come in different varieties, each with unique characteristics:

**Head Terms (Short-Tail Keywords)**
One to two words with high search volume but intense competition.
Example: "shoes" (millions of searches, extremely competitive)

**Long-Tail Keywords**
Three or more words with lower volume but higher intent and easier ranking.
Example: "women's waterproof hiking boots size 8" (specific, lower competition)

**Branded Keywords**
Include your brand name or competitor brands.
Example: "Nike running shoes" or "Your Best SEO reviews"

**Commercial Keywords**
Indicate purchase research or comparison.
Example: "best SEO agency San Diego" or "SEO services pricing"

**Transactional Keywords**
Show clear purchase intent.
Example: "buy SEO package" or "hire SEO consultant"

**Informational Keywords**
Seek knowledge or answers.
Example: "what is SEO" or "how to improve Google rankings"`
        },
        {
          id: 'finding-keywords',
          title: 'How to Find Keywords',
          content: `Discovering the right keywords requires research and analysis:

**Brainstorm Seed Keywords**
Start with terms related to your business. What would you search for to find your products or services?

**Use Keyword Research Tools**
- Google Keyword Planner (free with Google Ads account)
- Ahrefs Keywords Explorer
- Semrush Keyword Magic Tool
- Ubersuggest
- Moz Keyword Explorer

**Analyze Competitors**
See what keywords competitors rank for using SEO tools. This reveals opportunities you may have missed.

**Check Google Features**
- Autocomplete suggestions
- "People Also Ask" boxes
- Related searches at page bottom
- Google Trends for trending topics

**Mine Search Console**
See what keywords already bring impressions to your site. Optimize for terms where you're close to ranking well.`
        },
        {
          id: 'using-keywords',
          title: 'How to Use Keywords Effectively',
          content: `Strategic keyword usage helps search engines understand your content:

**Strategic Placement**
Include primary keywords in:
- Page title (title tag)
- H1 heading
- First 100 words of content
- Meta description
- URL slug
- Image alt text

**Natural Integration**
Write for humans first. Keywords should fit naturally into your content without awkward phrasing.

**Semantic Variations**
Use related terms and synonyms. Google understands context, so varying your language actually helps.

**One Primary Keyword Per Page**
Each page should target one main keyword, supported by related secondary terms.

**Avoid Keyword Stuffing**
Overusing keywords hurts rankings and user experience. There's no magic keyword density—write naturally.

**Match Search Intent**
Ensure your content matches what users expect to find when searching that keyword.`
        },
        {
          id: 'keyword-metrics',
          title: 'Keyword Metrics to Consider',
          content: `Evaluate keywords using these key metrics:

**Search Volume**
How many people search for this term monthly. Higher isn't always better—consider competition and intent.

**Keyword Difficulty**
How hard it is to rank for this term based on competition. Tools like Ahrefs and Semrush provide difficulty scores.

**Click-Through Potential**
Some searches result in zero clicks (Google answers directly). Check if organic results actually get clicks.

**Cost Per Click (CPC)**
What advertisers pay per click indicates commercial value. Higher CPC often means more valuable traffic.

**Relevance**
Does this keyword match what you offer? Irrelevant traffic doesn't convert.

**Current Rankings**
Are you already ranking for this term? It's easier to improve from position 15 to position 5 than from nothing to position 1.`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'types-of-keywords', title: 'Types of Keywords' },
      { id: 'finding-keywords', title: 'Finding Keywords' },
      { id: 'using-keywords', title: 'Using Keywords' },
      { id: 'keyword-metrics', title: 'Keyword Metrics' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Keyword Types: Volume vs. Conversion Rate',
      data: [
        { name: 'Head Terms', value: 85 },
        { name: 'Body Keywords', value: 65 },
        { name: 'Long-Tail', value: 35 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
    imageAlt="Keywords research and SEO keyword analysis tools showing search term discovery and optimization strategy"
    relatedQuestions={[
      { slug: 'what-is-keyword-research', question: 'What is keyword research?' },
      { slug: 'what-are-long-tail-keywords', question: 'What are long-tail keywords?' },
      { slug: 'what-is-search-intent', question: 'What is search intent?' }
    ]}
    relatedTerms={[
      { slug: 'keyword-research', term: 'Keyword Research' },
      { slug: 'long-tail-keywords', term: 'Long-Tail Keywords' },
      { slug: 'keyword-difficulty', term: 'Keyword Difficulty' }
    ]}
  />
);

export default WhatAreKeywords;
