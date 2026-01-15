import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Search, BarChart3, Zap, FileText, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SEO, generateBreadcrumbSchema } from "@/components/SEO";

const auditIncludes = [
  { icon: Search, text: "Technical SEO health check" },
  { icon: BarChart3, text: "Keyword opportunity analysis" },
  { icon: Zap, text: "Page speed assessment" },
  { icon: FileText, text: "Content gap identification" },
  { icon: Shield, text: "Competitor comparison" },
  { icon: Clock, text: "Quick-win recommendations" },
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const FreeAudit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
    goals: "",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Free SEO Audit", url: "/free-audit" },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Audit request submitted!", {
      description: "We'll be in touch within 24 hours with your personalized audit.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Free SEO Audit Request Submitted"
          description="Thank you for requesting a free SEO audit. We'll deliver your personalized analysis within 24 hours."
          canonical="/free-audit"
          noIndex={true}
        />
        <Header />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                You're All Set!
              </h1>
              <p className="text-muted-foreground mb-8">
                We've received your audit request for <strong className="text-foreground">{formData.website}</strong>. 
                Our team is already diving in. Expect a detailed, personalized audit in your inbox within 24 hours.
              </p>
              <div className="p-6 rounded-2xl card-gradient border border-border/50 mb-8">
                <h3 className="font-display font-bold mb-4">What Happens Next?</h3>
                <ul className="text-left space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    Our team runs your site through enterprise SEO tools
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    We analyze the data and identify key opportunities
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    You receive a personalized video walkthrough via email
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">4.</span>
                    Optional: Schedule a call to discuss the findings
                  </li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <Link to="/">Return Home</Link>
              </Button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free SEO Audit - Get Your Personalized Analysis"
        description="Get a free, personalized SEO audit for your website. Discover technical issues, keyword opportunities, and quick wins. Delivered within 24 hours."
        canonical="/free-audit"
        schema={breadcrumbSchema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="badge-outline mb-6 inline-block">No Cost, No Obligation</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get Your Free <span className="text-gradient-gold">SEO Audit</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover exactly what's holding your site back and get a personalized roadmap 
              to better rankings. No sales pitch—just actionable insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8 rounded-2xl card-gradient border border-border/50">
                <h2 className="font-display text-2xl font-bold mb-6">
                  Request Your Audit
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium mb-2">
                      Website URL *
                    </label>
                    <Input
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      required
                      placeholder="https://yourwebsite.com"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number (optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium mb-2">
                      What are your main SEO goals? (optional)
                    </label>
                    <Textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      placeholder="e.g., Rank higher for local searches, get more leads, outrank competitors..."
                      className="bg-background/50 min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Get My Free Audit
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to receive your audit via email. 
                    No spam, unsubscribe anytime.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Right Column - What's Included */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6">
                What's Included
              </h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4 mb-8"
              >
                {auditIncludes.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/20 border border-border/30"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Trust Elements */}
              <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
                <h3 className="font-display font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Our Promise
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    100% free with no strings attached
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Personalized analysis (not an automated report)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Actionable recommendations you can use immediately
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Delivered within 24 hours
                  </li>
                </ul>
              </div>

              {/* Testimonial */}
              <blockquote className="mt-8 p-6 rounded-2xl card-gradient border border-border/50">
                <p className="text-muted-foreground italic mb-4">
                  "The free audit showed us exactly where we were losing traffic. 
                  We implemented their quick-wins and saw a 40% traffic increase in 30 days—before even becoming a client."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary text-sm">MK</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Mike Kennedy</p>
                    <p className="text-xs text-muted-foreground">Local Business Owner</p>
                  </div>
                </div>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-center mb-8">
            Common Questions About the Audit
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl card-gradient border border-border/50">
              <h3 className="font-bold mb-2">Is it really free?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, 100% free. No credit card, no obligation. We offer this because it often leads to great partnerships, but there's zero pressure.
              </p>
            </div>
            <div className="p-5 rounded-xl card-gradient border border-border/50">
              <h3 className="font-bold mb-2">How long does it take?</h3>
              <p className="text-sm text-muted-foreground">
                You'll receive your personalized audit within 24 hours of submission, delivered directly to your email.
              </p>
            </div>
            <div className="p-5 rounded-xl card-gradient border border-border/50">
              <h3 className="font-bold mb-2">What if I'm a competitor?</h3>
              <p className="text-sm text-muted-foreground">
                We don't audit competitors or agencies. This is for businesses genuinely looking to improve their SEO.
              </p>
            </div>
            <div className="p-5 rounded-xl card-gradient border border-border/50">
              <h3 className="font-bold mb-2">Will you try to sell me?</h3>
              <p className="text-sm text-muted-foreground">
                The audit stands alone. If you want to discuss working together, great. If not, you still get valuable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeAudit;