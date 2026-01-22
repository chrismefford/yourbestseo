import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Users, MapPin } from "lucide-react";

const names = [
  "Sarah", "Michael", "Jessica", "David", "Emily", "James", "Ashley", "Daniel",
  "Amanda", "Christopher", "Jennifer", "Matthew", "Elizabeth", "Joshua", "Megan"
];

const cities = [
  "San Diego", "Los Angeles", "Denver", "Phoenix", "Seattle", "Portland",
  "Austin", "Dallas", "Miami", "Chicago", "New York", "Boston", "Atlanta"
];

const actions = [
  "just requested a free SEO audit",
  "started their SEO campaign",
  "just signed up for a consultation",
  "just booked a strategy call"
];

const SocialProofNotifications = () => {
  const [notification, setNotification] = useState<{
    name: string;
    city: string;
    action: string;
    timeAgo: string;
  } | null>(null);
  const [viewerCount, setViewerCount] = useState(0);

  // Generate random viewer count
  useEffect(() => {
    const updateViewers = () => {
      setViewerCount(Math.floor(Math.random() * 8) + 3); // 3-10 viewers
    };
    updateViewers();
    const interval = setInterval(updateViewers, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  // Show notifications periodically
  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const timeAgo = `${Math.floor(Math.random() * 5) + 1} minutes ago`;

      setNotification({ name: randomName, city: randomCity, action: randomAction, timeAgo });

      // Hide after 5 seconds
      setTimeout(() => setNotification(null), 5000);
    };

    // Show first notification after 8 seconds
    const firstTimeout = setTimeout(showNotification, 8000);
    
    // Then show every 25-45 seconds
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 20000 + 25000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Viewer count badge - top right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="fixed top-24 right-4 z-50 hidden md:flex items-center gap-2 bg-background/95 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-lg"
      >
        <div className="relative">
          <Users className="w-4 h-4 text-primary" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </div>
        <span className="text-sm font-medium">
          <span className="text-primary">{viewerCount}</span> viewing now
        </span>
      </motion.div>

      {/* Activity notification - bottom left */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, x: -100, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed bottom-24 left-4 z-50 max-w-xs bg-background/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-xl"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {notification.name} {notification.action}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {notification.city} • {notification.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SocialProofNotifications;
