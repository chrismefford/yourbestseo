import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "encinitas-seo",
  name: "Encinitas",
  heroTitle: "Encinitas SEO Services – Grow Your Coastal Community Business",
  heroDescription: "Expert SEO agency for Encinitas, California businesses. We help surf shops, restaurants, yoga studios, and local businesses rank #1 on Google in this beloved beach town.",
  keywords: [
    "Encinitas SEO", "SEO services Encinitas", "Encinitas SEO company",
    "SEO agency Encinitas", "local SEO Encinitas", "Encinitas digital marketing",
    "Encinitas California SEO", "Encinitas Google ranking", "Coast Highway 101 SEO",
    "Encinitas search optimization", "best SEO company Encinitas", "surf shop SEO",
    "Leucadia SEO", "Cardiff SEO", "yoga studio SEO Encinitas", "North County coastal SEO",
  ],
  stats: [
    { value: "278%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Encinitas Agency" },
    { value: "65", label: "Days to Results" },
    { value: "50+", label: "Encinitas Clients" },
  ],
  services: [
    { title: "Surf & Beach Business SEO", description: "Help Encinitas surf shops, board rentals, and beach businesses rank for coastal lifestyle searches." },
    { title: "Restaurant & Cafe SEO", description: "Rank for 'restaurants Encinitas,' 'Leucadia cafes,' 'Cardiff dining,' and coastal food searches." },
    { title: "Yoga & Wellness SEO", description: "Encinitas is the yoga capital of the US. We help studios and wellness businesses dominate health searches." },
    { title: "Retail & Boutique SEO", description: "Help Coast Highway 101 boutiques and shops attract tourists and locals." },
    { title: "Real Estate SEO", description: "SEO for Encinitas real estate agents selling coastal properties." },
    { title: "Professional Services SEO", description: "Help Encinitas professionals reach clients in this affluent coastal community." },
  ],
  faqs: [
    { question: "What makes Encinitas SEO unique?", answer: "Encinitas has a strong surf and wellness culture. SEO must capture lifestyle keywords and the laid-back coastal brand that defines the community." },
    { question: "How competitive is Encinitas for SEO?", answer: "Moderately competitive for yoga, dining, and real estate. But many businesses rely on foot traffic without SEO optimization." },
    { question: "Can you help businesses in Leucadia and Cardiff?", answer: "Yes! We optimize for all Encinitas communities including Leucadia, Cardiff-by-the-Sea, and Old Encinitas." },
    { question: "How long until I see results?", answer: "Most Encinitas businesses see significant improvements within 60-75 days." },
  ],
  nearbyAreas: ["Solana Beach", "Carlsbad", "Del Mar", "Leucadia", "Cardiff-by-the-Sea", "Rancho Santa Fe"],
};

const EncinitasSEO = () => <NeighborhoodLanding data={data} />;

export default EncinitasSEO;
