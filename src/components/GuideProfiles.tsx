import { Award, Languages, Mountain, CheckCircle, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import guideIndra from "@/assets/guide-indra.jpg";

const WHATSAPP_NUMBER = "+977 9818800584";
const EMAIL = "ashishtamang12340@gmail.com";

const GuideProfiles = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\s+/g, "")}?text=${encodeURIComponent("Hi! I'd like to learn more about trekking with Indra Tamang.")}`;
  const emailLink = `mailto:${EMAIL}?subject=${encodeURIComponent("Inquiry about Trekking with Indra Tamang")}`;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Meet Your Guide
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Expert Local Guide
          </h2>
          <p className="text-muted-foreground text-lg">
            Trek with confidence alongside one of Nepal's most experienced guides, 
            bringing decades of expertise and a passion for the mountains.
          </p>
        </div>

        {/* Guide Profile - Featured Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden shadow-elevated animate-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-80 lg:h-full min-h-[400px]">
                <img
                  src={guideIndra}
                  alt="Indra Tamang - Senior Trek Leader"
                  width={512}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-peak/80 via-peak/20 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-6 left-6 lg:hidden">
                  <h3 className="font-display text-3xl font-bold text-snow">
                    Indra Tamang
                  </h3>
                  <p className="text-snow/80 text-lg">Senior Trek Leader</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-10">
                <div className="hidden lg:block mb-6">
                  <h3 className="font-display text-3xl font-bold text-foreground">
                    Indra Tamang
                  </h3>
                  <p className="text-foreground/70 text-lg font-semibold">Senior Trek Leader</p>
                </div>

                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  With over two decades of experience guiding trekkers through Nepal's most 
                  breathtaking trails, Indra Tamang brings unparalleled expertise, local 
                  knowledge, and a deep passion for sharing the beauty of the Himalayas. 
                  His commitment to safety, cultural immersion, and creating unforgettable 
                  experiences has earned him the trust of thousands of adventurers from 
                  around the world.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-secondary/50 rounded-xl p-4 text-center">
                    <div className="font-display text-3xl font-bold text-foreground">20+</div>
                    <div className="text-muted-foreground text-sm">Years Experience</div>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4 text-center">
                    <div className="font-display text-3xl font-bold text-foreground">1000+</div>
                    <div className="text-muted-foreground text-sm">Treks Completed</div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Languages className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">
                      English, Nepali, Hindi, Tibetan
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mountain className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">
                      Everest, Annapurna, Langtang & all major regions
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">
                      NMA Certified, Wilderness First Responder
                    </span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Licensed Guide", "Safety Expert", "Cultural Knowledge", "High Altitude Specialist"].map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      <CheckCircle className="w-4 h-4" />
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="whatsapp" className="w-full">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                  <a href={emailLink} className="flex-1">
                    <Button variant="mountain" className="w-full">
                      <Mail className="w-5 h-5 mr-2" />
                      Email
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideProfiles;
