import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, HelpCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface Question {
  slug: string;
  question: string;
  shortAnswer: string;
  category: 'basics' | 'local-seo' | 'technical' | 'content' | 'strategy' | 'tools';
}

const questions: Question[] = [
  // Basics
  { slug: 'what-is-seo', question: 'What is SEO?', shortAnswer: 'SEO (Search Engine Optimization) is the practice of optimizing websites to rank higher in search results.', category: 'basics' },
  { slug: 'how-long-does-seo-take', question: 'How long does SEO take to work?', shortAnswer: 'SEO typically takes 3-6 months to show significant results, depending on competition and effort.', category: 'basics' },
  { slug: 'how-much-does-seo-cost', question: 'How much does SEO cost?', shortAnswer: 'SEO costs range from $500-$5,000/month for small businesses to $10,000+/month for enterprises.', category: 'basics' },
  { slug: 'what-is-organic-traffic', question: 'What is organic traffic?', shortAnswer: 'Organic traffic consists of visitors who find your website through unpaid search engine results.', category: 'basics' },
  { slug: 'what-are-keywords', question: 'What are keywords in SEO?', shortAnswer: 'Keywords are search terms people use to find content, products, or services online.', category: 'basics' },
  { slug: 'what-is-a-backlink', question: 'What is a backlink?', shortAnswer: 'A backlink is a link from another website to yours, acting as a vote of confidence for search engines.', category: 'basics' },
  { slug: 'what-is-domain-authority', question: 'What is domain authority?', shortAnswer: 'Domain authority is a score predicting how well a website will rank in search results.', category: 'basics' },
  { slug: 'what-is-a-serp', question: 'What is a SERP?', shortAnswer: 'SERP (Search Engine Results Page) is the page displayed after entering a search query.', category: 'basics' },
  // Local SEO
  { slug: 'what-is-local-seo', question: 'What is local SEO?', shortAnswer: 'Local SEO optimizes your online presence to attract customers from local searches.', category: 'local-seo' },
  { slug: 'how-to-rank-in-google-maps', question: 'How do I rank higher in Google Maps?', shortAnswer: 'Optimize your Google Business Profile, get reviews, and ensure NAP consistency across directories.', category: 'local-seo' },
  { slug: 'what-is-google-business-profile', question: 'What is Google Business Profile?', shortAnswer: 'Google Business Profile is a free tool to manage your business presence on Google Search and Maps.', category: 'local-seo' },
  { slug: 'how-to-get-more-google-reviews', question: 'How do I get more Google reviews?', shortAnswer: 'Ask satisfied customers directly, make it easy with links, and respond to all reviews.', category: 'local-seo' },
  { slug: 'what-are-local-citations', question: 'What are local citations?', shortAnswer: 'Local citations are online mentions of your business name, address, and phone number.', category: 'local-seo' },
  { slug: 'what-is-nap-consistency', question: 'What is NAP consistency?', shortAnswer: 'NAP consistency means having identical Name, Address, and Phone info across all online platforms.', category: 'local-seo' },
  { slug: 'how-to-optimize-for-near-me-searches', question: 'How do I optimize for "near me" searches?', shortAnswer: 'Focus on local keywords, maintain accurate NAP, and optimize your Google Business Profile.', category: 'local-seo' },
  { slug: 'what-is-the-local-pack', question: 'What is the local pack?', shortAnswer: 'The local pack is the map section in Google showing 3 local business listings for location queries.', category: 'local-seo' },
  // Technical SEO
  { slug: 'what-is-technical-seo', question: 'What is technical SEO?', shortAnswer: 'Technical SEO involves optimizing website infrastructure for search engine crawling and indexing.', category: 'technical' },
  { slug: 'how-to-improve-page-speed', question: 'How do I improve page speed?', shortAnswer: 'Optimize images, enable caching, minify code, and use a CDN to improve loading times.', category: 'technical' },
  { slug: 'what-are-core-web-vitals', question: 'What are Core Web Vitals?', shortAnswer: 'Core Web Vitals are Google metrics measuring loading speed, interactivity, and visual stability.', category: 'technical' },
  { slug: 'what-is-mobile-first-indexing', question: 'What is mobile-first indexing?', shortAnswer: 'Mobile-first indexing means Google primarily uses your mobile site version for ranking.', category: 'technical' },
  { slug: 'what-is-an-xml-sitemap', question: 'What is an XML sitemap?', shortAnswer: 'An XML sitemap is a file listing your important pages to help search engines discover them.', category: 'technical' },
  { slug: 'what-is-robots-txt', question: 'What is robots.txt?', shortAnswer: 'Robots.txt is a file telling search engine crawlers which pages they can or cannot access.', category: 'technical' },
  { slug: 'what-is-schema-markup', question: 'What is schema markup?', shortAnswer: 'Schema markup is code helping search engines understand your content for rich results.', category: 'technical' },
  { slug: 'what-is-crawl-budget', question: 'What is crawl budget?', shortAnswer: 'Crawl budget is the number of pages search engines will crawl on your site in a given time.', category: 'technical' },
  { slug: 'what-are-canonical-tags', question: 'What are canonical tags?', shortAnswer: 'Canonical tags tell search engines which version of a page is the primary one to index.', category: 'technical' },
  { slug: 'how-to-fix-duplicate-content', question: 'How do I fix duplicate content?', shortAnswer: 'Use canonical tags, 301 redirects, or consolidate similar pages to fix duplicate content.', category: 'technical' },
  // Content SEO
  { slug: 'how-to-write-seo-content', question: 'How do I write SEO-friendly content?', shortAnswer: 'Research keywords, write for users first, use proper headers, and include internal links.', category: 'content' },
  { slug: 'what-is-keyword-research', question: 'What is keyword research?', shortAnswer: 'Keyword research is finding and analyzing search terms people use to find your content.', category: 'content' },
  { slug: 'how-long-should-blog-posts-be', question: 'How long should blog posts be for SEO?', shortAnswer: 'Aim for 1,500-2,500 words for comprehensive coverage, but quality matters more than length.', category: 'content' },
  { slug: 'what-are-long-tail-keywords', question: 'What are long-tail keywords?', shortAnswer: 'Long-tail keywords are longer, specific phrases with lower volume but higher conversion rates.', category: 'content' },
  { slug: 'what-is-search-intent', question: 'What is search intent?', shortAnswer: 'Search intent is the underlying goal behind a search query—what users really want to find.', category: 'content' },
  { slug: 'how-often-should-i-publish-content', question: 'How often should I publish content?', shortAnswer: 'Consistency matters more than frequency—aim for quality content on a sustainable schedule.', category: 'content' },
  { slug: 'what-is-content-freshness', question: 'What is content freshness?', shortAnswer: 'Content freshness refers to how recently content was updated, important for time-sensitive topics.', category: 'content' },
  { slug: 'what-is-eeat', question: 'What is E-E-A-T?', shortAnswer: 'E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness—quality guidelines.', category: 'content' },
  // Strategy
  { slug: 'how-to-do-competitor-analysis', question: 'How do I do SEO competitor analysis?', shortAnswer: 'Analyze competitors\' keywords, backlinks, content, and rankings to identify opportunities.', category: 'strategy' },
  { slug: 'what-is-link-building', question: 'What is link building?', shortAnswer: 'Link building is acquiring backlinks from other websites to improve search rankings.', category: 'strategy' },
  { slug: 'how-to-recover-from-google-penalty', question: 'How do I recover from a Google penalty?', shortAnswer: 'Identify the issue, fix violations, disavow bad links if needed, and submit a reconsideration request.', category: 'strategy' },
  { slug: 'what-is-white-hat-seo', question: 'What is white hat SEO?', shortAnswer: 'White hat SEO uses ethical tactics that follow search engine guidelines for sustainable results.', category: 'strategy' },
  { slug: 'what-is-black-hat-seo', question: 'What is black hat SEO?', shortAnswer: 'Black hat SEO uses manipulative tactics that violate guidelines and risk penalties.', category: 'strategy' },
  { slug: 'how-to-build-topic-clusters', question: 'How do I build topic clusters?', shortAnswer: 'Create pillar pages for broad topics and link to supporting cluster content for related subtopics.', category: 'strategy' },
  { slug: 'what-is-seo-roi', question: 'What is the ROI of SEO?', shortAnswer: 'SEO ROI measures the return on investment from organic search traffic compared to costs.', category: 'strategy' },
  { slug: 'seo-vs-ppc', question: 'What\'s the difference between SEO and PPC?', shortAnswer: 'SEO is organic (free) traffic; PPC is paid advertising. Both have different timelines and costs.', category: 'strategy' },
  // Tools
  { slug: 'what-is-google-search-console', question: 'What is Google Search Console?', shortAnswer: 'Google Search Console is a free tool to monitor and troubleshoot your site\'s search presence.', category: 'tools' },
  { slug: 'what-is-google-analytics', question: 'What is Google Analytics?', shortAnswer: 'Google Analytics tracks website traffic, user behavior, and conversions from all sources.', category: 'tools' },
  { slug: 'best-seo-tools', question: 'What are the best SEO tools?', shortAnswer: 'Popular tools include Ahrefs, Semrush, Moz, Screaming Frog, and Google\'s free tools.', category: 'tools' },
  { slug: 'how-to-track-keyword-rankings', question: 'How do I track keyword rankings?', shortAnswer: 'Use rank tracking tools like Ahrefs, Semrush, or free alternatives like Google Search Console.', category: 'tools' },
  { slug: 'how-to-do-a-site-audit', question: 'How do I do an SEO site audit?', shortAnswer: 'Use tools like Screaming Frog or Semrush to crawl your site and identify technical issues.', category: 'tools' },
  { slug: 'what-is-screaming-frog', question: 'What is Screaming Frog?', shortAnswer: 'Screaming Frog is a website crawler that helps identify SEO issues and opportunities.', category: 'tools' },
];

