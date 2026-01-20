import StateLanding from "@/components/StateLanding";

const data = {
  slug: "hawaii-seo",
  name: "Hawaii",
  heroTitle: "Hawaii SEO Services – Grow Your Island Business",
  heroDescription: "Top-rated SEO agency serving Hawaii businesses across all islands. We help Hawaii companies rank higher and capture tourism, local, and mainland search traffic.",
  cities: ["Honolulu", "Maui", "Kona", "Hilo", "Kauai", "Waikiki", "Lahaina", "Kailua", "Pearl City", "Waipahu"],
  keywords: [
    "Hawaii SEO",
    "SEO services Hawaii",
    "Hawaii SEO company",
    "SEO agency Hawaii",
    "Honolulu SEO",
    "Maui SEO",
    "Oahu SEO",
    "Hawaii digital marketing",
    "tourism SEO Hawaii",
    "resort SEO Hawaii",
    "Hawaiian business marketing",
    "local SEO Hawaii",
    "vacation rental SEO",
  ],
  stats: [
    { value: "+168%", label: "Resort Bookings" },
    { value: "45+", label: "HI Clients Served" },
    { value: "90", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "Tourism SEO Hawaii", description: "Help Hawaii tourism businesses rank for travel keywords that drive bookings from mainland and international visitors." },
    { title: "Resort & Hotel SEO", description: "Specialized SEO for Hawaii resorts, hotels, and vacation properties." },
    { title: "Vacation Rental SEO", description: "Help Hawaii vacation rental owners rank on Google beyond just Airbnb and VRBO." },
    { title: "Local SEO Hawaii", description: "Help local Hawaii businesses serve both residents and tourists with optimized local presence." },
    { title: "Activity & Tours SEO", description: "Help Hawaii tour operators, activity providers, and adventure companies capture search traffic." },
    { title: "Restaurant SEO Hawaii", description: "Help Hawaii restaurants rank for dining searches from tourists and locals alike." },
  ],
  faqs: [
    { question: "What makes Hawaii SEO unique?", answer: "Hawaii SEO requires targeting both local residents and mainland/international tourists. We create strategies that capture both audiences with location-specific and tourism-focused content." },
    { question: "Do you serve all Hawaiian islands?", answer: "Yes! We serve businesses on Oahu, Maui, Big Island, Kauai, and the other islands with strategies tailored to each island's market dynamics." },
    { question: "How do you compete with big travel sites?", answer: "We help Hawaii businesses rank for long-tail keywords and local searches that big travel sites can't effectively target. This drives direct bookings and reduces OTA dependency." },
  ],
  industries: ["Tourism", "Hospitality", "Vacation Rentals", "Tours & Activities", "Food & Beverage", "Real Estate"],
};

const HawaiiSEO = () => <StateLanding data={data} />;

export default HawaiiSEO;
