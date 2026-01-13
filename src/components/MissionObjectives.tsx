import { motion } from "framer-motion";
import { Search, Target, Handshake } from "lucide-react";

const objectives = [
  {
    icon: Search,
    title: "Total Transparency",
    description:
      "Plain-English reports, and zero jargon. You'll know exactly what we're doing, why we're doing it, and how it impacts your bottom line—no black box, no surprises.",
  },
  {
    icon: Target,
    title: "No Overpromising & Underdelivering",
    description:
      "Tired of agencies charging $500 per blog post or treating backlinks like luxury upgrades? We bundle everything you need and focus on one thing: getting you visible on page one.",
  },
  {
    icon: Handshake,
    title: "No Lock-Ins, No Hidden Fees",
    description:
      "Month-to-month agreements, transparent pricing, and all essential services included. Cancel anytime. We earn your business every month by delivering—not by trapping you in a contract.",
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
    <section className="py-24 lg:py-32 relative" id="services">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Visual Header with GIF */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
              This is for agencies that want to expand services without hiring anyone
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Mission Objectives
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What it actually feels like to be our client—full visibility, real results, and a partnership that makes you look like the hero.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="https://static.riff.new/public/thick-melancholic-rhythm-du4n/u2394523248_dead_man__dont_move._--ar_5191_--motion_high_--vi_d7fd34bb-af10-4ceb-b8ca-e2d4d5f03b87_0.gif"
                alt="Animated mission control hologram"
                className="w-full max-w-md lg:max-w-lg rounded-2xl"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 scale-75" />
            </div>
          </motion.div>
        </div>

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
              className="group p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
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
