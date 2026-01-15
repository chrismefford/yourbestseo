import { motion } from "framer-motion";
import { ArrowRight, Target, Rocket, Shield, Users, Award, Zap, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEO, generateWebPageSchema, generateBreadcrumbSchema } from "@/components/SEO";

const values = [
  {
    icon: Target,
    title: "Results-Obsessed",
    description: "We don't celebrate effort—we celebrate outcomes. Every strategy is measured against real business impact.",
  },
  {
    icon: Shield,
    title: "Radically Transparent",
    description: "No black boxes. You'll always know exactly what we're doing, why we're doing it, and how it's working.",
  },
  {
    icon: Zap,
    title: "Speed Matters",
    description: "SEO is a long game, but we move fast. Quick wins build momentum while we work toward lasting dominance.",
  },
  {
    icon: Heart,
    title: "Partner Mentality",
    description: "Your success is our success. We're invested in your growth like it's our own business on the line.",
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "10M+", label: "Organic Visits Generated" },
  { value: "98%", label: "Client Retention" },
  { value: "15+", label: "Years Experience" },
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

const About = () => {
  const pageSchema = generateWebPageSchema({
    name: "About Your Best SEO",
    description: "Learn about our mission to democratize SEO. 15+ years of experience, 500+ clients served, and 98% client retention.",
    url: "/about",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us - Our Mission & Team"
        description="We're on a mission to democratize SEO. 15+ years of experience, 500+ clients served, 10M+ organic visits generated, and 98% client retention rate."
        canonical="/about"
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
            <span className="badge-outline mb-6 inline-block">About Your Best SEO</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              We're on a Mission to <span className="text-gradient-gold">Democratize SEO</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Great SEO shouldn't be a luxury only enterprise companies can afford. 
              We bring agency-quality strategies to businesses of every size.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">It started with frustration.</strong> After years of watching 
                  talented businesses lose to mediocre competitors with bigger marketing budgets, 
                  we knew something had to change.
                </p>
                <p>
                  The SEO industry was broken. Big agencies charged premium prices for templated strategies. 
                  Small businesses were left with two options: pay tens of thousands monthly or stumble through 
                  SEO on their own.
                </p>
                <p>
                  <strong className="text-foreground">We built Your Best SEO to be different.</strong> Our approach 
                  combines the strategic depth of a top-tier agency with the personalized attention of a dedicated 
                  in-house team—all at prices that make sense for growing businesses.
                </p>
                <p>
                  Today, we've helped hundreds of businesses transform their search visibility. From local dentists 
                  to global HR platforms, our mission remains the same: deliver undeniable results that drive real 
                  business growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl card-gradient border border-border/50 text-center"
                >
                  <p className="text-4xl font-display font-bold text-gradient-gold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 rounded-2xl card-gradient border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To make world-class SEO accessible to every business willing to invest in their growth. 
                We believe the best businesses deserve to be found—not just the ones with the biggest budgets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 lg:p-10 rounded-2xl card-gradient border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where organic search is the great equalizer—where David can outrank Goliath 
                through strategy, execution, and expertise rather than outspending them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These aren't just words on a wall. They're the principles that guide every 
              strategy we build and every recommendation we make.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A small team of SEO specialists, content strategists, and data analysts 
              united by one goal: your success.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="p-6 rounded-2xl card-gradient border border-border/50 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-amber-600 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">CK</span>
              </div>
              <h3 className="font-display font-bold text-lg">Chris Knight</h3>
              <p className="text-sm text-primary mb-2">Founder & Lead Strategist</p>
              <p className="text-xs text-muted-foreground">
                15+ years turning search visibility into business growth
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-2xl card-gradient border border-border/50 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SM</span>
              </div>
              <h3 className="font-display font-bold text-lg">Sarah Mitchell</h3>
              <p className="text-sm text-primary mb-2">Content Director</p>
              <p className="text-xs text-muted-foreground">
                Former journalist turned SEO content specialist
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 rounded-2xl card-gradient border border-border/50 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JR</span>
              </div>
              <h3 className="font-display font-bold text-lg">James Rodriguez</h3>
              <p className="text-sm text-primary mb-2">Technical SEO Lead</p>
              <p className="text-xs text-muted-foreground">
                Engineering background meets search optimization
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Why Clients Choose Us
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Proven Track Record</strong>
                    <p className="text-sm text-muted-foreground">
                      Case studies with verifiable results. Real websites, real growth.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Dedicated Attention</strong>
                    <p className="text-sm text-muted-foreground">
                      You're not account #347. You get direct access to senior strategists.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Future-Ready Strategies</strong>
                    <p className="text-sm text-muted-foreground">
                      We optimize for AI search, voice search, and whatever comes next.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl card-gradient border border-border/50"
            >
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "Working with Your Best SEO transformed our business. In 6 months, 
                we went from invisible to dominating our local market. The ROI has 
                been incredible."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold text-primary">DR</span>
                </div>
                <div>
                  <p className="font-medium">Dr. Rachel Kim</p>
                  <p className="text-sm text-muted-foreground">Inspire Smiles SD</p>
                </div>
              </div>
            </motion.div>
          </div>
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
              Ready to <span className="text-gradient-gold">Get Started</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's talk about how we can help you dominate search and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/free-audit" className="gap-2">
                  Get Your Free SEO Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;