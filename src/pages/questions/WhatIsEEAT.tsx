import QuestionPage from '@/components/QuestionPage';

const WhatIsEEAT = () => (
  <QuestionPage
    slug="what-is-eeat"
    question="What is E-E-A-T?"
    shortAnswer="E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness—Google's quality guidelines for evaluating content credibility."
    content={{
      introduction: `E-E-A-T is a framework Google uses to assess the quality and credibility of web content. It stands for Experience, Expertise, Authoritativeness, and Trustworthiness. Originally introduced as E-A-T in Google's Search Quality Evaluator Guidelines, Google added "Experience" in December 2022 to emphasize the value of first-hand experience.

While E-E-A-T isn't a direct ranking factor (there's no E-E-A-T score in Google's algorithm), it influences how Google's quality raters evaluate search results. These evaluations inform algorithm updates and help Google understand what constitutes high-quality content. For websites, especially those in "Your Money or Your Life" (YMYL) topics like health, finance, and safety, demonstrating E-E-A-T is crucial.

Understanding and implementing E-E-A-T principles helps you create content that Google considers high-quality, which indirectly improves rankings and builds trust with your audience.`,
      sections: [
        {
          id: 'eeat-components',
          title: 'The Four Components of E-E-A-T',
          content: `Each component of E-E-A-T contributes to content quality:

**Experience:**
First-hand, personal experience with the topic. Google values content from people who have actually done what they're writing about.
- Product reviews from people who've used the product
- Travel guides from people who've visited the destination
- Health experiences from patients (alongside medical expertise)
- Professional insights from industry practitioners

**Expertise:**
Demonstrated knowledge and skill in the topic area.
- Formal qualifications (degrees, certifications) for YMYL topics
- Practical expertise gained through work experience
- Deep knowledge evident in content quality
- Specialized understanding of niche topics

**Authoritativeness:**
Recognition as a go-to source for information.
- Reputation within your industry or niche
- Citations and mentions from other authoritative sources
- Backlinks from respected websites
- Media coverage and industry recognition

**Trustworthiness:**
The most important factor—can users trust your content?
- Accurate, factual information
- Transparency about who creates content
- Clear contact information and business details
- Secure website (HTTPS)
- Honest product reviews and recommendations`
        },
        {
          id: 'demonstrating-eeat',
          title: 'How to Demonstrate E-E-A-T',
          content: `Practical ways to show E-E-A-T on your website:

**For Experience:**
- Share personal stories and case studies
- Include photos/videos from actual experiences
- Discuss lessons learned from real situations
- Be specific about what you've personally done

**For Expertise:**
- Create detailed author bios with credentials
- Link to author profiles and portfolios
- Display relevant certifications and qualifications
- Show depth of knowledge through comprehensive content

**For Authoritativeness:**
- Earn backlinks from respected sources
- Get mentioned in industry publications
- Build a strong social media presence
- Contribute guest posts to authoritative sites

**For Trustworthiness:**
- Provide accurate, well-sourced information
- Include clear "About Us" and "Contact" pages
- Display trust signals (security badges, reviews)
- Have a clear privacy policy and terms of service
- Respond to and address customer concerns publicly

**Website-Wide E-E-A-T Signals:**
- Professional website design
- Easy navigation and user experience
- Regular content updates and maintenance
- Transparent business information
- Positive online reputation and reviews`
        },
        {
          id: 'eeat-for-ymyl',
          title: 'E-E-A-T for YMYL Topics',
          content: `E-E-A-T is especially critical for Your Money or Your Life topics:

**What Are YMYL Topics?**
Content that could impact a person's:
- Health and safety
- Financial stability
- Legal matters
- Major life decisions
- News and current events
- Civic information

**YMYL E-E-A-T Requirements:**
For YMYL content, Google applies higher scrutiny:
- Medical content should involve healthcare professionals
- Financial advice should come from qualified experts
- Legal content should be reviewed by attorneys
- Clear disclosure of potential conflicts of interest

**Examples of YMYL E-E-A-T:**
- Medical article: Written by a doctor, reviewed by specialists, cites medical journals
- Financial guide: Created by certified financial planners, sources official data
- Legal information: Prepared or reviewed by licensed attorneys

**Non-YMYL E-E-A-T:**
For less critical topics, personal experience may be sufficient:
- Product reviews from everyday consumers
- Hobby tutorials from enthusiasts
- Entertainment content from fans
- Local guides from residents

**E-E-A-T Improvement Checklist:**
1. Audit author bios—add credentials and expertise
2. Add "About Us" page with company/team details
3. Include contact information and physical address
4. Cite authoritative sources in content
5. Earn reviews and testimonials
6. Get mentioned by authoritative sites
7. Keep content accurate and updated
8. Ensure website security (HTTPS)`
        }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Overview' },
      { id: 'eeat-components', title: 'E-E-A-T Components' },
      { id: 'demonstrating-eeat', title: 'Demonstrating E-E-A-T' },
      { id: 'eeat-for-ymyl', title: 'E-E-A-T for YMYL' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-questions', title: 'Related Questions' }
    ]}
    chartData={{
      type: 'pie',
      title: 'E-E-A-T Component Importance',
      data: [
        { name: 'Trustworthiness', value: 35 },
        { name: 'Expertise', value: 25 },
        { name: 'Experience', value: 22 },
        { name: 'Authoritativeness', value: 18 }
      ]
    }}
    imageUrl="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=400&fit=crop"
    imageAlt="Professional establishing expertise and trust representing E-E-A-T principles"
    relatedQuestions={[
      { slug: 'what-is-seo', question: 'What is SEO?' },
      { slug: 'what-is-content-marketing', question: 'What is content marketing?' },
      { slug: 'what-is-domain-authority', question: 'What is domain authority?' }
    ]}
    relatedTerms={[
      { slug: 'eeat', term: 'E-E-A-T' },
      { slug: 'domain-authority', term: 'Domain Authority' },
      { slug: 'backlinks', term: 'Backlinks' }
    ]}
  />
);

export default WhatIsEEAT;
