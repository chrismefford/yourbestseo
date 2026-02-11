import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "rancho-penasquitos-seo",
  name: "Rancho Peñasquitos",
  heroTitle: "Rancho Peñasquitos SEO Services – Grow Your Suburban Business Online",
  heroDescription: "Expert SEO agency for Rancho Peñasquitos, San Diego businesses. We help restaurants, home services, healthcare providers, and family businesses rank #1 on Google in this established community.",
  keywords: [
    "Rancho Peñasquitos SEO", "SEO services Rancho Penasquitos", "Rancho Penasquitos SEO company",
    "SEO agency Rancho Penasquitos", "local SEO Rancho Penasquitos", "Rancho Penasquitos digital marketing",
    "PQ SEO", "Rancho Penasquitos Google ranking", "Black Mountain SEO",
    "Rancho Penasquitos search optimization", "best SEO company Rancho Penasquitos", "affordable SEO PQ",
    "suburban San Diego SEO", "family community SEO", "Rancho Penasquitos business marketing", "North inland SEO",
  ],
  stats: [
    { value: "252%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "PQ Agency" },
    { value: "55", label: "Days to Results" },
    { value: "45+", label: "PQ Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Rancho Peñasquitos searches. We optimize for this large suburban community and its shopping centers." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Rancho Penasquitos,' 'family dining PQ,' and local cuisine searches." },
    { title: "Home Services SEO", description: "SEO for PQ contractors, landscapers, pool services, and home improvement providers." },
    { title: "Healthcare & Dental SEO", description: "Help Rancho Peñasquitos medical and dental practices reach the large family population." },
    { title: "Education & Tutoring SEO", description: "SEO for tutoring centers and educational services in this top-rated school district." },
    { title: "Fitness & Recreation SEO", description: "Help PQ gyms, martial arts studios, and sports programs attract active families." },
  ],
  faqs: [
    { question: "Why is SEO important for PQ businesses?", answer: "Rancho Peñasquitos has a large population of families who search online for local services. SEO ensures your business is their first choice." },
    { question: "How competitive is Rancho Peñasquitos for SEO?", answer: "Moderate competition. The large population supports many businesses, but strategic SEO helps you stand out." },
    { question: "What makes PQ SEO different?", answer: "PQ has an established, family-focused community. SEO should emphasize reliability, family values, and convenience." },
    { question: "How long until I see results?", answer: "Most PQ businesses see significant improvements within 50-65 days." },
  ],
  nearbyAreas: ["Rancho Bernardo", "Scripps Ranch", "Carmel Mountain Ranch", "Mira Mesa", "Poway", "Sabre Springs"],
};

const RanchoPenasquitosSEO = () => <NeighborhoodLanding data={data} />;

export default RanchoPenasquitosSEO;
