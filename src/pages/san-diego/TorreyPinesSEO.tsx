import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "torrey-pines-seo",
  name: "Torrey Pines",
  heroTitle: "Torrey Pines SEO Services – Elevate Your Coastal Business Online",
  heroDescription: "Premier SEO agency for Torrey Pines, San Diego businesses. We help biotech companies, resorts, golf courses, and professional services rank #1 on Google in this prestigious coastal area.",
  keywords: [
    "Torrey Pines SEO",
    "SEO services Torrey Pines",
    "Torrey Pines SEO company",
    "SEO agency Torrey Pines",
    "local SEO Torrey Pines",
    "Torrey Pines digital marketing",
    "biotech SEO San Diego",
    "Torrey Pines Google ranking",
    "golf course SEO",
    "Torrey Pines resort SEO",
    "Torrey Pines search optimization",
    "best SEO company Torrey Pines",
    "scientific SEO San Diego",
    "research company SEO",
    "coastal business SEO",
    "luxury SEO San Diego",
  ],
  stats: [
    { value: "295%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Biotech Agency" },
    { value: "80", label: "Days to Results" },
    { value: "40+", label: "Torrey Pines Clients" },
  ],
  services: [
    { title: "Biotech & Life Sciences SEO", description: "Specialized SEO for Torrey Pines biotech and pharmaceutical companies. Rank for industry terms, attract investors, and build online authority." },
    { title: "Golf & Resort SEO", description: "Help Torrey Pines golf courses and resorts dominate searches. Optimize for 'Torrey Pines golf,' tee times, and coastal resort keywords." },
    { title: "Professional Services SEO", description: "SEO for Torrey Pines law firms, financial advisors, and consultants serving the affluent community." },
    { title: "Research Institution SEO", description: "Help research organizations and scientific institutions in Torrey Pines build online visibility and attract talent." },
    { title: "Healthcare & Medical SEO", description: "SEO for Torrey Pines medical practices and healthcare providers in this life sciences hub." },
    { title: "Real Estate SEO", description: "Help Torrey Pines real estate agents rank for luxury coastal property searches." },
  ],
  faqs: [
    { question: "What makes Torrey Pines SEO unique?", answer: "Torrey Pines is home to major biotech and research companies alongside world-famous golf courses. SEO strategies must balance B2B scientific marketing with luxury tourism optimization." },
    { question: "Can you help biotech companies with SEO?", answer: "Absolutely! We specialize in technical B2B SEO for life sciences companies. We help you rank for industry keywords, attract investors, recruit talent, and build scientific authority online." },
    { question: "How competitive is Torrey Pines for SEO?", answer: "Torrey Pines is competitive in biotech but less so for local services. Golf and resort keywords face national competition from the famous courses." },
    { question: "How long does biotech SEO take?", answer: "B2B biotech SEO typically takes 90-120 days for significant results due to the technical nature and longer sales cycles. Local services see results faster, around 60-75 days." },
  ],
  nearbyAreas: ["La Jolla", "Del Mar", "University City", "Carmel Valley", "Sorrento Valley", "Pacific Beach"],
};

const TorreyPinesSEO = () => <NeighborhoodLanding data={data} />;

export default TorreyPinesSEO;
