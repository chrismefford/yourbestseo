import GlossaryTermPage from '@/components/GlossaryTermPage';

const PeopleAlsoAskGlossary = () => (
  <GlossaryTermPage
    slug="people-also-ask"
    term="People Also Ask (PAA)"
    category="on-page-seo"
    definition="People Also Ask (PAA) is a Google SERP feature displaying related questions users commonly search for, with expandable answers pulled from various websites."
    content={{
      introduction: `People Also Ask boxes appear as expandable accordions of related questions within search results. Each question reveals a short answer snippet from a website. Clicking questions dynamically loads more related queries, creating opportunities for visibility beyond traditional organic rankings.`,
      sections: [
        { id: 'how-works', title: 'How PAA Works', content: `Key characteristics: Displays 2-4 initial related questions, Clicking reveals answers and more questions, Answer snippets extracted from ranking pages, Source websites receive link attribution, Same questions appear across related searches, and Dynamic expansion creates endless discovery.` },
        { id: 'seo-value', title: 'SEO Value of PAA', content: `PAA matters for: Premium visibility above organic results, Traffic potential from featured answers, Authority signaling to users, Keyword research revealing user questions, Content gap identification, and Competitive insight into what Google values.` },
        { id: 'optimization', title: 'Optimizing for PAA', content: `Best practices: Answer questions directly and concisely, Use question-based H2/H3 headers, Provide 40-50 word answers upfront, Cover multiple related questions per page, Implement FAQ schema markup, and Monitor which questions appear for your keywords.` },
        { id: 'strategy', title: 'PAA Content Strategy', content: `Strategic approach: Research PAA questions for target keywords, Click to expand and document all related questions, Organize questions into content clusters, Create comprehensive content addressing question groups, Use exact question phrasing in headers, and Update content as new questions emerge.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'how-works', title: 'How PAA Works' },
      { id: 'seo-value', title: 'SEO Value' },
      { id: 'optimization', title: 'Optimization Tips' },
      { id: 'strategy', title: 'Content Strategy' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'bar', title: 'PAA Appearance by Query Type', data: [{ name: 'How-to', value: 85 }, { name: 'What is', value: 75 }, { name: 'Why', value: 70 }, { name: 'Best', value: 45 }, { name: 'Commercial', value: 30 }] }}
    imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
    imageAlt="People Also Ask box in Google SERP showing related search questions for SEO optimization"
  />
);

export default PeopleAlsoAskGlossary;