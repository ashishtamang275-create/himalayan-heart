import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { MessageCircle, DollarSign, Shield, CheckCircle } from "lucide-react";

const WHATSAPP_NUMBER = "9779818800584";

const costItems = [
  { label: "Trekking Permits (TIMS, NP Entry)", range: "$30 – $150", note: "Varies by region" },
  { label: "Licensed Guide (per day)", range: "$25 – $35", note: "English-speaking, certified" },
  { label: "Porter (per day, optional)", range: "$20 – $25", note: "Carries up to 25 kg" },
  { label: "Tea-house Lodging (per night)", range: "$5 – $15", note: "Twin-sharing, basic to comfortable" },
  { label: "Meals (per day)", range: "$15 – $25", note: "Breakfast, lunch & dinner" },
  { label: "Domestic Flights (if applicable)", range: "$150 – $350", note: "Lukla, Jomsom, etc." },
  { label: "Travel Insurance (recommended)", range: "$50 – $100", note: "Helicopter rescue coverage" },
];

const TrekkingCostBreakdownPage = () => {
  const whatsappMsg = encodeURIComponent("Hi! I'd like to receive the 2026 Cost Transparency Guide for Nepal trekking.");

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Nepal Trekking Cost Breakdown 2026 – Where Does Your Money Go?</title>
        <meta name="description" content="Transparent pricing for Nepal treks in 2026. See exactly what permits, guides, food, and lodging cost. No hidden fees — book directly with a licensed local guide." />
        <link rel="canonical" href="https://ashish-tamang.com.np/trekking-cost-breakdown" />
      </Helmet>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <DollarSign className="w-4 h-4" /> 2026 Price Transparency
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Where Does Your Trekking Money Go?
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We believe in 100% transparency. Here's a real breakdown of what it costs to trek in Nepal — no hidden fees, no agency markups.
            </p>
          </div>

          {/* Cost Table */}
          <section className="mb-12">
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-primary text-primary-foreground text-sm font-semibold">
                <div className="p-3 md:p-4">Cost Item</div>
                <div className="p-3 md:p-4 text-center">Typical Range</div>
                <div className="p-3 md:p-4 hidden sm:block">Note</div>
              </div>
              {costItems.map((item, i) => (
                <div key={i} className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}>
                  <div className="p-3 md:p-4 font-medium text-foreground">{item.label}</div>
                  <div className="p-3 md:p-4 text-center text-accent font-semibold">{item.range}</div>
                  <div className="p-3 md:p-4 text-muted-foreground hidden sm:block">{item.note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Book Direct */}
          <section className="bg-muted/40 rounded-xl p-6 md:p-8 mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-accent" /> Why Book Direct?
            </h2>
            <ul className="space-y-3">
              {[
                "No middleman commissions — savings go directly to your trip quality",
                "Your guide is your planner — personalized itineraries, not cookie-cutter packages",
                "100% of your money stays in Nepal's local economy",
                "Transparent invoicing — you see every rupee spent",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Want a Personalized Cost Estimate?
            </h2>
            <p className="text-muted-foreground">
              Tell us your trek, dates, and group size — we'll send a detailed, no-obligation quote within 24 hours.
            </p>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" /> Get My Custom Quote on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TrekkingCostBreakdownPage;
