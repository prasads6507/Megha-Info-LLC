"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Rocket } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Technology", href: "/technology" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const isDarkHeroPage = ["/", "/services", "/about", "/technology", "/careers"].includes(pathname);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/60 backdrop-blur-xl border-white/30 py-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]" 
          : cn(
              "py-6",
              isDarkHeroPage 
                ? "bg-transparent border-transparent" 
                : "bg-white border-transparent shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
            )
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className={cn(
                "p-2 rounded-lg transition-colors",
                isScrolled || !isDarkHeroPage ? "bg-primary text-white group-hover:bg-accent" : "bg-accent text-white group-hover:bg-white group-hover:text-accent"
              )}>
                <Rocket className="w-6 h-6" />
              </div>
              <span className={cn(
                "font-bold text-xl tracking-tight transition-colors",
                isScrolled || !isDarkHeroPage ? "text-primary" : "text-white"
              )}>
                Megha Info LLC
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex flex-1 justify-end items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  pathname === link.href 
                    ? "text-accent" 
                    : (isScrolled || !isDarkHeroPage ? "text-slate-600" : "text-slate-200")
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm",
                isScrolled || !isDarkHeroPage
                  ? "bg-primary text-white hover:bg-accent"
                  : "bg-white text-primary hover:bg-accent hover:text-white"
              )}
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "focus:outline-none transition-colors",
                isScrolled || !isDarkHeroPage ? "text-slate-600 hover:text-primary" : "text-white hover:text-accent"
              )}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-medium",
                  pathname === link.href
                    ? "text-accent bg-accent/5"
                    : "text-slate-700 hover:text-accent hover:bg-slate-50"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                href="/contact"
                className="block w-full text-center px-4 py-3 rounded-lg bg-primary text-white font-medium hover:bg-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
