import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "9779818800584";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in booking a trek with Go Nepal Adventure.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {showTooltip && (
        <div className="bg-card text-foreground text-sm font-medium px-4 py-2 rounded-lg shadow-elevated whitespace-nowrap animate-fade-in">
          Chat with a local guide now
        </div>
      )}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[hsl(142_70%_30%)] hover:bg-[hsl(142_70%_25%)] text-white rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-all duration-300"
        aria-label="Contact us on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
