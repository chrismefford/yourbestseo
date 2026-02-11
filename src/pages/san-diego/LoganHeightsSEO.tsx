import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "logan-heights-seo",
  name: "Logan Heights",
  heroTitle: "Logan Heights SEO Services – Grow Your Community Business Online",
  heroDescription: "Expert SEO agency for Logan Heights, San Diego businesses. We help restaurants, shops, and service providers rank #1 on Google in this historic South Bay community.",
  keywords: [
    "Logan Heights SEO", "SEO services Logan Heights", "Logan Heights SEO company",
    "SEO agency Logan Heights", "local SEO Logan Heights", "Logan Heights digital marketing",
    "Logan Heights San Diego SEO", "Logan Heights Google ranking", "bilingual SEO Logan Heights",
    "Logan Heights search optimization", "best SEO company Logan Heights", "affordable SEO Logan Heights",
    "South Bay community SEO", "historic neighborhood SEO", "Logan Heights business marketing", "community business SEO",
  ],
  stats: [
    { value: "248%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Logan Heights Agency" },
    { value: "50", label: "Days to Results" },
    { value: "30+", label: "Logan Heights Clients" },
  ],
  services: [
    { title: "Bilingual SEO", description: "Reach both English and Spanish-speaking customers with bilingual SEO strategies for the Logan Heights community." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Logan Heights,' 'authentic Mexican food,' and neighborhood dining searches." },
    { title: "Auto Services SEO", description: "SEO for Logan Heights auto repair, body shops, and vehicle service businesses." },
    { title: "Retail & Market SEO", description: "Help Logan Heights shops and markets attract neighborhood and citywide customers." },
    { title: "Healthcare SEO", description: "SEO for Logan Heights clinics and healthcare providers serving the community." },
    { title: "Home Services SEO", description: "Help Logan Heights contractors and service providers reach local homeowners." },
  ],
  faqs: [
    { question: "Why should Logan Heights businesses invest in SEO?", answer: "Logan Heights is growing and evolving. SEO helps your business reach both long-time residents and newcomers searching for local services." },
    { question: "Do you offer bilingual SEO?", answer: "Yes! Bilingual English/Spanish SEO is essential for Logan Heights. We optimize in both languages for maximum community reach." },
    { question: "How competitive is Logan Heights for SEO?", answer: "Low competition. Most businesses haven't invested in SEO, creating excellent first-mover opportunities." },
    { question: "How long until I see results?", answer: "Most Logan Heights businesses see results within 45-55 days." },
  ],
  nearbyAreas: ["Barrio Logan", "Sherman Heights", "Golden Hill", "National City", "Downtown San Diego", "East Village"],
};

const LoganHeightsSEO = () => <NeighborhoodLanding data={data} />;

export default LoganHeightsSEO;
