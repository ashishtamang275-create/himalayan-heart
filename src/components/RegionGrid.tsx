import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const RegionGrid = () => {
  const { data: regions = [] } = useQuery({
    queryKey: ["regions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("regions")
        .select("*")
        .order("display_order");
      if (error) throw error;
      return data;
    },
  });

  if (regions.length === 0) return null;

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Explore By Region</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">Trekking Regions of Nepal</h2>
          <p className="text-muted-foreground text-lg">From the legendary Everest to the remote Kanchenjunga, find your perfect Himalayan adventure.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            <Link
              key={region.id}
              to={`/region/${region.slug}`}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{region.name}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{region.short_description}</p>
              </div>
              <div className="flex items-center gap-1 text-accent font-semibold text-sm mt-4">
                Explore treks <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionGrid;
