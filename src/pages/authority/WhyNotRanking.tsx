import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, AlertTriangle, Search, Globe, Zap } from "lucide-react";
import { SEO, generateFAQSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/components/SEO";

const faqs = [
  { question: "Why isn't my website showing up on Google?", answer: "The most common reasons are: Google hasn't indexed your site yet, your pages lack substantive content targeting specific search queries, your site has technical issues blocking crawlers, you have no backlinks or domain authority, or you're competing in a space where established sites have significantly more authority. A site audit identifies which of these applies." },
  { question: "How do I know if Google has indexed my site?", answer: "Search Google for 'site:yourdomain.com'—this shows all pages Google has indexed. If your site doesn't appear, check Google Search Console for crawl errors, indexing blocks in your robots.txt, or a noindex tag on your pages. New sites can take 2–6 weeks to be crawled and indexed for the first time." },
  { question: "Can a website be penalized by Google and not know it?", answer: "Yes. Manual actions (penalties applied by Google reviewers) appear in Google Search Console under Security & Manual Actions. Algorithmic penalties—where an update devalued your site—don't generate a notification. If your traffic dropped sharply around a known Google update date, it's likely algorithmic rather than a manual penalty." },
  { question: "Does website age affect rankings?", answer: "Domain age itself is a minor factor. What matters more is the age of content and links pointing to your site. An older domain that's been consistently building authority will outrank a new domain in most cases. But a new domain with strong content and earned backlinks can compete in less saturated niches within 6–12 months." },
  { question: "How much content do I need to rank?", answer: "Quality and relevance matter more than raw word count. A 600-word page that precisely answers a specific query will outrank a 3,000-word page stuffed with tangentially related content. The rule of thumb: write as much as the topic genuinely requires, structure it clearly, and make sure it matches the search intent behind the keywords you're targeting." },
  { question: "Why does my competitor rank above me even though my site looks better?", answer: "Visual design has no direct impact on Google rankings. Your competitor likely has more backlinks, more topical content, better on-page optimization, stronger technical foundations, or a longer established presence in Google's index. Rankings are about trust and relevance signals, not aesthetics." },
  { question: "What's the fastest way to improve Google rankings?", answer: "The fastest genuine improvements come from: fixing technical issues blocking indexing, optimizing existing pages for keywords you're close to ranking for (positions 4–15), earning a few quality backlinks, and claiming and optimizing your Google Business Profile for local results. These changes can move rankings within 4–8 weeks in many cases." },
  { question: "Should I use Google Ads while my SEO catches up?", answer: "For businesses with budget, running Google Ads in parallel with SEO is a reasonable bridge strategy. Ads generate immediate visibility while organic authority builds. However, don't let Ads become a permanent substitute—they stop the moment you stop paying, while SEO compounds over time." },
];

const reasons = [
  { icon: Globe, title: "Your site isn't indexed", desc: "Google can't rank pages it hasn't found. Crawl blocks, noindex tags, and orphaned pages are common culprits." },
  { icon: Search, title: "You're targeting the wrong keywords", desc: "Generic industry terms are dominated by large sites. The searches your buyers actually make are often different—and more winnable." },
  { icon: AlertTriangle, title: "Your pages have thin content", desc: "A 200-word service page doesn't give Google enough to evaluate topical relevance. Competitors with comprehensive pages win." },
  { icon: Zap, title: "Slow page speed", desc: "Core Web Vitals are a ranking factor. If your site loads slowly on mobile, Google deprioritizes it—especially in competitive niches." },
  { icon: CheckCircle, title: "No backlinks", desc: "Links from other sites are still the primary signal of authority. Without them, even perfect on-page SEO has a ceiling." },
  { icon: AlertTriangle, title: "Duplicate or cannibalized content", desc: "Multiple pages targeting the same keyword split your authority and confuse Google about which page to rank." },
];

const schema = [
  generateWebPageSchema({ name: "Why Your Website Isn't Ranking on Google", description: "Discover the real reasons your website isn't ranking on Google and what you can do about it. A practical guide from experienced SEO professionals.", url: "/authority/why-not-ranking" }),
  generateFAQSchema(faqs),
  generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Why Not Ranking", url: "/authority/why-not-ranking" }]),
];

const WhyNotRanking = () => {
  return (
    <>
      <SEO
        title="Why Your Website Isn't Ranking on Google (And How to Fix It)"
        description="The real reasons your site isn't ranking on Google—and practical fixes. No fluff, no jargon. Just an honest diagnostic from experienced SEO professionals."
        canonical="/authority/why-not-ranking"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="badge-outline inline-block mb-6">SEO Diagnostics</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
              Why Your Website<br />
              <span className="text-gradient-gold">Isn't Ranking</span><br />
              on Google
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              There's a specific reason—or a few. We'll tell you exactly what they are and how to fix them. No guesswork, no fluff.
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">You Built a Website. Google Doesn't Know It Exists.</h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <div>
                <p className="mb-4">Having a website is not the same as being findable on Google. Millions of websites exist in a state of permanent obscurity—built, launched, and then forgotten by search engines because nothing was done to make them discoverable, relevant, or trustworthy.</p>
                <p>If you're reading this because your site isn't ranking, you're not alone. The good news: the reasons are almost always diagnosable and fixable. There's no mystery here, just a gap between what Google needs to see and what your site currently shows it.</p>
              </div>
              <div>
                <p className="mb-4">The bad news is that generic advice ("publish more content" or "get more backlinks") without knowing why you specifically aren't ranking wastes time and money. The fix for a site that isn't indexed is completely different from the fix for a site that ranks on page 3 for the right keywords.</p>
                <p>What you need is a diagnostic, not a prescription written before anyone looked at your site. That's how we start every engagement.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education - The 6 Reasons */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">The 6 Most Common Reasons Your Site Isn't Ranking</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all bg-background">
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

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">How We Diagnose and Fix Ranking Problems</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Technical Crawl Audit", desc: "We crawl your site the way Google does—identifying blocked pages, slow load times, broken links, redirect chains, duplicate content, and indexing issues. Technical problems are fixed before anything else because they undermine everything downstream." },
                { step: "02", title: "Keyword Opportunity Analysis", desc: "We analyze the keywords you're currently ranking for and compare them against the keywords your buyers actually use. Often there's a mismatch: you're targeting brand terms and generic keywords while your competitors own the transactional phrases that drive business." },
                { step: "03", title: "Competitive Gap Analysis", desc: "We reverse-engineer what your top-ranking competitors are doing right: their content depth, page structure, internal linking, and backlink profile. This tells us exactly what it will take to overtake them and in what timeframe." },
                { step: "04", title: "On-Page Optimization", desc: "We rewrite underperforming pages with proper keyword targeting, heading structure, meta tags, and internal links. Content that was invisible becomes content that competes." },
                { step: "05", title: "Authority Building", desc: "Where backlink gaps exist, we develop a targeted link acquisition strategy: relevant directory submissions, industry citations, guest content, and PR-driven placements. No link farms. No shortcuts that create future risk." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-xl border border-border/50 bg-background">
                  <span className="font-display text-4xl font-bold text-primary/20 shrink-0 leading-none">{item.step}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">Why Choose YourBestSEO for Ranking Recovery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Diagnosis First, Prescription Second", desc: "We don't sell you a package before understanding your specific problem. Every engagement starts with an audit." },
                { title: "Technical Depth", desc: "Our team has fixed sites penalized by Panda, Penguin, Core Updates, and Helpful Content. We've seen most problems before." },
                { title: "Plain English Reporting", desc: "You'll understand exactly what's wrong and why we're fixing it in that order. No hiding behind complexity." },
                { title: "Revenue Focus", desc: "Fixing rankings is the mechanism. The goal is more clients, more leads, more revenue. We keep that front and center." },
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Realistic Recovery Timelines</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">Recovery speed depends on why you weren't ranking. Technical fixes deliver results fastest; authority building takes longer. Here's what to expect:</p>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Technical indexing fixes: visibility improvements often within 2–4 weeks of implementation",
                "On-page optimization of existing pages: ranking movement typically within 4–8 weeks",
                "New content targeting specific keywords: initial rankings in 8–16 weeks for lower-competition terms",
                "Backlink building: meaningful authority impact visible over 3–6 months of consistent effort",
                "Recovery from algorithmic devaluation: typically 2–4 months after root cause is addressed",
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Who This Is For</h2>
            <ul className="space-y-3">
              {[
                "Business owners who launched a website months ago and it's still invisible on Google",
                "Companies that switched website platforms and lost their rankings in the transition",
                "Businesses that saw traffic drop sharply after a Google algorithm update",
                "Organizations that have invested in SEO with another provider and haven't seen results",
                "New businesses in competitive markets who want to understand what it will realistically take to rank",
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Find Out Exactly Why You're Not Ranking</h2>
            <p className="text-lg text-muted-foreground mb-8">Our free audit tells you what's broken and what it will take to fix it—no obligation, no sales pressure.</p>
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
              { label: "Technical SEO Audit Services", href: "/authority/technical-seo-audit" },
              { label: "Revenue-Driven SEO", href: "/authority/revenue-driven-seo" },
              { label: "How to Do a Site Audit", href: "/questions/how-to-do-a-site-audit" },
              { label: "How to Recover from Google Penalty", href: "/questions/how-to-recover-from-google-penalty" },
              { label: "What Is Technical SEO?", href: "/questions/what-is-technical-seo" },
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

export default WhyNotRanking;
