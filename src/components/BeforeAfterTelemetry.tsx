import { motion } from "framer-motion";
import { Search, TrendingUp, ArrowRight } from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BeforeAfterTelemetry = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      name: "Non-Alcoholic Bottle Shop",
      keyword: "non alcoholic bottle shop san diego",
      metric: "+1,300%",
      metricLabel: "revenue-driving clicks",
      before: { page: 4, position: 32 },
      after: { page: 1, position: 1 },
    },
    {
      name: "Dental Collective",
      keyword: "dentist near me",
      metric: "4.6×",
      metricLabel: "appointment requests",
      before: { page: 3, position: 20 },
      after: { page: 1, position: 2 },
      isGrid: true,
    },
  ];

  const currentCase = caseStudies[activeCase];

  // Generate grid for dental case
  const generateGrid = (type: "before" | "after") => {
    const grid = [];
    for (let i = 0; i < 49; i++) {
      if (type === "before") {
        const centerX = 3, centerY = 3;
        const row = Math.floor(i / 7);
        const col = i % 7;
        const distance = Math.abs(row - centerY) + Math.abs(col - centerX);
        if (distance <= 1) {
          grid.push({ rank: Math.floor(Math.random() * 5) + 8, good: false });
        } else {
          grid.push({ rank: 20 + Math.floor(Math.random() * 5), good: false });
        }
      } else {
        grid.push({ rank: Math.floor(Math.random() * 4) + 1, good: true });
      }
    }
    return grid;
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
            Before & After Telemetry
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Actual client snapshots, not mockups.
          </h2>
        </motion.div>

        {/* Case Study Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCase === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary/50 border border-border/50 hover:border-primary/50"
              }`}
            >
              {study.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCase}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Visual Before/After Comparison */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 items-center">
            {/* Before Card */}
            <div className="relative">
              <div className="absolute -top-3 left-4 px-3 py-1 bg-destructive/20 text-destructive text-xs font-bold uppercase tracking-wider rounded-full">
                Before
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-destructive/10 to-transparent border border-destructive/20">
                {currentCase.isGrid ? (
                  <div className="grid grid-cols-7 gap-1">
                    {generateGrid("before").map((cell, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded text-xs flex items-center justify-center font-bold ${
                          cell.rank <= 10 ? "bg-amber-500/30 text-amber-400" : "bg-destructive/20 text-destructive/50"
                        }`}
                      >
                        {cell.rank}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Search className="w-4 h-4" />
                      <span className="truncate">{currentCase.keyword}</span>
                    </div>
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className={`p-3 rounded-lg ${i === 2 ? 'bg-destructive/10 border border-destructive/30' : 'bg-muted/20'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs px-2 py-0.5 rounded ${i === 2 ? 'bg-destructive/20 text-destructive' : 'bg-muted text-muted-foreground'}`}>
                            #{currentCase.before.position - 2 + i}
                          </span>
                        </div>
                        <div className={`h-3 rounded ${i === 2 ? 'bg-destructive/30 w-3/4' : 'bg-muted/30 w-full'}`} />
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-4 pt-4 border-t border-destructive/20 text-center">
                  <span className="text-destructive font-bold">Page {currentCase.before.page} · Position {currentCase.before.position}</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <ArrowRight className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* After Card */}
            <div className="relative">
              <div className="absolute -top-3 left-4 px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                After
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                {currentCase.isGrid ? (
                  <div className="grid grid-cols-7 gap-1">
                    {generateGrid("after").map((cell, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded text-xs flex items-center justify-center font-bold bg-primary/30 text-primary"
                      >
                        {cell.rank}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Search className="w-4 h-4" />
                      <span className="truncate">{currentCase.keyword}</span>
                    </div>
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className={`p-3 rounded-lg ${i === 0 ? 'bg-primary/10 border border-primary/30' : 'bg-muted/20'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs px-2 py-0.5 rounded ${i === 0 ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                            #{i + 1}
                          </span>
                        </div>
                        <div className={`h-3 rounded ${i === 0 ? 'bg-primary/40 w-full' : 'bg-muted/30 w-3/4'}`} />
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-4 pt-4 border-t border-primary/20 text-center">
                  <span className="text-primary font-bold">Page {currentCase.after.page} · Position {currentCase.after.position}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Result Metric - Big and Visual */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="inline-flex flex-col items-center gap-2 p-8 rounded-3xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
              <TrendingUp className="w-8 h-8 text-primary" />
              <span className="text-5xl md:text-6xl font-display font-bold text-gradient-gold">{currentCase.metric}</span>
              <span className="text-lg text-muted-foreground">{currentCase.metricLabel}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterTelemetry;
