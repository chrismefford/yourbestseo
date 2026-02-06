import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "south-park-seo",
  name: "South Park",
  heroTitle: "South Park SEO Services – Grow Your Artisan Business Online",
  heroDescription: "Expert SEO agency for South Park, San Diego businesses. We help cafes, boutiques, artisan shops, and local services rank #1 on Google in this charming walkable neighborhood.",
  keywords: [
    "South Park SEO",
    "SEO services South Park San Diego",
    "South Park SEO company",
    "SEO agency South Park",
    "local SEO South Park",
    "South Park digital marketing",
    "South Park Google ranking",
    "SEO consultant South Park",
    "small business SEO South Park",
    "South Park search optimization",
    "best SEO company South Park",
    "affordable SEO South Park",
    "South Park web marketing",
    "artisan shop SEO San Diego",
    "cafe SEO South Park",
    "boutique SEO South Park",
  ],
  stats: [
    { value: "290%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Artisan Experts" },
    { value: "60", label: "Days to Results" },
    { value: "20+", label: "South Park Clients" },
  ],
  services: [
    { title: "Local SEO for South Park", description: "Dominate Google Maps and local search results for South Park. Perfect for the artisan shops, cafes, and boutiques along Fern Street and 30th Street." },
    { title: "Cafe & Bakery SEO", description: "Specialized SEO for South Park's beloved coffee shops and bakeries. Rank for 'best coffee South Park,' 'bakeries near me,' and specialty drink searches." },
    { title: "Boutique & Artisan SEO", description: "Help your South Park artisan business stand out online. We optimize for handmade goods, local crafts, and specialty product searches." },
    { title: "Restaurant SEO", description: "SEO for South Park's intimate dining establishments. Rank for neighborhood restaurant searches and cuisine-specific queries." },
    { title: "Wellness & Service SEO", description: "SEO for South Park yoga studios, wellness centers, and professional services. Capture health-conscious local customers." },
    { title: "Content Marketing", description: "Create engaging content that highlights South Park's walkable charm and artisan culture while driving organic traffic." },
  ],
  faqs: [
    { question: "Why is SEO important for South Park businesses?", answer: "South Park is a beloved, walkable neighborhood with a tight-knit community. SEO helps your artisan business attract both locals and visitors searching for the unique, curated experiences South Park offers." },
    { question: "How do you approach SEO for South Park's artisan businesses?", answer: "We focus on long-tail keywords that capture South Park's artisan character, optimize Google Business Profile with rich imagery, and create content that tells your unique story while ranking for relevant searches." },
    { question: "What results can South Park businesses expect?", answer: "Our South Park clients typically see 55-95% increases in organic traffic within 90 days, with excellent improvements in local visibility and 'best of' search rankings." },
    { question: "Do you work with cafes and coffee shops?", answer: "Yes! We've helped several South Park cafes rank for 'best coffee San Diego,' 'coffee shops near me,' and specialty drink searches. The local coffee scene is competitive, and SEO helps you stand out." },
  ],
  nearbyAreas: ["North Park", "Golden Hill", "Burlingame", "Hillcrest", "Balboa Park", "Downtown San Diego"],
};

const SouthParkSEO = () => <NeighborhoodLanding data={data} />;

export default SouthParkSEO;
