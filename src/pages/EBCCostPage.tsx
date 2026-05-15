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
        name: "How much does Everest Base Camp trek cost from Kathmandu in 2026?",
        acceptedAnswer: { "@type": "Answer", text: "The total cost from Kathmandu including Ramechhap drive ($25), Lukla flights ($350 return), 12-day trek with local guide ($800-$1,500) is approximately $1,175-$2,200 per person when booking directly with a licensed Nepali guide." }
      },
      {
        "@type": "Question",
        name: "How much does Everest Base Camp trek cost in 2026?",
        acceptedAnswer: { "@type": "Answer", text: "The total cost ranges from $1,200 to $3,500+ depending on whether you trek independently or with a guided group. Budget trekkers spend around $1,200–$1,500, mid-range is $1,800–$2,500, and luxury options run $3,000+." }
      },
      {
        "@type": "Question",
        name: "Is TIMS permit required for Everest Base Camp trek in 2026?",
        acceptedAnswer: { "@type": "Answer", text: "No. The TIMS card was replaced inside the Khumbu region by the Khumbu Pasang Lhamu Rural Municipality Permit in 2018. You need the Sagarmatha National Park Entry Permit (NPR 3,000) and the Khumbu municipality permit (NPR 2,000). Total permit cost is approximately $42-60 USD." }
      },
      {
        "@type": "Question",
        name: "What is included in an EBC trek package?",
        acceptedAnswer: { "@type": "Answer", text: "A typical package includes airport transfers, permits (TIMS and Sagarmatha National Park), accommodation in teahouses, meals on trek, an experienced guide, porters, and emergency support." }
      },
      {
        "@type": "Question",
        name: "What is the cheapest way to do Everest Base Camp?",
        acceptedAnswer: { "@type": "Answer", text: "The cheapest way is to book directly with a licensed local Nepali guide (avoiding agency markup of 30-50%), trek in shoulder season (March or November), share a porter with another trekker, rent gear in Kathmandu's Thamel district, and carry water purification tablets. Budget trekkers can do EBC for $800-$1,000 total." }
      },
      {
        "@type": "Question",
        name: "How much does a guide cost for Everest Base Camp?",
        acceptedAnswer: { "@type": "Answer", text: "A government-licensed trekking guide costs $25-$35 per day in 2026, inclusive of their food, accommodation and insurance. For a 12-14 day EBC trek, guide fees total $300-$490. A porter costs $20-$25 per day and can be shared between two trekkers." }
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
        <title>Everest Base Camp Trek Cost 2026 — Complete Breakdown ($800–$2,500)</title>
        <meta name="description" content="How much does Everest Base Camp trek cost in 2026? Full breakdown: permits $60, Lukla flights $350, guide fees, teahouse costs. Budget $800 vs luxury $2,500. Book direct with licensed local guide and save 30-50% vs agencies." />
        <link rel="canonical" href="https://ashish-tamang.com.np/everest-base-camp-cost" />
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
            Everest Base Camp Trek Cost 2026 — Complete Breakdown
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Planning your Everest Base Camp trek and wondering how much it will really cost? This comprehensive guide breaks down every expense — from flights and permits to accommodation, food, and tips — so you can budget accurately for your Himalayan adventure.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">How Much Does EBC Trek Cost in 2026?</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The Everest Base Camp trek costs between <strong>$800 and $2,500</strong> in 2026 when you book directly with a licensed Nepali guide, and $1,500–$4,000+ if you book through an international agency. The price depends on group size, accommodation tier, whether you fly or drive to Lukla, and if you add extras like a helicopter return from Gorak Shep. The categories below cover every line item you'll actually pay for on a standard 12–14 day itinerary.
          </p>

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

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Nepal Trekking Permit Costs</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Two permits are required for EBC in 2026. The <strong>Sagarmatha National Park Entry Permit</strong> costs <strong>NPR 3,000</strong> (~$25 USD) for foreign nationals and NPR 1,500 for SAARC citizens — issued by the Nepal Tourism Board in Kathmandu or at the Monjo checkpoint. The <strong>Khumbu Pasang Lhamu Rural Municipality Permit</strong> costs <strong>NPR 2,000</strong> (~$17 USD) and replaced the standard TIMS card inside the Khumbu region back in 2018; it's collected at Lukla on arrival. You'll need your passport and two passport-size photos. Combined permit cost: roughly <strong>$42–$60 USD</strong>. Licensed operators handle every permit end-to-end, so you don't queue. See our full <Link to="/trekking-permits-nepal" className="text-accent hover:underline">Nepal trekking permits guide</Link> for region-by-region rules.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Kathmandu to Lukla Flight Cost</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The 30-minute flight to Lukla — gateway to the Khumbu — costs <strong>$150–$180 USD one-way</strong> per person on Tara Air, Summit Air, or Sita Air, totalling roughly <strong>$300–$360 round trip</strong>. During peak seasons (mid-March to May and October to November), commercial flights typically depart from <strong>Ramechhap (Manthali) airport</strong> instead of Kathmandu, which means a 4–5 hour pre-dawn drive (around $25 per seat in a shared jeep). A shared <strong>helicopter charter</strong> is the fastest alternative at roughly <strong>$500 USD per seat one-way</strong>, increasingly popular as a return option from Lukla or Gorak Shep. Baggage limits are 10 kg checked plus 5 kg hand luggage. Book at least 6–8 weeks ahead for peak dates — Lukla seats sell out, and weather delays of 1–2 days are common.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Guide and Porter Fees</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A government-licensed trekking <strong>guide</strong> costs <strong>$25–$35 per day</strong> in 2026, and a <strong>porter</strong> (carrying up to 25 kg) costs <strong>$20–$25 per day</strong> — often shared between two trekkers, which works out to $10–$13 each. A combined guide-porter (a strong guide who also carries a daypack) runs around <strong>$30 per day</strong>. These daily rates already include your guide's food, lodging, insurance, and domestic flight to Lukla, so there are no add-ons mid-trek. As of <strong>April 2023</strong>, the Nepal government requires every foreign trekker in protected areas to hire a licensed guide. Booking your guide directly in Nepal — rather than paying an international agency to find one for you — keeps wages fair, supports local families, and saves you 30–50% on the same trip.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Teahouse Accommodation and Food Costs</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Teahouses are family-run lodges along the trail. Twin-share rooms cost <strong>$5–$10 per night</strong> at lower altitudes (Phakding, Namche Bazaar) and rise to <strong>$10–$20 per night</strong> in higher villages like Lobuche and Gorak Shep, where supplies must be carried up by porter or yak. For meals, expect <strong>$6–$10 for dal bhat</strong> (the unlimited-refill local staple), $5–$8 for momos, and $4–$8 for breakfast. Plan <strong>$30–$40 per day</strong> for food at higher elevations, where prices roughly double. Bottled water is $2–$5 — bring purification tablets or a SteriPEN to save $30+ across the trek. Total accommodation plus food for a 12-day EBC trek typically lands at <strong>$400–$600 USD</strong>.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Budget EBC Trek Cost vs Luxury</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Your travel style determines almost everything. Here's a realistic 2026 comparison for the same 12–14 day route:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Tier</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Total Cost</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">What You Get</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Budget</td><td className="border border-border px-4 py-2">$800–$1,200</td><td className="border border-border px-4 py-2">Group teahouse trek booked locally, shared porter, basic gear rental, dal bhat meals.</td></tr>
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Standard</td><td className="border border-border px-4 py-2">$1,500–$2,000</td><td className="border border-border px-4 py-2">Private guide and porter, mid-range teahouses, insurance, varied meals, all permits.</td></tr>
                <tr><td className="border border-border px-4 py-2 font-medium text-foreground">Luxury</td><td className="border border-border px-4 py-2">$2,500–$4,000+</td><td className="border border-border px-4 py-2">Yeti Mountain Home / Everest Summit Lodges, helicopter return from Gorak Shep, premium gear, à la carte menus.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Most independent trekkers land in the standard tier — comfortable, safe, and well-supported, without overpaying for marble bathrooms at 5,000m.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Hidden Costs Nobody Tells You About</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            These line items rarely appear in package quotes but absolutely will hit your wallet on trek. <strong>Hot showers</strong> cost $3–$8 (gas-heated above Namche), <strong>Wi-Fi</strong> via an Everest Link card runs $20–$30 for the whole trek, <strong>device charging</strong> is $2–$5 per hour, bakery items in Namche cost $3–$8, and a Snickers bar at Gorak Shep is $4–$7. <strong>Tipping</strong> is customary: $10–$15 per day for your guide and $7–$10 per day for your porter. Add a <strong>Nepal tourist visa</strong> ($30 for 15 days or $50 for 30 days on arrival) and <strong>travel insurance with helicopter rescue cover</strong> ($80–$150). Realistic extra budget on top of your trek package: <strong>$200–$400</strong>.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Why Booking Direct Saves You 30-50%</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            International agencies aren't running your trek — they're reselling it. They contract a Kathmandu-based local operator (often the same ones travellers find on their own) and mark the price up <strong>30–50%</strong> to cover overseas marketing, sales commissions, and corporate overhead. Booking directly with a licensed Nepali guide means the same itinerary, same teahouses, and same porter team — at <strong>$1,200 instead of $1,800</strong>. 100% of your payment stays in Nepal's local economy, you communicate directly with your guide on WhatsApp, dates are flexible, and there are no group surcharges for solo or pair travellers. That's the entire model behind Go Nepal Adventure: transparent pricing, real wages, no middlemen.
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
              <h3 className="font-semibold text-foreground mb-2">How much does Everest Base Camp trek cost from Kathmandu in 2026?</h3>
              <p className="text-muted-foreground">The total cost from Kathmandu including Ramechhap drive ($25), Lukla flights ($350 return), 12-day trek with local guide ($800-$1,500) is approximately $1,175-$2,200 per person when booking directly with a licensed Nepali guide.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">How much does Everest Base Camp trek cost in 2026?</h3>
              <p className="text-muted-foreground">The total cost ranges from $1,200 to $3,500+ depending on whether you trek independently or with a guided group. Budget trekkers spend around $1,200–$1,500, mid-range is $1,800–$2,500, and luxury options run $3,000+.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Is TIMS permit required for Everest Base Camp trek in 2026?</h3>
              <p className="text-muted-foreground">No. The TIMS card was replaced inside the Khumbu region by the Khumbu Pasang Lhamu Rural Municipality Permit in 2018. You need the Sagarmatha National Park Entry Permit (NPR 3,000) and the Khumbu municipality permit (NPR 2,000). Total permit cost is approximately $42-60 USD.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">What is included in an EBC trek package?</h3>
              <p className="text-muted-foreground">A typical package includes airport transfers, permits (TIMS and Sagarmatha National Park), accommodation in teahouses, meals on trek, an experienced guide, porters, and emergency support.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">What is the cheapest way to do Everest Base Camp?</h3>
              <p className="text-muted-foreground">The cheapest way is to book directly with a licensed local Nepali guide (avoiding agency markup of 30-50%), trek in shoulder season (March or November), share a porter with another trekker, rent gear in Kathmandu's Thamel district, and carry water purification tablets. Budget trekkers can do EBC for $800-$1,000 total.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">How much does a guide cost for Everest Base Camp?</h3>
              <p className="text-muted-foreground">A government-licensed trekking guide costs $25-$35 per day in 2026, inclusive of their food, accommodation and insurance. For a 12-14 day EBC trek, guide fees total $300-$490. A porter costs $20-$25 per day and can be shared between two trekkers.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Is it cheaper to book locally in Nepal?</h3>
              <p className="text-muted-foreground">Yes, booking directly with a local trekking company in Nepal is typically 30–50% cheaper than booking through international agencies, as there is no middleman markup.</p>
            </div>
          </div>

          {/* CTA */}
          {/* Related Resources */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Altitude Sickness Prevention Guide", href: "/altitude-sickness-guide", desc: "Stay safe above 3,000m with our expert tips" },
                { title: "Nepal Trekking Permits 2026", href: "/trekking-permits-nepal", desc: "All permits, costs & how we handle them" },
                { title: "Best Time to Trek in Nepal", href: "/best-time-to-trek-nepal", desc: "Month-by-month weather & season guide" },
                { title: "Trek Difficulty Comparison", href: "/trek-difficulty-comparison", desc: "Find the right trek for your fitness level" },
              ].map((r) => (
                <Link key={r.href} to={r.href} className="bg-card p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors group">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{r.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Treks */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Related Trek Packages</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/trek/everest-base-camp" className="bg-card p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors group">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Everest Base Camp Trek</h3>
                <p className="text-muted-foreground text-sm mt-1">12–14 days · From $1,200 · Moderate-Challenging</p>
              </Link>
              <Link to="/trek/ghorepani-poonhill" className="bg-card p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors group">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Ghorepani Poon Hill Trek</h3>
                <p className="text-muted-foreground text-sm mt-1">4–5 days · Budget-friendly · Easy</p>
              </Link>
            </div>
          </div>

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
