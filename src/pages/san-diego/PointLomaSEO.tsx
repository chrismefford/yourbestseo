import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "point-loma-seo",
  name: "Point Loma",
  heroTitle: "Point Loma SEO Services – Coastal Excellence in Digital Marketing",
  heroDescription: "Premier SEO agency for Point Loma, San Diego businesses. We help marinas, seafood restaurants, military-adjacent businesses, and coastal services rank #1 on Google in this historic peninsula community.",
  keywords: [
    "Point Loma SEO",
    "SEO services Point Loma",
    "Point Loma SEO company",
    "SEO agency Point Loma",
    "local SEO Point Loma",
    "Point Loma digital marketing",
    "Liberty Station SEO",
    "Shelter Island SEO",
    "Point Loma Google ranking",
    "marina SEO San Diego",
    "seafood restaurant SEO",
    "Point Loma search optimization",
    "best SEO company Point Loma",
    "military SEO San Diego",
    "yacht club SEO",
    "coastal business SEO",
  ],
  stats: [
    { value: "272%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Peninsula Agency" },
    { value: "75", label: "Days to Results" },
    { value: "55+", label: "Point Loma Clients" },
  ],
  services: [
    { title: "Marina & Yacht Services SEO", description: "Dominate searches for Shelter Island and Point Loma marina services. Rank for boat repair, yacht sales, sailing charters, and maritime services." },
    { title: "Seafood & Waterfront Dining SEO", description: "Help Point Loma's famous seafood restaurants rank. Optimize for 'seafood Point Loma,' 'waterfront dining San Diego,' and fresh catch searches." },
    { title: "Liberty Station Business SEO", description: "SEO for the thriving Liberty Station business community. Rank for shopping, dining, and entertainment searches in this popular destination." },
    { title: "Sportfishing & Charter SEO", description: "Point Loma is the sportfishing capital. Help your charter business rank for deep sea fishing, whale watching, and harbor cruise searches." },
    { title: "Military & Defense SEO", description: "SEO for businesses serving the Point Loma military community. Reach military families and defense contractors online." },
    { title: "Real Estate SEO", description: "Point Loma real estate is premium. Help agents rank for 'Point Loma homes,' 'Sunset Cliffs real estate,' and coastal property searches." },
  ],
  faqs: [
    { question: "How can marina businesses benefit from SEO?", answer: "Many boat owners research online before choosing marina services. SEO helps you rank for 'boat repair San Diego,' 'yacht storage Point Loma,' and capture customers before they call competitors." },
    { question: "What about sportfishing charter SEO?", answer: "Point Loma's sportfishing industry is competitive but underoptimized online. We help charters rank for 'deep sea fishing San Diego,' specific fish species, and capture tourists planning fishing trips." },
    { question: "Is Liberty Station SEO different?", answer: "Liberty Station has unique search patterns as a destination. We optimize for both the general Liberty Station searches and specific business category keywords to capture visitors planning trips." },
    { question: "How do you approach seafood restaurant SEO?", answer: "Point Loma seafood restaurants compete with the whole bay area. We focus on 'Point Loma' specific keywords, 'waterfront dining' searches, and help you stand out with menu optimization and review strategies." },
  ],
  nearbyAreas: ["Ocean Beach", "Shelter Island", "Harbor Island", "Liberty Station", "Sunset Cliffs", "Loma Portal"],
};

const PointLomaSEO = () => <NeighborhoodLanding data={data} />;

export default PointLomaSEO;
