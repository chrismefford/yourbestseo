import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "san-marcos-seo",
  name: "San Marcos",
  heroTitle: "San Marcos SEO Services – Grow Your North County Business",
  heroDescription: "Expert SEO agency for San Marcos, California businesses. We help restaurants, retailers, and service providers rank #1 on Google in this rapidly growing North County city.",
  keywords: [
    "San Marcos SEO", "SEO services San Marcos", "San Marcos SEO company",
    "SEO agency San Marcos", "local SEO San Marcos", "San Marcos digital marketing",
    "San Marcos California SEO", "San Marcos Google ranking", "Restaurant Row SEO",
    "CSUSM SEO", "San Marcos search optimization", "best SEO company San Marcos",
    "affordable SEO San Marcos", "North County SEO", "San Marcos business marketing", "university area SEO",
  ],
  stats: [
    { value: "255%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "San Marcos Agency" },
    { value: "50", label: "Days to Results" },
    { value: "45+", label: "San Marcos Clients" },
  ],
  services: [
    { title: "Local Business SEO", description: "Dominate San Marcos searches. We optimize for Restaurant Row, university area, and surrounding communities." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'restaurants San Marcos,' 'Restaurant Row dining,' and North County food searches." },
    { title: "University Market SEO", description: "Reach CSUSM students and staff with SEO targeting university-area searches." },
    { title: "Home Services SEO", description: "SEO for San Marcos contractors, landscapers, and home service providers." },
    { title: "Healthcare & Dental SEO", description: "Help San Marcos medical and dental practices reach growing families." },
    { title: "Retail & Shopping SEO", description: "Help San Marcos retailers attract customers from this rapidly growing city." },
  ],
  faqs: [
    { question: "Why should San Marcos businesses invest in SEO?", answer: "San Marcos is one of the fastest-growing cities in San Diego County. SEO captures the increasing search demand from new residents." },
    { question: "How competitive is San Marcos for SEO?", answer: "Moderate competition, especially around Restaurant Row. Strategic SEO helps you stand out." },
    { question: "Can you target CSUSM students?", answer: "Yes! We create SEO strategies that reach university students and staff searching for nearby services." },
    { question: "How long until I see results?", answer: "Most San Marcos businesses see results within 45-60 days." },
  ],
  nearbyAreas: ["Escondido", "Vista", "Carlsbad", "Oceanside", "Rancho Bernardo", "Lake San Marcos"],
};

const SanMarcosSEO = () => <NeighborhoodLanding data={data} />;

export default SanMarcosSEO;
