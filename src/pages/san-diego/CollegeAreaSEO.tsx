import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "college-area-seo",
  name: "College Area",
  heroTitle: "College Area SEO Services – Reach SDSU Students & Residents Online",
  heroDescription: "Expert SEO agency for College Area, San Diego businesses. We help restaurants, shops, tutoring services, and local businesses rank #1 on Google near San Diego State University.",
  keywords: [
    "College Area SEO", "SEO services College Area", "College Area SEO company",
    "SEO agency College Area", "local SEO College Area", "College Area digital marketing",
    "SDSU SEO", "College Area Google ranking", "San Diego State University SEO",
    "College Area search optimization", "best SEO company College Area", "affordable SEO College Area",
    "student market SEO", "university area SEO", "College Area business marketing", "El Cajon Boulevard SEO",
  ],
  stats: [
    { value: "270%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "College Area Agency" },
    { value: "45", label: "Days to Results" },
    { value: "40+", label: "College Area Clients" },
  ],
  services: [
    { title: "Student Market SEO", description: "Reach SDSU's 35,000+ students with SEO targeting student-intent keywords and mobile-first searches." },
    { title: "Restaurant & Fast Casual SEO", description: "Rank for 'restaurants near SDSU,' 'late night food College Area,' and student dining searches." },
    { title: "Tutoring & Education SEO", description: "SEO for College Area tutoring centers, test prep, and educational services serving university students." },
    { title: "Fitness & Wellness SEO", description: "Help College Area gyms and wellness businesses attract health-conscious students and residents." },
    { title: "Retail & Shopping SEO", description: "SEO for College Area shops, bookstores, and retailers serving the university community." },
    { title: "Housing & Real Estate SEO", description: "Help College Area property managers and real estate agents reach students searching for housing." },
  ],
  faqs: [
    { question: "Why is SEO important near SDSU?", answer: "SDSU brings 35,000+ students who search online for everything. SEO ensures your business captures this young, digitally native market." },
    { question: "How do you target college students with SEO?", answer: "We focus on mobile-first optimization, late-night search terms, budget-friendly keywords, and social-signal integration that resonates with students." },
    { question: "How competitive is College Area for SEO?", answer: "Moderate competition due to the large student population. However, most businesses use basic marketing, so strategic SEO creates strong advantages." },
    { question: "How long until I see results?", answer: "Most College Area businesses see improvements within 40-55 days. Student-oriented keywords often have faster ranking potential." },
  ],
  nearbyAreas: ["North Park", "City Heights", "Talmadge", "Allied Gardens", "San Carlos", "Rolando"],
};

const CollegeAreaSEO = () => <NeighborhoodLanding data={data} />;

export default CollegeAreaSEO;
