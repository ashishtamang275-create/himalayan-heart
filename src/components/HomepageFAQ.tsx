import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "How much does Everest Base Camp trek cost in 2026?",
    a: "The total cost ranges from $1,200 to $3,500+ depending on your style. Budget trekkers spend $1,200–$1,500, mid-range packages cost $1,800–$2,500, and luxury options run $3,000+. Booking directly with a local guide like Go Nepal Adventure saves 30–50% compared to international agencies.",
    link: "/everest-base-camp-cost",
  },
  {
    q: "Do I legally need a guide to trek in Nepal?",
    a: "Yes. Since April 2023, Nepal's government requires all foreign trekkers to hire a licensed guide. Solo trekking without a guide is no longer permitted. Our guides are government-licensed, English-speaking, and trained in wilderness first aid.",
    link: "/nepal-trekking-guide-requirements",
  },
  {
    q: "Is altitude sickness dangerous on Nepal treks?",
    a: "Altitude sickness (AMS) is a real risk above 2,500m but manageable with proper acclimatization. Our guides carry pulse oximeters, monitor your vitals twice daily above 3,500m, and follow climb-high-sleep-low protocols. We carry emergency oxygen and coordinate helicopter evacuation if needed.",
    link: "/altitude-sickness-guide",
  },
  {
    q: "Which trek is easiest for beginners?",
    a: "Ghorepani Poon Hill (4–5 days, max 3,210m) is the most beginner-friendly popular trek. It requires no high-altitude acclimatization and rewards you with stunning sunrise views over Annapurna and Dhaulagiri. Langtang Valley is another great option.",
    link: "/trek-difficulty-comparison",
  },
  {
    q: "Is it safe to trek in Nepal in 2026?",
    a: "Yes, Nepal is one of the safest trekking destinations when you trek with a licensed guide. Trails are well-established, teahouses are reliable, and our guides carry satellite phones and first aid kits. We maintain a 100% safety record across 150+ trekkers.",
    link: "/safety-and-rescue",
  },
  {
    q: "What is the best time to trek in Nepal?",
    a: "October–November (autumn) offers the clearest skies and most stable weather. March–May (spring) is the second-best season with blooming rhododendrons. Some lower-altitude treks like Poon Hill are possible year-round.",
    link: "/best-time-to-trek-nepal",
  },
  {
    q: "What's the difference between Annapurna and Everest treks?",
    a: "Annapurna Base Camp is shorter (10–12 days), lower altitude (4,130m), and more diverse in scenery. Everest Base Camp is longer (12–14 days), higher (5,364m), and offers close views of the world's tallest peak. Both are non-technical teahouse treks.",
    link: "/annapurna-vs-everest",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const HomepageFAQ = () => (
  <section className="py-20 bg-secondary/30">
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-12">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm">
          Common Questions
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
          Nepal Trekking FAQ
        </h2>
        <p className="text-muted-foreground text-lg">
          Answers to the most common questions from international trekkers planning a Nepal adventure.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`hfaq-${i}`} className="bg-card rounded-lg border px-6">
            <AccordionTrigger className="hover:no-underline font-semibold text-foreground text-left">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <p className="mb-2">{faq.a}</p>
              <Link to={faq.link} className="text-accent hover:underline text-sm font-medium">
                Read full guide →
              </Link>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center mt-10">
        <p className="text-muted-foreground mb-4 text-sm">Have a question not listed here?</p>
        <Button variant="whatsapp" size="lg" asChild>
          <a
            href="https://wa.me/9779818800584?text=Hi!%20I%20have%20a%20question%20about%20trekking%20in%20Nepal."
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5" />
            Ask Indra on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default HomepageFAQ;
