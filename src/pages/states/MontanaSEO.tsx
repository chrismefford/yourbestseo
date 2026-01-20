import StateLanding from "@/components/StateLanding";

const data = {
  slug: "montana-seo",
  name: "Montana",
  heroTitle: "Montana SEO Services – Dominate Big Sky Country",
  heroDescription: "Award-winning SEO agency serving Montana businesses from Bozeman to Missoula. We help Montana companies rank higher and reach customers across this growing market.",
  cities: ["Bozeman", "Missoula", "Billings", "Great Falls", "Helena", "Whitefish", "Big Sky", "Kalispell", "Butte", "Livingston"],
  keywords: [
    "Montana SEO",
    "SEO services Montana",
    "Montana SEO company",
    "SEO agency Montana",
    "Bozeman SEO",
    "Missoula SEO",
    "Billings SEO",
    "Montana digital marketing",
    "luxury resort SEO",
    "ranch SEO Montana",
    "outdoor recreation SEO",
    "local SEO Montana",
  ],
  stats: [
    { value: "2.9×", label: "Luxury Bookings" },
    { value: "35+", label: "MT Clients Served" },
    { value: "90", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "Luxury Resort SEO", description: "Help Montana luxury resorts, lodges, and guest ranches rank for high-end travel keywords." },
    { title: "Outdoor Recreation SEO", description: "Help Montana outfitters, guides, and adventure companies capture outdoor search traffic." },
    { title: "Ranch & Agriculture SEO", description: "Specialized SEO for Montana ranches, farms, and agricultural businesses." },
    { title: "Local SEO Montana", description: "Dominate local search in Bozeman, Missoula, Billings, and across Montana." },
    { title: "Real Estate SEO Montana", description: "Help Montana real estate agents rank for property searches in this growing market." },
    { title: "Tech & Remote Work SEO", description: "Help Montana's growing remote work and tech scene build online visibility." },
  ],
  faqs: [
    { question: "What makes Montana SEO unique?", answer: "Montana has a unique mix of luxury tourism, outdoor recreation, and ranching. We understand these industries and create strategies that reach both tourists and locals." },
    { question: "Do you help Montana luxury resorts?", answer: "Yes! We have extensive experience with Montana guest ranches, lodges, and resorts. We help them rank for high-value travel keywords and capture direct bookings." },
    { question: "Is Bozeman a growing tech market?", answer: "Absolutely. Bozeman has become a hub for remote workers and tech companies. We help these businesses build online visibility and compete in digital markets." },
  ],
  industries: ["Luxury Tourism", "Outdoor Recreation", "Ranching & Agriculture", "Real Estate", "Technology", "Healthcare"],
};

const MontanaSEO = () => <StateLanding data={data} />;

export default MontanaSEO;
