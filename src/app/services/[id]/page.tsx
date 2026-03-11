"use client";

import { useParams, notFound } from "next/navigation";
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
  LayoutDashboard,
  ArrowLeft,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const servicesData = {
  "consulting": {
    title: "IT Consulting",
    description: "In an era where technology is a critical driver of business success, Megha Info LLC provides strategic IT consulting services that bridge the gap between your technical capabilities and your business goals. We work closely with stakeholders to develop roadmaps that ensure technology investments deliver maximum ROI.",
    icon: Monitor,
    image: "/images/service-consulting.png",
    features: [
      "Digital Transformation Roadmap",
      "Technology Gap Analysis",
      "Legacy System Modernization",
      "IT Infrastructure Strategy",
      "Cloud Readiness Assessment"
    ]
  },
  "app-dev": {
    title: "Application Development",
    description: "We deliver custom application development services tailored to your unique business requirements. Our end-to-end development lifecycle ensures that from initial conception to final deployment, your applications are built for performance, scalability, and security.",
    icon: Smartphone,
    image: "/images/service-app-dev.png",
    features: [
      "Custom Enterprise Software",
      "Full-Stack Web Applications",
      "API Integration & Development",
      "Agile Development Methodology",
      "Quality Assurance & Testing"
    ]
  },
  "cloud": {
    title: "Cloud Solutions",
    description: "Megha Info LLC empowers enterprises to leverage the full potential of cloud computing. Whether you are migrating existing workloads or building cloud-native applications, we provide the expertise needed to ensure a secure, scalable, and cost-effective cloud environment.",
    icon: Cloud,
    image: "/images/service-cloud.png",
    features: [
      "AWS/Azure/Google Cloud Migration",
      "Serverless Architecture Design",
      "Cloud Security & Compliance",
      "DevOps Automation",
      "Hybrid & Multi-Cloud Strategy"
    ]
  },
  "erp": {
    title: "Enterprise ERP",
    description: "Streamline your business operations with our comprehensive ERP implementation and management services. We help you integrate all facets of your business—including finance, HR, manufacturing, and supply chain—into a single, cohesive system.",
    icon: Database,
    image: "/images/service-erp.png",
    features: [
      "ERP System Selection & Consulting",
      "Custom ERP Implementation",
      "Bespoke Module Development",
      "System Integration & Data Migration",
      "Training & Post-Go-Live Support"
    ]
  },
  "analytics": {
    title: "Data Analytics",
    description: "Data is your most valuable asset. Megha Info LLC transforms raw data into actionable business intelligence. Our analytics solutions help you uncover hidden patterns, predict market trends, and make informed decisions with confidence.",
    icon: BarChart3,
    image: "/images/service-analytics.png",
    features: [
      "Big Data Strategy & Architecture",
      "Predictive Modeling & AI",
      "Interactive BI Dashboards",
      "Data Governance & Quality",
      "Real-time Data Processing"
    ]
  },
  "bpm": {
    title: "BPM Services",
    description: "Our Business Process Management (BPM) services focus on optimizing and automating your core business workflows. We help you eliminate bottlenecks, reduce operational costs, and increase the agility of your organization in a competitive market.",
    icon: Settings,
    image: "/images/service-bpm.png",
    features: [
      "Workflow Analysis & Optimization",
      "Process Automation (RPA)",
      "Performance Monitoring & Metrics",
      "Compliance & Standards Audit",
      "Change Management Strategies"
    ]
  },
  "staffing": {
    title: "IT Staffing",
    description: "Finding the right talent is the foundation of any successful tech initiative. Megha Info LLC connects you with highly skilled IT professionals who possess both the technical expertise and the cultural fit required to drive your projects forward.",
    icon: Users,
    image: "/images/service-staffing.png",
    features: [
      "Technical Talent Acquisition",
      "Contract-to-Hire & Perm Placement",
      "IT Project Resource Management",
      "Skills-based Screening & Assessment",
      "Specialized Tech Roles Sourcing"
    ]
  },
  "training": {
    title: "Corporate Training",
    description: "Stay ahead of the curve with our specialized corporate training programs. We empower your workforce with deep dives into the latest technologies, ensuring your team has the skills necessary to innovate and excel in an ever-changing tech landscape.",
    icon: GraduationCap,
    image: "/images/service-training.png",
    features: [
      "Custom Tech Curriculum Design",
      "Hands-on Workshops & Bootcamps",
      "Emerging Tech (AI/Web3) Training",
      "Leadership in Technology Programs",
      "Continuous Learning Trackers"
    ]
  },
  "mobile": {
    title: "Mobile Apps",
    description: "In a mobile-first world, your enterprise needs a powerful mobile presence. We design and develop engaging, cross-platform mobile applications that provide seamless user experiences while integrating deeply with your existing backend systems.",
    icon: LayoutDashboard,
    image: "/images/service-mobile.png",
    features: [
      "Native iOS & Android Development",
      "React Native & Flutter Solutions",
      "Mobile UI/UX Design",
      "App Store Optimization (ASO)",
      "Mobile Security & Testing"
    ]
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const id = params.id as string;
  const service = servicesData[id as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#F97316_0%,transparent_70%)]"></div>
          <Image 
            src={service.image}
            alt={service.title}
            fill
            className="object-cover blur-[2px]"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/services" 
              className="inline-flex items-center text-accent font-semibold mb-8 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
            <div className="flex items-center gap-6 mb-6">
              <div className="bg-accent/20 p-4 rounded-2xl backdrop-blur-md border border-accent/20">
                <Icon className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                {service.title}
              </h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Tailored solutions designed to scale your enterprise and drive technological excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8 border-l-4 border-accent pl-6">
                Overview & Methodology
              </h2>
              <div className="text-lg text-slate-600 space-y-6 leading-relaxed mb-10">
                {service.description.split('. ').map((part, i) => (
                  <p key={i}>{part}.</p>
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary mb-6">Key Offerings</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started with {service.title}?</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Our experts are ready to help you implement {service.title} solutions that drive value and innovation for your business.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-10 py-5 rounded-full bg-accent text-white font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-xl"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
