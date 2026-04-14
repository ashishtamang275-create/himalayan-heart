import { Helmet } from "react-helmet-async";
import { CheckCircle, MessageCircle, Mail, ArrowLeft, FileText, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "9779818800584";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Indra! I just submitted an inquiry on Go Nepal Adventure and would love to start planning my trek."
);
const GEAR_CHECKLIST_URL = "/trekking-gear-checklist.pdf";

const ThankYouPage = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | Go Nepal Adventure</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center bg-secondary py-20 px-4">
        <div className="max-w-xl w-full text-center space-y-8">
          <div className="mx-auto w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              You're one step closer to the Himalayas! 🏔️
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              We've received your inquiry. Our lead guide{" "}
              <strong className="text-foreground">Indra</strong> will personally
              review your details and reach out via{" "}
              <strong className="text-foreground">WhatsApp</strong> or{" "}
              <strong className="text-foreground">Email</strong> within{" "}
              <strong className="text-foreground">24 hours</strong> to start
              planning your custom itinerary.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-accent" />
              <span className="text-sm">WhatsApp</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-sm">Email</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 pt-4">
            <Button asChild variant="whatsapp" size="lg" className="w-full max-w-sm">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                💬 Chat with Indra on WhatsApp Now
              </a>
            </Button>
            <Button asChild variant="hero" size="lg" className="w-full max-w-sm">
              <a href={GEAR_CHECKLIST_URL} target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5" />
                📄 Download Free Trekking Gear Checklist
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full max-w-sm">
              <Link to="/treks">
                Explore More Treks
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Social Follow */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">Follow the Journey:</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/gonepaltrek/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@gonepaltrek"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Subscribe on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ThankYouPage;
