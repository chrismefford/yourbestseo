import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "san-carlos-seo",
  name: "San Carlos",
  heroTitle: "San Carlos SEO Services – Grow Your East County Business Online",
  heroDescription: "Expert SEO agency for San Carlos, San Diego businesses. We help restaurants, home services, and family businesses rank #1 on Google near Lake Murray and Mission Trails.",
  keywords: [
    "San Carlos SEO", "SEO services San Carlos", "San Carlos SEO company",
    "SEO agency San Carlos", "local SEO San Carlos", "San Carlos digital marketing",
    "San Carlos San Diego SEO", "San Carlos Google ranking", "Lake Murray SEO",
    "San Carlos search optimization", "best SEO company San Carlos", "affordable SEO San Carlos",
    "East County San Diego SEO", "Lake Murray business SEO", "San Carlos web marketing", "family community SEO",
  ],
  stats: [
    { value: "245%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "San Carlos Agency" },
    { value: "50", label: "Days to Results" },
    { value: "30+", label: "San Carlos Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate San Carlos searches. We optimize for this family-friendly community near Lake Murray." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants San Carlos,' 'dining near Lake Murray,' and local food searches." },
    { title: "Home Services SEO", description: "SEO for San Carlos contractors, landscapers, and home improvement providers." },
    { title: "Healthcare & Dental SEO", description: "Help San Carlos medical and dental practices reach local families." },
    { title: "Outdoor & Recreation SEO", description: "SEO for businesses near Lake Murray and Mission Trails serving outdoor enthusiasts." },
    { title: "Retail SEO", description: "Help San Carlos retailers attract neighborhood customers." },
  ],
  faqs: [
    { question: "Why should San Carlos businesses invest in SEO?", answer: "San Carlos residents search online for local services regularly. SEO puts your business at the top when they need you." },
    { question: "How competitive is San Carlos for SEO?", answer: "Low competition. Many businesses haven't optimized online, creating easy wins for SEO-savvy businesses." },
    { question: "What makes San Carlos SEO different?", answer: "San Carlos is centered around Lake Murray and outdoor living. We target recreation and family-oriented keywords." },
    { question: "How long until I see results?", answer: "Most San Carlos businesses see results within 45-55 days." },
  ],
  nearbyAreas: ["Allied Gardens", "Del Cerro", "La Mesa", "Tierrasanta", "College Area", "Santee"],
};

const SanCarlosSEO = () => <NeighborhoodLanding data={data} />;

export default SanCarlosSEO;
