import QuestionPage from '@/components/QuestionPage';

const WhatIsASERP = () => (
  <QuestionPage
    slug="what-is-a-serp"
    question="What is a SERP?"
    shortAnswer="SERP stands for Search Engine Results Page—the page displayed by Google or other search engines after you enter a search query. Modern SERPs include organic listings, paid ads, featured snippets, local packs, and other rich features."
    content={{
      introduction: `The SERP (Search Engine Results Page) is where all SEO efforts culminate—it's the page you see after typing a query into Google. Understanding SERP anatomy is essential for SEO success because your goal is to appear prominently on this page.

Modern SERPs are far more complex than the simple "10 blue links" of early search engines. Today's Google results page can include featured snippets, video carousels, image packs, local results, shopping ads, knowledge panels, People Also Ask boxes, and more. Each element competes for user attention.

Different queries produce different SERP layouts based on Google's understanding of user intent. A search for "weather" shows a weather widget. "Best restaurants" shows local results and reviews. "How to tie a tie" shows video tutorials. Your SEO strategy must account for what type of SERP your target keywords generate.`,
      sections: [
        {
          id: 'serp-elements',
          title: 'Common SERP Elements',
          content: `Modern SERPs contain multiple elements competing for attention:

**Paid Results (Ads)**
Marked "Sponsored" or "Ad," appearing at top and bottom. Advertisers pay per click through Google Ads.

**Organic Results**
The traditional "blue links" showing title, URL, and description. These are earned through SEO, not paid.

**Featured Snippets**
Extracted answers appearing above organic results in "Position 0." Shows a summary pulled from a ranking page.

**Knowledge Panels**
Right-side boxes with entity information (businesses, people, places, things) pulled from Google's Knowledge Graph.

**Local Pack**
Map with three local business listings for location-based queries like "plumber near me."

**People Also Ask**
Expandable related questions with snippet answers. Each expansion loads more questions.

**Image Pack**
Row of images for queries with visual intent.

**Video Carousel**
YouTube or other video results for how-to and tutorial queries.

**Shopping Results**
Product listings with images and prices for commercial queries.`
        },
        {
          id: 'analyzing-serps',
          title: 'How to Analyze SERPs for SEO',
          content: `SERP analysis informs your SEO strategy:

**Identify Intent**
What type of content ranks? Informational articles, product pages, tools, videos? This reveals what Google thinks users want.

**Assess Competition**
Who ranks on page one? Evaluate their domain authority, content quality, and backlink profiles to gauge difficulty.

**Spot SERP Features**
What features appear? Featured snippets, local packs, and video carousels each require different optimization approaches.

**Note Content Format**
Are results primarily long guides, short answers, listicles, or tools? Match the format that's winning.

**Check SERP Stability**
Do rankings fluctuate frequently? Stable SERPs require stronger signals to break into.

**Calculate Click Potential**
If the SERP is dominated by ads, snippets, and features, organic results may get fewer clicks than volume suggests.

**Track Over Time**
SERPs change. Monitor how results evolve for your target keywords.`
        },
        {
          id: 'serp-features-seo',
          title: 'Optimizing for SERP Features',
          content: `Target specific SERP features to maximize visibility:

**Featured Snippets**
- Answer questions directly in your content
- Use the exact question as a heading
- Provide concise 40-60 word answers
- Use lists, tables, and structured formats

**People Also Ask**
- Include related questions throughout your content
- Answer each question concisely
- Use question-and-answer formatting

**Local Pack**
- Optimize Google Business Profile
- Build consistent local citations
- Earn positive reviews
- Include location keywords

**Rich Snippets**
- Implement schema markup
- Add review, FAQ, or how-to structured data
- Follow Google's guidelines

**Video Results**
- Create YouTube content for how-to queries
- Optimize video titles, descriptions, and tags
- Include transcripts and closed captions`
        },
        {
          id: 'zero-click-searches',
          title: 'Zero-Click Searches',
          content: `An increasing number of searches never result in a website click:

**What Are Zero-Click Searches?**
Searches where Google answers the query directly on the SERP through featured snippets, knowledge panels, calculators, or other features.

**The Scale**
Studies suggest 50%+ of Google searches end without a click to any website. Google is becoming an answer engine, not just a search engine.

**Impact on SEO**
- Traditional click-focused metrics become less relevant
- Brand visibility matters even without clicks
- Featured snippet ownership provides exposure
- Long-tail queries often still drive clicks

**Adaptation Strategies**
- Target queries requiring depth Google can't fully answer
- Focus on transactional keywords where users must visit sites
- Use SERP presence for brand awareness
- Measure impressions, not just clicks
- Create content for different stages of the customer journey`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'serp-elements', title: 'SERP Elements' },
      { id: 'analyzing-serps', title: 'Analyzing SERPs' },
      { id: 'serp-features-seo', title: 'SERP Features SEO' },
      { id: 'zero-click-searches', title: 'Zero-Click Searches' },
      { id: 'data-insights', title: 'Data Insights' }
    ]}
    chartData={{
      type: 'pie',
      title: 'SERP Click Distribution',
      data: [
        { name: 'Organic Results', value: 45 },
        { name: 'Zero-Click', value: 35 },
        { name: 'Paid Ads', value: 15 },
        { name: 'Other', value: 5 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=800&h=400&fit=crop"
    imageAlt="SERP search engine results page showing Google search listings with organic results and featured snippets"
    relatedQuestions={[
      { slug: 'what-is-seo', question: 'What is SEO?' },
      { slug: 'what-is-organic-traffic', question: 'What is organic traffic?' },
      { slug: 'what-is-a-featured-snippet', question: 'What is a featured snippet?' }
    ]}
    relatedTerms={[
      { slug: 'serp', term: 'SERP' },
      { slug: 'featured-snippets', term: 'Featured Snippets' },
      { slug: 'organic-traffic', term: 'Organic Traffic' }
    ]}
  />
);

export default WhatIsASERP;
