import { Send, Settings, CalendarCheck, Mountain } from "lucide-react";

const steps = [
  {
    icon: Send,
    step: "01",
    title: "Send Inquiry",
    description: "Tell us your dream trek, dates, and group size. We respond within 24 hours.",
  },
  {
    icon: Settings,
    step: "02",
    title: "We Customize Plan",
    description: "Our local experts craft a personalized itinerary, pricing, and logistics plan.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Confirm & Book",
    description: "Review the plan, confirm dates, and secure your spot with a small deposit.",
  },
  {
    icon: Mountain,
    step: "04",
    title: "Arrive & Trek",
    description: "Land in Kathmandu, we handle the rest — airport pickup, permits, and guides.",
  },
];

const HowBookingWorks = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Simple Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            How Booking Works
          </h2>
          <p className="text-muted-foreground text-lg">
            From your first message to standing on a Himalayan peak — we make it effortless.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center group">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <s.icon className="w-8 h-8 text-accent" />
              </div>
              <span className="text-xs font-bold text-accent tracking-widest uppercase">
                Step {s.step}
              </span>
              <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowBookingWorks;
