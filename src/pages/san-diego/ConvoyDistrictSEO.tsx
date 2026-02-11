import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "convoy-district-seo",
  name: "Convoy District",
  heroTitle: "Convoy District SEO Services – Dominate San Diego's Asian Food Capital",
  heroDescription: "Expert SEO agency for Convoy District, San Diego businesses. We help restaurants, shops, and services rank #1 on Google in San Diego's premier Asian dining and cultural hub.",
  keywords: [
    "Convoy District SEO", "SEO services Convoy District", "Convoy District SEO company",
    "SEO agency Convoy District", "local SEO Convoy District", "Convoy District digital marketing",
    "Convoy Street SEO", "Convoy District Google ranking", "Asian food SEO San Diego",
    "Convoy District search optimization", "best SEO company Convoy", "Korean restaurant SEO San Diego",
    "Japanese restaurant SEO San Diego", "Chinese restaurant SEO", "Convoy District business SEO", "multicultural food SEO",
  ],
  stats: [
    { value: "282%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Convoy District Agency" },
    { value: "55", label: "Days to Results" },
    { value: "50+", label: "Convoy Clients" },
  ],
  services: [
    { title: "Asian Restaurant SEO", description: "Help Convoy District restaurants rank for Asian cuisine searches—Korean, Japanese, Chinese, Vietnamese, Filipino, and more." },
    { title: "Multilingual SEO", description: "Optimize in English, Korean, Japanese, Chinese, and other languages to reach Convoy's diverse customer base." },
    { title: "Boba & Dessert Shop SEO", description: "Rank for 'boba near me,' 'dessert shops Convoy,' and trending food searches." },
    { title: "Retail & Market SEO", description: "SEO for Convoy District Asian markets, beauty shops, and specialty retailers." },
    { title: "Karaoke & Entertainment SEO", description: "Help Convoy entertainment venues, karaoke bars, and nightlife businesses attract customers." },
    { title: "Service Business SEO", description: "SEO for Convoy District auto services, salons, and professional services." },
  ],
  faqs: [
    { question: "Why is SEO important for Convoy District businesses?", answer: "Convoy District attracts foodies from across San Diego County. SEO ensures your restaurant or business appears when they search for Asian cuisine and cultural experiences." },
    { question: "Do you offer multilingual SEO for Convoy businesses?", answer: "Yes! We optimize in multiple languages including English, Korean, Japanese, and Chinese to reach Convoy's diverse customer and business community." },
    { question: "How competitive is Convoy District for SEO?", answer: "Highly competitive for restaurant keywords, but many businesses lack modern SEO. Strategic optimization creates strong advantages." },
    { question: "How long until I see results?", answer: "Most Convoy District businesses see significant improvements within 50-65 days." },
  ],
  nearbyAreas: ["Kearny Mesa", "Clairemont", "Linda Vista", "Serra Mesa", "University City", "Mira Mesa"],
};

const ConvoyDistrictSEO = () => <NeighborhoodLanding data={data} />;

export default ConvoyDistrictSEO;
