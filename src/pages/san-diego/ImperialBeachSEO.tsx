import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "imperial-beach-seo",
  name: "Imperial Beach",
  heroTitle: "Imperial Beach SEO Services – Reach South Bay Customers Online",
  heroDescription: "Expert SEO agency for Imperial Beach, California businesses. We help restaurants, surf shops, hotels, and local services rank #1 on Google in San Diego's southernmost beach community.",
  keywords: [
    "Imperial Beach SEO",
    "SEO services Imperial Beach",
    "Imperial Beach SEO company",
    "SEO agency Imperial Beach",
    "local SEO Imperial Beach",
    "Imperial Beach digital marketing",
    "IB SEO San Diego",
    "Imperial Beach Google ranking",
    "South Bay SEO",
    "beach business SEO Imperial Beach",
    "Imperial Beach search optimization",
    "best SEO company Imperial Beach",
    "affordable SEO Imperial Beach",
    "Imperial Beach web marketing",
    "pier SEO Imperial Beach",
    "surf town SEO",
  ],
  stats: [
    { value: "245%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "South Bay Agency" },
    { value: "60", label: "Days to Results" },
    { value: "35+", label: "IB Clients" },
  ],
  services: [
    { title: "Local Beach Business SEO", description: "Dominate Imperial Beach local searches. We optimize for IB-specific keywords and help beach businesses attract tourists and locals." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants Imperial Beach,' 'pier dining,' and beachfront cuisine searches in this laid-back surf town." },
    { title: "Surf & Beach Shop SEO", description: "SEO for Imperial Beach surf shops, beach rentals, and coastal retail. Capture visitors searching for beach gear and experiences." },
    { title: "Hotel & Vacation Rental SEO", description: "Help Imperial Beach hotels and vacation rentals rank higher. Attract visitors looking for South Bay beach accommodations." },
    { title: "Home Services SEO", description: "SEO for Imperial Beach contractors, plumbers, and home service providers serving the residential community." },
    { title: "Event & Entertainment SEO", description: "Optimize for Imperial Beach events, the annual sandcastle competition, and entertainment venues." },
  ],
  faqs: [
    { question: "Why should Imperial Beach businesses invest in SEO?", answer: "Imperial Beach attracts tourists year-round for its pier, beach, and events. SEO ensures your business appears when visitors search for local services, dining, and activities." },
    { question: "How competitive is SEO in Imperial Beach?", answer: "Imperial Beach has lower competition than central San Diego. Many local businesses rely on foot traffic without online optimization, creating opportunities for those who invest in SEO." },
    { question: "What makes Imperial Beach SEO unique?", answer: "IB has a distinct surf town character and draws visitors for specific events like the US Open Sandcastle Competition. We target these unique search patterns and seasonal tourism." },
    { question: "How long until I see results?", answer: "Most Imperial Beach businesses see significant improvements within 45-60 days. Local SEO results often come faster in smaller beach communities." },
  ],
  nearbyAreas: ["Chula Vista", "Coronado", "San Ysidro", "National City", "Otay Ranch", "Eastlake"],
};

const ImperialBeachSEO = () => <NeighborhoodLanding data={data} />;

export default ImperialBeachSEO;
