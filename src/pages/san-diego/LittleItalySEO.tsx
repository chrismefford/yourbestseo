import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "little-italy-seo",
  name: "Little Italy",
  heroTitle: "Little Italy SEO Services – Get Found by More San Diego Customers",
  heroDescription: "Top-rated SEO agency serving Little Italy, San Diego. We help Italian restaurants, art galleries, boutiques, and local businesses in Little Italy rank #1 on Google and drive more foot traffic and online leads.",
  keywords: [
    "Little Italy SEO",
    "SEO services Little Italy San Diego",
    "Little Italy SEO company",
    "SEO agency Little Italy",
    "local SEO Little Italy",
    "Little Italy digital marketing",
    "Italian restaurant SEO San Diego",
    "Little Italy Google ranking",
    "SEO consultant Little Italy",
    "small business SEO Little Italy",
    "Little Italy search optimization",
    "best SEO company Little Italy San Diego",
    "Little Italy marketing agency",
    "restaurant SEO Little Italy",
    "art gallery SEO San Diego",
    "Little Italy business marketing",
  ],
  stats: [
    { value: "340%", label: "Avg. Traffic Increase" },
    { value: "45+", label: "Little Italy Clients" },
    { value: "75", label: "Days to Results" },
    { value: "4.9★", label: "Client Rating" },
  ],
  services: [
    { title: "Restaurant SEO Little Italy", description: "Dominate searches for Italian restaurants, pizzerias, cafes, and eateries in Little Italy. We optimize for cuisine-specific keywords and 'near me' searches." },
    { title: "Local SEO for Little Italy", description: "Complete local SEO package including Google Business Profile optimization, local citations, review management, and neighborhood-specific content." },
    { title: "Art Gallery & Creative SEO", description: "SEO strategies for Little Italy's thriving art scene. Help your gallery, studio, or creative business rank for art-related searches in San Diego." },
    { title: "Retail & Fashion SEO", description: "Drive foot traffic to your Little Italy boutique or retail store. Optimize for shopping keywords, local inventory, and San Diego fashion searches." },
    { title: "Farmers Market & Events SEO", description: "Capture traffic from Little Italy Mercato and event searches. Optimize for weekend activities, farmers market, and community event keywords." },
    { title: "Real Estate SEO Little Italy", description: "SEO for Little Italy real estate agents and property management. Rank for 'homes for sale Little Italy' and condo searches." },
  ],
  faqs: [
    { question: "How can SEO help my Little Italy restaurant?", answer: "SEO helps your restaurant appear in Google searches when people search for 'Italian restaurants San Diego,' 'best pizza Little Italy,' 'brunch Little Italy,' and similar queries. We've helped Little Italy restaurants increase reservations by 200%+ through organic search." },
    { question: "What's unique about Little Italy SEO?", answer: "Little Italy has a distinct character—it's a walkable, tourism-heavy neighborhood with strong local identity. We create content and optimize for searches that capture both tourist traffic and local residents, including Mercato searches, art walk events, and neighborhood-specific dining queries." },
    { question: "Do you work with Little Italy art galleries?", answer: "Yes! We specialize in SEO for creative businesses. We help Little Italy galleries rank for 'art galleries San Diego,' artist-specific searches, and art walk related keywords. Our gallery clients see significant increases in foot traffic and online inquiries." },
    { question: "How do I compete with chain restaurants in Little Italy?", answer: "Local SEO gives independent Little Italy businesses an advantage. We optimize for neighborhood-specific searches, build authentic local citations, generate reviews, and create content that highlights your unique story—things chains can't replicate." },
  ],
  nearbyAreas: ["Downtown San Diego", "Gaslamp Quarter", "Marina District", "Bankers Hill", "Middletown", "Waterfront"],
};

const LittleItalySEO = () => <NeighborhoodLanding data={data} />;

export default LittleItalySEO;
