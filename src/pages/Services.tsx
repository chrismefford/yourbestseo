import { motion } from "framer-motion";
import { Trophy, Check, ArrowRight, FileText, Link2, MapPin, Rocket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO, generateBreadcrumbSchema } from "@/components/SEO";

const includedServices = [
  { service: "Keyword Research & Clustering", notes: "100+ keyword maps per topic" },
  { service: "SEO Content Creation", notes: "AI-drafted, human-edited, client-ready" },
  { service: "Link Building (Manual Outreach)", notes: "Quality > Quantity; always white-hat" },
  { service: "Local SEO", notes: "GMB optimization, citations, map rankings" },
  { service: "Technical SEO Audits", notes: "Fixes + prioritization guidance" },
  { service: "SEO Strategy", notes: "Live dashboards + quarterly roadmaps" },
  { service: "Competitor Analysis", notes: "Keyword + backlink gap mapping" },
  { service: "Internal Linking Optimization", notes: "Included in all content work" },
  { service: "Conversion Optimization", notes: "Light CRO suggestions on key pages" },
  { service: "Reporting & KPIs", notes: "Branded dashboards or PDFs, your choice" },
];

const stateMissions = [
  { state: "California", cities: "San Francisco, Los Angeles, San Diego", stat: "+312%", statLabel: "SaaS sessions", description: "Bay Area platform after 90 days" },
  { state: "Oregon", cities: "Portland, Eugene, Bend", stat: "+188%", statLabel: "B2B traffic", description: "Portland client in 4 months" },
  { state: "Washington", cities: "Seattle, Pacific Northwest", stat: "+244%", statLabel: "Enterprise SQLs", description: "Seattle client in 6 months" },
  { state: "Hawaii", cities: "Island-wide coverage", stat: "+168%", statLabel: "Resort bookings", description: "YOY growth" },
  { state: "Alaska", cities: "Anchorage, Fairbanks, Juneau", stat: "+129%", statLabel: "Industrial leads", description: "Anchorage operator" },
  { state: "Arizona", cities: "Phoenix, Scottsdale, Tucson", stat: "+204%", statLabel: "Healthcare leads", description: "6-month span" },
  { state: "New Mexico", cities: "Albuquerque, Santa Fe, Los Alamos", stat: "+171%", statLabel: "Gov pipeline", description: "12-month span" },
  { state: "Colorado", cities: "Denver, Boulder, mountain towns", stat: "+248%", statLabel: "Outdoor revenue", description: "DTC brand" },
  { state: "Utah", cities: "Salt Lake City, Provo, Lehi", stat: "3.8x", statLabel: "SaaS SQLs", description: "6-month sprint" },
  { state: "Nevada", cities: "Las Vegas, Reno, Tahoe", stat: "3.2x", statLabel: "Hospitality revenue", description: "Strip resort" },
  { state: "Idaho", cities: "Boise, Coeur d'Alene, Twin Falls", stat: "+196%", statLabel: "Agritech SQLs", description: "8-month run" },
  { state: "Montana", cities: "Bozeman, Missoula, Big Sky", stat: "2.9x", statLabel: "Luxury bookings", description: "Ranch network" },
  { state: "Wyoming", cities: "Jackson Hole, Cheyenne", stat: "2.7x", statLabel: "Luxury revenue", description: "Jackson Hole collective" },
];

