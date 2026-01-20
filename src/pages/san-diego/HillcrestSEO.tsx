import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "hillcrest-seo",
  name: "Hillcrest",
  heroTitle: "Hillcrest SEO Services – Vibrant Marketing for San Diego's Urban Heart",
  heroDescription: "Leading SEO agency for Hillcrest, San Diego businesses. We help restaurants, boutiques, healthcare providers, and LGBTQ+ owned businesses rank #1 on Google in this dynamic urban neighborhood.",
  keywords: [
    "Hillcrest SEO",
    "SEO services Hillcrest San Diego",
    "Hillcrest SEO company",
    "SEO agency Hillcrest",
    "local SEO Hillcrest",
    "Hillcrest digital marketing",
    "University Avenue SEO",
    "LGBTQ business SEO San Diego",
    "Hillcrest Google ranking",
    "Hillcrest restaurant SEO",
    "medical SEO Hillcrest",
    "Hillcrest search optimization",
    "best SEO company Hillcrest",
    "boutique SEO Hillcrest",
    "Hillcrest web marketing",
    "inclusive business SEO",
  ],
  stats: [
    { value: "288%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Urban SEO Agency" },
    { value: "70", label: "Days to Results" },
    { value: "65+", label: "Hillcrest Clients" },
  ],
  services: [
    { title: "Restaurant & Nightlife SEO", description: "Dominate Hillcrest dining and nightlife searches. Rank for 'brunch Hillcrest,' 'best restaurants University Avenue,' and LGBTQ-friendly venue searches." },
    { title: "Medical & Healthcare SEO", description: "Hillcrest is a medical hub. SEO for hospitals, specialists, LGBTQ+ healthcare providers, and medical practices along the hospital corridor." },
    { title: "Boutique & Retail SEO", description: "Help your Hillcrest shop stand out online. Optimize for 'boutiques Hillcrest,' vintage stores, and unique retail searches." },
    { title: "LGBTQ+ Business SEO", description: "Specialized SEO for LGBTQ+-owned and friendly businesses. Rank for inclusive searches and connect with your community." },
    { title: "Fitness & Wellness SEO", description: "SEO for Hillcrest gyms, yoga studios, and wellness centers. The health-conscious community searches online for fitness options." },
    { title: "Professional Services SEO", description: "Help Hillcrest lawyers, therapists, and professionals reach clients. Many residents prefer local professional services." },
  ],
  faqs: [
    { question: "How does Hillcrest SEO differ from other neighborhoods?", answer: "Hillcrest has unique search patterns as San Diego's LGBTQ+ hub and a major medical corridor. We optimize for both the vibrant community searches and the significant healthcare-related traffic." },
    { question: "Can you help LGBTQ+-owned businesses with SEO?", answer: "Absolutely! We specialize in helping LGBTQ+-owned businesses rank for inclusive searches, community-specific keywords, and general local searches. Your business can reach both the LGBTQ+ community and allies." },
    { question: "What about medical practice SEO in Hillcrest?", answer: "Hillcrest's medical corridor means high competition for healthcare SEO. We help practices rank for specialty searches, LGBTQ+ healthcare keywords, and compete with the major hospital systems online." },
    { question: "How competitive is restaurant SEO in Hillcrest?", answer: "Very competitive, but many restaurants still don't optimize properly. We focus on specific cuisine keywords, brunch searches, and neighborhood-specific terms to help you stand out." },
  ],
  nearbyAreas: ["North Park", "University Heights", "Mission Hills", "Bankers Hill", "Middletown", "Uptown"],
};

const HillcrestSEO = () => <NeighborhoodLanding data={data} />;

export default HillcrestSEO;
