import ServiceLanding from "@/components/ServiceLanding";
import { MessageCircle } from "lucide-react";

const serviceData = {
  slug: "review-management",
  name: "Review Response Management",
  tagline: "Turn Reviews Into Revenue",
  description: "Professional review response management that builds trust, improves local SEO, and turns negative reviews into opportunities. We craft responses that showcase your brand.",
  price: 499,
  priceId: "price_1SoypyGzDNqJj8E5cVMrfO8x",
  icon: MessageCircle,
  heroGradient: "from-emerald-500 to-green-600",
  benefits: [
    "Improve local search rankings with active review management",
    "Build customer trust through thoughtful responses",
    "Turn negative reviews into brand-building opportunities",
    "Show potential customers you care about feedback",
    "Save time with professional response crafting",
    "Maintain consistent brand voice across platforms"
  ],
  deliverables: [
    "Response to all existing reviews (up to 100)",
    "Custom response templates library",
    "Negative review escalation protocol",
    "Review monitoring setup",
    "Monthly response report",
    "Review generation strategy guide",
    "Platform-specific best practices",
    "Brand voice guidelines for reviews"
  ],
  process: [
    { step: 1, title: "Brand Voice Discovery", description: "We learn your brand voice, values, and preferred communication style for authentic responses." },
    { step: 2, title: "Review Audit", description: "We review all existing reviews, identify patterns, and prioritize responses by impact." },
    { step: 3, title: "Response Crafting", description: "Each response is personally crafted to address specific feedback while reinforcing your brand." },
    { step: 4, title: "Templates & Training", description: "You receive custom templates and training for ongoing review management." }
  ],
  faqs: [
    { question: "Which platforms do you cover?", answer: "We cover Google, Yelp, Facebook, TripAdvisor, industry-specific platforms, and any others relevant to your business." },
    { question: "Can you help get negative reviews removed?", answer: "We can help flag reviews that violate platform policies, but we focus on responding professionally rather than removal." },
    { question: "Do you help generate more reviews?", answer: "Yes, we include a review generation strategy guide with tactics for ethically increasing your review count." },
    { question: "What about ongoing management?", answer: "This package covers existing reviews. We offer monthly retainer packages for ongoing review management." }
  ],
  stats: [
    { value: "100", label: "Reviews Managed" },
    { value: "24hr", label: "Response Time" },
    { value: "4.7★", label: "Avg. Rating Lift" },
    { value: "89%", label: "Sentiment Improvement" }
  ]
};

const ReviewManagement = () => {
  return <ServiceLanding data={serviceData} />;
};

export default ReviewManagement;
