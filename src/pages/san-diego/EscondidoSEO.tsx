import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "escondido-seo",
  name: "Escondido",
  heroTitle: "Escondido SEO Services – Grow Your Inland North County Business",
  heroDescription: "Expert SEO agency for Escondido, California businesses. We help restaurants, retailers, breweries, and service providers rank #1 on Google in this growing inland city.",
  keywords: [
    "Escondido SEO", "SEO services Escondido", "Escondido SEO company",
    "SEO agency Escondido", "local SEO Escondido", "Escondido digital marketing",
    "Escondido California SEO", "Escondido Google ranking", "Grand Avenue Escondido SEO",
    "San Diego Zoo Safari Park SEO", "Escondido search optimization", "best SEO company Escondido",
    "affordable SEO Escondido", "North County inland SEO", "Escondido brewery SEO", "craft beer Escondido SEO",
  ],
  stats: [
    { value: "262%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Escondido Agency" },
    { value: "55", label: "Days to Results" },
    { value: "50+", label: "Escondido Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Escondido searches. We optimize for downtown Grand Avenue, auto parks, and surrounding areas." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Escondido,' 'Grand Avenue dining,' and local cuisine searches." },
    { title: "Brewery & Craft Beer SEO", description: "Help Escondido's growing craft beer scene rank for brewery searches and tasting room visits." },
    { title: "Tourism & Attractions SEO", description: "SEO for businesses near the San Diego Zoo Safari Park and other Escondido attractions." },
    { title: "Auto Dealer SEO", description: "Help Escondido auto dealers and the auto park rank for vehicle buying searches." },
    { title: "Healthcare & Dental SEO", description: "SEO for Escondido medical and dental practices serving this large inland population." },
  ],
  faqs: [
    { question: "Why should Escondido businesses invest in SEO?", answer: "Escondido is San Diego County's second-largest inland city. Its growing downtown and tourism sector create significant SEO opportunities." },
    { question: "How competitive is Escondido for SEO?", answer: "Moderate competition. The revitalized Grand Avenue is bringing new businesses and increased search interest." },
    { question: "Can SEO help attract Safari Park visitors?", answer: "Yes! We target tourist-intent keywords to drive Safari Park visitors to your Escondido restaurant, hotel, or shop." },
    { question: "How long until I see results?", answer: "Most Escondido businesses see significant improvements within 50-65 days." },
  ],
  nearbyAreas: ["San Marcos", "Vista", "Rancho Bernardo", "Poway", "Valley Center", "Fallbrook"],
};

const EscondidoSEO = () => <NeighborhoodLanding data={data} />;

export default EscondidoSEO;
