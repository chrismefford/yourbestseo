import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import PaymentSuccess from "./pages/PaymentSuccess";

// San Diego neighborhood pages
import DowntownSanDiegoSEO from "./pages/san-diego/DowntownSanDiegoSEO";
import GaslampQuarterSEO from "./pages/san-diego/GaslampQuarterSEO";
import LittleItalySEO from "./pages/san-diego/LittleItalySEO";
import EastVillageSEO from "./pages/san-diego/EastVillageSEO";
import MarinaDistrictSEO from "./pages/san-diego/MarinaDistrictSEO";
import CortezHillSEO from "./pages/san-diego/CortezHillSEO";

// State SEO pages
import CaliforniaSEO from "./pages/states/CaliforniaSEO";
import OregonSEO from "./pages/states/OregonSEO";
import WashingtonSEO from "./pages/states/WashingtonSEO";
import ArizonaSEO from "./pages/states/ArizonaSEO";
import ColoradoSEO from "./pages/states/ColoradoSEO";
import UtahSEO from "./pages/states/UtahSEO";
import NevadaSEO from "./pages/states/NevadaSEO";
import HawaiiSEO from "./pages/states/HawaiiSEO";
import AlaskaSEO from "./pages/states/AlaskaSEO";
import NewMexicoSEO from "./pages/states/NewMexicoSEO";
import IdahoSEO from "./pages/states/IdahoSEO";
import MontanaSEO from "./pages/states/MontanaSEO";
import WyomingSEO from "./pages/states/WyomingSEO";

// À La Carte Service pages
import SEOBlogPosts from "./pages/services/SEOBlogPosts";
import TechnicalSEO from "./pages/services/TechnicalSEO";
import GoogleBusinessProfile from "./pages/services/GoogleBusinessProfile";
import KeywordResearch from "./pages/services/KeywordResearch";
import CompetitorAnalysis from "./pages/services/CompetitorAnalysis";
import WhiteHatBacklinks from "./pages/services/WhiteHatBacklinks";
import LocalCitations from "./pages/services/LocalCitations";
import ReviewManagement from "./pages/services/ReviewManagement";
import SchemaMarkup from "./pages/services/SchemaMarkup";
import RankingReports from "./pages/services/RankingReports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          
          {/* À La Carte Service pages */}
          <Route path="/services/seo-blog-posts" element={<SEOBlogPosts />} />
          <Route path="/services/technical-seo" element={<TechnicalSEO />} />
          <Route path="/services/google-business-profile" element={<GoogleBusinessProfile />} />
          <Route path="/services/keyword-research" element={<KeywordResearch />} />
          <Route path="/services/competitor-analysis" element={<CompetitorAnalysis />} />
          <Route path="/services/white-hat-backlinks" element={<WhiteHatBacklinks />} />
          <Route path="/services/local-citations" element={<LocalCitations />} />
          <Route path="/services/review-management" element={<ReviewManagement />} />
          <Route path="/services/schema-markup" element={<SchemaMarkup />} />
          <Route path="/services/ranking-reports" element={<RankingReports />} />
          
          {/* San Diego neighborhood SEO pages */}
          <Route path="/san-diego/downtown-san-diego-seo" element={<DowntownSanDiegoSEO />} />
          <Route path="/san-diego/gaslamp-quarter-seo" element={<GaslampQuarterSEO />} />
          <Route path="/san-diego/little-italy-seo" element={<LittleItalySEO />} />
          <Route path="/san-diego/east-village-seo" element={<EastVillageSEO />} />
          <Route path="/san-diego/marina-district-seo" element={<MarinaDistrictSEO />} />
          <Route path="/san-diego/cortez-hill-seo" element={<CortezHillSEO />} />
          
          {/* State SEO pages */}
          <Route path="/states/california-seo" element={<CaliforniaSEO />} />
          <Route path="/states/oregon-seo" element={<OregonSEO />} />
          <Route path="/states/washington-seo" element={<WashingtonSEO />} />
          <Route path="/states/arizona-seo" element={<ArizonaSEO />} />
          <Route path="/states/colorado-seo" element={<ColoradoSEO />} />
          <Route path="/states/utah-seo" element={<UtahSEO />} />
          <Route path="/states/nevada-seo" element={<NevadaSEO />} />
          <Route path="/states/hawaii-seo" element={<HawaiiSEO />} />
          <Route path="/states/alaska-seo" element={<AlaskaSEO />} />
          <Route path="/states/new-mexico-seo" element={<NewMexicoSEO />} />
          <Route path="/states/idaho-seo" element={<IdahoSEO />} />
          <Route path="/states/montana-seo" element={<MontanaSEO />} />
          <Route path="/states/wyoming-seo" element={<WyomingSEO />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
