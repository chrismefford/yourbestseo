import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { glossaryTerms, categoryLabels, categoryColors, GlossaryTerm } from '@/data/glossaryTerms';

const Glossary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<GlossaryTerm['category'] | 'all'>('all');

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((term) => {
      const matchesSearch = 
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || term.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const groupedTerms = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    filteredTerms.forEach((term) => {
      const firstLetter = term.term[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(term);
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredTerms]);

  const categories: Array<GlossaryTerm['category'] | 'all'> = ['all', 'local-seo', 'technical-seo', 'on-page-seo', 'off-page-seo'];

  return (
    <>
      <SEO 
        title="SEO Glossary - Terms & Definitions"
        description="Comprehensive glossary of SEO terms, definitions, and frequently asked questions. Learn about local SEO, technical SEO, on-page optimization, and link building."
        canonical="/glossary"
      />
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 badge-outline mb-6">
                <BookOpen className="w-4 h-4" />
                <span>SEO Knowledge Base</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                SEO <span className="text-gradient-gold">Glossary</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your comprehensive guide to SEO terminology. Search or browse through {glossaryTerms.length}+ terms 
                covering local SEO, technical SEO, on-page optimization, and link building strategies.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search terms..."
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
                  {category === 'all' ? 'All Categories' : categoryLabels[category]}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Terms Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredTerms.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No terms found matching "{searchQuery}"</p>
              </div>
            ) : (
              <div className="space-y-12">
                {groupedTerms.map(([letter, terms]) => (
                  <div key={letter}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-display font-bold text-primary">{letter}</span>
                      <div className="flex-1 h-px bg-border/50" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {terms.map((term) => (
                        <Link
                          key={term.slug}
                          to={`/glossary/${term.slug}`}
                          className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                        >
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                              {term.term}
                            </h3>
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {term.shortDescription}
                          </p>
                          <Badge variant="outline" className={`text-xs ${categoryColors[term.category]}`}>
                            {categoryLabels[term.category]}
                          </Badge>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(categoryLabels).map(([key, label]) => {
                const count = glossaryTerms.filter(t => t.category === key).length;
                return (
                  <div key={key} className="text-center p-6 rounded-xl bg-card border border-border/50">
                    <div className="text-3xl font-display font-bold text-primary mb-2">{count}</div>
                    <div className="text-sm text-muted-foreground">{label} Terms</div>
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

export default Glossary;
