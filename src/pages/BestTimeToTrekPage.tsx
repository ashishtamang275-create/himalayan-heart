import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BestTimeToTrekPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best month to trek in Nepal?",
        acceptedAnswer: { "@type": "Answer", text: "October and November are the best months to trek in Nepal. The monsoon has ended, skies are clear, and temperatures are comfortable. March to May (spring) is the second-best season with blooming rhododendrons." }
      },
      {
        "@type": "Question",
        name: "Can you trek in Nepal during monsoon season?",
        acceptedAnswer: { "@type": "Answer", text: "Trekking during monsoon (June–September) is possible but challenging. Rain is frequent, trails can be slippery, and views are often obscured. However, Upper Mustang and Dolpo lie in rain-shadow areas and can be trekked during monsoon." }
      },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Best Time to Trek in Nepal — Month-by-Month Guide 2026 | Go Nepal Adventure</title>
        <meta name="description" content="Complete month-by-month guide to trekking seasons in Nepal. Learn when to go for clear skies, fewer crowds, and the best conditions for each major trek." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Best Time to Trek</span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Best Time to Trek in Nepal: Month-by-Month Guide 2026
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Nepal has four distinct trekking seasons, each offering different conditions. This month-by-month guide helps you choose the perfect time based on your preferred trek, weather expectations, and crowd tolerance.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Season Overview</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Season</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Months</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Weather</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Crowds</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Rating</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Autumn (Peak)</td><td className="border border-border px-4 py-2">Oct–Nov</td><td className="border border-border px-4 py-2">Clear skies, mild temps</td><td className="border border-border px-4 py-2">High</td><td className="border border-border px-4 py-2 text-green-600 font-medium">★★★★★</td></tr>
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Spring</td><td className="border border-border px-4 py-2">Mar–May</td><td className="border border-border px-4 py-2">Warm, rhododendrons</td><td className="border border-border px-4 py-2">Moderate–High</td><td className="border border-border px-4 py-2 text-green-600 font-medium">★★★★</td></tr>
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Winter</td><td className="border border-border px-4 py-2">Dec–Feb</td><td className="border border-border px-4 py-2">Cold, clear, some snow</td><td className="border border-border px-4 py-2">Low</td><td className="border border-border px-4 py-2 text-yellow-600 font-medium">★★★</td></tr>
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Monsoon</td><td className="border border-border px-4 py-2">Jun–Sep</td><td className="border border-border px-4 py-2">Heavy rain, leeches</td><td className="border border-border px-4 py-2">Very Low</td><td className="border border-border px-4 py-2 text-red-600 font-medium">★★</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Month-by-Month Breakdown</h2>

          <h3 className="font-semibold text-lg text-foreground mb-2 mt-6">January & February</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The coldest months. Higher altitude treks (EBC, Manaslu) can see temperatures drop to -20°C at night. However, skies are often crystal clear, offering some of the best mountain views of the year. Lower-altitude treks like Poon Hill and the Kathmandu Valley are comfortable. Teahouses at high altitudes may be closed.
          </p>
          <p className="text-muted-foreground mb-4"><strong>Best treks:</strong> Poon Hill, lower Annapurna, Kathmandu Valley day hikes</p>

          <h3 className="font-semibold text-lg text-foreground mb-2 mt-6">March & April</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Spring brings warmer temperatures and spectacular rhododendron blooms across the middle hills. This is the second-most popular trekking season. Visibility is generally good, though afternoon clouds can roll in. Wildflowers blanket the trails, making it particularly beautiful for Annapurna and Langtang treks.
          </p>
          <p className="text-muted-foreground mb-4"><strong>Best treks:</strong> Annapurna BC, Poon Hill, Langtang Valley, EBC</p>

          <h3 className="font-semibold text-lg text-foreground mb-2 mt-6">May</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The tail end of spring. Temperatures rise significantly at lower altitudes, making sub-3,000m treks hot. However, high-altitude treks remain comfortable. Pre-monsoon haze can reduce visibility in the afternoons. Fewer trekkers than March–April.
          </p>

          <h3 className="font-semibold text-lg text-foreground mb-2 mt-6">June, July, August & September (Monsoon)</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The monsoon season brings heavy rainfall, leeches on trails, and frequent cloud cover. Most trekkers avoid this period. However, rain-shadow regions like <strong>Upper Mustang</strong> and <strong>Dolpo</strong> receive minimal rainfall and can be excellent during this time. Flights to Lukla are frequently delayed or cancelled.
          </p>
          <p className="text-muted-foreground mb-4"><strong>Best treks:</strong> Upper Mustang, Dolpo (rain-shadow areas only)</p>

          <h3 className="font-semibold text-lg text-foreground mb-2 mt-6">October & November (Peak Season)</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The golden window for trekking in Nepal. The monsoon has cleared the air, leaving crystal-clear skies and unobstructed mountain views. Temperatures are comfortable at all altitudes. This is when all treks are at their best — but expect crowds on popular routes. Book early, especially for EBC.
          </p>
          <p className="text-muted-foreground mb-4"><strong>Best treks:</strong> All treks are excellent. EBC, ABC, Manaslu, Langtang, Poon Hill</p>

          <h3 className="font-semibold text-lg text-foreground mb-2 mt-6">December</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Early December still offers good trekking conditions at lower altitudes. By mid-December, cold sets in at higher elevations. Crowds thin dramatically, offering a peaceful experience. Popular lower-altitude treks like Poon Hill remain comfortable. High passes may begin to close with snowfall.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Best Season by Trek</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Trek</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Best Months</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Avoid</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border px-4 py-2"><Link to="/trek/everest-base-camp" className="text-accent hover:underline">Everest Base Camp</Link></td><td className="border border-border px-4 py-2">Oct–Nov, Mar–May</td><td className="border border-border px-4 py-2">Jun–Sep, Jan–Feb</td></tr>
                <tr><td className="border border-border px-4 py-2"><Link to="/trek/annapurna-base-camp" className="text-accent hover:underline">Annapurna BC</Link></td><td className="border border-border px-4 py-2">Oct–Nov, Mar–Apr</td><td className="border border-border px-4 py-2">Jun–Sep</td></tr>
                <tr><td className="border border-border px-4 py-2"><Link to="/trek/langtang-valley" className="text-accent hover:underline">Langtang Valley</Link></td><td className="border border-border px-4 py-2">Oct–Nov, Mar–May</td><td className="border border-border px-4 py-2">Jun–Sep</td></tr>
                <tr><td className="border border-border px-4 py-2"><Link to="/trek/manaslu-circuit" className="text-accent hover:underline">Manaslu Circuit</Link></td><td className="border border-border px-4 py-2">Sep–Nov, Mar–May</td><td className="border border-border px-4 py-2">Dec–Feb, Jun–Aug</td></tr>
                <tr><td className="border border-border px-4 py-2"><Link to="/trek/ghorepani-poonhill" className="text-accent hover:underline">Poon Hill</Link></td><td className="border border-border px-4 py-2">Oct–May (year-round)</td><td className="border border-border px-4 py-2">Jun–Sep</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Related Resources</h2>
          <ul className="space-y-2 mb-10">
            <li><Link to="/nepal-trek-difficulty-comparison" className="text-accent hover:underline">→ Trek Difficulty Comparison</Link></li>
            <li><Link to="/altitude-sickness-guide" className="text-accent hover:underline">→ Altitude Sickness Prevention</Link></li>
            <li><Link to="/trekking-permits-nepal" className="text-accent hover:underline">→ Trekking Permits Guide</Link></li>
            <li><Link to="/everest-base-camp-cost" className="text-accent hover:underline">→ EBC Cost Breakdown</Link></li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-10">
            <div><h3 className="font-semibold text-foreground mb-2">What is the best month to trek in Nepal?</h3><p className="text-muted-foreground">October and November offer the best conditions — clear skies, comfortable temps, and stunning views.</p></div>
            <div><h3 className="font-semibold text-foreground mb-2">Can you trek during monsoon?</h3><p className="text-muted-foreground">It's possible but challenging. Rain-shadow areas like Upper Mustang are the exception and trek well during monsoon.</p></div>
          </div>

          {/* Related Resources */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Read Next</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "EBC Trek Cost Breakdown 2026", href: "/everest-base-camp-cost", desc: "Budget, mid-range & luxury cost estimates" },
                { title: "Altitude Sickness Guide", href: "/altitude-sickness-guide", desc: "Prevention, symptoms & treatment on the trail" },
                { title: "Annapurna vs Everest", href: "/annapurna-vs-everest", desc: "Which trek is right for you?" },
                { title: "Trekking Permits Nepal", href: "/trekking-permits-nepal", desc: "All permits explained with costs" },
              ].map((r) => (
                <Link key={r.href} to={r.href} className="bg-card p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors group">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{r.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Ready to Plan Your Trek?</h2>
            <p className="text-muted-foreground mb-6">Tell us your preferred dates and we'll suggest the best trek for that season.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/9779818800584?text=Hi!%20I'm%20planning%20to%20trek%20in%20Nepal.%20When%20is%20the%20best%20time?" target="_blank" rel="noopener noreferrer">
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
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BestTimeToTrekPage;
