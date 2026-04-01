import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AltitudeSicknessPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What altitude does altitude sickness start?", acceptedAnswer: { "@type": "Answer", text: "Altitude sickness can begin at elevations above 2,500m (8,200ft). Symptoms typically appear 6–12 hours after arriving at a new altitude." }},
      { "@type": "Question", name: "Can I prevent altitude sickness on Nepal treks?", acceptedAnswer: { "@type": "Answer", text: "Yes. Ascend gradually (300–500m/day above 3,000m), stay hydrated, take rest days, avoid alcohol, and consider Diamox after consulting your doctor. Our guides monitor your oxygen levels daily." }},
      { "@type": "Question", name: "What happens if I get altitude sickness on a trek?", acceptedAnswer: { "@type": "Answer", text: "Mild symptoms require rest and monitoring. If symptoms worsen, our guides arrange immediate descent. For severe cases, we coordinate emergency helicopter evacuation — every guide carries a satellite phone." }},
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ashish-tamang.com.np" },
      { "@type": "ListItem", position: 2, name: "Altitude Sickness Guide", item: "https://ashish-tamang.com.np/altitude-sickness-guide" },
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Altitude Sickness in Nepal — Prevention & Safety | Go Nepal Adventure</title>
        <meta name="description" content="Complete guide to altitude sickness (AMS) in Nepal: symptoms, prevention tips, treatment, and how our guides keep you safe at high altitude." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Altitude Sickness Guide</span>
            </nav>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Altitude Sickness in Nepal: Prevention & Safety Guide
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
              Altitude sickness occurs when you ascend too quickly to elevations above 2,500m (8,200ft). The reduced oxygen and air pressure at high altitudes can cause your body to react in various ways. It can affect anyone regardless of age, fitness level, or previous high-altitude experience. This is especially important for treks like <Link to="/trek/everest-base-camp" className="text-accent hover:underline">Everest Base Camp</Link> (5,364m) and <Link to="/trek/manaslu-circuit" className="text-accent hover:underline">Manaslu Circuit</Link> (5,106m).
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
            <p className="text-muted-foreground leading-relaxed mb-8">
              We also carry a satellite phone and first aid kit on every trek, and we have emergency helicopter evacuation protocols in place for all high-altitude treks. Learn more about <Link to="/do-you-need-guide-nepal" className="text-accent hover:underline">why having a licensed guide matters</Link>.
            </p>

            {/* FAQ */}
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-10">
              <div><h3 className="font-semibold text-foreground mb-2">What altitude does altitude sickness start?</h3><p className="text-muted-foreground">Altitude sickness can begin above 2,500m (8,200ft), with symptoms appearing 6–12 hours after arriving at a new altitude.</p></div>
              <div><h3 className="font-semibold text-foreground mb-2">Can I prevent altitude sickness?</h3><p className="text-muted-foreground">Yes. Ascend gradually, stay hydrated, take rest days, and listen to your guide. Our guides monitor oxygen levels daily.</p></div>
              <div><h3 className="font-semibold text-foreground mb-2">What happens if I get altitude sickness?</h3><p className="text-muted-foreground">Mild symptoms require rest. If they worsen, we descend immediately. For severe cases, we coordinate helicopter evacuation.</p></div>
            </div>

            {/* Related */}
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Related Resources</h2>
            <ul className="space-y-2 mb-10">
              <li><Link to="/nepal-trek-difficulty-comparison" className="text-accent hover:underline">→ Nepal Trek Difficulty Comparison</Link></li>
              <li><Link to="/best-time-to-trek-nepal" className="text-accent hover:underline">→ Best Time to Trek in Nepal</Link></li>
              <li><Link to="/trek/everest-base-camp" className="text-accent hover:underline">→ Everest Base Camp Trek Details</Link></li>
              <li><Link to="/trek/annapurna-base-camp" className="text-accent hover:underline">→ Annapurna Base Camp Trek Details</Link></li>
            </ul>

            {/* CTA */}
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Trek Safely with an Expert Guide</h2>
              <p className="text-muted-foreground mb-6">Our guides are trained in altitude management and carry emergency equipment on every trek.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/9779818800584?text=Hi!%20I%20have%20questions%20about%20altitude%20sickness%20and%20trekking%20safety." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button variant="mountain" size="lg" asChild>
                  <Link to="/treks">
                    Browse Treks
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AltitudeSicknessPage;
