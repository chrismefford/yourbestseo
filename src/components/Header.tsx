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
                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.96 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    style={{ right: 0 }}
                    className="absolute top-full mt-4 w-[720px] bg-card border border-border/60 rounded-3xl shadow-[0_32px_80px_-12px_rgba(0,0,0,0.35)] overflow-hidden z-50"
                  >
                    {/* Colorful top banner */}
                    <div className="relative px-6 py-4 bg-gradient-to-r from-primary/10 via-accent/10 to-emerald-500/10 border-b border-border/50 flex items-center justify-between overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.15),transparent_60%)]" />
                      <div>
                        <p className="text-sm font-black text-foreground tracking-tight">Learn SEO — Free Forever</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Guides, glossary & answers written by real SEO experts</p>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="inline-flex items-center gap-1 bg-primary/10 text-primary font-semibold px-2.5 py-1 rounded-full">50+ terms</span>
                        <span className="inline-flex items-center gap-1 bg-accent/20 text-accent-foreground font-semibold px-2.5 py-1 rounded-full">50+ Q&As</span>
                        <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-500 font-semibold px-2.5 py-1 rounded-full">10 guides</span>
                      </div>
                    </div>

                    {/* Main 3-col grid */}
                    <div className="grid grid-cols-3 divide-x divide-border/50">
                      {/* Blog */}
                      <div className="p-6 group hover:bg-primary/5 transition-all duration-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <PenLine className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-black text-foreground text-base leading-tight">SEO Blog</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Monthly strategies & updates</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-1.5 mb-5">
                          {["Monthly SEO strategies", "Real client case studies", "Algorithm updates", "How-to guides"].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => { setIsLearnOpen(false); navigate('/blog'); window.scrollTo(0, 0); }}
                          className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-all group/btn"
                        >
                          Visit the Blog <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>

                      {/* Glossary */}
                      <div className="p-6 group hover:bg-amber-500/5 transition-all duration-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500/60 flex items-center justify-center shadow-lg shadow-amber-400/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <BookOpen className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-black text-foreground text-base leading-tight">SEO Glossary</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Every term in plain English</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 mb-5">
                          {glossaryHighlights.map((term) => (
                            <Link
                              key={term.path}
                              to={term.path}
                              onClick={() => setIsLearnOpen(false)}
                              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-amber-500 transition-colors py-0.5 group/t"
                            >
                              <term.icon className="w-3 h-3 shrink-0 group-hover/t:scale-110 transition-transform" />
                              {term.name}
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/glossary"
                          onClick={() => setIsLearnOpen(false)}
                          className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1.5 rounded-lg transition-all group/btn"
                        >
                          Browse all 50+ terms <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      {/* Questions */}
                      <div className="p-6 group hover:bg-emerald-500/5 transition-all duration-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600/60 flex items-center justify-center shadow-lg shadow-emerald-400/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <HelpCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-black text-foreground text-base leading-tight">SEO Questions</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Straight answers to top questions</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-1.5 mb-5">
                          {["How long does SEO take?", "How much does SEO cost?", "SEO vs. PPC — which wins?", "How do I rank in Google Maps?"].map((q) => (
                            <div key={q} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <span className="text-emerald-500 font-bold shrink-0">Q</span>
                              {q}
                            </div>
                          ))}
                        </div>
                        <Link
                          to="/questions"
                          onClick={() => setIsLearnOpen(false)}
                          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-lg transition-all group/btn"
                        >
                          See all 50+ answers <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Authority Guides — full width bottom strip */}
                    <div className="border-t border-border/50 px-6 py-5 bg-gradient-to-r from-secondary/40 via-transparent to-secondary/40">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-md shadow-violet-500/30">
                          <TrendingUp className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm font-black text-foreground">Authority Guides</span>
                        <span className="text-xs text-violet-500 font-semibold bg-violet-500/10 px-2 py-0.5 rounded-full">Deep dives</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1">
                        {authorityGuides.map((guide) => (
                          <Link
                            key={guide.path}
                            to={guide.path}
                            onClick={() => setIsLearnOpen(false)}
                            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-violet-500 transition-colors py-1.5 px-2 rounded-lg hover:bg-violet-500/10 group/g"
                          >
                            <span className="text-violet-400 font-bold group-hover/g:translate-x-0.5 transition-transform inline-block shrink-0">›</span>
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
