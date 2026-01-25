import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Critical path - loaded immediately
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load all other pages for code splitting
const Blog = lazy(() => import("./pages/Blog"));
const Services = lazy(() => import("./pages/Services"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const About = lazy(() => import("./pages/About"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const FAQ = lazy(() => import("./pages/FAQ"));
const FreeAudit = lazy(() => import("./pages/FreeAudit"));

// San Diego neighborhood pages - lazy loaded
const DowntownSanDiegoSEO = lazy(() => import("./pages/san-diego/DowntownSanDiegoSEO"));
const GaslampQuarterSEO = lazy(() => import("./pages/san-diego/GaslampQuarterSEO"));
const LittleItalySEO = lazy(() => import("./pages/san-diego/LittleItalySEO"));
const EastVillageSEO = lazy(() => import("./pages/san-diego/EastVillageSEO"));
const MarinaDistrictSEO = lazy(() => import("./pages/san-diego/MarinaDistrictSEO"));
const CortezHillSEO = lazy(() => import("./pages/san-diego/CortezHillSEO"));
const NorthParkSEO = lazy(() => import("./pages/san-diego/NorthParkSEO"));
const KearnyMesaSEO = lazy(() => import("./pages/san-diego/KearnyMesaSEO"));
const SanteeSEO = lazy(() => import("./pages/san-diego/SanteeSEO"));
const ElCajonSEO = lazy(() => import("./pages/san-diego/ElCajonSEO"));
const LaJollaSEO = lazy(() => import("./pages/san-diego/LaJollaSEO"));
const PacificBeachSEO = lazy(() => import("./pages/san-diego/PacificBeachSEO"));
const OceanBeachSEO = lazy(() => import("./pages/san-diego/OceanBeachSEO"));
const MissionBeachSEO = lazy(() => import("./pages/san-diego/MissionBeachSEO"));
const HillcrestSEO = lazy(() => import("./pages/san-diego/HillcrestSEO"));
const MissionValleySEO = lazy(() => import("./pages/san-diego/MissionValleySEO"));
const PointLomaSEO = lazy(() => import("./pages/san-diego/PointLomaSEO"));
const ChulaVistaSEO = lazy(() => import("./pages/san-diego/ChulaVistaSEO"));
const NationalCitySEO = lazy(() => import("./pages/san-diego/NationalCitySEO"));
const ClairemontSEO = lazy(() => import("./pages/san-diego/ClairemontSEO"));
const UniversityCitySEO = lazy(() => import("./pages/san-diego/UniversityCitySEO"));
const MiraMesaSEO = lazy(() => import("./pages/san-diego/MiraMesaSEO"));
const RanchoBernardoSEO = lazy(() => import("./pages/san-diego/RanchoBernardoSEO"));

// State SEO pages - lazy loaded
const CaliforniaSEO = lazy(() => import("./pages/states/CaliforniaSEO"));
const OregonSEO = lazy(() => import("./pages/states/OregonSEO"));
const WashingtonSEO = lazy(() => import("./pages/states/WashingtonSEO"));
const ArizonaSEO = lazy(() => import("./pages/states/ArizonaSEO"));
const ColoradoSEO = lazy(() => import("./pages/states/ColoradoSEO"));
const UtahSEO = lazy(() => import("./pages/states/UtahSEO"));
const NevadaSEO = lazy(() => import("./pages/states/NevadaSEO"));
const HawaiiSEO = lazy(() => import("./pages/states/HawaiiSEO"));
const AlaskaSEO = lazy(() => import("./pages/states/AlaskaSEO"));
const NewMexicoSEO = lazy(() => import("./pages/states/NewMexicoSEO"));
const IdahoSEO = lazy(() => import("./pages/states/IdahoSEO"));
const MontanaSEO = lazy(() => import("./pages/states/MontanaSEO"));
const WyomingSEO = lazy(() => import("./pages/states/WyomingSEO"));

// À La Carte Service pages - lazy loaded
const SEOBlogPosts = lazy(() => import("./pages/services/SEOBlogPosts"));
const TechnicalSEO = lazy(() => import("./pages/services/TechnicalSEO"));
const GoogleBusinessProfile = lazy(() => import("./pages/services/GoogleBusinessProfile"));
const KeywordResearch = lazy(() => import("./pages/services/KeywordResearch"));
const CompetitorAnalysis = lazy(() => import("./pages/services/CompetitorAnalysis"));
const WhiteHatBacklinks = lazy(() => import("./pages/services/WhiteHatBacklinks"));
const LocalCitations = lazy(() => import("./pages/services/LocalCitations"));
const ReviewManagement = lazy(() => import("./pages/services/ReviewManagement"));
const SchemaMarkup = lazy(() => import("./pages/services/SchemaMarkup"));
const RankingReports = lazy(() => import("./pages/services/RankingReports"));

// Glossary pages - lazy loaded
const Glossary = lazy(() => import("./pages/Glossary"));
const Questions = lazy(() => import("./pages/Questions"));
const WhatIsSEO = lazy(() => import("./pages/questions/WhatIsSEO"));
const HowLongDoesSEOTake = lazy(() => import("./pages/questions/HowLongDoesSEOTake"));
const HowMuchDoesSEOCost = lazy(() => import("./pages/questions/HowMuchDoesSEOCost"));
const WhatIsOrganicTraffic = lazy(() => import("./pages/questions/WhatIsOrganicTraffic"));
const WhatAreKeywords = lazy(() => import("./pages/questions/WhatAreKeywords"));
const WhatIsABacklink = lazy(() => import("./pages/questions/WhatIsABacklink"));
const WhatIsDomainAuthority = lazy(() => import("./pages/questions/WhatIsDomainAuthority"));
const WhatIsASERP = lazy(() => import("./pages/questions/WhatIsASERP"));
const WhatIsLocalSEO = lazy(() => import("./pages/questions/WhatIsLocalSEO"));
const HowToRankInGoogleMaps = lazy(() => import("./pages/questions/HowToRankInGoogleMaps"));
const WhatIsGoogleBusinessProfile = lazy(() => import("./pages/questions/WhatIsGoogleBusinessProfile"));
const HowToGetMoreGoogleReviews = lazy(() => import("./pages/questions/HowToGetMoreGoogleReviews"));
const WhatAreLocalCitations = lazy(() => import("./pages/questions/WhatAreLocalCitations"));
const WhatIsNAPConsistency = lazy(() => import("./pages/questions/WhatIsNAPConsistency"));
const HowToOptimizeForNearMeSearches = lazy(() => import("./pages/questions/HowToOptimizeForNearMeSearches"));
const WhatIsTheLocalPack = lazy(() => import("./pages/questions/WhatIsTheLocalPack"));
const WhatIsTechnicalSEO = lazy(() => import("./pages/questions/WhatIsTechnicalSEO"));
const HowToImprovePageSpeed = lazy(() => import("./pages/questions/HowToImprovePageSpeed"));
const WhatAreCoreWebVitals = lazy(() => import("./pages/questions/WhatAreCoreWebVitals"));
const WhatIsCrawlBudget = lazy(() => import("./pages/questions/WhatIsCrawlBudget"));
const WhatIsSchemaMarkup = lazy(() => import("./pages/questions/WhatIsSchemaMarkup"));
const WhatIsMobileFirstIndexing = lazy(() => import("./pages/questions/WhatIsMobileFirstIndexing"));
const WhatIsOnPageSEO = lazy(() => import("./pages/questions/WhatIsOnPageSEO"));
const WhatIsOffPageSEO = lazy(() => import("./pages/questions/WhatIsOffPageSEO"));
const WhatIsKeywordResearch = lazy(() => import("./pages/questions/WhatIsKeywordResearch"));
const HowToDoLocalKeywordResearch = lazy(() => import("./pages/questions/HowToDoLocalKeywordResearch"));
const WhatIsContentMarketing = lazy(() => import("./pages/questions/WhatIsContentMarketing"));
const WhatIsSEOAudit = lazy(() => import("./pages/questions/WhatIsSEOAudit"));
const WhatIsSearchIntent = lazy(() => import("./pages/questions/WhatIsSearchIntent"));
const WhatIsXMLSitemap = lazy(() => import("./pages/questions/WhatIsXMLSitemap"));
const WhatIsRobotsTxt = lazy(() => import("./pages/questions/WhatIsRobotsTxt"));
const WhatAreCanonicalTags = lazy(() => import("./pages/questions/WhatAreCanonicalTags"));
const HowToFixDuplicateContent = lazy(() => import("./pages/questions/HowToFixDuplicateContent"));
const WhatAreLongTailKeywords = lazy(() => import("./pages/questions/WhatAreLongTailKeywords"));
const WhatIsEEAT = lazy(() => import("./pages/questions/WhatIsEEAT"));
const HowLongShouldBlogPostsBe = lazy(() => import("./pages/questions/HowLongShouldBlogPostsBe"));
const HowToWriteSEOContent = lazy(() => import("./pages/questions/HowToWriteSEOContent"));
const HowOftenShouldIPublishContent = lazy(() => import("./pages/questions/HowOftenShouldIPublishContent"));
const WhatIsContentFreshness = lazy(() => import("./pages/questions/WhatIsContentFreshness"));
const HowToDoCompetitorAnalysis = lazy(() => import("./pages/questions/HowToDoCompetitorAnalysis"));
const WhatIsLinkBuilding = lazy(() => import("./pages/questions/WhatIsLinkBuilding"));
const HowToRecoverFromGooglePenalty = lazy(() => import("./pages/questions/HowToRecoverFromGooglePenalty"));
const WhatIsWhiteHatSEO = lazy(() => import("./pages/questions/WhatIsWhiteHatSEO"));
const WhatIsBlackHatSEO = lazy(() => import("./pages/questions/WhatIsBlackHatSEO"));
const HowToBuildTopicClusters = lazy(() => import("./pages/questions/HowToBuildTopicClusters"));
const WhatIsSEOROI = lazy(() => import("./pages/questions/WhatIsSEOROI"));
const SEOvsPPC = lazy(() => import("./pages/questions/SEOvsPPC"));
const WhatIsGoogleSearchConsole = lazy(() => import("./pages/questions/WhatIsGoogleSearchConsole"));
const WhatIsGoogleAnalytics = lazy(() => import("./pages/questions/WhatIsGoogleAnalytics"));
const BestSEOTools = lazy(() => import("./pages/questions/BestSEOTools"));
const HowToTrackKeywordRankings = lazy(() => import("./pages/questions/HowToTrackKeywordRankings"));
const HowToDoASiteAudit = lazy(() => import("./pages/questions/HowToDoASiteAudit"));
const WhatIsScreamingFrog = lazy(() => import("./pages/questions/WhatIsScreamingFrog"));

// Glossary term pages - lazy loaded
const GoogleBusinessProfileGlossary = lazy(() => import("./pages/glossary/GoogleBusinessProfile"));
const LocalPackGlossary = lazy(() => import("./pages/glossary/LocalPack"));
const NAPConsistencyGlossary = lazy(() => import("./pages/glossary/NAPConsistency"));
const LocalCitationsGlossary = lazy(() => import("./pages/glossary/LocalCitations"));
const SchemaMarkupGlossary = lazy(() => import("./pages/glossary/SchemaMarkup"));
const BacklinksGlossary = lazy(() => import("./pages/glossary/Backlinks"));
const MetaDescriptionGlossary = lazy(() => import("./pages/glossary/MetaDescription"));
const CrawlabilityGlossary = lazy(() => import("./pages/glossary/Crawlability"));
const CoreWebVitalsGlossary = lazy(() => import("./pages/glossary/CoreWebVitals"));
const IndexabilityGlossary = lazy(() => import("./pages/glossary/Indexability"));
const TitleTagGlossary = lazy(() => import("./pages/glossary/TitleTag"));
const KeywordOptimizationGlossary = lazy(() => import("./pages/glossary/KeywordOptimization"));
const HeaderTagsGlossary = lazy(() => import("./pages/glossary/HeaderTags"));
const DomainAuthorityGlossary = lazy(() => import("./pages/glossary/DomainAuthority"));
const LinkBuildingGlossary = lazy(() => import("./pages/glossary/LinkBuilding"));
const SearchEngineOptimizationGlossary = lazy(() => import("./pages/glossary/SearchEngineOptimization"));
const OrganicTrafficGlossary = lazy(() => import("./pages/glossary/OrganicTraffic"));
const KeywordResearchGlossary = lazy(() => import("./pages/glossary/KeywordResearch"));
const SearchIntentGlossary = lazy(() => import("./pages/glossary/SearchIntent"));
const LongTailKeywordsGlossary = lazy(() => import("./pages/glossary/LongTailKeywords"));
const SERPGlossary = lazy(() => import("./pages/glossary/SERP"));
const FeaturedSnippetsGlossary = lazy(() => import("./pages/glossary/FeaturedSnippets"));
const ShortTailKeywordsGlossary = lazy(() => import("./pages/glossary/ShortTailKeywords"));
const KeywordDifficultyGlossary = lazy(() => import("./pages/glossary/KeywordDifficulty"));
const SearchVolumeGlossary = lazy(() => import("./pages/glossary/SearchVolume"));
const ClickThroughRateGlossary = lazy(() => import("./pages/glossary/ClickThroughRate"));
const ImpressionsGlossary = lazy(() => import("./pages/glossary/Impressions"));
const PeopleAlsoAskGlossary = lazy(() => import("./pages/glossary/PeopleAlsoAsk"));
const MetaTitleGlossary = lazy(() => import("./pages/glossary/MetaTitle"));
const InternalLinkingGlossary = lazy(() => import("./pages/glossary/InternalLinking"));
const AnchorTextGlossary = lazy(() => import("./pages/glossary/AnchorText"));
const PageAuthorityGlossary = lazy(() => import("./pages/glossary/PageAuthority"));
const TopicClustersGlossary = lazy(() => import("./pages/glossary/TopicClusters"));
const PillarPagesGlossary = lazy(() => import("./pages/glossary/PillarPages"));
const EEATGlossary = lazy(() => import("./pages/glossary/EEAT"));
const LocalSEOGlossary = lazy(() => import("./pages/glossary/LocalSEO"));
const ImageAltTextGlossary = lazy(() => import("./pages/glossary/ImageAltText"));
const DuplicateContentGlossary = lazy(() => import("./pages/glossary/DuplicateContent"));
const ThinContentGlossary = lazy(() => import("./pages/glossary/ThinContent"));
const ContentFreshnessGlossary = lazy(() => import("./pages/glossary/ContentFreshness"));
const SemanticSEOGlossary = lazy(() => import("./pages/glossary/SemanticSEO"));
const XMLSitemapGlossary = lazy(() => import("./pages/glossary/XMLSitemap"));
const AIContentOptimizationGlossary = lazy(() => import("./pages/glossary/AIContentOptimization"));
const StructuredDataGlossary = lazy(() => import("./pages/glossary/StructuredData"));
const CrawlBudgetGlossary = lazy(() => import("./pages/glossary/CrawlBudget"));
const RobotsTxtGlossary = lazy(() => import("./pages/glossary/RobotsTxt"));
const PageSpeedGlossary = lazy(() => import("./pages/glossary/PageSpeed"));
const MobileFirstIndexingGlossary = lazy(() => import("./pages/glossary/MobileFirstIndexing"));
const ResponsiveDesignGlossary = lazy(() => import("./pages/glossary/ResponsiveDesign"));
const CanonicalTagsGlossary = lazy(() => import("./pages/glossary/CanonicalTags"));
const URLStructureGlossary = lazy(() => import("./pages/glossary/URLStructure"));
const SlugOptimizationGlossary = lazy(() => import("./pages/glossary/SlugOptimization"));
const ContentPruningGlossary = lazy(() => import("./pages/glossary/ContentPruning"));
const LSIKeywordsGlossary = lazy(() => import("./pages/glossary/LSIKeywords"));

const queryClient = new QueryClient();

// Minimal loading fallback for lazy routes
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog/*" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
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
            <Route path="/glossary/search-engine-optimization" element={<SearchEngineOptimizationGlossary />} />
            <Route path="/glossary/organic-traffic" element={<OrganicTrafficGlossary />} />
            <Route path="/glossary/keyword-research" element={<KeywordResearchGlossary />} />
            <Route path="/glossary/search-intent" element={<SearchIntentGlossary />} />
            <Route path="/glossary/long-tail-keywords" element={<LongTailKeywordsGlossary />} />
            <Route path="/glossary/serp" element={<SERPGlossary />} />
            <Route path="/glossary/featured-snippets" element={<FeaturedSnippetsGlossary />} />
            <Route path="/glossary/short-tail-keywords" element={<ShortTailKeywordsGlossary />} />
            <Route path="/glossary/keyword-difficulty" element={<KeywordDifficultyGlossary />} />
            <Route path="/glossary/search-volume" element={<SearchVolumeGlossary />} />
            <Route path="/glossary/click-through-rate" element={<ClickThroughRateGlossary />} />
            <Route path="/glossary/impressions" element={<ImpressionsGlossary />} />
            <Route path="/glossary/people-also-ask" element={<PeopleAlsoAskGlossary />} />
            <Route path="/glossary/meta-title" element={<MetaTitleGlossary />} />
            <Route path="/glossary/internal-linking" element={<InternalLinkingGlossary />} />
            <Route path="/glossary/anchor-text" element={<AnchorTextGlossary />} />
            <Route path="/glossary/page-authority" element={<PageAuthorityGlossary />} />
            <Route path="/glossary/topic-clusters" element={<TopicClustersGlossary />} />
            <Route path="/glossary/pillar-pages" element={<PillarPagesGlossary />} />
            <Route path="/glossary/eeat" element={<EEATGlossary />} />
            <Route path="/glossary/local-seo" element={<LocalSEOGlossary />} />
            <Route path="/glossary/image-alt-text" element={<ImageAltTextGlossary />} />
            <Route path="/glossary/duplicate-content" element={<DuplicateContentGlossary />} />
            <Route path="/glossary/thin-content" element={<ThinContentGlossary />} />
            <Route path="/glossary/content-freshness" element={<ContentFreshnessGlossary />} />
            <Route path="/glossary/semantic-seo" element={<SemanticSEOGlossary />} />
            <Route path="/glossary/xml-sitemap" element={<XMLSitemapGlossary />} />
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
            <Route path="/san-diego/north-park-seo" element={<NorthParkSEO />} />
            <Route path="/san-diego/kearny-mesa-seo" element={<KearnyMesaSEO />} />
            <Route path="/san-diego/santee-seo" element={<SanteeSEO />} />
            <Route path="/san-diego/el-cajon-seo" element={<ElCajonSEO />} />
            <Route path="/san-diego/la-jolla-seo" element={<LaJollaSEO />} />
            <Route path="/san-diego/pacific-beach-seo" element={<PacificBeachSEO />} />
            <Route path="/san-diego/ocean-beach-seo" element={<OceanBeachSEO />} />
            <Route path="/san-diego/mission-beach-seo" element={<MissionBeachSEO />} />
            <Route path="/san-diego/hillcrest-seo" element={<HillcrestSEO />} />
            <Route path="/san-diego/mission-valley-seo" element={<MissionValleySEO />} />
            <Route path="/san-diego/point-loma-seo" element={<PointLomaSEO />} />
            <Route path="/san-diego/chula-vista-seo" element={<ChulaVistaSEO />} />
            <Route path="/san-diego/national-city-seo" element={<NationalCitySEO />} />
            <Route path="/san-diego/clairemont-seo" element={<ClairemontSEO />} />
            <Route path="/san-diego/university-city-seo" element={<UniversityCitySEO />} />
            <Route path="/san-diego/mira-mesa-seo" element={<MiraMesaSEO />} />
            <Route path="/san-diego/rancho-bernardo-seo" element={<RanchoBernardoSEO />} />
            
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;