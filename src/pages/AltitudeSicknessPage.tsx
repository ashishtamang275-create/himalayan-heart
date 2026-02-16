import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { AlertTriangle, CheckCircle } from "lucide-react";

const AltitudeSicknessPage = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Altitude Sickness Guide – Prevention & Treatment | Go Nepal Adventure</title>
      <meta name="description" content="Complete guide to altitude sickness (AMS) in Nepal trekking: symptoms, prevention, treatment, and how our guides keep you safe at high altitude." />
    </Helmet>
    <Navbar />
    <main>
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Altitude Sickness Guide
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Acute Mountain Sickness (AMS) is one of the biggest risks when trekking at high altitude. Understanding it is the first step to a safe and successful trek.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">What Is Altitude Sickness?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Altitude sickness occurs when you ascend too quickly to elevations above 2,500m (8,200ft). The reduced oxygen and air pressure at high altitudes can cause your body to react in various ways. It can affect anyone regardless of age, fitness level, or previous high-altitude experience.
          </p>

          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Symptoms to Watch For</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              "Persistent headache",
              "Nausea or vomiting",
              "Dizziness or lightheadedness",
              "Fatigue and weakness",
              "Loss of appetite",
              "Difficulty sleeping",
              "Shortness of breath during exertion",
              "Swelling of hands, feet, or face",
            ].map((symptom, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{symptom}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Prevention Tips</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              "Ascend gradually — no more than 300–500m per day above 3,000m",
              "Take acclimatization days every 1,000m of altitude gain",
              "Stay hydrated — drink 3–4 liters of water daily",
              "Avoid alcohol and sleeping pills at high altitude",
              "Eat high-calorie, high-carb meals",
              "Listen to your guide — they know the warning signs",
              "Consider Diamox (acetazolamide) after consulting your doctor",
              "Never ascend with symptoms — rest or descend immediately",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-forest/5 rounded-lg">
                <CheckCircle className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{tip}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl font-bold text-foreground mb-6">How Our Guides Keep You Safe</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every Go Nepal Adventure guide carries a pulse oximeter and is trained in altitude sickness recognition and management. Our itineraries are designed with proper acclimatization days built in. If you show signs of severe AMS, our guides will arrange immediate descent and evacuation if needed.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We also carry a satellite phone and first aid kit on every trek, and we have emergency helicopter evacuation protocols in place for all high-altitude treks.
          </p>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default AltitudeSicknessPage;
