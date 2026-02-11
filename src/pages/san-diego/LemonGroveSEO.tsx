import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "lemon-grove-seo",
  name: "Lemon Grove",
  heroTitle: "Lemon Grove SEO Services – Grow Your East County Business Online",
  heroDescription: "Expert SEO agency for Lemon Grove, California businesses. We help restaurants, shops, and service providers rank #1 on Google in this friendly East County community.",
  keywords: [
    "Lemon Grove SEO", "SEO services Lemon Grove", "Lemon Grove SEO company",
    "SEO agency Lemon Grove", "local SEO Lemon Grove", "Lemon Grove digital marketing",
    "Lemon Grove California SEO", "Lemon Grove Google ranking", "Broadway Lemon Grove SEO",
    "Lemon Grove search optimization", "best SEO company Lemon Grove", "affordable SEO Lemon Grove",
    "East County SEO", "small city SEO", "Lemon Grove business marketing", "Lemon Grove web marketing",
  ],
  stats: [
    { value: "242%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Lemon Grove Agency" },
    { value: "45", label: "Days to Results" },
    { value: "25+", label: "Lemon Grove Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate Lemon Grove searches. Low competition means faster results for local businesses." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Lemon Grove,' 'dining East County,' and local food searches." },
    { title: "Home Services SEO", description: "SEO for Lemon Grove contractors, landscapers, and home improvement providers." },
    { title: "Healthcare SEO", description: "Help Lemon Grove medical and dental practices reach local residents." },
    { title: "Auto Services SEO", description: "SEO for Lemon Grove auto repair shops and service centers." },
    { title: "Retail SEO", description: "Help Lemon Grove shops and retailers attract local customers." },
  ],
  faqs: [
    { question: "Why should Lemon Grove businesses invest in SEO?", answer: "Lemon Grove residents search online for nearby services. Low competition means you can quickly dominate local search results." },
    { question: "How competitive is Lemon Grove for SEO?", answer: "Very low competition. Most businesses haven't invested in SEO, creating excellent first-mover opportunities." },
    { question: "What makes Lemon Grove SEO different?", answer: "Lemon Grove is a small, tight-knit city. Hyper-local SEO builds trust and drives neighborhood loyalty." },
    { question: "How long until I see results?", answer: "Most Lemon Grove businesses see results within 35-50 days due to low competition." },
  ],
  nearbyAreas: ["La Mesa", "Spring Valley", "El Cajon", "Encanto", "Paradise Hills", "National City"],
};

const LemonGroveSEO = () => <NeighborhoodLanding data={data} />;

export default LemonGroveSEO;
