import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Clock, TrendingUp, MapPin, ChevronRight, Search, Filter, Mountain, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactDialog from "@/components/ContactDialog";
import heroImage from "@/assets/hero-mountains.jpg";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import TrekImage from "@/components/TrekImage";

const difficulties = ["All", "Easy", "Moderate", "Challenging", "Strenuous"];

const TreksPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedTrekName, setSelectedTrekName] = useState<string>("");

  const { data: treks, isLoading: treksLoading } = useQuery({
    queryKey: ["treks"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("treks")
        .select(`
          *,
          regions (
            name
          )
        `)
        .eq("is_published", true)
        .order("display_order");
      
      if (error) throw error;
      return data;
    },
  });

  const { data: regions, isLoading: regionsLoading } = useQuery({
    queryKey: ["regions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("regions")
        .select("name")
        .order("display_order");
      
      if (error) throw error;
      return data;
    },
  });

  const regionNames = ["All", ...(regions?.map(r => r.name) || [])];

  const filteredTreks = treks?.filter((trek) => {
    const matchesSearch = trek.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === "All" || trek.regions?.name === selectedRegion;
    const matchesDifficulty = selectedDifficulty === "All" || trek.difficulty === selectedDifficulty;
    return matchesSearch && matchesRegion && matchesDifficulty;
  }) || [];

  const handleContactClick = (trekName: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent Link navigation if button is inside Link
    setSelectedTrekName(trekName);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Nepal Trekking Packages 2026 | Go Nepal Adventure</title>
        <meta name="description" content="Browse Nepal trekking packages from $799. Everest, Annapurna, Langtang & more with a licensed local guide. No agency fees. Book directly and save 30–50%." />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-snow/10 backdrop-blur-sm text-snow text-sm font-medium mb-4">
              Explore Nepal's Himalayas
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-snow mb-4">
              Nepal Trekking Packages 2026
            </h1>
            <p className="text-xl text-snow/80">
              From beginner-friendly trails to challenging expeditions — book directly with a licensed local guide and save.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40 backdrop-blur-lg bg-card/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search treks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11"
              />
            </div>

            {/* Region Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {regionsLoading ? (
                <div className="flex gap-2">
                  <Skeleton className="h-9 w-20 rounded-full" />
                  <Skeleton className="h-9 w-20 rounded-full" />
                  <Skeleton className="h-9 w-20 rounded-full" />
                </div>
              ) : (
                regionNames.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedRegion === region
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {region}
                  </button>
                ))
              )}
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Mountain className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedDifficulty === difficulty
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trek Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-8">
            {treksLoading ? (
              <Skeleton className="h-6 w-32" />
            ) : (
              `Showing ${filteredTreks.length} trek${filteredTreks.length !== 1 ? "s" : ""}`
            )}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treksLoading ? (
              // Loading Skeletons
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-card rounded-xl overflow-hidden shadow-soft h-[500px]">
                  <Skeleton className="w-full h-56" />
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
              filteredTreks.map((trek, index) => (
                <Link 
                  to={`/trek/${trek.slug}`} 
                  key={trek.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-in-up block"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <TrekImage
                      src={trek.hero_image_url}
                      trekSlug={trek.slug}
                      variant="card"
                      alt={`${trek.name} – Nepal Himalayan trek`}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      wrapperClassName="w-full h-full"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-1 rounded-full font-medium text-sm">
                      Contact for pricing
                    </div>
                    {trek.regions && (
                      <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {trek.regions.name}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-peak/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {trek.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
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

          {!treksLoading && filteredTreks.length === 0 && (
            <div className="text-center py-16">
              <Mountain className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                No treks found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search query.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
      <ContactDialog 
        open={contactOpen} 
        onOpenChange={setContactOpen}
        trekName={selectedTrekName}
      />
    </div>
  );
};

export default TreksPage;
