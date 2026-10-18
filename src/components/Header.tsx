import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Phone, CalendarCheck, ChevronDown, PenLine, BookOpen, HelpCircle, Search, Target, Link2, Zap, MapPin, Tag, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const learnDropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Your Growth", href: "/#growth" },
    { label: "About Me", href: "/about" },
    { label: "Book a Call", href: "/book" },
    { label: "Contact", href: "/#contact" },
  ];

  const glossaryHighlights = [
    { name: "Search Engine Optimization", path: "/glossary/search-engine-optimization", icon: Search },
    { name: "Keyword Research", path: "/glossary/keyword-research", icon: Target },
    { name: "Backlinks", path: "/glossary/backlinks", icon: Link2 },
    { name: "Core Web Vitals", path: "/glossary/core-web-vitals", icon: Zap },
    { name: "Local SEO", path: "/glossary/local-citations", icon: MapPin },
    { name: "Schema Markup", path: "/glossary/schema-markup", icon: Tag },
  ];

  const authorityGuides = [
    { name: "Revenue-Driven SEO", path: "/authority/revenue-driven-seo" },
    { name: "AI Search Optimization", path: "/authority/ai-search-seo" },
    { name: "Why You're Not Ranking", path: "/authority/why-not-ranking" },
    { name: "Technical SEO Audit", path: "/authority/technical-seo-audit" },
    { name: "Local Search Rankings", path: "/authority/local-seo-services" },
    { name: "SEO vs Google Ads", path: "/authority/seo-vs-google-ads" },
        { name: "SEO for Dentists", path: "/authority/seo-for-dentists" },
    { name: "Ecommerce SEO", path: "/authority/ecommerce-seo" },
    { name: "SEO for Service Businesses", path: "/authority/seo-for-service-businesses" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (learnDropdownRef.current && !learnDropdownRef.current.contains(event.target as Node)) {
        setIsLearnOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(href.substring(2));
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const closeAllDropdowns = () => {
    setIsLearnOpen(false);
  };

  const handleShowOffer = () => {
    setIsMenuOpen(false);
    navigate("/free-audit");
  };

  return (
    <header
      className="fixed left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      style={{ top: "var(--urgency-offset, 0px)" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-display font-bold text-sm tracking-[0.2em] text-primary">
            YOUR BEST SEO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Learn Dropdown */}
            <div className="relative" ref={learnDropdownRef}>
              <Button variant="ghost" size="sm"
                aria-expanded={isLearnOpen}
                onClick={() => {
                  setIsLearnOpen(!isLearnOpen);
                              }}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Learn
                <ChevronDown className={`w-4 h-4 transition-transform ${isLearnOpen ? 'rotate-180' : ''}`} />
              </Button>
              <AnimatePresence>
                {isLearnOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 12, x: "-50%" }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="learn-panel fixed left-1/2 top-[80px] w-[min(820px,calc(100vw-32px))] bg-card border border-border rounded-2xl shadow-2xl z-[200] overflow-hidden"
                  >
                    {/* 3 big hero cards */}
                    <div className="grid grid-cols-3 divide-x divide-border">

                      {/* AI Search */}
                      <Link
                        to="/authority/ai-search-seo"
                        onClick={() => setIsLearnOpen(false)}
                        className="group text-left p-8 hover:bg-muted/70 transition-colors flex flex-col gap-5"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                          <PenLine className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-foreground mb-1">Get Found by AI</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">How to show up when customers ask ChatGPT, Perplexity, and Claude.</p>
                        </div>
                        <span className="text-sm font-semibold text-primary flex items-center gap-1.5 group-hover:gap-3 transition-all mt-auto">
                          Read the guide <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>

                      {/* Glossary */}
                      <Link
                        to="/glossary"
                        onClick={() => setIsLearnOpen(false)}
                        className="group text-left p-8 hover:bg-muted/70 transition-colors flex flex-col gap-5"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                          <BookOpen className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-foreground mb-1">SEO Glossary</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">50+ terms explained in plain English. No jargon, no fluff — just clarity.</p>
                        </div>
                        <span className="text-sm font-semibold text-primary flex items-center gap-1.5 group-hover:gap-3 transition-all mt-auto">
                          Browse all terms <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>

                      {/* Questions */}
                      <Link
                        to="/questions"
                        onClick={() => setIsLearnOpen(false)}
                        className="group text-left p-8 hover:bg-muted/70 transition-colors flex flex-col gap-5"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center group-hover:scale-110 transition-transform">
                          <HelpCircle className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-foreground mb-1">SEO Questions</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">50+ straight answers to the questions your customers are already Googling.</p>
                        </div>
                        <span className="text-sm font-semibold text-navy flex items-center gap-1.5 group-hover:gap-3 transition-all mt-auto">
                          See all answers <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>

                    {/* Authority Guides strip */}
                    <div className="border-t border-border bg-muted px-8 py-5">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold text-foreground uppercase tracking-widest">Authority Guides</span>
                        <span className="text-xs text-muted-foreground">— deep dives on specific topics</span>
                      </div>
                      <div className="grid grid-cols-5 gap-2">
                        {authorityGuides.map((guide) => (
                          <Link
                            key={guide.path}
                            to={guide.path}
                            onClick={() => setIsLearnOpen(false)}
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-xl hover:bg-muted flex items-start gap-1.5"
                          >
                            <ArrowRight className="w-3 h-3 shrink-0 text-primary mt-0.5" />
                            {guide.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
            
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleShowOffer}>
              Search Check
            </Button>
            <a href="tel:+16199036599" className="flex items-center gap-1.5 px-2 text-sm font-semibold text-foreground hover:text-primary whitespace-nowrap">
              <Phone className="w-4 h-4 text-primary" />(619) 903-6599
            </a>
            <Button variant="hero" size="default" className="gap-2" asChild>
              <Link to="/book">
                <CalendarCheck className="w-4 h-4" />
                Book a Call
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Button variant="ghost" size="lg" className="w-full" onClick={handleShowOffer}>
                Search Check
              </Button>

              {/* Learn Section for Mobile */}
              <div className="py-2">
                <p className="text-sm font-medium text-primary mb-3 tracking-widest uppercase">Learn SEO</p>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    to="/authority/ai-search-seo"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 text-foreground py-2 w-full text-left"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                      <PenLine className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium">Get Found by AI</span>
                  </Link>
                  <Link
                    to="/glossary"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 text-foreground py-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold/60 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-navy" />
                    </div>
                    <span className="font-medium">SEO Glossary</span>
                  </Link>
                  <Link
                    to="/questions"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 text-foreground py-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-500/60 flex items-center justify-center">
                      <HelpCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">SEO Questions</span>
                  </Link>
                </div>
              </div>

              {/* Authority Guides for Mobile */}
              <div className="py-2">
                <p className="text-sm font-medium text-primary mb-3 tracking-widest uppercase">Authority Guides</p>
                <div className="grid grid-cols-1 gap-1">
                  {authorityGuides.map((guide) => (
                    <Link
                      key={guide.path}
                      to={guide.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm text-muted-foreground hover:text-foreground py-1.5"
                    >
                      {guide.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-lg font-medium text-foreground py-2 text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-lg font-medium text-foreground py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}


              <Button variant="hero" size="lg" className="mt-4 w-full gap-2" asChild>
                <Link to="/book" onClick={() => setIsMenuOpen(false)}>
                  <CalendarCheck className="w-4 h-4" />
                  Book a Free Call
                </Link>
              </Button>
              <a href="tel:+16199036599" className="mt-3 flex items-center justify-center gap-2 font-semibold text-foreground">
                <Phone className="w-4 h-4 text-primary" />Call Chris: (619) 903-6599
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
