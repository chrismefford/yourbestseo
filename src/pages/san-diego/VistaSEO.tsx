import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "vista-seo",
  name: "Vista",
  heroTitle: "Vista SEO Services – Grow Your North County Business Online",
  heroDescription: "Expert SEO agency for Vista, California businesses. We help restaurants, breweries, retailers, and service providers rank #1 on Google in this growing North County city.",
  keywords: [
    "Vista SEO", "SEO services Vista", "Vista SEO company",
    "SEO agency Vista", "local SEO Vista", "Vista digital marketing",
    "Vista California SEO", "Vista Google ranking", "Main Street Vista SEO",
    "Vista search optimization", "best SEO company Vista", "affordable SEO Vista",
    "North County inland SEO", "Vista brewery SEO", "Vista business marketing", "Vista web marketing",
  ],
  stats: [
    { value: "252%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Vista Agency" },
    { value: "50", label: "Days to Results" },
    { value: "40+", label: "Vista Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Vista searches. We optimize for Main Street businesses and the broader Vista community." },
    { title: "Brewery & Craft Beer SEO", description: "Help Vista's thriving brewery scene rank for craft beer and tasting room searches." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Vista,' 'dining North County,' and local cuisine searches." },
    { title: "Home Services SEO", description: "SEO for Vista contractors, landscapers, and home improvement providers." },
    { title: "Healthcare & Dental SEO", description: "Help Vista medical and dental practices reach North County families." },
    { title: "Retail SEO", description: "Help Vista shops and retailers attract local customers." },
  ],
  faqs: [
    { question: "Why should Vista businesses invest in SEO?", answer: "Vista is growing rapidly with a revitalized downtown. SEO helps you capture the increasing search demand in this market." },
    { question: "How competitive is Vista for SEO?", answer: "Low to moderate competition. Many businesses haven't invested in SEO, creating first-mover advantages." },
    { question: "What makes Vista SEO different?", answer: "Vista's craft beer scene and agricultural heritage are unique. We target keywords that reflect the city's distinctive character." },
    { question: "How long until I see results?", answer: "Most Vista businesses see results within 45-60 days." },
  ],
  nearbyAreas: ["Oceanside", "San Marcos", "Carlsbad", "Escondido", "Bonsall", "Fallbrook"],
};

const VistaSEO = () => <NeighborhoodLanding data={data} />;

export default VistaSEO;
