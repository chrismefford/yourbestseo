import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, generateBreadcrumbSchema } from "@/components/SEO";

const Blog = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://io.dropinblog.com/embedjs/aaccbdb9-3466-4e98-8baf-d86ddbe61db7.js"]'
    );
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://io.dropinblog.com/embedjs/aaccbdb9-3466-4e98-8baf-d86ddbe61db7.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="SEO Blog - Tips, Strategies & Insights"
        description="Expert SEO insights, strategies, and tips from the Your Best SEO team. Learn how to improve your search rankings and drive organic traffic."
        canonical="/blog"
        type="website"
        schema={breadcrumbSchema}
      />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* DropInBlog will render here with its own title */}
          <div id="dib-posts"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
