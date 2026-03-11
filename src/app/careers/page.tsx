"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Mail, 
  GraduationCap, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Careers() {
  const benefits = [
    {
      title: "Premium Compensation",
      description: "We offer one of the best compensation packages in the industry, reflecting the high value we place on talent.",
      icon: Award,
    },
    {
      title: "Continuous Learning",
      description: "Access to the latest tools and support to expand your knowledge and stay at the forefront of the IT sector.",
      icon: GraduationCap,
    },
    {
      title: "Diverse Culture",
      description: "A collaborative environment where individuals with diverse backgrounds and skills come together.",
      icon: Users,
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive benefits designed to keep you and your family healthy, happy, and productive.",
      icon: Heart,
    },
    {
      title: "Innovation Hub",
      description: "Work on cutting-edge projects with an entrepreneurial spirit that encourages creative problem-solving.",
      icon: Zap,
    },
    {
      title: "Global Reach",
      description: "Opportunities to work with leading clients across various sites in the U.S. and potentially global projects.",
      icon: Globe,
    },
  ];

  const jobCategories = [
    {
      title: "Analysts & Architects",
      roles: ["Programmer Analysts", "Senior Systems Analysts", "Computer Systems Analysts", "Software Architects"],
    },
    {
      title: "Development & Engineering",
      roles: ["Senior Application Developers", "Full Stack Developers", "Mobile Developers (Android/iOS)", "Software Engineers"],
    },
    {
      title: "Data & Infrastructure",
      roles: ["Database Administrators (DBA)", "Network Administrators", "Cloud Architects", "Data Scientists"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#F97316_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-semibold text-sm uppercase tracking-wider mb-6">
              Empowering Talent
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Build Your Future with <br />
              <span className="text-accent underline decoration-white/20 underline-offset-8">Megha Info LLC</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              We bring together talented people with diverse backgrounds who are passionate about their skills and driven to innovate.
            </p>
            <Link 
              href="#openings" 
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              Explore Open Roles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Megha Info Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                Our Culture of <br />
                <span className="text-accent">Continuous Learning</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  At Megha Info LLC, we pride ourselves on being one of the fastest-growing and most successful firms in our field. Our success is driven by a strong commitment to client success and an entrepreneurial spirit.
                </p>
                <p>
                  We believe stagnation is the enemy. That's why we provide the tools, information, and support our employees need to expand their knowledge and stay current with the rapidly evolving IT industry.
                </p>
                <p className="font-semibold text-primary">
                  We value individual talent within a strong framework of team collaboration.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl group"
            >
              <Image 
                src="/images/team-culture.png"
                alt="Megha Info LLC Team Culture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-primary/10 transition-colors"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Benefits & Rewards" 
            subtitle="We support our employees by providing one of the most comprehensive packages in the industry."
          />
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Start Your Journey" 
            subtitle="We seek professionals with Bachelors or Masters degrees in computer science or related fields."
          />
          
          <div className="grid lg:grid-cols-3 gap-12 mt-16">
            {jobCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col h-full bg-slate-50 rounded-3xl p-8 border border-slate-100"
              >
                <h3 className="text-2xl font-bold text-primary mb-8 border-b border-slate-200 pb-4">
                  {category.title}
                </h3>
                <ul className="space-y-4 flex-grow">
                  {category.roles.map((role, rIndex) => (
                    <li key={rIndex} className="flex items-start gap-3 group/role">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 group-hover/role:scale-150 transition-transform"></div>
                      <span className="text-slate-700 font-medium group-hover/role:text-primary transition-colors">
                        {role}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-sm text-slate-500 italic">
                    <MapPin className="w-4 h-4" />
                    Various client sites across the U.S.
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-8">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How to Apply?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl font-light">
              Interested in shaping the technological landscape? Send your updated resume, specifying the position you are seeking, to our HR department.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:hr@meghainfollc.com" 
                className="inline-flex items-center px-10 py-5 rounded-full bg-accent text-white font-bold text-xl hover:bg-white hover:text-primary transition-all duration-300 shadow-2xl group"
              >
                hr@meghainfollc.com
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="mailto:careers@meghainfollc.com" 
                className="inline-flex items-center px-10 py-5 rounded-full bg-white/10 text-white font-bold text-xl hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
              >
                careers@meghainfollc.com
              </a>
            </div>
            <p className="mt-12 text-slate-400 text-sm italic">
              Megha Info LLC is an Equal Opportunity Employer. Relocation may be required.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
