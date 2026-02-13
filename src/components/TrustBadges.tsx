import { Shield, Award, Leaf, Users } from "lucide-react";

const badges = [
  { icon: Shield, label: "Licensed Guides" },
  { icon: Award, label: "Fully Insured" },
  { icon: Leaf, label: "Eco-Friendly" },
  { icon: Users, label: "Local Community" },
];

const TrustBadges = () => (
  <div className="flex flex-wrap justify-center gap-6 md:gap-10">
    {badges.map((b) => (
      <div key={b.label} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
          <b.icon className="w-5 h-5 text-forest" />
        </div>
        <span>{b.label}</span>
      </div>
    ))}
  </div>
);

export default TrustBadges;
