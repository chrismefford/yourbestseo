import GlossaryTermPage from '@/components/GlossaryTermPage';

const ImageAltTextGlossary = () => (
  <GlossaryTermPage
    slug="image-alt-text"
    term="Image Alt Text"
    category="on-page-seo"
    definition="Image alt text (alternative text) is a written description of an image that helps search engines understand visual content and provides accessibility for visually impaired users."
    content={{
      introduction: `Alt text serves two crucial purposes: accessibility and SEO. Screen readers use alt text to describe images to visually impaired users, while search engines use it to understand image content since they cannot "see" images directly. Well-written alt text improves both user experience and image search rankings.`,
      sections: [
        { id: 'importance', title: 'Why Alt Text Matters', content: `Alt text is essential for: Screen reader accessibility (ADA compliance), Search engine image understanding, Image search ranking opportunities, Context when images fail to load, and Improving overall page relevance. Neglecting alt text means missing both accessibility and SEO opportunities.` },
        { id: 'best-practices', title: 'Writing Effective Alt Text', content: `Create quality alt text by: Describing the image accurately and concisely, Including relevant keywords naturally, Keeping descriptions under 125 characters, Avoiding "image of" or "picture of" prefixes, Being specific about image content, and Considering the image's purpose in context.` },
        { id: 'examples', title: 'Good vs Bad Examples', content: `Examples comparison: Bad - "image", "photo", or empty alt. Okay - "dog". Good - "golden retriever puppy playing in autumn leaves". Best - "golden retriever puppy catching a red ball in Central Park during fall" (when context matters). Match detail level to image importance.` },
        { id: 'special-cases', title: 'Special Cases', content: `Handle these situations: Decorative images - use empty alt="" to be ignored by screen readers. Logos - use company name. Buttons/links - describe the action. Complex charts - provide detailed descriptions. Text in images - include the text content. Icons - describe the meaning, not appearance.` }
      ]
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'importance', title: 'Why Alt Text Matters' },
      { id: 'best-practices', title: 'Writing Effective Alt Text' },
      { id: 'examples', title: 'Good vs Bad Examples' },
      { id: 'special-cases', title: 'Special Cases' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Alt Text Implementation Status', data: [{ name: 'Missing Alt Text', value: 45 }, { name: 'Poor Quality', value: 25 }, { name: 'Good Quality', value: 20 }, { name: 'Optimized', value: 10 }] }}
    imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
    imageAlt="Image alt text optimization showing accessible and SEO-friendly image descriptions"
  />
);

export default ImageAltTextGlossary;