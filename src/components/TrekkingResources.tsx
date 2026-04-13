import { Link } from "react-router-dom";
import { BookOpen, ChevronRight } from "lucide-react";

const resources = [
  {
    title: "Best Time to Trek in Nepal",
    description: "Seasonal guide covering weather, crowds, and trail conditions month by month.",
    path: "/best-time-to-trek-nepal",
  },
  {
    title: "Altitude Sickness Guide",
    description: "Symptoms, prevention, and what to do if you feel unwell at high altitude.",
    path: "/altitude-sickness-guide",
  },
  {
    title: "Trek Difficulty Comparison",
    description: "Compare Nepal's popular treks by fitness requirement, terrain, and altitude.",
    path: "/nepal-trek-difficulty-comparison",
  },
  {
    title: "Do You Need a Guide in Nepal?",
    description: "Regulations, safety considerations, and the benefits of hiring a local guide.",
    path: "/do-you-need-guide-nepal",
  },
  {
    title: "Safety & Rescue Protocols",
    description: "How we handle emergencies, evacuation procedures, and insurance advice.",
    path: "/safety-and-rescue",
  },
];

const TrekkingResources = () => {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Trekking Resources
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Plan Your Trek with Confidence
          </h2>
          <p className="text-muted-foreground text-lg">
            Helpful guides and expert advice to prepare you for trekking in Nepal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {resources.map((resource) => (
            <Link
              key={resource.path}
              to={resource.path}
              className="group flex gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {resource.description}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-accent font-semibold hover:underline"
          >
            View All Articles <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrekkingResources;
