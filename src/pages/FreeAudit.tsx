import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAwarenessChecker from "@/components/AIAwarenessChecker";
import { SEO, generateBreadcrumbSchema } from "@/components/SEO";

export default function FreeAudit() {
  return <div className="min-h-screen bg-background">
    <SEO title="Free Local Search Opportunity Check" description="Find practical opportunities on your business website, including local search access, service pages, and AI search readiness. See findings before sharing contact details." canonical="/free-audit" schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Local Search Opportunity Check", url: "/free-audit" }])} />
    <Header />
    <main className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <span className="text-primary text-sm font-medium uppercase tracking-widest">YourBestSEO.com · Free website check</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mt-5 mb-5">Local Search <span className="text-gradient-gold">Opportunity Check</span></h1>
        <p className="text-lg text-muted-foreground leading-relaxed">A few real opportunities to make your local business easier to find—and easier to contact. Useful findings before you share your email.</p>
      </div>
      <AIAwarenessChecker />
    </main>
    <Footer />
  </div>;
}
