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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStatesOpen, setIsStatesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Services Hub", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsStatesOpen(false);
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
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsStatesOpen(!isStatesOpen)}
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
                    className="absolute top-full right-0 mt-2 w-56 bg-background border border-border rounded-xl shadow-xl overflow-hidden"
                  >
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
              <div className="py-2">
                <p className="text-sm font-medium text-muted-foreground mb-3 tracking-widest uppercase">State Missions</p>
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
                <Link
                  to="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-primary font-medium mt-2 inline-block"
                >
                  View All States →
                </Link>
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
