import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, BookOpen, ArrowLeft, ExternalLink } from 'lucide-react';
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
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface GlossaryTermPageProps {
  slug: string;
  term: string;
  category: 'local-seo' | 'technical-seo' | 'on-page-seo' | 'off-page-seo';
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

  return (
    <>
      <SEO 
        title={`${term} - SEO Glossary Definition`}
        description={definition}
        canonical={`/glossary/${slug}`}
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
