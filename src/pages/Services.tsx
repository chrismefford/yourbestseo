import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MissionObjectives from "@/components/MissionObjectives";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { SEO, generateWebPageSchema } from "@/components/SEO";
import astronaut from "@/assets/astronaut-daisies.jpg";

// Preserve inbound links while replacing the old service catalog.
const Services = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Build Awareness, Appointments & Search Rankings"
      description="Grow local business awareness, compete for top Google and Maps rankings, and turn AI search discovery into appointment inquiries."
      canonical="/services"
      schema={generateWebPageSchema({
        name: "Local Business Growth",
        description: "Awareness, appointments, and search visibility for local businesses.",
        url: "/services",
      })}
    />
    <Header />
    <main>
      <section className="relative isolate overflow-hidden pt-40 pb-24">
        <img src={astronaut} alt="Astronaut among flowers" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-background/85" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="badge-outline inline-block mb-6">Local Business Growth</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">Build Awareness.<br /><span className="text-gradient-gold">Win More Appointments.</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">Your customers are searching Google, checking Maps, and asking AI who to call. Put your business in the conversation, compete for top search positions, and give people a reason to choose you.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild><Link to="/free-audit">Check My AI Awareness <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button variant="heroOutline" size="lg" asChild><Link to="/book">Let’s Talk Growth</Link></Button>
            </div>
          </div>
        </div>
      </section>
      <MissionObjectives />
      <HowItWorks />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Services;
