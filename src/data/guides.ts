/**
 * Small Business Guides data.
 *
 * Article copy is parsed from src/content/guides/*.md by
 * scripts/build-guides.ts into guides.generated.ts. This module adds the
 * presentation metadata (table of contents, print buttons, HowTo schema)
 * and the index-page grouping.
 */

import { parsedGuides } from "./guides.generated";
import type { ParsedGuide } from "@/lib/guides-parser";

export { HUB_SLUG } from "@/lib/guides-parser";

export interface Guide extends ParsedGuide {
  path: string;
  /** Sticky table of contents from the H2s (sidebar on desktop, collapsible on mobile). */
  toc: boolean;
  /** "Print checklist" button on checklist pages. */
  printChecklist: boolean;
  /** Include HowTo structured data built from the checklist steps. */
  howTo: boolean;
}

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
