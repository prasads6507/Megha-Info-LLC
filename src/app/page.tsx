"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";
import { Monitor, Smartphone, Cloud, Database, BarChart3, Settings, ArrowRight, Cpu, Shield, Zap, Target, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "IT Consulting",
      description: "Strategic guidance to align your technology initiatives with business objectives for sustainable growth.",
      Icon: Monitor,
      href: "/services/consulting",
    },
    {
      title: "Application Development",
      description: "End-to-end development lifecycle: Conception, Design, Deployment, and Renewal tailored to your needs.",
      Icon: Smartphone,
      href: "/services/app-dev",
    },
    {
      title: "Cloud Solutions",
      description: "Seamless migration and management of cloud infrastructures for scalable, secure enterprise operations.",
      Icon: Cloud,
      href: "/services/cloud",
    },
    {
      title: "Enterprise ERP",
      description: "Comprehensive resource planning systems to streamline your operations and maximize efficiency.",
      Icon: Database,
      href: "/services/erp",
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights, driving informed decision-making across your organization.",
      Icon: BarChart3,
      href: "/services/analytics",
    },
    {
      title: "BPM Services",
      description: "Business Process Management solutions to optimize workflows and enhance overall productivity.",
      Icon: Settings,
      href: "/services/bpm",
    },
  ];

  const philosophy = [
    {
      icon: Cpu,
      title: "Agentic Architecture",
      description: "We architect intelligent systems — from precision tools to autonomous enterprise agents.",
    },
    {
      icon: Shield,
      title: "Security-First",
      description: "Every solution is built with a zero-trust, security-first approach to protect your assets.",
    },
    {
      icon: Zap,
      title: "Velocity & Scale",
      description: "Agile deployment of robust solutions with rapid adaptation to evolving market dynamics.",
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Code quality and ML experience that translates to measurable business outcomes.",
    },
  ];

  const trustedBy = [
    "Fortune 500 Enterprises",
    "Healthcare Systems",
    "Financial Services",
    "Government Agencies",
    "Retail & E-Commerce",
    "Manufacturing",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Particle Network */}
      <section className="relative bg-slate-900 pt-32 pb-20 lg:pt-44 lg:pb-36 overflow-hidden min-h-[85vh] flex items-center">
        {/* Particle Network Animation */}
        <ParticleNetwork 
          className="z-0" 
          particleColor="rgba(249, 115, 22, 0.5)"
          lineColor="rgba(249, 115, 22, 0.15)"
          particleCount={90}
          maxDistance={160}
          speed={0.3}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/80 z-[1]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] z-[1]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] z-[1]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              Trusted by 24+ Enterprises Globally
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-8xl font-bold text-white tracking-tighter mb-8"
            >
              Architecting the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-300 animate-gradient-x">
                Digital Brain
              </span>{" "}
              for Your Enterprise
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              From AI-powered consulting to full-cycle cloud transformation — we deploy intelligent solutions that scale with your ambition.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/services" className="px-8 py-4 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-accent/25 flex items-center justify-center group">
                Explore Solutions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 font-medium hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
                Schedule a Consultation
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats Cards */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex gap-8">
          {[
            { value: "10+", label: "Years" },
            { value: "500+", label: "Projects" },
            { value: "50+", label: "Engineers" },
            { value: "99%", label: "Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-3 text-center"
            >
              <div className="text-2xl font-bold text-accent">{stat.value}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mobile Stats Ribbon */}
      <section className="bg-slate-900 py-8 lg:hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "500+", label: "Projects Delivered" },
              { value: "50+", label: "Tech Experts" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section (Eficens-inspired) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-6"
            >
              The <span className="text-accent">Philosophy</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-slate-600"
            >
              With a commitment to code quality, a wealth of experience, and a security-first approach, we assist you in deploying the infrastructure that best fits your business goals.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-accent/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary with Code Block */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Driving Innovation with <span className="text-accent">Velocity</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Megha Info LLC, we believe in a constancy of learning. Our mission is to bridge the gap between your aspirations and technological realities.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                By combining industry expertise with cutting-edge tools, we engineer solutions that not only solve today&apos;s challenges but future-proof your business for tomorrow.
              </p>
              <Link href="/about" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group">
                Learn more about our mission
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-slate-100"
            >
              <Image 
                src="/images/corporate-showcase.png"
                alt="Megha Info LLC Corporate Environment"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Expertise" 
            subtitle="Comprehensive IT capabilities designed for modern enterprises looking to innovate and scale."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/services" className="inline-flex px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-accent border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Marquee */}
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        <ParticleNetwork 
          className="z-0 opacity-30" 
          particleColor="rgba(249, 115, 22, 0.3)"
          lineColor="rgba(249, 115, 22, 0.08)"
          particleCount={30}
          maxDistance={120}
          speed={0.2}
        />
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Industries We Serve</h3>
            <p className="text-2xl font-bold text-white">Trusted Across Sectors</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
            {trustedBy.map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 text-slate-300 font-medium text-sm hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default"
              >
                <Globe className="w-4 h-4 inline mr-2 opacity-50" />
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -ml-24 -mb-24"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Let us architect the intelligent systems that will drive your business into the future.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-10 py-5 rounded-full bg-accent text-white font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-xl"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
