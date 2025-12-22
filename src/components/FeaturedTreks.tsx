import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, TrendingUp, MapPin, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";
import trekEverest from "@/assets/trek-everest.jpg";
import trekAnnapurna from "@/assets/trek-annapurna.jpg";
import trekLangtang from "@/assets/trek-langtang.jpg";
import trekPoonHill from "@/assets/trek-poon-hill.jpg";

const treks = [
  {
    id: 1,
    name: "Everest Base Camp Trek",
    image: trekEverest,
    duration: "14 Days",
    difficulty: "Challenging",
    altitude: "5,364m",
    description: "Stand at the foot of the world's highest peak and experience the legendary Sherpa culture.",
  },
  {
    id: 2,
    name: "Annapurna Base Camp Trek",
    image: trekAnnapurna,
    duration: "12 Days",
    difficulty: "Moderate",
    altitude: "4,130m",
    description: "Trek through diverse landscapes from lush forests to the dramatic Annapurna Sanctuary.",
  },
  {
    id: 3,
    name: "Langtang Valley Trek",
    image: trekLangtang,
    duration: "10 Days",
    difficulty: "Moderate",
    altitude: "4,984m",
    description: "Discover the 'Valley of Glaciers' with stunning mountain views and rich Tamang heritage.",
  },
  {
    id: 4,
    name: "Khopra Trek",
    image: trekPoonHill,
    duration: "7 Days",
    difficulty: "Moderate",
    altitude: "3,660m",
    description: "A peaceful off-the-beaten-path trek offering stunning views of Annapurna and Dhaulagiri ranges.",
  },
];

const FeaturedTreks = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedTrek, setSelectedTrek] = useState<string>("");

  const handleContactClick = (trekName: string) => {
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
          {treks.map((trek, index) => (
            <div
              key={trek.id}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={trek.image}
                  alt={trek.name}
                  width={413}
                  height={256}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
                <p className="text-muted-foreground mb-4 line-clamp-2">
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

      <ContactDialog 
        open={contactOpen} 
        onOpenChange={setContactOpen}
        trekName={selectedTrek}
      />
    </section>
  );
};

export default FeaturedTreks;
