import ServiceLanding from "@/components/ServiceLanding";
import { FileText } from "lucide-react";

const serviceData = {
  slug: "seo-blog-posts",
  name: "10 SEO-Optimized Blog Posts",
  tagline: "Content That Ranks and Converts",
  description: "Get 10 professionally written, keyword-targeted blog posts that drive organic traffic and establish your authority. Each post is researched, optimized, and ready to publish.",
  price: 300,
  priceId: "price_1Soyp6GzDNqJj8E5h8aUfLKz",
  icon: FileText,
  heroGradient: "from-blue-500 to-purple-600",
  benefits: [
    "Rank for long-tail keywords that your competitors are missing",
    "Build topical authority with strategic content clusters",
    "Generate qualified leads with intent-focused writing",
    "Improve domain authority through quality content signals",
    "Save 40+ hours of research and writing time",
    "Get evergreen content that drives traffic for years"
  ],
  deliverables: [
    "10 long-form blog posts (1,500+ words each)",
    "Keyword research and mapping per post",
    "SEO-optimized title tags and meta descriptions",
    "Internal linking suggestions",
    "Featured image recommendations",
    "Alt text and image optimization notes",
    "Schema markup recommendations",
    "WordPress/CMS-ready formatting"
  ],
  process: [
    { step: 1, title: "Kickoff & Discovery", description: "We schedule a brief call to understand your business, audience, and content goals. We identify your target keywords and topic clusters." },
    { step: 2, title: "Research & Outline", description: "Our team researches each topic, analyzes competitor content, and creates detailed outlines ensuring comprehensive coverage." },
    { step: 3, title: "Writing & Optimization", description: "Expert writers craft each post with SEO best practices, natural keyword integration, and engaging storytelling." },
    { step: 4, title: "Review & Delivery", description: "Posts go through quality review, SEO audit, and are delivered in your preferred format within 5-7 business days." }
  ],
  faqs: [
    { question: "What industries do you write for?", answer: "We write for all industries. Our team includes writers with expertise in tech, healthcare, finance, e-commerce, SaaS, and more. We match you with a writer who understands your niche." },
    { question: "Can I request specific topics?", answer: "Absolutely! You can provide topics, or we can conduct keyword research to identify the highest-opportunity topics for your business." },
    { question: "Do you include images?", answer: "We provide image recommendations and alt text. If you need custom graphics, we can discuss adding that to your package." },
    { question: "What's the turnaround time?", answer: "Standard delivery is 5-7 business days for all 10 posts. Rush delivery is available for an additional fee." }
  ],
  stats: [
    { value: "312%", label: "Avg. Traffic Increase" },
    { value: "15K+", label: "Posts Delivered" },
    { value: "48hrs", label: "Avg. First Draft" },
    { value: "98%", label: "Client Satisfaction" }
  ]
};

const SEOBlogPosts = () => {
  return <ServiceLanding data={serviceData} />;
};

export default SEOBlogPosts;
