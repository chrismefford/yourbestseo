import { useLocation } from "react-router-dom";
import { useDropInBlogRoute, DropInBlogHead, DropInBlogContent } from "@dropinblog/react-core";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DROPINBLOG_CONFIGURED } from "@/components/BlogProvider";

const BlogContent = () => {
  const location = useLocation();
  const routeState = useDropInBlogRoute(location.pathname);

  const bodyHtml = routeState.resolution?.payload?.body_html || "";
  const headData = routeState.resolution?.payload?.head_data;
  const headItems = routeState.resolution?.payload?.head_items;

  if (routeState.status === "loading") {
    return (
      <div className="min-h-screen bg-background">
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
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold text-foreground mb-4">Error Loading Blog</h1>
              <p className="text-muted-foreground">Unable to load blog content. Please try again later.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
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

const BlogNotConfigured = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-foreground mb-4">Blog Coming Soon</h1>
          <p className="text-muted-foreground">The blog is being configured. Please check back later.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

const Blog = () => {
  if (!DROPINBLOG_CONFIGURED) {
    return <BlogNotConfigured />;
  }

  return <BlogContent />;
};

export default Blog;
