import ServiceLanding from "@/components/ServiceLanding";
import { Zap } from "lucide-react";

const serviceData = {
  slug: "technical-seo",
  name: "Technical SEO Quick-Fix Package",
  tagline: "Fix What's Holding Your Site Back",
  description: "A comprehensive technical SEO audit and implementation package that identifies and fixes the critical issues preventing your site from ranking. Get actionable fixes, not just a report.",
  price: 300,
  priceId: "price_1SoyplGzDNqJj8E5KClYHyga",
  icon: Zap,
  heroGradient: "from-orange-500 to-red-600",
  benefits: [
    "Identify crawl errors that block Google from indexing your pages",
    "Fix Core Web Vitals issues hurting your rankings",
    "Resolve duplicate content and canonicalization problems",
    "Optimize site architecture for better crawl efficiency",
    "Implement structured data for rich search results",
    "Ensure mobile-friendliness across all pages"
  ],
  deliverables: [
    "Full technical SEO audit (100+ checkpoints)",
    "Prioritized fix list by impact and effort",
    "Crawl error resolution guide",
    "Core Web Vitals optimization report",
    "XML sitemap optimization",
    "Robots.txt review and recommendations",
    "Schema markup implementation",
    "Mobile usability fixes"
  ],
  process: [
    { step: 1, title: "Deep Site Crawl", description: "We run comprehensive crawls using enterprise tools to identify every technical issue affecting your site's performance." },
    { step: 2, title: "Priority Assessment", description: "Issues are categorized by severity and potential ranking impact. Critical fixes are flagged for immediate attention." },
    { step: 3, title: "Fix Implementation", description: "We implement the quick-wins directly and provide detailed instructions for dev-dependent fixes." },
    { step: 4, title: "Verification & Report", description: "All fixes are verified, and you receive a comprehensive report showing before/after metrics." }
  ],
  faqs: [
    { question: "Will you make changes to my site?", answer: "We implement fixes that don't require backend access (meta tags, structured data, etc.). For server-side changes, we provide detailed instructions for your dev team." },
    { question: "What platforms do you support?", answer: "We work with all major platforms including WordPress, Shopify, Wix, Squarespace, custom sites, and enterprise CMS platforms." },
    { question: "How long until I see results?", answer: "Technical fixes typically show impact within 2-4 weeks as Google recrawls your site. Core Web Vitals improvements can be immediate." },
    { question: "Do I get a report?", answer: "Yes, you receive a comprehensive PDF report with all findings, fixes implemented, and recommendations for ongoing maintenance." }
  ],
  stats: [
    { value: "47%", label: "Avg. Speed Improvement" },
    { value: "2.3x", label: "Crawl Efficiency Gain" },
    { value: "89%", label: "Issues Resolved" },
    { value: "24hrs", label: "Delivery Time" }
  ]
};

const TechnicalSEO = () => {
  return <ServiceLanding data={serviceData} />;
};

export default TechnicalSEO;
