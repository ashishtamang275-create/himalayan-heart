import { Shield, MapPin, Compass, MessageCircle, Mountain, Handshake } from "lucide-react";

const badges = [
  { icon: Shield, label: "Licensed Local Guides" },
  { icon: Mountain, label: "Safety-First Trekking" },
  { icon: Compass, label: "Custom Itineraries" },
  { icon: MessageCircle, label: "Fast WhatsApp Response" },
  { icon: MapPin, label: "Local Expertise" },
  { icon: Handshake, label: "Transparent Communication" },
];

const TrustBadgesEnhanced = () => (
  <div className="py-8 bg-secondary border-y border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {badges.map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-2 text-center p-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <b.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground leading-tight">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBadgesEnhanced;
