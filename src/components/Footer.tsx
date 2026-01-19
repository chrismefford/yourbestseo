import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="font-display font-bold text-sm tracking-[0.2em] text-primary">
              YOUR BEST SEO
            </Link>

            <nav className="flex flex-wrap items-center justify-center gap-6">
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} YourBestSEO. All rights reserved.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>8620 Ian Way, San Diego, California 92071</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
