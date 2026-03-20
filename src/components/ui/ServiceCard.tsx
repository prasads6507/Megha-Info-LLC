"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
  image?: string;
  className?: string;
  delay?: number;
}

export function ServiceCard({ title, description, Icon, href, image, className, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group relative bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full",
        className
      )}
    >
      {/* Image Container with Hover Zoom */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-slate-100 shrink-0">
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={image} 
            alt={title} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}
      
      <div className={cn("p-8 flex-1 flex flex-col", !image && "pt-8")}>
        <div className={cn(
          "w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-slate-50 group-hover:bg-accent/10 transition-colors duration-300 z-20 relative",
          image && "-mt-14 shadow-sm border-2 border-white"
        )}>
          <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
        <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">{description}</p>
        <div className="mt-auto">
          <Link 
            href={href}
            className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
