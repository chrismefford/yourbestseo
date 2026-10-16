import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

/**
 * Root Layout component that wraps all routes with necessary providers.
 * This is used by vite-react-ssg for SSG rendering.
 */
const RootLayout = () => {
  const { pathname } = useLocation();
  // Authority guides do not render their own navigation, unlike other pages.
  const needsSharedHeader = pathname.startsWith("/authority/");
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      {needsSharedHeader && <Header />}
      <Outlet />
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default RootLayout;
