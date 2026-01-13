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

// Google-style search result component
const SearchResult = ({ 
  position, 
  title, 
  url, 
  description, 
  isHighlighted, 
  highlightColor 
}: { 
  position: number;
  title: string;
  url: string;
  description: string;
  isHighlighted?: boolean;
  highlightColor?: "primary" | "destructive";
}) => {
  const borderClass = isHighlighted 
    ? highlightColor === "primary" 
      ? "border-primary/40 bg-primary/5" 
      : "border-destructive/40 bg-destructive/5"
    : "border-transparent bg-muted/10";
  
  return (
    <div className={`p-3 rounded-lg border ${borderClass} transition-all`}>
      <div className="flex items-center gap-2 mb-1">
        <div className="w-5 h-5 rounded-full bg-muted/30 flex items-center justify-center">
          <span className="text-[10px] font-bold text-muted-foreground">{url.charAt(0).toUpperCase()}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">{url}</span>
        </div>
      </div>
      <h4 className={`text-sm font-medium mb-1 ${isHighlighted && highlightColor === "primary" ? "text-blue-400" : isHighlighted && highlightColor === "destructive" ? "text-blue-400/60" : "text-blue-400/80"}`}>
        {title}
      </h4>
      <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
    </div>
  );
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
      beforeResults: [
        { position: 30, title: "Top 10 Mocktail Bars in California | Nightlife Guide", url: "nightlifeguide.com", description: "Discover the best mocktail bars and alcohol-free venues across California. Perfect for sober curious adventures..." },
        { position: 31, title: "NA Drinks Directory - Find Stores Near You", url: "nadirectory.com", description: "Browse our comprehensive directory of non-alcoholic beverage retailers. Filter by location, brands, and more." },
        { position: 32, title: "Monday Morning Bottle Shop | San Diego's Premier NA Store", url: "mondaymorning-af.com", description: "Award-winning non-alcoholic bottle shop in San Diego. Craft NA spirits, zero-proof cocktails, and curated tasting flights.", isClient: true },
      ],
      afterResults: [
        { position: 1, title: "Monday Morning Bottle Shop | San Diego's Premier NA Store", url: "mondaymorning-af.com", description: "Award-winning non-alcoholic bottle shop in San Diego. Craft NA spirits, zero-proof cocktails, and curated tasting flights.", isClient: true },
        { position: 2, title: "Best Non-Alcoholic Bottle Shops in San Diego - Yelp", url: "yelp.com", description: "Top 10 Best Non-Alcoholic Bottle Shops in San Diego, CA - Monday Morning, Spirited Away, The Mindful Bar..." },
        { position: 3, title: "NA Drinks Directory - San Diego Locations", url: "nadirectory.com", description: "Find non-alcoholic beverage retailers in San Diego. Compare prices, read reviews, and discover new NA brands." },
      ],
    },
    {
      name: "Dental Collective",
      keyword: "cosmetic dentist downtown san diego",
      metric: "4.6×",
      metricLabel: "appointment requests",
      before: { page: 3, position: 24 },
      after: { page: 1, position: 1 },
      beforeResults: [
        { position: 22, title: "Find a Dentist Near You | American Dental Association", url: "ada.org", description: "Use our dentist finder tool to locate ADA member dentists in your area. Search by specialty, location, and insurance." },
        { position: 23, title: "Top Rated Dentists in San Diego - Healthgrades", url: "healthgrades.com", description: "Compare ratings and reviews for the best dentists in San Diego. Book appointments online with verified providers." },
        { position: 24, title: "Inspire Smiles Cosmetic Dentistry | Downtown San Diego", url: "inspiresmilessd.com", description: "Transform your smile with San Diego's premier cosmetic dentist. Veneers, whitening, implants & more. Free consultations.", isClient: true },
      ],
      afterResults: [
        { position: 1, title: "Inspire Smiles Cosmetic Dentistry | Downtown San Diego", url: "inspiresmilessd.com", description: "Transform your smile with San Diego's premier cosmetic dentist. Veneers, whitening, implants & more. Free consultations.", isClient: true },
        { position: 2, title: "Best Cosmetic Dentists in Downtown San Diego - Yelp", url: "yelp.com", description: "Top 10 Best Cosmetic Dentists near Downtown San Diego, CA - Inspire Smiles, Pacific Dental, Gaslamp Dentistry..." },
        { position: 3, title: "Cosmetic Dentistry San Diego | Zocdoc", url: "zocdoc.com", description: "Book appointments with top-rated cosmetic dentists in San Diego. Read reviews, compare prices, and schedule online." },
      ],
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
          className="max-w-6xl mx-auto"
        >
          {/* Visual Before/After Comparison */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 items-stretch relative">
            {/* Before Card */}
            <div className="relative">
              <div className="absolute -top-3 left-4 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-bold uppercase tracking-wider rounded-full z-10">
                Before
              </div>
              <div className="h-full p-5 rounded-2xl bg-gradient-to-b from-destructive/15 to-destructive/5 border border-destructive/30">
                {/* Google-style search bar */}
                <div className="flex items-center gap-3 p-3 rounded-full bg-background/80 border border-border/50 mb-5">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{currentCase.keyword}</span>
                </div>

                {/* Search Results */}
                <div className="space-y-3">
                  {currentCase.beforeResults.map((result, i) => (
                    <SearchResult
                      key={i}
                      position={result.position}
                      title={result.title}
                      url={result.url}
                      description={result.description}
                      isHighlighted={result.isClient}
                      highlightColor="destructive"
                    />
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-destructive/20 text-center">
                  <span className="text-destructive font-bold text-lg">Page {currentCase.before.page} · Position {currentCase.before.position}</span>
                </div>
              </div>
            </div>

            {/* Arrow - centered between cards */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/40 border-4 border-background">
                <ArrowRight className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* After Card */}
            <div className="relative">
              <div className="absolute -top-3 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full z-10">
                After
              </div>
              <div className="h-full p-5 rounded-2xl bg-gradient-to-b from-primary/15 to-primary/5 border border-primary/30">
                {/* Google-style search bar */}
                <div className="flex items-center gap-3 p-3 rounded-full bg-background/80 border border-primary/30 mb-5">
                  <Search className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{currentCase.keyword}</span>
                </div>

                {/* Search Results */}
                <div className="space-y-3">
                  {currentCase.afterResults.map((result, i) => (
                    <SearchResult
                      key={i}
                      position={result.position}
                      title={result.title}
                      url={result.url}
                      description={result.description}
                      isHighlighted={result.isClient}
                      highlightColor="primary"
                    />
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-primary/20 text-center">
                  <span className="text-primary font-bold text-lg">Page {currentCase.after.page} · Position {currentCase.after.position}</span>
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
