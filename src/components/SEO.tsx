import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: "website" | "article" | "service" | "organization";
  image?: string;
  noIndex?: boolean;
  // Schema data
  schema?: object | object[];
}

const SITE_NAME = "Your Best SEO";
const SITE_URL = "https://yourbestseo.com";
const DEFAULT_IMAGE = "https://yourbestseo.com/og-image.png";
const TWITTER_HANDLE = "@YourBestSEO";

// Organization Schema - used on all pages
const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Your Best SEO",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 200,
    height: 60,
  },
  description: "Award-winning white-label SEO agency delivering AI-powered SEO services for agencies. 90% cost savings with enterprise-quality results.",
  foundingDate: "2010",
  sameAs: [
    "https://twitter.com/YourBestSEO",
    "https://www.linkedin.com/company/yourbestseo",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-619-555-0123",
    contactType: "sales",
    email: "chris@yourbestseo.com",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

// Website Schema
const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const SEO = ({
  title,
  description = "An SEO partner that shows you everything we do, delivers results fast, and costs 90% less—no excuses, no BS. White-label SEO for agencies.",
  canonical,
  type = "website",
  image = DEFAULT_IMAGE,
  noIndex = false,
  schema,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Outsourced SEO Department for Agencies`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  // Build schema array with proper typing
  const schemaArray: object[] = [
    { "@context": "https://schema.org", ...organizationSchema },
    { "@context": "https://schema.org", ...websiteSchema },
  ];

  // Add page-specific schema
  if (schema) {
    if (Array.isArray(schema)) {
      schema.forEach((s) => schemaArray.push({ "@context": "https://schema.org", ...s }));
    } else {
      schemaArray.push({ "@context": "https://schema.org", ...schema });
    }
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="YourBestSEO" />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaArray)}
      </script>
    </Helmet>
  );
};

// Helper function to generate Service schema
export const generateServiceSchema = (service: {
  name: string;
  description: string;
  price: number;
  slug: string;
}) => ({
  "@type": "Service",
  "@id": `${SITE_URL}/services/${service.slug}/#service`,
  name: service.name,
  description: service.description,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  offers: {
    "@type": "Offer",
    price: service.price,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
});

// Helper function to generate FAQ schema
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// Helper function to generate LocalBusiness schema for location pages
export const generateLocalBusinessSchema = (location: {
  name: string;
  city: string;
  state: string;
  description: string;
}) => ({
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: `${SITE_NAME} - ${location.city} SEO Services`,
  description: location.description,
  areaServed: {
    "@type": "City",
    name: location.city,
    containedInPlace: {
      "@type": "State",
      name: location.state,
    },
  },
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
});

// Helper function to generate BreadcrumbList schema
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.url}`,
  })),
});

// Helper function to generate Article/BlogPosting schema
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
}) => ({
  "@type": "Article",
  headline: article.title,
  description: article.description,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    "@type": "Person",
    name: article.author || "Your Best SEO Team",
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
  image: article.image || DEFAULT_IMAGE,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${article.url}`,
  },
});

// Helper function to generate WebPage schema
export const generateWebPageSchema = (page: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@type": "WebPage",
  "@id": `${SITE_URL}${page.url}/#webpage`,
  url: `${SITE_URL}${page.url}`,
  name: page.name,
  description: page.description,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
});

export default SEO;
