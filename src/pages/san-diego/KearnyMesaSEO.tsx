import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "kearny-mesa-seo",
  name: "Kearny Mesa",
  heroTitle: "Kearny Mesa SEO Services – Dominate San Diego's Business Hub",
  heroDescription: "Expert SEO agency for Kearny Mesa businesses. From auto dealerships to tech companies and the famous Convoy District restaurants, we help Kearny Mesa businesses rank #1 on Google.",
  keywords: [
    "Kearny Mesa SEO",
    "SEO services Kearny Mesa",
    "Kearny Mesa SEO company",
    "SEO agency Kearny Mesa",
    "local SEO Kearny Mesa",
    "Kearny Mesa digital marketing",
    "Convoy District SEO",
    "auto dealer SEO San Diego",
    "Kearny Mesa Google ranking",
    "tech company SEO San Diego",
    "Asian restaurant SEO San Diego",
    "Convoy Street SEO",
    "B2B SEO Kearny Mesa",
    "industrial SEO San Diego",
    "Kearny Mesa web marketing",
    "commercial SEO Kearny Mesa",
  ],
  stats: [
    { value: "295%", label: "Avg. Traffic Increase" },
    { value: "Top 3", label: "B2B Agency SD" },
    { value: "60", label: "Days to Results" },
    { value: "80+", label: "Kearny Mesa Clients" },
  ],
  services: [
    { title: "Auto Dealer SEO", description: "Specialized SEO for Kearny Mesa's auto row. Rank for 'car dealerships San Diego,' specific makes and models, and auto service keywords." },
    { title: "Convoy District Restaurant SEO", description: "Dominate searches for Asian cuisine in San Diego. We optimize for Korean BBQ, ramen, pho, dim sum, and every culinary specialty on Convoy Street." },
    { title: "B2B & Tech Company SEO", description: "SEO strategies for Kearny Mesa's growing tech and business sector. Target industry-specific keywords and generate qualified B2B leads." },
    { title: "Industrial & Commercial SEO", description: "Help your Kearny Mesa industrial or commercial business get found online. Optimize for wholesale, manufacturing, and distribution searches." },
    { title: "Multi-Location SEO", description: "For businesses with multiple Kearny Mesa locations or across San Diego. Unified SEO strategy that maximizes visibility for each location." },
    { title: "International SEO", description: "Reach San Diego's diverse Asian community with multilingual SEO. We optimize for searches in Korean, Vietnamese, Chinese, and Japanese." },
  ],
  faqs: [
    { question: "How competitive is SEO in Kearny Mesa?", answer: "Kearny Mesa is highly competitive, especially for auto dealers and Convoy District restaurants. However, many businesses still don't have optimized websites, creating opportunities for those who invest in SEO properly." },
    { question: "Can you help my Convoy Street restaurant rank higher?", answer: "Absolutely! We specialize in restaurant SEO for the Convoy District. We'll optimize your Google Business Profile, target cuisine-specific keywords, build local citations, and help you compete for 'best [cuisine] San Diego' searches." },
    { question: "Do you work with auto dealerships?", answer: "Yes, we have extensive experience with Kearny Mesa auto dealers. We optimize for new/used car searches, specific makes and models, service departments, and compete against the big auto platforms." },
    { question: "What about B2B companies in Kearny Mesa?", answer: "We help tech companies, distributors, and B2B service providers generate leads through SEO. B2B SEO requires a different approach focused on industry keywords and longer sales cycles." },
  ],
  nearbyAreas: ["Clairemont", "Serra Mesa", "Linda Vista", "Mission Valley", "Mira Mesa", "University City"],
};

const KearnyMesaSEO = () => <NeighborhoodLanding data={data} />;

export default KearnyMesaSEO;
