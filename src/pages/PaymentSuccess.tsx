import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Rocket, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const productName = searchParams.get("product") || "SEO Service";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center"
            >
              <CheckCircle className="w-12 h-12 text-primary" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mission <span className="text-gradient-gold">Confirmed!</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4">
              Your purchase of <span className="text-primary font-semibold">{productName}</span> was successful.
            </p>

            <div className="bg-card border border-border rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Rocket className="w-6 h-6 text-primary" />
                <span className="text-lg font-semibold text-foreground">What Happens Next</span>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Confirmation Email</p>
                    <p className="text-sm text-muted-foreground">You'll receive a receipt and project details within 5 minutes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Kickoff Call</p>
                    <p className="text-sm text-muted-foreground">Our team will reach out within 24 hours to schedule your kickoff.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Delivery</p>
                    <p className="text-sm text-muted-foreground">Most services are delivered within 24-48 hours of kickoff.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/pricing">
                  <ArrowRight className="mr-2 w-4 h-4" />
                  View More Services
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:support@orbitseoglobal.com">
                  <Mail className="mr-2 w-4 h-4" />
                  Contact Support
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
