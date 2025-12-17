import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "9779851234567";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in booking a trek with Go Nepal Treks.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_40%)] text-snow rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-all duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
