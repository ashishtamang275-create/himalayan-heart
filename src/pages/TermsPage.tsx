import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const TermsPage = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Terms of Service | Go Nepal Adventures</title>
      <meta name="description" content="Read the terms and conditions for booking treks and tours with Go Nepal Adventures." />
    </Helmet>
    <Navbar />
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_li]:mb-2">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <p>Last updated: February 2026</p>
        <h2>Booking & Payment</h2>
        <p>A 20% deposit is required to confirm your booking. The remaining balance is due upon arrival in Kathmandu. We accept bank transfers, Western Union, and cash payments.</p>
        <h2>Cancellation Policy</h2>
        <p>Cancellations made 30+ days before the trek start date receive a full refund minus a $50 processing fee. Cancellations within 15-30 days receive a 50% refund. No refund for cancellations within 14 days.</p>
        <h2>Travel Insurance</h2>
        <p>Travel insurance covering emergency helicopter evacuation up to 6,000m is mandatory for all participants. Proof of insurance must be provided before departure.</p>
        <h2>Liability</h2>
        <p>Go Nepal Adventures takes all reasonable precautions for your safety. However, trekking in the Himalayas carries inherent risks. Participants acknowledge and accept these risks by joining our treks.</p>
        <h2>Contact</h2>
        <p>For questions about these terms, contact us at ashishtamang12340@gmail.com.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsPage;
