import { Link } from "react-router-dom";
import { Award, Languages, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import guide1 from "@/assets/guide-1.jpg";
import guide2 from "@/assets/guide-2.jpg";
import guide3 from "@/assets/guide-3.jpg";

const guides = [
  {
    id: 1,
    name: "Pemba Sherpa",
    image: guide1,
    title: "Senior Trek Leader",
    experience: "20+ years",
    languages: ["English", "Nepali", "Tibetan"],
    specialties: ["Everest Region", "High Altitude"],
    certifications: ["IFMGA Certified", "Wilderness First Responder"],
    bio: "Born in Namche Bazaar, Pemba has summited Everest 8 times and has been leading treks since 2004.",
  },
  {
    id: 2,
    name: "Laxmi Tamang",
    image: guide2,
    title: "Trek Leader",
    experience: "12+ years",
    languages: ["English", "Nepali", "Hindi"],
    specialties: ["Annapurna Circuit", "Cultural Tours"],
    certifications: ["NMA Certified", "First Aid Certified"],
    bio: "Passionate about sharing Nepal's rich culture and biodiversity with trekkers from around the world.",
  },
  {
    id: 3,
    name: "Karma Gurung",
    image: guide3,
    title: "Adventure Guide",
    experience: "8+ years",
    languages: ["English", "Nepali", "German"],
    specialties: ["Off-the-beaten-path", "Photography Tours"],
    certifications: ["NMA Certified", "Eco-Tourism Specialist"],
    bio: "Specializes in remote treks and hidden gems, bringing fresh perspectives to classic routes.",
  },
];

const GuideProfiles = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Meet Your Guides
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Expert Local Guides
          </h2>
          <p className="text-muted-foreground text-lg">
            Our certified guides bring decades of experience, local knowledge, 
            and a passion for the mountains that makes every trek unforgettable.
          </p>
        </div>

        {/* Guide Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div
              key={guide.id}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-peak/80 via-peak/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl font-bold text-snow">
                    {guide.name}
                  </h3>
                  <p className="text-snow/80">{guide.title}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 text-sm">
                  {guide.bio}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Mountain className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">
                      {guide.experience} experience
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Languages className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">
                      {guide.languages.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Award className="w-4 h-4 text-accent mt-0.5" />
                    <span className="text-muted-foreground">
                      {guide.certifications.join(", ")}
                    </span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {guide.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/guides">Meet All Guides</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GuideProfiles;
