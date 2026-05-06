import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Clock, TrendingUp, MapPin, ChevronRight, MessageCircle, Star, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const REGION_SEO_FALLBACK: Record<
  string,
  { name: string; description: string; highlights: string[]; permit: string }
> = {
  everest: {
    name: "Everest Region Trekking",
    description:
      "Trek in the Everest region of Nepal — home to the world's highest peak. Explore Khumbu valley, Namche Bazaar, and Tengboche monastery with a licensed local guide.",
    highlights: ["Everest Base Camp", "Kala Patthar", "Namche Bazaar", "Tengboche Monastery"],
    permit: "Sagarmatha National Park Permit + TIMS",
  },
  langtang: {
    name: "Langtang Region Trekking",
    description:
      "Trek through Langtang National Park — Nepal's closest trekking region to Kathmandu. Tamang villages, yak pastures and stunning Himalayan views await.",
    highlights: ["Kyanjin Gompa", "Tserko Ri", "Langtang Village", "Tamang Heritage"],
    permit: "Langtang National Park Permit + TIMS",
  },
  manaslu: {
    name: "Manaslu Region Trekking",
    description:
      "Trek the remote Manaslu Circuit around the world's 8th highest peak. A restricted area permit trek with dramatic scenery and authentic mountain culture.",
    highlights: ["Larkya La Pass 5160m", "Samagaun Village", "Manaslu Base Camp", "Tsum Valley"],
    permit: "Manaslu Restricted Area Permit + MCAP + TIMS",
  },
  kanchenjunga: {
    name: "Kanchenjunga Region Trekking",
    description:
      "Trek to the base camps of Kanchenjunga — the world's 3rd highest mountain. A remote, off-the-beaten-path adventure in far eastern Nepal.",
    highlights: ["North Base Camp 5143m", "South Base Camp", "Ghunsa Village", "Taplejung"],
    permit: "Kanchenjunga Restricted Area Permit + TIMS",
  },
};

const REGION_LONG_CONTENT: Record<
  string,
  { about: string; bestTime: string; permits: string }
