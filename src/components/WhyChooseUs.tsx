import { MapPin, Compass, Handshake, Shield, LifeBuoy, Users } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Local Knowledge",
    description: "Our guides know every trail, teahouse, and hidden viewpoint — because they grew up here.",
  },
  {
    icon: Compass,
    title: "Flexible Itineraries",
    description: "Every trek is customized to your pace, fitness level, and interests. No rigid group schedules.",
  },
  {
    icon: Handshake,
    title: "Transparent Communication",
    description: "Clear pricing, honest advice, and responsive support from first inquiry to last day on trail.",
  },
  {
    icon: Shield,
    title: "Trekking Safety Support",
    description: "Pulse oximeters, first-aid training, acclimatization plans, and satellite communication on every trek.",
  },
  {
    icon: LifeBuoy,
    title: "Rescue Awareness",
    description: "We carry emergency protocols and coordinate with local rescue teams for high-altitude treks.",
  },
  {
    icon: Users,
    title: "Beginners & Experts Welcome",
    description: "Whether it's your first trek or your tenth, we match routes and pacing to your experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Why Trek With Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Your Adventure, Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            A licensed local team that puts your safety, comfort, and experience first.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
