import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import videoTestimonial from "@/assets/video-testimonial.mp4";

const VideoTestimonial = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16"
    >
      <h3 className="font-display text-xl font-bold text-primary mb-8">
        Video Testimonial
      </h3>
      
      <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 max-w-3xl mx-auto">
        <div className="aspect-video relative">
          <video
            ref={videoRef}
            src={videoTestimonial}
            className="w-full h-full object-cover"
            loop
            muted={isMuted}
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          
          {/* Overlay with play button when paused */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-opacity"
              onClick={togglePlay}
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center transition-transform hover:scale-110">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </div>
            </div>
          )}
          
          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex items-center justify-between">
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white ml-0.5" />
                )}
              </button>
              
              <button
                onClick={toggleMute}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Testimonial info */}
        <div className="p-6">
          <p className="font-display text-lg font-semibold mb-2">
            "They transformed our entire digital presence"
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            "Within 3 months of working with YourBestSeo.com, our organic traffic increased by 340%. The ROI has been incredible."
          </p>
          <div>
            <p className="font-medium">Amanda Chen</p>
            <p className="text-sm text-muted-foreground">CEO, TechFlow Solutions</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoTestimonial;
