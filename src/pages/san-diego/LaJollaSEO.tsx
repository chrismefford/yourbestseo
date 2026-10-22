import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "la-jolla-seo",
  name: "La Jolla",
  heroTitle: "La Jolla SEO Services",
  heroDescription: "We help La Jolla businesses get found on Google, Google Maps, and AI search — so customers find you before they find your competitors.",
  keywords: [
    "La Jolla SEO",
    "SEO services La Jolla",
    "La Jolla SEO company",
    "SEO agency La Jolla",
    "local SEO La Jolla",
    "La Jolla digital marketing",
    "La Jolla Google ranking",
    "real estate SEO La Jolla",
    "restaurant SEO La Jolla",
    "La Jolla search optimization",
    "best SEO company La Jolla",
    "La Jolla web marketing",
    "La Jolla Village SEO",
  ],
  stats: [
    { value: "Google", label: "Maps & Local Search" },
    { value: "AI", label: "ChatGPT & AI Answers" },
    { value: "Local", label: "La Jolla Focus" },
    { value: "San Diego", label: "Based & Operating" },
  ],
  services: [
    { title: "Real Estate SEO", description: "Get found for 'La Jolla homes for sale' and neighborhood searches like Bird Rock and Windansea." },
    { title: "Restaurant SEO", description: "Show up for 'restaurants La Jolla' and ocean-view dining searches." },
    { title: "Medical & Aesthetic SEO", description: "Help La Jolla medical and wellness practices reach patients searching locally." },
    { title: "Retail & Boutique SEO", description: "Rank for shoppers searching La Jolla Village stores and boutiques." },
    { title: "Professional Services SEO", description: "SEO for La Jolla law firms, financial advisors, and service businesses." },
    { title: "Hotel & Hospitality SEO", description: "Get found for 'La Jolla hotels' and beachfront accommodation searches." },
  ],
  faqs: [
    { question: "Why is SEO important for La Jolla businesses?", answer: "People research online before they visit or buy. If your business doesn't show up on Google and Maps, they choose someone who does." },
    { question: "How long does SEO take in La Jolla?", answer: "Most businesses see movement in 60–90 days, with meaningful results building over the first six months. We report on progress every month." },
    { question: "Can you help my La Jolla real estate business?", answer: "Yes. Real estate is one of our specialties — from 'La Jolla homes for sale' to specific neighborhoods like Bird Rock and Windansea." },
    { question: "Do you work with small La Jolla businesses?", answer: "Yes. Most of our clients are locally owned businesses, and our strategies are built around what actually brings them customers." },
  ],
  nearbyAreas: ["Bird Rock", "Pacific Beach", "University City", "UTC", "Del Mar", "Torrey Pines"],
};

const LaJollaSEO = () => <NeighborhoodLanding data={data} />;

export default LaJollaSEO;
