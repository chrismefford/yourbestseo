/**
 * Small Business Guides data.
 *
 * Article copy is parsed from src/content/guides/*.md by
 * scripts/build-guides.ts into guides.generated.ts. This module adds the
 * presentation metadata (table of contents, print buttons, HowTo schema)
 * and the index-page grouping.
 */

import { parsedGuides } from "./guides.generated";
import { HUB_SLUG, type ParsedGuide } from "@/lib/guides-parser";
import imgBusinessNotShowing from "@/assets/guides/business-not-showing-on-google.jpg";
import imgWithoutAds from "@/assets/guides/get-customers-without-google-ads.jpg";
import imgRecommendedByChatgpt from "@/assets/guides/get-business-recommended-by-chatgpt.jpg";
import imgProfileChecklist from "@/assets/guides/google-business-profile-checklist.jpg";
import imgSeoCost from "@/assets/guides/how-much-does-seo-cost.jpg";
import imgSeoVsAds from "@/assets/guides/seo-vs-google-ads.jpg";
import imgMoreReviews from "@/assets/guides/how-to-get-more-google-reviews.jpg";
import imgSeoTimeline from "@/assets/guides/how-long-does-seo-take.jpg";
import imgSeoScams from "@/assets/guides/seo-scams.jpg";
import imgLocalChecklist from "@/assets/guides/local-seo-checklist.jpg";

export { HUB_SLUG };

export interface Guide extends ParsedGuide {
  path: string;
  /** Sticky table of contents from the H2s (sidebar on desktop, collapsible on mobile). */
  toc: boolean;
  /** "Print checklist" button on checklist pages. */
  printChecklist: boolean;
  /** Include HowTo structured data built from the checklist steps. */
  howTo: boolean;
  /** Hero image shown on the article page and as the index-card thumbnail. */
  image?: string;
}

/** Hero images, one per guide (keyed by slug). */
const GUIDE_IMAGES: Record<string, string> = {
  "business-not-showing-on-google": imgBusinessNotShowing,
  "get-customers-without-google-ads": imgWithoutAds,
  "get-business-recommended-by-chatgpt": imgRecommendedByChatgpt,
  "google-business-profile-checklist": imgProfileChecklist,
  "how-much-does-seo-cost": imgSeoCost,
  "seo-vs-google-ads": imgSeoVsAds,
  "how-to-get-more-google-reviews": imgMoreReviews,
  "how-long-does-seo-take": imgSeoTimeline,
  "seo-scams": imgSeoScams,
  "local-seo-checklist": imgLocalChecklist,
};

const GUIDE_META: Record<string, { toc?: boolean; printChecklist?: boolean; howTo?: boolean }> = {
  "business-not-showing-on-google": { toc: true },
  "get-customers-without-google-ads": {},
  "get-business-recommended-by-chatgpt": {},
  "google-business-profile-checklist": { toc: true, printChecklist: true, howTo: true },
  "how-much-does-seo-cost": {},
  "seo-vs-google-ads": {},
  "how-to-get-more-google-reviews": {},
  "how-long-does-seo-take": {},
  "seo-scams": { toc: true },
  "local-seo-checklist": { toc: true, printChecklist: true, howTo: true },
};

export const guides: Guide[] = parsedGuides.map((guide) => ({
  ...guide,
  path: `/${guide.slug}`,
  toc: GUIDE_META[guide.slug]?.toc ?? false,
  printChecklist: GUIDE_META[guide.slug]?.printChecklist ?? false,
  howTo: GUIDE_META[guide.slug]?.howTo ?? false,
  image: GUIDE_IMAGES[guide.slug],
}));

// The hub's brief describes its role instead of listing links; it points to all 9 others.
const hubIndex = guides.findIndex((guide) => guide.slug === HUB_SLUG);
if (hubIndex !== -1) {
  guides[hubIndex] = {
    ...guides[hubIndex],
    linksTo: guides.filter((guide) => guide.slug !== HUB_SLUG).map((guide) => guide.slug),
  };
}

export const getGuide = (slug: string): Guide | undefined => guides.find((guide) => guide.slug === slug);

export const HUB = getGuide("local-seo-checklist")!;

export const guideGroups: { heading: string; slugs: string[] }[] = [
  { heading: "I have a problem right now", slugs: ["business-not-showing-on-google", "get-customers-without-google-ads"] },
  { heading: "How to do it", slugs: ["get-business-recommended-by-chatgpt", "google-business-profile-checklist", "how-to-get-more-google-reviews"] },
  { heading: "Deciding whether to hire help", slugs: ["how-much-does-seo-cost", "seo-vs-google-ads", "how-long-does-seo-take", "seo-scams"] },
];

/** Hub + 2 related guides on regular pages; all 9 guides on the hub. */
export const keepReadingFor = (guide: Guide): Guide[] => {
  if (guide.slug === HUB.slug) return guides.filter((item) => item.slug !== HUB.slug);
  const related = guide.linksTo
    .filter((slug) => slug !== HUB.slug)
    .slice(0, 2)
    .map(getGuide)
    .filter((item): item is Guide => Boolean(item));
  return [HUB, ...related];
};
