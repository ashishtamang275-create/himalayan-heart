import { useState } from "react";
import { Clock, TrendingUp, MapPin, ChevronRight, Search, Filter, Mountain, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactDialog from "@/components/ContactDialog";
import trekEverest from "@/assets/trek-everest.webp";
import trekAnnapurna from "@/assets/trek-annapurna.webp";
import trekLangtang from "@/assets/trek-langtang.webp";
import trekManaslu from "@/assets/trek-manaslu.jpg";
import trekUpperMustang from "@/assets/trek-upper-mustang.jpg";
import trekPoonHill from "@/assets/trek-poon-hill.webp";
import trekMardiHimal from "@/assets/trek-mardi-himal.jpg";
import trekKanchenjunga from "@/assets/trek-kanchenjunga.jpg";
import trekGokyo from "@/assets/trek-gokyo.jpg";
import heroImage from "@/assets/hero-mountains.jpg";

const allTreks = [
  {
    id: 1,
    name: "Everest Base Camp Trek",
    image: trekEverest,
    duration: "14 Days",
    difficulty: "Challenging",
    altitude: "5,364m",
    region: "Everest",
    description: "Stand at the foot of the world's highest peak and experience the legendary Sherpa culture.",
  },
  {
    id: 2,
    name: "Annapurna Base Camp Trek",
    image: trekAnnapurna,
    duration: "12 Days",
    difficulty: "Moderate",
    altitude: "4,130m",
    region: "Annapurna",
    description: "Trek through diverse landscapes from lush forests to the dramatic Annapurna Sanctuary.",
  },
  {
    id: 3,
    name: "Langtang Valley Trek",
    image: trekLangtang,
    duration: "10 Days",
    difficulty: "Moderate",
    altitude: "4,984m",
    region: "Langtang",
    description: "Discover the 'Valley of Glaciers' with stunning mountain views and rich Tamang heritage.",
  },
  {
    id: 4,
    name: "Manaslu Circuit Trek",
    image: trekManaslu,
    duration: "16 Days",
    difficulty: "Challenging",
    altitude: "5,106m",
    region: "Manaslu",
    description: "A remote and less-crowded alternative to Annapurna, circling the world's 8th highest peak.",
  },
  {
    id: 5,
    name: "Upper Mustang Trek",
    image: trekUpperMustang,
    duration: "14 Days",
    difficulty: "Moderate",
    altitude: "3,840m",
    region: "Mustang",
    description: "Explore the forbidden kingdom with its ancient Buddhist monasteries and desert-like landscape.",
  },
  {
    id: 6,
    name: "Ghorepani Poon Hill Trek",
    image: trekPoonHill,
    duration: "7 Days",
    difficulty: "Easy",
    altitude: "3,210m",
    region: "Annapurna",
    description: "Perfect short trek with spectacular sunrise views over the Annapurna and Dhaulagiri ranges.",
  },
  {
    id: 7,
    name: "Mardi Himal Trek",
    image: trekMardiHimal,
    duration: "8 Days",
    difficulty: "Moderate",
    altitude: "4,500m",
    region: "Annapurna",
    description: "An off-the-beaten-path adventure with stunning views of Machhapuchhre (Fishtail) mountain.",
  },
  {
    id: 8,
    name: "Kanchenjunga Base Camp Trek",
    image: trekKanchenjunga,
    duration: "21 Days",
    difficulty: "Strenuous",
    altitude: "5,143m",
    region: "Kanchenjunga",
    description: "Journey to the base of the world's third highest peak through pristine wilderness.",
  },
  {
    id: 9,
    name: "Gokyo Lakes Trek",
    image: trekGokyo,
    duration: "12 Days",
    difficulty: "Challenging",
    altitude: "5,357m",
    region: "Everest",
    description: "Witness the stunning turquoise Gokyo Lakes and climb Gokyo Ri for panoramic Himalayan views.",
  },
  {
    id: 10,
    name: "Khopra Trek",
    image: trekPoonHill,
    duration: "7 Days",
    difficulty: "Moderate",
    altitude: "3,660m",
    region: "Annapurna",
    description: "A peaceful off-the-beaten-path trek offering stunning views of Annapurna and Dhaulagiri ranges.",
  },
];

const regions = ["All", "Everest", "Annapurna", "Langtang", "Manaslu", "Mustang", "Kanchenjunga"];
const difficulties = ["All", "Easy", "Moderate", "Challenging", "Strenuous"];

const TreksPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedTrek, setSelectedTrek] = useState<string>("");

  const filteredTreks = allTreks.filter((trek) => {
    const matchesSearch = trek.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === "All" || trek.region === selectedRegion;
    const matchesDifficulty = selectedDifficulty === "All" || trek.difficulty === selectedDifficulty;
    return matchesSearch && matchesRegion && matchesDifficulty;
  });

  const handleContactClick = (trekName: string) => {
    setSelectedTrek(trekName);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
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
              Trekking Packages
            </h1>
            <p className="text-xl text-snow/80">
              From beginner-friendly trails to challenging expeditions, find your perfect Himalayan adventure.
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
              {regions.map((region) => (
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
              ))}
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
            Showing {filteredTreks.length} trek{filteredTreks.length !== 1 ? "s" : ""}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreks.map((trek, index) => (
              <div
                key={trek.id}
                className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={trek.image}
                    alt={trek.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-1 rounded-full font-medium text-sm">
                    Contact for pricing
                  </div>
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {trek.region}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-peak/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {trek.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                    {trek.description}
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-4 h-4 text-accent" />
                      {trek.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      {trek.difficulty}
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      {trek.altitude}
                    </div>
                  </div>

                  <Button 
                    variant="mountain" 
                    className="w-full group/btn"
                    onClick={() => handleContactClick(trek.name)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Us
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredTreks.length === 0 && (
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
        trekName={selectedTrek}
      />
    </div>
  );
};

export default TreksPage;
