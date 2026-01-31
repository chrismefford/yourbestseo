import { lazy, Suspense, useEffect, useState } from "react";
import { ClientOnly } from "vite-react-ssg";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionObjectives from "@/components/MissionObjectives";
import HowItWorks from "@/components/HowItWorks";
import TrustBadge from "@/components/TrustBadge";
import BeforeAfterTelemetry from "@/components/BeforeAfterTelemetry";
import MissionReports from "@/components/MissionReports";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import FunSection from "@/components/FunSection";
import Footer from "@/components/Footer";
import { SEO, generateWebPageSchema } from "@/components/SEO";
import UrgencyBanner from "@/components/UrgencyBanner";
import ROICalculator from "@/components/ROICalculator";

// Lazy load non-critical conversion components that use browser APIs
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));
const StickyCTABar = lazy(() => import("@/components/StickyCTABar"));
const AIChatbot = lazy(() => import("@/components/AIChatbot"));
const SocialProofNotifications = lazy(() => import("@/components/SocialProofNotifications"));

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
      <UrgencyBanner />
      <Header />
      <main>
        <Hero />
        <MissionObjectives />
        <HowItWorks />
        <TrustBadge />
        <ROICalculator />
        <BeforeAfterTelemetry />
        <MissionReports />
        <CTASection />
        <Testimonials />
        <ContactSection />
        <FunSection />
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
