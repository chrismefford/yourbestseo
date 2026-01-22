import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [slotsLeft, setSlotsLeft] = useState(3);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isDismissed, setIsDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    return Boolean(sessionStorage.getItem("urgencyBannerDismissed"));
  });

  useEffect(() => {
    const forceShow = new URLSearchParams(window.location.search).get("debugBanner") === "1";
    if (isDismissed && !forceShow) return;

    // Show immediately (so it's never missed)
    const showTimer = setTimeout(() => setIsVisible(true), 0);

    // Calculate time until end of week (Friday 5pm)
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfWeek = new Date();
      const daysUntilFriday = (5 - now.getDay() + 7) % 7 || 7;
      endOfWeek.setDate(now.getDate() + daysUntilFriday);
      endOfWeek.setHours(17, 0, 0, 0);

      const diff = endOfWeek.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const countdownInterval = setInterval(calculateTimeLeft, 1000);

    // Randomly decrease slots occasionally (for effect)
    const slotsInterval = setInterval(() => {
      setSlotsLeft(prev => Math.max(1, prev - (Math.random() > 0.9 ? 1 : 0)));
    }, 60000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(countdownInterval);
      clearInterval(slotsInterval);
    };
  }, [isDismissed]);

  // Allow re-showing the banner without clearing sessionStorage manually.
  useEffect(() => {
    const onShow = () => {
      try {
        sessionStorage.removeItem("urgencyBannerDismissed");
      } catch {
        // ignore
      }
      setIsDismissed(false);
      setIsVisible(true);
    };

    window.addEventListener("urgencyBanner:show", onShow as EventListener);
    return () => window.removeEventListener("urgencyBanner:show", onShow as EventListener);
  }, []);

  // Coordinate with the fixed header: push it down by the banner height while visible.
  useEffect(() => {
    const root = document.documentElement;

    const setOffset = () => {
      const height = isVisible ? bannerRef.current?.offsetHeight ?? 0 : 0;
      root.style.setProperty("--urgency-offset", `${height}px`);
    };

    setOffset();

    const el = bannerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(setOffset);
    ro.observe(el);
    window.addEventListener("resize", setOffset);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setOffset);
      root.style.setProperty("--urgency-offset", "0px");
    };
  }, [isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("urgencyBannerDismissed", "true");
    setIsDismissed(true);
  };

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={bannerRef}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground shadow-lg"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 relative">
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-1 hover:bg-primary-foreground/10 rounded-full transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Urgency message */}
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 animate-pulse" />
                <span className="font-semibold text-sm sm:text-base">
                  Only <span className="text-2xl font-bold">{slotsLeft}</span> free audit slots left this week!
                </span>
              </div>

              {/* Countdown */}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <div className="flex items-center gap-1 font-mono text-sm sm:text-base">
                  <span className="bg-primary-foreground/20 px-2 py-1 rounded">
                    {formatTime(timeLeft.hours)}
                  </span>
                  <span>:</span>
                  <span className="bg-primary-foreground/20 px-2 py-1 rounded">
                    {formatTime(timeLeft.minutes)}
                  </span>
                  <span>:</span>
                  <span className="bg-primary-foreground/20 px-2 py-1 rounded">
                    {formatTime(timeLeft.seconds)}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Button
                asChild
                size="sm"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold whitespace-nowrap"
              >
                <Link to="/free-audit">Claim Your Spot →</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UrgencyBanner;
