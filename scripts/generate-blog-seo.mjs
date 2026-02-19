/**
 * Post-Build SEO Generator for DropInBlog Pages
 * 
 * This script runs after `vite build` and:
 * 1. Discovers all published blog posts via the DropInBlog RSS feed (no auth required)
 * 2. Fetches the full rendered HTML (head + body) for each blog post via the rendered API
 * 3. Generates static HTML files for /blog (listing) and /blog/:slug (each post)
 *    with full pre-rendered content visible to search engines without JavaScript
 * 4. Updates the sitemap.xml to include all blog URLs
 * 
 * This ensures Google can index the full blog content on first crawl,
 * while the React SPA hydrates on top for client-side navigation.
 * 
 * NOTE: This script does NOT require an API key. It uses the public RSS feed
 * to discover posts and the public rendered endpoints for content.
 * 
 * Usage: node scripts/generate-blog-seo.mjs
 */

import fs, { cpSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '..', 'dist');

// DropInBlog Configuration
const BLOG_ID = 'aaccbdb9-3466-4e98-8baf-d86ddbe61db7';
const SITE_URL = 'https://yourbestseo.com';
const RSS_FEED_URL = `https://io.dropinblog.com/feed/${BLOG_ID}/?limit=100`;

// ─── RSS Feed Parser ─────────────────────────────────────────────────────────

/**
 * Fetch all blog post metadata from the DropInBlog RSS feed.
 * No authentication required. Returns an array of post objects with:
 * { slug, title, link, description, pubDate, author, featuredImage, categories }
 */
async function fetchPostsFromRSS() {
  console.log('  📡 Fetching RSS feed...');
  const res = await fetch(RSS_FEED_URL);
  if (!res.ok) {
    console.error(`  ❌ RSS feed error: ${res.status} ${res.statusText}`);
    return [];
  }

  const xml = await res.text();
  const posts = [];

  // Parse each <item> from the RSS feed
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];

    const getTag = (tag) => {
      const m = item.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
      return m ? m[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim() : '';
    };

    const link = getTag('link');
    const slug = link.replace(`${SITE_URL}/blog/`, '').replace(/\/$/, '');

    // Get featured image from media:content or media:thumbnail
    const imageMatch = item.match(/media:content\s+url="([^"]+)"/);
    const featuredImage = imageMatch ? imageMatch[1] : '';

    // Get categories
    const categoryMatches = [...item.matchAll(/<category>([^<]+)<\/category>/g)];
    const categories = categoryMatches.map(m => m[1]);

    // Get author
    const author = getTag('dc:creator');

    // Get description (may contain HTML)
    const description = getTag('description')
      .replace(/<[^>]*>/g, '')  // Strip HTML tags
      .substring(0, 160);

    posts.push({
      slug,
      title: getTag('title'),
      link,
      description,
      pubDate: getTag('pubDate'),
      author,
      featuredImage,
      categories,
    });
  }

  return posts;
}

// ─── Rendered API Functions ──────────────────────────────────────────────────

/**
 * Fetch the full rendered HTML for a specific blog post.
 * No authentication required. Returns { head_html, body_html }.
 */
async function fetchRenderedPost(slug) {
  const url = `https://api.dropinblog.com/v2/blog/${BLOG_ID}/rendered/post/${encodeURIComponent(slug)}`;
  const res = await fetch(url, {
    headers: { 'Accept': 'application/json' },
  });

  if (!res.ok) {
    console.error(`  ❌ Failed to fetch rendered post "${slug}": ${res.status}`);
    return null;
  }

  const json = await res.json();
  return json.data || null;
}

/**
 * Fetch the full rendered HTML for the blog listing page.
 * No authentication required. Returns { head_html, body_html }.
 */
async function fetchRenderedListing() {
  const url = `https://api.dropinblog.com/v2/blog/${BLOG_ID}/rendered/list`;
  const res = await fetch(url, {
    headers: { 'Accept': 'application/json' },
  });

  if (!res.ok) {
    console.error(`  ❌ Failed to fetch rendered listing: ${res.status}`);
    return null;
  }

  const json = await res.json();
  return json.data || null;
}

// ─── HTML Generation ─────────────────────────────────────────────────────────

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Generate a full static HTML page with pre-rendered blog content.
 * Includes SEO meta tags from DropInBlog's head_html and the full article
 * body_html pre-rendered inside the page for Googlebot.
 */
