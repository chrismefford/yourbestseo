import ServiceLanding from "@/components/ServiceLanding";
import { Target } from "lucide-react";

const serviceData = {
  slug: "competitor-analysis",
  name: "Competitor Keyword Analysis",
  tagline: "Steal Their Traffic, Legally",
  description: "Deep-dive analysis of your competitors' SEO strategies. Discover what's working for them and how to outrank them with targeted keyword opportunities.",
  price: 349,
  priceId: "price_1SoyptGzDNqJj8E54cCHqzlO",
  icon: Target,
  heroGradient: "from-red-500 to-pink-600",
  benefits: [
    "Identify keywords your competitors rank for that you don't",
    "Understand their content strategy and find gaps",
    "Discover their backlink sources for link building",
    "Learn from their wins and avoid their mistakes",
    "Find low-competition keywords they've overlooked",
    "Benchmark your performance against industry leaders"
  ],
  deliverables: [
    "Analysis of up to 5 competitors",
    "Complete keyword overlap matrix",
    "Keyword gap opportunities (500+ keywords)",
    "Content gap analysis",
    "Backlink profile comparison",
    "Top-performing pages breakdown",
    "SERP feature ownership analysis",
    "Strategic recommendations report"
  ],
  process: [
    { step: 1, title: "Competitor Selection", description: "We work with you to identify 5 key competitors—both direct and aspirational—for analysis." },
    { step: 2, title: "Data Collection", description: "We pull comprehensive data on rankings, content, backlinks, and SERP features for each competitor." },
    { step: 3, title: "Gap Analysis", description: "Advanced analysis reveals where competitors are winning and where opportunities exist for you." },
    { step: 4, title: "Strategy Delivery", description: "You receive a detailed report with actionable recommendations prioritized by impact." }
  ],
  faqs: [
    { question: "Can you analyze international competitors?", answer: "Yes, we can analyze competitors in any market and language. Just let us know your target regions." },
    { question: "What if I don't know who my competitors are?", answer: "We can help identify your SEO competitors—they may be different from your business competitors." },
    { question: "How often should I do competitor analysis?", answer: "We recommend quarterly analysis to stay ahead of competitor moves. We offer ongoing monitoring packages." },
    { question: "Will you tell me exactly what content to create?", answer: "Yes, the report includes specific content recommendations based on competitor gaps and keyword opportunities." }
  ],
  stats: [
    { value: "5", label: "Competitors Analyzed" },
    { value: "500+", label: "Gap Opportunities" },
    { value: "2.4x", label: "Avg. Traffic Gain" },
    { value: "72hrs", label: "Delivery Time" }
  ]
};

const CompetitorAnalysis = () => {
  return <ServiceLanding data={serviceData} />;
};

export default CompetitorAnalysis;
