import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "solana-beach-seo",
  name: "Solana Beach",
  heroTitle: "Solana Beach SEO Services – Elevate Your Coastal Business Online",
  heroDescription: "Expert SEO agency for Solana Beach, California businesses. We help restaurants, boutiques, and professional services rank #1 on Google in this upscale North County coastal city.",
  keywords: [
    "Solana Beach SEO", "SEO services Solana Beach", "Solana Beach SEO company",
    "SEO agency Solana Beach", "local SEO Solana Beach", "Solana Beach digital marketing",
    "Solana Beach California SEO", "Solana Beach Google ranking", "Cedros Design District SEO",
    "Solana Beach search optimization", "best SEO company Solana Beach", "coastal city SEO",
    "Cedros Avenue SEO", "Belly Up SEO", "North County coastal SEO", "Solana Beach web marketing",
  ],
  stats: [
    { value: "275%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Solana Beach Agency" },
    { value: "60", label: "Days to Results" },
    { value: "35+", label: "Solana Beach Clients" },
  ],
  services: [
    { title: "Design District SEO", description: "Help Cedros Design District galleries, furniture stores, and design businesses attract customers from across the county." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Solana Beach,' 'coastal dining North County,' and upscale food searches." },
    { title: "Entertainment Venue SEO", description: "SEO for Solana Beach music venues, bars, and entertainment businesses like the Belly Up." },
    { title: "Real Estate SEO", description: "Help Solana Beach real estate agents rank for coastal property searches." },
    { title: "Boutique & Retail SEO", description: "SEO for Solana Beach boutiques, surf shops, and specialty retailers." },
    { title: "Professional Services SEO", description: "Help Solana Beach professionals reach affluent coastal clients." },
  ],
  faqs: [
    { question: "What makes Solana Beach SEO unique?", answer: "Solana Beach combines upscale coastal living with the Cedros Design District. SEO must target both design-savvy shoppers and lifestyle searchers." },
    { question: "How competitive is Solana Beach for SEO?", answer: "Moderate competition. The small city has high-quality businesses but many lack modern SEO optimization." },
    { question: "Can you help Cedros Design District businesses?", answer: "Absolutely! We specialize in helping design, art, and home furnishing businesses rank for interior design and shopping searches." },
    { question: "How long until I see results?", answer: "Most Solana Beach businesses see significant improvements within 55-70 days." },
  ],
  nearbyAreas: ["Del Mar", "Encinitas", "Rancho Santa Fe", "Cardiff-by-the-Sea", "Carmel Valley", "Leucadia"],
};

const SolanaBeachSEO = () => <NeighborhoodLanding data={data} />;

export default SolanaBeachSEO;
