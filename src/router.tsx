import { lazy } from "react";
import type { RouteRecord } from "vite-react-ssg";
import RootLayout from "./layouts/RootLayout";

// Critical path - loaded immediately for SSG
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

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    entry: "src/layouts/RootLayout.tsx",
    children: [
      // Main pages
      { index: true, element: <Index /> },
      { path: "blog/*", element: <Blog /> },
      { path: "services", element: <Services /> },
      { path: "pricing", element: <Pricing /> },
      { path: "about", element: <About /> },
      { path: "case-studies", element: <CaseStudies /> },
      { path: "faq", element: <FAQ /> },
      { path: "free-audit", element: <FreeAudit /> },
      { path: "payment-success", element: <PaymentSuccess /> },
      
      // À La Carte Service pages
      { path: "services/seo-blog-posts", element: <SEOBlogPosts /> },
      { path: "services/technical-seo", element: <TechnicalSEO /> },
      { path: "services/google-business-profile", element: <GoogleBusinessProfile /> },
      { path: "services/keyword-research", element: <KeywordResearch /> },
      { path: "services/competitor-analysis", element: <CompetitorAnalysis /> },
      { path: "services/white-hat-backlinks", element: <WhiteHatBacklinks /> },
      { path: "services/local-citations", element: <LocalCitations /> },
      { path: "services/review-management", element: <ReviewManagement /> },
      { path: "services/schema-markup", element: <SchemaMarkup /> },
      { path: "services/ranking-reports", element: <RankingReports /> },
      
      // Glossary pages
      { path: "glossary", element: <Glossary /> },
      { path: "glossary/google-business-profile", element: <GoogleBusinessProfileGlossary /> },
      { path: "glossary/local-pack", element: <LocalPackGlossary /> },
      { path: "glossary/nap-consistency", element: <NAPConsistencyGlossary /> },
      { path: "glossary/local-citations", element: <LocalCitationsGlossary /> },
      { path: "glossary/schema-markup", element: <SchemaMarkupGlossary /> },
      { path: "glossary/backlinks", element: <BacklinksGlossary /> },
      { path: "glossary/meta-description", element: <MetaDescriptionGlossary /> },
      { path: "glossary/crawlability", element: <CrawlabilityGlossary /> },
      { path: "glossary/core-web-vitals", element: <CoreWebVitalsGlossary /> },
      { path: "glossary/indexability", element: <IndexabilityGlossary /> },
      { path: "glossary/title-tag", element: <TitleTagGlossary /> },
      { path: "glossary/keyword-optimization", element: <KeywordOptimizationGlossary /> },
      { path: "glossary/header-tags", element: <HeaderTagsGlossary /> },
      { path: "glossary/domain-authority", element: <DomainAuthorityGlossary /> },
      { path: "glossary/link-building", element: <LinkBuildingGlossary /> },
      { path: "glossary/search-engine-optimization", element: <SearchEngineOptimizationGlossary /> },
      { path: "glossary/organic-traffic", element: <OrganicTrafficGlossary /> },
      { path: "glossary/keyword-research", element: <KeywordResearchGlossary /> },
      { path: "glossary/search-intent", element: <SearchIntentGlossary /> },
      { path: "glossary/long-tail-keywords", element: <LongTailKeywordsGlossary /> },
      { path: "glossary/serp", element: <SERPGlossary /> },
      { path: "glossary/featured-snippets", element: <FeaturedSnippetsGlossary /> },
      { path: "glossary/short-tail-keywords", element: <ShortTailKeywordsGlossary /> },
      { path: "glossary/keyword-difficulty", element: <KeywordDifficultyGlossary /> },
      { path: "glossary/search-volume", element: <SearchVolumeGlossary /> },
      { path: "glossary/click-through-rate", element: <ClickThroughRateGlossary /> },
      { path: "glossary/impressions", element: <ImpressionsGlossary /> },
      { path: "glossary/people-also-ask", element: <PeopleAlsoAskGlossary /> },
      { path: "glossary/meta-title", element: <MetaTitleGlossary /> },
      { path: "glossary/internal-linking", element: <InternalLinkingGlossary /> },
      { path: "glossary/anchor-text", element: <AnchorTextGlossary /> },
      { path: "glossary/page-authority", element: <PageAuthorityGlossary /> },
      { path: "glossary/topic-clusters", element: <TopicClustersGlossary /> },
      { path: "glossary/pillar-pages", element: <PillarPagesGlossary /> },
      { path: "glossary/eeat", element: <EEATGlossary /> },
      { path: "glossary/local-seo", element: <LocalSEOGlossary /> },
      { path: "glossary/image-alt-text", element: <ImageAltTextGlossary /> },
      { path: "glossary/duplicate-content", element: <DuplicateContentGlossary /> },
      { path: "glossary/thin-content", element: <ThinContentGlossary /> },
      { path: "glossary/content-freshness", element: <ContentFreshnessGlossary /> },
      { path: "glossary/semantic-seo", element: <SemanticSEOGlossary /> },
      { path: "glossary/xml-sitemap", element: <XMLSitemapGlossary /> },
      { path: "glossary/ai-content-optimization", element: <AIContentOptimizationGlossary /> },
      { path: "glossary/structured-data", element: <StructuredDataGlossary /> },
      { path: "glossary/crawl-budget", element: <CrawlBudgetGlossary /> },
      { path: "glossary/robots-txt", element: <RobotsTxtGlossary /> },
      { path: "glossary/page-speed", element: <PageSpeedGlossary /> },
      { path: "glossary/mobile-first-indexing", element: <MobileFirstIndexingGlossary /> },
      { path: "glossary/responsive-design", element: <ResponsiveDesignGlossary /> },
      { path: "glossary/canonical-tags", element: <CanonicalTagsGlossary /> },
      { path: "glossary/url-structure", element: <URLStructureGlossary /> },
      { path: "glossary/slug-optimization", element: <SlugOptimizationGlossary /> },
      { path: "glossary/content-pruning", element: <ContentPruningGlossary /> },
      { path: "glossary/lsi-keywords", element: <LSIKeywordsGlossary /> },
      
      // Question pages
      { path: "questions", element: <Questions /> },
      { path: "questions/what-is-seo", element: <WhatIsSEO /> },
      { path: "questions/how-long-does-seo-take", element: <HowLongDoesSEOTake /> },
      { path: "questions/how-much-does-seo-cost", element: <HowMuchDoesSEOCost /> },
      { path: "questions/what-is-organic-traffic", element: <WhatIsOrganicTraffic /> },
      { path: "questions/what-are-keywords", element: <WhatAreKeywords /> },
      { path: "questions/what-is-a-backlink", element: <WhatIsABacklink /> },
      { path: "questions/what-is-domain-authority", element: <WhatIsDomainAuthority /> },
      { path: "questions/what-is-a-serp", element: <WhatIsASERP /> },
      { path: "questions/what-is-local-seo", element: <WhatIsLocalSEO /> },
      { path: "questions/how-to-rank-in-google-maps", element: <HowToRankInGoogleMaps /> },
      { path: "questions/what-is-google-business-profile", element: <WhatIsGoogleBusinessProfile /> },
      { path: "questions/how-to-get-more-google-reviews", element: <HowToGetMoreGoogleReviews /> },
      { path: "questions/what-are-local-citations", element: <WhatAreLocalCitations /> },
      { path: "questions/what-is-nap-consistency", element: <WhatIsNAPConsistency /> },
      { path: "questions/how-to-optimize-for-near-me-searches", element: <HowToOptimizeForNearMeSearches /> },
      { path: "questions/what-is-the-local-pack", element: <WhatIsTheLocalPack /> },
      { path: "questions/what-is-technical-seo", element: <WhatIsTechnicalSEO /> },
      { path: "questions/how-to-improve-page-speed", element: <HowToImprovePageSpeed /> },
      { path: "questions/what-are-core-web-vitals", element: <WhatAreCoreWebVitals /> },
      { path: "questions/what-is-crawl-budget", element: <WhatIsCrawlBudget /> },
      { path: "questions/what-is-schema-markup", element: <WhatIsSchemaMarkup /> },
      { path: "questions/what-is-mobile-first-indexing", element: <WhatIsMobileFirstIndexing /> },
      { path: "questions/what-is-on-page-seo", element: <WhatIsOnPageSEO /> },
      { path: "questions/what-is-off-page-seo", element: <WhatIsOffPageSEO /> },
      { path: "questions/what-is-keyword-research", element: <WhatIsKeywordResearch /> },
      { path: "questions/how-to-do-local-keyword-research", element: <HowToDoLocalKeywordResearch /> },
      { path: "questions/what-is-content-marketing", element: <WhatIsContentMarketing /> },
      { path: "questions/what-is-an-seo-audit", element: <WhatIsSEOAudit /> },
      { path: "questions/what-is-search-intent", element: <WhatIsSearchIntent /> },
      { path: "questions/what-is-an-xml-sitemap", element: <WhatIsXMLSitemap /> },
      { path: "questions/what-is-robots-txt", element: <WhatIsRobotsTxt /> },
      { path: "questions/what-are-canonical-tags", element: <WhatAreCanonicalTags /> },
      { path: "questions/how-to-fix-duplicate-content", element: <HowToFixDuplicateContent /> },
      { path: "questions/what-are-long-tail-keywords", element: <WhatAreLongTailKeywords /> },
      { path: "questions/what-is-eeat", element: <WhatIsEEAT /> },
      { path: "questions/how-long-should-blog-posts-be", element: <HowLongShouldBlogPostsBe /> },
      { path: "questions/how-to-write-seo-content", element: <HowToWriteSEOContent /> },
      { path: "questions/how-often-should-i-publish-content", element: <HowOftenShouldIPublishContent /> },
      { path: "questions/what-is-content-freshness", element: <WhatIsContentFreshness /> },
      { path: "questions/how-to-do-competitor-analysis", element: <HowToDoCompetitorAnalysis /> },
      { path: "questions/what-is-link-building", element: <WhatIsLinkBuilding /> },
      { path: "questions/how-to-recover-from-google-penalty", element: <HowToRecoverFromGooglePenalty /> },
      { path: "questions/what-is-white-hat-seo", element: <WhatIsWhiteHatSEO /> },
      { path: "questions/what-is-black-hat-seo", element: <WhatIsBlackHatSEO /> },
      { path: "questions/how-to-build-topic-clusters", element: <HowToBuildTopicClusters /> },
      { path: "questions/what-is-seo-roi", element: <WhatIsSEOROI /> },
      { path: "questions/seo-vs-ppc", element: <SEOvsPPC /> },
      { path: "questions/what-is-google-search-console", element: <WhatIsGoogleSearchConsole /> },
      { path: "questions/what-is-google-analytics", element: <WhatIsGoogleAnalytics /> },
      { path: "questions/best-seo-tools", element: <BestSEOTools /> },
      { path: "questions/how-to-track-keyword-rankings", element: <HowToTrackKeywordRankings /> },
      { path: "questions/how-to-do-a-site-audit", element: <HowToDoASiteAudit /> },
      { path: "questions/what-is-screaming-frog", element: <WhatIsScreamingFrog /> },
      
      // San Diego neighborhood SEO pages
      { path: "san-diego/downtown-san-diego-seo", element: <DowntownSanDiegoSEO /> },
      { path: "san-diego/gaslamp-quarter-seo", element: <GaslampQuarterSEO /> },
      { path: "san-diego/little-italy-seo", element: <LittleItalySEO /> },
      { path: "san-diego/east-village-seo", element: <EastVillageSEO /> },
      { path: "san-diego/marina-district-seo", element: <MarinaDistrictSEO /> },
      { path: "san-diego/cortez-hill-seo", element: <CortezHillSEO /> },
      { path: "san-diego/north-park-seo", element: <NorthParkSEO /> },
      { path: "san-diego/kearny-mesa-seo", element: <KearnyMesaSEO /> },
      { path: "san-diego/santee-seo", element: <SanteeSEO /> },
      { path: "san-diego/el-cajon-seo", element: <ElCajonSEO /> },
      { path: "san-diego/la-jolla-seo", element: <LaJollaSEO /> },
      { path: "san-diego/pacific-beach-seo", element: <PacificBeachSEO /> },
      { path: "san-diego/ocean-beach-seo", element: <OceanBeachSEO /> },
      { path: "san-diego/mission-beach-seo", element: <MissionBeachSEO /> },
      { path: "san-diego/hillcrest-seo", element: <HillcrestSEO /> },
      { path: "san-diego/mission-valley-seo", element: <MissionValleySEO /> },
      { path: "san-diego/point-loma-seo", element: <PointLomaSEO /> },
      { path: "san-diego/chula-vista-seo", element: <ChulaVistaSEO /> },
      { path: "san-diego/national-city-seo", element: <NationalCitySEO /> },
      { path: "san-diego/clairemont-seo", element: <ClairemontSEO /> },
      { path: "san-diego/university-city-seo", element: <UniversityCitySEO /> },
      { path: "san-diego/mira-mesa-seo", element: <MiraMesaSEO /> },
      { path: "san-diego/rancho-bernardo-seo", element: <RanchoBernardoSEO /> },
      
      // State SEO pages
      { path: "states/california-seo", element: <CaliforniaSEO /> },
      { path: "states/oregon-seo", element: <OregonSEO /> },
      { path: "states/washington-seo", element: <WashingtonSEO /> },
      { path: "states/arizona-seo", element: <ArizonaSEO /> },
      { path: "states/colorado-seo", element: <ColoradoSEO /> },
      { path: "states/utah-seo", element: <UtahSEO /> },
      { path: "states/nevada-seo", element: <NevadaSEO /> },
      { path: "states/hawaii-seo", element: <HawaiiSEO /> },
      { path: "states/alaska-seo", element: <AlaskaSEO /> },
      { path: "states/new-mexico-seo", element: <NewMexicoSEO /> },
      { path: "states/idaho-seo", element: <IdahoSEO /> },
      { path: "states/montana-seo", element: <MontanaSEO /> },
      { path: "states/wyoming-seo", element: <WyomingSEO /> },
      
      // Catch-all 404
      { path: "*", element: <NotFound /> },
    ],
  },
];
