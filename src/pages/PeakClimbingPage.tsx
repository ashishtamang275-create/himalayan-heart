import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { Mountain, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "9779818800584";

const peaks = [
  { name: "Island Peak (Imja Tse)", altitude: "6,189m", difficulty: "PD", duration: "18 Days", description: "The most popular climbing peak in Nepal, often combined with the Everest Base Camp trek." },
  { name: "Mera Peak", altitude: "6,476m", difficulty: "PD", duration: "18 Days", description: "The highest trekking peak in Nepal, offering stunning views of five 8,000m peaks." },
  { name: "Lobuche East", altitude: "6,119m", difficulty: "PD+", duration: "17 Days", description: "A challenging climb near Everest Base Camp with technical sections and rewarding summit views." },
  { name: "Pisang Peak", altitude: "6,091m", difficulty: "PD", duration: "16 Days", description: "A scenic climbing peak on the Annapurna Circuit with panoramic Himalayan views." },
];

const PeakClimbingPage = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Nepal Peak Climbing 2026 – Guided Expeditions</title>
      <meta name="description" content="Climb Island Peak, Mera Peak & Lobuche East with licensed guides. Full expedition support, permits & safety gear included. Book direct and save." />
    </Helmet>
    <Navbar />
    <main>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Peak Climbing in Nepal</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Take your Himalayan adventure to the next level. Our guided peak climbing expeditions combine trekking with technical climbing, supported by experienced mountaineering guides and full logistical support.
          </p>
          <Button variant="whatsapp" size="lg" asChild>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in peak climbing in Nepal.")}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" /> Inquire About Peak Climbing
            </a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {peaks.map((peak) => (
              <div key={peak.name} className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <Mountain className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground mb-1">{peak.name}</h2>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                      <span>{peak.altitude}</span>
                      <span>•</span>
                      <span>Grade {peak.difficulty}</span>
                      <span>•</span>
                      <span>{peak.duration}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{peak.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default PeakClimbingPage;
