import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Your client asks about SEO",
    description:
      "You panic internally because your team is maxed out and the last SEO vendor ghosted you for three weeks.",
  },
  {
    number: "02",
    title: "You call or email us",
    description:
      "We jump on within a few hours, gather the intel we need, and show you a timeline that makes your client think you've had a plan all along.",
  },
  {
    number: "03",
    title: "We move fast, you look brilliant",
    description:
      "While other agencies are still 'analyzing the competitive landscape' in week 3, we've already published 10 optimized pages and fixed 47 technical issues. Your client thinks you're a magician.",
  },
  {
    number: "04",
    title: "You mark up our work, everyone wins",
    description:
      "We charge $1,800. You charge $5K. Your client gets results faster than they've ever seen. You make $3,200 doing absolutely nothing. We all sleep well at night.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
            Agency in front. Us in the backend. Client never knows.
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            How It Works, In Plain English
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 md:left-8 top-16 w-px h-[calc(100%-4rem)] bg-gradient-to-b from-primary/50 to-border" />
              )}

              {/* Number circle */}
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <span className="font-display text-lg md:text-xl font-bold text-primary">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2 md:pt-3">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
