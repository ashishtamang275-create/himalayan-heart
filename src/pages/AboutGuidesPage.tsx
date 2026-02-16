import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { Award, Languages, Mountain, CheckCircle, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import guideIndra from "@/assets/guide-indra.jpg";

const WHATSAPP_NUMBER = "9779818800584";
const EMAIL = "ashishtamang12340@gmail.com";

const AboutGuidesPage = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to learn more about trekking with your guides.")}`;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Meet Our Guides | Go Nepal Adventure – Experienced Local Trekking Guides</title>
        <meta name="description" content="Meet Indra Tamang and the experienced local guides at Go Nepal Adventure. 20+ years guiding trekkers safely through the Himalayas." />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Your Trekking Guides
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Go Nepal Adventure, we believe the guide makes the trek. Our team of experienced, 
              NMA-certified Nepali guides bring decades of Himalayan expertise, cultural knowledge, 
              and a deep commitment to your safety and enjoyment.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-card rounded-2xl overflow-hidden shadow-elevated">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-full min-h-[400px]">
                  <img src={guideIndra} alt="Indra Tamang – Senior Trek Leader" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-peak/80 via-peak/20 to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="p-8 lg:p-10">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-1">Indra Tamang</h2>
                  <p className="text-foreground/70 text-lg font-semibold mb-6">Senior Trek Leader & Founder</p>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    Born and raised in the foothills of the Himalayas, Indra has spent over two decades guiding 
                    trekkers through Nepal's most breathtaking trails. His deep knowledge of local culture, wildlife, 
                    and mountain safety has earned him the trust of thousands of adventurers from around the world.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-secondary/50 rounded-xl p-4 text-center">
                      <div className="font-display text-3xl font-bold text-foreground">20+</div>
                      <div className="text-muted-foreground text-sm">Years Experience</div>
                    </div>
                    <div className="bg-secondary/50 rounded-xl p-4 text-center">
                      <div className="font-display text-3xl font-bold text-foreground">1000+</div>
                      <div className="text-muted-foreground text-sm">Treks Completed</div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3"><Languages className="w-5 h-5 text-accent" /><span className="text-muted-foreground">English, Nepali, Hindi, Tibetan</span></div>
                    <div className="flex items-center gap-3"><Mountain className="w-5 h-5 text-accent" /><span className="text-muted-foreground">Everest, Annapurna, Langtang & all major regions</span></div>
                    <div className="flex items-center gap-3"><Award className="w-5 h-5 text-accent" /><span className="text-muted-foreground">NMA Certified, Wilderness First Responder</span></div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="whatsapp" className="w-full"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp</Button>
                    </a>
                    <a href={`mailto:${EMAIL}`} className="flex-1">
                      <Button variant="mountain" className="w-full"><Mail className="w-5 h-5 mr-2" />Email</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">What Makes Our Guides Different</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Government licensed and NMA certified",
                "Wilderness First Aid & CPR trained",
                "Fluent in English and multiple local languages",
                "Deep knowledge of flora, fauna and culture",
                "Expert altitude sickness management",
                "Carry satellite phone & first aid on every trek",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg">
                  <CheckCircle className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
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
};

export default AboutGuidesPage;
