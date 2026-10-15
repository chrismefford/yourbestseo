import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAwarenessChecker from "@/components/AIAwarenessChecker";
import { SEO, generateBreadcrumbSchema } from "@/components/SEO";

export default function FreeAudit() {
  return <div className="min-h-screen bg-background">
    <SEO title="Free AI Awareness Checker" description="Do you know how to get found on ChatGPT? Check your understanding of AI prompts and customer search topics, then request a free business visibility review." canonical="/free-audit" schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "AI Awareness Checker", url: "/free-audit" }])} />
    <Header />
    <main className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <span className="text-primary text-sm font-medium uppercase tracking-widest">Free · No email needed for your score</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mt-5 mb-5">AI Awareness <span className="text-gradient-gold">Checker</span></h1>
        <p className="text-lg text-muted-foreground leading-relaxed">Do you know how to get found on ChatGPT, Perplexity, and Claude? Five questions. A clearer starting point for your business.</p>
      </div>
      <AIAwarenessChecker />
    </main>
    <Footer />
  </div>;
}
