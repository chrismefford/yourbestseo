import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "university-heights-seo",
  name: "University Heights",
  heroTitle: "University Heights SEO Services – Grow Your Urban Village Business",
  heroDescription: "Expert SEO agency for University Heights, San Diego businesses. We help restaurants, boutiques, fitness studios, and local services rank #1 on Google in this vibrant, walkable neighborhood.",
  keywords: [
    "University Heights SEO",
    "SEO services University Heights",
    "University Heights SEO company",
    "SEO agency University Heights",
    "local SEO University Heights",
    "University Heights digital marketing",
    "UH SEO San Diego",
    "University Heights Google ranking",
    "Park Boulevard SEO",
    "Adams Avenue SEO",
    "University Heights search optimization",
    "best SEO company University Heights",
    "affordable SEO University Heights",
    "urban village SEO",
    "walkable neighborhood SEO",
    "midtown San Diego SEO",
  ],
  stats: [
    { value: "268%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Midtown Agency" },
    { value: "55", label: "Days to Results" },
    { value: "45+", label: "UH Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate University Heights searches. We optimize for Park Boulevard and Adams Avenue businesses in this walkable urban village." },
    { title: "Restaurant & Cafe SEO", description: "Rank for 'restaurants University Heights,' 'brunch San Diego,' and the neighborhood's popular dining scene searches." },
    { title: "Fitness & Wellness SEO", description: "SEO for University Heights yoga studios, gyms, and wellness centers. The health-conscious community searches online for fitness options." },
    { title: "Boutique & Retail SEO", description: "Help University Heights boutiques and shops stand out. Optimize for local shopping and unique retail searches." },
    { title: "Professional Services SEO", description: "SEO for University Heights therapists, accountants, and professionals serving the educated urban community." },
    { title: "Pet Business SEO", description: "University Heights is dog-friendly. SEO for pet stores, groomers, and veterinary services in the neighborhood." },
  ],
  faqs: [
    { question: "Why choose University Heights for my business SEO?", answer: "University Heights has a highly engaged, educated community that actively searches online for local services. SEO helps you reach residents who value quality local businesses." },
    { question: "How competitive is SEO in University Heights?", answer: "University Heights has growing competition, especially for dining and wellness. However, many businesses still haven't invested in SEO, creating opportunities for early adopters." },
    { question: "What makes University Heights SEO different?", answer: "UH is a walkable urban village with distinct character. We focus on neighborhood-specific keywords and capture searches from residents seeking local, community-oriented businesses." },
    { question: "How long until I see results?", answer: "Most University Heights businesses see improvements within 50-65 days. The engaged local community means good SEO often translates to quick word-of-mouth as well." },
  ],
  nearbyAreas: ["Hillcrest", "North Park", "Normal Heights", "Mission Hills", "Kensington", "Bankers Hill"],
};

const UniversityHeightsSEO = () => <NeighborhoodLanding data={data} />;

export default UniversityHeightsSEO;
