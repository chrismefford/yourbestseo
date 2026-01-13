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
