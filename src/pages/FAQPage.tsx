import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const defaultFaqs = [
  { q: "Do I need prior trekking experience?", a: "Not for all treks. We offer routes for all experience levels, from easy walks like Poon Hill (suitable for beginners) to challenging high-altitude treks like Everest Base Camp. Our team will help you choose the right trek based on your fitness and experience." },
  { q: "What is the best time to trek in Nepal?", a: "The best trekking seasons are spring (March–May) and autumn (September–November). Spring offers blooming rhododendrons and clear skies, while autumn provides the clearest mountain views and stable weather. Some lower-altitude treks are possible year-round." },
  { q: "How fit do I need to be?", a: "A reasonable level of fitness is recommended. You should be comfortable walking 5-7 hours per day on varied terrain. We recommend starting a training program 2-3 months before your trek, focusing on cardio, leg strength, and hiking with a loaded pack." },
  { q: "Is altitude sickness a concern?", a: "Yes, altitude sickness (AMS) is a real risk on high-altitude treks. Our guides are trained to recognize symptoms, carry oximeters for daily health checks, and follow careful acclimatization schedules. We always carry emergency oxygen and have evacuation protocols in place." },
  { q: "What about travel insurance?", a: "Travel insurance covering emergency helicopter evacuation up to 6,000m is mandatory for all our treks. We recommend policies that also cover trip cancellation, medical expenses, and lost baggage. We can recommend insurance providers upon request." },
  { q: "How do I book a trek?", a: "Simply contact us via WhatsApp (+977 9818800584), email (ashishtamang12340@gmail.com), or our inquiry form. We'll discuss your preferences, create a custom itinerary, and guide you through the booking process. A deposit confirms your spot." },
  { q: "Are your guides licensed?", a: "Yes, all our guides are licensed by the Nepal Tourism Board and hold certifications in wilderness first aid. Our lead guide, Indra Tamang, has over 20 years of experience and 1,000+ completed treks." },
  { q: "What is included in the trek price?", a: "Our packages typically include airport transfers, all meals during the trek, accommodation, experienced guide and porter service, national park permits, and TIMS cards. International flights, visa, travel insurance, and personal expenses are excluded." },
  { q: "Can I customize my trek?", a: "Absolutely! We specialize in tailor-made treks. Whether you want to extend your itinerary, add cultural experiences, or combine multiple regions, we'll create a custom plan that fits your preferences and schedule." },
  { q: "How do I pay?", a: "We accept bank transfers, Western Union, and cash payment in Kathmandu. A 20% deposit is required to confirm your booking, with the balance due upon arrival in Kathmandu. All payments are secure and receipted." },
];

const FAQPage = () => {
  const { data: dbFaqs = [] } = useQuery({
    queryKey: ["global-faqs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("trek_faqs")
        .select("*")
        .eq("is_global", true)
        .order("display_order");
      if (error) throw error;
      return data;
    },
  });

  const allFaqs = dbFaqs.length > 0
    ? dbFaqs.map((f) => ({ q: f.question, a: f.answer }))
    : defaultFaqs;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>FAQ | Nepal Trekking Questions Answered – Go Nepal Adventures</title>
        <meta name="description" content="Frequently asked questions about trekking in Nepal. Learn about fitness requirements, altitude sickness, best seasons, booking, and more." />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-32 pb-8">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">Everything you need to know about trekking in Nepal with Go Nepal Adventures.</p>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {allFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border px-6">
                  <AccordionTrigger className="hover:no-underline font-semibold text-foreground text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQPage;
