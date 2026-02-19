import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, DollarSign, Shield, Zap } from "lucide-react";
import { SEO, generateFAQSchema, generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from "@/components/SEO";

const faqs = [
  { question: "What is white label SEO?", answer: "White label SEO is when an SEO agency delivers services under your agency's brand—your client never knows a third party is involved. You own the client relationship and pricing. We do the work. You mark up our services, invoice your client directly, and the deliverables carry your agency's name." },
  { question: "How does pricing work for white label SEO?", answer: "We charge wholesale rates starting around $1,800/month for comprehensive local SEO programs. You determine what to charge your client—most agencies mark up 2–3x, charging clients $3,500–$5,500/month. The margin per client ranges from $1,700 to $3,700 without hiring, training, or managing an in-house SEO team." },
  { question: "Will my client know they're working with a white label partner?", answer: "No. All deliverables—reports, content, strategy documents, and communications—carry your branding. We operate strictly in the background. Any client communication routes through you. Our team signs NDAs and operates under your agency identity for any client-facing touchpoints." },
  { question: "What types of SEO services are available for white labeling?", answer: "Our full service stack is white-labelable: local SEO, technical SEO audits, SEO blog post writing, Google Business Profile management, keyword research, competitor analysis, backlink building, schema markup, citation building, review management, and monthly ranking reports. You can resell individual services or bundle them into custom packages." },
  { question: "What do I tell my client about the work being done?", answer: "You tell them exactly what the work involves—the deliverables, strategy, and results. You just don't tell them who's executing it. This is standard industry practice. Attorneys outsource legal research. Accountants use offshore processing firms. Marketing agencies white-label execution. Your client is paying for your judgment and accountability, which you provide." },
  { question: "What kind of reporting do white label clients get?", answer: "We produce white-labeled monthly reports in your brand colors and format covering keyword rankings, organic traffic movement, local pack positions, work completed, and upcoming priorities. These reports are designed to be sent directly to your client—they're written in plain English, not SEO jargon, and focused on business outcomes your client understands." },
  { question: "How quickly can we start on a new client?", answer: "For most new clients, we can have an onboarding call scheduled within 48 hours and begin execution within 5–7 business days of receiving access to relevant accounts (Google Search Console, GA4, Google Business Profile). Technical audits and initial keyword research are delivered in the first 2 weeks." },
  { question: "What if the client wants to communicate directly with the SEO team?", answer: "We support this through facilitated communication—we can join calls presenting as your team's SEO specialists, or you can facilitate written communication through your systems. We adapt to your preference. Some agency partners prefer complete separation; others prefer occasional client-facing involvement. Both work." },
];

const schema = [
  generateWebPageSchema({ name: "White Label SEO Services for Agencies", description: "White label SEO for marketing agencies. We execute under your brand. You mark up the work, keep the client, and pocket the margin.", url: "/authority/white-label-seo" }),
  generateServiceSchema({ name: "White Label SEO for Agencies", description: "Full-service white label SEO: local SEO, technical audits, content, reporting, and client communication—all under your agency brand.", price: 1800, slug: "white-label-seo" }),
  generateFAQSchema(faqs),
  generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "White Label SEO", url: "/authority/white-label-seo" }]),
];