> = {
  everest: {
    about:
      "The Everest region, also known as the Khumbu, is Nepal's most iconic trekking destination. Home to eight of the world's fourteen 8,000m peaks, this dramatic landscape draws adventurers from every corner of the globe. The classic Everest Base Camp trek takes you through Sherpa villages, past ancient monasteries, and across glacial moraines to the foot of the world's highest mountain at 5,364m.",
    bestTime:
      "The best seasons are spring (March to May) and autumn (September to November). Spring offers blooming rhododendrons and stable weather, while autumn delivers crystal-clear mountain views after the monsoon. Winter treks are possible but cold, and the monsoon season (June-August) brings heavy rainfall and poor visibility.",
    permits:
      "All trekkers need a Sagarmatha National Park Entry Permit (NPR 3,000) and a TIMS card (NPR 2,000 for individual trekkers). These are obtained in Kathmandu or Lukla. Your guide will handle all permit arrangements included in your trek price.",
  },
  langtang: {
    about:
      "The Langtang region is Nepal's closest trekking area to Kathmandu, often called 'the valley of glaciers.' Tucked against the Tibetan border, it offers dramatic Himalayan scenery, traditional Tamang villages, and rich Buddhist culture without the crowds of Everest or Annapurna. Highlights include Kyanjin Gompa monastery, the panoramic viewpoint of Tserko Ri (5,000m), and the rebuilt villages along the Langtang Valley.",
    bestTime:
      "Spring (March to May) and autumn (September to November) are the prime seasons. Spring brings blooming rhododendron forests and warmer days, while autumn offers the clearest mountain views and crisp, dry weather. Winter (December-February) is quiet and cold with possible snow on higher passes, and the monsoon (June-August) makes trails muddy and leech-prone.",
    permits:
      "Trekkers need a Langtang National Park Entry Permit (NPR 3,000) and a TIMS card (NPR 2,000 for individual trekkers). Both are issued in Kathmandu. Since 2023, all foreign trekkers must hire a licensed guide — your guide will arrange all permits as part of your package.",
  },
  manaslu: {
    about:
      "The Manaslu region offers one of Nepal's most rewarding off-the-beaten-path treks, circling the world's 8th highest peak (8,163m). Designated a restricted area, the Manaslu Circuit crosses the dramatic 5,160m Larkya La pass and takes you through remote Nubri and Tsum villages where Tibetan-influenced culture is still untouched. Far quieter than Annapurna or Everest, it rewards trekkers with raw, authentic Himalayan adventure.",
    bestTime:
      "Autumn (September to November) is the most popular season, offering stable weather and the clearest views of Manaslu and surrounding peaks. Spring (March to May) is excellent too with warmer temperatures and rhododendron blooms. Winter is risky as Larkya La pass often closes due to snow, and the monsoon (June-August) brings landslides on the Budhi Gandaki gorge sections.",
    permits:
      "Manaslu requires three permits: a Restricted Area Permit (USD 100/week in autumn, USD 75/week other seasons), the Manaslu Conservation Area Permit (NPR 3,000), and the Annapurna Conservation Area Permit (NPR 3,000) for the exit through Dharapani. A licensed guide and a minimum group of two trekkers are mandatory by law.",
  },
  kanchenjunga: {
    about:
      "The Kanchenjunga region in far eastern Nepal is one of the most remote and pristine trekking areas in the Himalayas. Home to the world's third highest mountain (8,586m), the trek visits both the North Base Camp at Pangpema (5,143m) and the South Base Camp at Oktang. Few trekkers make it here, so you'll experience untouched Limbu and Rai villages, dense rhododendron forests, and sweeping Himalayan panoramas in true solitude.",
    bestTime:
      "Autumn (September to late November) and spring (April to May) are the only practical seasons. Autumn offers dry trails and exceptional visibility, while spring brings spectacular rhododendron blooms across the lower trails. Winter is too harsh at base camp altitudes, and the monsoon makes the long approach trail through the lowlands nearly impassable.",
    permits:
      "Kanchenjunga is a restricted area requiring a Restricted Area Permit (USD 20 per week for the first 4 weeks) and a Kanchenjunga Conservation Area Permit (NPR 3,000). A licensed guide and minimum two trekkers are mandatory. All permit arrangements are handled by your trekking agency before departure from Kathmandu.",
  },
};

const RegionPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const fallback = slug ? REGION_SEO_FALLBACK[slug] : undefined;
  const longContent = slug ? REGION_LONG_CONTENT[slug] : undefined;

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

  if (regionLoading && !fallback) {
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

  if (!region && !fallback) {
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

  const displayName = region?.name ?? fallback!.name.replace(/\s+Trekking$/, "");
  const displayDescription = region?.description ?? fallback!.description;
  const seoTitle =
    region?.meta_title || `${fallback?.name ?? `${displayName} Treks`} | Go Nepal Adventures`;
  const seoDescription =
    region?.meta_description || region?.short_description || fallback!.description;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
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
              <span className="text-foreground">{displayName}</span>
            </nav>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {displayName} Treks
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {displayDescription}
            </p>

            {fallback && (
              <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl">
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    Trek Highlights
                  </h2>
                  <ul className="space-y-2">
                    {fallback.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-muted-foreground">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-accent" />
                    Permits Required
                  </h2>
                  <p className="text-muted-foreground">{fallback.permit}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Long-form static SEO content */}
        {longContent && (
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-10">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    About Trekking in the {displayName}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{longContent.about}</p>
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Best Time to Trek in the {displayName}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{longContent.bestTime}</p>
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Permits Required for {displayName} Treks
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{longContent.permits}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Trek Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground mb-10">
              Available Treks in {displayName}
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
