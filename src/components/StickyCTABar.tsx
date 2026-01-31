import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StickyCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Guard against SSR/SSG - only run on client
    if (typeof window === 'undefined') return;
    
    // Check if user dismissed the bar this session
    const dismissed = sessionStorage.getItem("stickyBarDismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling past hero section (roughly 500px)
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    sessionStorage.setItem("stickyBarDismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div className="bg-primary border-t border-primary-foreground/10 shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                {/* Left: Message */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="hidden sm:flex w-10 h-10 rounded-full bg-primary-foreground/10 items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-primary-foreground font-medium text-sm sm:text-base truncate">
                      <span className="hidden sm:inline">Ready to dominate search? </span>
                      Get your free SEO audit today!
                    </p>
                    <p className="text-primary-foreground/70 text-xs hidden md:block">
                      Discover exactly what's holding back your rankings
                    </p>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="gap-2 whitespace-nowrap"
                    asChild
                  >
                    <Link to="/free-audit">
                      Free Audit
                      <span className="hidden sm:inline">→</span>
                    </Link>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:bg-primary-foreground/10 gap-1 hidden sm:flex"
                    asChild
                  >
                    <a href="tel:+16157726641">
                      <Phone className="w-4 h-4" />
                      <span className="hidden md:inline">Call Now</span>
                    </a>
                  </Button>

                  <button
                    onClick={handleDismiss}
                    className="p-1.5 rounded-full hover:bg-primary-foreground/10 transition-colors ml-1"
                    aria-label="Dismiss"
                  >
                    <X className="w-4 h-4 text-primary-foreground/70" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTABar;
