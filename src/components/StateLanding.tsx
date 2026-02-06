import { motion } from "framer-motion";
import { Trophy, Check, ArrowRight, MapPin, TrendingUp, Target, Users, BarChart3, Search, Globe, BookOpen, HelpCircle, Building2, Briefcase, AlertCircle, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SearchIntentCategory {
  intent: string;
  terms: string[];
}

interface StateData {
  slug: string;
  name: string;
  heroTitle: string;
  heroDescription: string;
  cities: string[];
  keywords?: string[]; // Legacy support
  searchIntents?: SearchIntentCategory[]; // New intent-based structure
  stats: { value: string; label: string }[];
  services: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  industries: string[];
  // New optional fields for expanded content
  marketOverview?: string;
  challenges?: string[];
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
const getDefaultMarketOverview = (name: string, industries: string[]) => 
  `${name} represents a diverse and growing market for businesses seeking to establish strong search visibility. With major metropolitan areas and thriving local economies, ${name} offers tremendous opportunities for businesses that can capture organic search traffic effectively. The state's diverse population, robust economy featuring ${industries.slice(0, 3).join(", ")}, and growing digital adoption make it an ideal market for businesses investing in SEO. Our data-driven approach ensures your investment delivers measurable returns through increased visibility, qualified traffic, and higher conversion rates.`;

const getDefaultChallenges = (name: string) => [
  `Intense competition from established ${name} businesses with strong online presence`,
  `Standing out in Google Maps and local pack results across multiple cities`,
  `Building consistent NAP citations across hundreds of directories statewide`,
  `Targeting diverse local keywords across different ${name} markets`,
  `Keeping up with Google's frequent algorithm updates affecting local rankings`,
  `Creating location-specific content that resonates with ${name} audiences`
];

const getDefaultSuccessFactors = (name: string) => [
  `Comprehensive keyword strategy targeting both statewide and city-specific terms`,
  `Optimized Google Business Profiles for each ${name} location`,
  `Consistent NAP across 50+ directories for every business location`,
  `Regular stream of positive reviews from ${name} customers`,
  `Mobile-optimized website with fast load times across all devices`,
  `Local content targeting specific ${name} cities and regions`,
  `Quality backlinks from ${name} publications and industry sources`
];

const getDefaultWhyChooseUs = (name: string) =>
  `Our team has extensive experience serving businesses across ${name}. We understand the unique characteristics of ${name} consumers, the competitive dynamics across different markets, and what it takes to achieve top rankings in this diverse state. We've helped businesses throughout ${name} achieve page-one rankings and significant ROI from their SEO investment. Our transparent reporting, proven strategies, and dedicated account management ensure you always know exactly how your investment is performing.`;

const StateLanding = ({ data }: { data: StateData }) => {
  const SITE_URL = "https://yourbestseo.com";
  
  // Use provided content or defaults
  const marketOverview = data.marketOverview || getDefaultMarketOverview(data.name, data.industries);
  const challenges = data.challenges || getDefaultChallenges(data.name);
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
    "@id": `${SITE_URL}/states/${data.slug}/#localbusiness`,
    name: `Your Best SEO - ${data.name} SEO Services`,
    description: data.heroDescription,
    url: `${SITE_URL}/states/${data.slug}`,
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
      "@type": "State",
      name: data.name,
    },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };

  // Generate Breadcrumb schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: `${data.name} SEO`, item: `${SITE_URL}/states/${data.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${data.name} SEO Services - Local SEO Agency`}
        description={data.heroDescription.substring(0, 155)}
        canonical={`/states/${data.slug}`}
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
                    <a href="tel:+16157726641">Schedule a Call</a>
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

        {/* Market Overview Section - NEW */}
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
                  {data.name} SEO Market Overview
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {marketOverview}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're an established {data.name} business looking to strengthen your online presence or a growing venture seeking to build visibility across the state, SEO is the most cost-effective way to connect with customers actively searching for your products and services. Our team understands the nuances of the {data.name} market and creates customized strategies that deliver results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cities We Serve */}
        <section className="py-16 relative bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Cities We Serve in {data.name}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our SEO services extend across all major {data.name} markets. We have experience helping businesses succeed in each of these communities.
              </p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3">
              {data.cities.map((city, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative">
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

        {/* Industries Section - Enhanced */}
        <section className="py-20 relative bg-secondary/20">
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
                We've helped businesses across every major industry achieve top rankings throughout {data.name}. Our specialized approach adapts to your unique market needs and competitive landscape.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
            >
              {data.industries.map((industry, index) => (
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
        <section className="py-20 relative">
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
                {data.name} businesses face unique SEO challenges that require specialized knowledge and proven strategies to overcome. Here are the most common obstacles we help our clients navigate:
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
                  What It Takes to Rank in {data.name}
                </h2>
              </div>
              <p className="text-muted-foreground mb-8">
                Ranking across {data.name}'s competitive search landscape requires a comprehensive approach. These are the key factors that determine whether your business appears on page one:
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
                <h3 className="font-display text-xl font-bold mb-4">Statewide Coverage</h3>
                <p className="text-muted-foreground">
                  From major metros to smaller markets across {data.name}, we optimize for local and statewide visibility. Our strategies adapt to each unique market.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="p-8 rounded-2xl card-gradient border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Proven Results</h3>
                <p className="text-muted-foreground">
                  Our {data.name} clients see an average 200%+ increase in organic traffic within 90 days. We deliver measurable ROI, not vanity metrics.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="p-8 rounded-2xl card-gradient border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Industry Expertise</h3>
                <p className="text-muted-foreground">
                  Deep experience in {data.name}'s key industries: {data.industries.slice(0, 3).join(", ")}, and more. We understand your market.
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
                Comprehensive search engine optimization solutions tailored for {data.name} businesses looking to dominate local and organic search results.
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

        {/* Process Section - NEW */}
        <section className="py-20 relative">
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
                { icon: Search, title: "SEO Audit", desc: "Comprehensive analysis of your current rankings, technical health, and competitive opportunities across " + data.name },
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
        <section className="py-20 relative bg-secondary/20">
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
                Have questions about SEO for your {data.name} business? Here are answers to the most common questions we receive from business owners across the state.
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

        {/* Search Intent Section */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                How {data.name} Businesses Find SEO Help
              </h3>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                We understand where you are in your search—and we're ready to help at every stage of your SEO journey.
              </p>
            </motion.div>

            {data.searchIntents ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                {data.searchIntents.map((category, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-5 rounded-xl bg-secondary/50 border border-border/50"
                  >
                    <h4 className="text-sm font-semibold text-primary mb-3 italic">
                      "{category.intent}"
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {category.terms.map((term, termIndex) => (
                        <span
                          key={termIndex}
                          className="px-2.5 py-1 rounded-full bg-background border border-border/50 text-xs hover:border-primary/50 transition-colors"
                        >
                          {term}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : data.keywords ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"
              >
                {data.keywords.map((keyword, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    className="px-3 py-1.5 rounded-full bg-secondary border border-border/50 text-xs font-medium hover:border-primary/50 transition-colors"
                  >
                    {keyword}
                  </motion.span>
                ))}
              </motion.div>
            ) : null}
          </div>
        </section>

        {/* Learn More Section - Cross-linking */}
        <section className="py-16 relative bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Learn More About SEO
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Explore our resources to understand how SEO can help your {data.name} business grow and dominate search results.
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
                  <Link to="/questions/what-is-seo" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4" /> What is SEO?
                  </Link>
                  <Link to="/questions/how-long-does-seo-take" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4" /> How Long Does SEO Take?
                  </Link>
                  <Link to="/questions/how-much-does-seo-cost" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4" /> How Much Does SEO Cost?
                  </Link>
                  <Link to="/questions/what-is-local-seo" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4" /> What is Local SEO?
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
                  <Link to="/glossary/search-engine-optimization" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    Search Engine Optimization
                  </Link>
                  <Link to="/glossary/organic-traffic" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    Organic Traffic
                  </Link>
                  <Link to="/glossary/local-seo" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    Local SEO
                  </Link>
                  <Link to="/glossary/keyword-research" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    Keyword Research
                  </Link>
                  <Link to="/glossary/backlinks" className="px-3 py-1.5 text-xs rounded-full bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    Backlinks
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
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
                  Get a free SEO audit and discover how we can help your {data.name} business rank higher, drive more organic traffic, and generate more leads. Our team is ready to show you exactly what's possible.
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

export default StateLanding;
