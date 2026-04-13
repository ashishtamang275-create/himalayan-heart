import { Link } from "react-router-dom";
import { MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomepageContact = () => {
  const whatsappNumber = "9779818800584";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in trekking in Nepal. Can you help me plan a custom trip?"
  );

  return (
    <section className="py-20 md:py-24 bg-[hsl(var(--mountain-dark))]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[hsl(var(--snow-white))] mb-4">
            Ready to Plan Your Trek?
          </h2>
          <p className="text-[hsl(var(--snow-white))]/80 text-lg mb-10 max-w-xl mx-auto">
            Tell us your dates, interests, and fitness level — we'll put together
            a custom itinerary for free. No commitment required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get a Free Itinerary
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp to plan your trek"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[hsl(var(--snow-white))]/60 text-sm">
            <a
              href="mailto:ashishtamang12340@gmail.com"
              className="flex items-center gap-2 hover:text-[hsl(var(--snow-white))]/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              ashishtamang12340@gmail.com
            </a>
            <a
              href="tel:+9779818800584"
              className="flex items-center gap-2 hover:text-[hsl(var(--snow-white))]/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +977 9818800584
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageContact;
