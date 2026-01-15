import { motion } from "framer-motion";
import astronautImage from "@/assets/astronaut-daisies.jpg";

const FunSection = () => {
  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-center max-w-4xl mx-auto">
          {/* Left side - Bold typography */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              SEO, because shouting "I have a great website!" into the void doesn't work.
            </h2>
            <div className="text-base md:text-lg font-semibold tracking-wide">
              <span className="text-muted-foreground">STOP </span>
              <span className="text-primary">YELLING.</span>
              <span className="text-muted-foreground"> START </span>
              <span className="text-foreground">RANKING.</span>
            </div>
          </motion.div>

          {/* Right side - Astronaut image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden max-w-xs mx-auto lg:ml-auto">
              <img
                src={astronautImage}
                alt="Astronaut relaxing in a field of daisies - what it feels like to be our client"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2">
                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-md px-3 py-1.5 text-center">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    What it feels like to be our client
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FunSection;
