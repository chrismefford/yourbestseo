import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MapPin, Star, Globe, Phone } from "lucide-react";
import { SEO, generateFAQSchema, generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from "@/components/SEO";

const faqs = [
  { question: "What is local SEO?", answer: "Local SEO is the practice of optimizing your online presence to attract customers from specific geographic areas. It involves Google Business Profile optimization, local citation building, location-based keyword targeting, and earning reviews—all designed to make your business appear prominently when someone in your service area searches for what you offer." },
  { question: "How is local SEO different from regular SEO?", answer: "Regular SEO targets broad audiences regardless of geography. Local SEO specifically targets searchers in a defined geographic area and focuses on appearing in the Google Local Pack (the map results), which has a completely separate ranking algorithm from organic results. Local SEO also emphasizes review management, citation consistency, and proximity signals that don't apply to national campaigns." },
  { question: "What is the Google Local Pack and how do I get in it?", answer: "The Local Pack is the set of 3 business listings that appear with a map on Google search results for local queries. Getting in it requires: a fully optimized Google Business Profile, consistent business information across directories, a strong review profile (quantity, recency, rating), and localized website signals. Proximity to the searcher also plays a role, though this is outside your control." },
  { question: "How many reviews do I need to rank in the Local Pack?", answer: "There's no magic number—it's relative to your competitors in the specific query. In some niches, 15 reviews with a 4.8 rating is competitive. In others (attorneys, healthcare), 100+ reviews may be necessary. What matters most: a higher average rating than competitors, recent reviews (within the last 60 days), and a meaningful volume of reviews that mention your services and location naturally." },
  { question: "Do I need a physical address to do local SEO?", answer: "For Google Business Profile, you either need a physical address where customers visit, or you can operate as a service-area business (where you serve customers at their location) and hide your address. Service-area businesses can still rank in local results, though typically with some disadvantage compared to businesses with verified physical locations." },
  { question: "What is NAP consistency and why does it matter for local SEO?", answer: "NAP stands for Name, Address, Phone number. Consistency means this information is identical across your website, Google Business Profile, and every business directory listing. Inconsistencies create trust confusion for Google—it's a signal that the business information may not be reliable. Inconsistent NAP is one of the most common and easily fixable local SEO problems." },
  { question: "How long does local SEO take to show results?", answer: "Google Business Profile improvements often produce measurable results within 4–8 weeks of optimization. Organic ranking improvements from website optimization take 3–5 months in most markets. Highly competitive markets (attorneys, real estate, home services in major metros) may take 6–12 months for meaningful ranking gains." },
];

const schema = [
  generateWebPageSchema({ name: "Local SEO Services for Small Businesses", description: "Local SEO services that help small businesses dominate Google Maps and local search results. GBP optimization, citations, reviews, and more.", url: "/authority/local-seo-services" }),
  generateServiceSchema({ name: "Local SEO Services", description: "Comprehensive local SEO including Google Business Profile optimization, citation building, review management, and local content strategy.", price: 1800, slug: "local-seo-services" }),
  generateFAQSchema(faqs),
  generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Local SEO Services", url: "/authority/local-seo-services" }]),
];

const LocalSEOServices = () => {
  return (
    <>
      <SEO
        title="Local SEO Services That Dominate Google Maps & Local Search"
        description="Local SEO that gets your business into Google's Local Pack and drives real customer calls. GBP optimization, citations, reviews, and local content."
        canonical="/authority/local-seo-services"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="badge-outline inline-block mb-6">Local SEO Services</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              Dominate Local Search.<br />
              <span className="text-gradient-gold">Own Your Market.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              When buyers in your area search for what you offer, your business should be the first thing they see. We build local SEO programs that put you in the Local Pack and keep you there.
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Your Competitors Are Getting the Calls You Should Be Getting</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div>
                <p className="mb-4">When someone in your service area searches for your type of business, they typically look at the top 3 map results and call one of them. If you're not in those 3 results—the Google Local Pack—you're invisible to a massive portion of your local market, regardless of how long you've been in business or how good your work is.</p>
                <p>The businesses in the Local Pack aren't necessarily the best in your market. They're the ones who've invested properly in local SEO. That's a correctable advantage.</p>
              </div>
              <div>
                <p className="mb-4">Local SEO is one of the highest-ROI marketing investments a small business can make—because the people searching are high-intent buyers. Someone searching "emergency plumber San Diego" isn't browsing. They need help now and they're going to call someone in the next 5 minutes.</p>
                <p>Being in position 1–3 in the Local Pack means those calls come to you instead of your competitors. The question isn't whether local SEO matters—it's why you're not doing it yet.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">How Google Decides Who Gets into the Local Pack</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>Google's local ranking algorithm evaluates three primary factors: <strong className="text-foreground">relevance</strong> (does your business match what the searcher is looking for?), <strong className="text-foreground">distance</strong> (how close is your business to the searcher?), and <strong className="text-foreground">prominence</strong> (how well-known and trusted is your business online?).</p>
              <p>Relevance is shaped by your Google Business Profile categories and service descriptions, your website's content, and the keywords reviewers use. Distance is outside your control—but prominence is entirely optimizable. Prominence comes from reviews, citations, backlinks, and your overall online presence.</p>
              <p>The key insight: many businesses focus only on their website and ignore their Google Business Profile—which is actually the more important local ranking asset. Our local SEO programs work both simultaneously, because the combination produces far better results than either alone.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Our Local SEO Domination Framework</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", icon: Globe, title: "Local Market Audit", desc: "We map your competitive landscape—where you rank, what the top 3 are doing differently, and what it will take to overtake them." },
              { step: "02", icon: MapPin, title: "Google Business Profile Mastery", desc: "Full optimization: categories, attributes, services, photos, Q&A, and posting cadence. Your GBP becomes a conversion machine." },
              { step: "03", icon: CheckCircle, title: "Citation Building & Cleanup", desc: "We audit your NAP consistency across 40+ directories and fix discrepancies that undermine trust with Google." },
              { step: "04", icon: Star, title: "Review Strategy", desc: "A systematic approach to generating more 5-star reviews from happy customers—the fastest-impact local ranking lever." },
              { step: "05", icon: Globe, title: "Location Page Optimization", desc: "Substantive, locally-relevant landing pages for each area you serve—not thin copy-paste duplicates." },
              { step: "06", icon: Phone, title: "Conversion Tracking", desc: "Phone call tracking and form submission monitoring so you see exactly how local SEO is generating leads." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">What Sets Our Local SEO Apart</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Both GBP and Website", desc: "Most agencies focus on one or the other. We optimize both simultaneously because the two reinforce each other in the ranking algorithm." },
                { title: "Market-Specific Strategy", desc: "What works in a small market doesn't work in a major metro. Our approach is calibrated to your specific competitive landscape, not a template." },
                { title: "Leads, Not Just Rankings", desc: "We track phone calls and form submissions from organic search—not just keyword positions. You know exactly what local SEO is generating." },
                { title: "Neighborhood-Level Targeting", desc: "For businesses in larger markets, we build hyperlocal content targeting specific neighborhoods and service areas, capturing demand your competitors miss." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Realistic Outcomes</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { metric: "4–8 wks", label: "Typical time to see GBP ranking improvements" },
                { metric: "3–6 mo", label: "Timeline for meaningful organic local ranking gains" },
                { metric: "76%", label: "Of local mobile searches result in a business visit or call within 24 hours (Google data)" },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Who We Help Dominate Local Search</h2>
            <ul className="space-y-3">
              {[
                "Home service businesses: plumbers, HVAC, roofers, electricians, contractors",
                "Healthcare practices: dentists, chiropractors, optometrists, urgent care",
                "Restaurants and hospitality businesses",
                "Legal professionals: personal injury, family law, criminal defense attorneys",
                "Financial advisors, accountants, and tax professionals",
                "Retail businesses with a physical location and surrounding service area",
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Ready to Own Your Local Market?</h2>
            <p className="text-lg text-muted-foreground mb-8">Start with a free local SEO audit. We'll show you exactly where you stand versus competitors and what it would take to move into the Local Pack.</p>
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
              { label: "SEO for Service Businesses", href: "/authority/seo-for-service-businesses" },
              { label: "SEO for Dentists", href: "/authority/seo-for-dentists" },
              { label: "Google Business Profile Service", href: "/services/google-business-profile" },
              { label: "What Is Local SEO?", href: "/questions/what-is-local-seo" },
              { label: "How to Rank in Google Maps", href: "/questions/how-to-rank-in-google-maps" },
              { label: "Downtown San Diego SEO", href: "/san-diego/downtown-san-diego-seo" },
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

export default LocalSEOServices;
