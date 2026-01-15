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
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import FAQ from "./pages/FAQ";
import FreeAudit from "./pages/FreeAudit";

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

// Glossary pages
import Glossary from "./pages/Glossary";
import GoogleBusinessProfileGlossary from "./pages/glossary/GoogleBusinessProfile";
import LocalPackGlossary from "./pages/glossary/LocalPack";
import NAPConsistencyGlossary from "./pages/glossary/NAPConsistency";
import LocalCitationsGlossary from "./pages/glossary/LocalCitations";
import SchemaMarkupGlossary from "./pages/glossary/SchemaMarkup";
import BacklinksGlossary from "./pages/glossary/Backlinks";
import MetaDescriptionGlossary from "./pages/glossary/MetaDescription";
import CrawlabilityGlossary from "./pages/glossary/Crawlability";
import CoreWebVitalsGlossary from "./pages/glossary/CoreWebVitals";
import IndexabilityGlossary from "./pages/glossary/Indexability";
import TitleTagGlossary from "./pages/glossary/TitleTag";
import KeywordOptimizationGlossary from "./pages/glossary/KeywordOptimization";
import HeaderTagsGlossary from "./pages/glossary/HeaderTags";
import DomainAuthorityGlossary from "./pages/glossary/DomainAuthority";
import LinkBuildingGlossary from "./pages/glossary/LinkBuilding";
// Batch 1 - Fundamentals
import SearchEngineOptimizationGlossary from "./pages/glossary/SearchEngineOptimization";
import OrganicTrafficGlossary from "./pages/glossary/OrganicTraffic";
import KeywordResearchGlossary from "./pages/glossary/KeywordResearch";
import SearchIntentGlossary from "./pages/glossary/SearchIntent";
import LongTailKeywordsGlossary from "./pages/glossary/LongTailKeywords";
import SERPGlossary from "./pages/glossary/SERP";
import FeaturedSnippetsGlossary from "./pages/glossary/FeaturedSnippets";
// Batch 2 - More fundamentals and on-page
import ShortTailKeywordsGlossary from "./pages/glossary/ShortTailKeywords";
import KeywordDifficultyGlossary from "./pages/glossary/KeywordDifficulty";
import SearchVolumeGlossary from "./pages/glossary/SearchVolume";
import ClickThroughRateGlossary from "./pages/glossary/ClickThroughRate";
import ImpressionsGlossary from "./pages/glossary/Impressions";
import PeopleAlsoAskGlossary from "./pages/glossary/PeopleAlsoAsk";
import MetaTitleGlossary from "./pages/glossary/MetaTitle";
import InternalLinkingGlossary from "./pages/glossary/InternalLinking";
// Batch 3 - More terms
import AnchorTextGlossary from "./pages/glossary/AnchorText";
import PageAuthorityGlossary from "./pages/glossary/PageAuthority";
import TopicClustersGlossary from "./pages/glossary/TopicClusters";
import PillarPagesGlossary from "./pages/glossary/PillarPages";
import EEATGlossary from "./pages/glossary/EEAT";
import LocalSEOGlossary from "./pages/glossary/LocalSEO";
// Batch 4 - Content and Technical
import ImageAltTextGlossary from "./pages/glossary/ImageAltText";
import DuplicateContentGlossary from "./pages/glossary/DuplicateContent";
import ThinContentGlossary from "./pages/glossary/ThinContent";
import ContentFreshnessGlossary from "./pages/glossary/ContentFreshness";
import SemanticSEOGlossary from "./pages/glossary/SemanticSEO";
import XMLSitemapGlossary from "./pages/glossary/XMLSitemap";

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
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/free-audit" element={<FreeAudit />} />
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
          
          {/* Glossary pages */}
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/glossary/google-business-profile" element={<GoogleBusinessProfileGlossary />} />
          <Route path="/glossary/local-pack" element={<LocalPackGlossary />} />
          <Route path="/glossary/nap-consistency" element={<NAPConsistencyGlossary />} />
          <Route path="/glossary/local-citations" element={<LocalCitationsGlossary />} />
          <Route path="/glossary/schema-markup" element={<SchemaMarkupGlossary />} />
          <Route path="/glossary/backlinks" element={<BacklinksGlossary />} />
          <Route path="/glossary/meta-description" element={<MetaDescriptionGlossary />} />
          <Route path="/glossary/crawlability" element={<CrawlabilityGlossary />} />
          <Route path="/glossary/core-web-vitals" element={<CoreWebVitalsGlossary />} />
          <Route path="/glossary/indexability" element={<IndexabilityGlossary />} />
          <Route path="/glossary/title-tag" element={<TitleTagGlossary />} />
          <Route path="/glossary/keyword-optimization" element={<KeywordOptimizationGlossary />} />
          <Route path="/glossary/header-tags" element={<HeaderTagsGlossary />} />
          <Route path="/glossary/domain-authority" element={<DomainAuthorityGlossary />} />
          <Route path="/glossary/link-building" element={<LinkBuildingGlossary />} />
          {/* Batch 1 - Fundamentals */}
          <Route path="/glossary/search-engine-optimization" element={<SearchEngineOptimizationGlossary />} />
          <Route path="/glossary/organic-traffic" element={<OrganicTrafficGlossary />} />
          <Route path="/glossary/keyword-research" element={<KeywordResearchGlossary />} />
          <Route path="/glossary/search-intent" element={<SearchIntentGlossary />} />
          <Route path="/glossary/long-tail-keywords" element={<LongTailKeywordsGlossary />} />
          <Route path="/glossary/serp" element={<SERPGlossary />} />
          <Route path="/glossary/featured-snippets" element={<FeaturedSnippetsGlossary />} />
          {/* Batch 2 - More fundamentals and on-page */}
          <Route path="/glossary/short-tail-keywords" element={<ShortTailKeywordsGlossary />} />
          <Route path="/glossary/keyword-difficulty" element={<KeywordDifficultyGlossary />} />
          <Route path="/glossary/search-volume" element={<SearchVolumeGlossary />} />
          <Route path="/glossary/click-through-rate" element={<ClickThroughRateGlossary />} />
          <Route path="/glossary/impressions" element={<ImpressionsGlossary />} />
          <Route path="/glossary/people-also-ask" element={<PeopleAlsoAskGlossary />} />
          <Route path="/glossary/meta-title" element={<MetaTitleGlossary />} />
          <Route path="/glossary/internal-linking" element={<InternalLinkingGlossary />} />
          {/* Batch 3 - More terms */}
          <Route path="/glossary/anchor-text" element={<AnchorTextGlossary />} />
          <Route path="/glossary/page-authority" element={<PageAuthorityGlossary />} />
          <Route path="/glossary/topic-clusters" element={<TopicClustersGlossary />} />
          <Route path="/glossary/pillar-pages" element={<PillarPagesGlossary />} />
          <Route path="/glossary/eeat" element={<EEATGlossary />} />
          <Route path="/glossary/local-seo" element={<LocalSEOGlossary />} />
          {/* Batch 4 - Content and Technical */}
          <Route path="/glossary/image-alt-text" element={<ImageAltTextGlossary />} />
          <Route path="/glossary/duplicate-content" element={<DuplicateContentGlossary />} />
          <Route path="/glossary/thin-content" element={<ThinContentGlossary />} />
          <Route path="/glossary/content-freshness" element={<ContentFreshnessGlossary />} />
          <Route path="/glossary/semantic-seo" element={<SemanticSEOGlossary />} />
          <Route path="/glossary/xml-sitemap" element={<XMLSitemapGlossary />} />
          
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
