import StateLanding from "@/components/StateLanding";

const data = {
  name: "Nevada",
  heroTitle: "Nevada SEO Services – Dominate the Silver State",
  heroDescription: "Award-winning SEO agency serving Nevada businesses from Las Vegas to Reno. We help Nevada companies rank higher and drive more revenue through organic search.",
  cities: ["Las Vegas", "Reno", "Henderson", "North Las Vegas", "Sparks", "Carson City", "Lake Tahoe", "Boulder City", "Mesquite", "Elko"],
  keywords: [
    "Nevada SEO",
    "SEO services Nevada",
    "Nevada SEO company",
    "SEO agency Nevada",
    "Las Vegas SEO",
    "Reno SEO",
    "Henderson SEO",
    "Nevada digital marketing",
    "hospitality SEO Nevada",
    "casino SEO",
    "entertainment SEO Las Vegas",
    "local SEO Nevada",
    "real estate SEO Nevada",
  ],
  stats: [
    { value: "3.2×", label: "Hospitality Revenue" },
    { value: "70+", label: "NV Clients Served" },
    { value: "90", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "Hospitality SEO Nevada", description: "Help Nevada hotels, resorts, and casinos rank for travel and entertainment keywords." },
    { title: "Entertainment SEO", description: "Specialized SEO for Las Vegas shows, attractions, and entertainment venues." },
    { title: "Local SEO Nevada", description: "Dominate local search in Las Vegas, Reno, and Henderson markets." },
    { title: "Real Estate SEO Nevada", description: "Help Nevada real estate agents rank for property searches in this growing market." },
    { title: "Restaurant & Nightlife SEO", description: "Help Vegas restaurants and nightlife venues capture high-intent search traffic." },
    { title: "Convention & Events SEO", description: "Rank for trade show, convention, and event-related keywords in Nevada." },
  ],
  faqs: [
    { question: "What makes Nevada SEO unique?", answer: "Nevada's economy is heavily tourism and hospitality-driven, requiring specialized SEO strategies that account for seasonal trends, events, and the unique Las Vegas market." },
    { question: "Do you help Las Vegas hospitality businesses?", answer: "Yes! We have extensive experience with Vegas hotels, casinos, restaurants, and entertainment venues. We understand the competitive landscape and seasonal keyword patterns." },
    { question: "Can you help with Reno/Tahoe businesses?", answer: "Absolutely. We serve all of Nevada including Reno, Lake Tahoe, and Henderson with market-specific SEO strategies tailored to each area." },
  ],
  industries: ["Hospitality", "Entertainment", "Real Estate", "Gaming", "Conventions", "Food & Beverage"],
};

const NevadaSEO = () => <StateLanding data={data} />;

export default NevadaSEO;
