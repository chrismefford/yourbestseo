import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, MapPin, Globe, Phone } from "lucide-react";
import { SEO, generateFAQSchema, generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from "@/components/SEO";

const faqs = [
  { question: "How does SEO for dentists differ from general SEO?", answer: "Dental SEO is hyper-local and highly competitive. Patients search in very specific ways: by service (Invisalign, implants, emergency dentist), by location ('dentist near me'), and by insurance or payment options. Dental SEO must win in the Google Local Pack, build trust through reviews and credentials, and optimize for the exact treatment-specific terms patients use when they're ready to book." },
  { question: "How many new patients can dental SEO realistically generate?", answer: "Results vary significantly by market competitiveness and current baseline. Practices in less competitive markets (suburban areas, smaller cities) may see 20–50 new patient inquiries per month from organic within 6–12 months. Highly competitive metro markets take longer. We track phone calls and form submissions from organic so you have actual data, not projections." },
  { question: "Should dentists use Google Ads or SEO?", answer: "Both have merit. Google Ads generates immediate visibility for high-value treatments like implants, veneers, and clear aligners. SEO builds an owned channel that compounds over time and costs nothing per click. Most growing practices benefit from running both—Ads for immediate ROI on high-value procedures, SEO as a long-term patient acquisition engine. If budget is limited, SEO produces better long-term ROI." },
  { question: "How important are Google reviews for dental SEO?", answer: "Extremely. Reviews are one of the top 3 local ranking factors. Practices with 100+ reviews averaging 4.7+ stars consistently outrank competitors in the Local Pack, even with less optimized websites. More importantly, reviews are what prospective patients look at before making an appointment. A dental practice with 200 reviews and a 4.9 rating has a significant conversion advantage over one with 15 reviews." },
  { question: "What keywords should dentists target?", answer: "The most valuable keywords are service-specific and local: '[service] + [city/neighborhood],' 'dentist near me,' 'emergency dentist [city],' 'best dentist [city],' and specific treatment terms (dental implants, teeth whitening, Invisalign) combined with your location. Insurance-specific terms ('dentist that accepts Delta Dental in [city]') capture high-intent patients with lower competition." },
  { question: "Does having a multi-location practice change the SEO strategy?", answer: "Yes. Each location needs its own Google Business Profile, its own location page on your website, and its own citation profile. If locations share a website, proper use of structured data and hreflang-equivalent local signals helps Google understand which location to serve for which geographic query. Multi-location dental practices need a unified SEO strategy that treats each location as a semi-independent local presence." },
  { question: "How does HIPAA affect dental SEO and content?", answer: "HIPAA compliance restricts how patient information can be used publicly. For SEO purposes, this means: never use patient photos or case details without explicit written consent for marketing purposes, be careful with testimonials to ensure they meet disclosure requirements, and ensure any online forms that collect patient information use HIPAA-compliant tools. These are manageable constraints—we work within them as standard practice." },
];

const schema = [
  generateWebPageSchema({ name: "SEO for Dentists", description: "Dental SEO that fills your appointment book. Local pack rankings, review management, treatment-specific content, and patient lead tracking.", url: "/authority/seo-for-dentists" }),
  generateServiceSchema({ name: "SEO for Dentists", description: "Specialized SEO for dental practices including Local Pack optimization, Google Business Profile management, review generation, and treatment-specific content.", price: 1800, slug: "seo-for-dentists" }),
  generateFAQSchema(faqs),
  generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "SEO for Dentists", url: "/authority/seo-for-dentists" }]),
];

