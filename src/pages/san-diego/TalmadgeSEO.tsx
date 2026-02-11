import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "talmadge-seo",
  name: "Talmadge",
  heroTitle: "Talmadge SEO Services – Grow Your Charming Neighborhood Business",
  heroDescription: "Expert SEO agency for Talmadge, San Diego businesses. We help restaurants, shops, and service providers rank #1 on Google in this historic, tree-lined neighborhood.",
  keywords: [
    "Talmadge SEO", "SEO services Talmadge", "Talmadge SEO company",
    "SEO agency Talmadge", "local SEO Talmadge", "Talmadge digital marketing",
    "Talmadge San Diego SEO", "Talmadge Google ranking", "Monroe Avenue SEO",
    "Talmadge search optimization", "best SEO company Talmadge", "affordable SEO Talmadge",
    "historic neighborhood SEO", "Talmadge business marketing", "mid-city San Diego SEO", "Talmadge web marketing",
  ],
  stats: [
    { value: "240%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Talmadge Agency" },
    { value: "45", label: "Days to Results" },
    { value: "25+", label: "Talmadge Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Talmadge searches. We optimize for this charming mid-city neighborhood with loyal residents." },
    { title: "Restaurant & Cafe SEO", description: "Rank for 'restaurants Talmadge,' 'cafes near Kensington,' and neighborhood dining searches." },
    { title: "Home Services SEO", description: "SEO for Talmadge contractors and home service providers serving historic homes." },
    { title: "Healthcare SEO", description: "Help Talmadge medical and dental practices reach local families." },
    { title: "Retail & Boutique SEO", description: "SEO for Talmadge shops and specialty retailers in this walkable district." },
    { title: "Professional Services SEO", description: "Help Talmadge professionals reach clients in the mid-city area." },
  ],
  faqs: [
    { question: "Why should Talmadge businesses invest in SEO?", answer: "Talmadge has a loyal, community-minded population. SEO ensures you're the first business they find when searching for local services." },
    { question: "How competitive is Talmadge for SEO?", answer: "Very low competition. Most Talmadge businesses rely on word-of-mouth, making SEO a powerful differentiator." },
    { question: "What makes Talmadge SEO different?", answer: "Talmadge is a small, tight-knit community. We focus on hyper-local keywords and community-oriented content." },
    { question: "How long until I see results?", answer: "Most Talmadge businesses see results within 40-50 days due to very low competition." },
  ],
  nearbyAreas: ["Kensington", "City Heights", "College Area", "Normal Heights", "Allied Gardens", "North Park"],
};

const TalmadgeSEO = () => <NeighborhoodLanding data={data} />;

export default TalmadgeSEO;
