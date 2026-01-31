import { useLocation } from "react-router-dom";
import { DropInBlogProvider, useDropInBlogRoute, DropInBlogHead, DropInBlogContent } from "@dropinblog/react-core";
import { Head } from "vite-react-ssg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DROPINBLOG_BLOG_ID = "aaccbdb9-3466-4e98-8baf-d86ddbe61db7";
const DROPINBLOG_API_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YWQxODQzOC1lMzAyLTRiMmYtYmNjZC03ZjNhZmM0MTU1ZDAiLCJqdGkiOiJjMTQ4NTkxYmEwZjFlNDU5ZTllMTg1MGJmN2RjOGE1MzIxNzNiYmU0NWYxZTM0ZWM2OTRkNzc2YTljMDU2NjRhMDI5ZGU5NzhkYjQyNDM3ZSIsImlhdCI6MTc2ODQ5Mzk2My45MjEyNTgsIm5iZiI6MTc2ODQ5Mzk2My45MjEyNjEsImV4cCI6MjU1NzQxMjM2My44ODA2ODYsInN1YiI6IjcwNDU3MDYwMzk4MCIsInNjb3BlcyI6W119.LIxqXQgl7_D4IG_RIXqpf2O2iUBwC7TnNf8xUHa65O6C05sJVAnm7Dzb4kUqHIXIjfHjTIeVFjr1JlH5SasHuA9jwD4DGGXFpfxtCgfYvJqUdOAEJSLx8QtxLmLmHe0q3eAWR7P0FZ2cHVzqhxMlWWeeJYEdOys3nPIQJMRG1dIyZQOfmDPKfFn1T9kTJ2ijdfhShXvEiQT_NuUxUbiILSCqhmeFHWzM1rHp6IjajleE91UBplU589ctGEkVYcnDsczoIeg6dwTpy01JocEyegjx0JsWY-aNVHBDU8RZB8EtCGpg7c-MLMGWEW7fUGxBI7TMw-N8im5yBoJ8M-Zaxi0sX3cyp9kp60CspyI7JNUrQsekxHx8ByOVa-VJhdKYNm7_LmLr9VP8noUZ6fFXnzZIvXOOpTNms89mDPgr1mjRt7YQx3tJpVZK2ZaT4xzHYwi_MjukaWAqmzTEOFL1-7-mVc2Q_GUYjaGlXKfVtDUO_LVq6eZtuUlIznigik7qtDBjLTRNbUjWF3hDV3hErkemcAXbiG1oReaQ0849q6AX0-Fn1e6u6LW0_poFayO0S2dFpIvjp5PuYs0Nol6DZD4Rs1jpNgobQaRMw5Mq3oM0ikmBDOhr7o8hSYFRDDsYW7w7bEv5drWXAN92k_1dBv9E2YW-TpMcXVFBuEc1LtI";
const SITE_URL = "https://yourbestseo.com";

const BlogContentInner = () => {
  const location = useLocation();
  // Pass the full pathname - the SDK uses basePath to determine routing
  const routeState = useDropInBlogRoute(location.pathname);

  const bodyHtml = routeState.resolution?.payload?.body_html || "";
  const headData = routeState.resolution?.payload?.head_data;
  const headItems = routeState.resolution?.payload?.head_items;

  // Extract title and description from headData for SSG fallback
  const pageTitle = headData?.title || "Blog | Your Best SEO";
  const pageDescription = headData?.description || "Expert SEO insights, tips, and strategies to help your business dominate search results.";

  if (routeState.status === "loading") {
    return (
      <div className="min-h-screen bg-background">
        <Head>
          <title>Blog | Your Best SEO</title>
          <meta name="description" content="Expert SEO insights, tips, and strategies to help your business dominate search results." />
          <link rel="canonical" href={`${SITE_URL}${location.pathname}`} />
        </Head>
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (routeState.status === "error") {
    console.error("DropInBlog error:", routeState.error);
    return (
      <div className="min-h-screen bg-background">
        <Head>
          <title>Blog | Your Best SEO</title>
          <meta name="description" content="Expert SEO insights, tips, and strategies to help your business dominate search results." />
          <link rel="canonical" href={`${SITE_URL}/blog`} />
        </Head>
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold text-foreground mb-4">Blog</h1>
              <p className="text-muted-foreground mb-6">
                Our blog content is loading. If this persists, please refresh the page.
              </p>
              <a 
                href="/blog" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Return to Blog Home
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Inject SSG-compatible meta tags */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`${SITE_URL}${location.pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}${location.pathname}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      {/* DropInBlog also injects its own head tags for additional SEO data */}
      <DropInBlogHead headData={headData} headItems={headItems} />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <DropInBlogContent bodyHtml={bodyHtml} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const BlogContent = () => {
  return (
    <DropInBlogProvider blogId={DROPINBLOG_BLOG_ID} apiToken={DROPINBLOG_API_TOKEN} basePath="/blog">
      <BlogContentInner />
    </DropInBlogProvider>
  );
};

export default BlogContent;
