import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "coronado-seo",
  name: "Coronado",
  heroTitle: "Coronado SEO Services – Luxury Marketing for the Crown City",
  heroDescription: "Premier SEO agency for Coronado, California businesses. We help hotels, restaurants, boutiques, and luxury services rank #1 on Google in this prestigious island community.",
  keywords: [
    "Coronado SEO", "SEO services Coronado", "Coronado SEO company",
    "SEO agency Coronado", "local SEO Coronado", "Coronado digital marketing",
    "Coronado Island SEO", "Coronado Google ranking", "Hotel del Coronado SEO",
    "Orange Avenue SEO", "Coronado search optimization", "best SEO company Coronado",
    "luxury SEO Coronado", "Coronado Beach SEO", "Crown City SEO", "island community SEO",
  ],
  stats: [
    { value: "295%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Coronado Agency" },
    { value: "70", label: "Days to Results" },
    { value: "45+", label: "Coronado Clients" },
  ],
  services: [
    { title: "Hotel & Hospitality SEO", description: "Help Coronado hotels and resorts rank for luxury accommodation searches and compete with major booking platforms." },
    { title: "Fine Dining SEO", description: "Rank for 'restaurants Coronado,' 'oceanfront dining,' and upscale cuisine searches on the island." },
    { title: "Boutique & Retail SEO", description: "Help Orange Avenue boutiques and shops attract tourists and local shoppers." },
    { title: "Real Estate SEO", description: "SEO for Coronado real estate agents selling luxury island properties." },
    { title: "Wellness & Spa SEO", description: "Help Coronado spas, wellness centers, and fitness businesses attract health-conscious visitors." },
    { title: "Wedding & Events SEO", description: "SEO for Coronado wedding venues and event planners in this romantic destination." },
  ],
  faqs: [
    { question: "What makes Coronado SEO unique?", answer: "Coronado is a premium destination with affluent residents and millions of annual visitors. SEO must balance luxury branding with tourist-intent keywords." },
    { question: "How competitive is Coronado for SEO?", answer: "Highly competitive for hospitality and dining. However, many local businesses still lack modern SEO, creating real opportunities." },
    { question: "Can SEO help compete with large hotel booking sites?", answer: "Yes! Local SEO and direct booking optimization can help Coronado hotels capture guests who prefer booking directly." },
    { question: "How long until I see results?", answer: "Most Coronado businesses see improvements within 65-85 days. Luxury markets have longer cycles but higher conversion values." },
  ],
  nearbyAreas: ["Downtown San Diego", "Imperial Beach", "Point Loma", "National City", "Chula Vista", "Harbor Island"],
};

const CoronadoSEO = () => <NeighborhoodLanding data={data} />;

export default CoronadoSEO;
