import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "carlsbad-seo",
  name: "Carlsbad",
  heroTitle: "Carlsbad SEO Services – Grow Your North County Coastal Business",
  heroDescription: "Expert SEO agency for Carlsbad, California businesses. We help LEGOLAND-area businesses, restaurants, retailers, and professional services rank #1 on Google in this thriving coastal city.",
  keywords: [
    "Carlsbad SEO", "SEO services Carlsbad", "Carlsbad SEO company",
    "SEO agency Carlsbad", "local SEO Carlsbad", "Carlsbad digital marketing",
    "Carlsbad California SEO", "Carlsbad Google ranking", "LEGOLAND SEO",
    "Carlsbad Village SEO", "Carlsbad search optimization", "best SEO company Carlsbad",
    "Carlsbad Premium Outlets SEO", "flower fields SEO", "North County SEO", "Carlsbad web marketing",
  ],
  stats: [
    { value: "285%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Carlsbad Agency" },
    { value: "65", label: "Days to Results" },
    { value: "60+", label: "Carlsbad Clients" },
  ],
  services: [
    { title: "Tourism & Attractions SEO", description: "Help businesses near LEGOLAND, the Flower Fields, and Carlsbad Premium Outlets capture tourist traffic." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Carlsbad,' 'Carlsbad Village dining,' and coastal cuisine searches." },
    { title: "Hotel & Hospitality SEO", description: "SEO for Carlsbad hotels and resorts competing for family vacation and business travel searches." },
    { title: "Retail & Shopping SEO", description: "Help Carlsbad Village and outlet stores attract shoppers from across the region." },
    { title: "Tech & Business SEO", description: "SEO for Carlsbad tech companies and businesses in this growing innovation hub." },
    { title: "Healthcare & Wellness SEO", description: "Help Carlsbad medical practices and wellness businesses reach the coastal community." },
  ],
  faqs: [
    { question: "What makes Carlsbad SEO unique?", answer: "Carlsbad combines tourism (LEGOLAND, beaches) with a thriving tech economy. SEO must target both tourist and resident intent." },
    { question: "How competitive is Carlsbad for SEO?", answer: "Competitive for tourism and dining keywords. But strategic SEO can help you outrank larger competitors." },
    { question: "Can you help capture LEGOLAND tourist traffic?", answer: "Yes! We target family-intent keywords and tourist searches to drive visitors to your Carlsbad business." },
    { question: "How long until I see results?", answer: "Most Carlsbad businesses see significant improvements within 60-80 days." },
  ],
  nearbyAreas: ["Encinitas", "Oceanside", "Vista", "San Marcos", "Leucadia", "Solana Beach"],
};

const CarlsbadSEO = () => <NeighborhoodLanding data={data} />;

export default CarlsbadSEO;
