import React, { useState, useEffect } from "react";
import { Menu, X, Hexagon } from "lucide-react";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Glass Navigation Pill */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled || isOpen ? "w-[90%] md:w-[650px]" : "w-[95%] md:w-[750px]"
        }`}
      >
        <div className="glass-panel rounded-full px-4 py-3 md:px-6 flex items-center justify-between shadow-2xl shadow-black/50 bg-black/40 backdrop-blur-md border border-white/10">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-10 pl-2">
            <Hexagon className="w-6 h-6 text-brand-orange stroke-2" />
            <span className="font-bold text-sm md:text-base tracking-tight text-white hidden sm:block">
              Digital Alchemy
            </span>
          </a>

          {/* Desktop Links - Centered */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 pr-1">
            <a
              href="#contact"
              className="hidden md:block px-5 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-brand-orange hover:text-white transition-colors"
            >
              Start
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="text-white" size={20} />
              ) : (
                <Menu className="text-white" size={20} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-3xl font-semibold text-white hover:text-brand-orange transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-8 py-3 bg-brand-orange text-white text-lg font-semibold rounded hover:bg-brand-orange/90 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};
