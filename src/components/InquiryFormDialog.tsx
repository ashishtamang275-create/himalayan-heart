import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const trekOptions = [
  "Everest Base Camp Trek",
  "Annapurna Base Camp Trek",
  "Annapurna Circuit Trek",
  "Langtang Valley Trek",
  "Manaslu Circuit Trek",
  "Upper Mustang Trek",
  "Ghorepani Poon Hill Trek",
  "Mardi Himal Trek",
  "Kanchenjunga Base Camp Trek",
  "Gokyo Lakes Trek",
  "Custom Trek",
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

interface InquiryFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prefilledTrek?: string;
}

const InquiryFormDialog = ({ open, onOpenChange, prefilledTrek }: InquiryFormDialogProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nationality: "",
    trek: prefilledTrek || "",
    planned_month: "",
    groupSize: "",
    experience_level: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({ title: "Please fill in your name and email.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('submit-contact', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          nationality: formData.nationality.trim() || null,
          trek: formData.trek || null,
          planned_month: formData.planned_month || null,
          groupSize: formData.groupSize.trim() || null,
          experience_level: formData.experience_level || null,
          message: formData.message.trim() || "Quick inquiry from website",
        },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast({ title: "Inquiry sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", nationality: "", trek: prefilledTrek || "", planned_month: "", groupSize: "", experience_level: "", message: "" });
      onOpenChange(false);
    } catch {
      toast({ title: "Failed to send inquiry", description: "Please try again or contact us via WhatsApp.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Quick Inquiry</DialogTitle>
          <DialogDescription>Fill out this form and we'll plan your perfect trek within 24 hours.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="iq-name" className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
              <Input id="iq-name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className="h-10" required />
            </div>
            <div>
              <label htmlFor="iq-email" className="block text-sm font-medium text-foreground mb-1">Email *</label>
              <Input id="iq-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" className="h-10" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="iq-nationality" className="block text-sm font-medium text-foreground mb-1">Nationality</label>
              <Input id="iq-nationality" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="e.g., American" className="h-10" />
            </div>
            <div>
              <label htmlFor="iq-trek" className="block text-sm font-medium text-foreground mb-1">Trek Interested In</label>
              <select id="iq-trek" name="trek" value={formData.trek} onChange={handleChange} className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm">
                <option value="">Select a trek</option>
                {trekOptions.map((t) => (<option key={t} value={t}>{t}</option>))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="iq-month" className="block text-sm font-medium text-foreground mb-1">Planned Month</label>
              <select id="iq-month" name="planned_month" value={formData.planned_month} onChange={handleChange} className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm">
                <option value="">Month</option>
                {months.map((m) => (<option key={m} value={m}>{m}</option>))}
              </select>
            </div>
            <div>
              <label htmlFor="iq-group" className="block text-sm font-medium text-foreground mb-1">No. of People</label>
              <Input id="iq-group" name="groupSize" value={formData.groupSize} onChange={handleChange} placeholder="e.g., 2" className="h-10" />
            </div>
            <div>
              <label htmlFor="iq-exp" className="block text-sm font-medium text-foreground mb-1">Experience</label>
              <select id="iq-exp" name="experience_level" value={formData.experience_level} onChange={handleChange} className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm">
                <option value="">Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Moderate">Moderate</option>
                <option value="Experienced">Experienced</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="iq-msg" className="block text-sm font-medium text-foreground mb-1">Message</label>
            <Textarea id="iq-msg" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your plans..." rows={3} />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5" /> Send Inquiry</>}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryFormDialog;
