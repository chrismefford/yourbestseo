import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquareText, CalendarCheck, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          message: formData.message.trim(),
        },
      });

      if (error) {
        console.error("Error sending contact form:", error);
        throw new Error(error.message || "Failed to send message");
      }

      toast.success("Message sent!", {
        description: "We'll get back to you within one business day.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsOpen(false);
    } catch (error: any) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message", {
        description: "Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 lg:py-32 relative" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
            Your next step
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get clarity on your AI visibility.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start with the free Local Search Opportunity Check, then request help with your findings. Or contact us directly about getting found on ChatGPT, Perplexity, Claude, and Google Maps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <a
            href="mailto:chris@yourbestseo.com"
            className="group p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-500 text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold mb-2">Email</h3>
            <p className="text-primary font-medium mb-2">chris@yourbestseo.com</p>
            <p className="text-sm text-muted-foreground">
              For business questions + attachments
            </p>
          </a>

          <div className="p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-500 text-center">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold mb-2">Direct line</h3>
            <a href="tel:+16199036599" className="text-primary font-medium hover:underline">
              (619) 903-6599
            </a>
            <p className="text-sm text-muted-foreground mt-2">Call Chris directly</p>
            <a
              href="sms:+16199036599"
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-primary hover:underline"
            >
              <MessageSquareText className="w-4 h-4" />
              Or send a text
            </a>
          </div>

          <a
            href="/book"
            className="group p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-500 text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <CalendarCheck className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold mb-2">Book a call</h3>
            <p className="text-primary font-medium mb-2">Pick a time that works</p>
            <p className="text-sm text-muted-foreground">
              Free 30-minute phone or Zoom call
            </p>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12"
        >
          <Button variant="hero" size="xl" className="h-auto min-h-14 whitespace-normal text-center py-3" asChild><a href="/free-audit">Check My AI Search Readiness<ArrowRight className="w-5 h-5 ml-2" /></a></Button>
          <Button
            variant="outline"
            size="xl"
            className="gap-2"
            onClick={() => setIsOpen(true)}
          >
            Send Us a Message
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Send Us a Message</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you within one business day.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(619) 903-6599"
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or question..."
                rows={4}
                required
                disabled={isSubmitting}
              />
            </div>
            <Button
              type="submit"
              variant="hero"
              className="w-full gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
