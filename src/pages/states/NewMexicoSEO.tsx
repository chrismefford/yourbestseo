import StateLanding from "@/components/StateLanding";

const data = {
  name: "New Mexico",
  heroTitle: "New Mexico SEO Services – Grow Your Southwest Business",
  heroDescription: "Award-winning SEO agency serving New Mexico businesses from Albuquerque to Santa Fe. We help New Mexico companies rank higher and generate more leads.",
  cities: ["Albuquerque", "Santa Fe", "Las Cruces", "Rio Rancho", "Roswell", "Los Alamos", "Farmington", "Taos", "Clovis", "Carlsbad"],
  keywords: [
    "New Mexico SEO",
    "SEO services New Mexico",
    "New Mexico SEO company",
    "SEO agency New Mexico",
    "Albuquerque SEO",
    "Santa Fe SEO",
    "Las Cruces SEO",
    "New Mexico digital marketing",
    "government contractor SEO",
    "tourism SEO New Mexico",
    "healthcare SEO New Mexico",
    "local SEO New Mexico",
  ],
  stats: [
    { value: "+171%", label: "Gov Pipeline" },
    { value: "40+", label: "NM Clients Served" },
    { value: "90", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "Government Contractor SEO", description: "Help New Mexico contractors rank for government and defense-related keywords near Los Alamos and Sandia." },
    { title: "Tourism SEO New Mexico", description: "Help Santa Fe, Taos, and New Mexico tourism businesses capture travel search traffic." },
    { title: "Healthcare SEO New Mexico", description: "Help New Mexico healthcare providers rank for medical searches statewide." },
    { title: "Local SEO New Mexico", description: "Dominate local search in Albuquerque, Santa Fe, Las Cruces, and across New Mexico." },
    { title: "Arts & Culture SEO", description: "Help New Mexico galleries, artists, and cultural institutions reach collectors and visitors." },
    { title: "Energy Sector SEO", description: "Specialized SEO for New Mexico's oil, gas, and renewable energy companies." },
  ],
  faqs: [
    { question: "What industries do you serve in New Mexico?", answer: "We serve New Mexico's key industries including government contracting, tourism, healthcare, arts & culture, and energy. We understand the unique New Mexico market." },
    { question: "Do you help government contractors with SEO?", answer: "Yes! We help New Mexico companies near Los Alamos and Sandia National Labs rank for government and defense contracting keywords." },
    { question: "Can you help Santa Fe tourism businesses?", answer: "Absolutely. We help Santa Fe galleries, hotels, restaurants, and tour companies capture art tourism and travel search traffic." },
  ],
  industries: ["Government Contracting", "Tourism", "Healthcare", "Arts & Culture", "Energy", "Research & Labs"],
};

const NewMexicoSEO = () => <StateLanding data={data} />;

export default NewMexicoSEO;
