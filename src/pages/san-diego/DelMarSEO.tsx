import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "del-mar-seo",
  name: "Del Mar",
  heroTitle: "Del Mar SEO Services – Luxury Marketing for Coastal Excellence",
  heroDescription: "Premier SEO agency for Del Mar, California businesses. We help luxury retailers, restaurants, real estate, and professional services rank #1 on Google in this prestigious coastal community.",
  keywords: [
    "Del Mar SEO",
    "SEO services Del Mar",
    "Del Mar SEO company",
    "SEO agency Del Mar",
    "local SEO Del Mar",
    "Del Mar digital marketing",
    "Del Mar California SEO",
    "Del Mar Google ranking",
    "Del Mar Plaza SEO",
    "luxury SEO North County",
    "Del Mar search optimization",
    "best SEO company Del Mar",
    "horse racing SEO",
    "Del Mar Racetrack SEO",
    "coastal luxury SEO",
    "affluent community SEO",
  ],
  stats: [
    { value: "298%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "North County Luxury Agency" },
    { value: "75", label: "Days to Results" },
    { value: "55+", label: "Del Mar Clients" },
  ],
  services: [
    { title: "Luxury Retail SEO", description: "Help Del Mar Plaza boutiques and luxury retailers rank. Attract affluent shoppers searching for premium products and experiences." },
    { title: "Fine Dining SEO", description: "Rank for 'restaurants Del Mar,' 'oceanfront dining,' and upscale cuisine searches in this prestigious coastal community." },
    { title: "Real Estate SEO", description: "Help Del Mar real estate agents dominate luxury property searches. Oceanfront homes and prestigious estates deserve premium visibility." },
    { title: "Professional Services SEO", description: "SEO for Del Mar financial advisors, attorneys, and consultants serving high-net-worth clients." },
    { title: "Event & Entertainment SEO", description: "Optimize for Del Mar Racetrack events, concerts at the Fairgrounds, and seasonal entertainment searches." },
    { title: "Wellness & Spa SEO", description: "Help Del Mar spas, wellness retreats, and luxury fitness facilities attract health-conscious affluent clients." },
  ],
  faqs: [
    { question: "What makes Del Mar SEO unique?", answer: "Del Mar is one of California's most affluent communities. SEO must convey luxury, exclusivity, and quality while targeting high-net-worth individuals searching for premium services." },
    { question: "How competitive is Del Mar for SEO?", answer: "Del Mar is competitive in luxury niches. However, many businesses rely on reputation without modern SEO, creating opportunities for those who invest in search visibility." },
    { question: "Can you help with seasonal racetrack traffic?", answer: "Absolutely! Del Mar sees huge visitor increases during racing season. We create strategies that maximize seasonal traffic while maintaining year-round local visibility." },
    { question: "How long until I see results?", answer: "Most Del Mar businesses see significant improvements within 70-90 days. Luxury markets often have longer consideration periods but higher conversion values." },
  ],
  nearbyAreas: ["Solana Beach", "Carmel Valley", "Torrey Pines", "La Jolla", "Rancho Santa Fe", "Encinitas"],
};

const DelMarSEO = () => <NeighborhoodLanding data={data} />;

export default DelMarSEO;
