import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ChevronRight, Clock, TrendingUp } from "lucide-react";

interface RelatedTreksProps {
  postSlug: string;
  category?: string;
  tags?: string[];
}

// Map blog post slug/keywords -> relevant trek slugs
const SLUG_MAP: Record<string, string[]> = {
  "best-time-to-trek-in-nepal": ["everest-base-camp", "annapurna-base-camp", "langtang-valley"],
  "everest-base-camp-trek-complete-guide": ["everest-base-camp"],
  "altitude-sickness-prevention-nepal": ["everest-base-camp", "manaslu-circuit", "annapurna-base-camp"],
  "packing-list-for-nepal-trek": ["annapurna-base-camp", "langtang-valley", "ghorepani-poonhill"],
  "culture-etiquette-nepal": ["langtang-valley", "manaslu-circuit", "ghorepani-poonhill"],
};

const KEYWORD_MAP: { match: RegExp; treks: string[] }[] = [
  { match: /everest|ebc/i, treks: ["everest-base-camp"] },
  { match: /annapurna|abc|poon/i, treks: ["annapurna-base-camp", "ghorepani-poonhill"] },
  { match: /langtang/i, treks: ["langtang-valley"] },
  { match: /manaslu/i, treks: ["manaslu-circuit"] },
];

const RelatedTreks = ({ postSlug, category, tags }: RelatedTreksProps) => {
  // Determine relevant trek slugs
  let trekSlugs = SLUG_MAP[postSlug] ?? [];
  if (trekSlugs.length === 0) {
    const haystack = `${postSlug} ${category ?? ""} ${(tags ?? []).join(" ")}`;
    for (const { match, treks } of KEYWORD_MAP) {
      if (match.test(haystack)) trekSlugs.push(...treks);
    }
    trekSlugs = Array.from(new Set(trekSlugs));
  }

  const { data: treks = [] } = useQuery({
    queryKey: ["related-treks", postSlug, trekSlugs.join(",")],
    queryFn: async () => {
      // Fallback: featured treks if no specific match
      const query = supabase
        .from("treks")
        .select("id, name, slug, hero_image_url, duration_days, difficulty, short_description")
        .eq("is_published", true);
      if (trekSlugs.length > 0) query.in("slug", trekSlugs);
      else query.eq("is_featured", true).limit(3);
      const { data, error } = await query;
      if (error) throw error;
      return (data ?? []).slice(0, 3);
    },
  });

  if (treks.length === 0) return null;

  return (
    <section className="mt-16 pt-10 border-t border-border">
      <div className="flex items-end justify-between mb-6 flex-wrap gap-2">
        <div>
          <span className="text-accent font-semibold tracking-wider uppercase text-xs">Plan Your Trip</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">Related Treks</h2>
        </div>
        <Link to="/treks" className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:underline">
          View all treks <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {treks.map((trek) => (
          <Link
            key={trek.id}
            to={`/trek/${trek.slug}`}
            className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all"
          >
            {trek.hero_image_url && (
              <div className="h-40 overflow-hidden">
                <img
                  src={trek.hero_image_url}
                  alt={trek.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors line-clamp-1">
                {trek.name}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mt-1">{trek.short_description}</p>
              <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-accent" />{trek.duration_days} Days</span>
                <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3 text-accent" />{trek.difficulty}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedTreks;