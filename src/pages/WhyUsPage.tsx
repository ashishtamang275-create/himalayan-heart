import { Award, DollarSign, MapPin, Shield, Settings, MessageCircle, Heart, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-mountains.jpg";
import guideIndra from "@/assets/guide-indra.jpg";

const reasons = [
  {
    icon: Award,
    title: "20+ Years of Experience",
    description: "Led by our expert guide Indra Tamang, who has completed 1000+ treks across Nepal. His expertise ensures safe, memorable adventures through the Himalayas.",
  },
  {
    icon: DollarSign,
    title: "Best Price Guarantee",
    description: "No hidden fees. Transparent costs. Final pricing provided directly through WhatsApp or Email. What you see is what you pay.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "100% Nepali team with deep knowledge of all trekking regions, villages, cultures, and Himalayan routes. We know Nepal like the back of our hand.",
  },
  {
    icon: Shield,
    title: "Safe & Comfortable Treks",
    description: "We prioritize safety, proper acclimatization, and reliable accommodations. Your well-being is our top priority on every trek.",
  },
  {
    icon: Settings,
    title: "Customized Trek Plans",
    description: "Every trek can be customized for beginners, families, or experienced trekkers. Tell us your preferences, and we'll create your perfect adventure.",
  },
  {
    icon: MessageCircle,
    title: "Fast Contact & Support",
    description: "Quick responses for all inquiries. Reach us anytime via WhatsApp or Email for instant support before, during, and after your trek.",
  },
  {
    icon: Heart,
    title: "Trusted by Trekkers Worldwide",
    description: "We provide an authentic, friendly, and professional trekking experience. Our trekkers become lifelong friends and often return for more adventures.",
  },
];

const WhyUsPage = () => {
  const whatsappNumber = "+9779818800584";
  const email = "ashishtamang12340@gmail.com";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/\s/g, "")}`, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Why Choose Go Nepal Adventure – Direct Booking, No Agency Fees</title>
        <meta name="description" content="Book direct with a licensed Nepal trekking guide. No agency fees, 20+ years experience, customised itineraries & 24/7 support. Save 30–50% on your Himalayan trek." />
      </Helmet>
      <Navbar />
      <main>
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-snow/10 backdrop-blur-sm text-snow text-sm font-medium mb-4">
              Your Trusted Partner
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-snow mb-4">
              Why Choose Us
            </h1>
            <p className="text-xl text-snow/80">
              Discover why thousands of trekkers trust Go Nepal Treks for their Himalayan adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Guide Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-card rounded-2xl p-8 shadow-soft">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-primary/20">
                <img
                  src={guideIndra}
                  alt="Indra Tamang - Lead Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Meet Indra Tamang
                </h2>
                <p className="text-accent font-medium mb-4">Lead Guide & Founder</p>
                <p className="text-muted-foreground leading-relaxed">
                  With over 20 years of trekking experience and 1000+ successful expeditions, Indra Tamang leads our team with passion and expertise. Born and raised in the Himalayan foothills, he knows every trail, village, and mountain like home. His dedication to safety, authentic experiences, and genuine hospitality has made Go Nepal Treks a trusted name among trekkers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We are more than just a trekking company. We are your partners in adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us directly for quick responses and personalized trek planning.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                +977 9818800584
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleEmailClick}
                className="w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 mr-2" />
                {email}
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              We typically respond within a few hours!
            </p>
          </div>
        </div>
      </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WhyUsPage;