const WhiteLabelSEO = () => {
  return (
    <>
      <SEO
        title="White Label SEO for Agencies: Keep the Client, Keep the Margin"
        description="White label SEO services built for agencies. We execute under your brand. Your client never knows. You mark up 2-3x and keep the margin."
        canonical="/authority/white-label-seo"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="badge-outline inline-block mb-6">White Label SEO for Agencies</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              Say Yes to Every SEO Client.<br />
              <span className="text-gradient-gold">We Do the Work.</span><br />
              You Keep the Margin.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Stop turning down SEO work because you don't have the team for it. We execute under your brand—your client never knows, and you keep 2–3x markup on every engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="gap-2" asChild>
                <a href="/#contact">Request an SEO Audit <ArrowRight className="w-5 h-5" /></a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="/services">See How It Works</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">You're Leaving $100K+ Per Year on the Table Every Time You Say "We Don't Do SEO"</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div>
                <p className="mb-4">Your clients trust you. When they ask about SEO—and they will—you have two options: refer them out and watch the relationship widen as a competitor agency handles their search marketing, or say yes and deliver it profitably through a white-label partner.</p>
                <p>Agencies that white-label SEO effectively add $5,000–$15,000 in monthly recurring revenue per SEO client without adding headcount. At a 2.5x markup on our services, 5 white-label SEO clients adds $22,500/month in revenue for work you're not executing.</p>
              </div>
              <div>
                <p className="mb-4">The alternative—hiring an in-house SEO—involves $80,000–$120,000 in annual salary, benefits, management overhead, training costs, and the risk that they leave after 18 months taking institutional knowledge with them.</p>
                <p>White-label SEO eliminates all of that. You get seasoned SEO execution at wholesale rates, your clients get results, and you capture a high-margin revenue line your agency was previously giving away.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">How White Label SEO Actually Works</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>The model is straightforward. Your client signs a contract with your agency at your rates. You handle the relationship, billing, and strategy conversations at a high level. We handle the execution—keyword research, content creation, technical fixes, local SEO, link building, reporting—everything your client needs to see results.</p>
              <p>Deliverables come branded to your agency. Monthly reports have your logo. Content is written in a voice that matches your client's brand, not ours. If there are strategy calls, we join as your SEO team. From your client's perspective, you have a world-class SEO department. Behind the scenes, it's us.</p>
              <p>The economics are simple: we charge you wholesale. You charge your client retail. The spread—typically $1,700–$3,700 per client per month—is yours. No overhead, no training, no HR headaches. Just margin.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">How We Work With Agency Partners</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", icon: Users, title: "Agency Onboarding", desc: "We sign an NDA, establish communication protocols, and set up your branded reporting templates before your first client is introduced." },
              { step: "02", icon: Shield, title: "Client Intake", desc: "You send us the client brief. We handle the technical access requests, audit, and strategy development—all invisible to your client." },
              { step: "03", icon: Zap, title: "Fast Execution", desc: "We move quickly—deliverables in days, not weeks. Your client notices the pace. You look like the most capable agency they've worked with." },
              { step: "04", icon: CheckCircle, title: "Branded Reporting", desc: "Monthly reports in your brand format. We write them for your client to read—plain English outcomes, not SEO metrics your client doesn't understand." },
              { step: "05", icon: DollarSign, title: "Your Markup, Your Terms", desc: "You set the price. We charge wholesale. The margin is yours. We never interact with your client on billing or pricing—that's always your territory." },
              { step: "06", icon: ArrowRight, title: "Scalable Growth", desc: "Add clients without adding headcount. Our capacity scales with your pipeline. You focus on sales and relationships—we handle delivery." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all bg-background">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-display text-3xl font-bold text-primary/20">{item.step}</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">What Makes Us the Right White Label Partner</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Results Your Client Can See", desc: "We focus on outcomes that matter to your client: leads, rankings, traffic. We don't deliver vanity metrics you'll have to explain." },
                { title: "Agency-Friendly Communication", desc: "We understand the agency model. Client communication goes through you. We never create situations that put your relationship at risk." },
                { title: "Revenue-First Execution", desc: "Every recommendation we make is evaluated against business impact. We don't recommend services that don't serve your client's revenue goals." },
                { title: "AI-Era Ready", desc: "Our SEO includes AI search optimization—your clients will be asking about it, and you can say yes with confidence." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl border border-border/50 bg-secondary/20">
                  <h3 className="font-display text-lg font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">The Agency Math</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { metric: "$1,800", label: "Typical YourBestSEO wholesale rate per client/month" },
                { metric: "$4,500", label: "Typical agency resell price per client/month (2.5x markup)" },
                { metric: "$2,700", label: "Gross margin per client per month with zero in-house SEO staff" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-xl border border-border/50 bg-background">
                  <div className="font-display text-3xl font-bold text-gradient-gold mb-2">{item.metric}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ideal Client */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Best-Fit Agency Partners</h2>
            <ul className="space-y-3">
              {[
                "Web design and development agencies whose clients regularly ask for SEO services",
                "Digital marketing agencies focused on paid media who want to add organic to their offering",
                "PR and content agencies who want to add SEO as a recurring revenue service",
                "Freelancers and boutique agencies who win SEO clients but lack the team to deliver",
                "Business consultants and growth advisors who want to add marketing execution to their practice",
                "Agencies that tried building an in-house SEO team and found the overhead unsustainable",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Start Saying Yes to SEO</h2>
            <p className="text-lg text-muted-foreground mb-8">Let's talk about how white label SEO fits into your agency's offering. No commitment required—we'll show you the economics and how the model works in practice.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="gap-2" asChild>
                <a href="/#contact">Talk to Us About Partnering <ArrowRight className="w-5 h-5" /></a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="/pricing">View Wholesale Pricing</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border/50 pb-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="font-display text-2xl font-bold mb-6">Related Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Revenue-Driven SEO", href: "/authority/revenue-driven-seo" },
              { label: "AI Search SEO", href: "/authority/ai-search-seo" },
              { label: "Technical SEO Audit", href: "/authority/technical-seo-audit" },
              { label: "SEO Pricing", href: "/pricing" },
              { label: "About YourBestSEO", href: "/about" },
              { label: "SEO vs Google Ads", href: "/authority/seo-vs-google-ads" },
            ].map((link, i) => (
              <a key={i} href={link.href} className="p-4 rounded-xl border border-border/50 hover:border-primary/40 hover:bg-secondary/30 transition-all text-sm font-medium text-muted-foreground hover:text-foreground">
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhiteLabelSEO;
