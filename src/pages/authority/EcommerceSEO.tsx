import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ShoppingCart, TrendingUp, Search, BarChart3 } from "lucide-react";
import { SEO, generateFAQSchema, generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from "@/components/SEO";

const faqs = [
  { question: "What is ecommerce SEO?", answer: "Ecommerce SEO is the practice of optimizing an online store to rank in search results for product and category queries, driving organic traffic that converts to sales. It encompasses technical site architecture, product page optimization, category page strategy, structured data for products, and content marketing—all designed to connect buyers searching for what you sell with your store." },
  { question: "How is ecommerce SEO different from service business SEO?", answer: "Ecommerce SEO operates at much higher page volume (thousands to millions of pages), must handle dynamic content like prices and inventory, requires Product schema for rich snippets in search results, and deals with unique technical challenges like faceted navigation creating duplicate content. The content strategy also differs: product pages, category pages, and buying guides replace the service and location pages used by service businesses." },
  { question: "How do I rank product pages on Google?", answer: "Ranking product pages requires: unique, detailed product descriptions (not manufacturer copy), proper Product schema markup, page speed optimization (especially for mobile), internal links from category and blog pages, and ideally some earned backlinks or press mentions. The biggest mistake: using manufacturer descriptions that appear on dozens of other retailer sites—Google treats this as duplicate content." },
  { question: "What is faceted navigation and why does it affect SEO?", answer: "Faceted navigation is the filtering system (color, size, price range, etc.) that creates multiple URL variations of the same category. Without proper handling, this generates thousands of duplicate or low-value pages that waste crawl budget and dilute link equity. Solutions include canonical tags, noindex directives on filtered pages, or dynamic rendering—the right approach depends on your platform and catalog size." },
  { question: "How long does ecommerce SEO take to drive significant revenue?", answer: "Brands with existing domain authority and indexed pages can see meaningful traffic improvement within 60–90 days of focused optimization. New stores starting from zero typically need 6–12 months before organic generates significant revenue. The compounding nature of SEO means the investment pays back better in years 2 and 3 than year 1—which is why starting earlier is always the right call." },
  { question: "Should I invest in SEO or paid ads for my ecommerce store?", answer: "Early-stage stores typically need both: paid ads for immediate visibility and cash flow, SEO for long-term acquisition cost reduction. As SEO matures, the cost per acquisition from organic typically drops 50–80% versus paid. For most established brands, the ideal mix is SEO handling the bulk of top-of-funnel and brand discovery, with paid ads covering high-intent, high-competition product terms where organic is still competitive." },
  { question: "What ecommerce platforms are best for SEO?", answer: "Shopify, WooCommerce (WordPress), and BigCommerce all have strong SEO foundations when properly configured. Custom-built stores on frameworks like Next.js can be exceptional but require more technical expertise to get right. Platforms to approach with caution for SEO: Wix ecommerce and some older Magento setups where technical debt creates crawling problems. The platform matters less than the implementation." },
];

const schema = [
  generateWebPageSchema({ name: "Ecommerce SEO Services for Retail & Online Brands", description: "Ecommerce SEO that drives organic sales. Product page optimization, category strategy, technical architecture, and structured data for online retailers.", url: "/authority/ecommerce-seo" }),
  generateServiceSchema({ name: "Ecommerce SEO Services", description: "Comprehensive ecommerce SEO including product page optimization, category architecture, structured data, and content strategy for online retailers.", price: 1800, slug: "ecommerce-seo" }),
  generateFAQSchema(faqs),
  generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Ecommerce SEO", url: "/authority/ecommerce-seo" }]),
];

const EcommerceSEO = () => {
  return (
    <>
      <SEO
        title="Ecommerce SEO Services That Drive Organic Sales"
        description="Ecommerce SEO for retail and online brands. Product pages, category strategy, structured data, and technical architecture that turns organic search into revenue."
        canonical="/authority/ecommerce-seo"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="badge-outline inline-block mb-6">Ecommerce SEO Services</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              Turn Organic Search<br />
              <span className="text-gradient-gold">Into Ecommerce Revenue</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Stop paying acquisition costs that evaporate the moment your ad spend does. We build organic search channels that drive product sales with compounding returns.
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Paid Ads Keep Getting More Expensive. Organic Keeps Compounding.</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div>
                <p className="mb-4">Google Shopping CPCs have increased year-over-year for most retail categories. Meta ad costs fluctuate unpredictably. The brands winning long-term are reducing their dependence on paid acquisition by building organic search channels that deliver traffic at near-zero marginal cost after the investment is made.</p>
                <p>Ecommerce SEO compounds. A well-optimized product page that ranks today will still rank next year and the year after. A Google Ads campaign stops the moment you pause the budget. These are fundamentally different economics, and the delta matters more as your business scales.</p>
              </div>
              <div>
                <p className="mb-4">The challenge with ecommerce SEO is execution complexity. Thousands of product pages, dynamic inventory, faceted navigation, duplicate content from manufacturer descriptions—these are real problems that require technical expertise, not just content writing.</p>
                <p>Done poorly, ecommerce SEO creates as many problems as it solves. Done right, it builds an organic revenue channel that outperforms paid media over any 24+ month horizon.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">What Ecommerce SEO Actually Involves</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>Ecommerce SEO has four layers that must work together. <strong className="text-foreground">Technical architecture</strong>—site crawlability, indexation control, site speed, and faceted navigation handling. <strong className="text-foreground">Category page optimization</strong>—your category pages are often the highest-traffic landing points and need proper keyword targeting, content, and internal linking. <strong className="text-foreground">Product page optimization</strong>—unique descriptions, Product schema, rich snippets, and review integration. <strong className="text-foreground">Content marketing</strong>—buying guides, comparison content, and informational articles that capture researchers early and route them toward purchase.</p>
              <p>The most frequently neglected layer is category pages. Most brands spend time on product descriptions but ignore their /category/ URLs entirely—yet category pages often rank for the highest-volume product category terms. A category page with 300 words of relevant editorial content and proper keyword targeting can dramatically outperform a category with only a product grid.</p>
              <p>In 2026, Product schema and review markup are also increasingly important for visibility in AI search results, which are beginning to surface product recommendations for specific purchase queries.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Our Ecommerce SEO Process</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", icon: Search, title: "Ecommerce SEO Audit", desc: "Full technical and content audit: crawl analysis, indexation status, faceted navigation assessment, and category/product page baseline." },
              { step: "02", icon: BarChart3, title: "Keyword & Category Mapping", desc: "We map search intent to your catalog structure, identifying which categories need editorial content and which products should target long-tail queries." },
              { step: "03", icon: ShoppingCart, title: "Category Page Strategy", desc: "Optimized editorial content for your top category pages—the highest-leverage pages in your organic traffic mix." },
              { step: "04", icon: CheckCircle, title: "Product Schema Implementation", desc: "Product, Offer, and Review schema across your catalog, enabling rich snippets that improve CTR from search results." },
              { step: "05", icon: TrendingUp, title: "Technical Architecture Fixes", desc: "Faceted navigation control, canonical implementation, crawl budget optimization, and Core Web Vitals improvement." },
              { step: "06", icon: ArrowRight, title: "Commerce Content Strategy", desc: "Buying guides, comparison articles, and product education content that captures research-phase buyers and drives them toward purchase." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Why Ecommerce Brands Choose YourBestSEO</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Revenue Attribution Built In", desc: "We connect GA4 ecommerce tracking to organic traffic so you see exactly which SEO work is generating sales—not just traffic." },
                { title: "Technical Depth", desc: "Ecommerce SEO requires real technical expertise. We handle complex crawl architecture, dynamic rendering, and platform-specific issues." },
                { title: "Category-First Thinking", desc: "Most SEO vendors obsess over product pages. We know the highest ROI often comes from category page optimization—which most competitors ignore." },
                { title: "White Label Available", desc: "We work directly with brands or as a white-label partner for agencies serving retail clients. Same quality, either model." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">What Ecommerce Brands Typically See</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { metric: "60–90 days", label: "Typical window for meaningful traffic improvement on established domains" },
                { metric: "50–80%", label: "Average reduction in organic cost-per-acquisition versus paid media over 18 months" },
                { metric: "2–4x", label: "Typical organic revenue growth over 12 months with consistent SEO execution" },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Best-Fit Ecommerce Brands</h2>
            <ul className="space-y-3">
              {[
                "DTC brands spending $10K+/month on paid ads who want to reduce acquisition costs",
                "Established retailers with significant product catalogs that haven't been properly optimized",
                "Shopify, WooCommerce, or BigCommerce stores looking to reduce dependence on paid channels",
                "Brands entering competitive product categories who want to build organic presence before ad costs escalate",
                "Agencies managing ecommerce clients who need white-label SEO execution",
                "Retailers with seasonal demand patterns who want organic traffic to reduce auction-driven ad cost spikes",
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Start Building Your Organic Revenue Channel</h2>
            <p className="text-lg text-muted-foreground mb-8">Start with a free ecommerce SEO audit. We'll identify your highest-leverage opportunities and what realistic improvement looks like for your specific catalog and market.</p>
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
              { label: "Technical SEO Audit", href: "/authority/technical-seo-audit" },
              { label: "SEO vs Google Ads", href: "/authority/seo-vs-google-ads" },
              { label: "Schema Markup Service", href: "/services/schema-markup" },
              { label: "What Is SEO ROI?", href: "/questions/what-is-seo-roi" },
              { label: "White Label SEO for Agencies", href: "/authority/white-label-seo" },
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

export default EcommerceSEO;
