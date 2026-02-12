/**
 * Post-Build SEO Generator for DropInBlog Pages
 * 
 * This script runs after `vite build` and:
 * 1. Fetches all published blog posts from the DropInBlog API
 * 2. Generates static HTML files for /blog (listing) and /blog/:slug (each post)
 * 3. Each page gets unique <title>, <meta description>, OG tags, canonical URL, and JSON-LD
 * 4. Updates the sitemap.xml to include all blog URLs
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

function generateHTML(template, { title, description, canonicalUrl, ogImage, jsonLd }) {
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
  const seoTags = `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta name="robots" content="index, follow" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="article" />
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

  // Insert after <head> tag
  html = html.replace(/<head([^>]*)>/, `<head$1>${seoTags}`);

  return html;
}

// ─── Page Generators ─────────────────────────────────────────────────────────

function generateBlogListingPage(template, posts) {
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

  return generateHTML(template, {
    title,
    description,
    canonicalUrl,
    ogImage: posts[0]?.featuredImage || null,
    jsonLd,
  });
}

function generateBlogPostPage(template, post) {
  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.summary?.substring(0, 160) || '';
  const canonicalUrl = post.canonicalUrl || `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.featuredImage || null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': title,
    'description': description,
    'url': `${SITE_URL}/blog/${post.slug}`,
    'datePublished': post.publishedAt,
    'dateModified': post.modifiedAt || post.publishedAt,
    ...(ogImage ? { 'image': ogImage } : {}),
    ...(post.readtime ? { 'timeRequired': post.readtime } : {}),
    'author': post.author ? {
      '@type': 'Person',
      'name': post.author.name || post.author,
    } : {
      '@type': 'Organization',
      'name': 'Your Best SEO',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Your Best SEO',
      'url': SITE_URL,
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  };

  // Add FAQ schema if the post has FAQs
  if (post.faqs && post.faqs.length > 0) {
    jsonLd['hasPart'] = post.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    }));
  }

  return generateHTML(template, {
    title,
    description,
    canonicalUrl: `${SITE_URL}/blog/${post.slug}`,
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

  let generated = 0;

  // Generate /blog listing page
  const blogDir = path.join(DIST_DIR, 'blog');
  fs.mkdirSync(blogDir, { recursive: true });

  const blogListingHtml = generateBlogListingPage(template, posts);
  fs.writeFileSync(path.join(blogDir, 'index.html'), blogListingHtml);
  console.log(`  ✅ /blog → SEO & Digital Marketing Blog | Your Best SEO`);
  generated++;

  // Generate individual blog post pages
  for (const post of posts) {
    const postDir = path.join(blogDir, post.slug);
    fs.mkdirSync(postDir, { recursive: true });

    const postHtml = generateBlogPostPage(template, post);
    fs.writeFileSync(path.join(postDir, 'index.html'), postHtml);

    const displayTitle = (post.seoTitle || post.title).substring(0, 60);
    console.log(`  ✅ /blog/${post.slug} → ${displayTitle}...`);
    generated++;
  }

  // Update sitemap
  console.log('');
  updateSitemap(posts);

  console.log(`\n🎉 Generated ${generated} static HTML pages with unique SEO meta tags.\n`);
}

main().catch(err => {
  console.error('❌ Script failed:', err);
  process.exit(1);
});
