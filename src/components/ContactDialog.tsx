import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trekName?: string;
}

const WHATSAPP_NUMBER = "+977 9818800584";
const EMAIL = "ashishtamang12340@gmail.com";

const ContactDialog = ({ open, onOpenChange, trekName }: ContactDialogProps) => {
  const whatsappMessage = trekName 
    ? `Hi! I'm interested in the ${trekName}. Please provide more details and pricing.`
    : "Hi! I'm interested in trekking in Nepal. Please provide more details.";
  
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\s+/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
  
  const emailSubject = trekName 
    ? `Inquiry about ${trekName}`
    : "Trekking Inquiry";
  const emailBody = trekName
    ? `Hi,\n\nI'm interested in the ${trekName}. Please provide more details and pricing information.\n\nThank you!`
    : `Hi,\n\nI'm interested in trekking in Nepal. Please provide more details.\n\nThank you!`;
  const emailLink = `mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {trekName ? `Interested in ${trekName}?` : "Contact Us"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Get in touch with us for pricing details and to book your adventure!
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          {/* WhatsApp */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button variant="whatsapp" className="w-full justify-start gap-3 h-14">
              <MessageCircle className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm opacity-90">{WHATSAPP_NUMBER}</div>
              </div>
            </Button>
          </a>

          {/* Email */}
          <a href={emailLink} className="block">
            <Button variant="mountain" className="w-full justify-start gap-3 h-14">
              <Mail className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">Email Us</div>
                <div className="text-sm opacity-90">{EMAIL}</div>
              </div>
            </Button>
          </a>

          {/* Phone Call */}
          <a href={`tel:${WHATSAPP_NUMBER.replace(/\s+/g, "")}`} className="block">
            <Button variant="outline" className="w-full justify-start gap-3 h-14">
              <Phone className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">Call Us</div>
                <div className="text-sm opacity-90">{WHATSAPP_NUMBER}</div>
              </div>
            </Button>
          </a>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Contact us for pricing details and custom itineraries
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
