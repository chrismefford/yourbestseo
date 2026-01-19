import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const EMAIL_ADDRESS = "chris@yourbestseo.com";

const ContactSection = () => {
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
            Support Desk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Talk directly with the partner desk.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We answer within one business day. Send the brief, the prospect intel, or the client fire drill. We'll come back with coverage recommendations, margins, and a proposed rollout so you can move quickly with confidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
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
              For detailed briefs + attachments
            </p>
          </a>

          <a
            href="tel:+16157726641"
            className="group p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-500 text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold mb-2">Direct line</h3>
            <p className="text-primary font-medium mb-2">(615) 772-6641</p>
            <p className="text-sm text-muted-foreground">
              Live call or text, 9a-6p PT
            </p>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="hero"
            size="xl"
            className="gap-2"
            onClick={async () => {
              // In many embedded previews, `mailto:` can be blocked by the iframe.
              // We'll try opening it, and also copy the email as a reliable fallback.
              const mailto = `mailto:${EMAIL_ADDRESS}`;

              try {
                // Prefer _top to escape iframe restrictions when possible.
                window.open(mailto, "_top");
              } catch {
                // ignore
              }

              try {
                await navigator.clipboard.writeText(EMAIL_ADDRESS);
                toast.success("Email copied", {
                  description: "If your email app didn’t open, paste it into your message.",
                });
              } catch {
                toast("Email address", {
                  description: EMAIL_ADDRESS,
                });
              }
            }}
          >
            Send Us a Message
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
