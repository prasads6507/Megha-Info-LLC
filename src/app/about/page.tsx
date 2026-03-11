"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Target, Zap, Users, Shield, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Constancy of Learning",
      description: "We continuously evolve with the tech landscape, ensuring our solutions are always at the cutting edge.",
      Icon: Lightbulb,
    },
    {
      title: "Client Success",
      description: "Your business objectives become our missions. We measure our success solely by your growth.",
      Icon: Users,
    },
    {
      title: "Integrity & Trust",
      description: "We build transparent, enduring relationships through honest communication and reliable delivery.",
      Icon: Shield,
    },
    {
      title: "Velocity",
      description: "Agile methodologies that deliver high-quality results faster without compromising excellence.",
      Icon: Zap,
    },
    {
      title: "Strategic Innovation",
      description: "We don't just solve problems; we engineer proactive solutions that anticipate future needs.",
      Icon: Target,
    },
    {
      title: "Excellence",
      description: "Empowering enterprise excellence through meticulous execution and superior quality standards.",
      Icon: Rocket,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            About <span className="text-accent">ESOA Technologies</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Pioneering IT strategy at the intersection of technology and aspiration.
          </motion.p>
        </div>
      </section>

      {/* Mission & Velocity */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At ESOA Technologies, our mission is to empower enterprises by bridging the gap between ambitious business goals and actionable technological realities. We deliver strategic, end-to-end IT solutions designed not just to meet the needs of today, but to architect the success of tomorrow.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We commit to our clients' success with unwavering dedication, operating as an extension of your own team to achieve mutual breakthroughs.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Zap className="w-32 h-32 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-6 relative z-10">Our Velocity</h2>
              <p className="text-lg text-slate-600 leading-relaxed relative z-10">
                In a rapidly changing digital landscape, speed without direction is wasted effort. "Our Velocity" represents our core philosophy of moving fast, but with precise, strategic intent. 
              </p>
              <ul className="mt-8 space-y-4 relative z-10">
                {[
                  "Rapid deployment of robust solutions",
                  "Agile adaptation to market shifts",
                  "Accelerated time-to-market for your products",
                  "Continuous, high-speed innovation cycles"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Core Values" 
            subtitle="The foundational principles that guide every strategy we develop and every line of code we write."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary/5 text-primary">
                  <value.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
