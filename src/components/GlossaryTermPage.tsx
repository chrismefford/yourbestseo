import { useEffect, lazy, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, BookOpen, ArrowLeft, ExternalLink, Wrench, HelpCircle, Lightbulb, AlertTriangle, CheckCircle, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { glossaryTerms, categoryLabels, categoryColors } from '@/data/glossaryTerms';
import { getRelatedQuestions, getRelatedServices } from '@/data/internalLinks';

// Lazy load heavy chart component
const GlossaryChart = lazy(() => import('@/components/GlossaryChart'));

// Question title mappings for display
const questionTitles: Record<string, string> = {
  "what-is-seo": "What is SEO?",
  "how-long-does-seo-take": "How Long Does SEO Take?",
  "how-much-does-seo-cost": "How Much Does SEO Cost?",
  "what-is-organic-traffic": "What is Organic Traffic?",
  "what-is-a-backlink": "What is a Backlink?",
  "what-is-domain-authority": "What is Domain Authority?",
  "what-is-a-serp": "What is a SERP?",
  "what-is-local-seo": "What is Local SEO?",
  "how-to-rank-in-google-maps": "How to Rank in Google Maps?",
  "what-is-google-business-profile": "What is Google Business Profile?",
  "how-to-get-more-google-reviews": "How to Get More Google Reviews?",
  "what-are-local-citations": "What Are Local Citations?",
  "what-is-nap-consistency": "What is NAP Consistency?",
  "what-is-the-local-pack": "What is the Local Pack?",
  "what-is-technical-seo": "What is Technical SEO?",
  "how-to-improve-page-speed": "How to Improve Page Speed?",
  "what-are-core-web-vitals": "What Are Core Web Vitals?",
  "what-is-crawl-budget": "What is Crawl Budget?",
  "what-is-schema-markup": "What is Schema Markup?",
  "what-is-mobile-first-indexing": "What is Mobile-First Indexing?",
  "what-is-on-page-seo": "What is On-Page SEO?",
  "what-is-off-page-seo": "What is Off-Page SEO?",
  "what-is-keyword-research": "What is Keyword Research?",
  "how-to-do-local-keyword-research": "How to Do Local Keyword Research?",
  "what-is-an-xml-sitemap": "What is an XML Sitemap?",
  "what-is-robots-txt": "What is Robots.txt?",
  "what-are-canonical-tags": "What Are Canonical Tags?",
  "how-to-fix-duplicate-content": "How to Fix Duplicate Content?",
  "what-are-long-tail-keywords": "What Are Long-Tail Keywords?",
  "what-is-eeat": "What is E-E-A-T?",
  "how-to-write-seo-content": "How to Write SEO Content?",
  "how-often-should-i-publish-content": "How Often Should I Publish Content?",
  "what-is-content-freshness": "What is Content Freshness?",
  "how-to-do-competitor-analysis": "How to Do Competitor Analysis?",
  "what-is-link-building": "What is Link Building?",
  "what-is-white-hat-seo": "What is White Hat SEO?",
  "how-to-build-topic-clusters": "How to Build Topic Clusters?",
  "seo-vs-ppc": "SEO vs PPC: Which is Better?",
  "what-is-google-search-console": "What is Google Search Console?",
  "how-to-track-keyword-rankings": "How to Track Keyword Rankings?",
};

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface GlossaryTermPageProps {
  slug: string;
  term: string;
  category: 'local-seo' | 'technical-seo' | 'on-page-seo' | 'off-page-seo' | 'fundamentals' | 'content-seo';
  definition: string;
  content: {
    introduction: string;
    sections: {
      id: string;
      title: string;
      content: string;
    }[];
    // New optional fields for expanded content
    whyItMatters?: string;
    howItWorks?: string;
    bestPractices?: string[];
    commonMistakes?: string[];
    example?: string;
  };
  tableOfContents: TableOfContentsItem[];
  chartData: {
    type: 'bar' | 'pie';
    title: string;
    data: { name: string; value: number; color?: string }[];
  };
  imageUrl: string;
  imageAlt: string;
}

// CHART_COLORS moved to GlossaryChart component

// Helper function to render content with proper paragraph breaks and markdown formatting
const renderFormattedContent = (text: string) => {
  // Split by double newlines to create separate paragraphs
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim());
  
  return paragraphs.map((paragraph, pIndex) => {
    // Check if this paragraph starts with a bold header (e.g., **Header**)
    const headerMatch = paragraph.match(/^\*\*([^*]+)\*\*:?\s*([\s\S]*)/);
    
    if (headerMatch) {
      const headerText = headerMatch[1];
      const remainingText = headerMatch[2];
      
      // Check if remaining text contains list items
      const hasListItems = remainingText.includes('\n-') || remainingText.includes('\n•');
      
      if (hasListItems) {
        const lines = remainingText.split('\n');
        const introText = lines[0]?.trim();
        const listItems = lines.slice(1).filter(l => l.trim().startsWith('-') || l.trim().startsWith('•'));
        
        return (
          <div key={pIndex} className="mb-4">
            <h3 className="font-semibold text-foreground mb-2">{headerText}</h3>
            {introText && <p className="text-muted-foreground mb-2">{introText}</p>}
            <ul className="list-disc pl-5 space-y-1">
              {listItems.map((item, i) => (
                <li key={i} className="text-muted-foreground">{item.replace(/^[-•]\s*/, '')}</li>
              ))}
            </ul>
          </div>
        );
      }
      
      return (
        <div key={pIndex} className="mb-4">
          <h3 className="font-semibold text-foreground mb-2">{headerText}</h3>
          <p className="text-muted-foreground leading-relaxed">{renderInlineMarkdown(remainingText)}</p>
        </div>
      );
    }
    
    // Handle regular paragraphs with inline markdown
    return (
      <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4">
        {renderInlineMarkdown(paragraph)}
      </p>
    );
  });
};

