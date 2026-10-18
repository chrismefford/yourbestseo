/**
 * Sitemap Generator Script
 * 
 * Run this script after adding new pages:
 * bun scripts/generate-sitemap.ts
 * 
 * Or it runs automatically during build via the prebuild script.
 */

import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Import route configuration
import { generateSitemapXML, getPageCount, SITE_DOMAIN } from '../src/data/routes';

const SITEMAP_PATH = fileURLToPath(new URL('../public/sitemap.xml', import.meta.url));

function main() {
  console.log('🗺️  Generating sitemap...');
  console.log(`📍 Domain: ${SITE_DOMAIN}`);
  
  const sitemapContent = generateSitemapXML();
  const pageCount = getPageCount();
  
  writeFileSync(SITEMAP_PATH, sitemapContent, 'utf-8');
  
  console.log(`✅ Sitemap generated with ${pageCount} pages`);
  console.log(`📄 Output: ${SITEMAP_PATH}`);
}

main();
