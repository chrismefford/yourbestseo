import { motion } from "framer-motion";
import { Trophy, Check, ArrowRight, MapPin, TrendingUp, Target, Users, BarChart3, Search, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface NeighborhoodData {
  name: string;
  heroTitle: string;
  heroDescription: string;
  keywords: string[];
  stats: { value: string; label: string }[];
  services: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  nearbyAreas: string[];
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

const NeighborhoodLanding = ({ data }: { data: NeighborhoodData }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="badge-outline">{data.name} SEO Agency</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {data.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {data.heroDescription}
              </p>
              <div className="flex items-center justify-center gap-2 text-primary mb-8">
                <Trophy className="w-5 h-5" />
                <span className="font-medium">2025 Finalist – Top 5 SEO Agencies in North America</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Get Your Free SEO Audit
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Call (619) SEO-RANK
                </Button>
              </div>
            </motion.div>
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

        {/* Why Choose Us Section */}
        <section className="py-20 relative bg-secondary/20">
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
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're the top-rated SEO company serving {data.name} businesses. Our local SEO experts understand the unique market dynamics of San Diego's {data.name} neighborhood.
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
        <section className="py-20 relative">
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
        <section className="py-20 relative bg-secondary/20">
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
                We help your {data.name} business rank for high-intent, revenue-generating keywords
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
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-6"
            >
              {[
                { icon: Search, title: "SEO Audit", desc: "Comprehensive analysis of your current rankings and opportunities" },
                { icon: Target, title: "Strategy", desc: "Custom SEO roadmap tailored for your " + data.name + " business" },
                { icon: Globe, title: "Execution", desc: "On-page, off-page, and technical SEO implementation" },
                { icon: BarChart3, title: "Results", desc: "Monthly reporting with transparent KPIs and ROI tracking" },
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

        {/* Nearby Areas Section */}
        <section className="py-20 relative">
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
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {data.nearbyAreas.map((area, index) => (
                <a
                  key={index}
                  href={`/san-diego/${area.toLowerCase().replace(/\s+/g, '-')}-seo`}
                  className="px-6 py-3 rounded-full bg-secondary border border-border/50 hover:border-primary/50 hover:text-primary transition-all font-medium"
                >
                  {area} SEO
                </a>
              ))}
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
                  Get a free SEO audit and discover how we can help your {data.name} business rank higher, drive more traffic, and generate more leads.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="group">
                    Get My Free SEO Audit
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Call (619) SEO-RANK
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
