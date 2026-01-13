import StateLanding from "@/components/StateLanding";

const data = {
  name: "Alaska",
  heroTitle: "Alaska SEO Services – Dominate the Last Frontier",
  heroDescription: "Top-rated SEO agency serving Alaska businesses from Anchorage to Juneau. We help Alaska companies rank higher and reach customers across this unique market.",
  cities: ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan", "Wasilla", "Kenai", "Kodiak", "Palmer", "Bethel"],
  keywords: [
    "Alaska SEO",
    "SEO services Alaska",
    "Alaska SEO company",
    "SEO agency Alaska",
    "Anchorage SEO",
    "Fairbanks SEO",
    "Juneau SEO",
    "Alaska digital marketing",
    "industrial SEO Alaska",
    "tourism SEO Alaska",
    "fishing industry SEO",
    "oil and gas SEO",
    "local SEO Alaska",
  ],
  stats: [
    { value: "+129%", label: "Industrial Leads" },
    { value: "35+", label: "AK Clients Served" },
    { value: "120", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "Industrial SEO Alaska", description: "Help Alaska oil, gas, mining, and industrial companies rank for B2B keywords and generate leads." },
    { title: "Tourism SEO Alaska", description: "Help Alaska tourism operators capture search traffic for cruises, fishing, and wilderness adventures." },
    { title: "Fishing & Maritime SEO", description: "Specialized SEO for Alaska's fishing industry, charter operators, and maritime businesses." },
    { title: "Local SEO Alaska", description: "Dominate local search in Anchorage, Fairbanks, Juneau, and across Alaska communities." },
    { title: "Healthcare SEO Alaska", description: "Help Alaska healthcare providers reach patients across the state's dispersed population." },
    { title: "Construction & Trades SEO", description: "Help Alaska contractors and trades rank for project and service keywords." },
  ],
  faqs: [
    { question: "What makes Alaska SEO different?", answer: "Alaska has a unique market with dispersed population, seasonal industries, and specific search behaviors. We understand these dynamics and create strategies that work for Alaska businesses." },
    { question: "Do you help Alaska industrial companies?", answer: "Yes! We have experience with Alaska oil, gas, mining, and construction companies. We understand the B2B sales cycles and keyword strategies for industrial SEO." },
    { question: "Can you help tourism businesses in Alaska?", answer: "Absolutely. We help Alaska tour operators, fishing charters, and adventure companies rank for travel keywords and capture direct bookings." },
  ],
  industries: ["Oil & Gas", "Fishing & Maritime", "Tourism", "Healthcare", "Construction", "Mining"],
};

const AlaskaSEO = () => <StateLanding data={data} />;

export default AlaskaSEO;
