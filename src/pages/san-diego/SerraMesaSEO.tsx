import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "serra-mesa-seo",
  name: "Serra Mesa",
  heroTitle: "Serra Mesa SEO Services – Grow Your Central San Diego Business",
  heroDescription: "Expert SEO agency for Serra Mesa, San Diego businesses. We help restaurants, medical offices, home services, and retailers rank #1 on Google in this centrally located neighborhood.",
  keywords: [
    "Serra Mesa SEO", "SEO services Serra Mesa", "Serra Mesa SEO company",
    "SEO agency Serra Mesa", "local SEO Serra Mesa", "Serra Mesa digital marketing",
    "Serra Mesa San Diego SEO", "Serra Mesa Google ranking", "Ruffin Road SEO",
    "Serra Mesa search optimization", "best SEO company Serra Mesa", "affordable SEO Serra Mesa",
    "central San Diego SEO", "Serra Mesa business marketing", "Serra Mesa web marketing", "medical office SEO San Diego",
  ],
  stats: [
    { value: "245%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Serra Mesa Agency" },
    { value: "50", label: "Days to Results" },
    { value: "30+", label: "Serra Mesa Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Serra Mesa searches. We optimize for this centrally located neighborhood with easy freeway access." },
    { title: "Medical & Healthcare SEO", description: "Serra Mesa has numerous medical offices. We help healthcare providers stand out in local health searches." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Serra Mesa,' 'lunch near Ruffin Road,' and local dining searches." },
    { title: "Home Services SEO", description: "SEO for Serra Mesa contractors, plumbers, and home service providers." },
    { title: "Retail SEO", description: "Help Serra Mesa retailers and shopping center businesses attract local customers." },
    { title: "Professional Services SEO", description: "SEO for Serra Mesa offices, insurance agencies, and professional services." },
  ],
  faqs: [
    { question: "Why should Serra Mesa businesses invest in SEO?", answer: "Serra Mesa's central location means businesses can attract customers from across San Diego. SEO helps you capture this wide-reaching demand." },
    { question: "How competitive is Serra Mesa for SEO?", answer: "Serra Mesa has low competition for most keywords. Many businesses rely on location alone without optimizing online." },
    { question: "What makes Serra Mesa SEO different?", answer: "Serra Mesa sits at the intersection of major freeways, attracting commuters. We target both neighborhood and commuter-intent keywords." },
    { question: "How long until I see results?", answer: "Most Serra Mesa businesses see significant improvements within 45-60 days." },
  ],
  nearbyAreas: ["Kearny Mesa", "Linda Vista", "Mission Valley", "Tierrasanta", "Grantville", "Allied Gardens"],
};

const SerraMesaSEO = () => <NeighborhoodLanding data={data} />;

export default SerraMesaSEO;
