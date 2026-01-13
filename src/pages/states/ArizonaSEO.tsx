import StateLanding from "@/components/StateLanding";

const data = {
  name: "Arizona",
  heroTitle: "Arizona SEO Services – Grow Your Southwest Business",
  heroDescription: "Top-rated SEO agency serving Arizona businesses from Phoenix to Tucson. We help Arizona companies dominate search results and generate more leads.",
  cities: ["Phoenix", "Scottsdale", "Tucson", "Mesa", "Chandler", "Gilbert", "Tempe", "Glendale", "Peoria", "Flagstaff"],
  keywords: [
    "Arizona SEO",
    "SEO services Arizona",
    "Arizona SEO company",
    "SEO agency Arizona",
    "Phoenix SEO",
    "Scottsdale SEO",
    "Tucson SEO",
    "Arizona digital marketing",
    "healthcare SEO Arizona",
    "real estate SEO Arizona",
    "local SEO Arizona",
    "small business SEO Arizona",
    "B2B SEO Arizona",
  ],
  stats: [
    { value: "+204%", label: "Healthcare Leads" },
    { value: "80+", label: "AZ Clients Served" },
    { value: "90", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "Healthcare SEO Arizona", description: "Help Arizona healthcare providers rank for medical searches and attract new patients across the state." },
    { title: "Real Estate SEO Arizona", description: "Dominate Arizona real estate searches with optimized property listings and agent profiles." },
    { title: "Local SEO Arizona", description: "Optimize for Phoenix, Scottsdale, Tucson and across Arizona with local search strategies." },
    { title: "Resort & Hospitality SEO", description: "Help Arizona resorts and hotels rank for travel and tourism keywords." },
    { title: "Senior Living SEO", description: "Specialized SEO for Arizona's growing senior living and retirement community market." },
    { title: "Home Services SEO", description: "Help Arizona HVAC, plumbing, and home service companies dominate local search." },
  ],
  faqs: [
    { question: "Why is Arizona a growing SEO market?", answer: "Arizona is one of the fastest-growing states with booming healthcare, real estate, and tech sectors. More businesses means more competition for search visibility." },
    { question: "Do you specialize in Arizona healthcare SEO?", answer: "Yes! We have extensive experience with Arizona healthcare providers and understand the unique compliance and competitive dynamics of medical SEO." },
    { question: "How do you handle Phoenix vs. Tucson SEO?", answer: "We create market-specific strategies for each Arizona metro. Phoenix/Scottsdale and Tucson have different competitive landscapes that require tailored approaches." },
  ],
  industries: ["Healthcare", "Real Estate", "Senior Living", "Hospitality", "Technology", "Home Services"],
};

const ArizonaSEO = () => <StateLanding data={data} />;

export default ArizonaSEO;
