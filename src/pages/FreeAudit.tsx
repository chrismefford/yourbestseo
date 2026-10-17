import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAwarenessChecker from "@/components/AIAwarenessChecker";
import { SEO, generateBreadcrumbSchema } from "@/components/SEO";

export default function FreeAudit() {
  return <div className="min-h-screen bg-background">
    <SEO title="Free AI & SEO Website Review" description="Get a short AI-powered review of your website's SEO and AI search readiness, with three practical next steps before sharing your email." canonical="/free-audit" schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "AI & SEO Website Review", url: "/free-audit" }])} />
    <Header />
    <main className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <span className="text-primary text-sm font-medium uppercase tracking-widest">YourBestSEO.com · Free website check</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mt-5 mb-5">AI & SEO <span className="text-gradient-gold">Website Review</span></h1>
        <p className="text-lg text-muted-foreground leading-relaxed">How does your website look—and what should you fix? Get a clear overall assessment and your three next steps, free.</p>
      </div>
      <AIAwarenessChecker />
    </main>
    <Footer />
  </div>;
}
