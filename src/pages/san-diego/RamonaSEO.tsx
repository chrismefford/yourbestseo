import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "ramona-seo",
  name: "Ramona",
  heroTitle: "Ramona SEO Services – Grow Your Wine Country Business Online",
  heroDescription: "Expert SEO agency for Ramona, California businesses. We help wineries, restaurants, equestrian businesses, and service providers rank #1 on Google in San Diego's wine country.",
  keywords: [
    "Ramona SEO", "SEO services Ramona", "Ramona SEO company",
    "SEO agency Ramona", "local SEO Ramona", "Ramona digital marketing",
    "Ramona California SEO", "Ramona Google ranking", "Ramona wine country SEO",
    "Ramona search optimization", "best SEO company Ramona", "affordable SEO Ramona",
    "winery SEO San Diego", "wine tasting SEO", "Ramona business marketing", "rural community SEO",
  ],
  stats: [
    { value: "248%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Ramona Agency" },
    { value: "50", label: "Days to Results" },
    { value: "30+", label: "Ramona Clients" },
  ],
  services: [
    { title: "Winery & Wine Tasting SEO", description: "Help Ramona wineries and tasting rooms rank for wine country searches and attract visitors from across San Diego." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Ramona,' 'wine country dining,' and farm-to-table food searches." },
    { title: "Equestrian & Ranch SEO", description: "SEO for Ramona horse facilities, ranches, and equestrian businesses." },
    { title: "Home Services SEO", description: "SEO for Ramona contractors and property maintenance services." },
    { title: "Outdoor & Recreation SEO", description: "Help Ramona outdoor recreation and adventure businesses attract visitors." },
    { title: "Agriculture & Farm SEO", description: "SEO for Ramona farms, nurseries, and agricultural businesses." },
  ],
  faqs: [
    { question: "Why should Ramona businesses invest in SEO?", answer: "Ramona's wine country and rural charm attract visitors from across the county. SEO ensures they find your business first." },
    { question: "How competitive is Ramona for SEO?", answer: "Low competition. Many wineries and businesses rely on weekend traffic without optimizing online." },
    { question: "Can SEO help my Ramona winery?", answer: "Absolutely! We target wine-related search queries to drive tastings and visits from San Diego and beyond." },
    { question: "How long until I see results?", answer: "Most Ramona businesses see results within 40-55 days." },
  ],
  nearbyAreas: ["Poway", "Escondido", "Julian", "Lakeside", "Santa Ysabel", "Valley Center"],
};

const RamonaSEO = () => <NeighborhoodLanding data={data} />;

export default RamonaSEO;
