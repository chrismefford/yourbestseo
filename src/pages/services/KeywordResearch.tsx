import ServiceLanding from "@/components/ServiceLanding";
import { Search } from "lucide-react";

const serviceData = {
  slug: "keyword-research",
  name: "Keyword Research and Roadmap",
  tagline: "Your Blueprint for Search Domination",
  description: "Strategic keyword research that uncovers high-value opportunities your competitors are missing. Get a complete roadmap for content creation and SEO prioritization.",
  price: 299,
  priceId: "price_1SoyprGzDNqJj8E5Ly19McMj",
  icon: Search,
  heroGradient: "from-violet-500 to-indigo-600",
  benefits: [
    "Discover keywords with high traffic and low competition",
    "Understand search intent to create content that converts",
    "Identify quick-win opportunities for fast rankings",
    "Map keywords to buyer journey stages",
    "Build topical clusters for authority building",
    "Prioritize efforts based on ROI potential"
  ],
  deliverables: [
    "500+ keyword opportunities analyzed",
    "Top 100 priority keywords with metrics",
    "Search intent classification for each keyword",
    "Competitor keyword gap analysis",
    "Content topic clusters with keyword mapping",
    "6-month content roadmap",
    "Keyword difficulty assessment",
    "SERP feature opportunity analysis"
  ],
  process: [
    { step: 1, title: "Discovery Session", description: "We learn about your business, goals, and target audience to focus research on keywords that matter." },
    { step: 2, title: "Deep Research", description: "Using enterprise tools, we analyze search volume, competition, trends, and intent for thousands of keywords." },
    { step: 3, title: "Strategic Analysis", description: "Keywords are categorized, scored, and mapped to your buyer journey for maximum impact." },
    { step: 4, title: "Roadmap Delivery", description: "You receive a comprehensive report and prioritized action plan for the next 6 months." }
  ],
  faqs: [
    { question: "What tools do you use for research?", answer: "We use enterprise-grade tools including Ahrefs, SEMrush, Google Keyword Planner, and proprietary data sources." },
    { question: "Will you help implement the keywords?", answer: "This package focuses on research and strategy. Implementation services (content, on-page SEO) are available separately." },
    { question: "How is this different from free keyword tools?", answer: "Free tools provide basic data. We provide strategic analysis, competitive intelligence, and actionable prioritization based on your specific business goals." },
    { question: "Can you focus on specific topics or products?", answer: "Absolutely. We tailor research to your priority areas, whether that's specific products, services, or market segments." }
  ],
  stats: [
    { value: "500+", label: "Keywords Analyzed" },
    { value: "6mo", label: "Content Roadmap" },
    { value: "100%", label: "Custom Research" },
    { value: "48hrs", label: "Delivery Time" }
  ]
};

const KeywordResearch = () => {
  return <ServiceLanding data={serviceData} />;
};

export default KeywordResearch;