const serviceSpotlights = [
  {
    icon: FileText,
    tagline: "10x more content. 10x more keywords. 1/10 the cost.",
    title: "AI-Powered SEO Content Engine",
    description: "Forget paying $500 for a single 500-word blog post. We give you 10+ full-length, SEO-optimized, human-reviewed articles clustered around your client's core topics—for the same price.",
    features: "Advanced keyword clustering, AI writing tools, and human editorial to build authority fast.",
    cta: "See Content System →",
  },
  {
    icon: Link2,
    tagline: "Manual outreach. Real placements. No spam.",
    title: "White-Labeled Link Building",
    description: "Our link building process is manual, ethical, and customized for each campaign. All outreach and writing is branded under your agency, and placements are high-authority and niche-relevant.",
    features: "Scalable link building • Local / geo-targeted SEO • B2B backlink campaigns",
    cta: "See Link Packages →",
  },
  {
    icon: MapPin,
    tagline: "Own the map pack. Everywhere.",
    title: "Local SEO",
    description: "We optimize Google Business Profiles, build local citations, and publish geo-specific content that drives visibility for brick-and-mortar clients.",
    features: "Local review strategy • Spam fighting & competitor flagging",
    cta: "Explore Local SEO →",
  },
  {
    icon: Rocket,
    tagline: "Hands-off for you. Hands-on for us.",
    title: "Fully Managed SEO Campaigns",
    description: "If you want the full package—strategy, execution, tracking—we'll build and run an end-to-end campaign under your agency brand. Great for retainers and monthly reporting clients.",
    features: "Strategy + production + reporting pods aligned to your brand.",
    cta: "Start a Campaign →",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  const servicesSchema = {
    "@type": "Service",
    name: "White-Label SEO Services",
    description: "Full-stack, AI-powered SEO campaigns designed to dominate search results—faster, cheaper, and at scale.",
    provider: {
      "@type": "Organization",
      name: "Your Best SEO"
    },
    serviceType: "SEO Services",
    areaServed: {
      "@type": "Country",
      name: "United States"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="SEO Services - Full-Stack AI-Powered SEO"
        description="Award-winning SEO services built to get you ranked. AI-powered content, white-hat link building, local SEO, and technical audits at 1/10th the cost."
        canonical="/services"
        schema={[breadcrumbSchema, servicesSchema]}
      />
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
              <span className="badge-outline inline-block mb-6">Award-winning program</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Award-Winning SEO, Built to Get You Ranked—
                <span className="text-gradient-gold">Not to Sell You More Articles.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                We're not here to nickel-and-dime you with add-ons and 500-word blog posts. We're the agency that delivers full-stack, AI-powered SEO campaigns designed to dominate search results—faster, cheaper, and at scale.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary mb-8">
                <Trophy className="w-5 h-5" />
                <span className="font-medium">2025 Finalist – North America's Top 5 SEO Agencies (Search Engine Land Awards)</span>
              </div>
              <Button size="lg" className="group" asChild>
                <a href="/#contact">
                  Book a Meeting
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-6 h-6" />
                  <span className="text-sm font-medium tracking-widest uppercase opacity-80">Search Engine Land Awards</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Recognized Among the Top 5 SEO Agencies in North America
                </h2>
                <p className="text-lg opacity-90">
                  Out of thousands of submissions, our team was named a 2025 Search Engine Land Awards Finalist—considered the Oscars of SEO—for our results-driven, AI-enhanced SEO work. Our nomination: "Fastest Organic Growth for Agency Clients".
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
                🔍 What we actually do
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                We're a Full-Service SEO Engine—But We Don't Bill Like One
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Most agencies break SEO into 10+ micro deliverables to charge you more. We break it down to one goal: rankings. Here's everything we do, included in any campaign level that needs it:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="rounded-2xl border border-border/50 overflow-hidden card-gradient">
                <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/50 border-b border-border/50 font-semibold text-sm">
                  <span>Included SEO Services</span>
                  <span>Notes</span>
                  <span className="text-center">Included</span>
                </div>
                {includedServices.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 p-4 border-b border-border/30 last:border-b-0 hover:bg-secondary/20 transition-colors">
                    <span className="font-medium">{item.service}</span>
                    <span className="text-muted-foreground text-sm">{item.notes}</span>
                    <div className="flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-6 font-medium">
                If it helps your clients rank, it's included. Period.
              </p>
            </motion.div>
          </div>
        </section>

        {/* State Missions Section */}
        <section className="py-20 relative bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
                🌌 Western state missions
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Local SEO That Dominates Every Market
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We cloned our flagship service template for every western U.S. market so your agency can launch geo-specific pitches in minutes.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {stateMissions.map((mission, index) => (
                <a
                  key={index}
                  href={`/states/${mission.state.toLowerCase().replace(/\s+/g, '-')}-seo`}
                  className="block"
                >
                  <motion.div
                    variants={itemVariants}
                    className="p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer h-full"
                  >
                    <h3 className="font-display text-lg font-bold mb-1">{mission.state} SEO</h3>
                    <p className="text-muted-foreground text-sm mb-4">{mission.cities}</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-primary">{mission.stat}</span>
                      <span className="text-sm text-muted-foreground">{mission.statLabel}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{mission.description}</p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      View mission <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Spotlights Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
                ⚙️ Service spotlights
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Send prospects straight into the right program.
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {serviceSpotlights.map((spotlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <spotlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{spotlight.tagline}</p>
                  <h3 className="font-display text-xl font-bold mb-3">{spotlight.title}</h3>
                  <p className="text-muted-foreground mb-4">{spotlight.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">{spotlight.features}</p>
                  <span className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all">
                    {spotlight.cta} <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 relative bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
                💥 Philosophy
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                You're Not Paying for Words. You're Paying for Wins.
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                We're not here to count deliverables or stretch out timelines. We're here to get your clients ranked as quickly and efficiently as possible—using the most advanced tools and strategies in SEO today.
              </p>
              <p className="text-lg font-medium text-foreground">
                We'll never charge you more for the thing that works. That's how agencies win.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
                📞 Let's Do This
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Want to See What a Real SEO Engine Looks Like?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let us show you how AI, strategy, and award-winning SEO experience come together to create massive ranking gains—without massive retainers.
              </p>
              <Button size="lg" className="group" asChild>
                <a href="/#contact">
                  Book My Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
