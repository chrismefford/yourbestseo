import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, Target, TrendingUp, Clock, Shield, Star, FileText, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  priceId: string;
  icon: React.ComponentType<{ className?: string }>;
  heroGradient: string;
  benefits: string[];
  deliverables: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  stats: { value: string; label: string }[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServiceLanding = ({ data }: { data: ServiceData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      const { data: response, error } = await supabase.functions.invoke("create-payment", {
        body: { 
          priceId: data.priceId, 
          productName: data.name,
          email: email || undefined
        },
      });

      if (error) throw error;
      if (response?.url) {
        window.open(response.url, "_blank");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Failed to initiate checkout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const IconComponent = data.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className={`pt-32 pb-20 relative overflow-hidden`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${data.heroGradient} opacity-10`} />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <span className="badge-outline">À La Carte Service</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  {data.name}
                </h1>
                
                <p className="text-xl text-primary font-semibold mb-4">{data.tagline}</p>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  {data.description}
                </p>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold text-foreground">${data.price}</span>
                  <span className="text-muted-foreground">one-time</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="group text-lg px-8"
                    onClick={handlePurchase}
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Purchase Now"}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/#contact">Talk to an Expert</a>
                  </Button>
                </div>
                <div className="mt-4">
                  <Link to="/pricing#a-la-carte" className="text-sm text-primary hover:underline">
                    View All À La Carte Services →
                  </Link>
                </div>

                <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>24-48hr Delivery</span>
                  </div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card border border-border rounded-3xl p-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  {data.stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-secondary/50">
                      <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <span className="text-sm text-muted-foreground ml-2">5.0 from 100+ clients</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "This service exceeded our expectations. Delivered on time with incredible attention to detail."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why This Service <span className="text-gradient-gold">Delivers Results</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {data.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What's <span className="text-gradient-gold">Included</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every deliverable is designed to drive measurable results for your business.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
            >
              {data.deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-gradient-gold">Process</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From purchase to delivery, here's exactly what to expect.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              {data.process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    {index < data.process.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked <span className="text-gradient-gold">Questions</span>
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
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <IconComponent className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Purchase now and we'll have your deliverables ready within 24-48 hours.
              </p>
              
              <div className="flex items-baseline justify-center gap-2 mb-8">
                <span className="text-5xl font-bold text-foreground">${data.price}</span>
                <span className="text-muted-foreground">one-time</span>
              </div>

              <Button 
                size="lg" 
                className="group text-lg px-12 py-6"
                onClick={handlePurchase}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Purchase Now"}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-muted-foreground mt-6">
                100% satisfaction guaranteed • Secure payment via Stripe
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceLanding;
