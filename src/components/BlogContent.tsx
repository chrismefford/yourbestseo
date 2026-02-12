import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback, useRef } from "react";
import { DropInBlogProvider, useDropInBlogRoute, DropInBlogHead, DropInBlogContent } from "@dropinblog/react-core";
import { Head, ClientOnly } from "vite-react-ssg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DROPINBLOG_BLOG_ID = "aaccbdb9-3466-4e98-8baf-d86ddbe61db7";
const DROPINBLOG_API_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YWQxODQzOC1lMzAyLTRiMmYtYmNjZC03ZjNhZmM0MTU1ZDAiLCJqdGkiOiJjMTQ4NTkxYmEwZjFlNDU5ZTllMTg1MGJmN2RjOGE1MzIxNzNiYmU0NWYxZTM0ZWM2OTRkNzc2YTljMDU2NjRhMDI5ZGU5NzhkYjQyNDM3ZSIsImlhdCI6MTc2ODQ5Mzk2My45MjEyNTgsIm5iZiI6MTc2ODQ5Mzk2My45MjEyNjEsImV4cCI6MjU1NzQxMjM2My44ODA2ODYsInN1YiI6IjcwNDU3MDYwMzk4MCIsInNjb3BlcyI6W119.LIxqXQgl7_D4IG_RIXqpf2O2iUBwC7TnNf8xUHa65O6C05sJVAnm7Dzb4kUqHIXIjfHjTIeVFjr1JlH5SasHuA9jwD4DGGXFpfxtCgfYvJqUdOAEJSLx8QtxLmLmHe0q3eAWR7P0FZ2cHVzqhxMlWWeeJYEdOys3nPIQJMRG1dIyZQOfmDPKfFn1T9kTJ2ijdfhShXvEiQT_NuUxUbiILSCqhmeFHWzM1rHp6IjajleE91UBplU589ctGEkVYcnDsczoIeg6dwTpy01JocEyegjx0JsWY-aNVHBDU8RZB8EtCGpg7c-MLMGWEW7fUGxBI7TMw-N8im5yBoJ8M-Zaxi0sX3cyp9kp60CspyI7JNUrQsekxHx8ByOVa-VJhdKYNm7_LmLr9VP8noUZ6fFXnzZIvXOOpTNms89mDPgr1mjRt7YQx3tJpVZK2ZaT4xzHYwi_MjukaWAqmzTEOFL1-7-mVc2Q_GUYjaGlXKfVtDUO_LVq6eZtuUlIznigik7qtDBjLTRNbUjWF3hDV3hErkemcAXbiG1oReaQ0849q6AX0-Fn1e6u6LW0_poFayO0S2dFpIvjp5PuYs0Nol6DZD4Rs1jpNgobQaRMw5Mq3oM0ikmBDOhr7o8hSYFRDDsYW7w7bEv5drWXAN92k_1dBv9E2YW-TpMcXVFBuEc1LtI";
const SITE_URL = "https://yourbestseo.com";

/**
 * Converts DropInBlog query-parameter URLs to path-based URLs.
 * The DropInBlog API returns links like /blog?p=slug but the React SDK
 * expects path-based routing like /blog/slug.
 */
function useQueryParamRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const postSlug = params.get("p");
    const categorySlug = params.get("c");
    const authorSlug = params.get("a");
    const page = params.get("page");

    if (postSlug) {
      // /blog?p=slug → /blog/slug
      navigate(`/blog/${postSlug}`, { replace: true });
    } else if (categorySlug) {
      // /blog?c=slug → /blog/category/slug
      const path = page ? `/blog/category/${categorySlug}/page/${page}` : `/blog/category/${categorySlug}`;
      navigate(path, { replace: true });
    } else if (authorSlug) {
      // /blog?a=slug → /blog/author/slug
      const path = page ? `/blog/author/${authorSlug}/page/${page}` : `/blog/author/${authorSlug}`;
      navigate(path, { replace: true });
    } else if (page && location.pathname === "/blog") {
      // /blog?page=2 → /blog/page/2
      navigate(`/blog/page/${page}`, { replace: true });
    }
  }, [location.search, location.pathname, navigate]);
}

/**
 * Intercepts clicks on DropInBlog-rendered links that use query params
 * and converts them to path-based navigation for React Router.
 */
