import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "national-city-seo",
  name: "National City",
  heroTitle: "National City SEO Services – Drive Business Growth in South Bay",
  heroDescription: "Expert SEO agency for National City, California businesses. We help auto dealers, restaurants, retail stores, and service providers rank #1 on Google and attract more South Bay customers.",
  keywords: [
    "National City SEO",
    "SEO services National City",
    "National City SEO company",
    "SEO agency National City",
    "local SEO National City",
    "National City digital marketing",
    "Mile of Cars SEO",
    "National City Google ranking",
    "auto dealer SEO National City",
    "South Bay SEO",
    "National City search optimization",
    "best SEO company National City",
    "affordable SEO National City",
    "National City web marketing",
    "Plaza Boulevard SEO",
    "bilingual SEO National City",
  ],
  stats: [
    { value: "265%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Mile of Cars Agency" },
    { value: "60", label: "Days to Results" },
    { value: "45+", label: "National City Clients" },
  ],
  services: [
    { title: "Mile of Cars SEO", description: "Dominate auto searches on National City's famous Mile of Cars. We help dealerships rank for new/used car searches, specific makes, and compete with online auto platforms." },
    { title: "Local Business SEO", description: "Help National City shops, restaurants, and services rank in local searches. We optimize for neighborhood-specific keywords and 'near me' queries." },
    { title: "Restaurant & Food SEO", description: "Rank for 'restaurants National City,' 'Filipino food San Diego,' and cuisine-specific searches reflecting the city's diverse dining scene." },
    { title: "Home Services SEO", description: "SEO for National City contractors, plumbers, electricians, and home service providers. Be found when South Bay homeowners need help." },
    { title: "Bilingual SEO", description: "Reach National City's bilingual community with English and Spanish SEO. Maximize visibility across all customer segments." },
    { title: "Retail & Shopping SEO", description: "Help your National City retail business stand out. Optimize for Plaza Boulevard, local shopping centers, and product-specific searches." },
  ],
  faqs: [
    { question: "How can Mile of Cars dealerships benefit from SEO?", answer: "SEO helps dealerships rank above Autotrader, CarGurus, and other platforms for make/model searches. We focus on local keywords like 'Honda dealer National City' where you can outrank the aggregators." },
    { question: "Is bilingual SEO important in National City?", answer: "Absolutely. National City has a significant Spanish-speaking population. Bilingual SEO captures searches in both languages, expanding your potential customer base significantly." },
    { question: "How competitive is National City SEO?", answer: "Less competitive than central San Diego, which is an opportunity. Many National City businesses haven't invested in SEO, so proper optimization gives you a significant advantage." },
    { question: "What results can National City businesses expect?", answer: "Our National City clients typically see 40-70% increases in local search visibility within 60 days, with notable improvements in calls, direction requests, and website traffic." },
  ],
  nearbyAreas: ["Chula Vista", "San Diego", "Lincoln Acres", "Paradise Hills", "Bonita", "Imperial Beach"],
};

const NationalCitySEO = () => <NeighborhoodLanding data={data} />;

export default NationalCitySEO;
