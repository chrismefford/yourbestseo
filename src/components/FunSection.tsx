import { motion } from "framer-motion";
import astronautImage from "@/assets/astronaut-daisies.jpg";

const FunSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Bold typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              SEO,<br />
              because<br />
              shouting "I<br />
              have a great<br />
              website!"<br />
              into the void<br />
              doesn't<br />
              work.
            </h2>
            <div className="text-xl md:text-2xl font-semibold tracking-wide">
              <span className="text-muted-foreground">STOP </span>
              <span className="text-primary">YELLING.</span>
              <br />
              <span className="text-muted-foreground">START </span>
              <span className="text-foreground">RANKING.</span>
            </div>
          </motion.div>

          {/* Right side - Astronaut image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden max-w-md mx-auto lg:ml-auto">
              <img
                src={astronautImage}
                alt="Astronaut relaxing in a field of daisies - what it feels like to be our client"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2 text-center">
                  <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
                    What it actually feels like to be our client
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
