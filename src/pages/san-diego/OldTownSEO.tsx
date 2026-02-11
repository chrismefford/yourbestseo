import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "old-town-seo",
  name: "Old Town",
  heroTitle: "Old Town SEO Services – Boost Your Historic District Business Online",
  heroDescription: "Expert SEO agency for Old Town, San Diego businesses. We help restaurants, gift shops, tour operators, and hospitality businesses rank #1 on Google in San Diego's birthplace.",
  keywords: [
    "Old Town SEO", "SEO services Old Town San Diego", "Old Town SEO company",
    "SEO agency Old Town", "local SEO Old Town", "Old Town digital marketing",
    "Old Town San Diego Google ranking", "historic district SEO", "Old Town search optimization",
    "best SEO company Old Town", "Mexican restaurant SEO San Diego", "tourism SEO San Diego",
    "Old Town State Historic Park SEO", "hospitality SEO Old Town", "gift shop SEO", "Old Town web marketing",
  ],
  stats: [
    { value: "275%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Historic District Agency" },
    { value: "55", label: "Days to Results" },
    { value: "40+", label: "Old Town Clients" },
  ],
  services: [
    { title: "Restaurant & Dining SEO", description: "Rank for 'Mexican restaurants Old Town,' 'best tacos San Diego,' and cuisine searches in this dining destination." },
    { title: "Tourism & Hospitality SEO", description: "Help Old Town tour operators, hotels, and attractions capture tourist searches year-round." },
    { title: "Retail & Gift Shop SEO", description: "SEO for Old Town gift shops, boutiques, and specialty stores attracting visitors and locals alike." },
    { title: "Event Venue SEO", description: "Help Old Town event spaces, wedding venues, and banquet halls rank for celebration-related searches." },
    { title: "Museum & Cultural SEO", description: "SEO for Old Town museums, galleries, and cultural attractions to increase visitor traffic." },
    { title: "Professional Services SEO", description: "Help Old Town professional services reach both the local community and the broader San Diego market." },
  ],
  faqs: [
    { question: "Why is SEO important for Old Town businesses?", answer: "Old Town attracts millions of visitors annually. SEO ensures your business appears when tourists and locals search for dining, shopping, and experiences." },
    { question: "How competitive is Old Town for SEO?", answer: "Old Town is competitive for restaurant and tourism keywords, but many businesses still lack modern SEO, creating real opportunities." },
    { question: "Can SEO help attract tourists to my Old Town business?", answer: "Absolutely! We target tourist-intent keywords like 'things to do in Old Town San Diego' and 'best restaurants near Old Town' to drive visitor traffic." },
    { question: "How long until I see results?", answer: "Most Old Town businesses see significant improvements within 50-65 days. Tourism-related keywords can show results even faster during peak season." },
  ],
  nearbyAreas: ["Mission Hills", "Middletown", "Hillcrest", "Point Loma", "Mission Valley", "Little Italy"],
};

const OldTownSEO = () => <NeighborhoodLanding data={data} />;

export default OldTownSEO;
