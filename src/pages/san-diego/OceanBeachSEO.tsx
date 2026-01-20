import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "ocean-beach-seo",
  name: "Ocean Beach",
  heroTitle: "Ocean Beach SEO Services – Authentic Marketing for OB Businesses",
  heroDescription: "Boutique SEO agency for Ocean Beach, San Diego businesses. We help OB's unique shops, restaurants, and service providers rank #1 on Google while preserving the authentic OB vibe.",
  keywords: [
    "Ocean Beach SEO",
    "SEO services Ocean Beach",
    "OB SEO company",
    "SEO agency Ocean Beach",
    "local SEO Ocean Beach",
    "Ocean Beach digital marketing",
    "Newport Avenue SEO",
    "OB Google ranking",
    "antique shop SEO San Diego",
    "Ocean Beach restaurant SEO",
    "surf SEO Ocean Beach",
    "OB search optimization",
    "best SEO company OB",
    "authentic business SEO",
    "Ocean Beach web marketing",
    "pet friendly business SEO",
  ],
  stats: [
    { value: "255%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "OB Local Agency" },
    { value: "65", label: "Days to Results" },
    { value: "40+", label: "OB Clients" },
  ],
  services: [
    { title: "Newport Avenue Business SEO", description: "Dominate searches for OB's main street. Help your antique shop, restaurant, or boutique rank for Newport Avenue and Ocean Beach keywords." },
    { title: "Restaurant & Cafe SEO", description: "SEO for Ocean Beach's eclectic dining scene. Rank for 'breakfast Ocean Beach,' 'vegetarian restaurant OB,' and local dining searches." },
    { title: "Surf & Beach Services SEO", description: "Help surf shops, surf schools, and beach rental businesses capture visitors searching for OB surf experiences." },
    { title: "Antique & Vintage Shop SEO", description: "OB is known for antiques. Rank for 'antique stores San Diego,' 'vintage furniture Ocean Beach,' and collectible searches." },
    { title: "Pet Business SEO", description: "OB is San Diego's most dog-friendly neighborhood. SEO for pet stores, groomers, dog-friendly businesses, and veterinarians." },
    { title: "Wellness & Alternative SEO", description: "Help OB's wellness practitioners, yoga studios, and alternative health providers reach their audience online." },
  ],
  faqs: [
    { question: "What makes Ocean Beach SEO unique?", answer: "OB has a distinct, authentic character that attracts specific customers. We create SEO strategies that capture OB's vibe while reaching people searching for unique, local experiences rather than chain alternatives." },
    { question: "Can you help my antique store rank higher?", answer: "Absolutely! We specialize in niche retail SEO. We'll optimize for 'antiques Ocean Beach,' specific collectible types, and capture treasure hunters searching for unique finds in OB." },
    { question: "How do I compete with chain restaurants?", answer: "Local SEO is your advantage. We help OB restaurants rank for 'local restaurants Ocean Beach,' specific cuisine searches, and attract customers specifically looking for authentic, non-chain dining experiences." },
    { question: "Is SEO worth it for small OB businesses?", answer: "Definitely. Many OB businesses thrive on foot traffic but miss online customers. Even modest SEO investment can significantly increase visibility for tourists planning OB visits and locals searching for specific services." },
  ],
  nearbyAreas: ["Point Loma", "Mission Beach", "Sunset Cliffs", "Liberty Station", "Loma Portal", "Midway District"],
};

const OceanBeachSEO = () => <NeighborhoodLanding data={data} />;

export default OceanBeachSEO;
