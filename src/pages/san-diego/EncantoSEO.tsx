import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "encanto-seo",
  name: "Encanto",
  heroTitle: "Encanto SEO Services – Grow Your Southeast San Diego Business",
  heroDescription: "Expert SEO agency for Encanto, San Diego businesses. We help restaurants, shops, and service providers rank #1 on Google in this diverse Southeast San Diego community.",
  keywords: [
    "Encanto SEO", "SEO services Encanto", "Encanto SEO company",
    "SEO agency Encanto", "local SEO Encanto", "Encanto digital marketing",
    "Encanto San Diego SEO", "Encanto Google ranking", "Southeast San Diego SEO",
    "Encanto search optimization", "best SEO company Encanto", "affordable SEO Encanto",
    "diverse community SEO", "Encanto business marketing", "Encanto web marketing", "community business SEO",
  ],
  stats: [
    { value: "235%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Encanto Agency" },
    { value: "50", label: "Days to Results" },
    { value: "20+", label: "Encanto Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Encanto searches. We help community businesses reach residents searching for nearby services." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Encanto,' 'soul food San Diego,' and diverse cuisine searches." },
    { title: "Home Services SEO", description: "SEO for Encanto contractors, plumbers, and home service providers." },
    { title: "Healthcare SEO", description: "Help Encanto clinics and healthcare providers reach the local community." },
    { title: "Retail SEO", description: "SEO for Encanto shops and retail businesses serving the neighborhood." },
    { title: "Community Services SEO", description: "Help Encanto nonprofits and community organizations increase online visibility." },
  ],
  faqs: [
    { question: "Why should Encanto businesses invest in SEO?", answer: "Encanto residents search online for local services. SEO ensures your business appears when the community needs you." },
    { question: "How competitive is Encanto for SEO?", answer: "Very low competition. Most businesses haven't invested in SEO, giving early adopters a significant advantage." },
    { question: "What makes Encanto SEO different?", answer: "Encanto is a diverse, community-oriented neighborhood. SEO should reflect the neighborhood's character and serve multiple cultural communities." },
    { question: "How long until I see results?", answer: "Most Encanto businesses see results within 40-50 days due to low competition." },
  ],
  nearbyAreas: ["Paradise Hills", "Skyline", "Bay Terraces", "Lemon Grove", "La Mesa", "College Area"],
};

const EncantoSEO = () => <NeighborhoodLanding data={data} />;

export default EncantoSEO;
