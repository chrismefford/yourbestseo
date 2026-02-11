import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "allied-gardens-seo",
  name: "Allied Gardens",
  heroTitle: "Allied Gardens SEO Services – Grow Your East San Diego Business",
  heroDescription: "Expert SEO agency for Allied Gardens, San Diego businesses. We help restaurants, home services, and family businesses rank #1 on Google in this established residential community.",
  keywords: [
    "Allied Gardens SEO", "SEO services Allied Gardens", "Allied Gardens SEO company",
    "SEO agency Allied Gardens", "local SEO Allied Gardens", "Allied Gardens digital marketing",
    "Allied Gardens San Diego SEO", "Allied Gardens Google ranking", "Waring Road SEO",
    "Allied Gardens search optimization", "best SEO company Allied Gardens", "affordable SEO Allied Gardens",
    "East San Diego SEO", "residential community SEO", "Allied Gardens business marketing", "family neighborhood SEO",
  ],
  stats: [
    { value: "240%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Allied Gardens Agency" },
    { value: "50", label: "Days to Results" },
    { value: "25+", label: "Allied Gardens Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Allied Gardens searches. We optimize for this established residential community near Mission Trails." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Allied Gardens,' 'dining near Mission Trails,' and local food searches." },
    { title: "Home Services SEO", description: "SEO for Allied Gardens contractors, plumbers, landscapers, and home improvement providers." },
    { title: "Healthcare & Dental SEO", description: "Help Allied Gardens medical and dental practices reach local families." },
    { title: "Fitness & Recreation SEO", description: "SEO for Allied Gardens gyms, yoga studios, and outdoor recreation businesses." },
    { title: "Pet Services SEO", description: "Help Allied Gardens veterinarians, groomers, and pet services reach pet-loving residents." },
  ],
  faqs: [
    { question: "Why should Allied Gardens businesses invest in SEO?", answer: "Allied Gardens residents value local, trusted businesses. SEO ensures yours is the first they find when searching for services." },
    { question: "How competitive is Allied Gardens for SEO?", answer: "Very low competition. Most businesses rely on referrals without online optimization." },
    { question: "What makes Allied Gardens SEO different?", answer: "Allied Gardens is a quiet, family-focused neighborhood. SEO emphasizes trust, community roots, and proximity to Mission Trails." },
    { question: "How long until I see results?", answer: "Most Allied Gardens businesses see results within 40-55 days." },
  ],
  nearbyAreas: ["Talmadge", "San Carlos", "Tierrasanta", "College Area", "Serra Mesa", "Del Cerro"],
};

const AlliedGardensSEO = () => <NeighborhoodLanding data={data} />;

export default AlliedGardensSEO;
