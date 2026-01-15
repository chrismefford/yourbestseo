export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDescription: string;
  category: 'local-seo' | 'technical-seo' | 'on-page-seo' | 'off-page-seo';
  relatedTerms: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  // Local SEO
  {
    slug: 'google-business-profile',
    term: 'Google Business Profile',
    shortDescription: 'A free tool from Google that helps businesses manage their online presence across Google Search and Maps.',
    category: 'local-seo',
    relatedTerms: ['local-pack', 'nap-consistency', 'local-citations'],
  },
  {
    slug: 'local-pack',
    term: 'Local Pack',
    shortDescription: 'The section of Google search results that displays a map and three local business listings.',
    category: 'local-seo',
    relatedTerms: ['google-business-profile', 'local-citations', 'nap-consistency'],
  },
  {
    slug: 'nap-consistency',
    term: 'NAP Consistency',
    shortDescription: 'Ensuring your business Name, Address, and Phone number are identical across all online directories and platforms.',
    category: 'local-seo',
    relatedTerms: ['local-citations', 'google-business-profile', 'local-pack'],
  },
  {
    slug: 'local-citations',
    term: 'Local Citations',
    shortDescription: 'Online mentions of your business name, address, and phone number on directories, websites, and social platforms.',
    category: 'local-seo',
    relatedTerms: ['nap-consistency', 'google-business-profile', 'local-pack'],
  },
  // Technical SEO
  {
    slug: 'schema-markup',
    term: 'Schema Markup',
    shortDescription: 'Structured data code that helps search engines understand and display your content in rich results.',
    category: 'technical-seo',
    relatedTerms: ['rich-snippets', 'crawlability', 'core-web-vitals'],
  },
  {
    slug: 'crawlability',
    term: 'Crawlability',
    shortDescription: 'How easily search engine bots can access, read, and index the pages on your website.',
    category: 'technical-seo',
    relatedTerms: ['indexability', 'schema-markup', 'core-web-vitals'],
  },
  {
    slug: 'core-web-vitals',
    term: 'Core Web Vitals',
    shortDescription: 'A set of specific metrics Google uses to measure user experience: loading, interactivity, and visual stability.',
    category: 'technical-seo',
    relatedTerms: ['crawlability', 'schema-markup', 'indexability'],
  },
  {
    slug: 'indexability',
    term: 'Indexability',
    shortDescription: 'Whether a page can be analyzed and added to a search engine\'s index for potential ranking.',
    category: 'technical-seo',
    relatedTerms: ['crawlability', 'core-web-vitals', 'schema-markup'],
  },
  // On-Page SEO
  {
    slug: 'meta-description',
    term: 'Meta Description',
    shortDescription: 'An HTML element that provides a brief summary of a webpage, often displayed in search engine results.',
    category: 'on-page-seo',
    relatedTerms: ['title-tag', 'keyword-optimization', 'header-tags'],
  },
  {
    slug: 'title-tag',
    term: 'Title Tag',
    shortDescription: 'The HTML element that specifies the title of a webpage, displayed in search results and browser tabs.',
    category: 'on-page-seo',
    relatedTerms: ['meta-description', 'header-tags', 'keyword-optimization'],
  },
  {
    slug: 'keyword-optimization',
    term: 'Keyword Optimization',
    shortDescription: 'The process of researching, analyzing, and selecting the best keywords to target for organic search traffic.',
    category: 'on-page-seo',
    relatedTerms: ['title-tag', 'meta-description', 'header-tags'],
  },
  {
    slug: 'header-tags',
    term: 'Header Tags (H1-H6)',
    shortDescription: 'HTML elements that define headings and subheadings on a page, helping structure content for users and search engines.',
    category: 'on-page-seo',
    relatedTerms: ['title-tag', 'meta-description', 'keyword-optimization'],
  },
  // Off-Page SEO
  {
    slug: 'backlinks',
    term: 'Backlinks',
    shortDescription: 'Links from other websites that point to your site, acting as votes of confidence for search engines.',
    category: 'off-page-seo',
    relatedTerms: ['domain-authority', 'link-building', 'anchor-text'],
  },
  {
    slug: 'domain-authority',
    term: 'Domain Authority',
    shortDescription: 'A score developed by Moz that predicts how well a website will rank on search engine result pages.',
    category: 'off-page-seo',
    relatedTerms: ['backlinks', 'link-building', 'anchor-text'],
  },
  {
    slug: 'link-building',
    term: 'Link Building',
    shortDescription: 'The process of acquiring hyperlinks from other websites to improve search engine rankings and referral traffic.',
    category: 'off-page-seo',
    relatedTerms: ['backlinks', 'domain-authority', 'anchor-text'],
  },
];

export const categoryLabels: Record<GlossaryTerm['category'], string> = {
  'local-seo': 'Local SEO',
  'technical-seo': 'Technical SEO',
  'on-page-seo': 'On-Page SEO',
  'off-page-seo': 'Off-Page SEO',
};

export const categoryColors: Record<GlossaryTerm['category'], string> = {
  'local-seo': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'technical-seo': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'on-page-seo': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'off-page-seo': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
};
