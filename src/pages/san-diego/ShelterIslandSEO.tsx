import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "shelter-island-seo",
  name: "Shelter Island",
  heroTitle: "Shelter Island SEO Services – Grow Your Waterfront Business Online",
  heroDescription: "Expert SEO agency for Shelter Island, San Diego businesses. We help marinas, restaurants, hotels, and waterfront businesses rank #1 on Google in this iconic harbor destination.",
  keywords: [
    "Shelter Island SEO", "SEO services Shelter Island", "Shelter Island SEO company",
    "SEO agency Shelter Island", "local SEO Shelter Island", "Shelter Island digital marketing",
    "Shelter Island San Diego SEO", "Shelter Island Google ranking", "marina SEO San Diego",
    "waterfront restaurant SEO", "Shelter Island search optimization", "best SEO company Shelter Island",
    "yacht club SEO", "harbor SEO San Diego", "boating SEO San Diego", "Shelter Island hotel SEO",
  ],
  stats: [
    { value: "272%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Waterfront Agency" },
    { value: "60", label: "Days to Results" },
    { value: "25+", label: "Shelter Island Clients" },
  ],
  services: [
    { title: "Marina & Boating SEO", description: "Help Shelter Island marinas, boat rentals, and marine services rank for boating searches in San Diego." },
    { title: "Waterfront Restaurant SEO", description: "Rank for 'waterfront dining San Diego,' 'Shelter Island restaurants,' and harbor-view dining searches." },
    { title: "Hotel & Hospitality SEO", description: "SEO for Shelter Island hotels and resorts to attract tourists and business travelers." },
    { title: "Fishing & Charter SEO", description: "Help Shelter Island fishing charters and sportfishing businesses capture angler searches." },
    { title: "Event Venue SEO", description: "SEO for Shelter Island wedding and event venues with waterfront views." },
    { title: "Water Sports SEO", description: "Help Shelter Island kayak, paddleboard, and water sports rentals attract adventure seekers." },
  ],
  faqs: [
    { question: "Why is SEO important for Shelter Island businesses?", answer: "Shelter Island attracts boaters, tourists, and locals year-round. SEO ensures your waterfront business appears when visitors search for harbor experiences." },
    { question: "How competitive is Shelter Island for SEO?", answer: "Moderate competition for waterfront and dining keywords. Many businesses rely on location alone without optimizing online." },
    { question: "Can SEO help attract tourists to my Shelter Island business?", answer: "Yes! We target tourist-intent keywords like 'things to do on Shelter Island' and 'best waterfront restaurants San Diego.'" },
    { question: "How long until I see results?", answer: "Most Shelter Island businesses see significant improvements within 55-70 days." },
  ],
  nearbyAreas: ["Point Loma", "Harbor Island", "Liberty Station", "Ocean Beach", "Downtown San Diego", "Coronado"],
};

const ShelterIslandSEO = () => <NeighborhoodLanding data={data} />;

export default ShelterIslandSEO;
