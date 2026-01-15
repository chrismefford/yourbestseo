import GlossaryTermPage from '@/components/GlossaryTermPage';

const EEATGlossary = () => (
  <GlossaryTermPage
    slug="eeat"
    term="E-E-A-T (Experience, Expertise, Authority, Trust)"
    category="fundamentals"
    definition="E-E-A-T is Google's framework for evaluating content quality, assessing creators' Experience, Expertise, Authoritativeness, and Trustworthiness."
    content={{
      introduction: `E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is Google's quality guideline framework used by human raters to evaluate content. While not a direct ranking factor, E-E-A-T principles influence how algorithms assess content quality, particularly for YMYL (Your Money or Your Life) topics affecting health, finances, or safety.`,
      sections: [
        { id: 'components', title: 'The Four Components', content: `E-E-A-T breakdown: Experience - first-hand, real-world experience with the topic. Expertise - formal knowledge and skills in the subject. Authoritativeness - recognition as a go-to source in the field. Trustworthiness - accuracy, transparency, and reliability. Trust is considered the most important factor.` },
        { id: 'importance', title: 'Why E-E-A-T Matters', content: `E-E-A-T impacts rankings for: YMYL content (health, finance, legal, safety), News and current events, Product reviews and recommendations, Educational content, and Any topic where misinformation could cause harm. Strong E-E-A-T signals help content rank for competitive queries.` },
        { id: 'demonstrating', title: 'Demonstrating E-E-A-T', content: `Show E-E-A-T through: Detailed author bios with credentials, First-hand experience and case studies, Citations to authoritative sources, Transparent business information, Regular content updates, Positive reviews and testimonials, Industry recognition and awards, and Backlinks from trusted sources.` },
        { id: 'improving', title: 'Improving Your E-E-A-T', content: `Build E-E-A-T over time by: Creating comprehensive, accurate content, Establishing author expertise pages, Earning mentions from authoritative sites, Getting quoted as an expert source, Maintaining consistent NAP information, Responding to reviews professionally, and Building a strong backlink profile.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'components', title: 'The Four Components' },
      { id: 'importance', title: 'Why E-E-A-T Matters' },
      { id: 'demonstrating', title: 'Demonstrating E-E-A-T' },
      { id: 'improving', title: 'Improving Your E-E-A-T' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'E-E-A-T Components Weight', data: [{ name: 'Trustworthiness', value: 40 }, { name: 'Experience', value: 20 }, { name: 'Expertise', value: 20 }, { name: 'Authoritativeness', value: 20 }] }}
    imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
    imageAlt="E-E-A-T Experience Expertise Authoritativeness Trustworthiness framework for Google content quality"
  />
);

export default EEATGlossary;