"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react";
import Image from "next/image";

type Message = {
  id: string;
  type: "bot" | "user";
  content: string;
  timestamp: Date;
};

// Advanced intent matching based on the website content
const findResponse = (query: string): string => {
  const q = query.toLowerCase();
  
  // Greetings
  if (q.match(/\b(hi|hello|hey|greetings|howdy|morning|afternoon|evening)\b/i)) {
    return "Hello there! Welcome to Megha Info LLC. As the digital representative of our company, I'm here to answer any questions about our enterprise IT services, careers, or technology stack. How can I help you today?";
  }
  
  // About / Mission / Philosophy / Velocity
  if (q.match(/\b(about|who are you|what is megha|mission|values|velocity|philosophy|owner|ceo|leadership)\b/i)) {
    return "We are Megha Info LLC, a premier corporate IT services provider. Our mission is to bridge the gap between your ambitious business goals and actionable technological realities. We operate with 'Velocity'—moving fast with precise, strategic intent. We believe in the 'Constancy of Learning', dedicating 20% of our time to researching next-generation tools. We treat our clients' success as our own.";
  }
  
  // Contact Information (Address, Phone, Email)
  if (q.match(/\b(where|location|address|headquarters|hq|located)\b/i)) {
    return "Our headquarters is located at:\n14 Breckenridge Ct.\nBell Mead, NJ 08502\nUnited States";
  }
  if (q.match(/\b(phone|call|number)\b/i)) {
    return "You can reach us by phone at: +1 (908) 493-7683.";
  }
  if (q.match(/\b(email|hr@|contact|reach|message)\b/i)) {
    return "You can email our HR department directly at hr@meghainfo.com or careers@meghainfo.com. Alternatively, you can fill out the form on our Contact page and we'll get back to you within 24 hours.";
  }

  // General Services
  if (q.match(/\b(services|what do you do|offer|provide|capabilities|expertise)\b/i)) {
    return "We offer a comprehensive suite of IT services designed for modern enterprises:\n\n• IT Consulting\n• Application Development\n• Cloud Solutions\n• Enterprise ERP\n• Data Analytics\n• BPM Services\n• IT Staffing\n• Corporate Training\n• Mobile Apps\n\nIs there a specific service you'd like me to explain?";
  }
  
  // Specific Services (Cloud, App Dev, etc.)
  if (q.match(/\b(cloud|aws|azure|migration|infrastructure)\b/i)) {
    return "Our Cloud Solutions cover seamless migration and management of cloud infrastructures for scalable, secure enterprise operations. We work heavily with AWS, Azure, Docker, and Kubernetes.";
  }
  if (q.match(/\b(app dev|application development|software|mobile|ios|android)\b/i)) {
    return "For Application Development, we handle the end-to-end lifecycle: Conception, Design, Deployment, and Renewal. We build web applications (React, Next.js, Java, Python) and engaging mobile apps for iOS and Android.";
  }
  if (q.match(/\b(erp|enterprise erp|resource planning)\b/i)) {
    return "Our Enterprise ERP services implement comprehensive resource planning systems to streamline your operations and maximize overall enterprise efficiency.";
  }
  if (q.match(/\b(data|analytics|bpm|business process)\b/i)) {
    return "We provide Data Analytics to transform raw data into actionable insights, and BPM (Business Process Management) services to optimize workflows and enhance productivity.";
  }
  if (q.match(/\b(staffing|consulting|training|augment)\b/i)) {
    return "We provide IT Staffing to connect you with top-tier tech talent and augment your team. We also offer Corporate Training to empower your workforce with the latest technologies.";
  }

  // Technology Stack
  if (q.match(/\b(tech|technology|stack|react|java|python|database|tools)\b/i)) {
    return "Our technology stack includes:\n• Frontend: React, Next.js, Apollo, Tailwind CSS\n• Backend: Node.js, Java Spring Boot, Python, Go\n• Database: PostgreSQL, MongoDB, Oracle, Redis\n• Cloud/DevOps: AWS, Azure, Docker, Kubernetes\n• Architecture: Microservices, Serverless, Event-Driven.";
  }

  // Careers / Jobs / Hiring
  if (q.match(/\b(career|careers|job|hiring|work for|benefits|salary|compensation|roles|openings|apply)\b/i)) {
    return "We are always looking for top IT talent! We offer premium compensation, health/wellness benefits, and a culture of continuous learning. We hire Analysts, Architects, Developers (Full Stack/Mobile), DBAs, and Cloud Engineers. You can send your resume to hr@meghainfo.com or careers@meghainfo.com.";
  }
  
  // Easter Eggs / Acknowledgements
  if (q.match(/\b(thank you|thanks|thx|awesome|great|good)\b/i)) {
    return "You're very welcome! As the owner of this digital space, I'm thrilled I could help. Let me know if you need anything else.";
  }
  
  if (q.match(/\b(bot|ai|robot|real person|human)\b/i)) {
    return "I am the digital Megha AI assistant, built directly into the site's architecture to provide you with immediate, accurate answers about our company just as our leadership team would.";
  }

  // Default / Fallback
  return "I want to make sure I give you the most accurate information. Could you please rephrase your question? You can ask me about our specific IT services, our technology stack, career opportunities, or how to contact us at our NJ headquarters.";
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hi! Welcome to Megha Info LLC. How can I help you today?",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized, isTyping]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate network delay and thinking time
    setTimeout(() => {
      const responseContent = findResponse(userMessage.content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: responseContent,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              height: isMinimized ? "auto" : "500px",
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`mb-4 w-[350px] sm:w-[400px] flex flex-col bg-slate-900 border border-white/20 rounded-2xl shadow-[0_8px_32px_0_rgba(249,115,22,0.15)] overflow-hidden backdrop-blur-xl ${isMinimized ? '' : 'max-h-[80vh]'}`}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-white/10 flex items-center justify-between relative overflow-hidden">
               {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[40px] -mr-16 -mt-16 pointer-events-none"></div>
              
              <div className="flex items-center space-x-3 relative z-10 w-full justify-between">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border border-accent">
                        <Image 
                        src="/images/robot.png" 
                        width={40} 
                        height={40} 
                        alt="AI Assistant"
                        className="object-contain"
                        />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full animate-pulse"></span>
                    </div>
                    <div>
                    <h3 className="text-white font-bold text-sm tracking-wide">Megha AI</h3>
                    <p className="text-accent text-xs">Digital Enterprise Brain</p>
                    </div>
                </div>
                
                <div className="flex items-center space-x-1 relative z-10 text-slate-400">
                    <button 
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                    >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                    </button>
                    <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 hover:bg-white/10 hover:text-red-400 rounded-lg transition-colors"
                    >
                    <X className="w-4 h-4" />
                    </button>
                </div>
              </div>

            </div>

            {/* Chat Area */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-slate-900/50">
                  {messages.map((message) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={message.id}
                      className={`flex flex-col mb-2 ${message.type === "user" ? "items-end" : "items-start"}`}
                    >
                      <div className={`flex max-w-[85%] ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.type === "user" ? "bg-accent ml-3 shadow-[0_0_10px_rgba(249,115,22,0.3)]" : "bg-slate-800 border border-white/10 mr-3"}`}>
                          {message.type === "user" ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-accent" />
                          )}
                        </div>
                        <div 
                          className={`p-3 rounded-2xl whitespace-pre-wrap text-[13px] leading-relaxed relative ${
                            message.type === "user" 
                              ? "bg-accent/10 border border-accent/20 text-slate-200 rounded-tr-sm" 
                              : "bg-white/5 border border-white/10 text-slate-300 rounded-tl-sm shadow-sm"
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                      <div className={`text-[10px] opacity-40 mt-1 ${message.type === "user" ? "mr-12" : "ml-12"} text-slate-400`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex flex-row max-w-[85%]">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-white/10 mr-3 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-accent" />
                        </div>
                        <div className="py-3 px-4 rounded-2xl bg-white/5 border border-white/10 rounded-tl-sm flex items-center space-x-1.5 h-10">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ y: [0, -4, 0] }}
                              transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }}
                              className="w-1.5 h-1.5 bg-accent/80 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-slate-900 border-t border-white/10 relative">
                  <form onSubmit={handleSendMessage} className="relative flex items-center group">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask me anything..."
                      className="w-full bg-slate-800/80 text-slate-200 placeholder-slate-500 text-sm rounded-full py-3.5 pl-5 pr-12 outline-none border border-white/10 focus:border-accent/50 focus:bg-slate-800 focus:shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-all"
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent text-white rounded-full hover:bg-orange-500 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-accent transition-all shadow-md group-focus-within:shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                    >
                      <Send className="w-4 h-4 ml-0.5" />
                    </button>
                  </form>
                  <div className="text-center mt-3">
                    <span className="text-[10px] text-slate-500 tracking-wider uppercase font-medium">Powered by Megha Info AI</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative group bg-accent p-4 rounded-full text-white shadow-[0_8px_32px_0_rgba(249,115,22,0.5)] flex items-center justify-center border border-white/20 z-10"
        >
          {/* Pulse Effect */}
          <div className="absolute inset-0 bg-accent rounded-full opacity-60 animate-ping z-[-1]"></div>
          
          <Bot className="w-7 h-7 relative z-10" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-5 top-1/2 -translate-y-1/2 bg-slate-800 border border-white/10 text-white text-sm py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all whitespace-nowrap shadow-xl pointer-events-none font-medium">
            Chat with Megha AI
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 border-r border-t border-white/10 rotate-45"></div>
          </div>
        </motion.button>
      )}
    </div>
  );
}
