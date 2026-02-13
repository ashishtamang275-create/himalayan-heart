import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "9779818800584";

const tours = [
  { name: "Kathmandu Valley Cultural Tour", duration: "3 Days", description: "Explore UNESCO World Heritage Sites including Pashupatinath, Boudhanath, Swayambhunath, and the ancient Durbar Squares of Kathmandu, Patan, and Bhaktapur." },
  { name: "Lumbini & Chitwan Tour", duration: "5 Days", description: "Visit the birthplace of Buddha in Lumbini and experience jungle safaris in Chitwan National Park with rhinos, elephants, and Bengal tigers." },
  { name: "Pokhara Lakeside & Sarangkot", duration: "2 Days", description: "Relax by Phewa Lake, enjoy sunrise at Sarangkot with panoramic Annapurna views, and explore the vibrant lakeside town of Pokhara." },
  { name: "Nagarkot Sunrise Tour", duration: "1 Day", description: "A short drive from Kathmandu to Nagarkot for spectacular sunrise views over the Himalayan range, including Everest on clear days." },
];

const ToursPage = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Nepal Cultural Tours & Day Trips – Go Nepal Adventures</title>
      <meta name="description" content="Explore Nepal beyond trekking. Cultural tours, heritage sites, wildlife safaris, and day trips from Kathmandu and Pokhara with local expert guides." />
    </Helmet>
    <Navbar />
    <main>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Tours & Cultural Trips</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Discover Nepal's rich cultural heritage, ancient temples, and stunning natural beauty with our curated day trips and multi-day tours. Perfect for adding to your trekking itinerary or as standalone experiences.
          </p>
          <Button variant="whatsapp" size="lg" asChild>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in cultural tours in Nepal.")}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" /> Inquire About Tours
            </a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {tours.map((tour) => (
              <div key={tour.name} className="bg-card rounded-xl p-6 shadow-soft flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">{tour.name}</h2>
                  <p className="text-muted-foreground text-sm mb-3">{tour.description}</p>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground"><Clock className="w-4 h-4 text-accent" />{tour.duration}</span>
                </div>
                <Button variant="mountain" size="lg" asChild className="flex-shrink-0">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in the ${tour.name}.`)}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" /> Inquire
                  </a>
                </Button>
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

export default ToursPage;
