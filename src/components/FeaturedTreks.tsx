import { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Clock, TrendingUp, MapPin, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import TrekImage from "@/components/TrekImage";

// Lazy load dialog - only loaded when user clicks contact
const ContactDialog = lazy(() => import("@/components/ContactDialog"));

const FeaturedTreks = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedTrek, setSelectedTrek] = useState<string>("");

  const { data: treks, isLoading } = useQuery({
    queryKey: ["featured-treks"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("treks")
        .select("id, name, slug, hero_image_url, duration_days, difficulty, max_altitude_m, short_description")
        .eq("is_featured", true)
        .eq("is_published", true)
        .order("display_order")
        .limit(6);
      
      if (error) throw error;
      return data;
    },
  });

  const handleContactClick = (trekName: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent Link navigation
    setSelectedTrek(trekName);
    setContactOpen(true);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Popular Adventures
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Featured Trekking Packages
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our most popular treks, carefully crafted to give you the 
            best Himalayan experience with expert guidance and full support.
          </p>
        </div>

        {/* Trek Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading Skeletons
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-card rounded-xl overflow-hidden shadow-soft h-[500px]">
                <Skeleton className="w-full h-64" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <div className="flex gap-4">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))
          ) : (
            treks?.map((trek, index) => (
              <Link
                to={`/trek/${trek.slug}`}
                key={trek.id}
                className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-in-up block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <TrekImage
                    src={trek.hero_image_url}
                    trekSlug={trek.slug}
                    alt={`${trek.name} – Nepal Himalayan trek`}
                    width={413}
                    height={256}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    wrapperClassName="w-full h-full"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-1 rounded-full font-medium text-sm">
                    Contact for pricing
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-peak/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {trek.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 h-10">
                    {trek.short_description}
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-4 h-4 text-accent" />
                      {trek.duration_days} Days
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      {trek.difficulty}
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      {trek.max_altitude_m?.toLocaleString()}m
                    </div>
                  </div>

                  <Button 
                    variant="mountain" 
                    className="w-full group/btn"
                    onClick={(e) => handleContactClick(trek.name, e)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Us
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/treks">
              View All Treks
              <ChevronRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>

      {contactOpen && (
        <Suspense fallback={null}>
          <ContactDialog 
            open={contactOpen} 
            onOpenChange={setContactOpen}
            trekName={selectedTrek}
          />
        </Suspense>
      )}
    </section>
  );
};

export default FeaturedTreks;
