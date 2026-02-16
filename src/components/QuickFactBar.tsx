import { CheckCircle } from "lucide-react";

const facts = [
  "Licensed Local Guides",
  "Free Trip Consultation",
  "Customizable Itinerary",
  "Emergency Support",
];

const QuickFactBar = () => (
  <section className="py-6 bg-primary">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
        {facts.map((fact) => (
          <div key={fact} className="flex items-center gap-2 text-primary-foreground font-medium text-sm md:text-base">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
            <span>{fact}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickFactBar;
