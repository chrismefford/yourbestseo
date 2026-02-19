import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, BarChart3, Zap } from "lucide-react";
import { SEO, generateFAQSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/components/SEO";

const faqs = [
  { question: "Which has better ROI: SEO or Google Ads?", answer: "Over a 24+ month horizon, SEO almost always delivers better ROI. Google Ads generates immediate, measurable results but the cost per acquisition stays constant or increases as competition grows. SEO has higher upfront investment and a longer payback period, but cost per acquisition drops significantly as organic traffic compounds—often by 50–80% versus paid over 2–3 years." },
  { question: "How quickly do SEO and Google Ads deliver results?", answer: "Google Ads can generate traffic and leads within 24–48 hours of campaign launch. SEO typically produces meaningful results in 3–6 months, with compounding growth continuing for years. The timing difference is the core trade-off: Ads offer immediacy, SEO offers compounding long-term value." },
  { question: "Should I do SEO or Google Ads first?", answer: "For businesses that need immediate leads or revenue, start with Google Ads while SEO builds. If budget is limited and you can survive a 3–6 month ramp period, SEO delivers better economics long-term. The ideal scenario is running both in parallel: Ads for immediate ROI, SEO for long-term cost reduction. Don't treat them as mutually exclusive." },
  { question: "What happens to traffic when I pause Google Ads?", answer: "Traffic stops immediately when you pause Ads. This is the fundamental difference from SEO, which continues to generate traffic regardless of whether you're actively spending. Businesses that have built strong organic positions often pause or significantly reduce ad spend during slower periods—SEO provides continuity that paid advertising cannot." },
  { question: "Is Google Ads better for competitive markets?", answer: "For highly competitive keywords where organic ranking takes years to achieve (think: personal injury attorney, insurance, B2B software), Google Ads can reach the top of the page immediately with sufficient budget. However, the CPCs in competitive markets are often $50–$200+ per click, making SEO an even more attractive long-term investment if you can sustain the build period." },
  { question: "Can I use Google Ads data to improve my SEO?", answer: "Yes—this is one of the strongest arguments for running both. Ads conversion data tells you exactly which keywords drive actual customers versus just traffic. This intelligence informs your SEO keyword prioritization, helping you invest organic effort in the searches that actually produce revenue, not just volume." },
  { question: "What's the difference in cost between SEO and Google Ads?", answer: "Google Ads cost is directly proportional to traffic volume—you pay per click, forever. SEO has a fixed monthly investment with traffic value that grows over time. A business spending $3,000/month on SEO in year one might be generating traffic worth $15,000–$25,000/month in equivalent click value by year three. The economics invert as organic authority compounds." },
];

const comparisonData = [
  { factor: "Time to Results", seo: "3–6 months", ads: "24–48 hours" },
  { factor: "Cost Per Click", seo: "$0 (post-investment)", ads: "$2–$200+ per click" },
  { factor: "Traffic Stops When You Pause?", seo: "No", ads: "Yes, immediately" },
  { factor: "Long-Term ROI Trajectory", seo: "Improves over time", ads: "Stays flat or increases" },
  { factor: "Trust Signal to Searchers", seo: "High (organic results)", ads: "Lower (marked as ad)" },
  { factor: "Data for Other Channels", seo: "Limited initially", ads: "Rich conversion data" },
  { factor: "Best for New Businesses", seo: "Not ideal (slow start)", ads: "Yes (immediate)" },
  { factor: "Best for Established Brands", seo: "Yes (compound value)", ads: "Yes (supplements SEO)" },
];

const schema = [
  generateWebPageSchema({ name: "SEO vs Google Ads: Which Drives Better ROI?", description: "A clear-eyed comparison of SEO and Google Ads ROI, timelines, and strategic fit. When to use each, and how to combine them effectively.", url: "/authority/seo-vs-google-ads" }),
  generateFAQSchema(faqs),
  generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "SEO vs Google Ads", url: "/authority/seo-vs-google-ads" }]),
];

