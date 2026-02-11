import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "lakeside-seo",
  name: "Lakeside",
  heroTitle: "Lakeside SEO Services – Grow Your East County Business Online",
  heroDescription: "Expert SEO agency for Lakeside, California businesses. We help restaurants, equestrian businesses, home services, and retailers rank #1 on Google in this rural East County community.",
  keywords: [
    "Lakeside SEO", "SEO services Lakeside", "Lakeside SEO company",
    "SEO agency Lakeside", "local SEO Lakeside", "Lakeside digital marketing",
    "Lakeside California SEO", "Lakeside Google ranking", "Lindo Lake SEO",
    "Lakeside search optimization", "best SEO company Lakeside", "affordable SEO Lakeside",
    "East County rural SEO", "equestrian SEO", "Lakeside business marketing", "country living SEO",
  ],
  stats: [
    { value: "238%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Lakeside Agency" },
    { value: "45", label: "Days to Results" },
    { value: "30+", label: "Lakeside Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Lakeside searches. Low competition means fast results for local businesses." },
    { title: "Equestrian & Ranch SEO", description: "SEO for Lakeside horse boarding, riding schools, and equestrian businesses." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Lakeside,' 'dining East County,' and local food searches." },
    { title: "Home Services SEO", description: "SEO for Lakeside contractors, landscapers, and property maintenance services." },
    { title: "Auto & Outdoor SEO", description: "Help Lakeside auto shops, off-road, and outdoor recreation businesses attract customers." },
    { title: "Healthcare SEO", description: "SEO for Lakeside medical and dental practices." },
  ],
  faqs: [
    { question: "Why should Lakeside businesses invest in SEO?", answer: "Lakeside residents search online for services but have fewer local options. SEO helps you become the go-to business in the community." },
    { question: "How competitive is Lakeside for SEO?", answer: "Very low competition. Most businesses rely on word-of-mouth, making SEO extremely effective." },
    { question: "What makes Lakeside SEO different?", answer: "Lakeside has a rural, equestrian character. We target keywords around country living, horse culture, and East County lifestyle." },
    { question: "How long until I see results?", answer: "Most Lakeside businesses see results within 35-50 days due to low competition." },
  ],
  nearbyAreas: ["Santee", "El Cajon", "Ramona", "Alpine", "Harbison Canyon", "Flinn Springs"],
};

const LakesideSEO = () => <NeighborhoodLanding data={data} />;

export default LakesideSEO;
