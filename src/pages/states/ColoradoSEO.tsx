import StateLanding from "@/components/StateLanding";

const data = {
  name: "Colorado",
  heroTitle: "Colorado SEO Services – Dominate the Rocky Mountain Market",
  heroDescription: "Award-winning SEO agency serving Colorado businesses from Denver to the mountain towns. We help Colorado companies rank higher and grow their organic traffic.",
  cities: ["Denver", "Boulder", "Colorado Springs", "Fort Collins", "Aurora", "Lakewood", "Vail", "Aspen", "Breckenridge", "Durango"],
  keywords: [
    "Colorado SEO",
    "SEO services Colorado",
    "Colorado SEO company",
    "SEO agency Colorado",
    "Denver SEO",
    "Boulder SEO",
    "Colorado Springs SEO",
    "Colorado digital marketing",
    "outdoor brand SEO",
    "DTC SEO Colorado",
    "ski resort SEO",
    "cannabis SEO Colorado",
    "tech startup SEO Denver",
    "local SEO Colorado",
  ],
  stats: [
    { value: "+248%", label: "Outdoor Revenue" },
    { value: "90+", label: "CO Clients Served" },
    { value: "90", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "Outdoor Brand SEO", description: "Help Colorado outdoor brands rank for gear, adventure, and lifestyle keywords that drive DTC revenue." },
    { title: "DTC Ecommerce SEO", description: "Specialized SEO for Colorado's thriving direct-to-consumer brands with conversion-focused strategies." },
    { title: "Ski & Resort SEO", description: "Help Colorado ski resorts and mountain towns capture seasonal search traffic." },
    { title: "Tech Startup SEO", description: "Help Denver and Boulder tech startups build organic visibility and compete with larger players." },
    { title: "Cannabis SEO Colorado", description: "Compliant SEO strategies for Colorado's cannabis industry with platform-safe content approaches." },
    { title: "Local SEO Colorado", description: "Dominate local search across Colorado metros and mountain communities." },
  ],
  faqs: [
    { question: "What makes Colorado SEO unique?", answer: "Colorado has a unique mix of outdoor brands, tech startups, and tourism-driven businesses. We understand seasonal trends and the outdoor lifestyle that defines the Colorado market." },
    { question: "Do you help Colorado outdoor brands?", answer: "Yes! We have deep experience with outdoor and DTC brands. We understand the gear industry, seasonal keyword trends, and how to compete with major outdoor retailers." },
    { question: "Can you help with cannabis SEO in Colorado?", answer: "Absolutely. We've developed compliant SEO strategies for Colorado cannabis businesses that work within platform restrictions while driving organic visibility." },
  ],
  industries: ["Outdoor & Recreation", "DTC Ecommerce", "Technology", "Cannabis", "Tourism", "Real Estate"],
};

const ColoradoSEO = () => <StateLanding data={data} />;

export default ColoradoSEO;
