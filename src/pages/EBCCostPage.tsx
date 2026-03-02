import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MessageCircle, DollarSign, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const EBCCostPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does Everest Base Camp trek cost in 2026?",
        acceptedAnswer: { "@type": "Answer", text: "The total cost ranges from $1,200 to $3,500+ depending on whether you trek independently or with a guided group. Budget trekkers spend around $1,200–$1,500, mid-range is $1,800–$2,500, and luxury options run $3,000+." }
      },
      {
        "@type": "Question",
        name: "What is included in an EBC trek package?",
        acceptedAnswer: { "@type": "Answer", text: "A typical package includes airport transfers, permits (TIMS and Sagarmatha National Park), accommodation in teahouses, meals on trek, an experienced guide, porters, and emergency support." }
      },
      {
        "@type": "Question",
        name: "Is it cheaper to book locally in Nepal?",
        acceptedAnswer: { "@type": "Answer", text: "Yes, booking directly with a local trekking company in Nepal is typically 30–50% cheaper than booking through international agencies, as there is no middleman markup." }
      },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Everest Base Camp Trek Cost Breakdown 2026 | Go Nepal Adventure</title>
        <meta name="description" content="Complete cost breakdown for Everest Base Camp trek in 2026. Budget, mid-range, and luxury options explained. Permits, flights, accommodation, food, and tips." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Everest Base Camp Cost</span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everest Base Camp Trek Cost Breakdown 2026
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Planning your Everest Base Camp trek and wondering how much it will really cost? This comprehensive guide breaks down every expense — from flights and permits to accommodation, food, and tips — so you can budget accurately for your Himalayan adventure.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Overview: What Does EBC Trek Cost?</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The Everest Base Camp trek typically costs between <strong>$1,200 and $3,500+</strong> depending on your travel style. This includes international flights to Kathmandu, the domestic flight to Lukla, trekking permits, accommodation, meals, guide and porter fees, gear, and insurance.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Booking directly with a local trekking company in Nepal — rather than through an international agency — can save you 30–50% on package costs. Local operators like Go Nepal Adventure offer transparent pricing with no hidden fees.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Detailed Cost Breakdown</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Expense</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Budget</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Mid-Range</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Luxury</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border px-4 py-2">Lukla Flight (round trip)</td><td className="border border-border px-4 py-2">$180–$200</td><td className="border border-border px-4 py-2">$200–$350</td><td className="border border-border px-4 py-2">$350+ (helicopter)</td></tr>
                <tr><td className="border border-border px-4 py-2">Permits (TIMS + National Park)</td><td className="border border-border px-4 py-2">$60–$80</td><td className="border border-border px-4 py-2">$60–$80</td><td className="border border-border px-4 py-2">$60–$80</td></tr>
                <tr><td className="border border-border px-4 py-2">Teahouse Accommodation (12 nights)</td><td className="border border-border px-4 py-2">$60–$120</td><td className="border border-border px-4 py-2">$120–$250</td><td className="border border-border px-4 py-2">$300–$600</td></tr>
                <tr><td className="border border-border px-4 py-2">Meals on Trek (12 days)</td><td className="border border-border px-4 py-2">$200–$300</td><td className="border border-border px-4 py-2">$300–$450</td><td className="border border-border px-4 py-2">$400–$600</td></tr>
                <tr><td className="border border-border px-4 py-2">Guide Fee</td><td className="border border-border px-4 py-2">$200–$300</td><td className="border border-border px-4 py-2">$300–$400</td><td className="border border-border px-4 py-2">$400–$600</td></tr>
                <tr><td className="border border-border px-4 py-2">Porter Fee</td><td className="border border-border px-4 py-2">$150–$200</td><td className="border border-border px-4 py-2">$200–$250</td><td className="border border-border px-4 py-2">$250–$350</td></tr>
                <tr><td className="border border-border px-4 py-2">Travel Insurance</td><td className="border border-border px-4 py-2">$50–$100</td><td className="border border-border px-4 py-2">$100–$200</td><td className="border border-border px-4 py-2">$200–$400</td></tr>
                <tr><td className="border border-border px-4 py-2">Gear & Equipment</td><td className="border border-border px-4 py-2">$50–$150 (rental)</td><td className="border border-border px-4 py-2">$200–$500</td><td className="border border-border px-4 py-2">$500–$1,000</td></tr>
                <tr><td className="border border-border px-4 py-2">Tips & Miscellaneous</td><td className="border border-border px-4 py-2">$50–$100</td><td className="border border-border px-4 py-2">$100–$200</td><td className="border border-border px-4 py-2">$200–$400</td></tr>
                <tr className="bg-secondary font-semibold text-foreground">
                  <td className="border border-border px-4 py-3">Total Estimate</td>
                  <td className="border border-border px-4 py-3">$1,000–$1,550</td>
                  <td className="border border-border px-4 py-3">$1,580–$2,680</td>
                  <td className="border border-border px-4 py-3">$2,660–$4,030</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Permit Costs Explained</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Two permits are required for the Everest Base Camp trek: the <strong>TIMS card</strong> (Trekkers' Information Management System) costing around $20, and the <strong>Sagarmatha National Park entry permit</strong> costing approximately $60 for foreign nationals. Your trekking company will typically arrange these in Kathmandu before departure. For more details, see our <Link to="/trekking-permits-nepal" className="text-accent hover:underline">complete trekking permits guide</Link>.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">How to Save Money on EBC Trek</h2>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>Book directly with a local company:</strong> Cut out the middleman and save 30–50%.</li>
            <li><strong>Trek in shoulder season:</strong> March, May, October, and November offer good weather with lower prices.</li>
            <li><strong>Share a porter:</strong> Two trekkers can share one porter to split costs.</li>
            <li><strong>Rent gear in Kathmandu:</strong> Thamel has affordable rental shops for sleeping bags, jackets, and boots.</li>
            <li><strong>Carry water purification tablets:</strong> Avoid buying expensive bottled water at altitude.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">What's Included in a Typical Package?</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A standard EBC trek package from a reputable local operator includes: airport pickup and drop-off, Kathmandu-Lukla-Kathmandu flights, all necessary trekking permits, teahouse accommodation during the trek, three meals per day (breakfast, lunch, dinner), an experienced English-speaking guide, porters (1 porter per 2 trekkers), first aid kit, and 24/7 emergency support.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Hidden Costs to Watch For</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Be aware of costs that aren't always included in package prices: hot showers ($2–$5 per use), WiFi at teahouses ($3–$5 per hour), charging devices ($3–$5), snacks and drinks, souvenirs, and tips for guides and porters. Budget an extra $150–$300 for these expenses.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Is EBC Trek Worth the Cost?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Absolutely. Standing at the base of the world's highest mountain is a once-in-a-lifetime experience. The trek passes through stunning Sherpa villages, ancient monasteries, and some of the most dramatic mountain scenery on Earth. With proper planning and a trusted local guide, it's an investment in memories that will last forever.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Related Resources</h2>
          <ul className="space-y-2 mb-10">
            <li><Link to="/trek/everest-base-camp" className="text-accent hover:underline">→ Everest Base Camp Trek — Full Itinerary & Details</Link></li>
            <li><Link to="/altitude-sickness-guide" className="text-accent hover:underline">→ Altitude Sickness Prevention Guide</Link></li>
            <li><Link to="/best-time-to-trek-nepal" className="text-accent hover:underline">→ Best Time to Trek in Nepal</Link></li>
            <li><Link to="/do-you-need-guide-nepal" className="text-accent hover:underline">→ Do You Need a Guide in Nepal?</Link></li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-10">
            <div>
              <h3 className="font-semibold text-foreground mb-2">How much does Everest Base Camp trek cost in 2026?</h3>
              <p className="text-muted-foreground">The total cost ranges from $1,200 to $3,500+ depending on whether you trek independently or with a guided group. Budget trekkers spend around $1,200–$1,500, mid-range is $1,800–$2,500, and luxury options run $3,000+.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">What is included in an EBC trek package?</h3>
              <p className="text-muted-foreground">A typical package includes airport transfers, permits (TIMS and Sagarmatha National Park), accommodation in teahouses, meals on trek, an experienced guide, porters, and emergency support.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Is it cheaper to book locally in Nepal?</h3>
              <p className="text-muted-foreground">Yes, booking directly with a local trekking company in Nepal is typically 30–50% cheaper than booking through international agencies, as there is no middleman markup.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Get a Free EBC Cost Estimate</h2>
            <p className="text-muted-foreground mb-6">Chat directly with our team for a personalized quote — no obligation, no agency fees.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/9779818800584?text=Hi!%20I%20want%20a%20cost%20estimate%20for%20Everest%20Base%20Camp%20trek." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="mountain" size="lg" asChild>
                <Link to="/trek/everest-base-camp">
                  View EBC Trek Details
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

export default EBCCostPage;
