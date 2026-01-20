import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "chula-vista-seo",
  name: "Chula Vista",
  heroTitle: "Chula Vista SEO Services – Dominate South Bay Search Results",
  heroDescription: "Leading SEO agency for Chula Vista, California businesses. We help retail stores, restaurants, healthcare providers, and service companies rank #1 on Google in San Diego's second-largest city.",
  keywords: [
    "Chula Vista SEO",
    "SEO services Chula Vista",
    "Chula Vista SEO company",
    "SEO agency Chula Vista",
    "local SEO Chula Vista",
    "Chula Vista digital marketing",
    "South Bay SEO San Diego",
    "Chula Vista Google ranking",
    "Eastlake SEO",
    "Otay Ranch SEO",
    "Chula Vista search optimization",
    "best SEO company Chula Vista",
    "affordable SEO Chula Vista",
    "Third Avenue SEO",
    "Chula Vista web marketing",
    "South Bay digital marketing",
  ],
  stats: [
    { value: "282%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "South Bay Agency" },
    { value: "65", label: "Days to Results" },
    { value: "90+", label: "Chula Vista Clients" },
  ],
  services: [
    { title: "Local SEO for Chula Vista", description: "Dominate Google Maps and local pack results across Chula Vista's diverse neighborhoods. From Third Avenue to Eastlake and Otay Ranch." },
    { title: "Healthcare & Medical SEO", description: "SEO for Chula Vista medical practices, dentists, specialists, and clinics. Reach the growing South Bay population searching for healthcare." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Chula Vista,' 'Mexican food Chula Vista,' and capture the city's diverse dining searches." },
    { title: "Retail & Shopping SEO", description: "Help your Chula Vista store compete online. Optimize for Otay Ranch Town Center, Eastlake shopping, and Third Avenue retail searches." },
    { title: "Home Services SEO", description: "SEO for Chula Vista contractors, plumbers, HVAC, landscapers, and home service providers serving South Bay homeowners." },
    { title: "Bilingual SEO", description: "Reach Chula Vista's bilingual community with Spanish-language SEO. Capture searches in both English and Spanish for maximum reach." },
  ],
  faqs: [
    { question: "Why is Chula Vista SEO important?", answer: "Chula Vista is San Diego's second-largest city with a rapidly growing population. Local businesses face increasing competition, and SEO ensures you're visible when residents search for products and services." },
    { question: "Do you offer Spanish-language SEO?", answer: "Yes! Chula Vista's significant Spanish-speaking population means bilingual SEO is essential. We optimize for searches in both languages to maximize your reach in South Bay." },
    { question: "How competitive is Chula Vista for local SEO?", answer: "Competition is growing but many businesses still haven't invested in SEO. This creates opportunities for businesses that optimize properly, especially in specific neighborhoods like Eastlake and Otay Ranch." },
    { question: "What neighborhoods do you serve in Chula Vista?", answer: "We serve all Chula Vista neighborhoods including Eastlake, Otay Ranch, Third Avenue, Rancho Del Rey, Bonita, and the waterfront area. Each has unique search patterns we target." },
  ],
  nearbyAreas: ["National City", "Bonita", "Eastlake", "Otay Ranch", "Imperial Beach", "San Ysidro"],
};

const ChulaVistaSEO = () => <NeighborhoodLanding data={data} />;

export default ChulaVistaSEO;
