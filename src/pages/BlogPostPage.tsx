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
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 container mx-auto px-4 max-w-3xl animate-pulse space-y-4">
          <div className="h-10 bg-secondary rounded w-2/3" />
          <div className="h-6 bg-secondary rounded w-1/3" />
          <div className="h-64 bg-secondary rounded" />
        </div>
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

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{post.meta_title || `${post.title} | Go Nepal Adventures Blog`}</title>
        <meta name="description" content={post.meta_description || post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
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
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPostPage;
