import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ChevronRight } from "lucide-react";

const BlogPage = () => {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("is_published", true)
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Nepal Trekking Blog 2026 – Expert Guides & Tips</title>
        <meta name="description" content="Expert Nepal trekking tips from a licensed local guide. Altitude sickness, packing lists, best seasons, costs & visa guides. Updated for 2026." />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-32 pb-8">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Trekking Blog</h1>
            <p className="text-lg text-muted-foreground">Tips, guides, and stories from the Himalayas to help you plan your perfect Nepal adventure.</p>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse bg-secondary rounded-xl h-80" />
                ))}
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">Blog posts coming soon! Check back for trekking tips, guides, and Nepal travel advice.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
                  >
                    {post.hero_image_url && (
                      <div className="h-48 overflow-hidden">
                        <img src={post.hero_image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                    )}
                    <div className="p-6">
                      <span className="text-accent text-xs font-semibold uppercase tracking-wider">{post.category.replace(/-/g, " ")}</span>
                      <h2 className="font-display text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h2>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        {post.published_at && (
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(post.published_at).toLocaleDateString()}</span>
                        )}
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.read_time_minutes} min read</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPage;
