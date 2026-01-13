import StateLanding from "@/components/StateLanding";

const data = {
  name: "Idaho",
  heroTitle: "Idaho SEO Services – Grow Your Gem State Business",
  heroDescription: "Top-rated SEO agency serving Idaho businesses from Boise to Coeur d'Alene. We help Idaho companies rank higher and generate leads through organic search.",
  cities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Coeur d'Alene", "Pocatello", "Twin Falls", "Caldwell", "Sun Valley", "Moscow"],
  keywords: [
    "Idaho SEO",
    "SEO services Idaho",
    "Idaho SEO company",
    "SEO agency Idaho",
    "Boise SEO",
    "Coeur d'Alene SEO",
    "Idaho Falls SEO",
    "Idaho digital marketing",
    "agritech SEO Idaho",
    "tech startup SEO Boise",
    "outdoor recreation SEO",
    "local SEO Idaho",
  ],
  stats: [
    { value: "+196%", label: "Agritech SQLs" },
    { value: "45+", label: "ID Clients Served" },
    { value: "90", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "Agritech SEO Idaho", description: "Specialized SEO for Idaho's agricultural technology companies and farming businesses." },
    { title: "Tech Startup SEO Boise", description: "Help Boise's growing tech scene build organic visibility and generate leads." },
    { title: "Outdoor Recreation SEO", description: "Help Idaho outdoor, ski, and adventure companies rank for recreation keywords." },
    { title: "Local SEO Idaho", description: "Dominate local search in Boise, Coeur d'Alene, Idaho Falls, and across Idaho." },
    { title: "Manufacturing SEO", description: "Help Idaho manufacturers and industrial companies generate B2B leads through search." },
    { title: "Healthcare SEO Idaho", description: "Help Idaho healthcare providers grow their patient base through organic search." },
  ],
  faqs: [
    { question: "What makes Idaho a growing SEO market?", answer: "Idaho is one of the fastest-growing states with a booming tech scene in Boise and strong agriculture and outdoor industries. More competition means more need for professional SEO." },
    { question: "Do you specialize in agritech SEO?", answer: "Yes! We have deep experience with Idaho agritech companies and understand the unique B2B sales cycles and keyword strategies for agricultural technology." },
    { question: "Can you help Boise tech startups?", answer: "Absolutely. We help Boise startups build organic visibility from the ground up and compete with larger, more established companies." },
  ],
  industries: ["Agritech", "Technology", "Outdoor Recreation", "Manufacturing", "Healthcare", "Agriculture"],
};

const IdahoSEO = () => <StateLanding data={data} />;

export default IdahoSEO;
