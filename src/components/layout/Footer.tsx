import Link from "next/link";
import { Rocket, Mail, Phone, MapPin, ChevronRight, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-8 border-t border-white/5 overflow-hidden">
      {/* Subtle Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 text-white">
              <div className="bg-accent text-white p-2 rounded-lg shadow-lg shadow-accent/20">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">Megha Info LLC</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Architecting the digital future through precision engineering and a constancy of learning. We empower enterprises to scale with intelligent, security-first solutions.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Technology', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={
                      item === 'Home' ? '/' : 
                      item === 'About Us' ? '/about' : 
                      `/${item.toLowerCase().replace(' ', '-')}`
                    }
                    className="text-sm hover:text-accent transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['IT Consulting', 'Application Development', 'Cloud Solutions', 'Data Analytics', 'Enterprise ERP'].map((item) => (
                <li key={item}>
                  <Link 
                    href="/services"
                    className="text-sm hover:text-accent transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>14 Breckenridge Ct.<br />Bell Mead, NJ 08502</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+1 (908) 493-7683</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>hr@meghainfo.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Megha Info LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
