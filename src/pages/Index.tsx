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
import ExitIntentPopup from "@/components/ExitIntentPopup";
import StickyCTABar from "@/components/StickyCTABar";
import AIChatbot from "@/components/AIChatbot";
import ROICalculator from "@/components/ROICalculator";

const Index = () => {
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
        <ROICalculator />
        <BeforeAfterTelemetry />
        <MissionReports />
        <CTASection />
        <Testimonials />
        <ContactSection />
        <FunSection />
      </main>
      <Footer />
      
      {/* Conversion Components */}
      <ExitIntentPopup />
      <StickyCTABar />
      <AIChatbot />
    </div>
  );
};

export default Index;
