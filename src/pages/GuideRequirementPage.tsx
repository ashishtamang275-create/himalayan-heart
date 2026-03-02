import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const GuideRequirementPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is a guide mandatory for trekking in Nepal in 2026?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. As of April 2023, Nepal's government made it mandatory for all foreign trekkers to hire a licensed guide for any trekking activity in Nepal. Solo trekking without a guide is no longer permitted." }
      },
      {
        "@type": "Question",
        name: "What happens if I trek without a guide in Nepal?",
        acceptedAnswer: { "@type": "Answer", text: "You will not be able to obtain trekking permits without a licensed guide or agency. Checkpoints on popular routes verify permits and guide credentials. Trekking without a guide may result in fines and being turned back." }
      },
      {
        "@type": "Question",
        name: "How much does a trekking guide cost in Nepal?",
        acceptedAnswer: { "@type": "Answer", text: "A licensed trekking guide in Nepal costs $25–$45 per day depending on the route, season, and experience level. Many local companies include guide fees in their package prices." }
      },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Do You Need a Guide in Nepal? 2026 Government Rules Explained | Go Nepal Adventure</title>
        <meta name="description" content="Nepal now requires all foreign trekkers to hire a licensed guide. Learn about the 2023 government rules, why guides matter for safety, and how to find a good one." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Do You Need a Guide?</span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Do You Need a Guide in Nepal? (2026 Government Rules Explained)
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Nepal has updated its trekking regulations. If you're planning a Himalayan trek in 2026, here's everything you need to know about the mandatory guide requirement, why it exists, and how to find a trustworthy local guide.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">The New Rule: Guides Are Now Mandatory</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            In April 2023, Nepal's Department of Tourism officially announced that <strong>all foreign trekkers must hire a licensed trekking guide</strong> to trek anywhere in Nepal. This rule applies to all trekking regions including Everest, Annapurna, Langtang, Manaslu, and others.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Previously, trekkers could obtain permits independently and trek solo in some regions (such as the Annapurna and Langtang areas). That is no longer the case. The change was driven by safety concerns after several incidents involving solo trekkers who became lost, injured, or stranded without support.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Why Nepal Made Guides Mandatory</h2>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>Safety:</strong> High-altitude trekking involves real risks. Guides are trained in altitude sickness recognition, emergency evacuation procedures, and wilderness first aid.</li>
            <li><strong>Navigation:</strong> Trails in remote areas can be poorly marked, especially during off-season or after weather events.</li>
            <li><strong>Cultural bridge:</strong> Local guides speak the language, understand customs, and can facilitate meaningful interactions with communities along the trail.</li>
            <li><strong>Economic support:</strong> The rule ensures that tourism revenue reaches local communities and supports livelihoods in mountain regions.</li>
            <li><strong>Environmental protection:</strong> Guides help enforce Leave No Trace principles and proper waste management on trails.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">What Makes a Guide "Licensed"?</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A licensed trekking guide in Nepal holds a certification from the <strong>Nepal Academy of Tourism and Hotel Management (NATHM)</strong> or equivalent recognized institution. They must also be registered with a licensed trekking agency. Key credentials include:
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li>Government-issued trekking guide license</li>
            <li>First aid and wilderness rescue training</li>
            <li>Knowledge of local geography, culture, and flora/fauna</li>
            <li>English language proficiency (many guides also speak other languages)</li>
            <li>Registration with a government-licensed trekking company</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">How Much Does a Guide Cost?</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Guide Type</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Daily Rate</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Best For</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="border border-border px-4 py-2">Basic Trekking Guide</td><td className="border border-border px-4 py-2">$25–$30/day</td><td className="border border-border px-4 py-2">Easy to moderate treks (Poon Hill, Langtang)</td></tr>
                <tr><td className="border border-border px-4 py-2">Experienced Guide</td><td className="border border-border px-4 py-2">$30–$40/day</td><td className="border border-border px-4 py-2">EBC, ABC, and longer treks</td></tr>
                <tr><td className="border border-border px-4 py-2">Senior/Specialist Guide</td><td className="border border-border px-4 py-2">$40–$55/day</td><td className="border border-border px-4 py-2">Restricted areas (Manaslu, Upper Mustang, Kanchenjunga)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Most trekking packages include guide fees, making it more affordable than hiring independently. When you book with Go Nepal Adventure, your guide is included in the package price.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Guide vs. Porter: What's the Difference?</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A <strong>guide</strong> leads the trek, manages logistics, handles permits, and provides information about the route and culture. A <strong>porter</strong> carries your heavy luggage (up to 25–30 kg). Most trekkers hire both for the best experience — the guide navigates while the porter allows you to trek comfortably with just a daypack.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">How to Choose a Good Trekking Guide</h2>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li>Verify their license through the trekking agency</li>
            <li>Check online reviews and testimonials</li>
            <li>Ask about their experience on your specific route</li>
            <li>Ensure they carry a first aid kit and know emergency procedures</li>
            <li>Confirm they speak your language fluently</li>
            <li>Book through a licensed, locally-owned company for accountability</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">What Happens If You Trek Without a Guide?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Without a guide, you will not be able to obtain the required trekking permits. Checkpoints along major routes verify both permits and guide credentials. If caught trekking without a licensed guide, you may be fined and turned back. More importantly, you put yourself at serious risk in remote mountain environments where rescue can take days.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Related Resources</h2>
          <ul className="space-y-2 mb-10">
            <li><Link to="/trekking-permits-nepal" className="text-accent hover:underline">→ Trekking Permits in Nepal (Complete Guide)</Link></li>
            <li><Link to="/about-our-guides" className="text-accent hover:underline">→ Meet Our Guides</Link></li>
            <li><Link to="/everest-base-camp-cost" className="text-accent hover:underline">→ Everest Base Camp Trek Cost Breakdown</Link></li>
            <li><Link to="/altitude-sickness-guide" className="text-accent hover:underline">→ Altitude Sickness Prevention Guide</Link></li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-10">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-10">
            <div><h3 className="font-semibold text-foreground mb-2">Is a guide mandatory for trekking in Nepal in 2026?</h3><p className="text-muted-foreground">Yes. As of April 2023, Nepal's government made it mandatory for all foreign trekkers to hire a licensed trekking guide.</p></div>
            <div><h3 className="font-semibold text-foreground mb-2">What happens if I trek without a guide?</h3><p className="text-muted-foreground">You won't be able to get permits and may be fined and turned back at checkpoints.</p></div>
            <div><h3 className="font-semibold text-foreground mb-2">How much does a trekking guide cost?</h3><p className="text-muted-foreground">$25–$45 per day depending on route and experience. Most packages include guide fees.</p></div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Trek with an Experienced Local Guide</h2>
            <p className="text-muted-foreground mb-6">Our licensed guides have years of Himalayan experience. Get a personalized quote today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/9779818800584?text=Hi!%20I%20need%20a%20guide%20for%20trekking%20in%20Nepal." target="_blank" rel="noopener noreferrer">
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

export default GuideRequirementPage;
