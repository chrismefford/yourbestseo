import ServiceLanding from "@/components/ServiceLanding";
import { MapPin } from "lucide-react";

const serviceData = {
  slug: "google-business-profile",
  name: "Google Business Profile Optimization",
  tagline: "Dominate the Local Map Pack",
  description: "Transform your Google Business Profile into a lead-generating machine. We optimize every element to maximize visibility, clicks, and customer actions in local search.",
  price: 300,
  priceId: "price_1SoypqGzDNqJj8E5Wezfrp5O",
  icon: MapPin,
  heroGradient: "from-green-500 to-teal-600",
  benefits: [
    "Rank higher in Google Maps and local pack results",
    "Increase profile views by up to 500%",
    "Drive more calls, direction requests, and website visits",
    "Stand out from competitors with optimized visuals",
    "Build trust with strategic review management",
    "Capture customers searching 'near me' keywords"
  ],
  deliverables: [
    "Complete GBP audit and optimization",
    "Category and attribute optimization",
    "Business description rewrite (SEO-optimized)",
    "Photo optimization and recommendations",
    "Q&A section setup with strategic questions",
    "Review response templates",
    "Post schedule with 4 weeks of content",
    "Local keyword integration"
  ],
  process: [
    { step: 1, title: "Profile Audit", description: "We analyze your current GBP performance, identify gaps, and benchmark against top local competitors." },
    { step: 2, title: "Optimization Sprint", description: "Every element is optimized: categories, attributes, description, photos, services, and products." },
    { step: 3, title: "Content Setup", description: "We create and schedule posts, set up Q&A, and prepare review response templates." },
    { step: 4, title: "Training & Handoff", description: "You receive a guide for ongoing optimization and a brief training session on maintaining your profile." }
  ],
  faqs: [
    { question: "Do I need to give you access to my profile?", answer: "Yes, we'll need Manager or Owner access to implement optimizations. We can guide you through this process." },
    { question: "Will this help me rank in the map pack?", answer: "GBP optimization is one of the most important factors for map pack rankings. Most clients see significant improvement within 30 days." },
    { question: "Do you handle review management?", answer: "We provide review response templates and strategy. Ongoing review management is available as an add-on service." },
    { question: "What about multiple locations?", answer: "This package covers one location. Multi-location packages are available at a discounted rate." }
  ],
  stats: [
    { value: "487%", label: "Avg. Profile Views Increase" },
    { value: "156%", label: "More Customer Actions" },
    { value: "3.2x", label: "Call Volume Increase" },
    { value: "#1", label: "Map Pack Position" }
  ]
};

const GoogleBusinessProfile = () => {
  return <ServiceLanding data={serviceData} />;
};

export default GoogleBusinessProfile;
