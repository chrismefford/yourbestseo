import { DropInBlogProvider } from "@dropinblog/react-core";
import { ReactNode } from "react";

const DROPINBLOG_BLOG_ID = "aaccbdb9-3466-4e98-8baf-d86ddbe61db7";
const DROPINBLOG_API_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YWQxODQzOC1lMzAyLTRiMmYtYmNjZC03ZjNhZmM0MTU1ZDAiLCJqdGkiOiJjMTQ4NTkxYmEwZjFlNDU5ZTllMTg1MGJmN2RjOGE1MzIxNzNiYmU0NWYxZTM0ZWM2OTRkNzc2YTljMDU2NjRhMDI5ZGU5NzhkYjQyNDM3ZSIsImlhdCI6MTc2ODQ5Mzk2My45MjEyNTgsIm5iZiI6MTc2ODQ5Mzk2My45MjEyNjEsImV4cCI6MjU1NzQxMjM2My44ODA2ODYsInN1YiI6IjcwNDU3MDYwMzk4MCIsInNjb3BlcyI6W119.LIxqXQgl7_D4IG_RIXqpf2O2iUBwC7TnNf8xUHa65O6C05sJVAnm7Dzb4kUqHIXIjfHjTIeVFjr1JlH5SasHuA9jwD4DGGXFpfxtCgfYvJqUdOAEJSLx8QtxLmLmHe0q3eAWR7P0FZ2cHVzqhxMlWWeeJYEdOys3nPIQJMRG1dIyZQOfmDPKfFn1T9kTJ2ijdfhShXvEiQT_NuUxUbiILSCqhmeFHWzM1rHp6IjajleE91UBplU589ctGEkVYcnDsczoIeg6dwTpy01JocEyegjx0JsWY-aNVHBDU8RZB8EtCGpg7c-MLMGWEW7fUGxBI7TMw-N8im5yBoJ8M-Zaxi0sX3cyp9kp60CspyI7JNUrQsekxHx8ByOVa-VJhdKYNm7_LmLr9VP8noUZ6fFXnzZIvXOOpTNms89mDPgr1mjRt7YQx3tJpVZK2ZaT4xzHYwi_MjukaWAqmzTEOFL1-7-mVc2Q_GUYjaGlXKfVtDUO_LVq6eZtuUlIznigik7qtDBjLTRNbUjWF3hDV3hErkemcAXbiG1oReaQ0849q6AX0-Fn1e6u6LW0_poFayO0S2dFpIvjp5PuYs0Nol6DZD4Rs1jpNgobQaRMw5Mq3oM0ikmBDOhr7o8hSYFRDDsYW7w7bEv5drWXAN92k_1dBv9E2YW-TpMcXVFBuEc1LtI";

export const DROPINBLOG_CONFIGURED = true;

const BlogProvider = ({ children }: { children: ReactNode }) => {
  if (!DROPINBLOG_CONFIGURED) return <>{children}</>;

  return (
    <DropInBlogProvider blogId={DROPINBLOG_BLOG_ID} apiToken={DROPINBLOG_API_TOKEN} basePath="/blog">
      {children}
    </DropInBlogProvider>
  );
};

export default BlogProvider;
