import Link from "next/link";
import { Rocket, Mail, Phone, MapPin, ChevronRight, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 text-white">
              <div className="bg-accent text-white p-2 rounded-lg">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">Megha Info LLC</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              IT Strategy at the intersection of technology and aspiration. Empowering enterprise excellence through cutting-edge solutions and a constancy of learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Technology', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
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
                <span>123 Technology Drive, Suite 100<br />Innovation City, TX 75000</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>contact@meghainfollc.com</span>
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
