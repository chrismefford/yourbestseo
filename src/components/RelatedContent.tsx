/**
 * Reusable Related Content Components
 * 
 * These components provide consistent cross-linking between
 * different content types (glossary, questions, services).
 */

import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, HelpCircle, Wrench } from "lucide-react";
import { glossaryTerms } from "@/data/glossaryTerms";
import { 
  getRelatedServices, 
  getRelatedQuestions, 
  getRelatedGlossaryTerms, 
  getRelatedServicesForQuestion,
  serviceLinks,
  type ServiceLink 
} from "@/data/internalLinks";

interface RelatedServicesProps {
  serviceSlugs?: string[];
  glossarySlug?: string;
  questionSlug?: string;
  title?: string;
  maxItems?: number;
}

export const RelatedServices = ({ 
  serviceSlugs, 
  glossarySlug, 
  questionSlug, 
  title = "Related Services",
  maxItems = 4 
}: RelatedServicesProps) => {
  let services: ServiceLink[] = [];
  
  if (serviceSlugs) {
    services = serviceLinks.filter(s => serviceSlugs.includes(s.slug));
  } else if (glossarySlug) {
    services = getRelatedServices(glossarySlug);
  } else if (questionSlug) {
    services = getRelatedServicesForQuestion(questionSlug);
  }
  
  if (services.length === 0) return null;
  
  const displayServices = services.slice(0, maxItems);
  
  return (
    <section className="py-6">
      <div className="flex items-center gap-2 mb-4">
        <Wrench className="w-5 h-5 text-primary" />
        <h3 className="font-display text-lg font-semibold">{title}</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {displayServices.map((service) => (
          <Link
            key={service.slug}
            to={service.path}
            className="group flex items-center justify-between p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all"
          >
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
              {service.name}
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </section>
  );
};

interface RelatedQuestionsProps {
  questionSlugs?: string[];
  glossarySlug?: string;
  title?: string;
  maxItems?: number;
}

// Question title mappings for display
const questionTitles: Record<string, string> = {
  "what-is-seo": "What is SEO?",
  "how-long-does-seo-take": "How Long Does SEO Take?",
  "how-much-does-seo-cost": "How Much Does SEO Cost?",
  "what-is-organic-traffic": "What is Organic Traffic?",
  "what-are-keywords": "What Are Keywords?",
  "what-is-a-backlink": "What is a Backlink?",
  "what-is-domain-authority": "What is Domain Authority?",
  "what-is-a-serp": "What is a SERP?",
  "what-is-local-seo": "What is Local SEO?",
  "how-to-rank-in-google-maps": "How to Rank in Google Maps?",
  "what-is-google-business-profile": "What is Google Business Profile?",
  "how-to-get-more-google-reviews": "How to Get More Google Reviews?",
  "what-are-local-citations": "What Are Local Citations?",
  "what-is-nap-consistency": "What is NAP Consistency?",
  "how-to-optimize-for-near-me-searches": "How to Optimize for Near Me Searches?",
  "what-is-the-local-pack": "What is the Local Pack?",
  "what-is-technical-seo": "What is Technical SEO?",
  "how-to-improve-page-speed": "How to Improve Page Speed?",
  "what-are-core-web-vitals": "What Are Core Web Vitals?",
  "what-is-crawl-budget": "What is Crawl Budget?",
  "what-is-schema-markup": "What is Schema Markup?",
  "what-is-mobile-first-indexing": "What is Mobile-First Indexing?",
  "what-is-on-page-seo": "What is On-Page SEO?",
  "what-is-off-page-seo": "What is Off-Page SEO?",
  "what-is-keyword-research": "What is Keyword Research?",
  "how-to-do-local-keyword-research": "How to Do Local Keyword Research?",
  "what-is-content-marketing": "What is Content Marketing?",
  "what-is-an-seo-audit": "What is an SEO Audit?",
  "what-is-search-intent": "What is Search Intent?",
  "what-is-an-xml-sitemap": "What is an XML Sitemap?",
  "what-is-robots-txt": "What is Robots.txt?",
  "what-are-canonical-tags": "What Are Canonical Tags?",
  "how-to-fix-duplicate-content": "How to Fix Duplicate Content?",
  "what-are-long-tail-keywords": "What Are Long-Tail Keywords?",
  "what-is-eeat": "What is E-E-A-T?",
  "how-long-should-blog-posts-be": "How Long Should Blog Posts Be?",
  "how-to-write-seo-content": "How to Write SEO Content?",
  "how-often-should-i-publish-content": "How Often Should I Publish Content?",
  "what-is-content-freshness": "What is Content Freshness?",
  "how-to-do-competitor-analysis": "How to Do Competitor Analysis?",
  "what-is-link-building": "What is Link Building?",
  "how-to-recover-from-google-penalty": "How to Recover from a Google Penalty?",
  "what-is-white-hat-seo": "What is White Hat SEO?",
  "what-is-black-hat-seo": "What is Black Hat SEO?",
  "how-to-build-topic-clusters": "How to Build Topic Clusters?",
  "what-is-seo-roi": "What is SEO ROI?",
  "seo-vs-ppc": "SEO vs PPC: Which is Better?",
  "what-is-google-search-console": "What is Google Search Console?",
  "what-is-google-analytics": "What is Google Analytics?",
  "best-seo-tools": "What Are the Best SEO Tools?",
  "how-to-track-keyword-rankings": "How to Track Keyword Rankings?",
  "how-to-do-a-site-audit": "How to Do a Site Audit?",
  "what-is-screaming-frog": "What is Screaming Frog?",
};

export const RelatedQuestionsList = ({ 
  questionSlugs, 
  glossarySlug, 
  title = "Related Questions",
  maxItems = 4 
}: RelatedQuestionsProps) => {
  let slugs: string[] = [];
  
  if (questionSlugs) {
    slugs = questionSlugs;
  } else if (glossarySlug) {
    slugs = getRelatedQuestions(glossarySlug);
  }
  
  if (slugs.length === 0) return null;
  
  const displaySlugs = slugs.slice(0, maxItems);
  
  return (
    <section className="py-6">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-5 h-5 text-primary" />
        <h3 className="font-display text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-2">
        {displaySlugs.map((slug) => (
          <Link
            key={slug}
            to={`/questions/${slug}`}
            className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-muted-foreground group-hover:text-primary transition-colors">
              {questionTitles[slug] || slug}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

interface RelatedGlossaryProps {
  glossarySlugs?: string[];
  questionSlug?: string;
  title?: string;
  maxItems?: number;
}

export const RelatedGlossary = ({ 
  glossarySlugs, 
  questionSlug, 
  title = "Related SEO Terms",
  maxItems = 6 
}: RelatedGlossaryProps) => {
  let slugs: string[] = [];
  
  if (glossarySlugs) {
    slugs = glossarySlugs;
  } else if (questionSlug) {
    slugs = getRelatedGlossaryTerms(questionSlug);
  }
  
  if (slugs.length === 0) return null;
  
  const displaySlugs = slugs.slice(0, maxItems);
  const terms = displaySlugs
    .map(slug => glossaryTerms.find(t => t.slug === slug))
    .filter(Boolean);
  
  if (terms.length === 0) return null;
  
  return (
    <section className="py-6">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-primary" />
        <h3 className="font-display text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {terms.map((term) => term && (
          <Link
            key={term.slug}
            to={`/glossary/${term.slug}`}
            className="px-4 py-2 rounded-full bg-secondary border border-border/50 text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            {term.term}
          </Link>
        ))}
      </div>
    </section>
  );
};

interface ContextualLinksProps {
  currentType: "glossary" | "question" | "service";
  currentSlug: string;
}

export const ContextualLinks = ({ currentType, currentSlug }: ContextualLinksProps) => {
  return (
    <div className="space-y-2">
      {currentType === "glossary" && (
        <>
          <RelatedQuestionsList glossarySlug={currentSlug} />
          <RelatedServices glossarySlug={currentSlug} />
        </>
      )}
      {currentType === "question" && (
        <>
          <RelatedGlossary questionSlug={currentSlug} />
          <RelatedServices questionSlug={currentSlug} />
        </>
      )}
    </div>
  );
};

export default ContextualLinks;
