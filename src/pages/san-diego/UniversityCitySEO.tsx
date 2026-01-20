import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "university-city-seo",
  name: "University City",
  heroTitle: "University City SEO Services – Reach UCSD & Tech Corridor Customers",
  heroDescription: "Premier SEO agency for University City, San Diego businesses. We help tech companies, student-focused businesses, restaurants, and professional services rank #1 on Google near UCSD and the UTC area.",
  keywords: [
    "University City SEO",
    "SEO services University City San Diego",
    "University City SEO company",
    "SEO agency University City",
    "local SEO University City",
    "University City digital marketing",
    "UCSD SEO",
    "UTC SEO San Diego",
    "University City Google ranking",
    "tech company SEO San Diego",
    "student business SEO",
    "University City search optimization",
    "best SEO company University City",
    "UTC mall SEO",
    "research park SEO",
    "biotech SEO San Diego",
  ],
  stats: [
    { value: "298%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Tech Corridor Agency" },
    { value: "70", label: "Days to Results" },
    { value: "60+", label: "University City Clients" },
  ],
  services: [
    { title: "Tech & Biotech Company SEO", description: "SEO for University City's thriving tech and biotech sector. Rank for industry keywords, attract talent, and generate B2B leads." },
    { title: "Student-Focused Business SEO", description: "Capture the UCSD student market. SEO for restaurants, apartments, services, and businesses targeting the 40,000+ student population." },
    { title: "UTC Mall Area SEO", description: "Help your UTC area business stand out. Optimize for Westfield UTC shopping, dining, and entertainment searches." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants near UCSD,' 'UTC dining,' and capture students, faculty, and tech workers looking for food options." },
    { title: "Professional Services SEO", description: "SEO for University City law firms, accountants, and professional services serving the educated, affluent community." },
    { title: "Healthcare SEO", description: "Help medical practices near UCSD Medical Center rank for healthcare searches in the University City area." },
  ],
  faqs: [
    { question: "How can I reach UCSD students with SEO?", answer: "Students search differently—often on mobile, looking for deals, late-night food, and convenient services. We optimize for student-specific search patterns and keywords like 'food near UCSD' and 'student apartments San Diego.'" },
    { question: "What about B2B SEO for tech companies?", answer: "University City's tech corridor requires sophisticated B2B SEO. We target industry-specific keywords, create technical content that ranks, and help you compete for talent and clients online." },
    { question: "How competitive is University City for SEO?", answer: "Competition is high near UTC and UCSD, but many businesses still don't optimize properly. The educated, tech-savvy population searches extensively online—proper SEO captures this valuable traffic." },
    { question: "Can you help my business near UTC mall?", answer: "Absolutely! The UTC area sees significant retail and dining traffic. We help you rank for UTC-specific searches and capture shoppers researching options before visiting the area." },
  ],
  nearbyAreas: ["La Jolla", "Mira Mesa", "Sorrento Valley", "Torrey Pines", "Clairemont", "Del Mar Heights"],
};

const UniversityCitySEO = () => <NeighborhoodLanding data={data} />;

export default UniversityCitySEO;
