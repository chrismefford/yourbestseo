import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Crown, Rocket, ArrowRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingTiers = [
  {
    name: "Local Package",
    description: "For local and single-location businesses needing stronger visibility fast.",
    price: "$400",
    period: "/mo",
    reporting: "Monthly visibility report + growth tracking",
    features: [
      "Dominate local search in your market",
      "Local authority building",
      "Quality backlinks from local directories",
      "Turn searches into customers",
      "Clear local performance tracking",
      "Monthly reports showing local pack rankings"
    ],
    cta: "Lock Local Package",
    href: "/services",
    icon: Shield,
    featured: false
  },
  {
    name: "Get Ranked Package",
    description: "For agency clients who need stronger rankings, more traffic, and a deeper SEO strategy behind the scenes.",
    price: "$900",
    period: "/mo",
    reporting: "Bi-weekly performance updates + conversion tracking",
    features: [
      "Comprehensive technical SEO audit & fixes",
      "Site speed optimization",
      "AI-powered content at scale (8-12 pieces/month)",
      "Strategic keyword-targeted blogs, service pages, and landing pages",
      "Competitive keyword domination strategy",
      "Target 50+ high-value keywords with data-driven content clusters"
    ],
    cta: "Tour Ranked Package",
    href: "/services",
    icon: Zap,
    featured: true
  },
  {
    name: "Dominate the Rankings Package",
    description: "For enterprise, high-competition markets, and brands needing full dominance.",
    price: "$1,900",
    period: "/mo",
    reporting: "Weekly executive reporting + real-time dashboards",
    features: [
      "Full-scale SEO warfare",
      "Enterprise technical optimization, advanced site architecture",
      "Content machine: 15-20 strategic assets monthly",
      "Premium link acquisition at scale (30-50 DR60+ backlinks)",
      "Total market domination strategy",
      "Own page one for 100+ competitive keywords"
    ],
    cta: "Book Domination Briefing",
    href: "/services",
    icon: Crown,
    featured: false
  }
];

const alaCarteServices = [
  { name: "10 SEO-Optimized Blog Posts", href: "/services/seo-blog-posts", price: "$300" },
  { name: "Technical SEO Quick-Fix Package", href: "/services/technical-seo", price: "$300" },
  { name: "Google Business Profile Optimization", href: "/services/google-business-profile", price: "$300" },
  { name: "Keyword Research & Roadmap", href: "/services/keyword-research", price: "$300" },
  { name: "Competitor Keyword Analysis", href: "/services/competitor-analysis", price: "$300" },
  { name: "10 White-Hat Backlinks", href: "/services/white-hat-backlinks", price: "$300" },
  { name: "50 Local Citations", href: "/services/local-citations", price: "$300" },
  { name: "Review Response Management", href: "/services/review-management", price: "$300" },
  { name: "Schema Markup Implementation", href: "/services/schema-markup", price: "$300" },
  { name: "Monthly Ranking Reports", href: "/services/ranking-reports", price: "$300" }
];

const comparisonData = [
  { capability: "Google Business Profile ops & citation management", local: "included", ranked: "included", dominate: "included" },
  { capability: "Technical SEO backlog + dev ticket delivery", local: "add-on", ranked: "included", dominate: "included" },
  { capability: "Content studio (landing pages, thought leadership, CRO copy)", local: "—", ranked: "included", dominate: "included" },
  { capability: "Digital PR & authority partnerships", local: "Regional boosts", ranked: "included", dominate: "included" },
  { capability: "Programmatic SEO & experimentation lab", local: "—", ranked: "Select initiatives", dominate: "included" },
  { capability: "Client meeting coverage + renewal support", local: "As needed", ranked: "included", dominate: "included" },
  { capability: "Dedicated analytics & Looker reporting", local: "Core dashboards", ranked: "included", dominate: "included" },
  { capability: "Priority launch desk + 24/7 monitoring", local: "—", ranked: "Business hours", dominate: "included" }
];

const faqs = [
  {
    question: "How white-label is the engagement?",
    answer: "Everything ships under your brand: decks, dashboards, inbox comms, and meetings. We show up as part of your agency, using your domains and tooling."
  },
  {
    question: "Can we mix packages across clients?",
    answer: "Yes. Most agencies resell multiple tiers at once. Each client receives its own scope, cadence, and telemetry so you can price for margin."
  },
  {
    question: "What does onboarding look like?",
    answer: "Week 1 is requirements and access, Week 2 is deep audit + mission plan, Week 3 we ship initial deliverables. Local can be live even faster."
  },
  {
    question: "Do you sign NDAs and partner agreements?",
    answer: "Absolutely. We operate under mutual NDAs, SOC2-compliant tooling, and structured SLAs so enterprise procurement clears us quickly."
  }
];

