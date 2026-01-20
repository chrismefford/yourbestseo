/**
 * Client-side sitemap utilities
 * 
 * This module provides utilities for working with the route configuration
 * in a client-side context (e.g., for debugging or validation).
 */

import { allRoutes, getPageCount, SITE_DOMAIN } from '@/data/routes';

/**
 * Validate that all routes in the configuration are unique
 */
export function validateRoutes(): { valid: boolean; duplicates: string[] } {
  const paths = allRoutes.map(r => r.path);
  const duplicates = paths.filter((path, index) => paths.indexOf(path) !== index);
  
  return {
    valid: duplicates.length === 0,
    duplicates: [...new Set(duplicates)],
  };
}

/**
 * Get routes by category for debugging
 */
export function getRoutesByCategory() {
  return {
    main: allRoutes.filter(r => !r.path.includes('/') || r.path === '/'),
    services: allRoutes.filter(r => r.path.startsWith('/services/')),
    glossary: allRoutes.filter(r => r.path.startsWith('/glossary/')),
    questions: allRoutes.filter(r => r.path.startsWith('/questions/')),
    states: allRoutes.filter(r => r.path.startsWith('/states/')),
    neighborhoods: allRoutes.filter(r => r.path.startsWith('/san-diego/')),
  };
}

/**
 * Log route statistics to console (for debugging)
 */
export function logRouteStats() {
  const categories = getRoutesByCategory();
  
  console.log('📊 Route Statistics:');
  console.log(`   Domain: ${SITE_DOMAIN}`);
  console.log(`   Total Pages: ${getPageCount()}`);
  console.log(`   - Main: ${categories.main.length}`);
  console.log(`   - Services: ${categories.services.length}`);
  console.log(`   - Glossary: ${categories.glossary.length}`);
  console.log(`   - Questions: ${categories.questions.length}`);
  console.log(`   - States: ${categories.states.length}`);
  console.log(`   - Neighborhoods: ${categories.neighborhoods.length}`);
  
  const validation = validateRoutes();
  if (!validation.valid) {
    console.warn('⚠️ Duplicate routes found:', validation.duplicates);
  } else {
    console.log('✅ All routes are unique');
  }
}

export { allRoutes, getPageCount, SITE_DOMAIN };
