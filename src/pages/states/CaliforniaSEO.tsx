import StateLanding from "@/components/StateLanding";

const data = {
  slug: "california-seo",
  name: "California",
  heroTitle: "California SEO Services – Dominate the Golden State",
  heroDescription: "Award-winning SEO agency serving California businesses from San Diego to San Francisco. We help California companies rank higher, drive more traffic, and generate leads through organic search.",
  cities: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento", "Oakland", "Fresno", "Long Beach", "Irvine", "Santa Monica"],
  keywords: [
    "California SEO",
    "SEO services California",
    "California SEO company",
    "SEO agency California",
    "Los Angeles SEO",
    "San Francisco SEO",
    "San Diego SEO",
    "Bay Area SEO",
    "Southern California SEO",
    "California digital marketing",
    "SaaS SEO California",
    "tech startup SEO",
    "ecommerce SEO California",
    "local SEO California",
    "enterprise SEO California",
  ],
  stats: [
    { value: "+312%", label: "Avg. Traffic Increase" },
    { value: "150+", label: "CA Clients Served" },
    { value: "90", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "Tech & SaaS SEO", description: "Specialized SEO for California's thriving tech ecosystem. We help SaaS companies and startups rank for competitive industry keywords." },
    { title: "Local SEO California", description: "Dominate local search across California metros. Google Business Profile optimization, local citations, and geo-targeted content." },
    { title: "Ecommerce SEO", description: "Drive organic revenue for California ecommerce brands with product page optimization, category SEO, and conversion-focused strategies." },
    { title: "Enterprise SEO", description: "Scalable SEO solutions for large California enterprises. Technical audits, content strategy, and link building at scale." },
    { title: "Healthcare SEO", description: "HIPAA-compliant SEO for California healthcare providers. Rank for medical keywords and attract new patients." },
    { title: "Real Estate SEO", description: "Help California real estate agents and brokerages rank for property searches and generate qualified leads." },
  ],
  faqs: [
    { question: "Why is California a competitive SEO market?", answer: "California has the largest economy in the US and is home to countless tech companies, startups, and enterprises. This creates intense competition for search rankings, making professional SEO essential for visibility." },
    { question: "Do you work with California startups?", answer: "Yes! We specialize in helping California startups build organic traffic from the ground up. Our strategies are designed to compete with larger, established players in your industry." },
    { question: "What industries do you serve in California?", answer: "We serve all major California industries including tech, healthcare, real estate, legal, ecommerce, hospitality, and professional services. Our team has deep experience in the California market." },
    { question: "How long until I see SEO results in California?", answer: "Most California clients see meaningful ranking improvements within 60-90 days. Given the competitive landscape, we focus on quick wins while building long-term authority." },
  ],
  industries: ["Technology", "SaaS", "Healthcare", "Real Estate", "Legal", "Ecommerce", "Hospitality", "Entertainment"],
};

const CaliforniaSEO = () => <StateLanding data={data} />;

export default CaliforniaSEO;
