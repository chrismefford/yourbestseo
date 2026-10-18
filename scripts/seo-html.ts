/** Remove source-only fallback tags before route-specific SSG head injection. */
export function stripSeoFallback(html: string): string {
  return html.replace(/\s*<!-- seo-fallback:start -->[\s\S]*?<!-- seo-fallback:end -->\s*/g, "\n");
}