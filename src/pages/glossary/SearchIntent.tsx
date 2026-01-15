import GlossaryTermPage from '@/components/GlossaryTermPage';

const SearchIntentGlossary = () => (
  <GlossaryTermPage
    slug="search-intent"
    term="Search Intent"
    category="fundamentals"
    definition="Search intent (also called user intent or keyword intent) is the underlying purpose behind a search query—what the user truly wants to accomplish when they type something into a search engine."
    content={{
      introduction: `Search intent is perhaps the most important concept in modern SEO. Google's primary goal is to satisfy users by delivering results that match what they're actually looking for. When you understand and align your content with search intent, you're working WITH Google rather than against it.

Mismatched intent is the most common reason quality content fails to rank. You could write the most comprehensive, well-researched article on "best running shoes," but if the top 10 results are all product category pages with buying options, Google has determined that searchers want to SHOP, not READ. No amount of content quality or backlinks will overcome intent mismatch. Mastering search intent analysis is essential for SEO success.`,
      sections: [
        { id: 'four-types', title: 'The Four Types of Search Intent', content: `Search queries generally fall into four categories:\n\n**Informational Intent**: User wants to learn something. Queries often include "how to," "what is," "guide," "tutorial." Example: "how to tie a tie." They want content that educates.\n\n**Navigational Intent**: User wants to find a specific website or page. Example: "Facebook login," "Amazon Prime." They already know where they want to go.\n\n**Commercial Investigation**: User is researching before making a purchase. Queries include "best," "review," "comparison," "vs." Example: "best laptops for students 2024." They want to evaluate options.\n\n**Transactional Intent**: User is ready to take action, usually purchase. Queries include "buy," "price," "discount," "near me." Example: "buy iPhone 15 Pro." They want to complete a transaction.` },
        { id: 'analyzing-intent', title: 'How to Analyze Search Intent', content: `Determine intent through SERP analysis:\n\n**Check What Ranks**: Google has tested countless results. What's ranking IS what satisfies intent. If product pages rank, intent is transactional. If guides rank, intent is informational.\n\n**Analyze Content Formats**: Are results blog posts, product pages, videos, tools, or comparisons? This reveals the FORMAT users prefer.\n\n**Look at SERP Features**: Featured snippets suggest informational queries. Shopping carousels indicate commercial intent. Local packs show local intent.\n\n**Note Content Angle**: Beyond format, what angle do top results take? "Best for beginners," "budget options," "professional use"—this reveals what specifically satisfies searchers.\n\n**Consider Modifiers**: Words in the query itself signal intent—"how," "buy," "review," "free," etc.` },
        { id: 'matching-content', title: 'Matching Content to Intent', content: `Align your content strategy with intent findings:\n\n**Informational → Educational Content**: Comprehensive guides, tutorials, how-tos, explainers. Focus on thoroughly answering questions.\n\n**Commercial → Comparison Content**: Reviews, "best of" lists, comparisons, buying guides. Help users evaluate options.\n\n**Transactional → Product/Service Pages**: Clear pricing, specifications, buy buttons, conversion optimization. Remove friction from purchasing.\n\n**Mixed Intent**: Some queries have multiple intents. "Running shoes" might be informational (what makes good running shoes?) or transactional (I want to buy). Google often shows mixed results. You may need multiple pages for different intents.\n\nNever force content format—let SERP analysis guide your approach.` },
        { id: 'intent-optimization', title: 'Optimizing for Intent', content: `Go beyond matching format to truly satisfy intent:\n\n**Answer the Core Question First**: Don't bury the lead. Give users what they came for immediately, then elaborate.\n\n**Address Related Needs**: What questions naturally follow? Anticipate and answer them.\n\n**Match Depth to Intent**: Transactional pages should be concise and action-focused. Informational content may need comprehensive depth.\n\n**Update for Evolving Intent**: Search intent can shift over time. "AI" queries that were informational in 2020 may be commercial today.\n\n**Consider the Full Journey**: Sometimes satisfying intent means guiding users to the next step—from information to evaluation to purchase.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'four-types', title: 'Four Types of Intent' },
      { id: 'analyzing-intent', title: 'Analyzing Intent' },
      { id: 'matching-content', title: 'Matching Content' },
      { id: 'intent-optimization', title: 'Optimization' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Distribution of Search Intent Types', data: [{ name: 'Informational', value: 55 }, { name: 'Commercial', value: 20 }, { name: 'Transactional', value: 15 }, { name: 'Navigational', value: 10 }] }}
    imageUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop"
    imageAlt="Person searching on laptop representing search intent"
  />
);

export default SearchIntentGlossary;