function useLinkInterceptor(containerRef: React.RefObject<HTMLElement | null>) {
  const navigate = useNavigate();

  const handleClick = useCallback((e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest("a");
    if (!target) return;

    const href = target.getAttribute("href");
    if (!href) return;

    // Parse the href to check if it's a DropInBlog query-param link
    try {
      const url = new URL(href, window.location.origin);
      const isSameOrigin = url.origin === window.location.origin;
      if (!isSameOrigin) return;

      const postSlug = url.searchParams.get("p");
      const categorySlug = url.searchParams.get("c");
      const authorSlug = url.searchParams.get("a");
      const page = url.searchParams.get("page");

      let newPath: string | null = null;

      if (postSlug) {
        newPath = `/blog/${postSlug}`;
      } else if (categorySlug) {
        newPath = page ? `/blog/category/${categorySlug}/page/${page}` : `/blog/category/${categorySlug}`;
      } else if (authorSlug) {
        newPath = page ? `/blog/author/${authorSlug}/page/${page}` : `/blog/author/${authorSlug}`;
      } else if (page && url.pathname === "/blog") {
        newPath = `/blog/page/${page}`;
      } else if (url.pathname.startsWith("/blog")) {
        // Already a path-based blog link - use React Router navigation
        newPath = url.pathname;
      }

      if (newPath) {
        e.preventDefault();
        navigate(newPath);
        window.scrollTo(0, 0);
      }
    } catch {
      // Invalid URL, let the browser handle it
    }
  }, [navigate]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, [containerRef, handleClick]);
}

const BlogContentInner = () => {
  const location = useLocation();
  const contentRef = useRef<HTMLElement>(null);

  // Redirect query-param URLs to path-based URLs
  useQueryParamRedirect();

  // Intercept clicks on DropInBlog links
  useLinkInterceptor(contentRef);

  const routeState = useDropInBlogRoute(location.pathname);
  const bodyHtml = routeState.resolution?.payload?.body_html || "";
  const headData = routeState.resolution?.payload?.head_data;
  const headItems = routeState.resolution?.payload?.head_items;
  const pageTitle = headData?.title || "SEO & Digital Marketing Blog | Your Best SEO";
  const pageDescription = headData?.description || "Actionable SEO insights, advanced guides, and proven strategies for marketing agencies. Learn link building, keyword research, and technical SEO.";

  if (routeState.status === "loading") {
    return <div className="flex items-center justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>;
  }
  if (routeState.status === "error") {
    return <div className="text-center py-20"><h1 className="text-2xl font-bold text-foreground mb-4">Blog</h1><p className="text-muted-foreground mb-6">Our blog content is loading. If this persists, please refresh the page.</p><a href="/blog" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Return to Blog Home</a></div>;
  }
  return (
    <div ref={contentRef}>
      <Head><title>{pageTitle}</title><meta name="description" content={pageDescription} /></Head>
      <DropInBlogHead headData={headData} headItems={headItems} />
      <DropInBlogContent bodyHtml={bodyHtml} />
    </div>
  );
};

const BlogContent = () => {
  const location = useLocation();
  const canonicalPath = location.pathname === "/blog" || location.pathname === "/blog/" ? "/blog" : location.pathname;
  return (
    <div className="min-h-screen bg-background">
      <Head><title>SEO & Digital Marketing Blog | Your Best SEO</title><meta name="description" content="Actionable SEO insights, advanced guides, and proven strategies for marketing agencies. Learn link building, keyword research, and technical SEO." /><link rel="canonical" href={`${SITE_URL}${canonicalPath}`} /><meta property="og:type" content="website" /><meta property="og:url" content={`${SITE_URL}${canonicalPath}`} /><meta property="og:title" content="SEO & Digital Marketing Blog | Your Best SEO" /><meta property="og:description" content="Actionable SEO insights, advanced guides, and proven strategies for marketing agencies." /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="SEO & Digital Marketing Blog | Your Best SEO" /><meta name="twitter:description" content="Actionable SEO insights, advanced guides, and proven strategies for marketing agencies." /></Head>
      <Header />
      <main className="pt-24 pb-16"><div className="container mx-auto px-4 sm:px-6"><DropInBlogProvider blogId={DROPINBLOG_BLOG_ID} apiToken={DROPINBLOG_API_TOKEN} basePath="/blog"><ClientOnly>{() => <BlogContentInner />}</ClientOnly></DropInBlogProvider></div></main>
      <Footer />
    </div>
  );
};

export default BlogContent;
