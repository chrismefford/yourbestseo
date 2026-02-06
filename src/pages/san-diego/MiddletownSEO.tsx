import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "middletown-seo",
  name: "Middletown",
  heroTitle: "Middletown SEO Services – Connect with San Diego's Central Hub",
  heroDescription: "Expert SEO agency for Middletown, San Diego businesses. We help restaurants, breweries, professional services, and retail shops rank #1 on Google in this dynamic urban neighborhood.",
  keywords: [
    "Middletown SEO",
    "SEO services Middletown",
    "Middletown SEO company",
    "SEO agency Middletown",
    "local SEO Middletown",
    "Middletown digital marketing",
    "Middletown San Diego SEO",
    "Middletown Google ranking",
    "India Street SEO",
    "Washington Street SEO",
    "Middletown search optimization",
    "best SEO company Middletown",
    "affordable SEO Middletown",
    "central San Diego SEO",
    "craft brewery SEO",
    "urban neighborhood SEO",
  ],
  stats: [
    { value: "262%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Central SD Agency" },
    { value: "55", label: "Days to Results" },
    { value: "40+", label: "Middletown Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Middletown searches. We optimize for India Street and Washington Street businesses in this central urban hub." },
    { title: "Brewery & Craft Beer SEO", description: "Middletown is part of San Diego's craft beer scene. Rank for brewery searches and attract craft beer enthusiasts." },
    { title: "Restaurant & Bar SEO", description: "Rank for 'restaurants Middletown,' 'bars near Little Italy,' and dining searches in this walkable neighborhood." },
    { title: "Professional Services SEO", description: "SEO for Middletown law offices, design firms, and professional services in this accessible central location." },
    { title: "Auto Services SEO", description: "Help Middletown auto repair shops and car services rank for local vehicle-related searches." },
    { title: "Retail & Shop SEO", description: "Help Middletown retail stores and specialty shops attract customers searching for unique products." },
  ],
  faqs: [
    { question: "What makes Middletown a good location for business?", answer: "Middletown is centrally located between downtown and uptown San Diego, with great highway access. SEO helps you capture customers from surrounding neighborhoods who search online for services." },
    { question: "How competitive is Middletown for SEO?", answer: "Middletown has moderate competition. Many businesses benefit from spillover searches from Little Italy and Hillcrest. Proper SEO helps you stand out." },
    { question: "Can you help my brewery rank higher?", answer: "Yes! San Diego's craft beer scene is competitive but we know the keywords and strategies to help Middletown breweries attract beer enthusiasts searching online." },
    { question: "How long until I see results?", answer: "Most Middletown businesses see significant improvements within 50-65 days. The central location means you can capture searches from multiple neighboring communities." },
  ],
  nearbyAreas: ["Little Italy", "Hillcrest", "Mission Hills", "Bankers Hill", "Downtown San Diego", "University Heights"],
};

const MiddletownSEO = () => <NeighborhoodLanding data={data} />;

export default MiddletownSEO;
