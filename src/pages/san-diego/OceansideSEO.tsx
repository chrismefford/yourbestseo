import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "oceanside-seo",
  name: "Oceanside",
  heroTitle: "Oceanside SEO Services – Grow Your North County Beach City Business",
  heroDescription: "Expert SEO agency for Oceanside, California businesses. We help restaurants, surf shops, retailers, and service providers rank #1 on Google in this vibrant beach city.",
  keywords: [
    "Oceanside SEO", "SEO services Oceanside", "Oceanside SEO company",
    "SEO agency Oceanside", "local SEO Oceanside", "Oceanside digital marketing",
    "Oceanside California SEO", "Oceanside Google ranking", "Oceanside Pier SEO",
    "Camp Pendleton SEO", "Oceanside search optimization", "best SEO company Oceanside",
    "affordable SEO Oceanside", "North County beach SEO", "Oceanside Harbor SEO", "military community SEO",
  ],
  stats: [
    { value: "268%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Oceanside Agency" },
    { value: "55", label: "Days to Results" },
    { value: "55+", label: "Oceanside Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Oceanside searches. We optimize for downtown, the harbor, and the growing inland areas." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Oceanside,' 'pier dining,' and coastal food searches." },
    { title: "Surf & Beach SEO", description: "Help Oceanside surf shops, beach rentals, and coastal businesses attract visitors." },
    { title: "Military Community SEO", description: "SEO targeting Camp Pendleton families and military personnel searching for local services." },
    { title: "Real Estate SEO", description: "Help Oceanside real estate agents rank for affordable coastal property searches." },
    { title: "Healthcare & Dental SEO", description: "SEO for Oceanside medical and dental practices serving the large population." },
  ],
  faqs: [
    { question: "Why should Oceanside businesses invest in SEO?", answer: "Oceanside is San Diego County's third-largest city with a growing downtown. SEO captures the large local and tourist market." },
    { question: "How competitive is Oceanside for SEO?", answer: "Moderate competition. Oceanside's revitalization is bringing new businesses and increased search volume." },
    { question: "Can you help reach the military community?", answer: "Yes! We target military family keywords and Camp Pendleton-adjacent searches to reach this important market." },
    { question: "How long until I see results?", answer: "Most Oceanside businesses see significant improvements within 50-65 days." },
  ],
  nearbyAreas: ["Carlsbad", "Vista", "San Marcos", "Camp Pendleton", "Fallbrook", "Bonsall"],
};

const OceansideSEO = () => <NeighborhoodLanding data={data} />;

export default OceansideSEO;
