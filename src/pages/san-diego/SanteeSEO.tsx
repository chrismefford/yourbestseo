import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "santee-seo",
  name: "Santee",
  heroTitle: "Santee SEO Services – Grow Your East County Business Online",
  heroDescription: "Leading SEO agency for Santee, California businesses. We help local shops, restaurants, service providers, and outdoor recreation businesses rank #1 on Google and attract more East County customers.",
  keywords: [
    "Santee SEO",
    "SEO services Santee CA",
    "Santee SEO company",
    "SEO agency Santee",
    "local SEO Santee",
    "Santee digital marketing",
    "East County SEO San Diego",
    "Santee Google ranking",
    "SEO consultant Santee",
    "small business SEO Santee",
    "Santee search optimization",
    "best SEO company Santee",
    "affordable SEO Santee",
    "Santee Lakes marketing",
    "outdoor recreation SEO",
    "East County digital marketing",
  ],
  stats: [
    { value: "268%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "East County Agency" },
    { value: "70", label: "Days to Results" },
    { value: "55+", label: "Santee Clients" },
  ],
  services: [
    { title: "Local SEO for Santee", description: "Dominate Google Maps and local pack results for Santee and East County searches. We optimize for 'near me' searches that drive foot traffic." },
    { title: "Home Services SEO", description: "SEO for Santee contractors, plumbers, electricians, HVAC, and home service providers. Rank when homeowners need your services." },
    { title: "Retail & Shopping Center SEO", description: "Help your Santee retail business stand out. Optimize for Santee Trolley Square, Town Center, and local shopping searches." },
    { title: "Recreation & Outdoor SEO", description: "SEO for businesses near Santee Lakes, outdoor recreation, camping, and fishing-related services. Capture the outdoor enthusiast market." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants in Santee,' 'best food Santee,' and cuisine-specific searches. Drive more diners to your East County restaurant." },
    { title: "Healthcare & Medical SEO", description: "SEO for Santee medical practices, dentists, chiropractors, and healthcare providers. Build trust and attract patients online." },
  ],
  faqs: [
    { question: "Why should Santee businesses invest in SEO?", answer: "Santee residents increasingly search online before visiting local businesses. SEO ensures your business appears when East County customers search for products and services you offer, driving more foot traffic and calls." },
    { question: "How is Santee SEO different from San Diego SEO?", answer: "Santee SEO focuses on East County-specific keywords and local search behavior. We understand the Santee market, from Santee Lakes to the town centers, and create strategies that resonate with local customers." },
    { question: "What results can Santee businesses expect?", answer: "Our Santee clients typically see 40-80% increases in local search visibility within 60 days, with significant improvements in phone calls, direction requests, and website traffic from East County searches." },
    { question: "Do you work with home service companies in Santee?", answer: "Yes! Home services is one of our specialties. We help contractors, plumbers, landscapers, and other service providers dominate local searches in Santee and surrounding East County areas." },
  ],
  nearbyAreas: ["El Cajon", "Lakeside", "La Mesa", "Spring Valley", "Alpine", "Rancho San Diego"],
};

const SanteeSEO = () => <NeighborhoodLanding data={data} />;

export default SanteeSEO;