// Helper function to render inline markdown (bold text)
const renderInlineMarkdown = (text: string) => {
  if (!text) return null;
  
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const GlossaryTermPage = ({
  slug,
  term,
  category,
  definition,
  content,
  tableOfContents,
  chartData,
  imageUrl,
  imageAlt,
}: GlossaryTermPageProps) => {
  const location = useLocation();
  
  // Scroll to top when navigating to a new glossary page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const termData = glossaryTerms.find(t => t.slug === slug);
  const relatedTerms = termData?.relatedTerms
    .map(rt => glossaryTerms.find(t => t.slug === rt))
    .filter(Boolean) || [];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  // Generate expanded table of contents including new sections
  const expandedToc = [
    ...tableOfContents,
    ...(content.whyItMatters ? [{ id: 'why-it-matters', title: 'Why It Matters' }] : []),
    ...(content.howItWorks ? [{ id: 'how-it-works', title: 'How It Works' }] : []),
    ...(content.bestPractices?.length ? [{ id: 'best-practices', title: 'Best Practices' }] : []),
    ...(content.commonMistakes?.length ? [{ id: 'common-mistakes', title: 'Common Mistakes' }] : []),
    ...(content.example ? [{ id: 'real-world-example', title: 'Real-World Example' }] : []),
  ];

  const SITE_URL = "https://yourbestseo.com";
  
  // Generate schema markup for SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": term,
    "description": definition,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "SEO Glossary",
      "url": `${SITE_URL}/glossary`
    },
    "url": `${SITE_URL}/glossary/${slug}`
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `What is ${term}? - SEO Glossary Definition`,
    "description": definition,
    "image": imageUrl,
    "author": {
      "@type": "Organization",
      "name": "Your Best SEO",
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "Your Best SEO",
      "url": SITE_URL
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/glossary/${slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "SEO Glossary",
        "item": `${SITE_URL}/glossary`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": term,
        "item": `${SITE_URL}/glossary/${slug}`
      }
    ]
  };

  return (
    <>
      <SEO 
        title={`${term} - SEO Glossary`}
        description={`Learn what ${term} means in SEO. ${definition.substring(0, 120)}...`}
        canonical={`/glossary/${slug}`}
        schema={[schemaMarkup, articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/glossary">Glossary</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{term}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar - Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 p-6 rounded-xl bg-card border border-border/50">
                <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {expandedToc.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1 pl-4 border-l-2 border-border hover:border-primary"
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
                
                <div className="mt-6 pt-6 border-t border-border/50">
                  <Link to="/glossary">
                    <Button variant="outline" size="sm" className="w-full">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Glossary
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="max-w-3xl">
              {/* Header */}
              <header className="mb-8">
                <Badge variant="outline" className={`mb-4 ${categoryColors[category]}`}>
                  {categoryLabels[category]}
                </Badge>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  What is <span className="text-gradient-gold">{term}</span>?
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {definition}
                </p>
              </header>

              {/* Mobile TOC */}
              <div className="lg:hidden mb-8 p-4 rounded-xl bg-card border border-border/50">
                <h3 className="font-display font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Quick Navigation
                </h3>
                <div className="flex flex-wrap gap-2">
                  {expandedToc.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Image */}
              <figure className="mb-8">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full h-64 md:h-80 object-cover rounded-xl border border-border/50"
                />
                <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                  {imageAlt}
                </figcaption>
              </figure>

              {/* Introduction */}
              <section id="introduction" className="mb-10">
                <h2 className="font-display text-2xl font-bold mb-4">Introduction</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  {renderFormattedContent(content.introduction)}
                </div>
              </section>

              {/* Why It Matters Section */}
              {content.whyItMatters && (
                <section id="why-it-matters" className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">Why {term} Matters for SEO</h2>
                  </div>
                  <div className="prose prose-invert prose-lg max-w-none">
                    {renderFormattedContent(content.whyItMatters)}
                  </div>
                </section>
              )}

              {/* How It Works Section */}
              {content.howItWorks && (
                <section id="how-it-works" className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">How {term} Works</h2>
                  </div>
                  <div className="prose prose-invert prose-lg max-w-none">
                    {renderFormattedContent(content.howItWorks)}
                  </div>
                </section>
              )}

              {/* Content Sections */}
              {content.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-10">
                  <h2 className="font-display text-2xl font-bold mb-4">{section.title}</h2>
                  <div className="prose prose-invert prose-lg max-w-none">
                    {renderFormattedContent(section.content)}
                  </div>
                </section>
              ))}

              {/* Best Practices Section */}
              {content.bestPractices && content.bestPractices.length > 0 && (
                <section id="best-practices" className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">{term} Best Practices</h2>
                  </div>
                  <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                    <ul className="space-y-4">
                      {content.bestPractices.map((practice, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {/* Common Mistakes Section */}
              {content.commonMistakes && content.commonMistakes.length > 0 && (
                <section id="common-mistakes" className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">Common {term} Mistakes to Avoid</h2>
                  </div>
                  <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20">
                    <ul className="space-y-4">
                      {content.commonMistakes.map((mistake, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {/* Real-World Example Section */}
              {content.example && (
                <section id="real-world-example" className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">Real-World Example</h2>
                  </div>
                  <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                    {renderFormattedContent(content.example)}
                  </div>
                </section>
              )}

              {/* Chart Section - Lazy loaded for performance */}
              <section id="data-insights" className="mb-10">
                <h2 className="font-display text-2xl font-bold mb-4">{chartData.title}</h2>
                <Suspense fallback={
                  <div className="h-64 w-full flex items-center justify-center bg-card/30 rounded-xl animate-pulse">
                    <span className="text-muted-foreground text-sm">Loading chart...</span>
                  </div>
                }>
                  <GlossaryChart chartData={chartData} />
                </Suspense>
              </section>

              {/* Related Terms */}
              {relatedTerms.length > 0 && (
                <section id="related-terms" className="mb-10">
                  <h2 className="font-display text-2xl font-bold mb-4">Related SEO Terms</h2>
                  <p className="text-muted-foreground mb-4">
                    Understanding {term} is easier when you also know these related SEO concepts. Each term connects to help you build a complete picture of how search engine optimization works.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {relatedTerms.map((related) => related && (
                      <Link
                        key={related.slug}
                        to={`/glossary/${related.slug}`}
                        className="group p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium group-hover:text-primary transition-colors">
                            {related.term}
                          </span>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Related Questions - Cross-linking to Questions */}
              {(() => {
                const relatedQuestionSlugs = getRelatedQuestions(slug);
                if (relatedQuestionSlugs.length === 0) return null;
                return (
                  <section id="related-questions" className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      <h2 className="font-display text-2xl font-bold">Related Questions</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Get deeper insights into {term} by exploring these commonly asked questions from SEO professionals and business owners.
                    </p>
                    <div className="space-y-2">
                      {relatedQuestionSlugs.slice(0, 4).map((qSlug) => (
                        <Link
                          key={qSlug}
                          to={`/questions/${qSlug}`}
                          className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all"
                        >
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <span className="text-muted-foreground group-hover:text-primary transition-colors">
                            {questionTitles[qSlug] || qSlug}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </section>
                );
              })()}

              {/* Related Services - Cross-linking to Services */}
              {(() => {
                const relatedServicesList = getRelatedServices(slug);
                if (relatedServicesList.length === 0) return null;
                return (
                  <section id="related-services" className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                      <Wrench className="w-5 h-5 text-primary" />
                      <h2 className="font-display text-2xl font-bold">Related Services</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Ready to implement {term} strategies for your business? Our professional SEO services can help you get results faster.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {relatedServicesList.slice(0, 4).map((service) => (
                        <Link
                          key={service.slug}
                          to={service.path}
                          className="group flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/50 transition-all"
                        >
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {service.name}
                          </span>
                          <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </section>
                );
              })()}

              {/* Key Takeaways Summary */}
              <section className="mb-10 p-6 rounded-xl bg-secondary/30 border border-border/50">
                <h2 className="font-display text-xl font-bold mb-4">Key Takeaways: {term}</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{term} is essential for improving your website's search engine visibility and rankings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Proper implementation can lead to increased organic traffic, better user experience, and higher conversion rates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Avoid common mistakes by following best practices and staying updated with the latest SEO guidelines.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>Consider working with SEO professionals if you need help implementing {term} strategies effectively.</span>
                  </li>
                </ul>
              </section>

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                <h2 className="font-display text-2xl font-bold mb-3">Need Help With Your SEO?</h2>
                <p className="text-muted-foreground mb-6">
                  Our team of SEO experts specializes in {term} and can help you implement these strategies to improve your search rankings. Whether you're just getting started or looking to optimize your existing efforts, we're here to help you achieve measurable results.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/free-audit">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Get Free SEO Audit
                    </Button>
                  </Link>
                  <Link to="/glossary">
                    <Button variant="outline">
                      Explore More Terms
                    </Button>
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GlossaryTermPage;
