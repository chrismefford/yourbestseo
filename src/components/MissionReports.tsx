import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const reports = [
  {
    category: "Mission Report #1",
    title: "Local High-End Cosmetic Dentist",
    url: "inspiresmilessd.com",
    metric: "+2300%",
    metricLabel: "Organic Traffic",
    points: [
      "In 90 days they went from page four of Google to page one",
      "In four months, they ranked in the top 5",
      "In six months, they ranked for over 100 keywords",
    ],
    year: "2025",
  },
  {
    category: "Mission Report #2",
    title: "Non-Alcoholic Bottle Shop",
    url: "mondaymorning-af.com",
    metric: "+1300%",
    metricLabel: "Organic Traffic",
    points: [
      "In 60 days, ranked on page one of Google in all major categories",
      "30 days later they were discoverable on ChatGPT + Anthropic",
      "In six months, they ranked for over 300 keywords",
    ],
    year: "2025",
  },
  {
    category: "Mission Report #3",
    title: "Global HR Business",
    url: "payrolling.com",
    metric: "+1170%",
    metricLabel: "Qualified Leads",
    points: [
      "Went from 100K impressions a year to 30M",
      "Went from 30 leads a year to 365",
      "Added 500 landing pages in 12 months",
    ],
    year: "2025",
  },
  {
    category: "Mission Report #4",
    title: "Start-Up Home Appraisal Business",
    url: "learnyourhomesvalue.com",
    metric: "+1000%",
    metricLabel: "Growth",
    points: [
      "Built 100 pages at launch",
      "Went from 0 impressions to 10K in two months",
      "Now averaging two jobs per week",
    ],
    year: "2025",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const MissionReports = () => {
  return (
    <section className="py-24 lg:py-32 relative" id="results">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
            Real outcomes from agency partnerships
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Mission Reports
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {reports.map((report, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 lg:p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-medium text-primary tracking-widest uppercase">
                  {report.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  Verified results · {report.year}
                </span>
              </div>

              <a
                href={`https://${report.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-6 group/link"
              >
                <h3 className="font-display text-lg font-bold">
                  {report.title}
                </h3>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>

              <div className="mb-6">
                <span className="text-4xl lg:text-5xl font-display font-bold text-gradient-gold">
                  {report.metric}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {report.metricLabel}
                </p>
              </div>

              <ul className="space-y-2">
                {report.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          *Shared with permission from Qontent Agency (
          <a href="https://qontentagency.com" className="text-primary hover:underline">
            qontentagency.com
          </a>
          ). These are their real client outcomes.
        </p>
      </div>
    </section>
  );
};

export default MissionReports;
