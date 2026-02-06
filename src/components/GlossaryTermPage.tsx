import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, BookOpen, ArrowLeft, ExternalLink, Wrench, HelpCircle } from 'lucide-react';
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
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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

const CHART_COLORS = ['hsl(40, 91%, 55%)', 'hsl(220, 25%, 30%)', 'hsl(220, 25%, 40%)', 'hsl(220, 25%, 50%)', 'hsl(220, 25%, 60%)'];

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

  const chartConfig = chartData.data.reduce((acc, item, index) => {
    acc[item.name] = {
      label: item.name,
      color: item.color || CHART_COLORS[index % CHART_COLORS.length],
    };
    return acc;
  }, {} as Record<string, { label: string; color: string }>);

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
                  {tableOfContents.map((item) => (
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
                  {tableOfContents.map((item) => (
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
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {content.introduction}
                  </p>
                </div>
              </section>

              {/* Content Sections */}
              {content.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-10">
                  <h2 className="font-display text-2xl font-bold mb-4">{section.title}</h2>
                  <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </section>
              ))}

              {/* Chart Section */}
              <section id="data-insights" className="mb-10">
                <h2 className="font-display text-2xl font-bold mb-4">{chartData.title}</h2>
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <ChartContainer config={chartConfig} className="h-64 w-full">
                    {chartData.type === 'bar' ? (
                      <BarChart data={chartData.data}>
                        <XAxis dataKey="name" tick={{ fill: 'hsl(215, 15%, 60%)', fontSize: 12 }} />
                        <YAxis tick={{ fill: 'hsl(215, 15%, 60%)', fontSize: 12 }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="value" fill="hsl(40, 91%, 55%)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    ) : (
                      <PieChart>
                        <Pie
                          data={chartData.data}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {chartData.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    )}
                  </ChartContainer>
                </div>
              </section>

              {/* Related Terms */}
              {relatedTerms.length > 0 && (
                <section id="related-terms" className="mb-10">
                  <h2 className="font-display text-2xl font-bold mb-4">Related SEO Terms</h2>
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

              {/* CTA */}
              <section className="p-8 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                <h2 className="font-display text-2xl font-bold mb-3">Need Help With Your SEO?</h2>
                <p className="text-muted-foreground mb-6">
                  Our team of SEO experts can help you implement these strategies and improve your search rankings.
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
