import { motion } from "framer-motion";
import { Rocket, Phone, Zap, DollarSign } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Rocket,
    title: "Your client asks about SEO",
    description:
      "You panic internally because your team is maxed out and the last SEO vendor ghosted you for three weeks.",
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    number: "02",
    icon: Phone,
    title: "You call or email us",
    description:
      "We jump on within a few hours, gather the intel we need, and show you a timeline that makes your client think you've had a plan all along.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    number: "03",
    icon: Zap,
    title: "We move fast, you look brilliant",
    description:
      "While other agencies are still 'analyzing the competitive landscape' in week 3, we've already published 10 optimized pages and fixed 47 technical issues. Your client thinks you're a magician.",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    number: "04",
    icon: DollarSign,
    title: "You mark up our work, everyone wins",
    description:
      "We charge $1,800. You charge $5K. Your client gets results faster than they've ever seen. You make $3,200 doing absolutely nothing. We all sleep well at night.",
    color: "from-primary/20 to-primary/5",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector line */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className={`p-6 rounded-2xl bg-gradient-to-b ${step.color} border border-border/50 hover:border-primary/30 transition-all duration-500 h-full`}>
                {/* Number badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-display text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
