import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "pacific-beach-seo",
  name: "Pacific Beach",
  heroTitle: "Pacific Beach SEO Services – Ride the Wave of Online Success",
  heroDescription: "Premier SEO agency for Pacific Beach, San Diego businesses. We help restaurants, bars, surf shops, fitness studios, and beach businesses rank #1 on Google and attract more visitors to PB.",
  keywords: [
    "Pacific Beach SEO",
    "SEO services Pacific Beach",
    "PB SEO company",
    "SEO agency Pacific Beach",
    "local SEO Pacific Beach",
    "Pacific Beach digital marketing",
    "Garnet Avenue SEO",
    "beach business SEO San Diego",
    "PB Google ranking",
    "surf shop SEO San Diego",
    "bar SEO Pacific Beach",
    "restaurant SEO PB",
    "Pacific Beach search optimization",
    "best SEO company PB",
    "nightlife SEO San Diego",
    "fitness SEO Pacific Beach",
  ],
  stats: [
    { value: "290%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Beach Business Agency" },
    { value: "70", label: "Days to Results" },
    { value: "75+", label: "PB Clients" },
  ],
  services: [
    { title: "Restaurant & Bar SEO", description: "Dominate Pacific Beach dining and nightlife searches. Rank for 'best bars PB,' 'rooftop restaurants Pacific Beach,' and beachside dining keywords." },
    { title: "Surf & Beach Shop SEO", description: "SEO for surf shops, beach rental businesses, and coastal retail. Capture tourists and locals searching for beach gear and experiences." },
    { title: "Fitness & Wellness SEO", description: "Help Pacific Beach gyms, yoga studios, and wellness centers rank. PB's health-conscious crowd searches online for fitness options." },
    { title: "Vacation Rental SEO", description: "Optimize your Pacific Beach rental property beyond Airbnb. Rank for 'vacation rentals PB,' 'beach house rental San Diego,' and reduce platform fees." },
    { title: "Nightlife & Entertainment SEO", description: "SEO for Pacific Beach clubs, bars, and entertainment venues. Be found when visitors search for PB nightlife." },
    { title: "Local Services SEO", description: "Help Pacific Beach service businesses from salons to auto shops get found by the local community." },
  ],
  faqs: [
    { question: "How does SEO help Pacific Beach restaurants?", answer: "Pacific Beach restaurants compete with hundreds of dining options. SEO helps you rank for 'restaurants Pacific Beach,' specific cuisine searches, and 'near me' queries from hungry beach-goers." },
    { question: "Can you help my surf shop compete with big brands?", answer: "Yes! Local SEO is your advantage. We optimize for 'surf shop Pacific Beach,' 'surfboard rental PB,' and location-specific searches that big online retailers can't dominate." },
    { question: "Is Pacific Beach SEO seasonal?", answer: "PB sees higher tourist searches in summer, but locals search year-round. We create strategies that maximize peak season traffic while maintaining strong local visibility throughout the year." },
    { question: "How competitive is SEO in Pacific Beach?", answer: "PB is competitive but many businesses rely on foot traffic without optimizing online presence. Proper SEO gives you a significant advantage in capturing the substantial tourist and local search traffic." },
  ],
  nearbyAreas: ["Mission Beach", "La Jolla", "Crown Point", "Bay Park", "Clairemont", "Bird Rock"],
};

const PacificBeachSEO = () => <NeighborhoodLanding data={data} />;

export default PacificBeachSEO;
