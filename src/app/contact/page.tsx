"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2, Hexagon, TerminalSquare, Rocket } from "lucide-react";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/hr@meghainfo.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: formData.subject || "Inquiry from Website",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        });
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-200 relative overflow-hidden font-sans selection:bg-accent/30">
      
      {/* --- Ambient Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ParticleNetwork 
          className="z-0 opacity-100" 
          particleColor="rgba(249, 115, 22, 0.5)"
          lineColor="rgba(249, 115, 22, 0.15)"
          particleCount={70}
          maxDistance={150}
          speed={0.25}
        />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10000ms]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[140px] mix-blend-screen auto-pulse animation-delay-4000"></div>
        <div className="absolute top-[40%] left-[60%] w-[20%] h-[20%] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-6 backdrop-blur-md"
          >
            <TerminalSquare className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium tracking-widest uppercase text-slate-300">Initialize Connection</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-6 drop-shadow-sm"
          >
            Transmit <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-orange-400 to-amber-300 animate-gradient-x drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Inquiry</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Establish a direct link with our engineering and leadership teams. We process queries with the same high velocity as our enterprise solutions.
          </motion.p>
        </div>

        {/* --- Main Dashboard Container --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-12 gap-8 items-start"
        >
          
          {/* --- Left Column: Info Hub --- */}
          <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col h-full space-y-8">
            
            {/* Contact Cards */}
            <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative group overflow-hidden h-full">
              {/* Internal glow */}
              <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                  <Hexagon className="w-6 h-6 text-accent mr-3 animate-[spin_10s_linear_infinite]" />
                  Command Center
                </h3>
                <p className="text-slate-400 mb-10 text-sm">Primary coordinates and communication protocols.</p>
                
                <div className="space-y-8">
                  <div className="flex items-start group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-accent/50 group-hover/item:bg-accent/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div className="ml-5">
                      <p className="text-xs font-mono text-accent mb-1 tracking-wider uppercase">Location Protocol</p>
                      <p className="text-slate-200 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                        14 Breckenridge Ct.<br />
                        Bell Mead, NJ 08502<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-accent/50 group-hover/item:bg-accent/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div className="ml-5">
                      <p className="text-xs font-mono text-accent mb-1 tracking-wider uppercase">Voice Protocol</p>
                      <a href="tel:+19084937683" className="text-slate-200 text-sm group-hover/item:text-white transition-colors hover:underline underline-offset-4">+1 (908) 493-7683</a>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-accent/50 group-hover/item:bg-accent/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div className="ml-5">
                      <p className="text-xs font-mono text-accent mb-1 tracking-wider uppercase">Data Protocol</p>
                      <a href="mailto:hr@meghainfo.com" className="text-slate-200 text-sm group-hover/item:text-white transition-colors hover:underline underline-offset-4">hr@meghainfo.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Minimal Map */}
            <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-3 shadow-2xl relative overflow-hidden h-[250px] group">
              <div className="absolute inset-0 bg-accent/20 z-10 pointer-events-none mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.064567223403!2d-74.67385412344!3d40.451694353456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e414f4a3e79b%3A0xe549090b8f60c4a4!2s14%20Breckenridge%20Ct%2C%20Belle%20Mead%2C%20NJ%2008502!5e0!3m2!1sen!2sus!4v1710250000000!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2) hue-rotate(180deg)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[1.5rem] opacity-70 group-hover:opacity-100 transition-opacity duration-500 relative z-0"
              ></iframe>
              
              {/* Scanning line effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent/50 shadow-[0_0_15px_#F97316] z-20 animate-[scan_3s_ease-in-out_infinite] pointer-events-none"></div>
            </div>
            
          </motion.div>

          {/* --- Right Column: Transmission Form --- */}
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
              
              {/* Form decorative background */}
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Rocket className="w-64 h-64 text-white -rotate-12" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-2 relative z-10">Transmission Interface</h2>
              <p className="text-slate-400 mb-10 text-sm relative z-10">Compile your data below. Systems are standing by to process your request.</p>
              
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => setFocusedInput('firstName')}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full bg-slate-900/50 backdrop-blur-md text-white border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-accent/80 focus:ring-1 focus:ring-accent/80 transition-all peer placeholder-transparent shadow-inner"
                      placeholder="First Name" 
                    />
                    <label htmlFor="firstName" className="absolute left-5 -top-2.5 bg-[#0a101d] px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent peer-focus:bg-[#0a101d] rounded-md">
                      First Name
                    </label>
                  </div>
                  
                  {/* Last Name */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 backdrop-blur-md text-white border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-accent/80 focus:ring-1 focus:ring-accent/80 transition-all peer placeholder-transparent shadow-inner"
                      placeholder="Last Name" 
                    />
                    <label htmlFor="lastName" className="absolute left-5 -top-2.5 bg-[#0a101d] px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent peer-focus:bg-[#0a101d] rounded-md">
                      Last Name
                    </label>
                  </div>
                </div>

                {/* Email */}
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 backdrop-blur-md text-white border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-accent/80 focus:ring-1 focus:ring-accent/80 transition-all peer placeholder-transparent shadow-inner"
                    placeholder="Email Address" 
                  />
                  <label htmlFor="email" className="absolute left-5 -top-2.5 bg-[#0a101d] px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent peer-focus:bg-[#0a101d] rounded-md">
                    Email Address
                  </label>
                </div>

                {/* Subject */}
                <div className="relative group">
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 backdrop-blur-md text-white border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-accent/80 focus:ring-1 focus:ring-accent/80 transition-all peer placeholder-transparent shadow-inner"
                    placeholder="Subject Protocol" 
                  />
                  <label htmlFor="subject" className="absolute left-5 -top-2.5 bg-[#0a101d] px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent peer-focus:bg-[#0a101d] rounded-md">
                    Subject Protocol
                  </label>
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 backdrop-blur-md text-white border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-accent/80 focus:ring-1 focus:ring-accent/80 transition-all peer placeholder-transparent shadow-inner resize-none scrollbar-thin scrollbar-thumb-accent/50 scrollbar-track-transparent"
                    placeholder="Encrypted Payload..." 
                  ></textarea>
                  <label htmlFor="message" className="absolute left-5 -top-2.5 bg-[#0a101d] px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent peer-focus:bg-[#0a101d] rounded-md">
                    Encrypted Payload (Message)
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full group relative flex items-center justify-center py-4 px-8 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 overflow-hidden ${
                    isSubmitted 
                      ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                      : "bg-accent/10 text-accent border border-accent/50 hover:bg-accent hover:text-white hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                  }`}
                >
                  {/* Sweep Effect */}
                  {!isSubmitted && (
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  )}
                  
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 mr-3 border-2 border-accent/30 border-t-accent rounded-full"
                        />
                        Authenticating & Routing...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        Transmission Successful
                      </>
                    ) : (
                      <>
                        Execute Transmission
                        <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </form>
              
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 border border-red-500/30 bg-red-500/10 rounded-lg p-4 flex items-center justify-center"
                  >
                    <p className="text-red-400 font-medium text-sm text-center">
                      ⚠ Error Code 400: {error}
                    </p>
                  </motion.div>
                )}
                
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 border border-green-500/30 bg-green-500/10 rounded-lg p-4 flex items-center justify-center"
                  >
                    <p className="text-green-400 font-medium text-sm text-center">
                      Transmission intercepted successfully by Megha Info Systems. Awaiting human analysis.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
        </motion.div>
      </div>

      {/* Required CSS for custom animations that Tailwind doesn't have by default */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0%, 100% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { top: 100%; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}
