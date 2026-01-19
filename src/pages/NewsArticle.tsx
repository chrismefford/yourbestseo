import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, generateBreadcrumbSchema, generateArticleSchema } from "@/components/SEO";
import { getArticleBySlug, newsArticles } from "@/data/newsArticles";
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.excerpt,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: article.author,
    url: `/news/${article.slug}`
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "News", url: "/news" },
    { name: article.title, url: `/news/${article.slug}` }
  ]);

  // Get related articles (same category, excluding current)
  const relatedArticles = newsArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      });
    }
  };

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/news/${article.slug}`}
        type="article"
        schema={[articleSchema, breadcrumbSchema]}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          <article 
            className="py-12 md:py-20"
            itemScope 
            itemType="https://schema.org/NewsArticle"
          >
            <div className="container mx-auto px-4">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                  <li>/</li>
                  <li><Link to="/news" className="hover:text-primary transition-colors">News</Link></li>
                  <li>/</li>
                  <li className="text-foreground font-medium truncate max-w-[200px]">{article.title}</li>
                </ol>
              </nav>

              {/* Back Link */}
              <Link 
                to="/news"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Link>

              <div className="max-w-4xl mx-auto">
                {/* Article Header */}
                <header className="mb-12">
                  <Badge variant="secondary" className="mb-4" itemProp="articleSection">
                    {article.category}
                  </Badge>
                  
                  <h1 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
                    itemProp="headline"
                  >
                    {article.title}
                  </h1>

                  <p 
                    className="text-xl text-muted-foreground mb-8 leading-relaxed"
                    itemProp="description"
                  >
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border">
                    <div 
                      className="flex items-center"
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground" itemProp="name">{article.author}</p>
                        <p className="text-sm text-muted-foreground">{article.authorRole}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <time dateTime={article.datePublished} itemProp="datePublished">
                        {new Date(article.datePublished).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>

                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {article.readTime}
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleShare}
                      className="ml-auto"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>

                  {/* Hidden structured data */}
                  <meta itemProp="dateModified" content={article.dateModified || article.datePublished} />
                  <link itemProp="mainEntityOfPage" href={`https://yourbestseo.com/news/${article.slug}`} />
                </header>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none
                    prose-headings:text-foreground prose-headings:font-bold
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                    prose-ul:text-muted-foreground prose-ul:my-6
                    prose-ol:text-muted-foreground prose-ol:my-6
                    prose-li:my-2
                    prose-strong:text-foreground
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                  itemProp="articleBody"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <footer className="mt-12 pt-8 border-t border-border">
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    <Tag className="w-4 h-4 text-muted-foreground" />
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Author Bio */}
                  <div className="bg-muted/50 rounded-2xl p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <User className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground mb-1">{article.author}</p>
                        <p className="text-sm text-primary mb-3">{article.authorRole}</p>
                        <p className="text-muted-foreground">
                          Expert in SEO strategy and digital marketing with years of experience helping businesses improve their online visibility and search rankings.
                        </p>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="py-16 bg-muted/30">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedArticles.map((related) => (
                    <article key={related.id} className="group">
                      <Badge variant="secondary" className="mb-3">
                        {related.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        <Link to={`/news/${related.slug}`}>
                          {related.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {related.excerpt}
                      </p>
                      <time className="text-xs text-muted-foreground">
                        {new Date(related.datePublished).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Improve Your SEO?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get a free comprehensive SEO audit and discover opportunities to boost your search rankings.
              </p>
              <Link 
                to="/free-audit"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Free SEO Audit
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NewsArticle;
