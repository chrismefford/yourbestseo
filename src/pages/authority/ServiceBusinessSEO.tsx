import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MapPin, Star, Phone, Users } from "lucide-react";
import { SEO, generateFAQSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/components/SEO";

const faqs = [
  { question: "What makes SEO different for service-based businesses?", answer: "Service businesses sell expertise and relationships, not products. Buyers search in highly local, high-intent ways—'best plumber near me,' '[service] in [city].' SEO for service businesses must win in local packs, generate phone calls and form submissions, and build the trust signals (reviews, case studies, credentials) that convert searchers into scheduled appointments." },
  { question: "Do service businesses need a blog to rank?", answer: "A targeted blog can accelerate authority and help you rank for research-phase queries, but it's not the first priority. The fundamentals—your service pages, Google Business Profile, local citations, and reviews—drive more immediate results. Blog content becomes valuable once your core pages are optimized and your local presence is established." },
  { question: "How important is Google Business Profile for service businesses?", answer: "Extremely. For most local service businesses, the Google Business Profile is the single highest-leverage SEO asset. It determines whether you appear in the Local Pack (the map results), drives phone calls directly, and is the primary surface for customer reviews. Neglecting it is leaving money on the table." },
  { question: "How many service area pages do I need?", answer: "It depends on your geographic footprint. If you serve 5 cities, you need 5 well-written city pages—not thin, copy-pasted versions of each other. Quality matters more than quantity. A well-crafted San Diego HVAC page will outrank a dozen generic 'We serve [city]' pages every time." },
  { question: "How long does local service SEO take to show results?", answer: "Google Business Profile optimizations often show movement within 4–6 weeks. Website ranking improvements typically appear within 3–5 months for less competitive markets. Highly competitive service categories (attorneys, dentists, contractors in major metros) may take 6–12 months to see significant ranking gains." },
  { question: "What's the most common mistake service businesses make with SEO?", answer: "Underinvesting in their Google Business Profile while overpaying for website changes. Second most common: writing generic service pages that say 'we're the best' without specifics. Buyers trust specificity—service areas, team credentials, process descriptions, and real customer reviews—far more than vague claims." },
  { question: "Can I do my own SEO as a service business owner?", answer: "You can handle the basics: keeping your Google Business Profile updated, responding to reviews, and publishing occasional content. But competitive markets require technical expertise—schema markup, site speed optimization, structured data, and citation management—that's difficult to execute correctly without experience. The opportunity cost of doing it yourself poorly often exceeds the cost of professional help." },
];

const schema = [
  generateWebPageSchema({ name: "SEO for Service-Based Businesses", description: "SEO strategies built for service businesses: local rankings, Google Business Profile, review management, and content that converts searchers into clients.", url: "/authority/seo-for-service-businesses" }),
  generateFAQSchema(faqs),
  generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "SEO for Service Businesses", url: "/authority/seo-for-service-businesses" }]),
];

