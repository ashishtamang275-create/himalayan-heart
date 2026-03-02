import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountains-compressed.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - using img tag for better LCP */}
      <img
        src={heroImage}
        alt=""
        width={1920}
        height={1080}
        fetchPriority="high"
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-snow/10 backdrop-blur-sm text-snow text-sm font-medium mb-6 animate-fade-in">
            Nepal's Trusted Local Trekking Company
          </span>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-snow mb-6 leading-tight">
            Trek Nepal with a Licensed{" "}
            <span className="text-gradient">Local Guide</span>
            {" "}— No Agency Fees
          </h1>
          
          <p className="text-xl md:text-2xl text-snow/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Personalized Himalayan adventures led by experienced local trekking guides. Direct booking, transparent pricing, unforgettable journeys.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Plan My Trek
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/9779818800584?text=Hi!%20I'm%20interested%20in%20trekking%20in%20Nepal." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in delay-400">
            {[
              { value: "8+", label: "Years Experience" },
              { value: "150+", label: "Trekkers Guided" },
              { value: "50+", label: "Trek Routes" },
              { value: "24/7", label: "Mountain Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-snow/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-8 h-12 rounded-full border-2 border-snow/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-snow/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
