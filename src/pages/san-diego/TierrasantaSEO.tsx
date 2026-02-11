import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "tierrasanta-seo",
  name: "Tierrasanta",
  heroTitle: "Tierrasanta SEO Services – Connect with San Diego's Hidden Gem Community",
  heroDescription: "Expert SEO agency for Tierrasanta, San Diego businesses. We help restaurants, fitness centers, home services, and family businesses rank #1 on Google in this suburban oasis.",
  keywords: [
    "Tierrasanta SEO", "SEO services Tierrasanta", "Tierrasanta SEO company",
    "SEO agency Tierrasanta", "local SEO Tierrasanta", "Tierrasanta digital marketing",
    "Tierrasanta San Diego SEO", "Tierrasanta Google ranking", "Mission Trails SEO",
    "Tierrasanta search optimization", "best SEO company Tierrasanta", "affordable SEO Tierrasanta",
    "suburban San Diego SEO", "family community SEO", "Tierrasanta business marketing", "hidden gem neighborhood SEO",
  ],
  stats: [
    { value: "242%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Tierrasanta Agency" },
    { value: "50", label: "Days to Results" },
    { value: "30+", label: "Tierrasanta Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Tierrasanta searches. We optimize for this self-contained community near Mission Trails Regional Park." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Tierrasanta,' 'family dining near Mission Trails,' and local food searches." },
    { title: "Fitness & Outdoor SEO", description: "Help Tierrasanta gyms, hiking guides, and outdoor recreation businesses attract active residents." },
    { title: "Home Services SEO", description: "SEO for Tierrasanta contractors, landscapers, and home service providers." },
    { title: "Healthcare & Dental SEO", description: "Help Tierrasanta medical and dental practices reach families in this close-knit community." },
    { title: "Pet Services SEO", description: "SEO for Tierrasanta pet groomers, veterinarians, and pet services serving this pet-friendly community." },
  ],
  faqs: [
    { question: "Why should Tierrasanta businesses invest in SEO?", answer: "Tierrasanta is a self-contained community where residents prefer local businesses. SEO ensures you're visible when neighbors search online." },
    { question: "How competitive is Tierrasanta for SEO?", answer: "Tierrasanta has low competition. Few businesses have invested in SEO, making it easy to dominate local search results." },
    { question: "What makes Tierrasanta SEO different?", answer: "Tierrasanta is isolated geographically, so residents strongly prefer nearby businesses. Hyper-local SEO is extremely effective here." },
    { question: "How long until I see results?", answer: "Most Tierrasanta businesses see results within 40-55 days due to low competition." },
  ],
  nearbyAreas: ["Serra Mesa", "Allied Gardens", "San Carlos", "Scripps Ranch", "Santee", "Mission Trails"],
};

const TierrasantaSEO = () => <NeighborhoodLanding data={data} />;

export default TierrasantaSEO;
