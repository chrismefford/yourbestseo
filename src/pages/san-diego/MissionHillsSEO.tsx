import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "mission-hills-seo",
  name: "Mission Hills",
  heroTitle: "Mission Hills SEO Services – Premium Marketing for Historic San Diego",
  heroDescription: "Premier SEO agency for Mission Hills, San Diego businesses. We help restaurants, boutiques, professional services, and historic businesses rank #1 on Google in this elegant hillside neighborhood.",
  keywords: [
    "Mission Hills SEO",
    "SEO services Mission Hills",
    "Mission Hills SEO company",
    "SEO agency Mission Hills",
    "local SEO Mission Hills",
    "Mission Hills digital marketing",
    "Mission Hills San Diego SEO",
    "Mission Hills Google ranking",
    "Fort Stockton Drive SEO",
    "historic neighborhood SEO",
    "Mission Hills search optimization",
    "best SEO company Mission Hills",
    "upscale SEO San Diego",
    "Mission Hills boutique SEO",
    "craftsman neighborhood SEO",
    "hillside community SEO",
  ],
  stats: [
    { value: "275%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Historic SD Agency" },
    { value: "65", label: "Days to Results" },
    { value: "45+", label: "Mission Hills Clients" },
  ],
  services: [
    { title: "Boutique & Specialty Shop SEO", description: "Help Mission Hills boutiques, antique stores, and specialty shops rank. Attract customers seeking unique, quality finds." },
    { title: "Restaurant & Cafe SEO", description: "Rank for 'restaurants Mission Hills,' 'brunch Fort Stockton,' and the neighborhood's charming dining scene searches." },
    { title: "Professional Services SEO", description: "SEO for Mission Hills architects, interior designers, and professionals serving the preservation-minded community." },
    { title: "Healthcare & Wellness SEO", description: "Help Mission Hills wellness practitioners, therapists, and healthcare providers reach neighborhood residents." },
    { title: "Historic Home Services SEO", description: "Specialized SEO for contractors and craftsmen who work on Mission Hills' historic Craftsman and Spanish Revival homes." },
    { title: "Real Estate SEO", description: "Help Mission Hills real estate agents rank for historic property searches in this architecturally significant neighborhood." },
  ],
  faqs: [
    { question: "What makes Mission Hills SEO unique?", answer: "Mission Hills is a historic neighborhood with discerning residents who value quality and authenticity. SEO must emphasize expertise, craftsmanship, and neighborhood fit." },
    { question: "How competitive is Mission Hills for SEO?", answer: "Competition is moderate. Many quality businesses exist but haven't invested in SEO. Proper optimization can quickly establish strong local visibility." },
    { question: "Can you help businesses serving historic homes?", answer: "Absolutely! We specialize in helping contractors, restorers, and craftsmen rank for historic home-related searches in Mission Hills and similar neighborhoods." },
    { question: "How long until I see results?", answer: "Most Mission Hills businesses see significant improvements within 60-75 days. The quality-focused market means conversions often come from well-qualified leads." },
  ],
  nearbyAreas: ["Hillcrest", "Bankers Hill", "Middletown", "Old Town", "University Heights", "Little Italy"],
};

const MissionHillsSEO = () => <NeighborhoodLanding data={data} />;

export default MissionHillsSEO;
