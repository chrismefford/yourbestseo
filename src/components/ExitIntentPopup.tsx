import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Guard against SSR/SSG - only run on client
    if (typeof window === 'undefined') return;
    
    // Check if already shown this session
    const alreadyShown = sessionStorage.getItem("exitPopupShown");
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves toward the top of the page
      if (e.clientY <= 5 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    // Also trigger after 30 seconds on mobile (no mouse leave event)
    const mobileTimer = setTimeout(() => {
      if (window.innerWidth < 768 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    }, 30000);

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-exit-popup-email", {
        body: { email },
      });

      if (error) {
        throw error;
      }

      toast({
        title: "🚀 You're on the list!",
        description: "Check your inbox for your free SEO checklist.",
      });

      setIsVisible(false);
      localStorage.setItem("exitPopupConverted", "true");
    } catch (error) {
      console.error("Error submitting email:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90vw] max-w-lg"
          >
            <div className="relative bg-gradient-to-br from-background via-background to-primary/5 rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />

              <div className="relative p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Gift className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                    Wait! Don't Leave Empty-Handed
                  </h2>
                  <p className="text-muted-foreground">
                    Get our <span className="text-primary font-semibold">FREE 50-Point SEO Checklist</span> that helped 500+ agencies boost client rankings by 3x.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 bg-muted/50"
                  />
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Me the Checklist
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Trust indicator */}
                <p className="text-xs text-center text-muted-foreground mt-4">
                  🔒 No spam. Unsubscribe anytime. Join 2,000+ SEO pros.
                </p>

                {/* Alternative CTA */}
                <div className="mt-6 pt-6 border-t border-border/50 text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Prefer personalized help?
                  </p>
                  <a
                    href="/free-audit"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <Rocket className="w-4 h-4" />
                    Get Your Free SEO Audit
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
