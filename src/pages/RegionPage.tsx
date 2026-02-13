import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Clock, TrendingUp, MapPin, ChevronRight, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const RegionPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: region, isLoading: regionLoading } = useQuery({
    queryKey: ["region", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("regions")
        .select("*")
        .eq("slug", slug!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  const { data: treks = [] } = useQuery({
    queryKey: ["region-treks", region?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("treks")
        .select("*")
        .eq("region_id", region!.id)
        .eq("is_published", true)
        .order("display_order");
      if (error) throw error;
      return data;
    },
    enabled: !!region?.id,
  });

  if (regionLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-4 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-secondary rounded w-1/3 mx-auto" />
            <div className="h-6 bg-secondary rounded w-2/3 mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  if (!region) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Region Not Found</h1>
          <Button asChild><Link to="/treks">View All Treks</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{region.meta_title || `${region.name} Treks | Go Nepal Adventures`}</title>
        <meta name="description" content={region.meta_description || region.short_description} />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-accent">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/treks" className="hover:text-accent">Treks</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{region.name}</span>
            </nav>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {region.name} Treks
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {region.description}
            </p>
          </div>
        </section>

        {/* Trek Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground mb-10">
              Available Treks in {region.name}
            </h2>
            {treks.length === 0 ? (
              <p className="text-muted-foreground">No treks available yet for this region. Check back soon!</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {treks.map((trek) => (
                  <Link
                    key={trek.id}
                    to={`/trek/${trek.slug}`}
                    className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
                  >
                    <div className="relative h-56 bg-secondary">
                      {trek.hero_image_url && (
                        <img src={trek.hero_image_url} alt={trek.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-peak/60 to-transparent" />
                      {trek.starting_price_usd && (
                        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          From ${trek.starting_price_usd}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {trek.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{trek.short_description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-accent" />{trek.duration_days} Days</span>
                        <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4 text-accent" />{trek.difficulty}</span>
                        {trek.max_altitude_m && <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-accent" />{trek.max_altitude_m.toLocaleString()}m</span>}
                      </div>
                      {trek.rating && Number(trek.rating) > 0 && (
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 fill-sunrise text-sunrise" />
                          <span className="font-semibold">{trek.rating}</span>
                          <span className="text-muted-foreground">({trek.review_count} reviews)</span>
                        </div>
                      )}
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

export default RegionPage;
