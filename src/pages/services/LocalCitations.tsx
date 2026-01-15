import ServiceLanding from "@/components/ServiceLanding";
import { Building } from "lucide-react";

const serviceData = {
  slug: "local-citations",
  name: "50 Local Citations",
  tagline: "Consistency That Ranks",
  description: "Build your local SEO foundation with 50 accurate, consistent citations across top directories. We ensure your NAP (Name, Address, Phone) is perfect everywhere that matters.",
  price: 300,
  priceId: "price_1SoypwGzDNqJj8E5XTqKboZW",
  icon: Building,
  heroGradient: "from-cyan-500 to-blue-600",
  benefits: [
    "Strengthen local search ranking signals",
    "Ensure NAP consistency across the web",
    "Get listed on authoritative local directories",
    "Improve Google Maps visibility",
    "Build trust with consistent business information",
    "Create foundation for ongoing local SEO"
  ],
  deliverables: [
    "50 high-quality local citations",
    "Major aggregator submissions",
    "Industry-specific directory listings",
    "NAP consistency audit and cleanup",
    "Duplicate listing removal",
    "Citation tracking spreadsheet",
    "Verification of all listings",
    "Photo uploads where supported"
  ],
  process: [
    { step: 1, title: "NAP Audit", description: "We audit your existing citations, identify inconsistencies, and create a clean NAP profile for all new listings." },
    { step: 2, title: "Directory Selection", description: "We select 50 directories based on authority, relevance, and local SEO impact for your industry." },
    { step: 3, title: "Submission & Optimization", description: "Each citation is manually created with optimized descriptions, categories, and photos where applicable." },
    { step: 4, title: "Verification & Report", description: "All listings are verified for accuracy, and you receive a complete tracking spreadsheet with login credentials." }
  ],
  faqs: [
    { question: "Which directories do you submit to?", answer: "We submit to major aggregators (Data Axle, Foursquare, Neustar), top directories (Yelp, Yellowpages, BBB), and industry-specific sites." },
    { question: "What if I have existing incorrect citations?", answer: "We identify and correct existing inaccurate citations as part of the cleanup process." },
    { question: "Do I get login credentials?", answer: "Yes, you receive a spreadsheet with all listings, login credentials, and management instructions." },
    { question: "How long until citations are live?", answer: "Most citations are live within 2-4 weeks. Some directories have longer approval processes." }
  ],
  stats: [
    { value: "50", label: "Citations Built" },
    { value: "100%", label: "Manual Submission" },
    { value: "14days", label: "Avg. Completion" },
    { value: "97%", label: "Approval Rate" }
  ]
};

const LocalCitations = () => {
  return <ServiceLanding data={serviceData} />;
};

export default LocalCitations;
