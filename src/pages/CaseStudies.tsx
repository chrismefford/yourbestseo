import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Target, Zap, ExternalLink, ChevronRight, Rocket, Award, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEO, generateBreadcrumbSchema, generateWebPageSchema } from "@/components/SEO";

const caseStudies = [
  {
    id: "inspire-smiles",
    missionNumber: "001",
    codename: "Operation: Smile Bright",
    client: "Local High-End Cosmetic Dentist",
    industry: "Healthcare / Dental",
    url: "inspiresmilessd.com",
    heroMetric: "+2300%",
    heroLabel: "Organic Traffic Growth",
    challenge: "A premier cosmetic dentist in San Diego was stuck on page 4 of Google, invisible to patients actively searching for veneers, implants, and smile makeovers. Despite offering world-class services, they were losing potential patients to competitors with weaker reputations but stronger SEO.",
    solution: "We deployed a full-spectrum local SEO assault: optimized their Google Business Profile, built out location-specific landing pages, created authoritative content around high-value procedures, and secured quality backlinks from dental industry publications.",
    timeline: [
      { day: "Day 30", milestone: "Moved from page 4 to page 2" },
      { day: "Day 60", milestone: "Broke into page 1 for primary keywords" },
      { day: "Day 90", milestone: "Page 1 rankings secured" },
      { day: "Day 120", milestone: "Top 5 positions achieved" },
      { day: "Day 180", milestone: "100+ keywords ranking" },
    ],
    results: [
      { metric: "+2300%", label: "Organic Traffic" },
      { metric: "Page 1", label: "Google Rankings" },
      { metric: "100+", label: "Keywords Ranking" },
      { metric: "Top 5", label: "Primary Terms" },
    ],
    testimonial: "We went from wondering if SEO was worth it to having more patient inquiries than we can handle. The ROI has been incredible.",
    gradient: "from-blue-500 to-cyan-500",
    icon: Award,
  },
  {
    id: "monday-morning",
    missionNumber: "002",
    codename: "Operation: Sober Success",
    client: "Non-Alcoholic Bottle Shop",
    industry: "E-commerce / Beverage",
    url: "mondaymorning-af.com",
    heroMetric: "+1300%",
    heroLabel: "Organic Traffic Growth",
    challenge: "A pioneering non-alcoholic bottle shop was entering a rapidly growing but competitive market. With established players dominating search results, they needed to carve out visibility fast to capture the sober-curious movement.",
    solution: "We identified untapped keyword opportunities in the NA beverage space, created comprehensive buying guides and product comparisons, optimized for AI search engines (ChatGPT, Claude), and built topical authority through strategic content clusters.",
    timeline: [
      { day: "Day 30", milestone: "Initial keyword rankings established" },
      { day: "Day 60", milestone: "Page 1 for all major categories" },
      { day: "Day 90", milestone: "Discoverable on ChatGPT & Claude" },
      { day: "Day 180", milestone: "300+ keywords ranking" },
    ],
    results: [
      { metric: "+1300%", label: "Organic Traffic" },
      { metric: "Page 1", label: "All Categories" },
      { metric: "300+", label: "Keywords Ranking" },
      { metric: "AI Ready", label: "ChatGPT/Claude" },
    ],
    testimonial: "They didn't just get us ranking on Google—they got us showing up in AI search results before our competitors even knew that was a thing.",
    gradient: "from-emerald-500 to-green-500",
    icon: Rocket,
  },
  {
    id: "payrolling",
    missionNumber: "003",
    codename: "Operation: Global Reach",
    client: "Global HR Business",
    industry: "B2B / Human Resources",
    url: "payrolling.com",
    heroMetric: "+1170%",
    heroLabel: "Qualified Leads Growth",
    challenge: "A global HR and payrolling company had a massive addressable market but minimal search visibility. With only 100K impressions per year and 30 leads, they were leaving significant revenue on the table.",
    solution: "We engineered a content explosion: 500 strategic landing pages targeting location-specific and service-specific keywords. Combined with technical SEO overhauls and aggressive link building, we transformed their digital presence.",
    timeline: [
      { day: "Month 3", milestone: "Traffic doubled" },
      { day: "Month 6", milestone: "500 landing pages live" },
      { day: "Month 9", milestone: "Lead volume up 500%" },
      { day: "Month 12", milestone: "30M impressions achieved" },
    ],
    results: [
      { metric: "30M", label: "Annual Impressions" },
      { metric: "365", label: "Leads Per Year" },
      { metric: "500", label: "Landing Pages" },
      { metric: "+1170%", label: "Lead Growth" },
    ],
    testimonial: "We went from 30 leads a year to a lead per day. The scale of transformation is something we couldn't have imagined.",
    gradient: "from-purple-500 to-violet-500",
    icon: TrendingUp,
  },
  {
    id: "home-value",
    missionNumber: "004",
    codename: "Operation: Foundation",
    client: "Start-Up Home Appraisal Business",
    industry: "Real Estate / Services",
    url: "learnyourhomesvalue.com",
    heroMetric: "+1000%",
    heroLabel: "Business Growth",
    challenge: "A brand-new home appraisal business was starting from absolute zero—no website, no rankings, no leads. They needed to build visibility fast in a competitive local market dominated by established players.",
    solution: "We built their SEO foundation from scratch: 100 optimized pages at launch targeting every relevant local keyword, comprehensive Google Business Profile setup, and a content strategy designed for immediate visibility.",
    timeline: [
      { day: "Launch", milestone: "100 pages deployed" },
      { day: "Month 1", milestone: "First organic impressions" },
      { day: "Month 2", milestone: "10K impressions achieved" },
      { day: "Month 3", milestone: "Regular weekly jobs" },
    ],
    results: [
      { metric: "100", label: "Pages at Launch" },
      { metric: "10K", label: "Monthly Impressions" },
      { metric: "2/week", label: "New Jobs" },
      { metric: "+1000%", label: "Growth" },
    ],
    testimonial: "Going from zero to two jobs a week in just a few months—that's the kind of launch every new business dreams of.",
    gradient: "from-amber-500 to-orange-500",
    icon: BarChart3,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CaseStudies = () => {
  const pageSchema = generateWebPageSchema({
    name: "SEO Case Studies - Missions Accomplished",
    description: "Real SEO results from real clients. See verified outcomes, transparent timelines, and the strategies that drove +2300% traffic growth.",
    url: "/case-studies",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Case Studies - Real SEO Results"
        description="Real results from real clients. Every mission documented with verified outcomes: +2300% organic traffic, +1300% lead growth, page 1 rankings."
        canonical="/case-studies"
        schema={[pageSchema, breadcrumbSchema]}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="badge-outline mb-6 inline-block">Mission Dossiers</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Case Studies: <span className="text-gradient-gold">Missions Accomplished</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real clients. Every mission documented with verified outcomes, 
              transparent timelines, and the strategies that made it happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="py-8 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-display font-bold text-gradient-gold">4</p>
              <p className="text-sm text-muted-foreground">Missions Completed</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-gradient-gold">1,442%</p>
              <p className="text-sm text-muted-foreground">Avg. Traffic Growth</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-gradient-gold">100%</p>
              <p className="text-sm text-muted-foreground">Page 1 Success Rate</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-gradient-gold">800+</p>
              <p className="text-sm text-muted-foreground">Keywords Ranking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Mission Header */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 lg:p-12 rounded-3xl card-gradient border border-border/50 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${study.gradient} opacity-5 blur-3xl`} />
                  
                  {/* Left Column - Mission Info */}
                  <div className="lg:w-2/5 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-primary tracking-widest">
                        MISSION #{study.missionNumber}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                    </div>
                    
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      {study.codename}
                    </p>
                    
                    <h2 className="font-display text-2xl lg:text-3xl font-bold mb-2">
                      {study.client}
                    </h2>
                    
                    <a
                      href={`https://${study.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6"
                    >
                      {study.url}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-sm text-muted-foreground mb-8">
                      <study.icon className="w-4 h-4 text-primary" />
                      {study.industry}
                    </div>

                    {/* Hero Metric */}
                    <div className="p-6 rounded-2xl bg-background/50 border border-border/30">
                      <p className={`text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                        {study.heroMetric}
                      </p>
                      <p className="text-muted-foreground mt-2">{study.heroLabel}</p>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="lg:w-3/5 space-y-8 relative z-10">
                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-display font-bold text-lg mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-red-400" />
                          The Challenge
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-primary" />
                          Our Solution
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <h3 className="font-display font-bold text-lg mb-4">Mission Timeline</h3>
                      <div className="flex flex-wrap gap-3">
                        {study.timeline.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/30 border border-border/30">
                            <span className="text-xs font-mono text-primary">{item.day}</span>
                            <ChevronRight className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{item.milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div>
                      <h3 className="font-display font-bold text-lg mb-4">Mission Results</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {study.results.map((result, i) => (
                          <div key={i} className="text-center p-4 rounded-xl bg-secondary/20">
                            <p className="text-2xl font-display font-bold text-primary">{result.metric}</p>
                            <p className="text-xs text-muted-foreground mt-1">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                      "{study.testimonial}"
                    </blockquote>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Ready to Be Our Next <span className="text-gradient-gold">Success Story</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Every mission starts with a conversation. Let's discuss how we can transform 
              your search visibility and drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-audit" className="gap-2">
                  Get Your Free SEO Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;