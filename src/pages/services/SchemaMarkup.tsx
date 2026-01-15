import ServiceLanding from "@/components/ServiceLanding";
import { Code } from "lucide-react";

const serviceData = {
  slug: "schema-markup",
  name: "Schema Markup Implementation",
  tagline: "Rich Results That Get Clicks",
  description: "Implement structured data that helps Google understand your content and display rich results. Get stars, FAQs, prices, and more directly in search results.",
  price: 300,
  priceId: "price_1SoypzGzDNqJj8E5H708ntUB",
  icon: Code,
  heroGradient: "from-purple-500 to-violet-600",
  benefits: [
    "Stand out in search results with rich snippets",
    "Increase click-through rates by up to 30%",
    "Help Google understand your content better",
    "Qualify for featured snippets and answer boxes",
    "Display ratings, prices, and availability in results",
    "Future-proof your SEO for AI and voice search"
  ],
  deliverables: [
    "Complete schema audit of existing markup",
    "Organization/LocalBusiness schema",
    "Product/Service schema implementation",
    "FAQ schema for top pages",
    "Article/BlogPosting schema",
    "Review/Rating schema setup",
    "Breadcrumb navigation schema",
    "Validation and testing report"
  ],
  process: [
    { step: 1, title: "Schema Audit", description: "We analyze your current structured data, identify gaps, and plan implementation based on your content types." },
    { step: 2, title: "Schema Development", description: "We create custom JSON-LD schema for each page type, following Google's latest guidelines." },
    { step: 3, title: "Implementation", description: "Schema is implemented on your site, either directly or through your CMS/tag manager." },
    { step: 4, title: "Validation & Monitoring", description: "All markup is tested in Google's Rich Results Test and Search Console for error-free display." }
  ],
  faqs: [
    { question: "Will this guarantee rich results?", answer: "Schema makes you eligible for rich results, but Google decides when to display them. Proper implementation significantly increases your chances." },
    { question: "What platforms do you work with?", answer: "We implement schema on WordPress, Shopify, Wix, Squarespace, custom sites, and any platform that supports custom code." },
    { question: "Will this affect my site speed?", answer: "No. JSON-LD schema loads asynchronously and has negligible impact on page speed." },
    { question: "Do I need to maintain the schema?", answer: "Schema should be updated when content changes significantly. We provide documentation for ongoing maintenance." }
  ],
  stats: [
    { value: "30%", label: "CTR Improvement" },
    { value: "100%", label: "Valid Markup" },
    { value: "12+", label: "Schema Types" },
    { value: "48hrs", label: "Implementation Time" }
  ]
};

const SchemaMarkup = () => {
  return <ServiceLanding data={serviceData} />;
};

export default SchemaMarkup;
