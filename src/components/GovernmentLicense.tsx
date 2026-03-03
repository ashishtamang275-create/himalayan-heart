import { Shield, Mountain, Heart, CheckCircle } from "lucide-react";
import licenseImage from "@/assets/licensed-nepal-trekking-guide-indra-tamang.jpeg";

const GovernmentLicense = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Verified & Authorized
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Government Licensed Trekking Guide
          </h2>
          <p className="text-muted-foreground text-lg">
            Trek with confidence knowing your guide is officially registered and
            authorized by the Nepal Government.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden shadow-elevated">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* License Image */}
              <div className="relative flex items-center justify-center p-8 bg-secondary/20">
                <div className="relative rounded-xl overflow-hidden shadow-lg max-w-sm w-full">
                  <img
                    src={licenseImage}
                    alt="Government licensed trekking guide in Nepal – Indra Tamang official ID card issued by Bagmati Province Ministry of Culture and Tourism"
                    width={400}
                    height={250}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="absolute bottom-4 left-8 right-8 text-center text-xs text-muted-foreground italic">
                  Indra Bahadur Tamang – Government Licensed Trekking Guide
                  (Valid through 2027), issued by Bagmati Province, Ministry of
                  Culture and Tourism.
                </p>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Officially Registered & Authorized
                </h3>

                <div className="space-y-5 mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Indra Bahadur Tamang holds an official{" "}
                    <strong>Identity Card for Trekking Guide (No. 8149)</strong>,
                    issued by the Valley Tourism Office under the Bagmati
                    Province Ministry of Culture and Tourism. This license
                    confirms his authorization to lead treks across all major
                    regions of Nepal.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    As a licensed guide, Indra is authorized to lead treks in
                    the <strong>Everest</strong>, <strong>Annapurna</strong>,{" "}
                    <strong>Langtang</strong>, and <strong>Manaslu</strong>{" "}
                    regions — as well as restricted areas requiring special
                    permits. His registration ensures compliance with Nepal's
                    trekking safety regulations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Safety is our top priority. Every trek follows proper
                    acclimatization schedules, emergency protocols, and
                    responsible trekking practices to ensure an ethical and
                    secure Himalayan experience.
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: Shield,
                      label: "Licensed by Nepal Government",
                    },
                    {
                      icon: Mountain,
                      label: "Local Mountain Expert",
                    },
                    {
                      icon: Heart,
                      label: "Emergency Evacuation Support",
                    },
                    {
                      icon: CheckCircle,
                      label: "24/7 Trek Support",
                    },
                  ].map((badge) => (
                    <div
                      key={badge.label}
                      className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg"
                    >
                      <badge.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentLicense;
