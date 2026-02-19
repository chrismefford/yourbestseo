import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, AlertTriangle, Zap, Search, Globe, BarChart3 } from "lucide-react";
import { SEO, generateFAQSchema, generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from "@/components/SEO";

const faqs = [
  { question: "What is a technical SEO audit?", answer: "A technical SEO audit is a systematic evaluation of your website's technical infrastructure—crawlability, indexability, site speed, structured data, mobile performance, internal linking, and URL architecture. The goal is to identify issues that prevent search engines from properly accessing, understanding, and ranking your content." },
  { question: "How long does a technical SEO audit take?", answer: "A professional technical audit typically takes 3–7 business days depending on site size. Smaller sites (under 500 pages) can be audited in 2–3 days. Enterprise sites with complex architectures may require 2–3 weeks. We provide a prioritized findings report with specific remediation steps, not just a list of issues." },
  { question: "What tools do you use for technical SEO audits?", answer: "Our standard toolkit includes Screaming Frog for crawl analysis, Google Search Console for indexing data, PageSpeed Insights and WebPageTest for Core Web Vitals, Ahrefs for backlink and crawl data, and GTmetrix for performance profiling. We combine tool output with manual review—automated tools catch most issues but miss edge cases that require human judgment." },
  { question: "What's the most impactful thing a technical audit typically finds?", answer: "The most common high-impact finding is crawl budget waste—search engines spending their crawl allocation on low-value or duplicate pages instead of your money pages. Fixing crawl inefficiency often produces faster ranking improvements than any content change. Other frequent high-impact findings: missing or duplicate canonical tags, slow mobile page speed, and broken internal link structures." },
  { question: "Do I need a technical SEO audit if my site is new?", answer: "Yes—ideally before you invest heavily in content. A new site audit catches architectural problems early, when they're cheapest to fix. Common new-site issues: improper robots.txt configuration, missing XML sitemap, unoptimized URL structure, and Core Web Vitals failures that could hold back rankings from day one." },
  { question: "How often should a technical SEO audit be performed?", answer: "For most business websites, a comprehensive audit every 12 months is sufficient. Larger sites or sites undergoing frequent development changes benefit from quarterly or semi-annual audits. Any time you replatform, redesign, or significantly restructure your site, a technical audit is essential—these events routinely create indexing and crawl problems." },
  { question: "What's the difference between a technical audit and an SEO audit?", answer: "An SEO audit covers technical, on-page, and off-page factors. A technical SEO audit focuses specifically on the infrastructure layer—the factors that affect how search engines crawl, index, and render your site. It doesn't evaluate keyword strategy or content quality. Most full SEO audits include a technical component, but a technical-only audit goes deeper on the infrastructure side." },
];

const auditItems = [
  "Crawlability and indexation status for all pages",
  "XML sitemap accuracy and submission status",
  "Robots.txt configuration and crawl directives",
  "Canonical tag implementation and redirect chains",
  "Core Web Vitals (LCP, FID/INP, CLS) across device types",
  "Mobile usability and responsive design issues",
  "Structured data and schema markup validation",
  "Internal link architecture and orphaned pages",
  "HTTPS implementation and mixed content errors",
  "Duplicate content and thin page identification",
  "Hreflang implementation (for multi-language sites)",
  "Page speed waterfall analysis and optimization opportunities",
];

const schema = [
  generateWebPageSchema({ name: "Technical SEO Audit Services", description: "Professional technical SEO audit services. We crawl, analyze, and prioritize every technical issue affecting your Google rankings—then fix them.", url: "/authority/technical-seo-audit" }),
  generateServiceSchema({ name: "Technical SEO Audit", description: "Comprehensive technical SEO audit covering crawlability, indexability, Core Web Vitals, structured data, and site architecture.", price: 1800, slug: "technical-seo-audit" }),
  generateFAQSchema(faqs),
  generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Technical SEO Audit", url: "/authority/technical-seo-audit" }]),
];

const TechnicalSEOAudit = () => {
  return (
    <>
      <SEO
        title="Technical SEO Audit Services | Fix What's Blocking Rankings"
        description="Professional technical SEO audits that find and fix the infrastructure issues holding your site back. Crawlability, speed, schema, and more."
        canonical="/authority/technical-seo-audit"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="badge-outline inline-block mb-6">Technical SEO Audit</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              Find the Technical Issues<br />
              <span className="text-gradient-gold">That Are Costing You</span><br />
              Rankings
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Great content can't rank if Google can't properly crawl and index your site. Our technical SEO audit finds every infrastructure issue—and gives you a prioritized fix list.
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">You Can't Outrank Technical Problems With Content</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div>
                <p className="mb-4">Publishing more content on a technically broken site is like adding floors to a building with a cracked foundation. You might not notice the problem immediately, but the structure can't support the weight—and at some point, something collapses.</p>
                <p>Technical SEO issues silently cap your ranking potential. A redirect chain that adds 500ms of load time. Canonical tags pointing to the wrong version. A crawl budget being wasted on faceted navigation pages that were never meant to be indexed. These aren't hypothetical—they're in most sites we audit.</p>
              </div>
              <div>
                <p className="mb-4">The challenge is that most technical SEO issues are invisible to the business owner. You see a beautiful website. Google's crawler sees something different: blocked resources, slow server responses, duplicate title tags, and JavaScript-rendered content it can't read.</p>
                <p>A technical audit closes that gap. It gives you a complete picture of what Google actually sees when it visits your site—and a prioritized plan to make that picture better.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Audit */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">What Our Technical Audit Covers</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {auditItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-secondary/20">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">How Our Technical Audit Process Works</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", icon: Search, title: "Full Site Crawl", desc: "We crawl every accessible URL on your site—the same way Googlebot does—and capture all technical data points for analysis." },
              { step: "02", icon: Globe, title: "GSC & Analytics Integration", desc: "We connect crawl data with Google Search Console and analytics to understand how technical issues are affecting real traffic and indexing." },
              { step: "03", icon: Zap, title: "Core Web Vitals Analysis", desc: "Field data and lab data review across mobile and desktop. We identify exactly which pages have LCP, INP, and CLS issues and what's causing them." },
              { step: "04", icon: BarChart3, title: "Priority Scoring", desc: "Every issue is scored by impact and effort. You get a tiered fix list: quick wins, medium-term improvements, and longer-term structural changes." },
              { step: "05", icon: AlertTriangle, title: "Written Findings Report", desc: "A clear, jargon-free report explaining each issue, why it matters, and exactly how to fix it—with specific implementation guidance." },
              { step: "06", icon: CheckCircle, title: "Implementation Support", desc: "We can implement fixes directly or work alongside your development team. Our recommendations are written for developers, not just SEOs." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Why Our Technical Audits Produce Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Human Review, Not Just Tool Output", desc: "Automated tools generate reports. We interpret them. The difference between a flagged issue and an actual problem matters—we don't bill you for false positives." },
                { title: "Prioritized, Not Exhaustive", desc: "A 200-item issue list is useless. We deliver a tiered priority list so you know exactly what to fix first for maximum ranking impact." },
                { title: "Implementation Ready", desc: "Every finding comes with exact fix instructions. Our reports go straight to your dev team—no translation layer needed." },
                { title: "Integrated With Revenue Goals", desc: "We audit in the context of your business goals, not abstract SEO best practices. Technical fixes are evaluated against their likely impact on traffic and revenue." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">What to Expect After a Technical Audit</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { metric: "2–4 wks", label: "Average time to see indexing improvements after technical fixes" },
                { metric: "15–40%", label: "Typical crawl efficiency improvement after audit implementation" },
                { metric: "100+", label: "Technical checkpoints reviewed across every site we audit" },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Who Needs a Technical SEO Audit</h2>
            <ul className="space-y-3">
              {[
                "Businesses that have invested in content but aren't seeing expected ranking improvements",
                "Companies that recently migrated platforms, redesigned, or significantly restructured their site",
                "Sites that experienced a sudden drop in traffic following a Google algorithm update",
                "Organizations preparing for a site migration and wanting to avoid ranking loss",
                "Agencies that need a technical benchmark for a new client before beginning optimization work",
                "Any website with 500+ pages where crawl efficiency directly affects ranking potential",
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Get Your Technical SEO Audit</h2>
            <p className="text-lg text-muted-foreground mb-8">Start with a free preliminary review. We'll identify the most urgent technical issues before you commit to a full audit.</p>
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

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="font-display text-2xl font-bold mb-6">Related Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Why Your Site Isn't Ranking", href: "/authority/why-not-ranking" },
              { label: "Revenue-Driven SEO", href: "/authority/revenue-driven-seo" },
              { label: "Technical SEO Service", href: "/services/technical-seo" },
              { label: "What Are Core Web Vitals?", href: "/questions/what-are-core-web-vitals" },
              { label: "What Is Technical SEO?", href: "/questions/what-is-technical-seo" },
              { label: "Schema Markup Service", href: "/services/schema-markup" },
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

export default TechnicalSEOAudit;
