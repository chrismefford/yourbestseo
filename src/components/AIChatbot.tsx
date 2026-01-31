import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2, Minimize2, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "👋 Hi! I'm your SEO assistant. I can help you understand our services, answer SEO questions, or connect you with our team. What can I help you with today?",
};

const QUICK_ACTIONS = [
  "Tell me about your services",
  "How much does SEO cost?",
  "How long until I see results?",
  "I want a free audit",
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [email, setEmail] = useState("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom
  useEffect(() => {
    // Guard against SSR/SSG - only run on client
    if (typeof window === 'undefined') return;
    
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat-assistant", {
        body: { 
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          }))
        },
      });

      if (error) throw error;

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message || "I apologize, but I'm having trouble responding. Please try again or contact us directly at (615) 772-6641.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I'm having technical difficulties. Please call us at (615) 772-6641 or email chris@yourbestseo.com for immediate assistance.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickAction = (action: string) => {
    sendMessage(action);
  };

  const handleClose = () => {
    // If there's been a real conversation (more than initial message), offer to email
    if (messages.length > 2 && !emailSent) {
      setShowEmailPrompt(true);
    } else {
      closeChat();
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setShowEmailPrompt(false);
    // Reset conversation after closing
    setTimeout(() => {
      setMessages([INITIAL_MESSAGE]);
      setEmailSent(false);
    }, 300);
  };

  const handleSendTranscript = async () => {
    if (!email.trim() || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSendingEmail(true);

    try {
      const { error } = await supabase.functions.invoke("send-chat-transcript", {
        body: { 
          email,
          messages: messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        },
      });

      if (error) throw error;

      setEmailSent(true);
      toast({
        title: "📧 Transcript sent!",
        description: "Check your inbox for the conversation summary.",
      });

      // Close after a brief delay
      setTimeout(() => {
        closeChat();
      }, 1500);
    } catch (error) {
      console.error("Email error:", error);
      toast({
        title: "Couldn't send email",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSendingEmail(false);
    }
  };

  const skipEmail = () => {
    closeChat();
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed bottom-24 right-6 z-40">
            {/* Hover tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap"
                >
                  <div className="bg-background border border-border rounded-lg px-4 py-2 shadow-lg">
                    <p className="text-sm font-medium">👋 Ask me anything!</p>
                    <p className="text-xs text-muted-foreground">I'm here to help</p>
                  </div>
                  {/* Arrow pointing to button */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                    <div className="border-8 border-transparent border-l-border" />
                    <div className="absolute top-0 left-0 border-8 border-transparent border-l-background -ml-[1px]" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Chat button */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
              aria-label="Open chat"
            >
              <MessageCircle className="w-6 h-6" />
              {/* Notification dot */}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background animate-pulse" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "auto" : 500
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[380px] rounded-2xl bg-background border border-border shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">SEO Assistant</h3>
                  <p className="text-xs opacity-80">
                    {isLoading ? "Typing..." : "Online now"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
                  aria-label={isMinimized ? "Expand" : "Minimize"}
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages - only show if not minimized */}
            {!isMinimized && !showEmailPrompt && (
              <>
                <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex gap-3 ${
                          message.role === "user" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}
                        >
                          {message.role === "user" ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Bot className="w-4 h-4" />
                          )}
                        </div>
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground rounded-tr-md"
                              : "bg-muted rounded-tl-md"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </div>
                    ))}

                    {isLoading && (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-3">
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quick Actions - show only at start */}
                  {messages.length === 1 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {QUICK_ACTIONS.map((action) => (
                        <button
                          key={action}
                          onClick={() => handleQuickAction(action)}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  )}
                </ScrollArea>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      type="text"
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      disabled={!input.trim() || isLoading}
                      variant="hero"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </>
            )}

            {/* Email Transcript Prompt */}
            {!isMinimized && showEmailPrompt && (
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                <AnimatePresence mode="wait">
                  {!emailSent ? (
                    <motion.div
                      key="email-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="w-full"
                    >
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2">
                        Want this conversation emailed?
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        We'll send you a summary to reference later.
                      </p>
                      <div className="space-y-3">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="text-center"
                        />
                        <Button
                          variant="hero"
                          className="w-full gap-2"
                          onClick={handleSendTranscript}
                          disabled={isSendingEmail}
                        >
                          {isSendingEmail ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Mail className="w-4 h-4" />
                              Send Transcript
                            </>
                          )}
                        </Button>
                        <button
                          onClick={skipEmail}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          No thanks, just close
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                        <Check className="w-7 h-7 text-green-500" />
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2">
                        Sent! 📬
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Check your inbox shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
