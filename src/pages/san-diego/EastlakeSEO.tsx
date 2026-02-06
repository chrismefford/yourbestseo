import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "eastlake-seo",
  name: "Eastlake",
  heroTitle: "Eastlake SEO Services – Grow Your Master-Planned Community Business",
  heroDescription: "Expert SEO agency for Eastlake, Chula Vista businesses. We help restaurants, retailers, service providers, and family businesses rank #1 on Google in this thriving planned community.",
  keywords: [
    "Eastlake SEO",
    "SEO services Eastlake",
    "Eastlake SEO company",
    "SEO agency Eastlake",
    "local SEO Eastlake",
    "Eastlake digital marketing",
    "Eastlake Chula Vista SEO",
    "Eastlake Google ranking",
    "Eastlake Parkway SEO",
    "Olympic Training Center SEO",
    "Eastlake search optimization",
    "best SEO company Eastlake",
    "affordable SEO Eastlake",
    "family community SEO",
    "South Bay business SEO",
    "Eastlake Village SEO",
  ],
  stats: [
    { value: "268%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Eastlake Agency" },
    { value: "55", label: "Days to Results" },
    { value: "60+", label: "Eastlake Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Eastlake searches. We optimize for this growing community and help businesses reach the active, family-oriented population." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Eastlake,' 'family dining Chula Vista,' and cuisine-specific searches in this family-friendly community." },
    { title: "Retail & Shopping SEO", description: "Help Eastlake retailers and shopping center businesses stand out. Optimize for local shopping and convenience searches." },
    { title: "Sports & Fitness SEO", description: "Eastlake is home to the Olympic Training Center. SEO for gyms, sports facilities, and athletic services." },
    { title: "Home Services SEO", description: "SEO for Eastlake contractors, landscapers, and home service providers serving the residential community." },
    { title: "Healthcare & Dental SEO", description: "Help Eastlake medical practices and dentists reach families in this health-conscious community." },
  ],
  faqs: [
    { question: "Why is SEO important for Eastlake businesses?", answer: "Eastlake has a young, active population that relies heavily on online searches for local services. Strong SEO presence is essential for capturing this digitally-savvy market." },
    { question: "How competitive is Eastlake for SEO?", answer: "Competition is moderate and growing. Many businesses serve the community without optimized online presence, creating opportunities for SEO-forward businesses." },
    { question: "What makes Eastlake SEO different?", answer: "Eastlake has a fitness-focused, family-oriented culture influenced by the Olympic Training Center. We target keywords that resonate with active, health-conscious families." },
    { question: "How long until I see results?", answer: "Most Eastlake businesses see significant improvements within 50-65 days. The engaged community often translates online visibility into real-world traffic quickly." },
  ],
  nearbyAreas: ["Otay Ranch", "Chula Vista", "Bonita", "Rancho Del Rey", "Jamul", "Spring Valley"],
};

const EastlakeSEO = () => <NeighborhoodLanding data={data} />;

export default EastlakeSEO;
