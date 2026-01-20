import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "mission-beach-seo",
  name: "Mission Beach",
  heroTitle: "Mission Beach SEO Services – Capture the Boardwalk Crowd Online",
  heroDescription: "Expert SEO agency for Mission Beach, San Diego businesses. We help boardwalk shops, vacation rentals, restaurants, and beach attractions rank #1 on Google and attract more visitors.",
  keywords: [
    "Mission Beach SEO",
    "SEO services Mission Beach",
    "Mission Beach SEO company",
    "SEO agency Mission Beach",
    "local SEO Mission Beach",
    "Mission Beach digital marketing",
    "Belmont Park SEO",
    "boardwalk business SEO",
    "Mission Beach Google ranking",
    "vacation rental SEO Mission Beach",
    "beach attraction SEO",
    "Mission Beach search optimization",
    "best SEO company Mission Beach",
    "tourist SEO San Diego",
    "Mission Bay SEO",
    "beach activity SEO",
  ],
  stats: [
    { value: "310%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Tourist Area Agency" },
    { value: "60", label: "Days to Results" },
    { value: "50+", label: "Mission Beach Clients" },
  ],
  services: [
    { title: "Vacation Rental SEO", description: "Reduce Airbnb and VRBO fees with direct booking SEO. Rank for 'Mission Beach vacation rentals,' 'beachfront rental San Diego,' and seasonal searches." },
    { title: "Boardwalk Business SEO", description: "Help your boardwalk shop, restaurant, or attraction rank for tourist searches. Capture visitors before they arrive in Mission Beach." },
    { title: "Beach Activity SEO", description: "SEO for jet ski rentals, kayak tours, beach equipment rentals, and activity providers. Be found when tourists plan their beach day." },
    { title: "Restaurant & Bar SEO", description: "Rank for 'restaurants Mission Beach,' 'beachside dining San Diego,' and capture hungry beachgoers searching for food options." },
    { title: "Belmont Park Area SEO", description: "Optimize for Belmont Park attraction searches, roller coaster keywords, and Mission Beach entertainment queries." },
    { title: "Water Sports SEO", description: "SEO for surf schools, paddleboard rentals, boat tours, and water sports businesses on Mission Bay." },
  ],
  faqs: [
    { question: "How can SEO help my vacation rental?", answer: "SEO helps you get direct bookings instead of paying 15-20% platform fees. We rank your property for 'Mission Beach vacation rental' and similar searches, driving traffic directly to your booking site." },
    { question: "Is Mission Beach SEO seasonal?", answer: "Summer sees peak tourist traffic, but we optimize year-round. Winter brings different visitors—surfers, locals, and off-season travelers—and we capture those searches too while building authority for peak season." },
    { question: "Can you help attractions compete with Belmont Park?", answer: "We can help smaller attractions rank for specific activity searches. While Belmont Park dominates general searches, specific activity keywords like 'jet ski rental Mission Bay' are opportunities for smaller businesses." },
    { question: "What about competing with big travel sites?", answer: "Local businesses can outrank TripAdvisor and Yelp for specific local searches. We focus on hyper-local keywords like 'restaurants on Mission Beach boardwalk' where local businesses have advantages." },
  ],
  nearbyAreas: ["Pacific Beach", "Ocean Beach", "Bay Park", "Crown Point", "Mission Bay", "Fiesta Island"],
};

const MissionBeachSEO = () => <NeighborhoodLanding data={data} />;

export default MissionBeachSEO;
