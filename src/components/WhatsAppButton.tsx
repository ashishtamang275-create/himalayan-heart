import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "9779818800584";

const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in booking a trek with Go Nepal Treks.");

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142_70%_30%)] hover:bg-[hsl(142_70%_25%)] text-white rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-all duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
