import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

const VisaInfoPage = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Nepal Visa Guide 2026 – Fees, Process & Tips</title>
      <meta name="description" content="Nepal visa on arrival: fees ($30–$100), documents needed & process explained. Updated 2026 guide from a local trekking company. Apply hassle-free." />
    </Helmet>
    <Navbar />
    <main>
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nepal Visa Information
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most nationalities can get a visa on arrival at Tribhuvan International Airport in Kathmandu. Here's everything you need to know before you arrive.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2 className="font-display text-3xl font-bold text-foreground">Visa on Arrival</h2>
          <p className="text-muted-foreground leading-relaxed">
            Citizens of most countries can obtain a tourist visa on arrival at Kathmandu's Tribhuvan International Airport or at land border crossings. The process is straightforward — fill in the arrival form at the automated kiosk, pay the fee, and get your visa stamped.
          </p>

          <h2 className="font-display text-3xl font-bold text-foreground mt-12">Visa Fees</h2>
          <ul className="text-muted-foreground space-y-2">
            <li><strong>15 days:</strong> $30 USD</li>
            <li><strong>30 days:</strong> $50 USD</li>
            <li><strong>90 days:</strong> $125 USD</li>
          </ul>
          <p className="text-muted-foreground">Payment accepted in major currencies (USD, EUR, GBP) or by card.</p>

          <h2 className="font-display text-3xl font-bold text-foreground mt-12">Required Documents</h2>
          <ul className="text-muted-foreground space-y-2">
            <li>Valid passport (at least 6 months validity)</li>
            <li>One passport-sized photo (you can also use the kiosk camera)</li>
            <li>Visa fee in cash or card</li>
            <li>Completed arrival form (available at kiosks or online)</li>
          </ul>

          <h2 className="font-display text-3xl font-bold text-foreground mt-12">Visa Extensions</h2>
          <p className="text-muted-foreground leading-relaxed">
            Tourist visas can be extended up to a maximum of 150 days per calendar year at the Department of Immigration in Kathmandu or Pokhara. The fee is $3 per day for extensions.
          </p>

          <h2 className="font-display text-3xl font-bold text-foreground mt-12">Free Visa Countries</h2>
          <p className="text-muted-foreground leading-relaxed">
            Citizens of SAARC countries (India, Bangladesh, Sri Lanka, Bhutan, Maldives, Pakistan) do not need a visa to enter Nepal. Chinese citizens receive a free visa on arrival.
          </p>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default VisaInfoPage;
