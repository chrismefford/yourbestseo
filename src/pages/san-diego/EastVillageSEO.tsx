import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "east-village-seo",
  name: "East Village",
  heroTitle: "East Village SEO Services – Grow Your San Diego Business Online",
  heroDescription: "Award-winning SEO company serving East Village, San Diego. From Petco Park businesses to innovative startups, we help East Village companies rank higher on Google and generate more leads through organic search.",
  keywords: [
    "East Village SEO",
    "SEO services East Village San Diego",
    "East Village SEO company",
    "SEO agency East Village",
    "local SEO East Village",
    "East Village digital marketing",
    "Petco Park area SEO",
    "East Village Google ranking",
    "SEO consultant East Village",
    "startup SEO San Diego",
    "East Village search optimization",
    "best SEO company East Village",
    "East Village business marketing",
    "tech startup SEO San Diego",
    "East Village web marketing",
    "IDEA District SEO",
  ],
  stats: [
    { value: "295%", label: "Avg. Traffic Increase" },
    { value: "60+", label: "East Village Clients" },
    { value: "85", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "Startup & Tech SEO East Village", description: "SEO strategies for East Village startups and tech companies. We help innovative businesses rank for industry keywords and attract investors, partners, and customers." },
    { title: "Local SEO East Village", description: "Dominate East Village local searches with optimized Google Business Profiles, local citations, and neighborhood-specific content that drives foot traffic." },
    { title: "Sports & Entertainment SEO", description: "Capture Petco Park game day traffic. SEO for bars, restaurants, and businesses near the ballpark targeting Padres fans and event attendees." },
    { title: "Real Estate SEO East Village", description: "Rank for 'East Village condos,' 'lofts for sale East Village,' and San Diego urban living searches. SEO for real estate agents and property developers." },
    { title: "Brewery & Craft Beverage SEO", description: "Help your East Village brewery or taproom rank for craft beer searches, brewery tour keywords, and San Diego beer scene queries." },
    { title: "Creative Agency & Studio SEO", description: "SEO for East Village creative agencies, design studios, and marketing firms. Rank for B2B services and creative industry searches." },
  ],
  faqs: [
    { question: "Why is East Village good for SEO investment?", answer: "East Village is one of San Diego's fastest-growing neighborhoods. With Petco Park, the IDEA District, and a thriving startup scene, there's massive search demand. Investing in SEO now positions your business to capture this growing market." },
    { question: "How do you optimize for Petco Park searches?", answer: "We create content targeting game day searches, Padres-related keywords, and 'near Petco Park' queries. For restaurants and bars near the stadium, this can drive significant traffic during baseball season and concerts." },
    { question: "Can you help my East Village startup with SEO?", answer: "Absolutely. We specialize in startup SEO and understand the East Village tech scene. We'll help you rank for industry-specific keywords, build authority through content marketing, and generate leads from organic search—all while you focus on building your product." },
    { question: "What's the IDEA District and how does it affect SEO?", answer: "The Innovation, Design, Education, and Arts (IDEA) District is transforming East Village. We optimize for searches related to this development, creative industries, and the evolving East Village business landscape." },
  ],
  nearbyAreas: ["Downtown San Diego", "Gaslamp Quarter", "Marina District", "Barrio Logan", "Golden Hill", "Sherman Heights"],
};

const EastVillageSEO = () => <NeighborhoodLanding data={data} />;

export default EastVillageSEO;
