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
import Questions from "./pages/Questions";
import WhatIsSEO from "./pages/questions/WhatIsSEO";
import HowLongDoesSEOTake from "./pages/questions/HowLongDoesSEOTake";
import HowMuchDoesSEOCost from "./pages/questions/HowMuchDoesSEOCost";
import WhatIsOrganicTraffic from "./pages/questions/WhatIsOrganicTraffic";
import WhatAreKeywords from "./pages/questions/WhatAreKeywords";
import WhatIsABacklink from "./pages/questions/WhatIsABacklink";
import WhatIsDomainAuthority from "./pages/questions/WhatIsDomainAuthority";
import WhatIsASERP from "./pages/questions/WhatIsASERP";
import WhatIsLocalSEO from "./pages/questions/WhatIsLocalSEO";
import HowToRankInGoogleMaps from "./pages/questions/HowToRankInGoogleMaps";
import WhatIsGoogleBusinessProfile from "./pages/questions/WhatIsGoogleBusinessProfile";
import HowToGetMoreGoogleReviews from "./pages/questions/HowToGetMoreGoogleReviews";
import WhatAreLocalCitations from "./pages/questions/WhatAreLocalCitations";
import WhatIsNAPConsistency from "./pages/questions/WhatIsNAPConsistency";
import HowToOptimizeForNearMeSearches from "./pages/questions/HowToOptimizeForNearMeSearches";
import WhatIsTheLocalPack from "./pages/questions/WhatIsTheLocalPack";
import WhatIsTechnicalSEO from "./pages/questions/WhatIsTechnicalSEO";
import HowToImprovePageSpeed from "./pages/questions/HowToImprovePageSpeed";
import WhatAreCoreWebVitals from "./pages/questions/WhatAreCoreWebVitals";
import WhatIsCrawlBudget from "./pages/questions/WhatIsCrawlBudget";
import WhatIsSchemaMarkup from "./pages/questions/WhatIsSchemaMarkup";
import WhatIsMobileFirstIndexing from "./pages/questions/WhatIsMobileFirstIndexing";
import WhatIsOnPageSEO from "./pages/questions/WhatIsOnPageSEO";
import WhatIsOffPageSEO from "./pages/questions/WhatIsOffPageSEO";
import WhatIsKeywordResearch from "./pages/questions/WhatIsKeywordResearch";
import HowToDoLocalKeywordResearch from "./pages/questions/HowToDoLocalKeywordResearch";
import WhatIsContentMarketing from "./pages/questions/WhatIsContentMarketing";
import WhatIsSEOAudit from "./pages/questions/WhatIsSEOAudit";
import WhatIsSearchIntent from "./pages/questions/WhatIsSearchIntent";
import WhatIsXMLSitemap from "./pages/questions/WhatIsXMLSitemap";
import WhatIsRobotsTxt from "./pages/questions/WhatIsRobotsTxt";
import WhatAreCanonicalTags from "./pages/questions/WhatAreCanonicalTags";
import HowToFixDuplicateContent from "./pages/questions/HowToFixDuplicateContent";
import WhatAreLongTailKeywords from "./pages/questions/WhatAreLongTailKeywords";
import WhatIsEEAT from "./pages/questions/WhatIsEEAT";
import HowLongShouldBlogPostsBe from "./pages/questions/HowLongShouldBlogPostsBe";
import HowToWriteSEOContent from "./pages/questions/HowToWriteSEOContent";
import HowOftenShouldIPublishContent from "./pages/questions/HowOftenShouldIPublishContent";
import WhatIsContentFreshness from "./pages/questions/WhatIsContentFreshness";
import HowToDoCompetitorAnalysis from "./pages/questions/HowToDoCompetitorAnalysis";
import WhatIsLinkBuilding from "./pages/questions/WhatIsLinkBuilding";
import HowToRecoverFromGooglePenalty from "./pages/questions/HowToRecoverFromGooglePenalty";
import WhatIsWhiteHatSEO from "./pages/questions/WhatIsWhiteHatSEO";
import WhatIsBlackHatSEO from "./pages/questions/WhatIsBlackHatSEO";
import HowToBuildTopicClusters from "./pages/questions/HowToBuildTopicClusters";
import WhatIsSEOROI from "./pages/questions/WhatIsSEOROI";
import SEOvsPPC from "./pages/questions/SEOvsPPC";
import WhatIsGoogleSearchConsole from "./pages/questions/WhatIsGoogleSearchConsole";
import WhatIsGoogleAnalytics from "./pages/questions/WhatIsGoogleAnalytics";
import BestSEOTools from "./pages/questions/BestSEOTools";
import HowToTrackKeywordRankings from "./pages/questions/HowToTrackKeywordRankings";
import HowToDoASiteAudit from "./pages/questions/HowToDoASiteAudit";
import WhatIsScreamingFrog from "./pages/questions/WhatIsScreamingFrog";
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
// Batch 5 - Additional terms
import AIContentOptimizationGlossary from "./pages/glossary/AIContentOptimization";
import StructuredDataGlossary from "./pages/glossary/StructuredData";
import CrawlBudgetGlossary from "./pages/glossary/CrawlBudget";
import RobotsTxtGlossary from "./pages/glossary/RobotsTxt";
import PageSpeedGlossary from "./pages/glossary/PageSpeed";
import MobileFirstIndexingGlossary from "./pages/glossary/MobileFirstIndexing";
import ResponsiveDesignGlossary from "./pages/glossary/ResponsiveDesign";
import CanonicalTagsGlossary from "./pages/glossary/CanonicalTags";
import URLStructureGlossary from "./pages/glossary/URLStructure";
import SlugOptimizationGlossary from "./pages/glossary/SlugOptimization";
import ContentPruningGlossary from "./pages/glossary/ContentPruning";
import LSIKeywordsGlossary from "./pages/glossary/LSIKeywords";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          {/* Batch 5 - Additional terms */}
          <Route path="/glossary/ai-content-optimization" element={<AIContentOptimizationGlossary />} />
          <Route path="/glossary/structured-data" element={<StructuredDataGlossary />} />
          <Route path="/glossary/crawl-budget" element={<CrawlBudgetGlossary />} />
          <Route path="/glossary/robots-txt" element={<RobotsTxtGlossary />} />
          <Route path="/glossary/page-speed" element={<PageSpeedGlossary />} />
          <Route path="/glossary/mobile-first-indexing" element={<MobileFirstIndexingGlossary />} />
          <Route path="/glossary/responsive-design" element={<ResponsiveDesignGlossary />} />
          <Route path="/glossary/canonical-tags" element={<CanonicalTagsGlossary />} />
          <Route path="/glossary/url-structure" element={<URLStructureGlossary />} />
          <Route path="/glossary/slug-optimization" element={<SlugOptimizationGlossary />} />
          <Route path="/glossary/content-pruning" element={<ContentPruningGlossary />} />
          <Route path="/glossary/lsi-keywords" element={<LSIKeywordsGlossary />} />
          
          {/* Question pages */}
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/what-is-seo" element={<WhatIsSEO />} />
          <Route path="/questions/how-long-does-seo-take" element={<HowLongDoesSEOTake />} />
          <Route path="/questions/how-much-does-seo-cost" element={<HowMuchDoesSEOCost />} />
          <Route path="/questions/what-is-organic-traffic" element={<WhatIsOrganicTraffic />} />
          <Route path="/questions/what-are-keywords" element={<WhatAreKeywords />} />
          <Route path="/questions/what-is-a-backlink" element={<WhatIsABacklink />} />
          <Route path="/questions/what-is-domain-authority" element={<WhatIsDomainAuthority />} />
          <Route path="/questions/what-is-a-serp" element={<WhatIsASERP />} />
          <Route path="/questions/what-is-local-seo" element={<WhatIsLocalSEO />} />
          <Route path="/questions/how-to-rank-in-google-maps" element={<HowToRankInGoogleMaps />} />
          <Route path="/questions/what-is-google-business-profile" element={<WhatIsGoogleBusinessProfile />} />
          <Route path="/questions/how-to-get-more-google-reviews" element={<HowToGetMoreGoogleReviews />} />
          <Route path="/questions/what-are-local-citations" element={<WhatAreLocalCitations />} />
          <Route path="/questions/what-is-nap-consistency" element={<WhatIsNAPConsistency />} />
          <Route path="/questions/how-to-optimize-for-near-me-searches" element={<HowToOptimizeForNearMeSearches />} />
          <Route path="/questions/what-is-the-local-pack" element={<WhatIsTheLocalPack />} />
          <Route path="/questions/what-is-technical-seo" element={<WhatIsTechnicalSEO />} />
          <Route path="/questions/how-to-improve-page-speed" element={<HowToImprovePageSpeed />} />
          <Route path="/questions/what-are-core-web-vitals" element={<WhatAreCoreWebVitals />} />
          <Route path="/questions/what-is-crawl-budget" element={<WhatIsCrawlBudget />} />
          <Route path="/questions/what-is-schema-markup" element={<WhatIsSchemaMarkup />} />
          <Route path="/questions/what-is-mobile-first-indexing" element={<WhatIsMobileFirstIndexing />} />
          <Route path="/questions/what-is-on-page-seo" element={<WhatIsOnPageSEO />} />
          <Route path="/questions/what-is-off-page-seo" element={<WhatIsOffPageSEO />} />
          <Route path="/questions/what-is-keyword-research" element={<WhatIsKeywordResearch />} />
          <Route path="/questions/how-to-do-local-keyword-research" element={<HowToDoLocalKeywordResearch />} />
          <Route path="/questions/what-is-content-marketing" element={<WhatIsContentMarketing />} />
          <Route path="/questions/what-is-an-seo-audit" element={<WhatIsSEOAudit />} />
          <Route path="/questions/what-is-search-intent" element={<WhatIsSearchIntent />} />
          <Route path="/questions/what-is-an-xml-sitemap" element={<WhatIsXMLSitemap />} />
          <Route path="/questions/what-is-robots-txt" element={<WhatIsRobotsTxt />} />
          <Route path="/questions/what-are-canonical-tags" element={<WhatAreCanonicalTags />} />
          <Route path="/questions/how-to-fix-duplicate-content" element={<HowToFixDuplicateContent />} />
          <Route path="/questions/what-are-long-tail-keywords" element={<WhatAreLongTailKeywords />} />
          <Route path="/questions/what-is-eeat" element={<WhatIsEEAT />} />
          <Route path="/questions/how-long-should-blog-posts-be" element={<HowLongShouldBlogPostsBe />} />
          <Route path="/questions/how-to-write-seo-content" element={<HowToWriteSEOContent />} />
          <Route path="/questions/how-often-should-i-publish-content" element={<HowOftenShouldIPublishContent />} />
          <Route path="/questions/what-is-content-freshness" element={<WhatIsContentFreshness />} />
          <Route path="/questions/how-to-do-competitor-analysis" element={<HowToDoCompetitorAnalysis />} />
          <Route path="/questions/what-is-link-building" element={<WhatIsLinkBuilding />} />
          <Route path="/questions/how-to-recover-from-google-penalty" element={<HowToRecoverFromGooglePenalty />} />
          <Route path="/questions/what-is-white-hat-seo" element={<WhatIsWhiteHatSEO />} />
          <Route path="/questions/what-is-black-hat-seo" element={<WhatIsBlackHatSEO />} />
          <Route path="/questions/how-to-build-topic-clusters" element={<HowToBuildTopicClusters />} />
          <Route path="/questions/what-is-seo-roi" element={<WhatIsSEOROI />} />
          <Route path="/questions/seo-vs-ppc" element={<SEOvsPPC />} />
          <Route path="/questions/what-is-google-search-console" element={<WhatIsGoogleSearchConsole />} />
          <Route path="/questions/what-is-google-analytics" element={<WhatIsGoogleAnalytics />} />
          <Route path="/questions/best-seo-tools" element={<BestSEOTools />} />
          <Route path="/questions/how-to-track-keyword-rankings" element={<HowToTrackKeywordRankings />} />
          <Route path="/questions/how-to-do-a-site-audit" element={<HowToDoASiteAudit />} />
          <Route path="/questions/what-is-screaming-frog" element={<WhatIsScreamingFrog />} />
          
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
