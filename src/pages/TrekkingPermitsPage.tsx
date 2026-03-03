import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrekkingPermitsPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Do I need a trekking permit in Nepal?", acceptedAnswer: { "@type": "Answer", text: "Yes. All foreign trekkers need a TIMS card and a national park or conservation area permit. Some restricted areas like Upper Mustang and Manaslu require additional special permits." }},
      { "@type": "Question", name: "How much do Nepal trekking permits cost?", acceptedAnswer: { "@type": "Answer", text: "TIMS costs $10–$20. National park permits cost $30 for most areas (Everest, Annapurna, Langtang). Restricted areas like Upper Mustang cost $500 for 10 days." }},
      { "@type": "Question", name: "Can my trekking company arrange permits?", acceptedAnswer: { "@type": "Answer", text: "Yes. Licensed trekking companies like Go Nepal Adventure handle all permit paperwork in Kathmandu before your trek begins. All costs are included transparently in the package." }},
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://gonepaltreks.com" },
      { "@type": "ListItem", position: 2, name: "Trekking Permits in Nepal", item: "https://gonepaltreks.com/trekking-permits-nepal" },
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Trekking Permits in Nepal 2026 — Complete Guide | Go Nepal Adventure</title>
        <meta name="description" content="Complete guide to Nepal trekking permits: TIMS card, national park fees, restricted area permits, and costs. We handle all permits for your trek." />
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
              <span className="text-foreground">Trekking Permits</span>
            </nav>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trekking Permits in Nepal: Complete Guide 2026
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every trekker in Nepal needs the correct permits before hitting the trail. Here's your complete guide to understanding which permits you need and how to get them.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
            <h2 className="font-display text-3xl font-bold text-foreground">TIMS Card (Trekkers' Information Management System)</h2>
            <p className="text-muted-foreground leading-relaxed">
              The TIMS card is mandatory for most trekking routes in Nepal. It helps the government track and rescue trekkers in case of emergencies. There are two types: Individual (for solo trekkers) and Group (for those trekking with a registered agency — this is what we arrange for you).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Cost:</strong> Approximately $10–$20 USD depending on the card type.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground mt-12">National Park & Conservation Area Permits</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your trek, you may need entry permits for national parks or conservation areas:
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-secondary">
                    <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Area</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Cost</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Related Trek</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr><td className="border border-border px-4 py-2">Sagarmatha National Park</td><td className="border border-border px-4 py-2">$30 USD</td><td className="border border-border px-4 py-2"><Link to="/trek/everest-base-camp" className="text-accent hover:underline">Everest Base Camp Trek</Link></td></tr>
                  <tr><td className="border border-border px-4 py-2">Annapurna Conservation Area</td><td className="border border-border px-4 py-2">$30 USD</td><td className="border border-border px-4 py-2"><Link to="/trek/annapurna-base-camp" className="text-accent hover:underline">Annapurna Base Camp Trek</Link></td></tr>
                  <tr><td className="border border-border px-4 py-2">Langtang National Park</td><td className="border border-border px-4 py-2">$30 USD</td><td className="border border-border px-4 py-2"><Link to="/trek/langtang-valley" className="text-accent hover:underline">Langtang Valley Trek</Link></td></tr>
                  <tr><td className="border border-border px-4 py-2">Manaslu Conservation Area</td><td className="border border-border px-4 py-2">$30–$100 USD</td><td className="border border-border px-4 py-2"><Link to="/trek/manaslu-circuit" className="text-accent hover:underline">Manaslu Circuit Trek</Link></td></tr>
                  <tr><td className="border border-border px-4 py-2">Kanchenjunga Conservation Area</td><td className="border border-border px-4 py-2">$20 USD</td><td className="border border-border px-4 py-2">Kanchenjunga Base Camp</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-display text-3xl font-bold text-foreground mt-12">Restricted Area Permits</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some regions like Upper Mustang, Upper Dolpo, and Kanchenjunga require special restricted area permits issued through a registered trekking agency. These are more expensive ($500 for 10 days in Upper Mustang) and require a minimum group size of 2. Learn more about <Link to="/do-you-need-guide-nepal" className="text-accent hover:underline">why a licensed guide is now mandatory</Link>.
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground mt-12">We Handle All Your Permits</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you trek with Go Nepal Adventure, we take care of all permit arrangements. No queues, no paperwork stress — just show up and trek. All permit costs are clearly listed in your trek package so there are no surprises. See our <Link to="/everest-base-camp-cost" className="text-accent hover:underline">EBC cost breakdown</Link> for a detailed pricing example.
            </p>

            {/* FAQ Section */}
            <h2 className="font-display text-3xl font-bold text-foreground mt-12">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-10 not-prose">
              <div><h3 className="font-semibold text-foreground mb-2">Do I need a trekking permit in Nepal?</h3><p className="text-muted-foreground">Yes. All foreign trekkers need a TIMS card and a national park or conservation area permit.</p></div>
              <div><h3 className="font-semibold text-foreground mb-2">How much do Nepal trekking permits cost?</h3><p className="text-muted-foreground">TIMS costs $10–$20. National park permits cost $30 for most areas. Restricted areas cost more.</p></div>
              <div><h3 className="font-semibold text-foreground mb-2">Can my trekking company arrange permits?</h3><p className="text-muted-foreground">Yes. We handle all paperwork in Kathmandu before your trek — costs are transparently included.</p></div>
            </div>

            {/* Related Resources */}
            <h2 className="font-display text-3xl font-bold text-foreground mt-12">Related Resources</h2>
            <ul className="space-y-2 mb-10 not-prose">
              <li><Link to="/do-you-need-guide-nepal" className="text-accent hover:underline">→ Do You Need a Guide in Nepal? (2026 Rules)</Link></li>
              <li><Link to="/everest-base-camp-cost" className="text-accent hover:underline">→ Everest Base Camp Cost Breakdown</Link></li>
              <li><Link to="/best-time-to-trek-nepal" className="text-accent hover:underline">→ Best Time to Trek in Nepal</Link></li>
              <li><Link to="/altitude-sickness-guide" className="text-accent hover:underline">→ Altitude Sickness Prevention Guide</Link></li>
            </ul>

            {/* CTA */}
            <div className="bg-primary/5 rounded-2xl p-8 text-center not-prose">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Need Help with Permits?</h2>
              <p className="text-muted-foreground mb-6">We handle everything — permits, logistics, and planning. Chat with us today.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/9779818800584?text=Hi!%20I%20have%20questions%20about%20trekking%20permits%20in%20Nepal." target="_blank" rel="noopener noreferrer">
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

export default TrekkingPermitsPage;
