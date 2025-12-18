import { Shield, Heart, Users, DollarSign, Compass, Clock } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Local Guides",
    description: "Licensed guides with deep knowledge of Nepal trails, culture, and safety protocols.",
  },
  {
    icon: Compass,
    title: "Customizable Itineraries",
    description: "Flexible trekking plans tailored to your preferences, fitness level, and time.",
  },
  {
    icon: DollarSign,
    title: "Best Value Pricing",
    description: "Competitive rates without compromising on quality, comfort, or safety.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Comprehensive safety measures, emergency protocols, and experienced rescue teams.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Small groups and dedicated attention ensure you get the best experience.",
  },
  {
    icon: Clock,
    title: "Full Support",
    description: "Permits, logistics, porters, and accommodations handled seamlessly.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Why Trek With Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Adventure,{" "}
              <span className="text-gradient">Our Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over 15 years of experience guiding trekkers through the 
              Himalayas, we've perfected the art of creating unforgettable 
              adventures. Our commitment to safety, authenticity, and 
              personalized service sets us apart.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg bg-background shadow-soft hover:shadow-elevated transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-base">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Stats Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                  <div className="font-display text-5xl font-bold mb-2">98%</div>
                  <p className="text-primary-foreground">
                    Client Satisfaction Rate
                  </p>
                </div>
                <div className="bg-accent rounded-2xl p-8 text-white">
                  <div className="font-display text-5xl font-bold mb-2">50+</div>
                  <p className="text-white">
                    Trekking Routes
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-forest rounded-2xl p-8 text-white">
                  <div className="font-display text-5xl font-bold mb-2">15+</div>
                  <p className="text-white">
                    Years of Experience
                  </p>
                </div>
                <div className="bg-mountain-slate rounded-2xl p-8 text-snow">
                  <div className="font-display text-5xl font-bold mb-2">5K+</div>
                  <p className="text-snow">
                    Happy Trekkers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
