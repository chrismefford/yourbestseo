import QuestionPage from '@/components/QuestionPage';

const WhatIsSearchIntent = () => (
  <QuestionPage
    slug="what-is-search-intent"
    question="What is Search Intent?"
    shortAnswer="Search intent is the underlying goal or purpose behind a search query—what users really want to find when they type something into a search engine."
    content={{
      introduction: `Search intent, also known as user intent or keyword intent, refers to the purpose behind a search query. It's the "why" behind every search—what the user is ultimately trying to accomplish when they type words into Google or another search engine.

Understanding search intent is crucial for SEO success because Google's primary goal is to deliver results that satisfy what users are actually looking for. If your content doesn't match the intent behind a query, it won't rank well, no matter how well-optimized it is for keywords.

When you align your content with search intent, you create a win-win situation: users find exactly what they're looking for, and your content ranks higher because it satisfies their needs. This is why search intent has become one of the most important concepts in modern SEO strategy.`,
      sections: [
        {
          id: 'types-of-search-intent',
          title: 'The Four Types of Search Intent',
          content: `Search queries generally fall into four main categories of intent:

**1. Informational Intent**: The user wants to learn something or find information.
- Examples: "what is SEO," "how to bake bread," "weather today"
- Best content: Blog posts, guides, tutorials, FAQ pages
- Users are in research mode, not ready to buy

**2. Navigational Intent**: The user wants to find a specific website or page.
- Examples: "Facebook login," "Amazon," "Nike official site"
- Best content: Brand pages, homepage, login pages
- Users already know where they want to go

**3. Commercial Investigation Intent**: The user is researching before making a purchase decision.
- Examples: "best running shoes 2024," "iPhone vs Samsung," "Ahrefs review"
- Best content: Comparison articles, reviews, buying guides, product roundups
- Users are evaluating options but not ready to buy

**4. Transactional Intent**: The user is ready to take action or make a purchase.
- Examples: "buy Nike Air Max," "hire SEO agency San Diego," "Netflix subscription"
- Best content: Product pages, service pages, pricing pages
- Users have high purchase intent`
        },
        {
          id: 'determining-search-intent',
          title: 'How to Determine Search Intent',
          content: `Several methods help you identify the intent behind keywords:

**1. Analyze the SERP**: Google already shows you what it thinks users want. Look at:
- Type of results (articles, products, videos, local listings)
- Featured snippets and SERP features present
- Content format of top-ranking pages

**2. Look at Keyword Modifiers**: Certain words signal specific intent:
- Informational: "how to," "what is," "guide," "tutorial," "why"
- Commercial: "best," "top," "review," "comparison," "vs"
- Transactional: "buy," "price," "discount," "order," "hire," "near me"

**3. Consider the Searcher's Journey**: Think about where someone is in their decision-making process when they'd use this query.

**4. Use Keyword Tools**: Many SEO tools now classify keywords by intent automatically.

**Why SERPs Are the Ultimate Guide:**
If you search your target keyword and see 10 blog posts ranking, Google has determined the intent is informational. If you see product pages, the intent is transactional. Don't fight what Google has already determined—match the dominant intent you see.`
        },
        {
          id: 'optimizing-for-intent',
          title: 'Optimizing Content for Search Intent',
          content: `Matching your content to search intent involves several strategies:

**Match Content Format**: If top results are listicles, create a list. If they're comprehensive guides, create a guide. If they're product pages, you need a product page.

**Match Content Depth**: Informational queries often need comprehensive, in-depth content. Transactional queries need clear, conversion-focused pages.

**Match Content Angle**: Look at how top pages approach the topic. Are they focused on beginners or experts? Budget options or premium? Current year or evergreen?

**Provide Complete Answers**: Your content should fully satisfy the user's query. If they need to click back and search again, you haven't met their intent.

**Common Intent Mismatch Mistakes:**
- Creating product pages for informational queries
- Writing blog posts when users want to buy
- Targeting commercial keywords with thin content
- Ignoring the "why" behind searches

**Intent Optimization Checklist:**
1. Search your target keyword and analyze top 10 results
2. Identify the dominant content type and format
3. Note common topics, subtopics, and questions covered
4. Create content that matches (or exceeds) what's ranking
5. Ensure your content fully satisfies the user's goal
6. Monitor rankings and user engagement signals`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'types-of-search-intent', title: 'Types of Intent' },
      { id: 'determining-search-intent', title: 'Determining Intent' },
      { id: 'optimizing-for-intent', title: 'Optimization Tips' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'pie',
      title: 'Search Queries by Intent Type',
      data: [
        { name: 'Informational', value: 55 },
        { name: 'Commercial', value: 20 },
        { name: 'Transactional', value: 15 },
        { name: 'Navigational', value: 10 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
    imageAlt="Person searching on laptop representing search intent and user behavior"
    relatedQuestions={[
      { slug: 'what-is-keyword-research', question: 'What is keyword research?' },
      { slug: 'what-is-seo', question: 'What is SEO?' },
      { slug: 'what-are-keywords', question: 'What are keywords?' }
    ]}
    relatedTerms={[
      { slug: 'search-intent', term: 'Search Intent' },
      { slug: 'keyword-research', term: 'Keyword Research' },
      { slug: 'long-tail-keywords', term: 'Long-Tail Keywords' }
    ]}
  />
);

export default WhatIsSearchIntent;
