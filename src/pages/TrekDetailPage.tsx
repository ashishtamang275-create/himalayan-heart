import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { Clock, TrendingUp, MapPin, ChevronRight, MessageCircle, Users, Calendar, Mountain, Star, CheckCircle, XCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { lazy, Suspense, useState } from "react";

const ContactDialog = lazy(() => import("@/components/ContactDialog"));

const WHATSAPP_NUMBER = "9779818800584";

const TrekDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [contactOpen, setContactOpen] = useState(false);

  const { data: trek, isLoading } = useQuery({
    queryKey: ["trek", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("treks")
        .select("*, regions(name, slug)")
        .eq("slug", slug!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  const { data: itinerary = [] } = useQuery({
    queryKey: ["trek-itinerary", trek?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("trek_itinerary")
        .select("*")
        .eq("trek_id", trek!.id)
        .order("day_number");
      if (error) throw error;
      return data;
    },
    enabled: !!trek?.id,
  });

  const { data: faqs = [] } = useQuery({
    queryKey: ["trek-faqs", trek?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("trek_faqs")
        .select("*")
        .or(`trek_id.eq.${trek!.id},is_global.eq.true`)
        .order("display_order");
      if (error) throw error;
      return data;
    },
    enabled: !!trek?.id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-4">
          <div className="animate-pulse space-y-6">
            <div className="h-12 bg-secondary rounded w-2/3" />
            <div className="h-6 bg-secondary rounded w-1/2" />
            <div className="h-64 bg-secondary rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!trek) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Trek Not Found</h1>
          <Button asChild><Link to="/treks">View All Treks</Link></Button>
        </div>
      </div>
    );
  }

  const region = trek.regions as { name: string; slug: string } | null;
  const whatsappMsg = encodeURIComponent(`Hi! I'm interested in the ${trek.name}. Can you share more details?`);

  const metaTitle = trek.meta_title || `${trek.name} – ${trek.duration_days} Days | Go Nepal Adventures — Best Price & Itinerary`;
  const metaDesc = trek.meta_description || `${trek.name} in ${trek.duration_days} days. Best season: ${trek.best_season}. ${trek.starting_price_usd ? `From $${trek.starting_price_usd}.` : ''} Expert guides and full support.`;

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trek.name,
    description: trek.short_description,
    touristType: "Adventure",
    offers: trek.starting_price_usd ? {
      "@type": "Offer",
      price: trek.starting_price_usd,
      priceCurrency: "USD",
    } : undefined,
    provider: {
      "@type": "TravelAgency",
      name: "Go Nepal Adventures",
      url: "https://go-nepal-adventures.lovable.app",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://go-nepal-adventures.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Treks", item: "https://go-nepal-adventures.lovable.app/treks" },
      ...(region ? [{ "@type": "ListItem", position: 3, name: region.name, item: `https://go-nepal-adventures.lovable.app/region/${region.slug}` }] : []),
      { "@type": "ListItem", position: region ? 4 : 3, name: trek.name },
    ],
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-12 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
              <Link to="/" className="hover:text-accent">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/treks" className="hover:text-accent">Treks</Link>
              {region && (
                <>
                  <ChevronRight className="w-4 h-4" />
                  <Link to={`/region/${region.slug}`} className="hover:text-accent">{region.name}</Link>
                </>
              )}
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{trek.name}</span>
            </nav>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">{trek.name}</h1>
                <p className="text-lg text-muted-foreground mb-6">{trek.short_description}</p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-accent" /><span className="font-semibold">{trek.duration_days} Days</span></div>
                  <div className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-accent" /><span className="font-semibold">{trek.difficulty}</span></div>
                  {trek.max_altitude_m && <div className="flex items-center gap-2"><Mountain className="w-5 h-5 text-accent" /><span className="font-semibold">{trek.max_altitude_m.toLocaleString()}m</span></div>}
                  {trek.rating && Number(trek.rating) > 0 && (
                    <div className="flex items-center gap-2"><Star className="w-5 h-5 fill-sunrise text-sunrise" /><span className="font-semibold">{trek.rating}</span><span className="text-muted-foreground text-sm">({trek.review_count} reviews)</span></div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="whatsapp" size="lg" asChild>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" /> Talk to Expert on WhatsApp
                    </a>
                  </Button>
                  <Button variant="hero" size="lg" onClick={() => setContactOpen(true)}>
                    Send Inquiry — Free Custom Itinerary
                  </Button>
                </div>
              </div>

              {/* Sticky Sidebar Booking Card */}
              <div className="lg:sticky lg:top-24 self-start bg-card rounded-xl shadow-elevated p-6 space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">Plan This Trek</h3>
                {trek.starting_price_usd && (
                  <div className="text-center py-3 bg-accent/10 rounded-lg">
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <div className="font-display text-3xl font-bold text-accent">${trek.starting_price_usd}</div>
                    <span className="text-xs text-muted-foreground">per person</span>
                  </div>
                )}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Duration</span><span className="font-semibold">{trek.duration_days} Days</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Difficulty</span><span className="font-semibold">{trek.difficulty}</span></div>
                  {trek.max_altitude_m && <div className="flex justify-between"><span className="text-muted-foreground">Max Altitude</span><span className="font-semibold">{trek.max_altitude_m.toLocaleString()}m</span></div>}
                  {trek.best_season && <div className="flex justify-between"><span className="text-muted-foreground">Best Season</span><span className="font-semibold">{trek.best_season}</span></div>}
                  {trek.group_size_max && <div className="flex justify-between"><span className="text-muted-foreground">Group Size</span><span className="font-semibold">{trek.group_size_min}–{trek.group_size_max}</span></div>}
                  {trek.meeting_point && <div className="flex justify-between"><span className="text-muted-foreground">Meeting Point</span><span className="font-semibold">{trek.meeting_point}</span></div>}
                  {trek.distance_km && <div className="flex justify-between"><span className="text-muted-foreground">Distance</span><span className="font-semibold">{trek.distance_km} km</span></div>}
                  {trek.transportation && <div className="flex justify-between"><span className="text-muted-foreground">Transport</span><span className="font-semibold">{trek.transportation}</span></div>}
                </div>
                <div className="space-y-3 pt-2">
                  <Button variant="hero" size="lg" className="w-full" onClick={() => setContactOpen(true)}>
                    Send Inquiry
                  </Button>
                  <Button variant="whatsapp" size="lg" className="w-full" asChild>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" /> WhatsApp Guide
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">About This Trek</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>{trek.description}</p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        {trek.highlights && trek.highlights.length > 0 && (
          <section className="py-12 bg-secondary/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Trek Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {trek.highlights.map((h: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg">
                    <CheckCircle className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Itinerary */}
        {itinerary.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Day-by-Day Itinerary</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {itinerary.map((day) => (
                  <AccordionItem key={day.id} value={day.id} className="bg-card rounded-lg border px-6">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        <span className="bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          D{day.day_number}
                        </span>
                        <div>
                          <div className="font-semibold text-foreground">{day.title}</div>
                          {day.altitude_m && <span className="text-xs text-muted-foreground">{day.altitude_m.toLocaleString()}m</span>}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2 pb-4">
                      <p>{day.description}</p>
                      <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                        {day.accommodation && <span>🏠 {day.accommodation}</span>}
                        {day.meals && <span>🍽️ {day.meals}</span>}
                        {day.distance_km && <span>📏 {day.distance_km} km</span>}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {/* Includes / Excludes */}
        {((trek.includes && trek.includes.length > 0) || (trek.excludes && trek.excludes.length > 0)) && (
          <section className="py-12 bg-secondary/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Price Breakdown</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {trek.includes && trek.includes.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-forest mb-4">What's Included</h3>
                    <ul className="space-y-2">
                      {trek.includes.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-forest mt-1 flex-shrink-0" /><span className="text-foreground text-sm">{item}</span></li>
                      ))}
                    </ul>
                  </div>
                )}
                {trek.excludes && trek.excludes.length > 0 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-destructive mb-4">What's Excluded</h3>
                    <ul className="space-y-2">
                      {trek.excludes.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2"><XCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" /><span className="text-foreground text-sm">{item}</span></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Accommodation & Meals */}
        {(trek.accommodation_description || trek.meals_description) && (
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-2 gap-8">
              {trek.accommodation_description && (
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">Accommodation</h3>
                  <p className="text-muted-foreground">{trek.accommodation_description}</p>
                </div>
              )}
              {trek.meals_description && (
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">Meals</h3>
                  <p className="text-muted-foreground">{trek.meals_description}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Packing List */}
        {trek.packing_list && trek.packing_list.length > 0 && (
          <section className="py-12 bg-secondary/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Packing List</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {trek.packing_list.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-card rounded-lg text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Health & Safety */}
        {trek.health_safety_info && (
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Health & Safety</h2>
              <p className="text-muted-foreground leading-relaxed">{trek.health_safety_info}</p>
            </div>
          </section>
        )}

        {/* FAQs */}
        {faqs.length > 0 && (
          <section className="py-12 bg-secondary/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="bg-card rounded-lg border px-6">
                    <AccordionTrigger className="hover:no-underline font-semibold text-foreground text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Trek {trek.name.replace(' Trek', '')}?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Get a free custom itinerary tailored to your schedule and preferences. Our local experts are ready to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us Now
                </a>
              </Button>
              <Button variant="glacier" size="xl" onClick={() => setContactOpen(true)}>
                Send Inquiry
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      {contactOpen && (
        <Suspense fallback={null}>
          <ContactDialog open={contactOpen} onOpenChange={setContactOpen} trekName={trek.name} />
        </Suspense>
      )}
    </div>
  );
};

export default TrekDetailPage;
