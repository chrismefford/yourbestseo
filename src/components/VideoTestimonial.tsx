import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import testimonialHeadshot from "@/assets/testimonial-headshot.jpg";

const VideoTestimonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16"
    >
      <h3 className="font-display text-xl font-bold text-primary mb-8">
        Featured Testimonial
      </h3>
      
      <div className="rounded-2xl overflow-hidden bg-card border border-border/50 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-2/5 relative">
            <img
              src={testimonialHeadshot}
              alt="Amanda Chen, CEO of TechFlow Solutions"
              className="w-full h-64 md:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/80 via-transparent to-transparent" />
          </div>
          
          {/* Content */}
          <div className="md:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
            <Quote className="w-10 h-10 text-primary/30 mb-4" />
            
            <p className="font-display text-xl lg:text-2xl font-semibold mb-4">
              "They transformed our entire digital presence"
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              "Within 3 months of working with YourBestSeo.com, our organic traffic increased by 340%. The ROI has been incredible. Their team feels like an extension of our own."
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                <img
                  src={testimonialHeadshot}
                  alt="Amanda Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Amanda Chen</p>
                <p className="text-sm text-muted-foreground">CEO, TechFlow Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoTestimonial;
