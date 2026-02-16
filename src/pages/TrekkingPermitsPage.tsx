import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

const TrekkingPermitsPage = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Trekking Permits in Nepal – Guide to TIMS, NP Permits & Fees | Go Nepal Adventure</title>
      <meta name="description" content="Complete guide to Nepal trekking permits: TIMS card, national park fees, restricted area permits. We handle all permits for your trek." />
    </Helmet>
    <Navbar />
    <main>
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trekking Permits in Nepal
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
          <ul className="text-muted-foreground space-y-2">
            <li><strong>Sagarmatha National Park</strong> (Everest region) — $30 USD</li>
            <li><strong>Annapurna Conservation Area</strong> — $30 USD</li>
            <li><strong>Langtang National Park</strong> — $30 USD</li>
            <li><strong>Manaslu Conservation Area</strong> — $30–$100 USD (varies by season)</li>
            <li><strong>Kanchenjunga Conservation Area</strong> — $20 USD</li>
          </ul>

          <h2 className="font-display text-3xl font-bold text-foreground mt-12">Restricted Area Permits</h2>
          <p className="text-muted-foreground leading-relaxed">
            Some regions like Upper Mustang, Upper Dolpo, and Kanchenjunga require special restricted area permits issued through a registered trekking agency. These are more expensive ($500 for 10 days in Upper Mustang) and require a minimum group size of 2.
          </p>

          <h2 className="font-display text-3xl font-bold text-foreground mt-12">We Handle All Your Permits</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you trek with Go Nepal Adventure, we take care of all permit arrangements. No queues, no paperwork stress — just show up and trek. All permit costs are clearly listed in your trek package so there are no surprises.
          </p>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default TrekkingPermitsPage;
