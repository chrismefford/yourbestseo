import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const states = [
  { name: "California", path: "/states/california-seo" },
  { name: "Oregon", path: "/states/oregon-seo" },
  { name: "Washington", path: "/states/washington-seo" },
  { name: "Arizona", path: "/states/arizona-seo" },
  { name: "Colorado", path: "/states/colorado-seo" },
  { name: "Utah", path: "/states/utah-seo" },
  { name: "Nevada", path: "/states/nevada-seo" },
  { name: "Hawaii", path: "/states/hawaii-seo" },
  { name: "Alaska", path: "/states/alaska-seo" },
  { name: "New Mexico", path: "/states/new-mexico-seo" },
  { name: "Idaho", path: "/states/idaho-seo" },
  { name: "Montana", path: "/states/montana-seo" },
  { name: "Wyoming", path: "/states/wyoming-seo" },
];

const services = [
  { name: "SEO Blog Posts", path: "/services/seo-blog-posts", price: "$999" },
  { name: "Technical SEO", path: "/services/technical-seo", price: "$449" },
  { name: "Google Business Profile", path: "/services/google-business-profile", price: "$399" },
  { name: "Keyword Research", path: "/services/keyword-research", price: "$299" },
  { name: "Competitor Analysis", path: "/services/competitor-analysis", price: "$349" },
  { name: "White-Hat Backlinks", path: "/services/white-hat-backlinks", price: "$1,999" },
  { name: "Local Citations", path: "/services/local-citations", price: "$799" },
  { name: "Review Management", path: "/services/review-management", price: "$499" },
  { name: "Schema Markup", path: "/services/schema-markup", price: "$899" },
  { name: "Ranking Reports", path: "/services/ranking-reports", price: "$249" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStatesOpen, setIsStatesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const statesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (statesDropdownRef.current && !statesDropdownRef.current.contains(event.target as Node)) {
        setIsStatesOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
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
                  setIsStatesOpen(false);
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
            
            {/* State Missions Dropdown */}
            <div className="relative" ref={statesDropdownRef}>
              <button 
                onClick={() => {
                  setIsStatesOpen(!isStatesOpen);
                  setIsServicesOpen(false);
                }}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
              >
                State Missions
                <ChevronDown className={`w-4 h-4 transition-transform ${isStatesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isStatesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-3 border-b border-border bg-secondary/30">
                      <p className="text-xs font-semibold text-primary tracking-widest uppercase">Western Deployments</p>
                    </div>
                    <div className="py-2 max-h-80 overflow-y-auto">
                      {states.map((state) => (
                        <Link
                          key={state.name}
                          to={state.path}
                          onClick={() => setIsStatesOpen(false)}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                        >
                          {state.name} SEO
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="hero" size="default" className="gap-2" asChild>
              <a href="tel:+18332374376">
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

              {/* State Missions Section */}
              <div className="py-2">
                <p className="text-sm font-medium text-primary mb-3 tracking-widest uppercase">State Missions</p>
                <div className="grid grid-cols-2 gap-2">
                  {states.slice(0, 6).map((state) => (
                    <Link
                      key={state.name}
                      to={state.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-sm text-muted-foreground hover:text-foreground py-1"
                    >
                      {state.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Button variant="hero" size="lg" className="mt-4 w-full gap-2" asChild>
                <a href="tel:+18332374376">
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