const SEOvsGoogleAds = () => {
  return (
    <>
      <SEO
        title="SEO vs Google Ads: Which Drives Better ROI in 2026?"
        description="An honest comparison of SEO and Google Ads ROI, timelines, and strategic fit. When each wins, and how to combine them for maximum return."
        canonical="/authority/seo-vs-google-ads"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="badge-outline inline-block mb-6">SEO vs Google Ads</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              SEO vs Google Ads:<br />
              <span className="text-gradient-gold">Which Actually</span><br />
              Drives Better ROI?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              The honest answer depends on your timeline, your market, and your business stage. Here's how to think about it—and how to use both effectively.
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">The Wrong Question Is Costing You Money</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div>
                <p className="mb-4">Most businesses approach this as a binary choice: SEO or Google Ads. That framing leads to under-investment in the channel that would actually serve them better—or worse, endless deliberation while competitors capture market share.</p>
                <p>The real question isn't "which one?" It's "at what stage of business growth does each channel create the most value, and how do I sequence them correctly?" The answer to that question is context-dependent—and most generic marketing advice gets it wrong.</p>
              </div>
              <div>
                <p className="mb-4">Businesses that default entirely to Google Ads are paying acquisition costs that will never go down. Businesses that invest only in SEO may run out of runway before organic starts generating leads. The smart play is a sequenced strategy that uses each channel for what it's actually good at.</p>
                <p>Here's the clear-eyed breakdown.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">SEO vs Google Ads: Side-by-Side</h2>
            <div className="overflow-x-auto rounded-xl border border-border/50">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-secondary/30">
                    <th className="text-left p-4 font-display font-bold">Factor</th>
                    <th className="text-left p-4 font-display font-bold text-primary">SEO</th>
                    <th className="text-left p-4 font-display font-bold text-muted-foreground">Google Ads</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={`border-b border-border/30 ${i % 2 === 0 ? "bg-background" : "bg-secondary/10"}`}>
                      <td className="p-4 text-sm font-medium text-foreground">{row.factor}</td>
                      <td className="p-4 text-sm text-primary">{row.seo}</td>
                      <td className="p-4 text-sm text-muted-foreground">{row.ads}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">The Economic Reality of Each Channel</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Google Ads economics:</strong> You pay for every click. CPCs in competitive markets can range from $2 (low competition, informational queries) to $200+ (legal, financial, insurance, B2B software). The cost per acquisition is roughly CPC ÷ conversion rate. If your CPC is $15 and your landing page converts at 3%, you're paying $500 per lead. Indefinitely. With no compounding benefit.</p>
              <p><strong className="text-foreground">SEO economics:</strong> You pay a fixed monthly retainer. Traffic value grows as you rank for more keywords. A business spending $2,000/month on SEO over 24 months may be generating organic traffic worth $20,000/month in equivalent click value—because the same content page that ranks for one keyword often ranks for dozens of related queries. The cost per acquisition drops continuously as traffic grows on a fixed spend.</p>
              <p><strong className="text-foreground">The break-even point</strong> where SEO surpasses paid ROI is typically 12–18 months for established brands with some existing authority, and 18–30 months for newer domains building from scratch. After that point, the SEO investment consistently outperforms paid on a cost-per-acquisition basis.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">How to Sequence SEO and Ads Strategically</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Stage 1: New or Struggling Business", desc: "Lead with Google Ads to generate immediate revenue. Run SEO in parallel with minimal investment. Use Ads data to identify which keywords convert so SEO investment is accurately targeted." },
              { icon: TrendingUp, title: "Stage 2: Stable, Growing Business", desc: "Increase SEO investment as revenue allows. Maintain Ads for high-value/high-competition terms. Begin shifting budget toward SEO as organic starts producing leads." },
              { icon: BarChart3, title: "Stage 3: Established Business with Organic Presence", desc: "SEO carries the bulk of acquisition volume. Ads become a supplementary channel for specific campaigns, new product launches, and highly competitive terms where organic hasn't yet caught up." },
              { icon: DollarSign, title: "Stage 4: SEO Dominant", desc: "Organic handles most acquisition at declining cost per lead. Ads are selective and tactical—competitor terms, seasonal campaigns, testing new offers. Marketing budget frees up for brand building." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-border/50 bg-secondary/20">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Why We Give You This Honest Analysis</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "We Sell SEO—But We're Honest", desc: "We could tell you SEO beats ads in every scenario. It doesn't. We give you the real picture because building the wrong strategy wastes everyone's time." },
                { title: "We Help You Sequence Correctly", desc: "We'll tell you if your stage of business isn't ready to benefit from SEO yet—and what you should do first." },
                { title: "We Use Ads Data to Improve SEO", desc: "If you're running Ads, we use that conversion data to make your SEO investment smarter. Both channels get better together." },
                { title: "Revenue First", desc: "We're not attached to any particular channel. We're attached to your revenue growth. That's the lens we use for every recommendation." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl border border-border/50 bg-background">
                  <h3 className="font-display text-lg font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Realistic Outcomes: SEO Over Time</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { metric: "12–18 mo", label: "Typical timeline for SEO to match paid media on cost-per-acquisition" },
                { metric: "50–80%", label: "Reduction in organic cost-per-acquisition versus paid after 24 months" },
                { metric: "∞", label: "Organic traffic continues when ad spend pauses" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-xl border border-border/50 bg-secondary/20">
                  <div className="font-display text-3xl font-bold text-gradient-gold mb-2">{item.metric}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ideal Client */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Who Should Prioritize SEO Now</h2>
            <ul className="space-y-3">
              {[
                "Businesses spending $3,000+/month on Google Ads who want to reduce acquisition costs over time",
                "Companies where a single client covers 6+ months of SEO investment",
                "Brands in markets where trust and credibility are primary purchase criteria",
                "Businesses with 12+ months of runway who can afford to let SEO build",
                "Service businesses where organic local results (Google Maps) drive significant call volume",
                "Any business tired of the ad budget treadmill where stopping spend means stopping leads",
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Let's Figure Out Your Best Channel Mix</h2>
            <p className="text-lg text-muted-foreground mb-8">Start with a free audit. We'll give you an honest assessment of your current organic potential and whether SEO should be your next investment.</p>
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
              { label: "Revenue-Driven SEO", href: "/authority/revenue-driven-seo" },
              { label: "What Is SEO ROI?", href: "/questions/what-is-seo-roi" },
              { label: "SEO vs PPC", href: "/questions/seo-vs-ppc" },
              { label: "Technical SEO Audit", href: "/authority/technical-seo-audit" },
              { label: "SEO Pricing", href: "/pricing" },
              { label: "Free Audit", href: "/free-audit" },
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

export default SEOvsGoogleAds;
