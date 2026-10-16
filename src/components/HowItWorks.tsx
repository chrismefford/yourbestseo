import { motion } from "framer-motion";
import { Rocket, Phone, Zap, DollarSign } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Rocket,
    title: "We check what AI says about you",
    description:
      "We ask ChatGPT, Perplexity, Claude, and Google about your business and your competitors, and show you exactly where you're missing.",
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    number: "02",
    icon: Phone,
    title: "We fix your foundations",
    description:
      "Google Business Profile, listings, reviews, and your website get cleaned up so search engines and AI tools trust what they read about you.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    number: "03",
    icon: Zap,
    title: "We build your AI reputation",
    description:
      "We publish clear answers about your services and get you mentioned on the local sites and directories AI tools pull from.",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    number: "04",
    icon: DollarSign,
    title: "Turn discovery into bookings",
    description:
      "Make it easy for interested customers to call or request an appointment. Track inquiries alongside search rankings and AI mentions to see what is moving your business forward.",
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
            From awareness to appointments
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get Found. Build Trust. Get Booked.
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
