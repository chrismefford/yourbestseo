/**
 * Post-Build SEO Generator for DropInBlog Pages
 * 
 * This script runs after `vite build` and:
 * 1. Fetches all published blog posts from the DropInBlog API
 * 2. Fetches the full rendered HTML (head + body) for each blog post
 * 3. Generates static HTML files for /blog (listing) and /blog/:slug (each post)
 *    with full pre-rendered content visible to search engines without JavaScript
 * 4. Updates the sitemap.xml to include all blog URLs
 * 
 * This ensures Google can index the full blog content on first crawl,
 * while the React SPA hydrates on top for client-side navigation.
 * 
 * Usage: node scripts/generate-blog-seo.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '..', 'dist');

// DropInBlog Configuration
const BLOG_ID = 'aaccbdb9-3466-4e98-8baf-d86ddbe61db7';
const API_KEY = process.env.DROPINBLOG_API_KEY || process.env.VITE_DROPINBLOG_API_KEY || '';
const SITE_URL = 'https://yourbestseo.com';

// ─── API Functions ───────────────────────────────────────────────────────────

async function fetchAllBlogPosts() {
  if (!API_KEY) {
    console.warn('⚠️  No DropInBlog API key found. Set DROPINBLOG_API_KEY env var.');
    console.warn('   Skipping blog post page generation.');
    return [];
  }

  const allPosts = [];
  let page = 1;
  let lastPage = 1;

  do {
    const url = `https://api.dropinblog.com/v2/blog/${BLOG_ID}/posts?limit=50&page=${page}`;
    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      console.error(`❌ DropInBlog API error: ${res.status} ${res.statusText}`);
      return allPosts;
    }

    const json = await res.json();
    if (!json.success) {
      console.error(`❌ DropInBlog API error: ${json.message}`);
      return allPosts;
    }

    const posts = json.data.posts || [];
    allPosts.push(...posts);
    lastPage = json.data.pagination?.last_page || 1;
    page++;
  } while (page <= lastPage);

  return allPosts;
}

/**
 * Fetch the full rendered HTML for a specific blog post from the DropInBlog API.
 * Returns { head_html, body_html } with the complete rendered content.
 */
async function fetchRenderedPost(slug) {
  const url = `https://api.dropinblog.com/v2/blog/${BLOG_ID}/rendered/post/${encodeURIComponent(slug)}`;
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Accept': 'application/json',
    },
  });

  if (!res.ok) {
    console.error(`  ❌ Failed to fetch rendered post "${slug}": ${res.status}`);
    return null;
  }

  const json = await res.json();
  if (!json.success && !json.data) {
    console.error(`  ❌ API error for "${slug}": ${json.message || 'Unknown error'}`);
    return null;
  }

  return json.data || json;
}

/**
 * Fetch the full rendered HTML for the blog listing page.
 * Returns { head_html, body_html } with the listing content.
 */
async function fetchRenderedListing() {
  const url = `https://api.dropinblog.com/v2/blog/${BLOG_ID}/rendered/list`;
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Accept': 'application/json',
    },
  });

  if (!res.ok) {
    console.error(`  ❌ Failed to fetch rendered listing: ${res.status}`);
    return null;
  }

  const json = await res.json();
  return json.data || json;
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
 * The page includes:
 * - SEO meta tags from DropInBlog's head_html (or fallback meta tags)
 * - Full article body_html pre-rendered inside the page for Googlebot
 * - The SPA's JS bundle so React can hydrate and take over client-side
 */
