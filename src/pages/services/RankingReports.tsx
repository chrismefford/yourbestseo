import ServiceLanding from "@/components/ServiceLanding";
import { BarChart3 } from "lucide-react";

const serviceData = {
  slug: "ranking-reports",
  name: "Monthly Ranking Reports",
  tagline: "Know Where You Stand",
  description: "Professional monthly ranking reports that track your position for target keywords, monitor competitor movements, and provide actionable insights for continued growth.",
  price: 300,
  priceId: "price_1Soyq0GzDNqJj8E5ufi2msFt",
  icon: BarChart3,
  heroGradient: "from-sky-500 to-cyan-600",
  benefits: [
    "Track rankings for up to 100 keywords",
    "Monitor competitor position changes",
    "Identify ranking opportunities and threats",
    "Measure SEO ROI with clear metrics",
    "Get actionable recommendations each month",
    "Share white-labeled reports with stakeholders"
  ],
  deliverables: [
    "Monthly ranking tracking (100 keywords)",
    "Position change analysis",
    "Competitor ranking comparison",
    "SERP feature monitoring",
    "Local pack position tracking",
    "Executive summary with insights",
    "Trend analysis and forecasting",
    "White-label PDF reports"
  ],
  process: [
    { step: 1, title: "Keyword Setup", description: "We work with you to identify the 100 most important keywords to track, including branded and competitor terms." },
    { step: 2, title: "Baseline Report", description: "Your first report establishes baseline rankings and competitor benchmarks for future comparison." },
    { step: 3, title: "Monthly Tracking", description: "Every month, we track rankings, analyze changes, and identify patterns or opportunities." },
    { step: 4, title: "Report Delivery", description: "You receive a professional report with executive summary and actionable recommendations." }
  ],
  faqs: [
    { question: "How often are rankings checked?", answer: "We check rankings daily and compile monthly reports. You can request weekly updates for critical periods." },
    { question: "Can I add more keywords later?", answer: "Yes, you can modify your keyword list each month. Additional keywords beyond 100 are available for a small fee." },
    { question: "Do you track local rankings?", answer: "Yes, we track rankings for specific locations and Google Maps positions for local businesses." },
    { question: "Can I white-label the reports?", answer: "Absolutely. Reports can be branded with your logo for sharing with clients or stakeholders." }
  ],
  stats: [
    { value: "100", label: "Keywords Tracked" },
    { value: "Daily", label: "Rank Checks" },
    { value: "5", label: "Competitors Monitored" },
    { value: "Monthly", label: "Report Delivery" }
  ]
};

const RankingReports = () => {
  return <ServiceLanding data={serviceData} />;
};

export default RankingReports;
