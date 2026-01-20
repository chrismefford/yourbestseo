import NeighborhoodLanding from "@/components/NeighborhoodLanding";

const data = {
  slug: "north-park-seo",
  name: "North Park",
  heroTitle: "North Park SEO Services – Grow Your Hip Business Online",
  heroDescription: "Top-rated SEO agency for North Park, San Diego businesses. We help boutiques, breweries, restaurants, and local shops rank #1 on Google and attract more customers to this trendy neighborhood.",
  keywords: [
    "North Park SEO",
    "SEO services North Park San Diego",
    "North Park SEO company",
    "SEO agency North Park",
    "local SEO North Park",
    "North Park digital marketing",
    "North Park Google ranking",
    "SEO consultant North Park",
    "small business SEO North Park",
    "North Park search optimization",
    "best SEO company North Park",
    "affordable SEO North Park",
    "North Park web marketing",
    "brewery SEO San Diego",
    "restaurant SEO North Park",
    "boutique SEO San Diego",
  ],
  stats: [
    { value: "285%", label: "Avg. Traffic Increase" },
    { value: "#1", label: "Local Agency" },
    { value: "75", label: "Days to Results" },
    { value: "45+", label: "North Park Clients" },
  ],
  services: [
    { title: "Local SEO for North Park", description: "Dominate Google Maps and local pack results for North Park searches. Perfect for restaurants, boutiques, and craft breweries looking to attract the neighborhood crowd." },
    { title: "Restaurant & Bar SEO", description: "Specialized SEO for North Park's thriving food and beverage scene. Rank for 'best restaurants North Park,' 'craft beer North Park,' and cuisine-specific searches." },
    { title: "Retail & Boutique SEO", description: "Help your North Park shop stand out online. We optimize for 'vintage stores North Park,' 'boutiques San Diego,' and product-specific searches." },
    { title: "Service Business SEO", description: "SEO for North Park salons, fitness studios, wellness centers, and professional services. Capture local customers searching for services in the area." },
    { title: "Content Marketing", description: "Create engaging, SEO-optimized content that resonates with North Park's creative community. Blog posts, neighborhood guides, and local event coverage." },
    { title: "Social Media Integration", description: "Combine SEO with social media strategy for maximum visibility in North Park's digitally-savvy market." },
  ],
  faqs: [
    { question: "Why is SEO important for North Park businesses?", answer: "North Park is one of San Diego's most competitive neighborhoods for local businesses. With hundreds of restaurants, bars, and boutiques, SEO helps your business stand out when locals search for products and services in the area." },
    { question: "How do you approach SEO for North Park restaurants?", answer: "We focus on Google Business Profile optimization, local keywords like 'best brunch North Park' or 'craft cocktails 30th Street,' menu schema markup, and building reviews. Restaurant SEO is about visibility when people are hungry and searching." },
    { question: "What results can North Park businesses expect?", answer: "Our North Park clients typically see 50-100% increases in organic traffic within 90 days, with significant improvements in Google Maps visibility and 'near me' searches for the neighborhood." },
    { question: "Do you work with North Park breweries?", answer: "Yes! We've helped several North Park breweries rank for searches like 'craft beer North Park,' 'breweries near me,' and specific beer style searches. The brewery scene is competitive, and SEO gives you an edge." },
  ],
  nearbyAreas: ["Hillcrest", "University Heights", "Normal Heights", "South Park", "City Heights", "Kensington"],
};

const NorthParkSEO = () => <NeighborhoodLanding data={data} />;

export default NorthParkSEO;
