import StateLanding from "@/components/StateLanding";

const data = {
  slug: "utah-seo",
  name: "Utah",
  heroTitle: "Utah SEO Services – Grow Your Silicon Slopes Business",
  heroDescription: "Top-rated SEO agency serving Utah businesses from Salt Lake City to Provo. We help Utah companies—especially SaaS and tech—rank higher and generate qualified leads.",
  cities: ["Salt Lake City", "Provo", "Lehi", "Ogden", "Park City", "St. George", "Orem", "Sandy", "Draper", "American Fork"],
  keywords: [
    "Utah SEO",
    "SEO services Utah",
    "Utah SEO company",
    "SEO agency Utah",
    "Salt Lake City SEO",
    "Provo SEO",
    "Lehi SEO",
    "Silicon Slopes SEO",
    "SaaS SEO Utah",
    "tech startup SEO Utah",
    "Utah digital marketing",
    "B2B SEO Utah",
    "local SEO Utah",
  ],
  stats: [
    { value: "3.8×", label: "SaaS SQLs" },
    { value: "60+", label: "UT Clients Served" },
    { value: "90", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "SaaS SEO Utah", description: "Specialized SEO for Utah's booming SaaS ecosystem. We help Silicon Slopes companies rank and generate SQLs." },
    { title: "Tech Startup SEO", description: "Help Utah tech startups build organic visibility and compete in crowded markets." },
    { title: "B2B SEO Utah", description: "Generate qualified leads for Utah B2B companies through strategic content and link building." },
    { title: "Local SEO Utah", description: "Dominate local search across Salt Lake, Utah County, and St. George markets." },
    { title: "Outdoor Industry SEO", description: "Help Utah outdoor brands rank for gear and adventure keywords." },
    { title: "Healthcare SEO Utah", description: "Help Utah healthcare systems and providers grow their patient base through organic search." },
  ],
  faqs: [
    { question: "Why is Utah a hot SEO market?", answer: "Utah's 'Silicon Slopes' has become a major tech hub with hundreds of SaaS companies. This creates intense competition for search rankings and makes professional SEO essential." },
    { question: "Do you specialize in SaaS SEO?", answer: "Yes! We have extensive experience with Utah SaaS companies and understand the unique keyword strategies and content approaches that drive SQLs." },
    { question: "What results can Utah SaaS companies expect?", answer: "Our Utah SaaS clients typically see 3-4x increases in organic SQLs within 6 months through targeted content strategies and technical optimization." },
  ],
  industries: ["SaaS", "Technology", "Healthcare", "Outdoor Recreation", "Financial Services", "Education"],
};

const UtahSEO = () => <StateLanding data={data} />;

export default UtahSEO;
