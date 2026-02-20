import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, ChevronDown, PenLine, BookOpen, HelpCircle, Search, Target, Link2, Zap, MapPin, Tag, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const services = [
  { name: "SEO Blog Posts", path: "/services/seo-blog-posts", price: "$300" },
  { name: "Technical SEO", path: "/services/technical-seo", price: "$300" },
  { name: "Google Business Profile", path: "/services/google-business-profile", price: "$300" },
  { name: "Keyword Research", path: "/services/keyword-research", price: "$300" },
  { name: "Competitor Analysis", path: "/services/competitor-analysis", price: "$300" },
  { name: "White-Hat Backlinks", path: "/services/white-hat-backlinks", price: "$300" },
  { name: "Local Citations", path: "/services/local-citations", price: "$300" },
  { name: "Review Management", path: "/services/review-management", price: "$300" },
  { name: "Schema Markup", path: "/services/schema-markup", price: "$300" },
  { name: "Ranking Reports", path: "/services/ranking-reports", price: "$300" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const learnDropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Pricing", href: "/pricing" },
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
    { name: "Local SEO Services", path: "/authority/local-seo-services" },
    { name: "SEO vs Google Ads", path: "/authority/seo-vs-google-ads" },
    { name: "White Label SEO", path: "/authority/white-label-seo" },
    { name: "SEO for Dentists", path: "/authority/seo-for-dentists" },
    { name: "Ecommerce SEO", path: "/authority/ecommerce-seo" },
    { name: "SEO for Service Businesses", path: "/authority/seo-for-service-businesses" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
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
    setIsServicesOpen(false);
    setIsLearnOpen(false);
  };

  const handleShowOffer = () => {
    window.dispatchEvent(new Event("urgencyBanner:show"));
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
            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button 
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen);
                  setIsLearnOpen(false);
                }}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-3 border-b border-border bg-secondary/30">
                      <p className="text-xs font-semibold text-primary tracking-widest uppercase">À La Carte Services</p>
                    </div>
                    <div className="py-2 max-h-80 overflow-y-auto">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                        >
                          <span>{service.name}</span>
                          <span className="text-primary font-medium text-xs">{service.price}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="p-3 border-t border-border bg-secondary/30">
                      <Link 
                        to="/services" 
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        View Services Hub
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Learn Dropdown */}
            <div className="relative" ref={learnDropdownRef}>
              <button 
                onClick={() => {
                  setIsLearnOpen(!isLearnOpen);
                  setIsServicesOpen(false);
                }}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Learn
                <ChevronDown className={`w-4 h-4 transition-transform ${isLearnOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isLearnOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="fixed left-1/2 -translate-x-1/2 top-[80px] w-[min(860px,calc(100vw-32px))] bg-card border border-border rounded-2xl shadow-2xl z-[200]"
                  >
                    {/* 3-column top section */}
                    <div className="grid grid-cols-3">
                      {/* Blog */}
                      <div className="p-6 border-r border-border hover:bg-muted/40 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0">
                            <PenLine className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-sm">SEO Blog</p>
                            <p className="text-xs text-muted-foreground">Strategies & case studies</p>
                          </div>
                        </div>
                        <div className="space-y-2 mb-4">
                          {["Monthly SEO strategies", "Real client results", "Algorithm updates", "How-to guides"].map(i => (
                            <p key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{i}
                            </p>
                          ))}
                        </div>
                        <button
                          onClick={() => { setIsLearnOpen(false); navigate('/blog'); window.scrollTo(0, 0); }}
                          className="text-xs font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          Read the blog <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Glossary */}
                      <div className="p-6 border-r border-border hover:bg-muted/40 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-9 h-9 rounded-xl bg-gold flex items-center justify-center shrink-0">
                            <BookOpen className="w-4 h-4 text-background" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-sm">SEO Glossary</p>
                            <p className="text-xs text-muted-foreground">50+ terms explained simply</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-2 mb-4">
                          {glossaryHighlights.map((term) => (
                            <Link
                              key={term.path}
                              to={term.path}
                              onClick={() => setIsLearnOpen(false)}
                              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors truncate"
                            >
                              <term.icon className="w-3 h-3 shrink-0 text-gold" />
                              {term.name}
                            </Link>
                          ))}
                        </div>
                        <Link to="/glossary" onClick={() => setIsLearnOpen(false)} className="text-xs font-semibold text-gold flex items-center gap-1 hover:gap-2 transition-all">
                          Browse all terms <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {/* Questions */}
                      <div className="p-6 hover:bg-muted/40 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-9 h-9 rounded-xl bg-navy flex items-center justify-center shrink-0">
                            <HelpCircle className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-sm">SEO Questions</p>
                            <p className="text-xs text-muted-foreground">50+ expert answers</p>
                          </div>
                        </div>
                        <div className="space-y-2 mb-4">
                          {["How long does SEO take?", "How much does SEO cost?", "SEO vs. PPC — which wins?", "Rank in Google Maps?"].map((q) => (
                            <p key={q} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="font-bold text-primary shrink-0">Q</span>{q}
                            </p>
                          ))}
                        </div>
                        <Link to="/questions" onClick={() => setIsLearnOpen(false)} className="text-xs font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                          See all answers <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    {/* Authority Guides strip */}
                    <div className="border-t border-border bg-muted/30 px-6 py-4">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-bold text-foreground uppercase tracking-widest">Authority Guides</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1">
                        {authorityGuides.map((guide) => (
                          <Link
                            key={guide.path}
                            to={guide.path}
                            onClick={() => setIsLearnOpen(false)}
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors py-1.5 px-2 rounded-lg hover:bg-muted flex items-center gap-1.5"
                          >
                            <ArrowRight className="w-3 h-3 shrink-0 text-primary" />
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
              Show offer
            </Button>
            <Button variant="hero" size="default" className="gap-2" asChild>
              <a href="tel:+16157726641">
                Call Us
                <ArrowRight className="w-4 h-4" />
              </a>
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
                Show offer
              </Button>

              {/* Services Section */}
              <div className="py-2">
                <p className="text-sm font-medium text-primary mb-3 tracking-widest uppercase">À La Carte Services</p>
                <div className="grid grid-cols-1 gap-1">
                  {services.slice(0, 5).map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground py-1.5"
                    >
                      <span>{service.name}</span>
                      <span className="text-primary text-xs">{service.price}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-primary font-medium mt-2 inline-block"
                >
                  View All Services →
                </Link>
              </div>

              {/* Learn Section for Mobile */}
              <div className="py-2">
                <p className="text-sm font-medium text-primary mb-3 tracking-widest uppercase">Learn SEO</p>
                <div className="grid grid-cols-1 gap-2">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate('/blog');
                      window.scrollTo(0, 0);
                    }}
                    className="flex items-center gap-3 text-foreground py-2 w-full text-left"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                      <PenLine className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium">SEO Blog</span>
                  </button>
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
                <a href="tel:+16157726641">
                  Call Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
