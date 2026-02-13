import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { Shield, Heart, Mountain, Users, Award, Clock } from "lucide-react";
import guideIndra from "@/assets/guide-indra.jpg";

const values = [
  { icon: Mountain, title: "20+ Years of Experience", description: "Led by Indra Tamang with over 1,000 completed treks across every major Himalayan route. Our experience means your safety and enjoyment are guaranteed." },
  { icon: Users, title: "100% Local Team", description: "Every guide, porter, and support staff is Nepali. We know these mountains because we grew up in them. Our deep local knowledge ensures authentic, insider experiences." },
  { icon: Shield, title: "Safety First", description: "Licensed, insured, and equipped with satellite phones, oximeters, and emergency oxygen. We follow strict acclimatization protocols and maintain a 100% safety record." },
  { icon: Heart, title: "Community Support", description: "We invest directly in the communities we visit. A portion of every trek fee goes to local schools, clean water projects, and trail maintenance in remote villages." },
  { icon: Award, title: "Licensed & Insured", description: "Fully licensed by the Nepal Tourism Board and registered with the Trekking Agencies' Association of Nepal (TAAN). Full liability and evacuation insurance on every trek." },
  { icon: Clock, title: "24/7 Support", description: "From your first inquiry to your last day on the trail, our team is available around the clock via WhatsApp, phone, and email. We're with you every step." },
];

const AboutPage = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>About Us | Go Nepal Adventures – Local Trekking Experts</title>
      <meta name="description" content="Meet the team behind Go Nepal Adventures. 20+ years of Himalayan trekking experience, licensed local guides, and a commitment to safety and community." />
    </Helmet>
    <Navbar />
    <main>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">About Go Nepal Adventures</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a team of passionate Nepali trekking professionals dedicated to sharing the beauty of the Himalayas with travelers from around the world. With over two decades of experience, we craft personalized trekking experiences that are safe, sustainable, and unforgettable.
          </p>
        </div>
      </section>

      {/* Guide Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={guideIndra} alt="Indra Tamang, lead trekking guide" className="w-full h-auto object-cover" loading="lazy" />
            </div>
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Meet Our Lead Guide</span>
              <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-4">Indra Tamang</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With over 20 years of professional trekking experience and more than 1,000 completed treks, Indra Tamang is one of Nepal's most experienced and trusted trekking guides. Born and raised in the Himalayan foothills, Indra's deep knowledge of the mountains, weather patterns, and local cultures ensures every trekker has a safe and enriching experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Indra is fluent in English, Nepali, and Hindi, and holds certifications in wilderness first aid, high-altitude rescue, and eco-tourism. His warm personality and genuine passion for the mountains have earned him glowing reviews from trekkers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">Why Trekkers Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-6 shadow-soft">
                <v.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default AboutPage;
