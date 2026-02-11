import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "poway-seo",
  name: "Poway",
  heroTitle: "Poway SEO Services – Grow Your City in the Country Business",
  heroDescription: "Expert SEO agency for Poway, California businesses. We help restaurants, retailers, home services, and family businesses rank #1 on Google in this charming suburban city.",
  keywords: [
    "Poway SEO", "SEO services Poway", "Poway SEO company",
    "SEO agency Poway", "local SEO Poway", "Poway digital marketing",
    "Poway California SEO", "Poway Google ranking", "City in the Country SEO",
    "Poway search optimization", "best SEO company Poway", "affordable SEO Poway",
    "North County inland SEO", "Poway Road SEO", "Lake Poway SEO", "suburban city SEO",
  ],
  stats: [
    { value: "258%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Poway Agency" },
    { value: "55", label: "Days to Results" },
    { value: "45+", label: "Poway Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Poway searches. We optimize for this family-friendly 'City in the Country' with strong community ties." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Poway,' 'family dining Poway Road,' and local cuisine searches." },
    { title: "Home Services SEO", description: "SEO for Poway contractors, landscapers, and home service providers serving suburban homeowners." },
    { title: "Healthcare & Dental SEO", description: "Help Poway medical and dental practices reach families in this health-conscious community." },
    { title: "Equestrian & Outdoor SEO", description: "SEO for Poway equestrian centers, hiking guides, and outdoor recreation businesses." },
    { title: "Education & Tutoring SEO", description: "Help Poway tutoring and educational services reach families in this top school district." },
  ],
  faqs: [
    { question: "Why should Poway businesses invest in SEO?", answer: "Poway families actively search online for local services. SEO ensures your business appears when they need a trusted provider." },
    { question: "How competitive is Poway for SEO?", answer: "Moderate competition. Poway's growing population and strong economy support many businesses." },
    { question: "What makes Poway SEO different?", answer: "Poway values its 'City in the Country' identity. SEO should emphasize community, family values, and outdoor lifestyle." },
    { question: "How long until I see results?", answer: "Most Poway businesses see significant improvements within 50-65 days." },
  ],
  nearbyAreas: ["Rancho Bernardo", "Scripps Ranch", "Rancho Peñasquitos", "Ramona", "Sabre Springs", "Mira Mesa"],
};

const PowaySEO = () => <NeighborhoodLanding data={data} />;

export default PowaySEO;
