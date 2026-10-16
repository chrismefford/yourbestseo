import { motion } from "framer-motion";
import { Search, Target, CalendarCheck } from "lucide-react";

const objectives = [
  {
    icon: Search,
    title: "Build Awareness",
    description:
      "Become a familiar name when local customers search or ask ChatGPT, Perplexity, and Claude. Build a clear, trusted presence around what your business does best.",
  },
  {
    icon: Target,
    title: "Climb the Search Results",
    description:
      "Compete for top positions on Google and Google Maps for the searches that matter to your business. Focus on customers looking for what you offer, right where you work.",
  },
  {
    icon: CalendarCheck,
    title: "Turn Interest Into Appointments",
    description:
      "Give people a clear reason to choose you and an easy next step to call or book. Measure progress in qualified inquiries and appointments—not just website traffic.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const MissionObjectives = () => {
  return (
    <section className="py-24 lg:py-32 relative" id="growth">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
            Built for local business owners who want more calls, not more jargon
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            More Awareness. More Appointments.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-lg card-gradient border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <objective.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">
                {objective.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {objective.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionObjectives;
