"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  const openRoles = [
    {
      title: "Senior Programmer Analyst",
      location: "Innovation City, TX (Hybrid)",
      type: "Full-time",
      description: "Analyze complex business problems and develop automated solutions. Requires deep expertise in Java, Spring Boot, and enterprise frameworks.",
    },
    {
      title: "Database Administrator (DBA)",
      location: "Remote - US",
      type: "Full-time",
      description: "Manage, optimize, and secure enterprise database environments (Oracle, PostgreSQL). Ensure high availability and rigorous performance tuning.",
    },
    {
      title: "Full Stack Developer",
      location: "Innovation City, TX",
      type: "Full-time",
      description: "Design and implement scalable web applications using React, Next.js, and Node.js. Collaborate cross-functionally to deliver end-to-end features.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Join Our <span className="text-accent">Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Build your career at a place where constancy of learning and innovation thrive.
          </motion.p>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Open Positions" 
            subtitle="Discover your next opportunity to make an impact in the tech world."
          />
          
          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {role.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {role.type}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed max-w-3xl">
                    {role.description}
                  </p>
                </div>
                <div className="shrink-0">
                  <Link 
                    href="#apply" 
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-primary/5 text-primary font-medium hover:bg-primary hover:text-white transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section id="apply" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary text-white rounded-3xl p-12 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Briefcase className="w-48 h-48" />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <Mail className="w-12 h-12 text-accent mb-6" />
              <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Ready to take the next step in your career? We want to hear from you. Send us your resume and a brief cover letter outlining why you'd be a great fit for ESOA Technologies.
              </p>
              <a 
                href="mailto:careers@esoatech.com" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-accent text-white font-semibold text-lg hover:bg-white hover:text-primary transition-colors shadow-lg"
              >
                careers@esoatech.com
              </a>
              <p className="mt-6 text-sm text-slate-400">
                Please include the job title in the subject line. We aim to respond to all applications within 48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
