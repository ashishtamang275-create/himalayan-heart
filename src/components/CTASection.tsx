import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, Clock, Users, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const whatsappNumber = "9779818800584";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in booking a trek with Go Nepal Adventure. Can you help me plan my adventure?");

  return (
    <section className="py-24 bg-mountain-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-snow mb-6">
            Ready to{" "}
            <span className="text-gradient">Trek in Nepal?</span>
          </h2>
          <p className="text-snow/90 text-xl mb-6 max-w-2xl mx-auto">
            Let our experienced local guides plan the perfect Himalayan adventure for you. No hidden fees, just unforgettable memories.
          </p>

          {/* Urgency triggers */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-snow/70 text-sm">
            <span className="flex items-center gap-2 bg-snow/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CalendarCheck className="w-4 h-4" />
              Limited Seasonal Availability
            </span>
            <span className="flex items-center gap-2 bg-snow/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-4 h-4" />
              Small Groups — Max 6 People
            </span>
            <span className="flex items-center gap-2 bg-snow/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              Response within 2 Hours
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Plan My Trek — It's Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book your trek now — chat with Indra on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Indra on WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-16 text-snow/50">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
              </svg>
              <span>No Agency Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <span>Free Trek Planning Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