function generateFullPage(template, { headHtml, bodyHtml, fallbackTitle, fallbackDescription, canonicalUrl, ogImage, jsonLd }) {
  let html = template;

  // Remove ALL existing meta tags that we'll replace, including data-rh="true" variants
  // from vite-react-ssg's Head component (react-helmet-async)
  html = html.replace(/<title[^>]*>.*?<\/title>/gi, '');
  html = html.replace(/<meta[^>]*name="description"[^>]*\/?>/gi, '');
  html = html.replace(/<meta[^>]*name="author"[^>]*\/?>/gi, '');
  html = html.replace(/<meta[^>]*property="og:[^"]*"[^>]*\/?>/gi, '');
  html = html.replace(/<meta[^>]*name="twitter:[^"]*"[^>]*\/?>/gi, '');
  html = html.replace(/<link[^>]*rel="canonical"[^>]*\/?>/gi, '');
  html = html.replace(/<meta[^>]*name="robots"[^>]*\/?>/gi, '');
  html = html.replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');

  let seoHead = '';

  if (headHtml) {
    // Use the DropInBlog-provided head HTML (includes title, meta, OG, twitter, JSON-LD, CSS)
    // Check if canonical is already in headHtml
    const hasCanonical = /<link\s+rel="canonical"/i.test(headHtml);
    seoHead = `
    <!-- DropInBlog SEO Head -->
    ${headHtml}
    ${!hasCanonical ? `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />` : ''}
    <meta name="robots" content="index, follow" />
    `;
  } else {
    // Fallback: generate our own meta tags
    seoHead = `
    <title>${escapeHtml(fallbackTitle)}</title>
    <meta name="description" content="${escapeHtml(fallbackDescription)}" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta name="robots" content="index, follow" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeHtml(fallbackTitle)}" />
    <meta property="og:description" content="${escapeHtml(fallbackDescription)}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:site_name" content="Your Best SEO" />
    ${ogImage ? `<meta property="og:image" content="${escapeHtml(ogImage)}" />` : ''}
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(fallbackTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(fallbackDescription)}" />
    ${ogImage ? `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />` : ''}
    
    <!-- Structured Data -->
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    `;
  }

  // Insert SEO head after <head> tag
  html = html.replace(/<head([^>]*)>/, `<head$1>${seoHead}`);

  // Pre-render the blog content inside <div id="root"> for Googlebot
  if (bodyHtml) {
    const preRenderedContent = `
      <div id="dropinblog-ssr-content" style="max-width:900px;margin:0 auto;padding:24px 16px;">
        ${bodyHtml}
      </div>
    `;
    html = html.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${preRenderedContent}</div>`
    );
  }

  return html;
}

// ─── Page Generators ─────────────────────────────────────────────────────────

async function generateBlogListingPage(template, posts) {
  const title = 'SEO & Digital Marketing Blog | Your Best SEO';
  const description = 'Actionable SEO insights, advanced guides, and proven strategies for marketing agencies. Learn link building, keyword research, and technical SEO.';
  const canonicalUrl = `${SITE_URL}/blog`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': title,
    'description': description,
    'url': canonicalUrl,
    'publisher': {
      '@type': 'Organization',
      'name': 'Your Best SEO',
      'url': SITE_URL,
    },
    'blogPost': posts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      'headline': post.title,
      'url': post.link,
      'datePublished': post.pubDate,
      ...(post.featuredImage ? { 'image': post.featuredImage } : {}),
    })),
  };

  console.log('  📡 Fetching rendered blog listing...');
  const rendered = await fetchRenderedListing();

  if (rendered && rendered.body_html) {
    console.log('  ✅ Got rendered listing content');
    return generateFullPage(template, {
      headHtml: rendered.head_html || null,
      bodyHtml: rendered.body_html,
      fallbackTitle: title,
      fallbackDescription: description,
      canonicalUrl,
      ogImage: posts[0]?.featuredImage || null,
      jsonLd,
    });
  }

  // Fallback to meta-only page
  console.log('  ⚠️  Using meta-only fallback for listing page');
  return generateFullPage(template, {
    headHtml: null,
    bodyHtml: null,
    fallbackTitle: title,
    fallbackDescription: description,
    canonicalUrl,
    ogImage: posts[0]?.featuredImage || null,
    jsonLd,
  });
}

async function generateBlogPostPage(template, post) {
  const canonicalUrl = post.link;
  const ogImage = post.featuredImage || null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.description,
    'url': canonicalUrl,
    'datePublished': post.pubDate,
    ...(ogImage ? { 'image': ogImage } : {}),
    'author': {
      '@type': 'Person',
      'name': post.author || 'Your Best SEO',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Your Best SEO',
      'url': SITE_URL,
    },
  };

  // Fetch the full rendered content for this post
  const rendered = await fetchRenderedPost(post.slug);

  if (rendered && rendered.body_html) {
    return generateFullPage(template, {
      headHtml: rendered.head_html || null,
      bodyHtml: rendered.body_html,
      fallbackTitle: post.title,
      fallbackDescription: post.description,
      canonicalUrl,
      ogImage,
      jsonLd,
    });
  }

  // Fallback to meta-only page if rendered API fails
  console.log(`  ⚠️  Using meta-only fallback for "${post.slug}"`);
  return generateFullPage(template, {
    headHtml: null,
    bodyHtml: null,
    fallbackTitle: post.title,
    fallbackDescription: post.description,
    canonicalUrl,
    ogImage,
    jsonLd,
  });
}

// ─── Sitemap Update ──────────────────────────────────────────────────────────

function updateSitemap(posts) {
  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.warn('⚠️  No sitemap.xml found in dist. Skipping sitemap update.');
    return;
  }

  let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  const today = new Date().toISOString().split('T')[0];

  const blogUrls = [];

  // Blog listing page
  blogUrls.push(`  <url>
    <loc>${SITE_URL}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`);

  // Individual blog posts
  for (const post of posts) {
    let lastmod = today;
    if (post.pubDate) {
      try {
        lastmod = new Date(post.pubDate).toISOString().split('T')[0];
      } catch (e) {
        // Use today as fallback
      }
    }

    blogUrls.push(`  <url>
    <loc>${post.link}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  }

  // Remove any existing blog URLs from sitemap to avoid duplicates
  sitemap = sitemap.replace(/<url>\s*<loc>https:\/\/yourbestseo\.com\/blog[^<]*<\/loc>[\s\S]*?<\/url>/g, '');

  // Insert blog URLs before closing </urlset>
  const blogUrlBlock = blogUrls.join('\n');
  sitemap = sitemap.replace('</urlset>', `${blogUrlBlock}\n</urlset>`);

  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`📝 Updated sitemap.xml with ${blogUrls.length} blog URLs`);
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n🔧 DropInBlog SEO Generator for yourbestseo.com');
  console.log('================================================\n');

  // Read the template HTML
  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ dist/index.html not found. Run vite build first.');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Discover all blog posts from RSS feed (no auth required)
  console.log('📡 Discovering blog posts from RSS feed...');
  const posts = await fetchPostsFromRSS();
  console.log(`📄 Found ${posts.length} published blog posts\n`);

  if (posts.length === 0) {
    console.log('⚠️  No posts found in RSS feed.\n');
  }

  // Create blog directory
  const blogDir = path.join(DIST_DIR, 'blog');
  fs.mkdirSync(blogDir, { recursive: true });

  // Generate /blog listing page with full rendered content
  console.log('📄 Generating /blog listing page...');
  const blogListingHtml = await generateBlogListingPage(template, posts);
  fs.writeFileSync(path.join(blogDir, 'index.html'), blogListingHtml);
  console.log('  ✅ /blog → SEO & Digital Marketing Blog | Your Best SEO\n');

  // Generate individual blog post pages with full rendered content
  console.log('📄 Generating individual blog post pages with full SSR content...\n');
  let successCount = 0;
  let fallbackCount = 0;

  for (const post of posts) {
    const displayTitle = post.title.substring(0, 60);
    process.stdout.write(`  📡 /blog/${post.slug}...`);

    const postHtml = await generateBlogPostPage(template, post);
    const postDir = path.join(blogDir, post.slug);
    fs.mkdirSync(postDir, { recursive: true });
    fs.writeFileSync(path.join(postDir, 'index.html'), postHtml);

    if (postHtml.includes('dropinblog-ssr-content')) {
      console.log(` ✅ ${displayTitle}...`);
      successCount++;
    } else {
      console.log(` ⚠️  ${displayTitle}... (meta-only)`);
      fallbackCount++;
    }

    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  // Update sitemap with all blog URLs
  console.log('');
  updateSitemap(posts);

  console.log(`\n🎉 Generated ${posts.length + 1} static HTML pages:`);
  console.log(`   • 1 blog listing page (/blog)`);
  console.log(`   • ${successCount} blog posts with full SSR content`);
  if (fallbackCount > 0) {
    console.log(`   • ${fallbackCount} blog posts with meta-only (rendered API unavailable)`);
  }
  console.log(`   • Updated sitemap with ${posts.length + 1} blog URLs`);
  console.log('\n✅ All blog content is now pre-rendered for Google indexing.\n');

  // ─── Global HTML Cleanup ───────────────────────────────────────────────
  cleanupAllHtmlFiles();

  // ─── Build Output API ────────────────────────────────────────────────────
  createVercelBuildOutput();
}

