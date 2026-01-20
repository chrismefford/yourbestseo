import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "mira-mesa-seo",
  name: "Mira Mesa",
  heroTitle: "Mira Mesa SEO Services – Connect with San Diego's Largest Suburb",
  heroDescription: "Expert SEO agency for Mira Mesa, San Diego businesses. We help restaurants, retail stores, service providers, and tech companies rank #1 on Google in this diverse, growing community.",
  keywords: [
    "Mira Mesa SEO",
    "SEO services Mira Mesa",
    "Mira Mesa SEO company",
    "SEO agency Mira Mesa",
    "local SEO Mira Mesa",
    "Mira Mesa digital marketing",
    "Mira Mesa Boulevard SEO",
    "Mira Mesa Google ranking",
    "Filipino food SEO San Diego",
    "Asian cuisine SEO Mira Mesa",
    "Mira Mesa search optimization",
    "best SEO company Mira Mesa",
    "affordable SEO Mira Mesa",
    "tech company SEO Mira Mesa",
    "Sorrento Valley SEO",
    "diverse community SEO",
  ],
  stats: [
    { value: "275%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Suburban Agency" },
    { value: "65", label: "Days to Results" },
    { value: "70+", label: "Mira Mesa Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Mira Mesa local searches. We optimize for Mira Mesa Boulevard businesses and the surrounding residential community." },
    { title: "Asian Cuisine Restaurant SEO", description: "Mira Mesa is a foodie destination for Asian cuisine. Rank for Filipino, Vietnamese, Korean, and other Asian cuisine searches." },
    { title: "Tech Company SEO", description: "SEO for Mira Mesa and Sorrento Valley tech companies. Attract talent, generate leads, and build online authority." },
    { title: "Retail & Shopping SEO", description: "Help your Mira Mesa retail business stand out. Optimize for local shopping centers and product-specific searches." },
    { title: "Home Services SEO", description: "SEO for contractors, plumbers, HVAC, and service providers serving Mira Mesa's homeowner community." },
    { title: "Healthcare & Wellness SEO", description: "Help Mira Mesa medical practices, dentists, and wellness providers reach the diverse local community." },
  ],
  faqs: [
    { question: "What makes Mira Mesa SEO unique?", answer: "Mira Mesa is one of San Diego's largest and most diverse communities. SEO must account for the multicultural population, tech industry presence, and the family-oriented residential nature of the area." },
    { question: "Can you help my Asian restaurant rank higher?", answer: "Absolutely! Mira Mesa is known for authentic Asian cuisine. We optimize for specific cuisine keywords—Filipino, Vietnamese, Korean, Chinese—and help you compete in this competitive but rewarding market." },
    { question: "How do you approach SEO for tech companies?", answer: "Mira Mesa and adjacent Sorrento Valley have a significant tech presence. We create B2B SEO strategies targeting industry keywords, talent acquisition searches, and local business-to-business queries." },
    { question: "Is Mira Mesa competitive for local SEO?", answer: "Competition is moderate. Many Mira Mesa businesses rely on community presence without online optimization. This creates opportunities for businesses that invest in proper SEO." },
  ],
  nearbyAreas: ["Sorrento Valley", "Scripps Ranch", "Rancho Peñasquitos", "Kearny Mesa", "University City", "Poway"],
};

const MiraMesaSEO = () => <NeighborhoodLanding data={data} />;

export default MiraMesaSEO;
