import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, generateBreadcrumbSchema, generateWebPageSchema } from "@/components/SEO";
import { newsArticles, getAllCategories } from "@/data/newsArticles";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const News = () => {
  const categories = getAllCategories();

  const pageSchema = generateWebPageSchema({
    name: "SEO News & Industry Updates",
    description: "Stay informed with the latest SEO news, algorithm updates, and industry insights from Your Best SEO.",
    url: "/news"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "News", url: "/news" }
  ]);

  const newsListSchema = {
    "@type": "CollectionPage",
    name: "SEO News & Updates",
    description: "Latest SEO news, algorithm updates, and industry insights",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: newsArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://yourbestseo.com/news/${article.slug}`,
        name: article.title
      }))
    }
  };

  return (
    <>
      <SEO
        title="SEO News & Industry Updates"
        description="Stay informed with the latest SEO news, algorithm updates, and industry insights. Expert analysis on Google updates, local SEO trends, and digital marketing strategies."
        canonical="/news"
        type="website"
        schema={[pageSchema, breadcrumbSchema, newsListSchema]}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="container mx-auto px-4 relative z-10">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                  <li>/</li>
                  <li className="text-foreground font-medium">News</li>
                </ol>
              </nav>
              
              <header className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  SEO News & Updates
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Stay ahead of the curve with the latest SEO news, algorithm updates, and industry insights from our team of experts.
                </p>
              </header>
            </div>
          </section>

          {/* Categories Filter */}
          <section className="py-6 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  All
                </Badge>
                {categories.map((category) => (
                  <Badge 
                    key={category} 
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Articles List */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid gap-8 lg:gap-12">
                {newsArticles.map((article, index) => (
                  <article 
                    key={article.id}
                    className={`group ${index === 0 ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''}`}
                    itemScope 
                    itemType="https://schema.org/NewsArticle"
                  >
                    {/* Featured Image Placeholder */}
                    {index === 0 && (
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-6 lg:mb-0 flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Featured Image</span>
                      </div>
                    )}
                    
                    <div className={`${index !== 0 ? 'border-b border-border pb-8' : ''}`}>
                      {/* Category & Date */}
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <Badge variant="secondary" itemProp="articleSection">
                          {article.category}
                        </Badge>
                        <time 
                          dateTime={article.datePublished}
                          itemProp="datePublished"
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.datePublished).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <span className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                        <Link 
                          to={`/news/${article.slug}`}
                          itemProp="url"
                        >
                          <span itemProp="headline">{article.title}</span>
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p 
                        className="text-muted-foreground mb-4 leading-relaxed"
                        itemProp="description"
                      >
                        {article.excerpt}
                      </p>

                      {/* Author & Read More */}
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div 
                          className="flex items-center text-sm text-muted-foreground"
                          itemProp="author"
                          itemScope
                          itemType="https://schema.org/Person"
                        >
                          <User className="w-4 h-4 mr-1" />
                          <span itemProp="name">{article.author}</span>
                          <span className="mx-2">·</span>
                          <span>{article.authorRole}</span>
                        </div>
                        
                        <Link 
                          to={`/news/${article.slug}`}
                          className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>

                      {/* Tags */}
                      {index === 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {article.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="inline-flex items-center text-xs text-muted-foreground"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Hidden structured data */}
                      <meta itemProp="dateModified" content={article.dateModified || article.datePublished} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest SEO news and insights delivered directly to your inbox. No spam, just valuable updates.
              </p>
              <Link 
                to="/free-audit"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Free SEO Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default News;
