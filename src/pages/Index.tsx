import { lazy, Suspense, useEffect, useState } from "react";
import { ClientOnly } from "vite-react-ssg";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionObjectives from "@/components/MissionObjectives";
import HowItWorks from "@/components/HowItWorks";
import TrustBadge from "@/components/TrustBadge";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { SEO, generateWebPageSchema } from "@/components/SEO";

// Lazy load below-the-fold components to reduce initial bundle
const BeforeAfterTelemetry = lazy(() => import("@/components/BeforeAfterTelemetry"));
const MissionReports = lazy(() => import("@/components/MissionReports"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FunSection = lazy(() => import("@/components/FunSection"));
const ROICalculator = lazy(() => import("@/components/ROICalculator"));

// Lazy load non-critical conversion components that use browser APIs
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));
const StickyCTABar = lazy(() => import("@/components/StickyCTABar"));
const SocialProofNotifications = lazy(() => import("@/components/SocialProofNotifications"));
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
    name: "Your Best SEO - Outsourced SEO Department for Agencies",
    description: "Award-winning white-label SEO agency delivering AI-powered SEO services. 90% cost savings with enterprise-quality results.",
    url: "/",
  });
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Outsourced SEO Department for Agencies"
        description="Award-winning white-label SEO agency. An SEO partner that shows you everything we do, delivers results fast, and costs 90% less—no excuses, no BS."
        canonical="/"
        schema={pageSchema}
      />
      <Header />
      <main>
        <Hero />
        <MissionObjectives />
        <HowItWorks />
        <TrustBadge />
        {/* Lazy-loaded below-the-fold content */}
        <Suspense fallback={<div className="h-96" />}>
          <ROICalculator />
        </Suspense>
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
            <SocialProofNotifications />
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
