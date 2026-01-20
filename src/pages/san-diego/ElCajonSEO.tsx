import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "el-cajon-seo",
  name: "El Cajon",
  heroTitle: "El Cajon SEO Services – Dominate East County Search Results",
  heroDescription: "Premier SEO agency for El Cajon, California businesses. We help auto dealers, restaurants, retailers, and service providers rank #1 on Google and capture more East County customers.",
  keywords: [
    "El Cajon SEO",
    "SEO services El Cajon",
    "El Cajon SEO company",
    "SEO agency El Cajon",
    "local SEO El Cajon",
    "El Cajon digital marketing",
    "East County SEO",
    "El Cajon Google ranking",
    "auto mile SEO El Cajon",
    "Downtown El Cajon SEO",
    "El Cajon search optimization",
    "best SEO company El Cajon",
    "affordable SEO El Cajon",
    "El Cajon web marketing",
    "small business SEO El Cajon",
    "El Cajon Boulevard marketing",
  ],
  stats: [
    { value: "275%", label: "Avg. Traffic Increase" },
    { value: "Top 5", label: "East County Agency" },
    { value: "65", label: "Days to Results" },
    { value: "70+", label: "El Cajon Clients" },
  ],
  services: [
    { title: "Auto Dealer SEO El Cajon", description: "Dominate car searches on El Cajon's famous auto mile. We optimize for new/used car searches, specific makes, and compete with major auto platforms." },
    { title: "Downtown El Cajon SEO", description: "Help your downtown El Cajon business stand out. Optimize for Main Street, Prescott Promenade, and local shopping district searches." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants El Cajon,' 'Middle Eastern food San Diego,' and cuisine-specific searches. El Cajon's diverse dining scene needs targeted SEO." },
    { title: "Home Services SEO", description: "SEO for El Cajon contractors, plumbers, HVAC, roofers, and home service providers. Be found when East County homeowners need help." },
    { title: "Medical & Healthcare SEO", description: "SEO for El Cajon medical offices, dentists, specialists, and healthcare providers. Build online presence and attract new patients." },
    { title: "Retail & Shopping SEO", description: "Optimize for Parkway Plaza, Westfield, and local retail searches. Help shoppers find your El Cajon store online." },
  ],
  faqs: [
    { question: "How competitive is SEO in El Cajon?", answer: "El Cajon has growing competition, especially for auto dealers and restaurants. However, many local businesses haven't invested in SEO, creating significant opportunities for those who optimize their online presence properly." },
    { question: "Can you help my auto dealership on the auto mile?", answer: "Absolutely! We specialize in auto dealer SEO and understand El Cajon's competitive auto market. We optimize for specific makes, models, and compete against Autotrader, CarGurus, and other platforms." },
    { question: "What makes El Cajon SEO different?", answer: "El Cajon has unique search patterns as the largest city in East County. We target El Cajon-specific keywords while also capturing broader East County searches, maximizing your reach." },
    { question: "How long until I see results in El Cajon?", answer: "Most El Cajon businesses see significant improvements within 60-90 days. Local SEO results often come faster because of less competition compared to central San Diego neighborhoods." },
  ],
  nearbyAreas: ["La Mesa", "Santee", "Spring Valley", "Rancho San Diego", "Lakeside", "Fletcher Hills"],
};

const ElCajonSEO = () => <NeighborhoodLanding data={data} />;

export default ElCajonSEO;