const ServiceBusinessSEO = () => {
  return (
    <>
      <SEO
        title="SEO for Service-Based Businesses That Generates Clients"
        description="SEO built for service businesses. Local rankings, Google Business Profile, reviews, and content that converts searchers into booked appointments."
        canonical="/authority/seo-for-service-businesses"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="badge-outline inline-block mb-6">SEO for Service Businesses</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              Get Found. Get Called.<br />
              <span className="text-gradient-gold">Get Booked.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Service businesses don't need traffic—they need clients. We build SEO programs that generate phone calls, form submissions, and booked appointments from people actively searching for what you do.
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Your Competitors Are Showing Up. You're Not.</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div>
                <p className="mb-4">When someone in your service area searches for what you offer, you need to show up in three places: the Google Local Pack (the map), the organic results, and—increasingly—AI search answers. If you're not in at least two of those, you're handing business to competitors who've done the work.</p>
                <p>Most service businesses have the same problem: a website that was built to look good but wasn't built to rank. No local schema, thin service pages, an unclaimed or poorly managed Google Business Profile, and a review count that doesn't inspire confidence.</p>
              </div>
              <div>
                <p className="mb-4">The frustrating part is that local service SEO is actually achievable. You're not competing with Amazon or nationally-funded media companies. You're competing with other local businesses—and most of them haven't invested properly either.</p>
                <p>The business that wins is usually the one that executes SEO basics correctly and consistently. That's not glamorous, but it's the honest truth about what it takes to dominate local service search.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">How SEO Actually Works for Service Businesses</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>Local service SEO operates on three pillars: your Google Business Profile, your website, and your off-site presence. Each reinforces the others. A great website with a neglected GBP loses to a mediocre website with a well-managed GBP in local pack results. You need all three working together.</p>
              <p><strong className="text-foreground">Google Business Profile</strong> is where you appear in map results. It's optimized through category selection, service descriptions, photo volume, Q&A management, posting frequency, and—most critically—review quantity and recency. This is often the fastest-ROI item we work on.</p>
              <p><strong className="text-foreground">Your website</strong> needs service pages that are specific, locally-targeted, and built around the exact language your customers use when searching. Each service needs its own page. Each city or neighborhood you serve should have a dedicated, substantive page—not a copy-paste version with just the city name changed.</p>
              <p><strong className="text-foreground">Off-site presence</strong> means consistent NAP (Name, Address, Phone) information across business directories, relevant industry citations, and backlinks from local organizations and industry associations. Inconsistency here undermines everything else.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Our Service Business SEO Process</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", icon: MapPin, title: "Local Audit & Competitor Analysis", desc: "We map your local search landscape: where you rank, what competitors are doing right, and where the fastest wins are." },
              { step: "02", icon: Phone, title: "Google Business Profile Overhaul", desc: "Complete optimization of categories, services, photos, and Q&A. We establish a posting cadence and review response protocol." },
              { step: "03", icon: CheckCircle, title: "Service Page Optimization", desc: "Each service gets a properly structured page targeting the specific queries your buyers use—not generic industry terms." },
              { step: "04", icon: MapPin, title: "Location Page Strategy", desc: "City and neighborhood pages built with substantive local content, not thin duplicates. Each page earns its own ranking." },
              { step: "05", icon: Star, title: "Review Generation System", desc: "A simple, repeatable process for asking satisfied clients for reviews—the single highest-leverage local ranking factor." },
              { step: "06", icon: Users, title: "Citation & NAP Management", desc: "We audit and fix your business listings across 40+ directories to ensure consistent, trust-building information everywhere." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Why Service Business Owners Choose YourBestSEO</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "We Measure Leads, Not Just Traffic", desc: "Your goal is booked appointments, not page views. We set up conversion tracking so you see phone calls and form fills from organic search." },
                { title: "No Lock-In Contracts", desc: "We earn your business month to month. If results aren't happening on a reasonable timeline, you shouldn't be stuck." },
                { title: "White-Glove Execution", desc: "We don't hand you a strategy document and wish you luck. We execute: write the pages, fix the GBP, manage the citations." },
                { title: "Transparent Reporting", desc: "Monthly reports in plain English. Keyword movements, lead tracking, what we did, what's next. No jargon, no spin." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">What Service Business Clients Typically See</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { metric: "4–8 wks", label: "Average time to see GBP ranking improvement" },
                { metric: "3–5 mo", label: "Timeline for meaningful organic ranking gains" },
                { metric: "2–5x", label: "Typical increase in organic lead volume over 12 months" },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Who We Work With</h2>
            <ul className="space-y-3">
              {[
                "Home service businesses: contractors, plumbers, HVAC, electricians, roofers",
                "Healthcare providers: dentists, chiropractors, physical therapists, mental health practices",
                "Professional services: attorneys, accountants, financial advisors, consultants",
                "Wellness and beauty: med spas, salons, personal trainers, wellness coaches",
                "Hospitality and events: restaurants, venues, caterers, photographers",
                "Any business where a Google search is step one in the buyer's journey",
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Let's Get You in Front of Buyers Who Are Ready Now</h2>
            <p className="text-lg text-muted-foreground mb-8">Start with a free audit. We'll show you what's holding your local rankings back and what a realistic improvement timeline looks like.</p>
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
              { label: "Local SEO Services", href: "/authority/local-seo-services" },
              { label: "SEO for Dentists", href: "/authority/seo-for-dentists" },
              { label: "Google Business Profile Service", href: "/services/google-business-profile" },
              { label: "Local Citations Service", href: "/services/local-citations" },
              { label: "Review Management", href: "/services/review-management" },
              { label: "Revenue-Driven SEO", href: "/authority/revenue-driven-seo" },
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

export default ServiceBusinessSEO;
