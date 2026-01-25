import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import astronautImage from "@/assets/astronaut-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="badge-outline inline-block mb-6">
              SEO That's Out of This World
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6">
              Your
              <br />
              <span className="text-gradient-gold">Outsourced</span>
              <br />
              SEO
              <br />
              Department
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              An SEO partner that shows you everything we do, delivers
              <br className="hidden sm:block" />
              {" "}results fast, and costs 90% less—no excuses, no BS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="gap-2" asChild>
                <a href="/#contact">
                  Let's Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+16157726641">Let's Talk</a>
              </Button>
            </div>
          </motion.div>

          {/* Astronaut Image - LCP optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={astronautImage}
                alt="Astronaut floating in space with daisies - Your Best SEO"
                width={512}
                height={512}
                fetchPriority="high"
                decoding="async"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl animate-float rounded-2xl"
              />
              {/* Glow behind astronaut */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 scale-75" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