const categoryLabels: Record<Question['category'], string> = {
  'basics': 'SEO Basics',
  'local-seo': 'Local SEO',
  'technical': 'Technical SEO',
  'content': 'Content SEO',
  'strategy': 'SEO Strategy',
  'tools': 'SEO Tools',
};

const categoryColors: Record<Question['category'], string> = {
  'basics': 'border-amber-500/30 text-amber-400',
  'local-seo': 'border-emerald-500/30 text-emerald-400',
  'technical': 'border-blue-500/30 text-blue-400',
  'content': 'border-purple-500/30 text-purple-400',
  'strategy': 'border-orange-500/30 text-orange-400',
  'tools': 'border-pink-500/30 text-pink-400',
};

const Questions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Question['category'] | 'all'>('all');

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchesSearch = 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || q.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const groupedByCategory = useMemo(() => {
    const groups: Record<string, Question[]> = {};
    const categoryOrder: Question['category'][] = ['basics', 'local-seo', 'technical', 'content', 'strategy', 'tools'];
    
    categoryOrder.forEach(cat => {
      const questionsInCategory = filteredQuestions.filter(q => q.category === cat);
      if (questionsInCategory.length > 0) {
        groups[cat] = questionsInCategory;
      }
    });
    
    return Object.entries(groups);
  }, [filteredQuestions]);

  const categories: Array<Question['category'] | 'all'> = ['all', 'basics', 'local-seo', 'technical', 'content', 'strategy', 'tools'];

  return (
    <>
      <SEO 
        title="SEO Questions & Answers"
        description="Get expert answers to the most common SEO questions. Learn about search engine optimization, local SEO, technical SEO, content strategy, and more."
        canonical="/questions"
      />
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 badge-outline mb-6">
                <HelpCircle className="w-4 h-4" />
                <span>SEO Knowledge Base</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                SEO <span className="text-gradient-gold">Questions</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Get expert answers to the most common SEO questions. Browse through {questions.length}+ 
                questions covering SEO basics, local SEO, technical optimization, and strategy.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg bg-card border-border/50 focus:border-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 border-b border-border/50 sticky top-20 bg-background/95 backdrop-blur-sm z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  {category === 'all' ? 'All Questions' : categoryLabels[category]}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Questions Grid by Category */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredQuestions.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No questions found matching "{searchQuery}"</p>
              </div>
            ) : (
              <div className="space-y-16">
                {groupedByCategory.map(([category, questionsInGroup]) => (
                  <div key={category}>
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">
                        {categoryLabels[category as Question['category']]}
                      </h2>
                      <div className="flex-1 h-px bg-border/50" />
                      <span className="text-sm text-muted-foreground">
                        {questionsInGroup.length} questions
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {questionsInGroup.map((q) => (
                        <Link
                          key={q.slug}
                          to={`/questions/${q.slug}`}
                          className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                        >
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                              {q.question}
                            </h3>
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {q.shortAnswer}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Object.entries(categoryLabels).map(([key, label]) => {
                const count = questions.filter(q => q.category === key).length;
                return (
                  <div key={key} className="text-center p-6 rounded-xl bg-card border border-border/50">
                    <div className="text-3xl font-display font-bold text-primary mb-2">{count}</div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Questions;
export { questions };
