"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Server, Database, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Technology() {
  const techStack = [
    { name: "Frontend", Icon: Globe, stack: "React, Next.js, Apollo, Tailwind CSS" },
    { name: "Backend", Icon: Server, stack: "Node.js, Java Spring Boot, Python, Go" },
    { name: "Database", Icon: Database, stack: "PostgreSQL, MongoDB, Oracle, Redis" },
    { name: "Cloud & DevOps", Icon: Cpu, stack: "AWS, Azure, Docker, Kubernetes" },
    { name: "Security", Icon: Lock, stack: "OAuth2, JWT, Enterprise IAM, Zero Trust" },
    { name: "Architecture", Icon: Code2, stack: "Microservices, Event-Driven, Serverless" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 text-center text-white relative overflow-hidden">
        <ParticleNetwork 
          className="z-0 opacity-60" 
          particleColor="rgba(249, 115, 22, 0.4)"
          lineColor="rgba(249, 115, 22, 0.12)"
          particleCount={60}
          maxDistance={140}
          speed={0.25}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-primary to-primary z-[1]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Our <span className="text-accent">Technology</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Leveraging state-of-the-art tools to build tomorrow's enterprise solutions.
          </motion.p>
        </div>
      </section>

      {/* Constancy of Learning */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto h-full min-h-[400px] bg-slate-900"
            >
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <Code2 className="w-48 h-48 text-accent/20" />
                <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur border border-white/10 rounded-xl p-6">
                  <p className="text-white font-mono text-sm">
                    {`const learning = new Constancy();`}
                    <br />
                    {`while (true) {`}
                    <br />
                    <span className="pl-4">{`learning.evolve();`}</span>
                    <br />
                    {`}`}
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">The Constancy of <span className="text-accent">Learning</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                In the technology sector, stagnation is the enemy of success. At Megha Info LLC, our fundamental approach to technology is rooted in what we call the <strong>Constancy of Learning</strong>.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that staying ahead of the tech curve isn’t just about adopting the latest framework—it’s about fundamentally understanding emerging paradigms and how they can be applied to solve enterprise challenges more efficiently.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed pb-4">
                Our engineers spend 20% of their time researching, prototyping, and integrating next-generation tools to ensure the architectures we build today remain robust and relevant tomorrow.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-accent hover:-translate-y-1 transition-all duration-300 shadow-md">
                Build With Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Technology Stack" 
            subtitle="An overview of the core technologies we leverage to deliver high-performance solutions."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-accent/30 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 group-hover:bg-accent/10 transition-colors">
                    <tech.Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{tech.name}</h3>
                </div>
                <p className="text-slate-600 font-medium">{tech.stack}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
