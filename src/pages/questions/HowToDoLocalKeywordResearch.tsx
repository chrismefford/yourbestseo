import QuestionPage from '@/components/QuestionPage';

const HowToDoLocalKeywordResearch = () => (
  <QuestionPage
    slug="how-to-do-local-keyword-research"
    question="How to Do Local Keyword Research?"
    shortAnswer="Local keyword research involves finding search terms that combine your services with geographic modifiers, helping you attract customers in your specific service area."
    content={{
      introduction: `Local keyword research is a specialized form of keyword research that focuses on discovering search terms people use when looking for products or services in a specific geographic area. For businesses that serve local customers—whether you're a plumber, restaurant, attorney, or retail store—understanding local search behavior is essential for attracting nearby customers.

Unlike general keyword research, local keyword research must account for geographic intent and the unique ways people search for local businesses. Users might include city names, neighborhoods, "near me" phrases, or rely on Google's location detection to find relevant results.

The goal of local keyword research is to identify the terms your potential customers use when they're ready to visit a local business or hire a local service provider. These keywords often have high commercial intent—people searching "emergency plumber San Diego" are likely in immediate need of services, making local keywords particularly valuable for driving conversions.`,
      sections: [
        {
          id: 'local-keyword-types',
          title: 'Types of Local Keywords',
          content: `Understanding the different types of local keywords helps you build a comprehensive strategy:

**Explicit Local Keywords**: Terms that include specific location names.
- "[Service] in [City]" (e.g., "dentist in Phoenix")
- "[Service] [Neighborhood]" (e.g., "pizza Gaslamp Quarter")
- "[Service] near [Landmark]" (e.g., "parking near Petco Park")

**Implicit Local Keywords**: Generic terms where Google understands local intent.
- "coffee shop" (shows local results based on user location)
- "emergency vet" (assumes local need)
- "gas station" (location-dependent service)

**"Near Me" Keywords**: Exploding in popularity with mobile search.
- "restaurants near me"
- "car repair near me"
- "24-hour pharmacy near me"

**Service + Location Combinations:**
- Primary service keywords with city
- Primary service keywords with neighborhoods
- Primary service keywords with zip codes
- Primary service keywords with county/region

**Industry-Specific Modifiers:**
- "best [service] in [city]"
- "[service] reviews [city]"
- "affordable [service] [location]"
- "emergency [service] near me"`
        },
        {
          id: 'local-keyword-research-process',
          title: 'Local Keyword Research Process',
          content: `Follow this systematic approach to uncover valuable local keywords:

**Step 1: List Your Services**: Start by documenting every service or product you offer. Be specific—instead of just "plumbing," list "water heater repair," "drain cleaning," "leak detection," etc.

**Step 2: Identify Your Service Areas**: List all the cities, neighborhoods, zip codes, and regions you serve. Include commonly searched variations of location names.

**Step 3: Create Keyword Combinations**: Combine each service with each location. Tools like Excel can help generate all possible combinations efficiently.

**Step 4: Use Keyword Research Tools**: Enter combinations into tools like Google Keyword Planner, Ahrefs, or SEMrush to get search volume data and discover additional variations.

**Step 5: Analyze Google Suggest**: Type your service terms into Google and note the autocomplete suggestions. These reflect actual search behavior.

**Step 6: Check "People Also Ask"**: Review the questions that appear in search results for local queries. These reveal what your potential customers want to know.

**Step 7: Spy on Competitors**: See what keywords local competitors rank for using tools like SEMrush or Ahrefs competitive analysis.

**Step 8: Review Google Business Profile Insights**: If you have GBP access, check what queries trigger your listing for real search data.`
        },
        {
          id: 'local-keyword-optimization',
          title: 'Implementing Local Keywords',
          content: `Once you've identified valuable local keywords, implement them strategically:

**Location-Specific Pages**: Create dedicated pages for each major location you serve. Each page should have unique, valuable content—not just the city name swapped out.

**Service + Location Pages**: For businesses serving multiple areas with multiple services, create pages like "Roof Repair in [City]" for each combination worth targeting.

**Google Business Profile Optimization**: Include relevant keywords naturally in your business description, services, and posts.

**Local Landing Pages Should Include:**
- Unique content about serving that specific area
- Local testimonials from customers in that location
- Relevant local landmarks, neighborhoods, or references
- NAP information with local address if applicable
- Location-specific schema markup

**Content Marketing for Local SEO:**
- Write about local events your business participates in
- Create guides about your service area
- Cover local news relevant to your industry
- Feature local customers in case studies

**Common Mistakes to Avoid:**
- Creating thin, duplicate location pages
- Keyword stuffing with location names
- Targeting locations you don't actually serve
- Ignoring "near me" and implicit local queries
- Forgetting to track local rankings separately from national`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'local-keyword-types', title: 'Keyword Types' },
      { id: 'local-keyword-research-process', title: 'Research Process' },
      { id: 'local-keyword-optimization', title: 'Implementation' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'bar',
      title: 'Local Search Keyword Modifiers',
      data: [
        { name: 'Near Me', value: 35 },
        { name: 'City Name', value: 28 },
        { name: 'Best + Location', value: 18 },
        { name: 'Neighborhood', value: 12 },
        { name: 'Zip Code', value: 7 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1553484771-047a44eee27b?w=800&h=400&fit=crop"
    imageAlt="Local map with search pins representing local keyword research and geographic targeting"
    relatedQuestions={[
      { slug: 'what-is-local-seo', question: 'What is Local SEO?' },
      { slug: 'how-to-optimize-for-near-me-searches', question: 'How to optimize for near me searches?' },
      { slug: 'what-is-keyword-research', question: 'What is keyword research?' }
    ]}
    relatedTerms={[
      { slug: 'local-seo', term: 'Local SEO' },
      { slug: 'keyword-research', term: 'Keyword Research' },
      { slug: 'google-business-profile', term: 'Google Business Profile' }
    ]}
  />
);

export default HowToDoLocalKeywordResearch;
