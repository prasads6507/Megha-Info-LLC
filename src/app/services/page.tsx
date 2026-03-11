"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { motion } from "framer-motion";
import { 
  Monitor, 
  Smartphone, 
  Cloud, 
  Database, 
  BarChart3, 
  Settings,
  Users,
  GraduationCap,
  LayoutDashboard
} from "lucide-react";

export default function Services() {
  const allServices = [
    {
      title: "IT Consulting",
      description: "Strategic guidance to align your technology initiatives with business objectives for sustainable growth.",
      Icon: Monitor,
      href: "/contact",
      id: "consulting",
    },
    {
      title: "Application Development",
      description: "End-to-end development lifecycle: Conception, Design, Deployment, and Renewal tailored to your specific enterprise needs.",
      Icon: Smartphone,
      href: "/contact",
      id: "app-dev",
    },
    {
      title: "Cloud Solutions",
      description: "Seamless migration and management of cloud infrastructures for scalable, secure enterprise operations.",
      Icon: Cloud,
      href: "/contact",
      id: "cloud",
    },
    {
      title: "Enterprise ERP",
      description: "Comprehensive resource planning systems to streamline your operations and maximize efficiency.",
      Icon: Database,
      href: "/contact",
      id: "erp",
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights, driving informed decision-making across your organization.",
      Icon: BarChart3,
      href: "/contact",
      id: "analytics",
    },
    {
      title: "BPM Services",
      description: "Business Process Management solutions to optimize workflows and enhance overall productivity.",
      Icon: Settings,
      href: "/contact",
      id: "bpm",
    },
    {
      title: "IT Staffing",
      description: "Connect with top-tier tech talent to augment your team and accelerate your project timelines.",
      Icon: Users,
      href: "/contact",
      id: "staffing",
    },
    {
      title: "Corporate Training",
      description: "Empower your workforce with specialized training programs on the latest technologies and methodologies.",
      Icon: GraduationCap,
      href: "/contact",
      id: "training",
    },
    {
      title: "Mobile Apps",
      description: "Engaging, high-performance mobile applications designed for both iOS and Android platforms.",
      Icon: LayoutDashboard,
      href: "/contact",
      id: "mobile",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 pt-32 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Our <span className="text-accent">Expertise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Comprehensive IT capabilities designed for modern enterprises looking to innovate and scale globally.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="What We Offer" 
            subtitle="From strategic consulting to full-cycle application development, we provide the tools you need to succeed."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  Icon={service.Icon}
                  href={service.href}
                  delay={index * 0.05}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Partner with Megha Info LLC to leverage our expertise and propel your enterprise to new heights of success.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-accent hover:bg-accent/90 transition-colors shadow-lg hover:shadow-accent/20">
              Get in Touch Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
