import { Shield, Users, MessageCircle, Mountain, Plane, DollarSign } from "lucide-react";

const cards = [
  {
    icon: Shield,
    title: "Government Registered Company",
    description: "Fully licensed and registered trekking agency recognized by Nepal Tourism Board.",
  },
  {
    icon: Users,
    title: "Experienced Local Guides",
    description: "NMA-certified Nepali guides with deep knowledge of every trail and culture.",
  },
  {
    icon: MessageCircle,
    title: "24/7 WhatsApp Support",
    description: "Reach us anytime before, during, or after your trek for instant assistance.",
  },
  {
    icon: Mountain,
    title: "Safety & Altitude Knowledge",
    description: "Expert acclimatization planning and emergency protocols for every trek.",
  },
  {
    icon: Plane,
    title: "Airport Pickup Included",
    description: "Complimentary Kathmandu airport transfer so your journey starts stress-free.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden costs, no surprise fees. What you see is what you pay.",
  },
];

const WhyGoNepal = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Why Trek With Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Why Choose Go Nepal Adventure
          </h2>
          <p className="text-muted-foreground text-lg">
            We make your Himalayan dream safe, affordable, and unforgettable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGoNepal;
