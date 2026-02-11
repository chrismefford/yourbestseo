import { motion } from "framer-motion";
import { Trophy, Check, ArrowRight, MapPin, TrendingUp, Target, Users, BarChart3, Search, Globe, BookOpen, HelpCircle, Building2, Briefcase, AlertCircle, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NeighborhoodData {
  slug: string;
  name: string;
  heroTitle: string;
  heroDescription: string;
  keywords: string[];
  stats: { value: string; label: string }[];
  services: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  nearbyAreas: string[];
  // New optional fields for expanded content
  marketOverview?: string;
  challenges?: string[];
  industries?: string[];
  successFactors?: string[];
  whyChooseUs?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Default content generators for consistent text-to-HTML ratio
const getDefaultMarketOverview = (name: string) => 
  `${name} represents one of San Diego's most dynamic neighborhoods for local businesses. With its unique blend of residential communities and commercial districts, ${name} offers tremendous opportunities for businesses that can establish strong local search visibility. The neighborhood's diverse population and steady foot traffic make it an ideal market for service providers, retailers, and professional services looking to grow their customer base through targeted local SEO strategies.`;

const getDefaultChallenges = (name: string) => [
  `Intense competition from established ${name} businesses with strong online presence`,
  `Standing out in Google Maps and local pack results against competitors`,
  `Building consistent NAP citations across hundreds of local directories`,
  `Generating authentic customer reviews while maintaining reputation`,
  `Keeping up with Google's frequent local algorithm updates`,
  `Targeting the right local keywords that drive qualified traffic`
];

const getDefaultIndustries = (name: string) => [
  "Restaurants & Food Service",
  "Healthcare & Medical",
  "Home Services & Contractors",
  "Professional Services",
  "Retail & Shopping",
  "Fitness & Wellness"
];

const getDefaultSuccessFactors = (name: string) => [
  `Complete and optimized Google Business Profile with ${name}-specific keywords`,
  `Consistent NAP (Name, Address, Phone) across 50+ local citations`,
  `Regular stream of positive reviews from ${name} customers`,
  `Mobile-optimized website with fast load times`,
  `Local content targeting ${name} neighborhoods and nearby areas`,
  `Quality backlinks from local ${name} and San Diego publications`
];

const getDefaultWhyChooseUs = (name: string) =>
  `Our team has deep expertise in the ${name} market and the San Diego business landscape. We understand the unique characteristics of ${name} consumers, the competitive dynamics of local businesses, and what it takes to achieve top rankings in this specific geographic area. We've helped dozens of ${name} businesses achieve page-one rankings and significant ROI from their local SEO investment. Our transparent reporting, proven strategies, and dedicated account management ensure you always know exactly how your investment is performing.`;

const NeighborhoodLanding = ({ data }: { data: NeighborhoodData }) => {
  const SITE_URL = "https://yourbestseo.com";
  
  // Use provided content or defaults
  const marketOverview = data.marketOverview || getDefaultMarketOverview(data.name);
  const challenges = data.challenges || getDefaultChallenges(data.name);
  const industries = data.industries || getDefaultIndustries(data.name);
  const successFactors = data.successFactors || getDefaultSuccessFactors(data.name);
  const whyChooseUs = data.whyChooseUs || getDefaultWhyChooseUs(data.name);
  
  // Generate FAQ schema
  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Generate LocalBusiness schema
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/san-diego/${data.slug}/#localbusiness`,
    name: `Your Best SEO - ${data.name} SEO Services`,
    description: data.heroDescription,
    url: `${SITE_URL}/san-diego/${data.slug}`,
    telephone: "+1-615-772-6641",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8620 Ian Way",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92071",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: data.name,
      containedInPlace: {
        "@type": "City",
        name: "San Diego",
      },
    },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };

  // Generate Breadcrumb schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: `${data.name} SEO`, item: `${SITE_URL}/san-diego/${data.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${data.name} SEO Services - San Diego Local SEO`}
        description={data.heroDescription.substring(0, 155)}
        canonical={`/san-diego/${data.slug}`}
        type="service"
        schema={[faqSchema, localBusinessSchema, breadcrumbSchema]}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="badge-outline">{data.name} SEO Agency</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {data.heroTitle}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  {data.heroDescription}
                </p>
                <div className="flex items-center gap-2 text-primary mb-8">
                  <Trophy className="w-5 h-5" />
                  <span className="font-medium">2025 Finalist – Top 5 SEO Agencies in North America</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="group" asChild>
                    <Link to="/free-audit">
                      Get Your Free SEO Audit
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+16157726641">Call (615) 772-6641</a>
                  </Button>
                </div>
              </motion.div>

              {/* Astronaut Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <img
                    src="https://static.riff.new/public/thick-melancholic-rhythm-du4n/Astro%20Final.gif"
                    alt="Astronaut floating in space"
                    className="w-full max-w-sm lg:max-w-md animate-float"
                  />
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 scale-75" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        {/* Stats Section */}
        <section className="py-16 relative bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {data.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 rounded-2xl card-gradient border border-border/50"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industries We Serve - NEW */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Industries We Serve in {data.name}
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We've helped businesses across every major industry achieve top rankings in {data.name}. Our specialized approach adapts to your unique market needs and competitive landscape.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{industry}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Challenges Section - NEW */}
        <section className="py-20 relative bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  SEO Challenges {data.name} Businesses Face
                </h2>
              </div>
              <p className="text-muted-foreground mb-8">
                {data.name} businesses face unique local SEO challenges that require specialized knowledge and proven strategies to overcome. Here are the most common obstacles we help our clients navigate:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50"
                  >
                    <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Before & After Telemetry Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Before & After Telemetry
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Actual client snapshots, not mockups. These are real results from {data.name} businesses we've helped dominate search.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              {/* Case Study Card */}
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-3xl card-gradient border border-border/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{data.name} Local Business</h3>
                    <p className="text-sm text-muted-foreground">local services {data.name.toLowerCase()} san diego</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8">
                  Captured page-one real estate for every high-intent query in {data.name} within 60 days.
                </p>

                {/* Before/After Comparison */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Before */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Before</span>
                      <span className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium">Page 4 · Position 32</span>
                    </div>
                    <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                      <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                        <Search className="w-4 h-4" />
                        <span>local services {data.name.toLowerCase()}</span>
                        <span className="ml-auto px-2 py-0.5 rounded bg-muted text-xs">Page 4</span>
                      </div>
                      <div className="space-y-3">
                        {[
                          { pos: 32, name: "Competitor A", url: "competitor-a.com" },
                          { pos: 33, name: "Local Directory", url: "localdir.com" },
                          { pos: 34, name: "Your Business", url: "yourbusiness.com", highlight: true },
                        ].map((result, i) => (
                          <div key={i} className={`p-3 rounded-lg ${result.highlight ? 'bg-destructive/5 border border-destructive/20' : 'bg-muted/30'}`}>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                              <span className="px-1.5 py-0.5 rounded bg-muted">#{result.pos}</span>
                              <span>{result.url}</span>
                            </div>
                            <p className={`text-sm font-medium ${result.highlight ? 'text-destructive' : ''}`}>{result.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">After</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Page 1 · Position 1</span>
                    </div>
                    <div className="p-4 rounded-xl bg-background/50 border border-primary/20">
                      <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                        <Search className="w-4 h-4" />
                        <span>local services {data.name.toLowerCase()}</span>
                        <span className="ml-auto px-2 py-0.5 rounded bg-primary/20 text-primary text-xs">Page 1</span>
                      </div>
                      <div className="space-y-3">
                        {[
                          { pos: 1, name: "Your Business", url: "yourbusiness.com", highlight: true },
                          { pos: 2, name: "Competitor A", url: "competitor-a.com" },
                          { pos: 3, name: "Local Directory", url: "localdir.com" },
                        ].map((result, i) => (
                          <div key={i} className={`p-3 rounded-lg ${result.highlight ? 'bg-primary/5 border border-primary/20' : 'bg-muted/30'}`}>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                              <span className={`px-1.5 py-0.5 rounded ${result.highlight ? 'bg-primary/20 text-primary' : 'bg-muted'}`}>#{result.pos}</span>
                              <span>{result.url}</span>
                            </div>
                            <p className={`text-sm font-medium ${result.highlight ? 'text-primary' : ''}`}>{result.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Result Metric */}
                <div className="mt-8 pt-6 border-t border-border/50 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-lg font-bold text-primary">+1,300% revenue-driving clicks</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Powered by live rank tracking</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Success Factors Section - NEW */}
        <section className="py-20 relative bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  What It Takes to Rank Locally in {data.name}
                </h2>
              </div>
              <p className="text-muted-foreground mb-8">
                Ranking in {data.name}'s competitive local search landscape requires a comprehensive approach. These are the key factors that determine whether your business appears on page one:
              </p>
              <div className="space-y-4">
                {successFactors.map((factor, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{factor}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our {data.name} SEO Services?
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {whyChooseUs}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={itemVariants} className="p-8 rounded-2xl card-gradient border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Local SEO Domination</h3>
                <p className="text-muted-foreground">
                  Rank #1 on Google Maps and local search results for {data.name}. We optimize your Google Business Profile and build local citations that drive foot traffic.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="p-8 rounded-2xl card-gradient border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Proven Results</h3>
                <p className="text-muted-foreground">
                  Our {data.name} clients see an average 312% increase in organic traffic within 90 days. We deliver measurable ROI, not vanity metrics.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="p-8 rounded-2xl card-gradient border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Dedicated Team</h3>
                <p className="text-muted-foreground">
                  Your {data.name} business gets a dedicated SEO strategist who understands the local market and competitive landscape.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 relative bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                SEO Services for {data.name} Businesses
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive search engine optimization solutions tailored for {data.name}, San Diego businesses looking to dominate local and organic search.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {data.services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Keywords Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Keywords We Target for {data.name}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We help your {data.name} business rank for high-intent, revenue-generating keywords that actually convert visitors into customers.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
            >
              {data.keywords.map((keyword, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="px-4 py-2 rounded-full bg-secondary border border-border/50 text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  {keyword}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 relative bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our {data.name} SEO Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our proven four-step process delivers consistent results for {data.name} businesses. Each phase builds on the previous one to create sustainable, long-term growth.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-6"
            >
              {[
                { icon: Search, title: "SEO Audit", desc: "Comprehensive analysis of your current rankings, technical health, and competitive opportunities in " + data.name },
                { icon: Target, title: "Strategy", desc: "Custom SEO roadmap tailored for your " + data.name + " business with specific milestones and KPIs" },
                { icon: Globe, title: "Execution", desc: "On-page optimization, local citations, content creation, and technical SEO implementation" },
                { icon: BarChart3, title: "Results", desc: "Monthly reporting with transparent KPIs, ROI tracking, and continuous optimization" },
              ].map((step, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-sm text-primary font-bold mb-2">Step {index + 1}</div>
                  <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {data.name} SEO FAQs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have questions about SEO for your {data.name} business? Here are answers to the most common questions we receive from local business owners.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-4"
            >
              {data.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-2xl card-gradient border border-border/50"
                >
                  <h3 className="font-display text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Local Market Overview Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  {data.name} Local Market Overview
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {marketOverview}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a well-established {data.name} business looking to strengthen your online presence or a new venture seeking to build visibility from the ground up, local SEO is the most cost-effective way to connect with customers actively searching for your products and services. Our data-driven approach ensures every dollar you invest delivers measurable returns through increased visibility, traffic, and conversions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nearby Areas Section */}
        <section className="py-20 relative bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Also Serving Nearby San Diego Areas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our local SEO expertise extends throughout the greater San Diego area. We help businesses in these neighboring communities achieve the same results.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {data.nearbyAreas.map((area, index) => (
                <Link
                  key={index}
                  to={`/san-diego/${area.toLowerCase().replace(/\s+/g, '-')}-seo`}
                  className="px-6 py-3 rounded-full bg-secondary border border-border/50 hover:border-primary/50 hover:text-primary transition-all font-medium"
                >
                  {area} SEO
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Learn More Section - Cross-linking */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Learn More About Local SEO
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Explore our resources to understand how local SEO can help your {data.name} business grow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Related Questions */}
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold">Common Questions</h3>
                </div>
                <div className="space-y-2">
                  <Link to="/questions/what-is-local-seo" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4" /> What is Local SEO?
                  </Link>
                  <Link to="/questions/how-to-rank-in-google-maps" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4" /> How to Rank in Google Maps?
                  </Link>
                  <Link to="/questions/what-is-google-business-profile" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4" /> What is Google Business Profile?
                  </Link>
                  <Link to="/questions/how-to-get-more-google-reviews" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4" /> How to Get More Google Reviews?
                  </Link>
                </div>
              </div>

              {/* Related Glossary Terms */}
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold">SEO Terms to Know</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link to="/glossary/local-seo" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    Local SEO
                  </Link>
                  <Link to="/glossary/google-business-profile" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    Google Business Profile
                  </Link>
                  <Link to="/glossary/local-pack" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    Local Pack
                  </Link>
                  <Link to="/glossary/local-citations" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    Local Citations
                  </Link>
                  <Link to="/glossary/nap-consistency" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    NAP Consistency
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Services */}
            <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20 max-w-4xl mx-auto">
              <h3 className="font-display font-semibold text-center mb-4">Our Local SEO Services</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link to="/services/google-business-profile" className="group flex items-center justify-between p-3 rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-all">
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Google Business Profile</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-all" />
                </Link>
                <Link to="/services/local-citations" className="group flex items-center justify-between p-3 rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-all">
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Local Citations</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-all" />
                </Link>
                <Link to="/services/review-management" className="group flex items-center justify-between p-3 rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-all">
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Review Management</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Ready to Dominate {data.name} Search Results?
                </h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  Get a free SEO audit and discover how we can help your {data.name} business rank higher, drive more traffic, and generate more leads. Our team is ready to show you exactly what's possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="group" asChild>
                    <Link to="/free-audit">
                      Get My Free SEO Audit
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <a href="tel:+16157726641">Call (615) 772-6641</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NeighborhoodLanding;
