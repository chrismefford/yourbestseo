import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "city-heights-seo",
  name: "City Heights",
  heroTitle: "City Heights SEO Services – Grow Your Diverse Community Business",
  heroDescription: "Expert SEO agency for City Heights, San Diego businesses. We help restaurants, markets, salons, and local services rank higher on Google and connect with the vibrant multicultural community.",
  keywords: [
    "City Heights SEO",
    "SEO services City Heights San Diego",
    "City Heights SEO company",
    "SEO agency City Heights",
    "local SEO City Heights",
    "City Heights digital marketing",
    "City Heights Google ranking",
    "SEO consultant City Heights",
    "small business SEO City Heights",
    "City Heights search optimization",
    "best SEO company City Heights",
    "affordable SEO City Heights",
    "City Heights web marketing",
    "ethnic restaurant SEO San Diego",
    "market SEO City Heights",
    "multicultural business SEO",
  ],
  stats: [
    { value: "240%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Community Focus" },
    { value: "60", label: "Days to Results" },
    { value: "35+", label: "City Heights Clients" },
  ],
  services: [
    { title: "Local SEO for City Heights", description: "Dominate Google Maps and local search results for City Heights. Perfect for markets, restaurants, and service businesses serving this diverse community." },
    { title: "Multilingual SEO", description: "Reach customers searching in multiple languages. We optimize for Spanish, Vietnamese, Somali, and other languages spoken in City Heights." },
    { title: "Restaurant & Market SEO", description: "Specialized SEO for City Heights' incredible international food scene. Rank for ethnic cuisine searches and specialty grocery stores." },
    { title: "Service Business SEO", description: "SEO for City Heights auto shops, salons, repair services, and professional services. Capture local customers searching for services in the area." },
    { title: "Google Business Profile", description: "Complete optimization of your Google Business Profile to appear in local pack results and Google Maps for City Heights searches." },
    { title: "Affordable SEO Packages", description: "Budget-friendly SEO solutions designed for small businesses in City Heights. Enterprise results at accessible prices." },
  ],
  faqs: [
    { question: "Why is SEO important for City Heights businesses?", answer: "City Heights is a vibrant, diverse community with thousands of local businesses. SEO helps your business stand out when residents and visitors search for products and services in this multicultural neighborhood." },
    { question: "Do you offer multilingual SEO for City Heights?", answer: "Yes! We specialize in multilingual SEO to reach the diverse City Heights community. We optimize for searches in English, Spanish, Vietnamese, Arabic, Somali, and other languages commonly spoken in the area." },
    { question: "What results can City Heights businesses expect?", answer: "Our City Heights clients typically see 40-80% increases in organic traffic within 90 days, with significant improvements in Google Maps visibility and local search rankings." },
    { question: "How affordable is SEO for small businesses?", answer: "We offer flexible, affordable SEO packages designed specifically for small businesses in City Heights. Contact us for a custom quote that fits your budget and growth goals." },
  ],
  nearbyAreas: ["North Park", "Normal Heights", "Kensington", "University Heights", "El Cajon", "La Mesa"],
};

const CityHeightsSEO = () => <NeighborhoodLanding data={data} />;

export default CityHeightsSEO;