function generateFullPage(template, { headHtml, bodyHtml, fallbackTitle, fallbackDescription, canonicalUrl, ogImage, jsonLd }) {
  let html = template;

  // Remove any existing meta tags that we'll replace
  html = html.replace(/<title[^>]*>.*?<\/title>/gi, '');
  html = html.replace(/<meta\s+name="description"[^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+property="og:[^"]*"[^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+name="twitter:[^"]*"[^>]*\/?>/gi, '');
  html = html.replace(/<link\s+rel="canonical"[^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+name="robots"[^>]*\/?>/gi, '');
  html = html.replace(/<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');

  // Build the SEO head block
  let seoHead = '';

  if (headHtml) {
    // Use the DropInBlog-provided head HTML (includes title, meta, OG, twitter, JSON-LD, CSS)
    seoHead = `
    <!-- DropInBlog SEO Head -->
    ${headHtml}
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
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
  // The React app will hydrate on top of this content
  if (bodyHtml) {
    // Insert pre-rendered content inside the root div
    // We wrap it in a special container that the React app can identify and replace
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

/**
 * Generate a simple page with only SEO meta tags (no pre-rendered body content).
 * Used as a fallback when the rendered API fails.
 */
function generateMetaOnlyPage(template, { title, description, canonicalUrl, ogImage, jsonLd }) {
  let html = template;

  html = html.replace(/<title[^>]*>.*?<\/title>/gi, '');
  html = html.replace(/<meta\s+name="description"[^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+property="og:[^"]*"[^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+name="twitter:[^"]*"[^>]*\/?>/gi, '');
  html = html.replace(/<link\s+rel="canonical"[^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+name="robots"[^>]*\/?>/gi, '');
  html = html.replace(/<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');

  const seoTags = `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta name="robots" content="index, follow" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:site_name" content="Your Best SEO" />
    ${ogImage ? `<meta property="og:image" content="${escapeHtml(ogImage)}" />` : ''}
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    ${ogImage ? `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />` : ''}
    
    <!-- Structured Data -->
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  `;

  html = html.replace(/<head([^>]*)>/, `<head$1>${seoTags}`);
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
      'headline': post.seoTitle || post.title,
      'url': `${SITE_URL}/blog/${post.slug}`,
      'datePublished': post.publishedAt,
      ...(post.featuredImage ? { 'image': post.featuredImage } : {}),
    })),
  };

  // Try to fetch the rendered listing page
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
  return generateMetaOnlyPage(template, {
    title,
    description,
    canonicalUrl,
    ogImage: posts[0]?.featuredImage || null,
    jsonLd,
  });
}

async function generateBlogPostPage(template, post) {
  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.summary || `Read "${post.title}" on the Your Best SEO blog.`;
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.featuredImage || null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': title,
    'description': description,
    'url': canonicalUrl,
    'datePublished': post.publishedAt,
    'dateModified': post.updatedAt || post.publishedAt,
    ...(ogImage ? { 'image': ogImage } : {}),
    'author': {
      '@type': 'Person',
      'name': post.author?.displayName || 'Your Best SEO',
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
      fallbackTitle: title,
      fallbackDescription: description,
      canonicalUrl,
      ogImage,
      jsonLd,
    });
  }

  // Fallback to meta-only page if rendered API fails
  console.log(`  ⚠️  Using meta-only fallback for "${post.slug}"`);
  return generateMetaOnlyPage(template, {
    title,
    description,
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

  // Build blog URL entries
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
    const lastmod = post.updatedAt
      ? post.updatedAt.split('T')[0]
      : post.publishedAt
        ? post.publishedAt.split('T')[0]
        : today;

    blogUrls.push(`  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
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

  // Fetch blog posts
  console.log('📡 Fetching blog posts from DropInBlog API...');
  const posts = await fetchAllBlogPosts();
  console.log(`📄 Found ${posts.length} published blog posts\n`);

  if (posts.length === 0) {
    console.log('⚠️  No posts found. Only generating blog listing page with fallback meta tags.\n');
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
    const displayTitle = (post.seoTitle || post.title).substring(0, 60);
    process.stdout.write(`  📡 /blog/${post.slug}...`);

    const postHtml = await generateBlogPostPage(template, post);
    const postDir = path.join(blogDir, post.slug);
    fs.mkdirSync(postDir, { recursive: true });
    fs.writeFileSync(path.join(postDir, 'index.html'), postHtml);

    // Check if we got full content or just meta tags
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
}

main().catch(err => {
  console.error('❌ Script failed:', err);
  process.exit(1);
});
