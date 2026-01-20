import StateLanding from "@/components/StateLanding";

const data = {
  slug: "washington-seo",
  name: "Washington",
  heroTitle: "Washington SEO Services – Dominate the Pacific Northwest",
  heroDescription: "Award-winning SEO agency serving Washington State businesses. From Seattle enterprises to Spokane startups, we help Washington companies rank higher and grow faster.",
  cities: ["Seattle", "Tacoma", "Spokane", "Bellevue", "Redmond", "Kirkland", "Olympia", "Vancouver", "Everett", "Bellingham"],
  keywords: [
    "Washington SEO",
    "SEO services Washington",
    "Washington SEO company",
    "SEO agency Washington",
    "Seattle SEO",
    "Bellevue SEO",
    "Tacoma SEO",
    "Spokane SEO",
    "Pacific Northwest SEO",
    "enterprise SEO Washington",
    "tech SEO Seattle",
    "B2B SEO Washington",
    "local SEO Washington",
    "ecommerce SEO Washington",
  ],
  stats: [
    { value: "+244%", label: "Enterprise SQLs" },
    { value: "100+", label: "WA Clients Served" },
    { value: "90", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "Enterprise SEO Washington", description: "Scalable SEO for Washington's largest companies. Technical audits, content strategy, and link building at enterprise scale." },
    { title: "Tech & SaaS SEO", description: "Help Seattle-area tech companies and SaaS startups rank for competitive industry keywords." },
    { title: "Local SEO Washington", description: "Dominate local search across Washington metros with optimized Google Business Profiles and local content." },
    { title: "B2B SEO Washington", description: "Generate qualified leads for Washington B2B companies through strategic organic search optimization." },
    { title: "Aerospace & Defense SEO", description: "Specialized SEO for Washington's aerospace industry with compliance-aware content strategies." },
    { title: "Healthcare SEO Washington", description: "Help Washington healthcare systems and providers rank for medical searches statewide." },
  ],
  faqs: [
    { question: "Why choose a Washington SEO agency?", answer: "Washington's market—especially Seattle—is highly competitive with major tech companies. We understand this landscape and know how to compete for visibility in the PNW." },
    { question: "Do you work with Seattle tech companies?", answer: "Absolutely. We have extensive experience with Seattle-area tech companies, from startups to enterprises. We understand the unique challenges of tech SEO." },
    { question: "What results can Washington businesses expect?", answer: "Our Washington clients typically see 200%+ traffic increases within 6 months. Enterprise clients often see even faster results due to existing domain authority." },
  ],
  industries: ["Technology", "Aerospace", "Healthcare", "Retail", "Manufacturing", "Professional Services"],
};

const WashingtonSEO = () => <StateLanding data={data} />;

export default WashingtonSEO;
