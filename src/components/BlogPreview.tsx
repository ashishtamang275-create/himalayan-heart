import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";

const BlogPreview = () => {
  const { data: posts = [] } = useQuery({
    queryKey: ["blog-preview"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, category, published_at, read_time_minutes, hero_image_url")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(3);
      if (error) throw error;
      return data;
    },
  });

  if (posts.length === 0) return null;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">From Our Blog</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">Trekking Tips & Guides</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all">
              {post.hero_image_url && (
                <div className="h-44 overflow-hidden">
                  <img src={post.hero_image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              )}
              <div className="p-5">
                <span className="text-accent text-xs font-semibold uppercase">{post.category.replace(/-/g, " ")}</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/blog" className="inline-flex items-center gap-1 text-accent font-semibold hover:underline">
            View All Posts <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
