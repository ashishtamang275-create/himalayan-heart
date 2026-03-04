import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { Shield, Phone, Mountain, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SafetyRescuePage = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Nepal Trekking Safety & Rescue Protocols 2026</title>
      <meta name="description" content="How we keep trekkers safe: pulse oximeters, satellite phones, helicopter evacuation & strict acclimatization protocols. 100% safety record since 2018." />
    </Helmet>
    <Navbar />
    <main>
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Safety & Rescue
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your safety is our absolute priority. Every trek is planned with comprehensive risk management, and our guides are prepared for any situation.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Shield, title: "100% Safety Record", desc: "15+ years without a major incident" },
              { icon: Phone, title: "24/7 Emergency Line", desc: "Always reachable via WhatsApp or satellite phone" },
              { icon: Mountain, title: "Trained Guides", desc: "Wilderness First Aid & altitude certified" },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Safety Protocols</h2>
          <div className="space-y-4 mb-12">
            {[
              "All guides carry satellite phones and comprehensive first aid kits",
              "Pulse oximeter checks twice daily on high-altitude treks",
              "Proper acclimatization days built into every itinerary",
              "Emergency helicopter evacuation arrangements with insurance coordination",
              "Regular weather monitoring and route adjustments",
              "Maximum altitude gain of 500m per day above 3,000m",
              "Backup escape routes identified for every trek",
              "Porter welfare standards — no porter carries more than 25kg",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border/50">
                <CheckCircle className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Emergency Evacuation</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In case of a medical emergency at high altitude, we coordinate helicopter evacuations with Nepal's rescue services. We strongly recommend all trekkers carry travel insurance that covers helicopter evacuation up to 6,000m. Our team will assist with all insurance claims and documentation.
          </p>

          <h2 className="font-display text-3xl font-bold text-foreground mt-12 mb-6">Travel Insurance</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We require all trekkers to have comprehensive travel insurance that covers: helicopter evacuation, medical treatment, trip cancellation, and high altitude trekking (up to the maximum altitude of your chosen trek). We can recommend trusted insurance providers if needed.
          </p>

          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Have Safety Questions?</h3>
            <p className="text-muted-foreground mb-6">Our team is happy to discuss safety measures for any trek.</p>
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/9779818800584?text=Hi!%20I%20have%20questions%20about%20safety%20on%20my%20upcoming%20trek." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" /> Chat With Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default SafetyRescuePage;
