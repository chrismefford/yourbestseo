import { DropInBlogProvider } from "@dropinblog/react-core";
import { ReactNode } from "react";

const DROPINBLOG_BLOG_ID = "aaccbdb9-3466-4e98-8baf-d86ddbe61db7";
const DROPINBLOG_API_TOKEN = import.meta.env.VITE_DROPINBLOG_API_TOKEN || "";

export const DROPINBLOG_CONFIGURED = !!DROPINBLOG_API_TOKEN;

const BlogProvider = ({ children }: { children: ReactNode }) => {
  if (!DROPINBLOG_CONFIGURED) return <>{children}</>;

  return (
    <DropInBlogProvider blogId={DROPINBLOG_BLOG_ID} apiToken={DROPINBLOG_API_TOKEN} basePath="/blog">
      {children}
    </DropInBlogProvider>
  );
};

export default BlogProvider;
