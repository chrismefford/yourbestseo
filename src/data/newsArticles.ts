export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  datePublished: string;
  dateModified?: string;
  category: string;
  tags: string[];
  image?: string;
  readTime: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "google-march-2025-core-update",
    title: "Google March 2025 Core Update: What You Need to Know",
    excerpt: "Google has rolled out its March 2025 core algorithm update. Learn how this affects your SEO strategy and what steps to take to maintain your rankings.",
    content: `
      <p>Google has officially announced the rollout of its March 2025 core algorithm update, marking another significant shift in how search results are ranked. This update emphasizes several key areas that website owners and SEO professionals need to understand.</p>
      
      <h2>Key Changes in the March 2025 Update</h2>
      
      <p>The March 2025 core update focuses on three primary areas:</p>
      
      <ul>
        <li><strong>Enhanced E-E-A-T Signals:</strong> Google is placing even greater emphasis on Experience, Expertise, Authoritativeness, and Trustworthiness. Websites with demonstrated real-world expertise are seeing ranking improvements.</li>
        <li><strong>AI Content Quality Assessment:</strong> With the proliferation of AI-generated content, Google has refined its ability to identify and appropriately rank AI content based on quality and value to users.</li>
        <li><strong>User Engagement Metrics:</strong> Signals like time on page, scroll depth, and meaningful interactions are being weighted more heavily.</li>
      </ul>
      
      <h2>What This Means for Your SEO Strategy</h2>
      
      <p>If you've been following white-hat SEO practices and focusing on creating genuinely helpful content, you're likely to see positive effects from this update. However, sites that have relied heavily on thin content or manipulative tactics may experience ranking drops.</p>
      
      <h3>Recommended Actions</h3>
      
      <ol>
        <li>Audit your content for depth and accuracy</li>
        <li>Ensure author credentials are clearly displayed</li>
        <li>Review your site's Core Web Vitals performance</li>
        <li>Update outdated content with fresh information</li>
      </ol>
      
      <p>The rollout is expected to complete within two weeks. We recommend monitoring your rankings closely during this period and making adjustments as needed.</p>
    `,
    author: "Chris Martinez",
    authorRole: "SEO Director",
    datePublished: "2025-03-15",
    dateModified: "2025-03-16",
    category: "Algorithm Updates",
    tags: ["Google Update", "Core Update", "SEO Strategy", "Rankings"],
    readTime: "5 min read"
  },
  {
    id: "2",
    slug: "local-seo-trends-2025",
    title: "Top 10 Local SEO Trends Dominating 2025",
    excerpt: "Discover the most impactful local SEO trends shaping business visibility in 2025, from AI-powered local search to voice optimization strategies.",
    content: `
      <p>Local SEO continues to evolve rapidly, with new technologies and user behaviors reshaping how businesses appear in local search results. Here are the top trends you need to know about in 2025.</p>
      
      <h2>1. AI-Powered Local Search</h2>
      
      <p>Google's AI capabilities are transforming local search, providing more personalized and contextual results based on user history, preferences, and real-time factors like traffic and weather.</p>
      
      <h2>2. Voice Search Optimization</h2>
      
      <p>With smart speakers and voice assistants becoming ubiquitous, optimizing for conversational queries is no longer optional. Focus on natural language patterns and question-based keywords.</p>
      
      <h2>3. Google Business Profile Enhancements</h2>
      
      <p>New GBP features including AI-generated summaries, enhanced messaging, and improved analytics are changing how businesses interact with local customers.</p>
      
      <h2>4. Review Velocity and Quality</h2>
      
      <p>The pace and quality of reviews matter more than ever. Businesses with consistent, high-quality reviews are seeing improved local pack visibility.</p>
      
      <h2>5. Hyperlocal Content</h2>
      
      <p>Creating content specific to neighborhoods, districts, and local communities is driving significant improvements in local rankings.</p>
      
      <h2>6. Mobile-First Local Experiences</h2>
      
      <p>With over 60% of local searches happening on mobile, ensuring a seamless mobile experience is crucial for local SEO success.</p>
      
      <h2>7. Local Link Building</h2>
      
      <p>Quality local backlinks from community organizations, local news sites, and business associations continue to be powerful ranking signals.</p>
      
      <h2>8. Schema Markup for Local</h2>
      
      <p>Advanced schema markup including LocalBusiness, OpeningHours, and FAQ schema is helping businesses stand out in search results.</p>
      
      <h2>9. Visual Search Integration</h2>
      
      <p>Google Lens and visual search are increasingly being used for local discovery. Optimize your images with proper alt text and structured data.</p>
      
      <h2>10. Sustainability Signals</h2>
      
      <p>Eco-friendly practices and sustainability certifications are becoming factors that influence both rankings and consumer choice.</p>
    `,
    author: "Sarah Chen",
    authorRole: "Local SEO Specialist",
    datePublished: "2025-02-28",
    category: "Local SEO",
    tags: ["Local SEO", "Trends", "Google Business Profile", "Voice Search"],
    readTime: "7 min read"
  },
  {
    id: "3",
    slug: "ai-content-seo-best-practices",
    title: "AI Content and SEO: Best Practices for 2025",
    excerpt: "Learn how to effectively use AI-generated content while maintaining SEO performance and avoiding potential penalties.",
    content: `
      <p>AI content generation has become a standard tool in many content strategies. However, using it effectively requires understanding both its capabilities and limitations from an SEO perspective.</p>
      
      <h2>Google's Stance on AI Content</h2>
      
      <p>Google's position is clear: the focus is on content quality, not how it's produced. AI-generated content that provides genuine value to users is acceptable, while low-quality AI content is not.</p>
      
      <h2>Best Practices for AI-Assisted Content</h2>
      
      <h3>1. Human Oversight is Essential</h3>
      
      <p>Always have human editors review and enhance AI-generated content. Add unique insights, verify facts, and ensure the content aligns with your brand voice.</p>
      
      <h3>2. Add Original Research and Data</h3>
      
      <p>Supplement AI content with original research, case studies, and proprietary data that AI cannot replicate.</p>
      
      <h3>3. Demonstrate E-E-A-T</h3>
      
      <p>Ensure content showcases real expertise and experience. Include author bios, credentials, and firsthand perspectives.</p>
      
      <h3>4. Focus on User Intent</h3>
      
      <p>AI can help scale content production, but always prioritize answering the user's actual question or need.</p>
      
      <h2>What to Avoid</h2>
      
      <ul>
        <li>Publishing AI content without review</li>
        <li>Mass-producing thin, repetitive content</li>
        <li>Using AI to manipulate search rankings</li>
        <li>Ignoring factual accuracy</li>
      </ul>
      
      <p>When used responsibly, AI is a powerful tool that can enhance your content strategy while maintaining strong SEO performance.</p>
    `,
    author: "Michael Torres",
    authorRole: "Content Strategist",
    datePublished: "2025-02-15",
    category: "Content Strategy",
    tags: ["AI Content", "SEO Best Practices", "Content Marketing", "E-E-A-T"],
    readTime: "6 min read"
  }
];

export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string): NewsArticle[] => {
  return newsArticles.filter(article => article.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(newsArticles.map(article => article.category))];
};
