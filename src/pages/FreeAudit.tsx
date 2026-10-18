import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAwarenessChecker from "@/components/AIAwarenessChecker";
import { SEO, generateBreadcrumbSchema } from "@/components/SEO";

export default function FreeAudit() {
  return <div className="min-h-screen bg-background">
    <SEO title="10 AI Customer Questions for Your Business" description="See ten questions customers might ask AI about your local business—and three simple ways to get found." canonical="/free-audit" schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "AI Customer Questions", url: "/free-audit" }])} />
    <Header />
    <main className="pt-32 pb-20 px-4 sm:px-6 light-surface bg-background text-foreground">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <span className="text-foreground text-sm font-medium uppercase tracking-widest">YourBestSEO.com · Free website check</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mt-5 mb-5">10 customer questions <span className="bg-primary text-primary-foreground px-2 rounded-md box-decoration-clone">for your business</span></h1>
        <p className="text-lg text-muted-foreground leading-relaxed">What might customers ask ChatGPT, Claude, or Perplexity? Find out—then see where your business is missing out.</p>
      </div>
      <AIAwarenessChecker />
    </main>
    <Footer />
  </div>;
}
