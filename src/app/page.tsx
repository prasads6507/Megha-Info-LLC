"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Monitor, Smartphone, Cloud, Database, BarChart3, Settings, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "IT Consulting",
      description: "Strategic guidance to align your technology initiatives with business objectives for sustainable growth.",
      Icon: Monitor,
      href: "/services#consulting",
    },
    {
      title: "Application Development",
      description: "End-to-end development lifecycle: Conception, Design, Deployment, and Renewal tailored to your needs.",
      Icon: Smartphone,
      href: "/services#app-dev",
    },
    {
      title: "Cloud Solutions",
      description: "Seamless migration and management of cloud infrastructures for scalable, secure enterprise operations.",
      Icon: Cloud,
      href: "/services#cloud",
    },
    {
      title: "Enterprise ERP",
      description: "Comprehensive resource planning systems to streamline your operations and maximize efficiency.",
      Icon: Database,
      href: "/services#erp",
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights, driving informed decision-making across your organization.",
      Icon: BarChart3,
      href: "/services#analytics",
    },
    {
      title: "BPM Services",
      description: "Business Process Management solutions to optimize workflows and enhance overall productivity.",
      Icon: Settings,
      href: "/services#bpm",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight mb-8"
            >
              Empowering Enterprise <span className="text-accent">Excellence</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed"
            >
              IT Strategy at the intersection of technology and aspiration. We deliver cutting-edge solutions designed to propel your business forward.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/services" className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-accent hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-accent/25 flex items-center justify-center group">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-primary border border-slate-200 font-medium hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="text-4xl font-bold mb-2 text-accent">10+</div>
              <div className="text-slate-300 text-sm font-medium uppercase tracking-wider">Years Experience</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="text-4xl font-bold mb-2 text-accent">500+</div>
              <div className="text-slate-300 text-sm font-medium uppercase tracking-wider">Projects Delivered</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="text-4xl font-bold mb-2 text-accent">50+</div>
              <div className="text-slate-300 text-sm font-medium uppercase tracking-wider">Tech Experts</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="text-4xl font-bold mb-2 text-accent">99%</div>
              <div className="text-slate-300 text-sm font-medium uppercase tracking-wider">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Driving Innovation with <span className="text-accent">Velocity</span></h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Megha Info LLC, we believe in a constancy of learning. Our mission is to bridge the gap between your aspirations and technological realities.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                By combining industry expertise with cutting-edge tools, we engineer solutions that not only solve today's challenges but future-proof your business for tomorrow.
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
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-slate-50">
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
            <Link href="/services" className="inline-flex px-8 py-4 rounded-full bg-white text-primary font-medium hover:bg-slate-100 border border-slate-200 shadow-sm transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
