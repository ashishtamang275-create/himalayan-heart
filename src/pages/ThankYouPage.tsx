import { Helmet } from "react-helmet-async";
import { CheckCircle, MessageCircle, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ThankYouPage = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | Ashish Tamang Treks</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center bg-secondary py-20 px-4">
        <div className="max-w-xl w-full text-center space-y-8">
          <div className="mx-auto w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Thank You!
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              We've received your inquiry about your Himalayan trek adventure. 
              Our lead guide <strong className="text-foreground">Indra</strong> will 
              personally reach out to you via <strong className="text-foreground">WhatsApp</strong> or{" "}
              <strong className="text-foreground">Email</strong> within{" "}
              <strong className="text-foreground">24 hours</strong>.
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/treks">
                Explore More Treks
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ThankYouPage;
