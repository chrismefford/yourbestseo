import { motion } from "framer-motion";
import VideoTestimonial from "./VideoTestimonial";

const testimonials = [
  {
    category: "Speed & Execution",
    items: [
      {
        quote: "They move at a pace I didn't think was possible",
        text: "Traditional agencies take weeks to do what these guys do in days. We had a client emergency where we needed to pivot strategy fast—they turned it around in 72 hours. That kind of responsiveness is unheard of in SEO.",
        author: "Sarah K.",
        role: "Agency Owner",
      },
      {
        quote: "Finally, an agency that doesn't drag their feet",
        text: "We launched 50+ optimized pages in the first month. With our previous vendor, that would've taken 6 months and cost 3X more. The AI-powered workflow isn't hype—it's real, and it shows in the output.",
        author: "Michael T.",
        role: "Marketing Director",
      },
    ],
  },
  {
    category: "Transparency & Communication",
    items: [
      {
        quote: "No more black box SEO",
        text: "I can log in any time and see exactly what they're doing. The dashboard shows every change, every ranking shift, every piece of content. My previous agency sent me a PDF once a month with vague 'progress updates.' This is night and day.",
        author: "Jennifer M.",
        role: "CMO",
      },
      {
        quote: "They actually tell you when something isn't working",
        text: "Most vendors make excuses or hide behind jargon. These guys said, 'That keyword strategy isn't performing—here's what we're changing and why.' That level of honesty builds trust fast.",
        author: "David P.",
        role: "Agency Partner",
      },
    ],
  },
  {
    category: "White-Label Partnership",
    items: [
      {
        quote: "Our clients think we have a 10-person SEO team",
        text: "We're a 6-person shop. We couldn't afford to hire SEO specialists, but now we don't need to. YourBestSeo.com shows up to client calls as our team, uses our branding, and makes us look like heroes. It's seamless.",
        author: "Lisa R.",
        role: "Creative Agency Owner",
      },
      {
        quote: "Added $200K in revenue without hiring anyone",
        text: "We now have 8 clients on SEO retainers—all white-labeled through YourBestSeo.com. That's $15K/month in client billing, $5,400 to them, nearly $10K pure profit. We literally printed money by saying 'yes' instead of 'we don't do SEO.'",
        author: "Tom S.",
        role: "Agency Principal",
      },
    ],
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
            What Partners Value Most
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            "They run like our dream SEO department"
          </h2>
          <p className="text-muted-foreground mt-4">
            Every quote below comes from agencies powered by YourBestSeo.com.
          </p>
        </motion.div>

        <div className="space-y-16">
          {testimonials.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="font-display text-xl font-bold text-primary mb-8">
                {group.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {group.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-6 lg:p-8 rounded-2xl bg-card border border-border/50 transition-all duration-300 cursor-pointer hover:!bg-primary hover:border-primary group"
                  >
                    <p className="font-display text-lg font-semibold mb-4 transition-colors duration-300 group-hover:text-primary-foreground">
                      {item.quote}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6 transition-colors duration-300 group-hover:text-primary-foreground/80">
                      "{item.text}"
                    </p>
                    <div>
                      <p className="font-medium transition-colors duration-300 group-hover:text-primary-foreground">{item.author}</p>
                      <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/70">
                        {item.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Video Testimonial Section */}
          <VideoTestimonial />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
