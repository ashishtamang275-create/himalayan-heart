import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const AnnapurnaVsEverestPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Annapurna Base Camp easier than Everest Base Camp?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, Annapurna Base Camp is generally considered easier. It reaches 4,130m vs 5,364m for EBC, takes fewer days (10–12 vs 12–14), and has less altitude sickness risk. Both are non-technical teahouse treks." }
      },
      {
        "@type": "Question",
        name: "Which trek has better views — Annapurna or Everest?",
        acceptedAnswer: { "@type": "Answer", text: "Both offer spectacular views but of different character. Annapurna gives you a 360° amphitheater surrounded by peaks. Everest gives you close views of the world's highest mountain. Annapurna has more diverse scenery (subtropical to alpine), while Everest has more dramatic high-altitude landscapes." }
      },
      {
        "@type": "Question",
        name: "Which is more crowded — ABC or EBC?",
        acceptedAnswer: { "@type": "Answer", text: "Everest Base Camp tends to be more crowded during peak season due to its iconic status. Annapurna Base Camp sees fewer trekkers and offers a more peaceful experience, though both can be busy in October–November." }
      },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Annapurna vs Everest Base Camp — Which Trek Should You Choose? | Go Nepal Adventure</title>
        <meta name="description" content="Detailed comparison of Annapurna Base Camp and Everest Base Camp treks. Difficulty, cost, scenery, duration, and crowds compared to help you decide." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Annapurna vs Everest</span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Annapurna vs Everest Base Camp: Which Should You Choose?
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Two of Nepal's most iconic treks, but very different experiences. This guide compares Annapurna Base Camp (ABC) and Everest Base Camp (EBC) across every important factor to help you make the right choice.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Quick Comparison</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Factor</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Annapurna BC</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Everest BC</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Duration</td><td className="border border-border px-4 py-2">10–12 days</td><td className="border border-border px-4 py-2">12–14 days</td></tr>
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Max Altitude</td><td className="border border-border px-4 py-2">4,130m</td><td className="border border-border px-4 py-2">5,364m</td></tr>
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Difficulty</td><td className="border border-border px-4 py-2">Moderate</td><td className="border border-border px-4 py-2">Challenging</td></tr>
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Cost (local package)</td><td className="border border-border px-4 py-2">$800–$1,500</td><td className="border border-border px-4 py-2">$1,200–$2,500</td></tr>
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Getting There</td><td className="border border-border px-4 py-2">Drive from Pokhara (3–4 hrs)</td><td className="border border-border px-4 py-2">Flight to Lukla (35 min)</td></tr>
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Crowds</td><td className="border border-border px-4 py-2">Moderate</td><td className="border border-border px-4 py-2">High in peak season</td></tr>
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Scenery Type</td><td className="border border-border px-4 py-2">Diverse (subtropical to alpine)</td><td className="border border-border px-4 py-2">High-altitude, dramatic</td></tr>
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Best Season</td><td className="border border-border px-4 py-2">Mar–May, Oct–Nov</td><td className="border border-border px-4 py-2">Mar–May, Oct–Nov</td></tr>
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Altitude Sickness Risk</td><td className="border border-border px-4 py-2">Low to Moderate</td><td className="border border-border px-4 py-2">Moderate to High</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Annapurna Base Camp: The Highlights</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The Annapurna Base Camp trek takes you into the Annapurna Sanctuary — a dramatic natural amphitheater surrounded by towering peaks including Annapurna I (8,091m), Machapuchare (6,993m), and Hiunchuli (6,441m). What makes this trek special is its incredible diversity of scenery.
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>Diverse landscapes:</strong> Subtropical forests, bamboo groves, rhododendron woodlands, and alpine meadows</li>
            <li><strong>Cultural richness:</strong> Pass through Gurung and Magar villages with homestay opportunities</li>
            <li><strong>Lower altitude risk:</strong> Max 4,130m means less acclimatization needed</li>
            <li><strong>No flight required:</strong> Drive from Pokhara to the trailhead — no risky Lukla flights</li>
            <li><strong>Hot springs:</strong> Relax in natural hot springs at Jhinu Danda on the way back</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Everest Base Camp: The Highlights</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Everest Base Camp is the ultimate bucket-list trek. Standing at the foot of the world's highest mountain is an experience that few other treks can match. The Khumbu region offers dramatic high-altitude landscapes, Sherpa culture, and iconic mountain views.
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>Iconic status:</strong> Stand at the base of Mount Everest (8,849m)</li>
            <li><strong>Kala Patthar:</strong> Climb to 5,545m for the best panoramic view of Everest</li>
            <li><strong>Sherpa culture:</strong> Visit Namche Bazaar, Tengboche Monastery, and traditional Sherpa villages</li>
            <li><strong>Well-developed infrastructure:</strong> Good teahouses with WiFi and charging throughout</li>
            <li><strong>Sense of achievement:</strong> Higher altitude creates a stronger sense of accomplishment</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Which Trek Is Right for You?</h2>
          
          <h3 className="font-semibold text-lg text-foreground mb-2">Choose Annapurna Base Camp if:</h3>
          <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
            <li>You're a first-time trekker or have limited high-altitude experience</li>
            <li>You have 10–12 days (not enough for EBC)</li>
            <li>You prefer diverse scenery over extreme altitude</li>
            <li>You want to avoid the risky Lukla flight</li>
            <li>You're on a tighter budget</li>
            <li>You want a less crowded experience</li>
          </ul>

          <h3 className="font-semibold text-lg text-foreground mb-2">Choose Everest Base Camp if:</h3>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
            <li>It's on your bucket list and you want the iconic experience</li>
            <li>You have 14+ days available</li>
            <li>You're comfortable with higher altitude (5,364m)</li>
            <li>You want to experience Sherpa culture in the Khumbu region</li>
            <li>You want bragging rights (let's be honest!)</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Can You Do Both?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            If you have the time, doing both treks is an incredible experience. Many trekkers start with Annapurna Base Camp as a "warm-up" trek, then tackle Everest Base Camp on a return trip. Each trek offers completely different scenery and culture. We recommend at least a few rest days between treks if doing them in a single visit.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Related Resources</h2>
          <ul className="space-y-2 mb-10">
            <li><Link to="/trek/everest-base-camp" className="text-accent hover:underline">→ Everest Base Camp Trek Details</Link></li>
            <li><Link to="/trek/annapurna-base-camp" className="text-accent hover:underline">→ Annapurna Base Camp Trek Details</Link></li>
            <li><Link to="/everest-base-camp-cost" className="text-accent hover:underline">→ EBC Cost Breakdown</Link></li>
            <li><Link to="/nepal-trek-difficulty-comparison" className="text-accent hover:underline">→ Nepal Trek Difficulty Comparison</Link></li>
            <li><Link to="/altitude-sickness-guide" className="text-accent hover:underline">→ Altitude Sickness Prevention Guide</Link></li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-10">
            <div><h3 className="font-semibold text-foreground mb-2">Is Annapurna Base Camp easier than Everest Base Camp?</h3><p className="text-muted-foreground">Yes. ABC reaches 4,130m vs 5,364m for EBC, takes fewer days, and has lower altitude sickness risk.</p></div>
            <div><h3 className="font-semibold text-foreground mb-2">Which trek has better views?</h3><p className="text-muted-foreground">Both are spectacular. Annapurna offers a 360° amphitheater. Everest puts you at the foot of the world's highest peak. It comes down to personal preference.</p></div>
            <div><h3 className="font-semibold text-foreground mb-2">Which is more crowded?</h3><p className="text-muted-foreground">EBC tends to be more crowded due to its iconic status. ABC is quieter, especially outside peak season.</p></div>
          </div>

          {/* Related Resources */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Related Trek Packages</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/trek/everest-base-camp" className="bg-card p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors group">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Everest Base Camp Trek</h3>
                <p className="text-muted-foreground text-sm mt-1">12–14 days · 5,364m · Moderate-Challenging</p>
              </Link>
              <Link to="/trek/annapurna-base-camp" className="bg-card p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors group">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Annapurna Base Camp Trek</h3>
                <p className="text-muted-foreground text-sm mt-1">10–12 days · 4,130m · Moderate</p>
              </Link>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Read Next</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Trek Difficulty Comparison", href: "/trek-difficulty-comparison", desc: "Compare all Nepal treks by difficulty" },
                { title: "EBC Cost Breakdown 2026", href: "/everest-base-camp-cost", desc: "Budget, mid-range & luxury estimates" },
                { title: "Best Time to Trek Nepal", href: "/best-time-to-trek-nepal", desc: "Month-by-month season guide" },
                { title: "Altitude Sickness Guide", href: "/altitude-sickness-guide", desc: "Prevention & treatment on the trail" },
              ].map((r) => (
                <Link key={r.href} to={r.href} className="bg-card p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors group">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{r.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Still Can't Decide?</h2>
            <p className="text-muted-foreground mb-6">Tell us your dates, fitness level, and preferences — we'll recommend the perfect trek for you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/9779818800584?text=Hi!%20I'm%20deciding%20between%20Annapurna%20and%20Everest%20Base%20Camp.%20Can%20you%20help?" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="mountain" size="lg" asChild>
                <Link to="/treks">
                  Browse All Treks
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AnnapurnaVsEverestPage;
