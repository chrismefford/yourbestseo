import StateLanding from "@/components/StateLanding";

const data = {
  name: "Oregon",
  heroTitle: "Oregon SEO Services – Grow Your Pacific Northwest Business",
  heroDescription: "Top-rated SEO agency serving Oregon businesses from Portland to Bend. We help Oregon companies rank higher on Google and drive sustainable organic growth.",
  cities: ["Portland", "Eugene", "Bend", "Salem", "Medford", "Corvallis", "Hillsboro", "Beaverton", "Ashland", "Lake Oswego"],
  keywords: [
    "Oregon SEO",
    "SEO services Oregon",
    "Oregon SEO company",
    "SEO agency Oregon",
    "Portland SEO",
    "Eugene SEO",
    "Bend SEO",
    "Pacific Northwest SEO",
    "Oregon digital marketing",
    "B2B SEO Oregon",
    "outdoor industry SEO",
    "craft brewery SEO",
    "local SEO Oregon",
    "small business SEO Oregon",
  ],
  stats: [
    { value: "+188%", label: "Avg. B2B Traffic" },
    { value: "75+", label: "OR Clients Served" },
    { value: "120", label: "Days to Page 1" },
    { value: "2025", label: "Award Finalist" },
  ],
  services: [
    { title: "B2B SEO Oregon", description: "Help Oregon B2B companies rank for industry keywords and generate qualified leads through organic search." },
    { title: "Local SEO Oregon", description: "Dominate local search across Oregon cities. Google Business optimization and local citation building." },
    { title: "Outdoor & Recreation SEO", description: "Specialized SEO for Oregon's outdoor industry—gear brands, tour operators, and adventure companies." },
    { title: "Craft Beverage SEO", description: "Help Oregon breweries, wineries, and distilleries rank locally and attract visitors." },
    { title: "Tech Startup SEO", description: "Portland and Oregon tech companies trust us to build organic visibility in competitive markets." },
    { title: "Healthcare SEO Oregon", description: "Help Oregon healthcare providers rank for medical searches and grow their patient base." },
  ],
  faqs: [
    { question: "What makes Oregon SEO different?", answer: "Oregon has a unique business landscape with strong outdoor, craft beverage, and tech industries. We tailor strategies to Oregon's specific market dynamics and consumer behavior." },
    { question: "Do you serve all of Oregon?", answer: "Yes! We serve businesses across Oregon including Portland metro, Eugene, Bend, Salem, and southern Oregon. Our local SEO strategies adapt to each market." },
    { question: "How do you help Oregon outdoor brands?", answer: "We have deep experience in the outdoor industry, understanding seasonal trends, gear keywords, and the Oregon outdoor culture that drives purchasing decisions." },
  ],
  industries: ["Outdoor & Recreation", "Craft Beverages", "Technology", "Healthcare", "Manufacturing", "Agriculture"],
};

const OregonSEO = () => <StateLanding data={data} />;

export default OregonSEO;
