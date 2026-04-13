import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountains-optimized4.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Panoramic view of the Nepal Himalayas with snow-capped peaks and trekking trails"
        width={1920}
        height={1080}
        fetchPriority="high"
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--snow-white))] mb-6 leading-tight">
            Nepal Trekking with{" "}
            <span className="text-gradient">Licensed Local Experts</span>
          </h1>

          <p className="text-lg md:text-xl text-[hsl(var(--snow-white))]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Safe, memorable, and fully guided trekking experiences in Nepal
            with a trusted local team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get a Free Itinerary
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="glacier" size="xl" asChild>
              <Link to="/treks">
                View Trek Packages
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <p className="text-[hsl(var(--snow-white))]/60 text-sm">
            Local expertise, flexible planning, and safety-first support.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-8 h-12 rounded-full border-2 border-[hsl(var(--snow-white))]/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-[hsl(var(--snow-white))]/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
