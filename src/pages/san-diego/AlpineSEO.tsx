import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "alpine-seo",
  name: "Alpine",
  heroTitle: "Alpine SEO Services – Grow Your Mountain Community Business",
  heroDescription: "Expert SEO agency for Alpine, California businesses. We help restaurants, home services, and outdoor businesses rank #1 on Google in this charming East County mountain community.",
  keywords: [
    "Alpine SEO", "SEO services Alpine", "Alpine SEO company",
    "SEO agency Alpine", "local SEO Alpine", "Alpine digital marketing",
    "Alpine California SEO", "Alpine Google ranking", "Alpine Boulevard SEO",
    "Alpine search optimization", "best SEO company Alpine", "affordable SEO Alpine",
    "East County mountain SEO", "rural community SEO", "Alpine business marketing", "mountain community SEO",
  ],
  stats: [
    { value: "235%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Alpine Agency" },
    { value: "45", label: "Days to Results" },
    { value: "20+", label: "Alpine Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Alpine searches. Very low competition means rapid results for committed businesses." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Alpine,' 'dining East County mountains,' and local food searches." },
    { title: "Home Services SEO", description: "SEO for Alpine contractors, landscapers, and property services." },
    { title: "Outdoor & Recreation SEO", description: "Help Alpine hiking, camping, and outdoor recreation businesses attract adventure seekers." },
    { title: "Equestrian SEO", description: "SEO for Alpine horse boarding, training, and equestrian facilities." },
    { title: "Healthcare SEO", description: "Help Alpine medical and dental practitioners reach the mountain community." },
  ],
  faqs: [
    { question: "Why should Alpine businesses invest in SEO?", answer: "Alpine residents have limited local options and search online regularly. SEO makes your business the obvious choice." },
    { question: "How competitive is Alpine for SEO?", answer: "Extremely low competition. SEO investment here yields faster and more dramatic results than urban areas." },
    { question: "What makes Alpine SEO different?", answer: "Alpine's mountain lifestyle and rural character are unique. We target keywords around country living and outdoor recreation." },
    { question: "How long until I see results?", answer: "Most Alpine businesses see results within 30-45 days due to minimal competition." },
  ],
  nearbyAreas: ["El Cajon", "Lakeside", "Jamul", "Descanso", "Viejas", "Harbison Canyon"],
};

const AlpineSEO = () => <NeighborhoodLanding data={data} />;

export default AlpineSEO;