const stats = [
  { value: "32 months", label: "Avg. client retention", sublabel: "Longest-running white-label program in orbit." },
  { value: "2.4K", label: "Leads protected", sublabel: "Handled directly on behalf of partner agencies." },
  { value: "2.8M", label: "Keywords tracked", sublabel: "Telemetry routed through GA4, Looker, and custom stacks." }
];

const trustBadges = [
  "Search Engine Land Topic Expertise",
  "Shopify Plus SEO Optimization Experience",
  "HubSpot Content + SEO Workflows",
  "Semrush Data & Visibility Analysis"
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="badge-outline inline-flex items-center gap-2 mb-6">
              <Rocket className="w-4 h-4" />
              Pricing Manifest
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              SEO Services at <span className="text-gradient-gold">1/10th</span> Traditional Agency Cost
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              The pricing below shows your cost as our white-label partner. Most agencies mark this up 2-3X when billing their own clients. Three transparent tiers, all-inclusive services, month-to-month terms. Your margin, your control.
            </p>
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="/#contact">
                Let's Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              Tiered for agency realities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Choose Your Package.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  tier.featured 
                    ? 'bg-primary text-primary-foreground glow-gold' 
                    : 'bg-card border border-border'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <tier.icon className={`w-8 h-8 ${tier.featured ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>
                
                <p className={`text-sm mb-6 ${tier.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {tier.description}
                </p>

                <div className="mb-4">
                  <span className={`text-xs uppercase tracking-wider ${tier.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    Investment
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className={`text-sm ${tier.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      {tier.period}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className={`text-xs uppercase tracking-wider ${tier.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    Reporting cadence
                  </span>
                  <p className={`text-sm mt-1 ${tier.featured ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                    {tier.reporting}
                  </p>
                </div>

                <ul className="space-y-3 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className={`w-5 h-5 shrink-0 mt-0.5 ${tier.featured ? 'text-primary-foreground' : 'text-primary'}`} />
                      <span className={tier.featured ? 'text-primary-foreground/90' : 'text-muted-foreground'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button 
                    variant={tier.featured ? "secondary" : "outline"} 
                    className="w-full"
                    asChild
                  >
                    <a href={tier.href}>{tier.cta}</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* À La Carte Section */}
      <section id="a-la-carte" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                Savings That Are Out of This World
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                Pick one thing. <span className="text-gradient-gold">We ship in 24–48 hours.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 mb-8"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="text-5xl font-bold text-primary">$300</div>
                <div className="text-muted-foreground">
                  Any option below, flat-rate.
                </div>
              </div>
              <p className="text-muted-foreground mb-8">
                Drop a single request—content refresh, technical fix, link shot, or review push. Every option below is $300 flat. We execute behind the curtain, return a proof packet, and log the work in your mission tracker.
              </p>
              
              <div className="grid md:grid-cols-2 gap-3">
                {alaCarteServices.map((service, index) => (
                  <motion.a
                    key={index}
                    href={service.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      <span className="text-foreground group-hover:text-primary transition-colors">{service.name}</span>
                    </div>
                    <span className="text-primary font-semibold">{service.price}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              Comparison Matrix
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Mission control clarity, no hidden toggles.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Every tier inherits the Local stack, then layers on technical firepower, content engines, and experimentation pods. Preview the exact coverage below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto overflow-x-auto"
          >
            <div className="flex gap-4 mb-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Included out of the box</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                <span className="text-muted-foreground">Upgraded treatment or scoped add-on</span>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-foreground font-semibold">Capability</TableHead>
                  <TableHead className="text-foreground font-semibold text-center">Local Package</TableHead>
                  <TableHead className="text-foreground font-semibold text-center bg-primary/10">Get Ranked Package</TableHead>
                  <TableHead className="text-foreground font-semibold text-center">Dominate the Rankings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className="border-border">
                    <TableCell className="text-muted-foreground">{row.capability}</TableCell>
                    <TableCell className="text-center">
                      <span className={row.local === "included" ? "text-primary font-medium" : "text-muted-foreground"}>
                        {row.local === "included" ? "✓ Included" : row.local}
                      </span>
                    </TableCell>
                    <TableCell className="text-center bg-primary/5">
                      <span className={row.ranked === "included" ? "text-primary font-medium" : "text-muted-foreground"}>
                        {row.ranked === "included" ? "✓ Included" : row.ranked}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className={row.dominate === "included" ? "text-primary font-medium" : "text-muted-foreground"}>
                        {row.dominate === "included" ? "✓ Included" : row.dominate}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                FAQ + Trust Signals
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                Answers we send to every procurement team.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              Telemetry snapshot
            </span>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {trustBadges.map((badge, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              Ready for lift-off?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Drop your prospect list. We'll quote each with zero guesswork.
            </h2>
            <p className="text-muted-foreground mb-8">
              Send the three deals you're chasing and we'll respond with recommended tier, à la carte option, margin analysis, and timeline for first wins.
            </p>
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="/#contact">
                Send Mission Briefing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
