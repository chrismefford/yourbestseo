import { Head } from "vite-react-ssg";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: "website" | "article" | "service" | "organization";
  image?: string;
  noIndex?: boolean;
  schema?: object | object[];
}

const SITE_NAME = "Your Best SEO";
const SITE_URL = "https://yourbestseo.com";
const TWITTER_HANDLE = "@YourBestSEO";

const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Your Best SEO",
  url: SITE_URL,
  description: "Local SEO and AI search specialists. We get local businesses found on ChatGPT, Perplexity, Claude, and Google Maps.",
  foundingDate: "2010",
  sameAs: ["https://twitter.com/YourBestSEO", "https://www.linkedin.com/company/yourbestseo"],
  contactPoint: { "@type": "ContactPoint", telephone: "+1-619-903-6599", contactType: "sales", email: "chris@yourbestseo.com", availableLanguage: ["English"] },
  address: { "@type": "PostalAddress", streetAddress: "8620 Ian Way", addressLocality: "San Diego", addressRegion: "CA", postalCode: "92071", addressCountry: "US" },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const SEO = ({ title, description = "Help local customers find your business through Google Maps, Google search and AI answers. Talk with Chris Mefford about visibility and appointments.", canonical, type = "website", image, noIndex = false, schema }: SEOProps) => {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Local SEO & AI Search Specialists`;
  const canonicalUrl = `${SITE_URL}${canonical ?? pathname}`;
  const schemaArray: object[] = [{ "@context": "https://schema.org", ...organizationSchema }, { "@context": "https://schema.org", ...websiteSchema }];
  if (schema) { if (Array.isArray(schema)) { schema.forEach((s) => schemaArray.push({ "@context": "https://schema.org", ...s })); } else { schemaArray.push({ "@context": "https://schema.org", ...schema }); } }

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="YourBestSEO" />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:type" content={type === "article" ? "article" : "website"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <script type="application/ld+json">{JSON.stringify(schemaArray)}</script>
    </Head>
  );
};

export const generateServiceSchema = (service: { name: string; description: string; price: number; slug: string }) => ({ "@type": "Service", "@id": `${SITE_URL}/services/${service.slug}/#service`, name: service.name, description: service.description, provider: { "@id": `${SITE_URL}/#organization` }, areaServed: { "@type": "Country", name: "United States" }, offers: { "@type": "Offer", price: service.price, priceCurrency: "USD", availability: "https://schema.org/InStock" } });
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({ "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) });
export const generateLocalBusinessSchema = (location: { name: string; city: string; state: string; description: string }) => ({ "@type": "LocalBusiness", "@id": `${SITE_URL}/#localbusiness`, name: `${SITE_NAME} - ${location.city} SEO Services`, description: location.description, url: SITE_URL, telephone: "+1-619-903-6599", address: organizationSchema.address, areaServed: { "@type": "City", name: location.city, containedInPlace: { "@type": "State", name: location.state } }, parentOrganization: { "@id": `${SITE_URL}/#organization` } });
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({ "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${SITE_URL}${item.url}` })) });
export const generateArticleSchema = (article: { title: string; description: string; datePublished: string; dateModified?: string; author?: string; image?: string; url: string }) => ({ "@type": "Article", headline: article.title, description: article.description, datePublished: article.datePublished, dateModified: article.dateModified || article.datePublished, author: { "@type": "Person", name: article.author || "Your Best SEO Team" }, publisher: { "@id": `${SITE_URL}/#organization` }, ...(article.image ? { image: article.image } : {}), mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${article.url}` } });
export const generateWebPageSchema = (page: { name: string; description: string; url: string }) => ({ "@type": "WebPage", "@id": `${SITE_URL}${page.url}/#webpage`, url: `${SITE_URL}${page.url}`, name: page.name, description: page.description, isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#organization` } });

export default SEO;
