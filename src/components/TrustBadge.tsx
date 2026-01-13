import { motion } from "framer-motion";

const TrustBadge = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
              Why agencies trust us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Finalist for the 2025 Search Engine Land Awards
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Here's why agencies choose us: we're one of only five SEO teams in the United States recognized by the Search Engine Land Awards. Your clients get elite-level SEO. You get the credit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="https://static.riff.new/public/thick-melancholic-rhythm-du4n/unnamed-1.png"
                alt="Search Engine Land Awards Finalist 2025 badge"
                className="w-64 md:w-80 lg:w-96"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 scale-110" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadge;
