import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Lazy load the blog content component to avoid loading SDK on other pages
const LazyBlogContent = lazy(() => import("@/components/BlogContent"));

const BlogLoadingState = () => (
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

const Blog = () => {
  return (
    <Suspense fallback={<BlogLoadingState />}>
      <LazyBlogContent />
    </Suspense>
  );
};

export default Blog;
