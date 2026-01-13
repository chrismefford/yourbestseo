import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionObjectives from "@/components/MissionObjectives";
import HowItWorks from "@/components/HowItWorks";
import TrustBadge from "@/components/TrustBadge";
import MissionReports from "@/components/MissionReports";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MissionObjectives />
        <HowItWorks />
        <TrustBadge />
        <MissionReports />
        <CTASection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
