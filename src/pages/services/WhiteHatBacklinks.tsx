import ServiceLanding from "@/components/ServiceLanding";
import { Link2 } from "lucide-react";

const serviceData = {
  slug: "white-hat-backlinks",
  name: "10 White-Hat Backlinks",
  tagline: "Authority Links That Move the Needle",
  description: "Premium backlink acquisition from high-authority, relevant websites. Every link is manually built through outreach, guest posting, or digital PR—no PBNs, no spam, no risk.",
  price: 300,
  priceId: "price_1SoypvGzDNqJj8E5YPvR3DT8",
  icon: Link2,
  heroGradient: "from-amber-500 to-orange-600",
  benefits: [
    "Boost domain authority with DR50+ backlinks",
    "Build lasting authority that compounds over time",
    "100% safe, white-hat link building methods",
    "Relevant links from your industry or niche",
    "Improve rankings for competitive keywords",
    "Enhance brand visibility through placements"
  ],
  deliverables: [
    "10 high-authority backlinks (DR50+)",
    "Mix of guest posts, niche edits, and PR links",
    "Contextual links with natural anchor text",
    "Full link placement report",
    "DA/DR metrics for each linking domain",
    "Traffic estimates for linking pages",
    "Link monitoring for 90 days",
    "Replacement guarantee for lost links"
  ],
  process: [
    { step: 1, title: "Strategy & Targeting", description: "We analyze your niche, competitors' backlinks, and identify ideal target sites for maximum relevance and authority." },
    { step: 2, title: "Outreach & Negotiation", description: "Our team reaches out to site owners, pitches content ideas, and secures placement opportunities." },
    { step: 3, title: "Content Creation", description: "For guest posts, we write high-quality, relevant content that naturally includes your link." },
    { step: 4, title: "Placement & Reporting", description: "Links are placed, verified, and you receive a detailed report with all metrics and live URLs." }
  ],
  faqs: [
    { question: "Are these links safe?", answer: "100% safe. We use only white-hat methods: genuine outreach, guest posting, and digital PR. No PBNs, link farms, or automated schemes." },
    { question: "What DR/DA can I expect?", answer: "All links are from sites with DR50 or higher. Many clients receive links from DR60-80+ sites." },
    { question: "How long until I see ranking improvements?", answer: "Backlinks typically impact rankings within 4-8 weeks as Google discovers and evaluates the new links." },
    { question: "What if a link gets removed?", answer: "We offer a 90-day replacement guarantee. If any link is removed, we'll build a replacement at no extra cost." }
  ],
  stats: [
    { value: "DR50+", label: "Minimum Authority" },
    { value: "90day", label: "Link Guarantee" },
    { value: "100%", label: "White-Hat Methods" },
    { value: "4-6wks", label: "Delivery Time" }
  ]
};

const WhiteHatBacklinks = () => {
  return <ServiceLanding data={serviceData} />;
};

export default WhiteHatBacklinks;
