import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const DifficultyComparisonPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the easiest trek in Nepal?",
        acceptedAnswer: { "@type": "Answer", text: "The Ghorepani Poon Hill trek is widely considered the easiest popular trek in Nepal. It takes 4–5 days, reaches a maximum altitude of 3,210m, and doesn't require high-altitude acclimatization. It's ideal for beginners and families." }
      },
      {
        "@type": "Question",
        name: "Is Everest Base Camp trek hard?",
        acceptedAnswer: { "@type": "Answer", text: "Everest Base Camp is rated moderate to challenging. The 12–14 day trek reaches 5,364m. The main difficulty is altitude rather than technical terrain. With proper acclimatization days and reasonable fitness, most healthy adults can complete it." }
      },
      {
        "@type": "Question",
        name: "Which is harder: Annapurna or Everest Base Camp?",
        acceptedAnswer: { "@type": "Answer", text: "Everest Base Camp is slightly harder due to higher altitude (5,364m vs 4,130m) and longer duration. However, both are non-technical teahouse treks suitable for fit beginners with proper preparation." }
      },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Nepal Trek Difficulty Comparison — Easy to Hard (2026 Guide) | Go Nepal Adventure</title>
        <meta name="description" content="Compare Nepal's most popular treks by difficulty level. From easy Poon Hill to challenging Manaslu Circuit — find the perfect trek for your fitness and experience." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Trek Difficulty Comparison</span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nepal Trek Difficulty Comparison: Easy to Hard
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Choosing the right trek depends on your fitness level, experience, and how much time you have. This guide compares Nepal's most popular treks side by side — from gentle hill walks to demanding high-altitude circuits.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Difficulty Rating System</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We rate treks on four factors: <strong>maximum altitude</strong>, <strong>daily walking hours</strong>, <strong>total duration</strong>, and <strong>terrain difficulty</strong>. Higher altitude treks require acclimatization days and carry the risk of altitude sickness, making them inherently more challenging regardless of fitness level.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Complete Comparison Table</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Trek</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Difficulty</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Duration</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Max Altitude</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Best For</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border px-4 py-2"><Link to="/trek/ghorepani-poonhill" className="text-accent hover:underline">Poon Hill</Link></td><td className="border border-border px-4 py-2 text-green-600 font-medium">Easy</td><td className="border border-border px-4 py-2">4–5 days</td><td className="border border-border px-4 py-2">3,210m</td><td className="border border-border px-4 py-2">Beginners, families, short holidays</td></tr>
                <tr><td className="border border-border px-4 py-2"><Link to="/trek/langtang-valley" className="text-accent hover:underline">Langtang Valley</Link></td><td className="border border-border px-4 py-2 text-yellow-600 font-medium">Moderate</td><td className="border border-border px-4 py-2">7–10 days</td><td className="border border-border px-4 py-2">3,870m</td><td className="border border-border px-4 py-2">First-time trekkers wanting altitude</td></tr>
                <tr><td className="border border-border px-4 py-2"><Link to="/trek/annapurna-base-camp" className="text-accent hover:underline">Annapurna BC</Link></td><td className="border border-border px-4 py-2 text-yellow-600 font-medium">Moderate</td><td className="border border-border px-4 py-2">10–12 days</td><td className="border border-border px-4 py-2">4,130m</td><td className="border border-border px-4 py-2">First-timers, diverse scenery</td></tr>
                <tr><td className="border border-border px-4 py-2"><Link to="/trek/everest-base-camp" className="text-accent hover:underline">Everest BC</Link></td><td className="border border-border px-4 py-2 text-orange-600 font-medium">Challenging</td><td className="border border-border px-4 py-2">12–14 days</td><td className="border border-border px-4 py-2">5,364m</td><td className="border border-border px-4 py-2">Bucket-list, moderate fitness</td></tr>
                <tr><td className="border border-border px-4 py-2"><Link to="/trek/manaslu-circuit" className="text-accent hover:underline">Manaslu Circuit</Link></td><td className="border border-border px-4 py-2 text-red-600 font-medium">Strenuous</td><td className="border border-border px-4 py-2">14–18 days</td><td className="border border-border px-4 py-2">5,106m</td><td className="border border-border px-4 py-2">Experienced trekkers, solitude</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Easy Treks (Beginner-Friendly)</h2>
          <h3 className="font-semibold text-lg text-foreground mb-2">Ghorepani Poon Hill Trek (4–5 Days)</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The classic introduction to Himalayan trekking. This short trek rewards you with stunning sunrise views over Annapurna and Dhaulagiri ranges from Poon Hill viewpoint (3,210m). The trail passes through beautiful rhododendron forests and traditional Gurung villages. Well-maintained teahouses, gentle elevation gains, and short daily walks (4–6 hours) make it perfect for beginners, families, and anyone with limited time.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Moderate Treks</h2>
          <h3 className="font-semibold text-lg text-foreground mb-2">Langtang Valley Trek (7–10 Days)</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Often called "the valley of glaciers," Langtang is the closest major trekking region to Kathmandu. The trek reaches 3,870m at Kyanjin Gompa, where you can optionally climb Kyanjin Ri (4,773m) for panoramic views. The moderate altitude and well-marked trails make it excellent for first-timers who want to push a bit higher.
          </p>
          <h3 className="font-semibold text-lg text-foreground mb-2">Annapurna Base Camp Trek (10–12 Days)</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            This trek takes you into the heart of the Annapurna Sanctuary — a natural amphitheater surrounded by towering peaks. The maximum altitude of 4,130m requires some acclimatization awareness but is manageable for most fit beginners. The diverse scenery transitions from subtropical forests to alpine meadows to glacial terrain. Read our <Link to="/annapurna-vs-everest" className="text-accent hover:underline">Annapurna vs Everest comparison</Link> for more details.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Challenging Treks</h2>
          <h3 className="font-semibold text-lg text-foreground mb-2">Everest Base Camp Trek (12–14 Days)</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The world's most iconic trek. Reaching 5,364m, Everest Base Camp is challenging primarily due to altitude rather than technical terrain. The trail is well-established with teahouse accommodation throughout. Acclimatization days are built into the itinerary. Most healthy adults with reasonable fitness can complete this trek. See our <Link to="/everest-base-camp-cost" className="text-accent hover:underline">EBC cost breakdown</Link> for pricing.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Strenuous Treks</h2>
          <h3 className="font-semibold text-lg text-foreground mb-2">Manaslu Circuit Trek (14–18 Days)</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            The Manaslu Circuit crosses the Larkya La pass at 5,106m and traverses remote, less-developed terrain. It requires a restricted area permit and a minimum group of two trekkers. The long duration, high pass crossing, and basic teahouse facilities make it best suited for experienced trekkers who want adventure away from crowds.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">How to Prepare for Any Trek</h2>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>Cardio training:</strong> Start 8–12 weeks before with hiking, running, cycling, or stair climbing</li>
            <li><strong>Altitude awareness:</strong> Read our <Link to="/altitude-sickness-guide" className="text-accent hover:underline">altitude sickness prevention guide</Link></li>
            <li><strong>Gear preparation:</strong> Invest in proper trekking boots, layers, and a quality sleeping bag</li>
            <li><strong>Travel insurance:</strong> Ensure coverage for high-altitude rescue and helicopter evacuation</li>
            <li><strong>Hire a licensed guide:</strong> It's <Link to="/do-you-need-guide-nepal" className="text-accent hover:underline">now mandatory in Nepal</Link></li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-10">
            <div><h3 className="font-semibold text-foreground mb-2">What is the easiest trek in Nepal?</h3><p className="text-muted-foreground">Ghorepani Poon Hill is the easiest popular trek — 4–5 days, max altitude 3,210m, ideal for beginners.</p></div>
            <div><h3 className="font-semibold text-foreground mb-2">Is Everest Base Camp trek hard?</h3><p className="text-muted-foreground">It's moderate to challenging. The main difficulty is altitude (5,364m), not technical terrain. Most healthy adults can complete it with preparation.</p></div>
            <div><h3 className="font-semibold text-foreground mb-2">Which is harder: Annapurna or Everest Base Camp?</h3><p className="text-muted-foreground">Everest Base Camp is slightly harder due to higher altitude and longer duration.</p></div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Not Sure Which Trek Is Right for You?</h2>
            <p className="text-muted-foreground mb-6">Our experienced team will recommend the perfect trek based on your fitness, time, and interests.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/9779818800584?text=Hi!%20Can%20you%20help%20me%20choose%20the%20right%20trek?" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="mountain" size="lg" asChild>
                <Link to="/treks">
                  View All Treks
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

export default DifficultyComparisonPage;
