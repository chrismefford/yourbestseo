import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "kensington-seo",
  name: "Kensington",
  heroTitle: "Kensington SEO Services – Grow Your Historic Village Business",
  heroDescription: "Premier SEO agency for Kensington, San Diego businesses. We help restaurants, boutiques, antique shops, and local services rank #1 on Google in this charming historic neighborhood.",
  keywords: [
    "Kensington SEO",
    "SEO services Kensington San Diego",
    "Kensington SEO company",
    "SEO agency Kensington",
    "local SEO Kensington",
    "Kensington digital marketing",
    "Kensington Google ranking",
    "SEO consultant Kensington",
    "small business SEO Kensington",
    "Kensington search optimization",
    "best SEO company Kensington",
    "affordable SEO Kensington",
    "Kensington web marketing",
    "antique shop SEO San Diego",
    "boutique SEO Kensington",
    "restaurant SEO Kensington",
  ],
  stats: [
    { value: "270%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Village Experts" },
    { value: "65", label: "Days to Results" },
    { value: "25+", label: "Kensington Clients" },
  ],
  services: [
    { title: "Local SEO for Kensington", description: "Dominate Google Maps and local search results for Kensington Village. Perfect for the unique boutiques, cafes, and specialty shops along Adams Avenue." },
    { title: "Restaurant & Cafe SEO", description: "Specialized SEO for Kensington's beloved dining establishments. Rank for 'best restaurants Kensington,' 'cafes near me,' and cuisine-specific searches." },
    { title: "Retail & Antique SEO", description: "Help your Kensington shop stand out online. We optimize for 'antique stores Kensington,' 'vintage shops San Diego,' and collectible searches." },
    { title: "Professional Services SEO", description: "SEO for Kensington's professional services, wellness practitioners, and specialty businesses. Capture high-intent local searches." },
    { title: "Content Marketing", description: "Create engaging content that highlights Kensington's unique character and history while driving organic traffic to your business." },
    { title: "Review Management", description: "Build and manage your online reputation with strategic review generation and response strategies." },
  ],
  faqs: [
    { question: "Why is SEO important for Kensington businesses?", answer: "Kensington is a charming historic neighborhood with a loyal local customer base. SEO helps your business attract both residents and visitors searching for the unique shops and services this village offers." },
    { question: "How do you approach SEO for Kensington's unique businesses?", answer: "We focus on hyper-local keywords, Google Business Profile optimization, and content that highlights what makes Kensington special. We help you rank for neighborhood-specific searches and 'best of' queries." },
    { question: "What results can Kensington businesses expect?", answer: "Our Kensington clients typically see 50-90% increases in organic traffic within 90 days, with strong improvements in local visibility and Google Maps rankings for village searches." },
    { question: "Do you work with antique and vintage shops?", answer: "Yes! We've helped several Kensington antique shops rank for searches like 'antiques Kensington San Diego,' 'vintage furniture near me,' and specific collectible searches." },
  ],
  nearbyAreas: ["Normal Heights", "City Heights", "Talmadge", "North Park", "University Heights", "El Cajon"],
};

const KensingtonSEO = () => <NeighborhoodLanding data={data} />;

export default KensingtonSEO;
