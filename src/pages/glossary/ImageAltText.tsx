import GlossaryTermPage from '@/components/GlossaryTermPage';

const ImageAltTextGlossary = () => (
  <GlossaryTermPage
    slug="image-alt-text"
    term="Image Alt Text"
    category="on-page-seo"
    definition="Image alt text (alternative text) is a written description of an image that helps search engines understand visual content and provides accessibility for visually impaired users."
    content={{
      introduction: `Alt text serves two crucial purposes: accessibility and SEO. Screen readers use alt text to describe images to visually impaired users, while search engines use it to understand image content since they cannot "see" images directly. Well-written alt text improves both user experience and image search rankings.

Beyond accessibility and SEO, alt text provides a fallback when images fail to load—users see your description instead of a broken image icon. This ensures your content remains understandable even with connectivity issues. Alt text also contributes to your page's overall relevance signals, helping search engines understand how images relate to surrounding content.

With Google Images driving significant traffic for many websites, alt text optimization represents a substantial opportunity. E-commerce sites, photographers, recipe blogs, and visual content creators especially benefit from proper alt text implementation. Yet studies show 45% of images online lack any alt text, and many that have it use generic, unhelpful descriptions.`,
      whyItMatters: `Alt text is essential for multiple reasons:

**Accessibility Compliance**: Screen readers rely on alt text to describe images to visually impaired users. Proper alt text is required for ADA compliance and WCAG guidelines. Businesses face legal risks when ignoring accessibility.

**Search Engine Understanding**: Google cannot "see" images. Alt text tells search engines what images depict, helping them index visual content and determine page relevance.

**Image Search Rankings**: Alt text is a primary factor in Google Images rankings. Optimized alt text helps images appear in image search results, driving additional traffic.

**Contextual Relevance**: Alt text contributes to overall page topic signals. Images with relevant alt text strengthen page relevance for target keywords.

**User Experience**: When images fail to load, alt text appears in their place, maintaining content comprehension. This improves experience on slow connections or with image-blocking settings.

**Voice Search Compatibility**: As voice search grows, properly described images help voice assistants understand and communicate visual content.`,
      howItWorks: `Alt text is implemented through HTML:

**Basic Implementation**: The alt attribute goes inside the image tag: <img src="photo.jpg" alt="Description here">

**Screen Reader Behavior**: When a screen reader encounters an image, it reads the alt text aloud. Without alt text, it may read the file name or skip the image entirely.

**Search Engine Processing**: Googlebot reads alt text to understand image content. This information is stored in their index and used for image search rankings and page relevance.

**Character Limits**: While there's no strict limit, keep alt text under 125 characters. Screen readers may cut off longer descriptions.

**Context Sensitivity**: Effective alt text depends on image context. The same image might need different alt text on different pages depending on how it's used.

**File Names**: While not as important as alt text, descriptive file names (red-running-shoes.jpg vs IMG_1234.jpg) provide additional context.`,
      sections: [
        { id: 'writing-effective', title: 'Writing Effective Alt Text', content: `Create quality alt text by following these guidelines:

**Be Accurate and Specific**: Describe what the image actually shows. Don't describe what you wish it showed or add information not visible in the image.

**Keep It Concise**: Aim for 5-15 words that capture the essential content. Longer isn't better—be efficient with your description.

**Avoid Redundancy**: Don't start with "image of" or "picture of"—screen readers already announce it's an image. Jump straight to the description.

**Include Relevant Keywords**: If natural and accurate, include keywords related to your page topic. Never force keywords that don't accurately describe the image.

**Consider Context**: An image of a handshake might be "business partnership agreement" on a services page but "successful negotiation outcome" in a sales training article.

**Describe Function for Linked Images**: If an image is clickable, describe where it leads. "View product details" is more helpful than "red button."

**Match Surrounding Content**: Alt text should complement nearby text. If the caption already describes the image fully, alt text can focus on different aspects.` },
        { id: 'examples', title: 'Good vs Bad Examples', content: `Understanding quality differences helps improve your alt text:

**Bad**: "image" or "photo" or empty alt=""
These provide zero value to screen reader users or search engines.

**Bad**: "dog"
Too generic—what kind of dog? What is it doing? Where is it?

**Okay**: "golden retriever playing"
Better, but still lacks specific context that would make it memorable and searchable.

**Good**: "golden retriever puppy playing in autumn leaves at park"
Descriptive, specific, and paints a clear mental picture.

**E-commerce Example**:
Bad: "shoe"
Good: "Nike Air Max 270 React men's running shoe in black and white, side view"

**Recipe Blog Example**:
Bad: "pasta dish"
Good: "creamy garlic parmesan chicken pasta in cast iron skillet with fresh herbs"

**Real Estate Example**:
Bad: "living room"
Good: "spacious living room with hardwood floors, stone fireplace, and large bay windows"

Match detail level to image importance—hero images deserve rich descriptions while decorative elements need minimal alt text.` },
        { id: 'special-cases', title: 'Special Cases and Exceptions', content: `Handle these situations appropriately:

**Decorative Images**: Use empty alt="" (not missing alt, but explicitly empty) for purely decorative images like background patterns, dividers, or ornamental graphics. This tells screen readers to skip them.

**Logos**: Use the company or brand name. "Acme Corporation logo" or simply "Acme Corporation" works well. Don't describe visual elements unless they're meaningful.

**Icons**: Describe the meaning, not appearance. "Search button" not "magnifying glass icon." If the icon is next to text that already explains it, use empty alt.

**Complex Charts/Graphs**: Provide brief alt text summarizing the main takeaway, then include detailed data in surrounding text or a separate accessible format. "Bar chart showing 40% increase in revenue 2023-2024" with full data in a table.

**Text in Images**: Include all visible text in the alt text. Screen readers can't read text embedded in images.

**Product Images**: Include product name, key features, color, size, and angle. "Front view of blue Nike Air Force 1 low-top sneakers size 10"

**Infographics**: Summarize the main message and provide full text alternative elsewhere. Alt text alone can't convey complex infographic content.` }
      ],
      bestPractices: [
        'Audit all images on your site and add missing or improve weak alt text',
        'Write unique alt text for each image—don\'t copy-paste across similar images',
        'Include relevant keywords naturally, but never at the expense of accuracy',
        'Keep alt text under 125 characters for optimal screen reader compatibility',
        'Use empty alt="" for purely decorative images to avoid screen reader clutter',
        'Test your site with a screen reader to experience alt text effectiveness firsthand'
      ],
      commonMistakes: [
        'Leaving alt text empty or using only "image" as the description',
        'Keyword stuffing with terms that don\'t describe the actual image',
        'Writing alt text that duplicates the image caption exactly',
        'Using file names like "DSC_1234.jpg" instead of descriptive names',
        'Ignoring alt text on e-commerce product images where it drives image search traffic',
        'Including "image of" or "picture of" prefixes unnecessarily'
      ],
      example: `An online furniture retailer audited their product pages and found 65% of images had generic alt text like "sofa" or "chair." They implemented a systematic approach: "[Color] [Material] [Style] [Product Type] - [Angle/View]." For example: "Navy blue velvet mid-century modern sofa with wooden legs - angled front view." Within four months, Google Images traffic increased 127%. More importantly, images now ranked for long-tail searches like "navy velvet mid-century sofa" that buyers actually use. The accessibility improvements also helped them avoid potential ADA compliance issues and improved experience for all users when images loaded slowly. One bonus discovery: their image search visitors had 34% higher conversion rates than general organic visitors, likely because image searchers knew exactly what they wanted.`
    }}
    tableOfContents={[
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-it-matters', title: 'Why Alt Text Matters' },
      { id: 'how-it-works', title: 'How Alt Text Works' },
      { id: 'writing-effective', title: 'Writing Effective Alt Text' },
      { id: 'examples', title: 'Good vs Bad Examples' },
      { id: 'special-cases', title: 'Special Cases' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'common-mistakes', title: 'Common Mistakes' },
      { id: 'example', title: 'Real Example' },
      { id: 'data-insights', title: 'Data Insights' },
      { id: 'related-terms', title: 'Related Terms' }
    ]}
    chartData={{ type: 'pie', title: 'Alt Text Implementation Status Across Websites', data: [{ name: 'Missing Alt Text', value: 45 }, { name: 'Poor Quality', value: 25 }, { name: 'Good Quality', value: 20 }, { name: 'Fully Optimized', value: 10 }] }}
    imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
    imageAlt="Image alt text optimization showing accessible and SEO-friendly image descriptions"
  />
);

export default ImageAltTextGlossary;
