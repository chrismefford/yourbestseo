import { Head } from 'vite-react-ssg';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, User, Wrench, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { getRelatedServicesForQuestion } from '@/data/internalLinks';

interface QuestionPageProps {
  slug: string;
  question: string;
  shortAnswer: string;
  content: {
    introduction: string;
    sections: {
      id: string;
      title: string;
      content: string;
    }[];
  };
  tableOfContents: { id: string; title: string }[];
  chartData?: {
    type: 'bar' | 'pie';
    title: string;
    data: { name: string; value: number }[];
  };
  imageUrl: string;
  imageAlt: string;
  relatedQuestions?: { slug: string; question: string }[];
  relatedTerms?: { slug: string; term: string }[];
}

// Parse basic markdown **bold** syntax
const parseMarkdown = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const CHART_COLORS = ['#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'];

const QuestionPage = ({
  slug,
  question,
  shortAnswer,
  content,
  tableOfContents,
  chartData,
  imageUrl,
  imageAlt,
  relatedQuestions = [],
  relatedTerms = [],
}: QuestionPageProps) => {
  const SITE_URL = "https://yourbestseo.com";
  const pageTitle = `${question} | SEO FAQ`;
  const pageDescription = shortAnswer.length > 155 ? shortAnswer.substring(0, 152) + '...' : shortAnswer;
  const canonicalUrl = `${SITE_URL}/questions/${slug}`;

  // Schema markup for FAQ page
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: shortAnswer + ' ' + content.introduction
      }
    }]
  };

  // Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: question,
    description: pageDescription,
    image: imageUrl,
    author: {
      '@type': 'Organization',
      name: 'Your Best SEO'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Your Best SEO',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    }
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Questions', item: `${SITE_URL}/questions` },
      { '@type': 'ListItem', position: 3, name: question, item: canonicalUrl }
    ]
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Head>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/questions" className="hover:text-primary transition-colors">Questions</Link></li>
                <li>/</li>
                <li className="text-foreground truncate max-w-[200px]">{question}</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-4 gap-12">
              {/* Sidebar - Table of Contents */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-4">Quick Navigation</h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>

                  <Link
                    to="/questions"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to All Questions
                  </Link>
                </div>
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-3">
                {/* Header */}
                <header className="mb-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      5 min read
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      SEO Expert
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    {question}
                  </h1>

                  {/* Quick Answer Box */}
                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h2 className="font-semibold text-foreground mb-2">Quick Answer</h2>
                        <p className="text-muted-foreground">{shortAnswer}</p>
                      </div>
                    </div>
                  </div>
                </header>

                {/* Featured Image */}
                <figure className="mb-10">
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                    loading="lazy"
                  />
                </figure>

                {/* Introduction */}
                <section id="introduction" className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                  <div className="prose prose-invert max-w-none">
                    {content.introduction.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>

                {/* Content Sections */}
                {content.sections.map((section) => (
                  <section key={section.id} id={section.id} className="mb-10">
                    <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                    <div className="prose prose-invert max-w-none">
                      {section.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">
                          {parseMarkdown(paragraph)}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}

                {/* Chart Section */}
                {chartData && (
                  <section id="data-insights" className="mb-10">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Data Insights</h2>
                    <div className="bg-card/50 border border-border rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">{chartData.title}</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          {chartData.type === 'bar' ? (
                            <BarChart data={chartData.data}>
                              <XAxis dataKey="name" tick={{ fill: '#9CA3AF' }} />
                              <YAxis tick={{ fill: '#9CA3AF' }} />
                              <Tooltip
                                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                                labelStyle={{ color: '#F9FAFB' }}
                              />
                              <Bar dataKey="value" fill="#F59E0B" radius={[4, 4, 0, 0]} />
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
                                {chartData.data.map((_, index) => (
                                  <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip
                                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                                labelStyle={{ color: '#F9FAFB' }}
                              />
                            </PieChart>
                          )}
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </section>
                )}

                {/* Related Questions */}
                {relatedQuestions.length > 0 && (
                  <section id="related-questions" className="mb-10">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Related Questions</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {relatedQuestions.map((item) => (
                        <Link
                          key={item.slug}
                          to={`/questions/${item.slug}`}
                          className="bg-card/50 border border-border rounded-lg p-4 hover:border-primary/50 transition-colors group"
                        >
                          <span className="text-muted-foreground group-hover:text-primary transition-colors">
                            {item.question}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Related Glossary Terms */}
                {relatedTerms.length > 0 && (
                  <section id="related-terms" className="mb-10">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Related SEO Terms</h2>
                    <div className="flex flex-wrap gap-3">
                      {relatedTerms.map((term) => (
                        <Link
                          key={term.slug}
                          to={`/glossary/${term.slug}`}
                          className="px-4 py-2 bg-card/50 border border-border rounded-full text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                        >
                          {term.term}
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Related Services - Cross-linking to Services */}
                {(() => {
                  const relatedServicesList = getRelatedServicesForQuestion(slug);
                  if (relatedServicesList.length === 0) return null;
                  return (
                    <section id="related-services" className="mb-10">
                      <div className="flex items-center gap-2 mb-4">
                        <Wrench className="w-5 h-5 text-primary" />
                        <h2 className="text-2xl font-bold text-foreground">Related Services</h2>
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
                            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </section>
                  );
                })()}
              </article>
            </div>
          </div>
        </main>

        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default QuestionPage;