// ─── Global HTML Cleanup ────────────────────────────────────────────────────
/**
 * Scans ALL HTML files in dist/ and removes empty/broken canonical tags,
 * duplicate meta tags, and other SSG artifacts that hurt SEO.
 * This runs after blog generation so it catches everything.
 */
function cleanupAllHtmlFiles() {
  console.log('\n🧹 Running global HTML cleanup on all pages...');

  let filesFixed = 0;
  let emptyCanonicals = 0;

  function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.name === 'index.html') {
        let html = fs.readFileSync(fullPath, 'utf-8');
        let changed = false;

        // Remove empty <link rel="canonical"> tags (no href attribute)
        const emptyCanonicalRegex = /<link\s+rel="canonical"\s*\/?>/gi;
        const emptyMatches = html.match(emptyCanonicalRegex);
        if (emptyMatches) {
          html = html.replace(emptyCanonicalRegex, '');
          emptyCanonicals += emptyMatches.length;
          changed = true;
        }

        // Ensure there's exactly one canonical tag per page
        const allCanonicals = html.match(/<link[^>]*rel="canonical"[^>]*>/gi) || [];
        if (allCanonicals.length > 1) {
          // Keep the first one with an href, remove the rest
          let kept = false;
          for (const tag of allCanonicals) {
            if (!kept && /href="[^"]+"/.test(tag)) {
              kept = true;
              continue;
            }
            html = html.replace(tag, '');
            changed = true;
          }
        }

        if (changed) {
          fs.writeFileSync(fullPath, html);
          filesFixed++;
        }
      }
    }
  }

  walkDir(DIST_DIR);
  console.log(`  ✅ Fixed ${filesFixed} files (removed ${emptyCanonicals} empty canonical tags)`);
}

