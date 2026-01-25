import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { footerNavigation } from "@/data/internalLinks";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="font-display font-bold text-lg tracking-[0.15em] text-primary block mb-4">
              YOUR BEST SEO
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Award-winning white-label SEO agency delivering enterprise-quality results at 90% cost savings.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>8620 Ian Way, San Diego, CA 92071</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Local SEO Column */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Local SEO</h3>
            <ul className="space-y-2">
              {footerNavigation.localSeo.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* States Column */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">States</h3>
            <ul className="space-y-2">
              {footerNavigation.states.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Learn SEO</h3>
            <ul className="space-y-2">
              {footerNavigation.learn.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Popular Pages Section */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">Popular SEO Resources</h3>
          <div className="flex flex-wrap gap-2">
            <Link to="/questions/what-is-seo" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
              What is SEO?
            </Link>
            <Link to="/glossary/backlinks" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
              Backlinks
            </Link>
            <Link to="/questions/how-to-rank-in-google-maps" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
              Rank in Google Maps
            </Link>
            <Link to="/glossary/keyword-research" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
              Keyword Research
            </Link>
            <Link to="/questions/what-is-technical-seo" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
              Technical SEO
            </Link>
            <Link to="/glossary/core-web-vitals" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
              Core Web Vitals
            </Link>
            <Link to="/glossary/local-seo" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
              Local SEO
            </Link>
            <Link to="/questions/what-is-schema-markup" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
              Schema Markup
            </Link>
            <Link to="/glossary/eeat" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
              E-E-A-T
            </Link>
            <Link to="/questions/what-is-link-building" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
              Link Building
            </Link>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-semibold text-lg mb-1">Ready to Dominate Search?</h3>
              <p className="text-sm text-muted-foreground">Get a free SEO audit and discover untapped opportunities.</p>
            </div>
            <Link 
              to="/free-audit" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Free SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} YourBestSEO. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="tel:+16157726641" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              (615) 772-6641
            </a>
            <a href="mailto:chris@yourbestseo.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              chris@yourbestseo.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
