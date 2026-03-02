import { Shield, Award, Heart, Headphones, Languages, Users } from "lucide-react";

const badges = [
  { icon: Award, label: "8+ Years Experience" },
  { icon: Users, label: "150+ Trekkers Guided" },
  { icon: Shield, label: "Licensed Guide" },
  { icon: Languages, label: "English Speaking" },
  { icon: Headphones, label: "24/7 Mountain Support" },
  { icon: Heart, label: "Emergency Evacuation" },
];

const TrustBadgesEnhanced = () => (
  <div className="py-6 bg-primary/5 border-y border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-2 text-sm font-medium text-foreground">
            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <b.icon className="w-4 h-4 text-accent" />
            </div>
            <span className="whitespace-nowrap">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBadgesEnhanced;
