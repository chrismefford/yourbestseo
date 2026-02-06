import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "uptown-seo",
  name: "Uptown",
  heroTitle: "Uptown SEO Services – Dominate San Diego's Trendy Urban Core",
  heroDescription: "Expert SEO agency for Uptown San Diego businesses. We help restaurants, boutiques, nightlife venues, and professional services rank #1 on Google across Hillcrest, North Park, and beyond.",
  keywords: [
    "Uptown SEO",
    "SEO services Uptown San Diego",
    "Uptown SEO company",
    "SEO agency Uptown",
    "local SEO Uptown",
    "Uptown digital marketing",
    "Uptown San Diego Google ranking",
    "trendy neighborhood SEO",
    "urban core SEO San Diego",
    "Uptown search optimization",
    "best SEO company Uptown",
    "LGBTQ business SEO",
    "hipster neighborhood SEO",
    "Uptown nightlife SEO",
    "boutique SEO San Diego",
    "walkable community SEO",
  ],
  stats: [
    { value: "278%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Urban Core Agency" },
    { value: "60", label: "Days to Results" },
    { value: "85+", label: "Uptown Clients" },
  ],
  services: [
    { title: "Multi-Neighborhood SEO", description: "Dominate searches across all Uptown neighborhoods—Hillcrest, North Park, University Heights, and more—with comprehensive local SEO." },
    { title: "Restaurant & Dining SEO", description: "Rank for 'best restaurants Uptown,' 'brunch Hillcrest,' and dining searches across San Diego's most vibrant food scene." },
    { title: "Nightlife & Entertainment SEO", description: "SEO for Uptown bars, clubs, and entertainment venues. Be found when people search for San Diego nightlife." },
    { title: "Boutique & Retail SEO", description: "Help Uptown's unique shops and boutiques rank. Capture fashion-conscious shoppers searching for local finds." },
    { title: "Health & Wellness SEO", description: "SEO for Uptown gyms, yoga studios, spas, and wellness centers serving the health-conscious community." },
    { title: "Professional Services SEO", description: "Help Uptown attorneys, therapists, and professionals reach the educated urban population." },
  ],
  faqs: [
    { question: "What areas does Uptown SEO cover?", answer: "Uptown encompasses several neighborhoods including Hillcrest, North Park, University Heights, Mission Hills, and Bankers Hill. Our SEO strategies can target specific neighborhoods or the broader Uptown area." },
    { question: "How competitive is Uptown for SEO?", answer: "Uptown is competitive, especially for dining and nightlife. However, the large, engaged population means significant traffic opportunities for businesses that rank well." },
    { question: "Can you help LGBTQ-owned businesses?", answer: "Absolutely! Uptown, especially Hillcrest, is the heart of San Diego's LGBTQ community. We help inclusive businesses reach their target audience through strategic SEO." },
    { question: "How long until I see results?", answer: "Most Uptown businesses see significant improvements within 55-70 days. Competitive categories like dining may take slightly longer to reach top positions." },
  ],
  nearbyAreas: ["Hillcrest", "North Park", "University Heights", "Mission Hills", "Bankers Hill", "Normal Heights"],
};

const UptownSEO = () => <NeighborhoodLanding data={data} />;

export default UptownSEO;
