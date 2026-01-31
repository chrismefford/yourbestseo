import BlogContent from "@/components/BlogContent";

/**
 * Blog page wrapper.
 * 
 * NOTE: We import BlogContent synchronously (not with React.lazy) because
 * vite-react-ssg prerenders Suspense fallbacks, not the actual content.
 * This ensures the SSG build captures the correct meta tags.
 * 
 * The DropInBlog SDK is client-side only and fetches content at runtime.
 * For SSG/SEO, fallback meta tags are defined in BlogContent's Head component.
 */
const Blog = () => {
  return <BlogContent />;
};

export default Blog;
