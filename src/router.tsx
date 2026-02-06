import type { RouteRecord } from "vite-react-ssg";
import RootLayout from "./layouts/RootLayout";

// NOTE: For SSG to work correctly, route elements must be synchronously importable.
// React.lazy + Suspense will prerender the fallback instead of the real content.
// With 150+ SEO pages, correctness > bundle micro-optimization.
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
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
import NorthParkSEO from "./pages/san-diego/NorthParkSEO";
import KearnyMesaSEO from "./pages/san-diego/KearnyMesaSEO";
import SanteeSEO from "./pages/san-diego/SanteeSEO";
import ElCajonSEO from "./pages/san-diego/ElCajonSEO";
import LaJollaSEO from "./pages/san-diego/LaJollaSEO";
import PacificBeachSEO from "./pages/san-diego/PacificBeachSEO";
import OceanBeachSEO from "./pages/san-diego/OceanBeachSEO";
import MissionBeachSEO from "./pages/san-diego/MissionBeachSEO";
import HillcrestSEO from "./pages/san-diego/HillcrestSEO";
import MissionValleySEO from "./pages/san-diego/MissionValleySEO";
import PointLomaSEO from "./pages/san-diego/PointLomaSEO";
import ChulaVistaSEO from "./pages/san-diego/ChulaVistaSEO";
import NationalCitySEO from "./pages/san-diego/NationalCitySEO";
import ClairemontSEO from "./pages/san-diego/ClairemontSEO";
import UniversityCitySEO from "./pages/san-diego/UniversityCitySEO";
import MiraMesaSEO from "./pages/san-diego/MiraMesaSEO";
import RanchoBernardoSEO from "./pages/san-diego/RanchoBernardoSEO";
import ImperialBeachSEO from "./pages/san-diego/ImperialBeachSEO";
import UniversityHeightsSEO from "./pages/san-diego/UniversityHeightsSEO";
import TorreyPinesSEO from "./pages/san-diego/TorreyPinesSEO";
import MiddletownSEO from "./pages/san-diego/MiddletownSEO";
import UptownSEO from "./pages/san-diego/UptownSEO";
import BonitaSEO from "./pages/san-diego/BonitaSEO";
import UTCSEO from "./pages/san-diego/UTCSEO";
import BankersHillSEO from "./pages/san-diego/BankersHillSEO";
import OtayRanchSEO from "./pages/san-diego/OtayRanchSEO";
import MissionHillsSEO from "./pages/san-diego/MissionHillsSEO";
import BirdRockSEO from "./pages/san-diego/BirdRockSEO";
import DelMarSEO from "./pages/san-diego/DelMarSEO";
import EastlakeSEO from "./pages/san-diego/EastlakeSEO";
import SanYsidroSEO from "./pages/san-diego/SanYsidroSEO";
import CityHeightsSEO from "./pages/san-diego/CityHeightsSEO";
import KensingtonSEO from "./pages/san-diego/KensingtonSEO";
import NormalHeightsSEO from "./pages/san-diego/NormalHeightsSEO";
import SouthParkSEO from "./pages/san-diego/SouthParkSEO";

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

// Index pages
import Glossary from "./pages/Glossary";
import Questions from "./pages/Questions";

// Question pages
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

// Glossary term pages
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
import SearchEngineOptimizationGlossary from "./pages/glossary/SearchEngineOptimization";
import OrganicTrafficGlossary from "./pages/glossary/OrganicTraffic";
import KeywordResearchGlossary from "./pages/glossary/KeywordResearch";
import SearchIntentGlossary from "./pages/glossary/SearchIntent";
import LongTailKeywordsGlossary from "./pages/glossary/LongTailKeywords";
import SERPGlossary from "./pages/glossary/SERP";
import FeaturedSnippetsGlossary from "./pages/glossary/FeaturedSnippets";
import ShortTailKeywordsGlossary from "./pages/glossary/ShortTailKeywords";
import KeywordDifficultyGlossary from "./pages/glossary/KeywordDifficulty";
import SearchVolumeGlossary from "./pages/glossary/SearchVolume";
import ClickThroughRateGlossary from "./pages/glossary/ClickThroughRate";
import ImpressionsGlossary from "./pages/glossary/Impressions";
import PeopleAlsoAskGlossary from "./pages/glossary/PeopleAlsoAsk";
import MetaTitleGlossary from "./pages/glossary/MetaTitle";
import InternalLinkingGlossary from "./pages/glossary/InternalLinking";
import AnchorTextGlossary from "./pages/glossary/AnchorText";
import PageAuthorityGlossary from "./pages/glossary/PageAuthority";
import TopicClustersGlossary from "./pages/glossary/TopicClusters";
import PillarPagesGlossary from "./pages/glossary/PillarPages";
import EEATGlossary from "./pages/glossary/EEAT";
import LocalSEOGlossary from "./pages/glossary/LocalSEO";
import ImageAltTextGlossary from "./pages/glossary/ImageAltText";
import DuplicateContentGlossary from "./pages/glossary/DuplicateContent";
import ThinContentGlossary from "./pages/glossary/ThinContent";
import ContentFreshnessGlossary from "./pages/glossary/ContentFreshness";
import SemanticSEOGlossary from "./pages/glossary/SemanticSEO";
import XMLSitemapGlossary from "./pages/glossary/XMLSitemap";
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
      { path: "san-diego/imperial-beach-seo", element: <ImperialBeachSEO /> },
      { path: "san-diego/university-heights-seo", element: <UniversityHeightsSEO /> },
      { path: "san-diego/torrey-pines-seo", element: <TorreyPinesSEO /> },
      { path: "san-diego/middletown-seo", element: <MiddletownSEO /> },
      { path: "san-diego/uptown-seo", element: <UptownSEO /> },
      { path: "san-diego/bonita-seo", element: <BonitaSEO /> },
      { path: "san-diego/utc-seo", element: <UTCSEO /> },
      { path: "san-diego/bankers-hill-seo", element: <BankersHillSEO /> },
      { path: "san-diego/otay-ranch-seo", element: <OtayRanchSEO /> },
      { path: "san-diego/mission-hills-seo", element: <MissionHillsSEO /> },
      { path: "san-diego/bird-rock-seo", element: <BirdRockSEO /> },
      { path: "san-diego/del-mar-seo", element: <DelMarSEO /> },
      { path: "san-diego/eastlake-seo", element: <EastlakeSEO /> },
      { path: "san-diego/san-ysidro-seo", element: <SanYsidroSEO /> },
      { path: "san-diego/city-heights-seo", element: <CityHeightsSEO /> },
      { path: "san-diego/kensington-seo", element: <KensingtonSEO /> },
      { path: "san-diego/normal-heights-seo", element: <NormalHeightsSEO /> },
      { path: "san-diego/south-park-seo", element: <SouthParkSEO /> },
      
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
