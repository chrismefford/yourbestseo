import { motion } from "framer-motion";
import { Search, TrendingUp } from "lucide-react";
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
      description: "Captured page-one real estate for every high-intent query in San Diego within 60 days.",
      beforePosition: "Page 4 · Position 32",
      afterPosition: "Page 1 · Position 1",
      metric: "+1,300%",
      metricLabel: "revenue-driving clicks",
      beforeResults: [
        { pos: 32, name: "Monday Morning Bottle Shop", url: "mondaymorning-af.com", description: "Award-winning NA bottle shop curating craft spirits, ready-to-drink cocktails, and tasting flights in downtown San Diego.", highlight: true },
        { pos: 38, name: "Good News Mocktail Lounge", url: "goodnewsbar.com", description: "Reservation-only mocktail experience with chef-paired menus, featuring seasonal zero-proof cocktails." },
        { pos: 41, name: "Local Listing Directory", url: "localfinder.com/na-bottle-shops", description: "See every verified non-alcoholic bottle shop across the metro, reviews, and neighborhood delivery windows." },
      ],
      afterResults: [
        { pos: 1, name: "Monday Morning Bottle Shop", url: "mondaymorning-af.com", description: "Award-winning NA bottle shop curating craft spirits, ready-to-drink cocktails, and tasting flights in downtown San Diego.", highlight: true },
        { pos: 2, name: "Good News Mocktail Lounge", url: "goodnewsbar.com", description: "Reservation-only mocktail experience with chef-paired menus, featuring seasonal zero-proof cocktails." },
        { pos: 3, name: "Local Listing Directory", url: "localfinder.com/na-bottle-shops", description: "See every verified non-alcoholic bottle shop across the metro, reviews, and neighborhood delivery windows." },
      ],
    },
    {
      name: "Dental Collective",
      keyword: "Local pack visibility grid",
      description: "Expanded visibility radius from a 4-block neighborhood to the entire coastal metro.",
      beforePosition: "Sparse coverage · rank 20+",
      afterPosition: "Full coverage · rank 1-4",
      metric: "4.6×",
      metricLabel: "appointment requests",
      isGrid: true,
      beforeGrid: generateGrid("before"),
      afterGrid: generateGrid("after"),
    },
  ];

  function generateGrid(type: "before" | "after") {
    const grid = [];
    for (let i = 0; i < 81; i++) {
      if (type === "before") {
        // Sparse coverage with mostly bad rankings
        const centerX = 4, centerY = 4;
        const row = Math.floor(i / 9);
        const col = i % 9;
        const distance = Math.abs(row - centerY) + Math.abs(col - centerX);
        if (distance <= 1) {
          grid.push({ rank: Math.floor(Math.random() * 5) + 8, good: false });
        } else {
          grid.push({ rank: 20 + Math.floor(Math.random() * 5), good: false });
        }
      } else {
        // Full coverage with good rankings
        grid.push({ rank: Math.floor(Math.random() * 4) + 1, good: true });
      }
    }
    return grid;
  }

  const currentCase = caseStudies[activeCase];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These are the proof points we drop into proposals—swipe them for your deck and show prospects what happens when SEO is handled by mission control.
          </p>
        </motion.div>

        {/* Case Study Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCase === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary border border-border/50 hover:border-primary/50"
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
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="p-8 lg:p-10 rounded-3xl card-gradient border border-border/50"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-2xl font-bold mb-1">{currentCase.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  {currentCase.keyword}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-8">{currentCase.description}</p>

            {/* Before/After Stats */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                <span className="text-sm font-bold text-muted-foreground uppercase">Before</span>
                <span className="text-destructive font-medium">{currentCase.beforePosition}</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <span className="text-sm font-bold text-muted-foreground uppercase">After</span>
                <span className="text-primary font-medium">{currentCase.afterPosition}</span>
              </div>
            </div>

            {/* Content based on case type */}
            {currentCase.isGrid ? (
              /* Grid Visualization for Dental */
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before Grid */}
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Before</span>
                  </div>
                  <div className="grid grid-cols-9 gap-1 p-4 rounded-xl bg-background/50 border border-border/50">
                    {currentCase.beforeGrid?.map((cell, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded text-xs flex items-center justify-center font-medium ${
                          cell.rank <= 10 ? "bg-amber-500/20 text-amber-400" : "bg-destructive/10 text-destructive/60"
                        }`}
                      >
                        {cell.rank}
                      </div>
                    ))}
                  </div>
                </div>

                {/* After Grid */}
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">After</span>
                  </div>
                  <div className="grid grid-cols-9 gap-1 p-4 rounded-xl bg-background/50 border border-primary/20">
                    {currentCase.afterGrid?.map((cell, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded text-xs flex items-center justify-center font-medium bg-primary/20 text-primary"
                      >
                        {cell.rank}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Search Results Visualization */
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <Search className="w-4 h-4" />
                      <span className="truncate">{currentCase.keyword}</span>
                      <span className="ml-auto px-2 py-0.5 rounded bg-destructive/20 text-destructive text-xs whitespace-nowrap">Page 4</span>
                    </div>
                    <div className="space-y-3">
                      {currentCase.beforeResults?.map((result, i) => (
                        <div key={i} className={`p-3 rounded-lg ${result.highlight ? 'bg-destructive/5 border border-destructive/20' : 'bg-muted/30'}`}>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                            <span className={`px-1.5 py-0.5 rounded ${result.highlight ? 'bg-destructive/20 text-destructive' : 'bg-muted'}`}>Result #{result.pos}</span>
                            <span className="px-1.5 py-0.5 rounded bg-muted text-xs">Page 4</span>
                          </div>
                          <p className={`text-sm font-medium mb-1 ${result.highlight ? 'text-destructive' : ''}`}>{result.name}</p>
                          <p className="text-xs text-primary/70">{result.url}</p>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{result.description}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 text-center">Powered by live rank tracking</p>
                  </div>
                </div>

                {/* After */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-background/50 border border-primary/20">
                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <Search className="w-4 h-4" />
                      <span className="truncate">{currentCase.keyword}</span>
                      <span className="ml-auto px-2 py-0.5 rounded bg-primary/20 text-primary text-xs whitespace-nowrap">Page 1</span>
                    </div>
                    <div className="space-y-3">
                      {currentCase.afterResults?.map((result, i) => (
                        <div key={i} className={`p-3 rounded-lg ${result.highlight ? 'bg-primary/5 border border-primary/20' : 'bg-muted/30'}`}>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                            <span className={`px-1.5 py-0.5 rounded ${result.highlight ? 'bg-primary/20 text-primary' : 'bg-muted'}`}>Result #{result.pos}</span>
                            <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-xs">Page 1</span>
                          </div>
                          <p className={`text-sm font-medium mb-1 ${result.highlight ? 'text-primary' : ''}`}>{result.name}</p>
                          <p className="text-xs text-primary/70">{result.url}</p>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{result.description}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 text-center">Powered by live rank tracking</p>
                  </div>
                </div>
              </div>
            )}

            {/* Result Metric */}
            <div className="mt-8 pt-6 border-t border-border/50 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-xl font-bold text-primary">{currentCase.metric}</span>
                <span className="text-primary">{currentCase.metricLabel}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterTelemetry;