// ─── Vercel Build Output API ─────────────────────────────────────────────────
/**
 * Creates the .vercel/output/ directory structure for Vercel's Build Output API.
 * This gives us complete control over routing - no SPA fallback that would
 * override our carefully generated static HTML files.
 */
function createVercelBuildOutput() {
  console.log('\n🏗️  Creating Vercel Build Output API structure...');

  const outputDir = path.join(__dirname, '..', '.vercel', 'output');
  const staticDir = path.join(outputDir, 'static');

  // Clean previous output
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true });
  }

  // Copy dist/ to .vercel/output/static/
  cpSync(DIST_DIR, staticDir, { recursive: true });
  console.log('  📁 Copied dist/ → .vercel/output/static/');

  // Create config.json with filesystem-only routing (no SPA fallback)
  const config = {
    version: 3,
    routes: [
      // Handle clean URLs - serve /about as /about/index.html
      { handle: 'filesystem' },
      // 404 for anything not found as a static file
      { src: '/(.*)', status: 404, dest: '/404.html' }
    ]
  };

  fs.writeFileSync(
    path.join(outputDir, 'config.json'),
    JSON.stringify(config, null, 2)
  );
  console.log('  ⚙️  Created .vercel/output/config.json (no SPA fallback)');
  console.log('');
  console.log('✅ Build Output API structure ready for deployment.\n');
}

main().catch(err => {
  console.error('❌ Script failed:', err);
  process.exit(1);
});
