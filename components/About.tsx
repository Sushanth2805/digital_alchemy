import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

export const About: React.FC = () => {
  return (
    <section className="relative w-full py-32 bg-brand-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Large Marquee Background */}
      <div className="absolute top-1/4 w-full -rotate-3 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-[20vw] font-black uppercase mx-4">Architects of the Unseen</span>
          <span className="text-[20vw] font-black uppercase mx-4 text-stroke-2">Architects of the Unseen</span>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Title Area */}
          <div className="lg:col-span-7">
             <ScrollReveal animation="slide-in">
                <h2 className="text-xs font-mono text-brand-orange tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-brand-orange"></span>
                  01 / PHILOSOPHY
                </h2>
             </ScrollReveal>
             
             <ScrollReveal animation="fade-up" delay={200}>
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
                  WE FORGE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">DIGITAL REALITIES</span> <br />
                  <span className="text-stroke-1 text-transparent">THAT BREATHE.</span>
                </h3>
             </ScrollReveal>
          </div>

          {/* Narrative Area */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <ScrollReveal animation="fade-up" delay={400}>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-12">
                We exist in the void between <span className="text-white font-medium">brutalist architecture</span> and <span className="text-white font-medium">reactive intelligence</span>. Obsidian isn't just an agency; it's a foundry for the next iteration of the web.
              </p>
            </ScrollReveal>
            
            <div className="space-y-8 border-l border-white/10 pl-8">
               <ScrollReveal animation="slide-in" delay={500} className="relative group">
                  <span className="absolute -left-[33px] top-2 w-2 h-2 bg-brand-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <h4 className="text-white font-mono uppercase text-sm tracking-widest mb-2">Vision</h4>
                  <p className="text-gray-500 text-sm">To make the invisible visible through code and motion.</p>
               </ScrollReveal>
               
               <ScrollReveal animation="slide-in" delay={600} className="relative group">
                  <span className="absolute -left-[33px] top-2 w-2 h-2 bg-brand-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <h4 className="text-white font-mono uppercase text-sm tracking-widest mb-2">Method</h4>
                  <p className="text-gray-500 text-sm">Relentless iteration. Data-driven aesthetics.</p>
               </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};