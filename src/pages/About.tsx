import { ArrowRight, BookOpen, Globe, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEO, generateWebPageSchema, generateBreadcrumbSchema } from "@/components/SEO";
import astronautImage from "@/assets/astronaut-daisies.jpg";

const experience = [
  { icon: Target, value: "20 years", label: "In marketing", description: "Getting found is only the beginning. Turning that attention into action has been the focus of my career." },
  { icon: Globe, value: "1.2 billion", label: "Web pages", description: "I ran one of the largest websites in the world—a scale that taught me to connect search visibility with meaningful conversions." },
  { icon: BookOpen, value: "Best-selling", label: "Author", description: "Writing a best-selling book is part of my story. Clear communication is part of how I approach marketing." },
];

const About = () => {
  const description = "Meet Chris Mefford, best-selling author and marketer with 20 years of experience, helping local businesses build awareness and turn search discovery into appointments.";
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Chris Mefford"
        description={description}
        canonical="/about"
        schema={[
          generateWebPageSchema({ name: "About Chris Mefford", description, url: "/about" }),
          generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "About Me", url: "/about" }]),
          { "@context": "https://schema.org", "@type": "Person", name: "Chris Mefford", url: "https://yourbestseo.com/about", description, knowsAbout: ["Marketing", "Search engine optimization", "AI search", "Conversion optimization"] },
        ]}
      />
      <Header />
      <main>
        <section className="relative isolate overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
          <img src={astronautImage} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-background/85" />
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-primary text-sm font-semibold uppercase mb-5">About Me</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Chris Mefford</h1>
              <p className="text-xl sm:text-2xl leading-relaxed text-foreground mb-5">A marketer. A best-selling author. Focused on getting you found—and turning attention into business.</p>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">I've spent 20 years in marketing. Today, I bring that experience to local business owners who want more awareness, more appointments, and a stronger position in search.</p>
              <Button variant="hero" size="lg" asChild className="mt-8 gap-2">
                <Link to="/book">Let's Talk About Your Business <ArrowRight className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-y border-border py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-10 md:gap-12">
            {experience.map((item) => (
              <div key={item.label}>
                <item.icon className="w-6 h-6 text-primary mb-5" aria-hidden="true" />
                <p className="font-display text-3xl sm:text-4xl font-bold mb-2">{item.value}</p>
                <h2 className="text-lg font-semibold mb-3">{item.label}</h2>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <p className="text-primary text-sm font-semibold uppercase mb-4">My Story</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Getting found was my job. Making it count was the goal.</h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>Over my career, I ran one of the largest websites in the world, with 1.2 billion web pages. My job was to make sure we got found—and to turn that visibility into successful conversions.</p>
              <p>That experience shaped how I think about marketing. A ranking matters because it puts you in front of someone looking for what you offer. Awareness matters because it builds recognition and trust. And both need to lead somewhere: a call, an appointment, or a customer.</p>
              <p>Local businesses deserve that same focus. You don't need a long list of marketing services. You need a clear path from being discovered to being chosen.</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Your next customer might start with Google. Or ChatGPT.</h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>People still search Google and Google Maps. They're also asking ChatGPT, Perplexity, and Claude who to trust and which business to call. My focus is helping your business show up where those decisions begin.</p>
              <p>I bring a practical, outcome-driven approach: build awareness, work toward top search rankings, and make it easier for the right people to take the next step and book an appointment.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button variant="hero" size="lg" asChild className="gap-2">
                <Link to="/free-audit">Check My AI Awareness <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/book">Talk With Chris</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
