import GlossaryTermPage from '@/components/GlossaryTermPage';

const EEATGlossary = () => (
  <GlossaryTermPage
    slug="eeat"
    term="E-E-A-T (Experience, Expertise, Authority, Trust)"
    category="fundamentals"
    definition="E-E-A-T is Google's framework for evaluating content quality, assessing creators' Experience, Expertise, Authoritativeness, and Trustworthiness. This quality guideline, used by Google's human raters to evaluate search results, emphasizes Trust as the most important factor and particularly impacts YMYL (Your Money or Your Life) content about health, finance, and safety."
    content={{
      introduction: `E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is Google's quality guideline framework used by human raters to evaluate content. While not a direct ranking factor, E-E-A-T principles influence how algorithms assess content quality, particularly for YMYL (Your Money or Your Life) topics affecting health, finances, or safety. The extra "E" for Experience was added in late 2022, emphasizing that first-hand experience with a topic adds credibility beyond theoretical expertise. Understanding E-E-A-T helps you create content that meets Google's quality expectations and ranks well for competitive, high-stakes queries. Sites demonstrating strong E-E-A-T signals are more likely to maintain rankings through algorithm updates while competitors with weak signals may see volatility.`,
      whyItMatters: `E-E-A-T directly affects rankings for any content where accuracy matters. For YMYL topics—medical advice, financial guidance, legal information, news—Google heavily weighs creator credibility. Poor E-E-A-T can prevent even well-optimized content from ranking. Google's Quality Rater Guidelines explicitly instruct human evaluators to assess these factors, and while raters don't directly influence rankings, their feedback trains the algorithms. Sites that suffered in Google's core algorithm updates (like Medic Update) often had E-E-A-T deficiencies. Building strong E-E-A-T signals protects against algorithm volatility and helps you compete against established authorities. For businesses in sensitive industries, demonstrating expertise and trust isn't just good for SEO—it builds genuine customer confidence.`,
      howItWorks: `Google evaluates E-E-A-T at multiple levels: the content itself, the creator, and the website. For Experience, Google looks for evidence that the creator has actually used products, visited places, or lived through what they're writing about. Expertise is demonstrated through credentials, depth of knowledge, and technical accuracy. Authoritativeness comes from external recognition—mentions, citations, and backlinks from other authorities. Trust encompasses accuracy, transparency, and legitimacy of the website and its operators. Google's algorithms analyze on-page signals (author bios, about pages, contact information) and off-page signals (backlinks, mentions, reviews) to assess these qualities. While not measured as a single score, E-E-A-T influences how Google's broader quality systems evaluate and rank content.`,
      sections: [
        { id: 'components', title: 'The Four Components', content: `E-E-A-T breakdown: Experience represents first-hand, real-world experience with the topic—product reviews from actual users, travel advice from visitors, health information from patients or doctors. Expertise means formal knowledge and skills in the subject—credentials, training, demonstrated competence. Authoritativeness is recognition as a go-to source in the field—citations, mentions, industry reputation. Trustworthiness covers accuracy, transparency, and reliability—clear ownership, accurate information, honest practices. Trust is considered the most important factor as it encompasses the others.` },
        { id: 'importance', title: 'Why E-E-A-T Matters', content: `E-E-A-T impacts rankings for: YMYL content covering health, finance, legal, and safety topics where bad advice could cause harm. News and current events where accuracy and source credibility matter. Product reviews and recommendations where genuine experience influences purchase decisions. Educational content where expertise determines value and accuracy. Any topic where misinformation could cause harm to users. Strong E-E-A-T signals help content rank for competitive queries and maintain rankings through algorithm updates.` },
        { id: 'demonstrating', title: 'Demonstrating E-E-A-T', content: `Show E-E-A-T through: Detailed author bios with credentials, experience, and photos. First-hand experience demonstrated through personal stories, case studies, and specific details only users would know. Citations to authoritative sources backing up claims. Transparent business information including address, contact, and about pages. Regular content updates showing ongoing engagement with topics. Positive reviews and testimonials from customers. Industry recognition, awards, and certifications. Backlinks and mentions from other trusted sources in your field.` },
        { id: 'improving', title: 'Improving Your E-E-A-T', content: `Build E-E-A-T over time by: Creating comprehensive, accurate content that demonstrates deep knowledge. Establishing author expertise pages with credentials, experience, and social proof. Earning mentions and links from authoritative sites in your industry. Getting quoted as an expert source by journalists and industry publications. Maintaining consistent NAP (name, address, phone) information across the web. Responding to reviews professionally, showing customer care. Building a strong, diverse backlink profile from relevant sources.` }
      ],
      bestPractices: [
        'Create detailed author bios for all content creators, including credentials, experience, and photos',
        'Demonstrate first-hand experience through specific details, personal stories, and unique insights',
        'Cite authoritative sources and link to supporting evidence for claims',
        'Maintain transparent About and Contact pages with real business information',
        'Build your reputation through guest posts, speaking, and earning mentions from authoritative sites'
      ],
      commonMistakes: [
        'Publishing YMYL content without clearly identified, credentialed authors who have relevant expertise',
        'Lacking transparent business information, making the site appear untrustworthy to users and Google',
        'Focusing only on on-page optimization while ignoring off-page reputation and authority building'
      ],
      example: `A health supplement website struggled to rank despite having well-written content. Analysis revealed E-E-A-T deficiencies: anonymous content with no author attribution, no about page, and no credentials demonstrating expertise. They implemented fixes: hired a registered dietitian as content reviewer (listed on all articles), created detailed author pages with photos and credentials, added a comprehensive about page with company history and certifications, earned mentions from health industry publications, and added citations to peer-reviewed research. Over 6 months, organic traffic to YMYL pages increased by 180% as the site demonstrated clear expertise and trustworthiness in the health space.`
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-it-matters', title: 'Why It Matters' },
      { id: 'how-it-works', title: 'How It Works' },
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