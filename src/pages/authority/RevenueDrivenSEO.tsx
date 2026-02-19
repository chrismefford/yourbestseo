import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Target, BarChart3 } from "lucide-react";
import { SEO, generateFAQSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/components/SEO";

const faqs = [
  { question: "What is revenue-driven SEO?", answer: "Revenue-driven SEO is a methodology that prioritizes search traffic with proven buying intent over raw traffic volume. Rather than optimizing for impressions or clicks, it focuses on keywords and content that attract visitors who are actively ready to spend money—measuring success by revenue attribution, not rankings alone." },
  { question: "How is revenue-driven SEO different from traditional SEO?", answer: "Traditional SEO often chases high-volume keywords regardless of intent. Revenue-driven SEO starts with your sales funnel, identifies where organic search can intercept high-intent buyers, and measures every dollar of traffic against pipeline contribution. The KPIs shift from 'ranking #1' to 'cost per acquisition from organic.'" },
  { question: "How long before revenue-driven SEO produces results?", answer: "For most service businesses, meaningful pipeline impact appears between months 3–6. E-commerce brands with existing domain authority often see revenue movement within 60–90 days of targeted optimization. The timeline depends on your current authority, competitive landscape, and how aggressively we execute." },
  { question: "Can SEO actually be tied to revenue?", answer: "Yes. With proper GA4 conversion tracking, CRM integration, and attribution modeling, organic traffic can be tied to specific revenue outcomes. We set this up during onboarding so you're never guessing whether SEO is working." },
  { question: "What types of keywords does revenue-driven SEO target?", answer: "We focus on transactional and commercial investigation queries—terms where someone is comparing options or ready to buy. Examples: 'best [service] near me,' '[service] pricing,' '[competitor] alternatives.' We also target informational content that captures buyers early and nurtures them down the funnel." },
  { question: "Is revenue-driven SEO more expensive than standard SEO?", answer: "The strategy is the same investment; the difference is where we point the effort. Revenue-driven SEO often requires more strategic upfront work—funnel mapping, conversion rate optimization, attribution setup—but the ROI justification is far clearer because results are measured in dollars, not rankings." },
  { question: "What industries benefit most from revenue-driven SEO?", answer: "Any industry with meaningful organic search volume and measurable conversion events: professional services, SaaS, healthcare, e-commerce, home services, legal, and financial services. If someone searches for your solution before buying it, revenue-driven SEO applies." },
  { question: "How do you measure SEO ROI?", answer: "We track organic sessions by landing page, assisted conversions, goal completions, and—when CRM data is available—closed revenue from organic leads. Monthly reporting shows cost per organic lead against your average deal size, giving you a clear payback calculation." },
];

const schema = [
  generateWebPageSchema({ name: "Revenue-Driven SEO Services", description: "SEO strategy focused on measurable revenue outcomes, not vanity metrics. Learn how YourBestSEO connects organic search to pipeline and profit.", url: "/authority/revenue-driven-seo" }),
  generateFAQSchema(faqs),
  generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "SEO Strategy", url: "/authority/revenue-driven-seo" }]),
];

