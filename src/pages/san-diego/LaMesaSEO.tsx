import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "la-mesa-seo",
  name: "La Mesa",
  heroTitle: "La Mesa SEO Services – Grow Your Jewel of the Hills Business",
  heroDescription: "Expert SEO agency for La Mesa, California businesses. We help restaurants, retailers, and service providers rank #1 on Google in this charming East County city.",
  keywords: [
    "La Mesa SEO", "SEO services La Mesa", "La Mesa SEO company",
    "SEO agency La Mesa", "local SEO La Mesa", "La Mesa digital marketing",
    "La Mesa California SEO", "La Mesa Google ranking", "La Mesa Village SEO",
    "La Mesa Boulevard SEO", "La Mesa search optimization", "best SEO company La Mesa",
    "affordable SEO La Mesa", "East County SEO", "Jewel of the Hills SEO", "La Mesa web marketing",
  ],
  stats: [
    { value: "260%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "La Mesa Agency" },
    { value: "55", label: "Days to Results" },
    { value: "50+", label: "La Mesa Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate La Mesa searches. We optimize for the Village, downtown, and surrounding residential areas." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants La Mesa,' 'La Mesa Village dining,' and craft beer searches." },
    { title: "Retail & Antique SEO", description: "Help La Mesa Village antique shops, boutiques, and specialty retailers attract customers." },
    { title: "Home Services SEO", description: "SEO for La Mesa contractors, landscapers, and home service providers." },
    { title: "Healthcare & Dental SEO", description: "Help La Mesa medical and dental practices reach East County families." },
    { title: "Auto Services SEO", description: "SEO for La Mesa auto dealers and repair shops along the Boulevard." },
  ],
  faqs: [
    { question: "Why should La Mesa businesses invest in SEO?", answer: "La Mesa is a growing East County hub. SEO helps you capture searches from both residents and visitors exploring the Village." },
    { question: "How competitive is La Mesa for SEO?", answer: "Moderate competition. The growing food and entertainment scene is increasing search volume." },
    { question: "What makes La Mesa SEO different?", answer: "La Mesa Village has a unique, walkable downtown. We target village-specific and event-related keywords that drive foot traffic." },
    { question: "How long until I see results?", answer: "Most La Mesa businesses see significant improvements within 50-65 days." },
  ],
  nearbyAreas: ["El Cajon", "Lemon Grove", "Spring Valley", "San Carlos", "College Area", "Santee"],
};

const LaMesaSEO = () => <NeighborhoodLanding data={data} />;

export default LaMesaSEO;
