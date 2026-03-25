/**
 * Dynamic sitemap generator.
 * Fetches all published treks, regions, and blog posts from the database
 * and merges them with static routes to produce public/sitemap.xml.
 *
 * Run: npx tsx scripts/generate-sitemap.ts
 * Or add to build: "prebuild": "npx tsx scripts/generate-sitemap.ts"
 */

const SITE_URL = "https://go-nepal-adventures.lovable.app";
const TODAY = new Date().toISOString().split("T")[0];

// Static routes with priority and changefreq
const staticRoutes: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/treks", priority: "0.9", changefreq: "weekly" },
  { path: "/trekking-packages", priority: "0.9", changefreq: "weekly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/faq", priority: "0.6", changefreq: "monthly" },
  { path: "/gallery", priority: "0.6", changefreq: "monthly" },
  { path: "/peak-climbing", priority: "0.7", changefreq: "monthly" },
  { path: "/tours", priority: "0.7", changefreq: "monthly" },
  { path: "/about-our-guides", priority: "0.7", changefreq: "monthly" },
  { path: "/why-us", priority: "0.7", changefreq: "monthly" },
  { path: "/trekking-permits-nepal", priority: "0.8", changefreq: "monthly" },
  { path: "/nepal-visa-information", priority: "0.7", changefreq: "monthly" },
  { path: "/altitude-sickness-guide", priority: "0.8", changefreq: "monthly" },
  { path: "/safety-and-rescue", priority: "0.7", changefreq: "monthly" },
  { path: "/everest-base-camp-cost", priority: "0.8", changefreq: "monthly" },
  { path: "/do-you-need-guide-nepal", priority: "0.8", changefreq: "monthly" },
  { path: "/nepal-trek-difficulty-comparison", priority: "0.8", changefreq: "monthly" },
  { path: "/annapurna-vs-everest", priority: "0.8", changefreq: "monthly" },
  { path: "/best-time-to-trek-nepal", priority: "0.8", changefreq: "monthly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
];

function urlEntry(loc: string, lastmod: string, changefreq: string, priority: string): string {
  return `  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function main() {
  const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://fnazrkupmxjvcppgdixs.supabase.co";
  const SUPABASE_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuYXpya3VwbXhqdmNwcGdkaXhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxODcwNzIsImV4cCI6MjA4MTc2MzA3Mn0.B2PAEivCnJN9fncQXnFVWlUqQDH5I0WRCngsVUr0cqc";

  const entries: string[] = [];

  // Static routes
  for (const route of staticRoutes) {
    entries.push(urlEntry(route.path, TODAY, route.changefreq, route.priority));
  }

  // Fetch published treks
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/treks?select=slug,updated_at&is_published=eq.true&order=display_order`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
    });
    if (res.ok) {
      const treks: { slug: string; updated_at: string }[] = await res.json();
      for (const trek of treks) {
        const lastmod = trek.updated_at?.split("T")[0] || TODAY;
        entries.push(urlEntry(`/trek/${trek.slug}`, lastmod, "weekly", "0.8"));
      }
      console.log(`✓ Added ${treks.length} trek pages`);
    }
  } catch (e) {
    console.warn("⚠ Could not fetch treks:", e);
  }

  // Fetch regions
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/regions?select=slug,updated_at&order=display_order`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
    });
    if (res.ok) {
      const regions: { slug: string; updated_at: string }[] = await res.json();
      for (const region of regions) {
        const lastmod = region.updated_at?.split("T")[0] || TODAY;
        entries.push(urlEntry(`/region/${region.slug}`, lastmod, "monthly", "0.7"));
      }
      console.log(`✓ Added ${regions.length} region pages`);
    }
  } catch (e) {
    console.warn("⚠ Could not fetch regions:", e);
  }

  // Fetch published blog posts
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/blog_posts?select=slug,updated_at&is_published=eq.true&order=published_at.desc`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
    });
    if (res.ok) {
      const posts: { slug: string; updated_at: string }[] = await res.json();
      for (const post of posts) {
        const lastmod = post.updated_at?.split("T")[0] || TODAY;
        entries.push(urlEntry(`/blog/${post.slug}`, lastmod, "monthly", "0.6"));
      }
      console.log(`✓ Added ${posts.length} blog post pages`);
    }
  } catch (e) {
    console.warn("⚠ Could not fetch blog posts:", e);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>`;

  const fs = await import("fs");
  const path = await import("path");
  const outPath = path.resolve(process.cwd(), "public/sitemap.xml");
  fs.writeFileSync(outPath, sitemap, "utf-8");
  console.log(`✓ Sitemap written to ${outPath} (${entries.length} URLs)`);
}

main().catch(console.error);
