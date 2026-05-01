import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import DOMPurify from "dompurify";
import RelatedTreks from "@/components/RelatedTreks";

// Static SEO fallbacks rendered immediately from the URL slug — before Supabase loads.
const BLOG_SEO_FALLBACK: Record<
  string,
  { title: string; description: string; category: string; readTime: number }
> = {
  "best-time-to-trek-in-nepal": {
    title: "Best Time to Trek in Nepal: A Complete Seasonal Guide",
    description: "Month-by-month breakdown of the best seasons to trek Nepal — weather, visibility, and crowd levels.",
    category: "Trekking Guides",
    readTime: 8,
  },
  "everest-base-camp-trek-complete-guide": {
    title: "Everest Base Camp Trek: The Complete 2026 Guide",
    description: "Everything you need to plan the EBC trek — itinerary, costs, permits, training, and acclimatization.",
    category: "Trekking Guides",
    readTime: 12,
  },
  "altitude-sickness-prevention-nepal": {
    title: "Altitude Sickness in Nepal: How to Prevent, Recognize & Treat It",
    description: "Practical advice on AMS prevention, symptoms, treatment, and emergency descent for high-altitude trekkers.",
    category: "Safety",
    readTime: 7,
  },
  "packing-list-for-nepal-trek": {
    title: "The Ultimate Packing List for Trekking in Nepal",
    description: "Complete gear checklist for Nepal treks — layers, footwear, sleeping bag, first-aid, and documents.",
    category: "Trekking Guides",
    readTime: 6,
  },
  "culture-etiquette-nepal": {
    title: "Cultural Etiquette in Nepal: Do's and Don'ts for Travelers",
    description: "Respectful travel in Nepal — temple etiquette, greetings, dress code, and cultural awareness.",
    category: "Culture",
    readTime: 5,
  },
};

const slugToTitle = (slug?: string) =>
  slug ? slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") : "Article";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    const fallback = slug ? BLOG_SEO_FALLBACK[slug] : undefined;
    const title = fallback?.title || slugToTitle(slug);
    const description = fallback?.description || `Read our guide on ${title} — tips and insights from Go Nepal Adventure.`;
    return (
      <div className="min-h-screen">
        <Helmet>
          <title>{`${title} | Go Nepal Adventures Blog`}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={`https://ashish-tamang.com.np/blog/${slug ?? ""}`} />
        </Helmet>
        <Navbar />
        <main className="pt-28 pb-16">
          <article className="container mx-auto px-4 max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
              <Link to="/" className="hover:text-accent">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground line-clamp-1">{title}</span>
            </nav>
            {fallback && (
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">{fallback.category}</span>
            )}
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{description}</p>
            {fallback && (
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />Indra Tamang</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{fallback.readTime} min read</span>
              </div>
            )}
            <div className="animate-pulse space-y-3" aria-hidden="true">
              <div className="h-64 bg-secondary rounded" />
              <div className="h-4 bg-secondary rounded w-full" />
              <div className="h-4 bg-secondary rounded w-5/6" />
              <div className="h-4 bg-secondary rounded w-2/3" />
            </div>
          </article>
        </main>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Button asChild><Link to="/blog">Back to Blog</Link></Button>
        </div>
      </div>
    );
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta_description || post.excerpt,
    image: post.hero_image_url || undefined,
    datePublished: post.published_at || undefined,
    dateModified: post.updated_at || post.published_at || undefined,
    author: {
      "@type": "Person",
      name: "Indra Tamang",
    },
    publisher: {
      "@type": "Organization",
      name: "Go Nepal Adventure",
    },
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{post.meta_title || `${post.title} | Go Nepal Adventures Blog`}</title>
        <meta name="description" content={post.meta_description || post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
      </Helmet>
      <Navbar />
      <main className="pt-28 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-accent">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground line-clamp-1">{post.title}</span>
          </nav>

          <span className="text-accent text-sm font-semibold uppercase tracking-wider">{post.category.replace(/-/g, " ")}</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
            {post.published_at && <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(post.published_at).toLocaleDateString()}</span>}
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.read_time_minutes} min read</span>
          </div>

          {post.hero_image_url && (
            <img src={post.hero_image_url} alt={post.title} className="w-full rounded-xl mb-8" loading="lazy" />
          )}

          <div className="prose prose-lg max-w-none text-foreground [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_li]:mb-2"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content, {
              ALLOWED_TAGS: ['h1','h2','h3','h4','h5','h6','p','ul','ol','li','strong','em','a','img','blockquote','code','pre','br','span','div','table','thead','tbody','tr','th','td'],
              ALLOWED_ATTR: ['href','src','alt','title','class','target','rel']
            }) }}
          />

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border">
              {post.tags.map((tag: string) => (
                <span key={tag} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">#{tag}</span>
              ))}
            </div>
          )}

          <RelatedTreks postSlug={post.slug} category={post.category} tags={post.tags ?? []} />
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPostPage;
