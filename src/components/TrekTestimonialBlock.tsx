import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "🇺🇸 USA",
    rating: 5,
    text: "Best trekking experience of my life! Our guide Indra was incredible — knowledgeable, caring, and made us feel safe the entire trek.",
    trek: "Everest Base Camp Trek",
  },
  {
    name: "Thomas Weber",
    country: "🇩🇪 Germany",
    rating: 5,
    text: "Very well-organized from start to finish. The itinerary was perfectly paced and the local guides knew every corner of the mountains.",
    trek: "Annapurna Base Camp Trek",
  },
  {
    name: "Emily Chen",
    country: "🇦🇺 Australia",
    rating: 5,
    text: "Go Nepal Adventure made everything seamless. Airport pickup, permits, accommodation — all handled perfectly. Highly recommend!",
    trek: "Langtang Valley Trek",
  },
];

const TrekTestimonialBlock = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-2 mb-6">
          <Quote className="w-6 h-6 text-accent" />
          <h3 className="font-display text-2xl font-bold text-foreground">What Trekkers Say</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-lg p-5 shadow-soft border border-border/50">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-sunrise text-sunrise" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.country} · {t.trek}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrekTestimonialBlock;
