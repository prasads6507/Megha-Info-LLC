"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const mailtoLink = `mailto:contact@meghainfollc.com?subject=${encodeURIComponent(formData.subject || "Inquiry from Website")}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 text-center text-white relative overflow-hidden">
        <ParticleNetwork 
          className="z-0 opacity-40" 
          particleColor="rgba(249, 115, 22, 0.4)"
          lineColor="rgba(249, 115, 22, 0.12)"
          particleCount={40}
          maxDistance={120}
          speed={0.2}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Get in <span className="text-accent">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach out to discuss how we can partner for your enterprise success.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
            
            {/* Contact Information & Map */}
            <div className="lg:w-5/12 bg-slate-900 text-white p-12 flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              
              <div className="relative z-10 mb-12">
                <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-xl shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">Our Headquarters</h3>
                      <p className="text-slate-400 leading-relaxed">
                        123 Technology Drive, Suite 100<br />
                        Innovation City, TX 75000<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/20 p-3 rounded-xl shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">Phone Number</h3>
                      <p className="text-slate-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/20 p-3 rounded-xl shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">Email Address</h3>
                      <p className="text-slate-400">contact@meghainfollc.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Functional Map */}
              <div className="mt-auto relative z-10 w-full h-80 bg-slate-800 rounded-2xl overflow-hidden shadow-inner border border-white/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.18730!2d-96.699!3d33.019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21da13c59513%3A0x62aa036489cd602b!2sPlano%2C%20TX!5e0!3m2!1sen!2sus!4v1710150000000!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-80 hover:opacity-100 transition-opacity duration-500"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-7/12 p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-primary mb-2">Send us a Message</h2>
              <p className="text-slate-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors bg-slate-50/50"
                      placeholder="John" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors bg-slate-50/50"
                      placeholder="Doe" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors bg-slate-50/50"
                    placeholder="john@company.com" 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors bg-slate-50/50"
                    placeholder="How can we help you?" 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors bg-slate-50/50 resize-none"
                    placeholder="Tell us about your project or inquiry..." 
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitted}
                  className={`w-full flex items-center justify-center py-4 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                    isSubmitted 
                      ? "bg-green-500 text-white" 
                      : "bg-primary text-white hover:bg-accent hover:shadow-accent/20"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      Message Sent
                      <CheckCircle2 className="w-5 h-5 ml-2" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
              
              {isSubmitted && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-green-600 font-medium text-sm"
                >
                  Email client opened! Thank you for reaching out.
                </motion.p>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
