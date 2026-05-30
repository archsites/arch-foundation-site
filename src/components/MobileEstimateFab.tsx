import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, X, MessageSquarePlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Interior Remodel",
  "Exterior Remodel",
  "Additions",
  "Decks & Patios",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Basement Finishing",
  "General Contracting",
];

const MobileEstimateFab = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 500));
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      toast({ title: "Request received", description: "A member of the Arch GC team will be in touch shortly." });
      setOpen(false);
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:hidden">
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Morphing container */}
      <div
        className={`fixed z-[61] bg-primary text-primary-foreground shadow-2xl overflow-hidden transition-all duration-300 ease-out ${
          open
            ? "bottom-4 right-4 left-4 rounded-2xl"
            : "bottom-4 right-4 rounded-full"
        }`}
        style={{
          boxShadow: "0 10px 30px -5px rgba(0,0,0,0.35)",
        }}
      >
        {!open ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-5 py-3.5 text-sm font-semibold w-full"
            aria-label="Get an Estimate"
          >
            <MessageSquarePlus className="w-5 h-5" />
            Get an Estimate
          </button>
        ) : (
          <div className="bg-card text-card-foreground rounded-2xl animate-fade-in">
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
              <div>
                <span className="block text-primary font-semibold text-[10px] uppercase tracking-widest">
                  Start Your Project
                </span>
                <h2 className="text-base font-heading font-bold">Request a Free Estimate</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 -mr-2 rounded-full hover:bg-muted"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-2.5 px-4 pb-4">
              <Input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="h-10" />
              <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="h-10" />
              <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="h-10" />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Project Type</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about the project..." required rows={3} />
              <Button type="submit" variant="default" size="default" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : (<>Send Request<Send className="w-4 h-4" /></>)}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileEstimateFab;
