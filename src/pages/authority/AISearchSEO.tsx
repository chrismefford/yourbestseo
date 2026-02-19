import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Brain, Zap, Search, Globe } from "lucide-react";
import { SEO, generateFAQSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/components/SEO";

const faqs = [
  { question: "What is AI search optimization?", answer: "AI search optimization is the practice of structuring your content so it gets cited, summarized, or recommended by AI-powered search engines like ChatGPT, Google's AI Overviews, Gemini, and Perplexity. It overlaps with traditional SEO but emphasizes clear entity definitions, authoritative sourcing, and content that answers questions directly and completely." },
  { question: "How is AI search different from Google Search?", answer: "Traditional Google Search returns a list of links. AI search engines synthesize information and provide a direct answer—often without the user clicking through to your site. To win in AI search, your content needs to be the source that gets cited, which requires high topical authority, structured data, and content written in a way that AI systems can easily extract and attribute." },
  { question: "Does ranking in Google still matter if AI search is growing?", answer: "Yes. Google remains the dominant search engine and AI Overviews still pull from highly-ranked, authoritative sources. Strong Google SEO and AI search optimization are complementary strategies, not competing ones. The sites that get cited in AI answers are almost always the same sites that rank well organically." },
  { question: "How does Perplexity source its answers?", answer: "Perplexity uses a combination of web crawling and real-time indexing. It prioritizes sources with clear expertise signals, structured content, cited statistics, and consistent entity presence across the web. Ensuring your site has proper schema markup, factual depth, and is crawlable by AI bots significantly improves citation likelihood." },
  { question: "What content formats work best for AI search?", answer: "Direct-answer formats perform best: definitions, numbered frameworks, comparison tables, and FAQ sections. Content that answers a specific question in the first paragraph, then expands with depth, signals to AI models that your content is both relevant and authoritative. Long-form content with clear H2/H3 structure outperforms listicle-style content in AI citation patterns." },
  { question: "Is AI search optimization a separate service from SEO?", answer: "At YourBestSEO, we integrate AI search optimization into every engagement. There's no artificial separation. The technical and content practices that improve AI visibility—structured data, entity optimization, topical authority, EEAT signals—are the same practices that improve organic rankings. You don't need a separate 'AI SEO' retainer." },
  { question: "How do I know if my content is being cited in AI answers?", answer: "You can manually query AI engines with your target questions and check for citations. Tools like Profound, Brandwatch, and emerging AI visibility trackers are also building monitoring capabilities. We track this for clients as part of monthly reporting." },
];

const schema = [
  generateWebPageSchema({ name: "SEO for AI Search: ChatGPT, Gemini & Perplexity", description: "Optimize your website to get cited by ChatGPT, Gemini, and Perplexity. Learn how AI search optimization works and what it takes to win in 2026.", url: "/authority/ai-search-seo" }),
  generateFAQSchema(faqs),
  generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "AI Search Optimization", url: "/authority/ai-search-seo" }]),
];

