import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Hexagon, Github, Twitter, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '#', label: 'Projects' },
  { href: '#', label: 'Studio' },
  { href: '#', label: 'R&D' },
  { href: '#', label: 'Intelligence' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Navigation Pill */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        scrolled ? 'w-[90%] md:w-[600px]' : 'w-[95%] md:w-[90%]'
      }`}>
        <div className="glass-panel rounded-full px-5 py-3 md:px-6 md:py-4 flex items-center justify-between shadow-2xl shadow-black/50 relative overflow-hidden group">
            
            {/* Glass Shine Effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-shine bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

            {/* Logo */}
            <div className="flex items-center gap-3 z-10">
                <div className="relative flex items-center justify-center">
                    <Hexagon className="w-8 h-8 text-white stroke-[1.5] fill-white/5 relative z-10" />
                    <div className="absolute inset-0 bg-brand-orange blur-md opacity-40 rounded-full animate-pulse"></div>
                </div>
                <span className="font-mono font-bold tracking-tighter text-lg hidden md:block">
                    OBSIDIAN<span className="text-brand-orange">.</span>AI
                </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                <a 
                    key={link.label} 
                    href={link.href} 
                    className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white uppercase tracking-widest hover:bg-white/5 rounded-full transition-all duration-300"
                >
                    {link.label}
                </a>
                ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 z-10">
                <a href="#" className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-colors duration-300">
                    <span>Launch</span>
                    <ArrowUpRight size={14} />
                </a>
                
                {/* Mobile Menu Button - Enhanced Visibility */}
                <button 
                    className="md:hidden relative group p-2 rounded-full hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
                </button>
            </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div className={`fixed inset-0 bg-neutral-950 z-40 transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
         {/* Background FX */}
         <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none"></div>
         
         <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6 relative z-10">
             {navLinks.map((link, idx) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-[12vw] font-black tracking-tighter text-transparent text-stroke-1 hover:text-white hover:text-stroke-0 transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
         </div>

         {/* Mobile Footer / CTA */}
         <div className="p-8 w-full pb-12 flex flex-col gap-6 bg-gradient-to-t from-black to-transparent">
            <a href="#" className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all">
                <span>Start Project</span>
                <ArrowUpRight size={16} />
            </a>
            
            <div className="flex justify-center gap-8 pt-4 border-t border-white/10">
                {[Github, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors">
                        <Icon size={24} />
                    </a>
                ))}
            </div>
         </div>
      </div>
    </>
  );
};