const DentistSEO = () => {
  return (
    <>
      <SEO
        title="SEO for Dentists: Fill Your Appointment Book with Organic Search"
        description="Dental SEO that generates new patient calls. Local Pack rankings, review management, and treatment-specific content built for dental practices."
        canonical="/authority/seo-for-dentists"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="badge-outline inline-block mb-6">SEO for Dentists</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              New Patients Find You.<br />
              <span className="text-gradient-gold">You Don't Chase Them.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Dental SEO that puts your practice in front of patients searching for your services right now—and builds the trust that converts a search into a booked appointment.
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Patients Are Choosing Based on Who Shows Up First—Not Who's Best</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div>
                <p className="mb-4">When a new patient moves into your area, has an emergency, or finally decides to address a dental need they've been putting off, they open Google. They look at the Local Pack—the top 3 results with the map. They pick from those options. If you're not there, you don't exist to them, regardless of how long you've practiced or how good your outcomes are.</p>
                <p>The practices in those top 3 positions aren't necessarily the most skilled dentists in your market. They're the ones whose online presence signals trust and relevance most effectively.</p>
              </div>
              <div>
                <p className="mb-4">Beyond the Local Pack, patients research extensively before scheduling. They read reviews. They compare before-and-after pages. They look at doctor bios. They want to know your team takes continuing education seriously and that patients like them have been satisfied.</p>
                <p>SEO for dentists isn't just about rankings—it's about building a digital presence that earns trust before a patient ever calls you. That's what turns search visibility into full appointment books.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">What Dental SEO Actually Requires in 2026</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>Dental SEO has three distinct layers that must all work together. <strong className="text-foreground">Local search optimization</strong>—getting into and staying in the Local Pack for your core service and location queries. <strong className="text-foreground">Service page optimization</strong>—individual pages for high-value treatments (implants, Invisalign, cosmetic dentistry) that rank for patients researching those specific procedures. <strong className="text-foreground">Trust signals</strong>—reviews, provider credentials, before-and-after galleries, and patient testimonials that convert searchers into callers.</p>
              <p>One aspect that trips up many dental SEO campaigns: keyword competition varies wildly by treatment. "General dentist [city]" is highly competitive. "Same-day dental crowns [neighborhood]" may have almost no competition. A smart dental SEO strategy targets high-value treatments where competition is lower, capturing patients searching for specialized care with less resistance.</p>
              <p>In 2026, AI search is also becoming relevant for dental practices. Patients ask ChatGPT and Gemini questions like "how much do dental implants cost" or "what's the best teeth whitening method." Practices with comprehensive, authoritative content on these topics get cited in AI answers, building brand awareness before patients even reach Google.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Our Dental SEO Framework</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", icon: MapPin, title: "Local Competitive Analysis", desc: "We audit the top-ranking dental practices in your market and identify exactly what it will take to displace them." },
              { step: "02", icon: Globe, title: "GBP Dental Optimization", desc: "Categories, services, attributes, photos, and Q&A optimized specifically for dental searches and new patient behavior." },
              { step: "03", icon: Star, title: "Review Generation System", desc: "A post-appointment review request workflow that consistently generates 5-star reviews from your happiest patients." },
              { step: "04", icon: CheckCircle, title: "Treatment Page Strategy", desc: "Individual optimized pages for implants, veneers, Invisalign, whitening, and other high-value treatments you offer." },
              { step: "05", icon: Phone, title: "Patient Lead Tracking", desc: "Phone call recording and form tracking from organic search, so you can attribute new patients directly to SEO." },
              { step: "06", icon: Globe, title: "Authority Content", desc: "Educational content that answers the questions patients research before scheduling, building trust and AI search citations." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Why Dental Practices Choose YourBestSEO</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "We Track Patients, Not Just Rankings", desc: "You care about new patients, not keyword positions. We set up tracking so you see exactly how many patient inquiries organic search generates each month." },
                { title: "High-Value Treatment Focus", desc: "We prioritize the searches that bring in implant, cosmetic, and restorative patients—not just routine cleaning inquiries. Higher-value patients make your investment work harder." },
                { title: "HIPAA-Aware Content", desc: "We work within healthcare marketing compliance requirements as standard practice. No risk of privacy missteps in your content or review strategy." },
                { title: "Competitive Market Experience", desc: "Dental is one of the most competitive local SEO markets. We've helped practices in saturated metros displace entrenched competitors—we know what it takes." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">What Dental Practices Typically See</h2>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Local Pack ranking improvement for core service terms within 6–10 weeks of GBP optimization",
                "New patient inquiries from organic search trackable within the first 90 days",
                "Review count growth of 15–30 new reviews per month with a systematic post-appointment request process",
                "Treatment-specific page rankings for implants, veneers, and cosmetic services within 4–6 months",
                "Reduced reliance on paid advertising as organic lead volume increases over 12–18 months",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Ideal Client */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Best-Fit Dental Practices</h2>
            <ul className="space-y-3">
              {[
                "General dentists looking to grow their new patient base in a competitive local market",
                "Practices that offer high-value cosmetic or restorative treatments and want to attract those specific patients",
                "New dental practices that need to build visibility quickly without a large advertising budget",
                "Multi-location dental groups who need a consistent SEO strategy across all offices",
                "Practices that have been spending on ads and want to build a lower-cost owned channel",
                "DSOs looking to improve visibility for individual practice locations",
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Let's Fill Your Schedule with Patients Finding You</h2>
            <p className="text-lg text-muted-foreground mb-8">Start with a free dental SEO audit. We'll show you where you rank versus local competitors and what it will take to move into the top positions.</p>
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
              { label: "SEO for Service Businesses", href: "/authority/seo-for-service-businesses" },
              { label: "Review Management Service", href: "/services/review-management" },
              { label: "Google Business Profile Service", href: "/services/google-business-profile" },
              { label: "What Is Local SEO?", href: "/questions/what-is-local-seo" },
              { label: "How to Get More Google Reviews", href: "/questions/how-to-get-more-google-reviews" },
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

export default DentistSEO;