const RevenueDrivenSEO = () => {
  return (
    <>
      <SEO
        title="Revenue-Driven SEO: Organic Search That Pays Off"
        description="Stop chasing rankings. Start tracking revenue. Our revenue-driven SEO connects organic search directly to your pipeline and profit."
        canonical="/authority/revenue-driven-seo"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="badge-outline inline-block mb-6">Revenue-Driven SEO</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              SEO That Shows Up<br />
              <span className="text-gradient-gold">in Your Revenue,</span><br />
              Not Just Your Rankings
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Rankings are a means to an end. We build organic search programs that connect directly to pipeline, conversion, and profit—and we can prove it.
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Your SEO Reports Look Great. Your Revenue Doesn't Move.</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div>
                <p className="mb-4">You've been told you're ranking on page one. Traffic is up 30%. The agency sends a glossy monthly report with green arrows everywhere. And yet—qualified leads haven't budged.</p>
                <p>This is what happens when SEO is optimized for rankings and traffic volume instead of revenue. Your organic visitors are researchers, students, and tire-kickers—not buyers. You're paying for a marketing channel that's generating noise, not pipeline.</p>
              </div>
              <div>
                <p className="mb-4">The core problem: most SEO agencies don't understand your sales funnel. They don't know what a qualified lead looks like, what your average deal size is, or how organic touches factor into closed revenue.</p>
                <p>So they optimize for what they can measure easily: keyword positions. Revenue stays someone else's problem. That's not how we work.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">What Revenue-Driven SEO Actually Means</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>Revenue-driven SEO starts with a simple question: <em>where in the buyer journey does organic search intersect with purchasing decisions for your specific business?</em> The answer determines everything—which keywords to target, what content to create, and how to structure conversion paths.</p>
              <p>In 2026, Google's search landscape has fundamentally changed. AI-generated overviews (SGE) are absorbing informational queries. What remains most valuable in organic search is commercial intent—searches where someone is comparing options, vetting vendors, or ready to buy. That's exactly where revenue-driven SEO focuses.</p>
              <p>We map your keyword strategy to your sales funnel stages: awareness content that builds topical authority, comparison content that intercepts mid-funnel buyers, and transactional pages that convert high-intent searchers. Each layer has different content formats, different internal linking logic, and different conversion goals.</p>
              <p>The result is an organic channel that behaves less like a content library and more like a sales asset—one you can model, forecast, and optimize against actual revenue outcomes.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Our Revenue SEO Framework</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", icon: Target, title: "Revenue Mapping", desc: "We document your sales funnel, deal sizes, and conversion events before touching a keyword." },
              { step: "02", icon: BarChart3, title: "Intent-First Keyword Strategy", desc: "We build a keyword map weighted toward transactional and commercial investigation queries—the searches buyers make." },
              { step: "03", icon: TrendingUp, title: "Content That Converts", desc: "Every page is written for a specific buyer stage with clear conversion paths, not just information delivery." },
              { step: "04", icon: CheckCircle, title: "Technical Foundation", desc: "Fast pages, clean architecture, proper indexing. Technical SEO is table stakes—we handle it without drama." },
              { step: "05", icon: DollarSign, title: "Attribution Setup", desc: "GA4 goals, conversion events, and (where available) CRM integration so revenue from organic is trackable." },
              { step: "06", icon: ArrowRight, title: "Monthly Revenue Reporting", desc: "You see organic cost per lead, assisted revenue, and organic share of pipeline—not just traffic graphs." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Why YourBestSEO Is Built Differently</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Revenue Over Rankings", desc: "We've turned down clients who wanted us to chase vanity metrics. If a keyword won't drive revenue, we won't waste your budget on it." },
                { title: "AI Search Readiness", desc: "We optimize for ChatGPT, Gemini, and Perplexity citations alongside traditional Google rankings—because that's where B2B research happens in 2026." },
                { title: "Lean Execution", desc: "No 6-week strategy phases. No 40-slide decks. We move fast, show our work, and adjust based on data—not assumptions." },
                { title: "Strategic Clarity", desc: "You'll always know exactly what we're doing, why, and what outcome we expect. No jargon. No hiding behind complexity." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Realistic Outcomes You Can Plan Around</h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { metric: "3–6 months", label: "Typical timeline to meaningful pipeline impact" },
                { metric: "40–70%", label: "Average reduction in cost per organic lead vs. paid" },
                { metric: "12–36 mo", label: "Window where compounding SEO returns exceed paid media ROI" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-xl border border-border/50 bg-background">
                  <div className="font-display text-3xl font-bold text-gradient-gold mb-2">{item.metric}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">These aren't guarantees—SEO outcomes depend on competitive landscape, domain authority, and execution consistency. But these are the ranges we typically see for clients who commit to a revenue-first approach and give the program 6+ months to compound.</p>
          </motion.div>
        </div>
      </section>

      {/* Ideal Client */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Who This Is For</h2>
            <ul className="space-y-3">
              {[
                "Business owners tired of paying for SEO that can't be connected to actual revenue",
                "Marketing leaders who need to justify organic channel spend to finance or leadership",
                "Companies spending $3K–$20K/month on paid ads and wanting to build an owned channel",
                "Service businesses where a single closed client pays for 6 months of SEO",
                "SaaS and B2B companies where organic content drives demo requests and trials",
                "Agencies looking to white-label a revenue-focused SEO program for their clients",
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Ready to Make SEO a Revenue Line?</h2>
            <p className="text-lg text-muted-foreground mb-8">Start with a free audit. We'll show you where your organic program is leaking revenue and what it would take to fix it.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="gap-2" asChild>
                <a href="/#contact">Request a Free SEO Audit <ArrowRight className="w-5 h-5" /></a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="/pricing">View Pricing</a>
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

      {/* Internal Links */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="font-display text-2xl font-bold mb-6">Related SEO Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "SEO vs Google Ads: Which Has Better ROI?", href: "/authority/seo-vs-google-ads" },
              { label: "Technical SEO Audit Services", href: "/authority/technical-seo-audit" },
              { label: "White Label SEO for Agencies", href: "/authority/white-label-seo" },
              { label: "Local SEO for Small Businesses", href: "/authority/local-seo-services" },
              { label: "What Is SEO ROI?", href: "/questions/what-is-seo-roi" },
              { label: "SEO Pricing", href: "/pricing" },
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

export default RevenueDrivenSEO;
