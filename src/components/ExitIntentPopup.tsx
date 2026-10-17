import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/free-audit" || localStorage.getItem("exitPopupConverted") || sessionStorage.getItem("exitPopupShown")) return;
    const show = () => {
      if (sessionStorage.getItem("exitPopupShown") || localStorage.getItem("exitPopupConverted")) return;
      setIsVisible(true);
      sessionStorage.setItem("exitPopupShown", "true");
    };
    const handleMouseLeave = (event: MouseEvent) => { if (event.clientY <= 5) show(); };
    const timer = setTimeout(() => { if (window.innerWidth < 768) show(); }, 30000);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => { document.removeEventListener("mouseleave", handleMouseLeave); clearTimeout(timer); };
  }, [pathname]);

  return <AnimatePresence>{isVisible && pathname !== "/free-audit" && <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsVisible(false)} className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]" />
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-labelledby="awareness-popup-title" className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[calc(100vw-32px)] max-w-lg rounded-lg bg-card border border-border shadow-2xl p-6 sm:p-10">
      <Button variant="ghost" size="icon" onClick={() => setIsVisible(false)} aria-label="Close popup" className="absolute top-3 right-3"><X className="w-5 h-5" /></Button>
      <MessageCircle className="w-10 h-10 text-primary mb-6" />
      <h2 id="awareness-popup-title" className="font-display text-2xl sm:text-3xl font-bold mb-4">What could make your business easier to find?</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">Find a few practical local-search opportunities with our free website check.</p>
      <Button variant="hero" size="lg" asChild className="w-full"><Link to="/free-audit" onClick={() => setIsVisible(false)}>Check my website<ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
      <p className="text-xs text-muted-foreground mt-4 text-center">Useful website findings first. No email required.</p>
    </motion.div>
  </>}</AnimatePresence>;
};
export default ExitIntentPopup;