const AISearchSEO = () => {
  return (
    <>
      <SEO
        title="SEO for AI Search: ChatGPT, Gemini & Perplexity"
        description="Get cited by ChatGPT, Gemini, and Perplexity. Our AI search optimization builds the authority signals that make AI engines choose your content."
        canonical="/authority/ai-search-seo"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="badge-outline inline-block mb-6">AI Search Optimization</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              Show Up Where Buyers<br />
              <span className="text-gradient-gold">Are Actually Searching</span><br />
              in 2026
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              ChatGPT. Gemini. Perplexity. Your next customer is getting answers from AI—not scrolling page one. We build the authority that gets you cited.
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">The Search Landscape Shifted. Most Websites Weren't Ready.</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div>
                <p className="mb-4">A growing share of research now starts in ChatGPT, Gemini, or Perplexity—not Google. Users ask a question, get a synthesized answer, and only click through to sources that AI explicitly cites. If your site isn't being cited, you're invisible to a segment of your audience that's actively growing.</p>
                <p>The businesses getting cited aren't paying for placement. They've built content ecosystems that AI systems trust: clear expertise signals, factual depth, proper entity markup, and consistent authority across their topic domain.</p>
              </div>
              <div>
                <p className="mb-4">Meanwhile, Google's AI Overviews are absorbing traffic from informational queries—the long-tail content that many SEO programs depend on. If your strategy is built entirely on informational content without commercial intent, you're already feeling the squeeze.</p>
                <p>The response isn't to panic. It's to adapt: double down on authority content that positions you as the definitive source, and structure every page so both Google and AI engines can extract, trust, and cite your content.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">How AI Search Engines Decide What to Cite</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>AI search engines—whether it's Perplexity's real-time web synthesis, Google's AI Overviews, or ChatGPT's browsing mode—operate on a trust hierarchy. They prefer sources that demonstrate consistent expertise, accurate factual claims, and structured presentation of information.</p>
              <p>The signals that matter most: <strong className="text-foreground">topical authority</strong> (do you publish comprehensively on a topic?), <strong className="text-foreground">EEAT signals</strong> (does your site demonstrate experience, expertise, authoritativeness, and trustworthiness?), <strong className="text-foreground">entity clarity</strong> (does schema markup tell AI systems exactly what your business is and does?), and <strong className="text-foreground">content structure</strong> (can AI systems easily extract specific answers from your pages?).</p>
              <p>The good news: these are the same signals Google has been moving toward for years. Investing in AI search optimization isn't starting over—it's accelerating in the direction the best SEO has always pointed.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">How We Optimize for AI Search</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", icon: Brain, title: "Entity & Schema Architecture", desc: "We implement Organization, Service, FAQ, and Article schema so AI systems understand exactly who you are and what you do." },
              { step: "02", icon: Globe, title: "Topical Authority Mapping", desc: "We identify the topic clusters where you need to be the definitive source and build comprehensive coverage across related queries." },
              { step: "03", icon: Search, title: "EEAT Signal Reinforcement", desc: "Author pages, credentials, citations, and first-person expertise woven into content—the trust signals AI engines look for." },
              { step: "04", icon: Zap, title: "Direct-Answer Content Formats", desc: "FAQs, definitions, frameworks, and comparison content structured so AI systems can extract and cite your answers cleanly." },
              { step: "05", icon: CheckCircle, title: "AI Bot Accessibility", desc: "We ensure AI crawlers (GPTBot, Google-Extended, PerplexityBot) have proper access to your content via robots.txt and crawl settings." },
              { step: "06", icon: ArrowRight, title: "Citation Monitoring", desc: "Monthly tracking of where and how often AI engines cite your content, so we can iterate on what's working." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Why We're Ahead on AI Search</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "We Don't Separate AI from SEO", desc: "AI search optimization is baked into every engagement—not sold as an add-on. The technical and content practices overlap almost entirely." },
                { title: "We've Already Tested What Works", desc: "We track AI citation patterns across client sites and continuously update our approach based on what AI engines actually reward." },
                { title: "Lean, Practical Execution", desc: "No theoretical frameworks. We implement schema, restructure content, and build topical coverage—work you can verify and measure." },
                { title: "Built for Business Outcomes", desc: "AI search visibility isn't valuable if it doesn't drive traffic or trust. We connect AI optimization directly to pipeline metrics." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">What AI Search Optimization Delivers</h2>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Increased citation rate in Perplexity, ChatGPT browse, and Google AI Overviews within 60–90 days of content restructuring",
                "Brand visibility in AI-generated answers to high-intent industry questions",
                "Compounding topical authority that makes you harder to displace as AI systems build preference for established sources",
                "Referral traffic from AI engines that now send direct links in cited answers",
                "Reduced dependence on any single ranking position or algorithm update",
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Who Needs AI Search Optimization Now</h2>
            <ul className="space-y-3">
              {[
                "B2B companies whose buyers research solutions using ChatGPT or Perplexity before contacting vendors",
                "Professional services firms where trust and expertise are primary purchase criteria",
                "SaaS businesses competing in categories where AI tools are commonly used for research and comparison",
                "Agencies who want to offer forward-looking SEO to clients already asking about 'ChatGPT SEO'",
                "Publishers and content sites facing AI Overview cannibalization of informational traffic",
                "Any business investing in thought leadership and wanting that investment to show up in AI answers",
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Don't Let AI Search Pass You By</h2>
            <p className="text-lg text-muted-foreground mb-8">We'll audit your current AI search visibility and show you exactly what it would take to get cited where your buyers are searching.</p>
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
          <h2 className="font-display text-2xl font-bold mb-6">Related Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Revenue-Driven SEO", href: "/authority/revenue-driven-seo" },
              { label: "Technical SEO Audit Services", href: "/authority/technical-seo-audit" },
              { label: "Schema Markup Service", href: "/services/schema-markup" },
              { label: "What Is SEO ROI?", href: "/questions/what-is-seo-roi" },
              { label: "White Label SEO for Agencies", href: "/authority/white-label-seo" },
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

export default AISearchSEO;
