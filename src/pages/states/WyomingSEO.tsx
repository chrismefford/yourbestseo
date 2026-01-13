import StateLanding from "@/components/StateLanding";

const data = {
  name: "Wyoming",
  heroTitle: "Wyoming SEO Services – Grow Your Cowboy State Business",
  heroDescription: "Top-rated SEO agency serving Wyoming businesses from Jackson Hole to Cheyenne. We help Wyoming companies rank higher and capture search traffic across this unique market.",
  cities: ["Jackson Hole", "Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs", "Sheridan", "Cody", "Teton Village", "Pinedale"],
  keywords: [
    "Wyoming SEO",
    "SEO services Wyoming",
    "Wyoming SEO company",
    "SEO agency Wyoming",
    "Jackson Hole SEO",
    "Cheyenne SEO",
    "Casper SEO",
    "Wyoming digital marketing",
    "luxury travel SEO",
    "energy sector SEO",
    "ranch SEO Wyoming",
    "local SEO Wyoming",
  ],
  stats: [
    { value: "2.7×", label: "Luxury Revenue" },
    { value: "25+", label: "WY Clients Served" },
    { value: "90", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "Luxury Travel SEO", description: "Help Jackson Hole and Wyoming luxury properties rank for high-end travel and ski keywords." },
    { title: "Energy Sector SEO", description: "Specialized SEO for Wyoming's oil, gas, coal, and renewable energy companies." },
    { title: "Ranch & Outfitter SEO", description: "Help Wyoming guest ranches, hunting outfitters, and guides rank for outdoor keywords." },
    { title: "Local SEO Wyoming", description: "Dominate local search in Jackson, Cheyenne, Casper, and across Wyoming." },
    { title: "Real Estate SEO Wyoming", description: "Help Wyoming real estate agents rank for ranch, land, and property searches." },
    { title: "Tourism & Recreation SEO", description: "Help Yellowstone-area businesses and Wyoming attractions capture tourism traffic." },
  ],
  faqs: [
    { question: "What makes Wyoming SEO unique?", answer: "Wyoming has a small population but major industries in energy, luxury tourism (Jackson Hole), and ranching. We create strategies that reach both local and out-of-state audiences." },
    { question: "Do you help Jackson Hole businesses?", answer: "Yes! We specialize in helping Jackson Hole luxury resorts, restaurants, and real estate companies rank for high-value travel and property keywords." },
    { question: "Can you help Wyoming energy companies?", answer: "Absolutely. We have experience with Wyoming oil, gas, and mining companies. We understand B2B energy keywords and lead generation strategies." },
  ],
  industries: ["Luxury Tourism", "Energy", "Ranching", "Real Estate", "Outdoor Recreation", "Mining"],
};

const WyomingSEO = () => <StateLanding data={data} />;

export default WyomingSEO;
