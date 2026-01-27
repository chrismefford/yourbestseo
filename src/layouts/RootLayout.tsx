import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

// Minimal loading fallback for lazy routes
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" />
  </div>
);

/**
 * Root Layout component that wraps all routes with necessary providers.
 * This is used by vite-react-ssg for SSG rendering.
 */
const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Suspense fallback={<PageLoading />}>
        <Outlet />
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export default RootLayout;
