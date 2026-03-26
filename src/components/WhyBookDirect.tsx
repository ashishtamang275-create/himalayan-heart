import { CheckCircle, X, MessageCircle, Shield, HeartHandshake, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisons = [
  { feature: "Price transparency", agency: false, direct: true },
  { feature: "No middleman markup", agency: false, direct: true },
  { feature: "Direct guide communication", agency: false, direct: true },
  { feature: "Customizable itineraries", agency: false, direct: true },
  { feature: "Know your guide before trek", agency: false, direct: true },
  { feature: "24/7 direct mountain support", agency: false, direct: true },
  { feature: "Revenue goes to local community", agency: false, direct: true },
  { feature: "Flexible group sizes (2–6)", agency: false, direct: true },
];

const WhyBookDirect = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">
          Save Money, Get More
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
          Why Book Direct with a Licensed Local Guide?
        </h2>
        <p className="text-muted-foreground text-lg">
          International agencies charge 30–50% markups. When you book directly, every dollar supports
          local guides and communities — and you get a better, more personal experience.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">International Agency</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-accent">Go Nepal Adventure</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                  <td className="px-6 py-3 text-sm text-foreground">{row.feature}</td>
                  <td className="px-6 py-3 text-center">
                    <X className="w-5 h-5 text-destructive mx-auto" />
                  </td>
                  <td className="px-6 py-3 text-center">
                    <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Safety & Acclimatization */}
      <div className="max-w-4xl mx-auto">
        <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
          Your Safety Is Our #1 Priority
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Mountain,
              title: "Proper Acclimatization",
              desc: "Our itineraries follow the climb-high-sleep-low principle with built-in rest days. We monitor oxygen levels daily with pulse oximeters.",
            },
            {
              icon: Shield,
              title: "Emergency Evacuation",
              desc: "Satellite phone on every trek. Helicopter evacuation coordination within hours. We carry comprehensive first aid kits.",
            },
            {
              icon: HeartHandshake,
              title: "Altitude Monitoring",
              desc: "Your guide checks vitals twice daily above 3,500m. We descend immediately at the first sign of severe AMS — no exceptions.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-card p-6 rounded-xl shadow-soft text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4 text-sm">⚡ Limited seasonal availability — Small group treks fill up fast</p>
          <Button variant="whatsapp" size="lg" asChild>
            <a href="https://wa.me/9779818800584?text=Hi!%20I'm%20interested%20in%20booking%20directly%20with%20a%20local%20guide." target="_blank" rel="noopener noreferrer" aria-label="Book direct with guide Indra — chat on WhatsApp">
              <MessageCircle className="w-5 h-5" />
              Chat with Indra on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default WhyBookDirect;
