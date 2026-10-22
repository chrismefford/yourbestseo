import { lazy, Suspense, useEffect, useState } from "react";
import { ClientOnly } from "vite-react-ssg";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionObjectives from "@/components/MissionObjectives";
import SearchVisibilitySections from "@/components/SearchVisibilitySections";
import RedditVisibilitySection from "@/components/RedditVisibilitySection";
import HowItWorks from "@/components/HowItWorks";
import TrustBadge from "@/components/TrustBadge";
import ImageStrip from "@/components/ImageStrip";
import WideBanner from "@/components/WideBanner";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { SEO, generateWebPageSchema } from "@/components/SEO";

// Lazy load below-the-fold components to reduce initial bundle
const BeforeAfterTelemetry = lazy(() => import("@/components/BeforeAfterTelemetry"));
const MissionReports = lazy(() => import("@/components/MissionReports"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FunSection = lazy(() => import("@/components/FunSection"));

// Lazy load non-critical conversion components that use browser APIs
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));
const StickyCTABar = lazy(() => import("@/components/StickyCTABar"));
const AIChatbot = lazy(() => import("@/components/AIChatbot"));

const Index = () => {
  const [showDeferredComponents, setShowDeferredComponents] = useState(false);

  // Defer loading of conversion components until after initial paint
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;
    
    const timer = typeof requestIdleCallback !== 'undefined'
      ? requestIdleCallback(() => setShowDeferredComponents(true))
      : setTimeout(() => setShowDeferredComponents(true), 2000);
    
    return () => {
      if (typeof timer === 'number') {
        if (typeof cancelIdleCallback !== 'undefined') {
          cancelIdleCallback(timer);
        } else {
          clearTimeout(timer);
        }
      }
    };
  }, []);

  const pageSchema = generateWebPageSchema({
    name: "Your Best SEO - Awareness, Appointments & Search Rankings",
    description: "Build local business awareness, improve Google and Google Maps rankings, and turn AI search discovery into appointment inquiries.",
    url: "/",
  });
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Local Awareness, Appointments & Search Rankings"
        description="Build awareness, compete for top Google and Maps rankings, and turn discovery into appointments. Local SEO and ChatGPT, Perplexity, and Claude visibility."
        canonical="/"
        schema={pageSchema}
      />
      <Header />
      <main>
        <Hero />
        <ImageStrip />
        <MissionObjectives />
        <SearchVisibilitySections />
        <RedditVisibilitySection />
        <HowItWorks />
        <WideBanner />
        <TrustBadge />
        {/* Lazy-loaded below-the-fold content */}
        <Suspense fallback={<div className="h-96" />}>
          <BeforeAfterTelemetry />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <MissionReports />
        </Suspense>
        <CTASection />
        <Suspense fallback={<div className="h-96" />}>
          <Testimonials />
        </Suspense>
        <ContactSection />
        <Suspense fallback={<div className="h-48" />}>
          <FunSection />
        </Suspense>
      </main>
      <Footer />
      
      {/* Client-only conversion components - wrapped to prevent SSG hydration issues */}
      <ClientOnly>
        {() => showDeferredComponents && (
          <Suspense fallback={null}>
            <ExitIntentPopup />
            <StickyCTABar />
            <AIChatbot />
          </Suspense>
        )}
      </ClientOnly>
    </div>
  );
};

export default Index;
