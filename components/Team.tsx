import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

const team = [
  { name: "ALEX CHEN", role: "FOUNDER / TECHNOLOGIST", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop" },
  { name: "SARAH VOSS", role: "CREATIVE DIRECTOR", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop" },
  { name: "JAXON REED", role: "AI ARCHITECT", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" },
  { name: "ELENA K.", role: "VISUAL DESIGNER", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop" },
];

export const Team: React.FC = () => {
  return (
    <section className="relative w-full py-32 bg-brand-dark border-t border-white/5">
       <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
            <ScrollReveal animation="slide-in">
                <h2 className="text-xs font-mono text-brand-orange tracking-widest mb-2">04 / INTELLIGENCE</h2>
                <h3 className="text-5xl font-bold tracking-tighter">THE <span className="text-stroke-1 text-transparent">MIND</span>SET</h3>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-gray-400 max-w-md text-right md:text-left mt-4 md:mt-0">
                    A collective of multidisciplinary artists, engineers, and strategists pushing the boundaries of perception.
                </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {team.map((member, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 150}>
                    <div className="group relative">
                        <div className="relative overflow-hidden aspect-[3/4] mb-6 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-125">
                            <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            
                            {/* Glitch/Scanline Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:4px_4px] opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity"></div>
                            
                            {/* Border Glow */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-brand-orange/50 transition-all duration-300"></div>
                        </div>
                        
                        <div className="relative pl-4 border-l-2 border-transparent group-hover:border-brand-orange transition-colors duration-300">
                            <h4 className="text-xl font-bold text-white uppercase tracking-tight">{member.name}</h4>
                            <p className="text-xs font-mono text-gray-500 mt-1 group-hover:text-brand-orange transition-colors">{member.role}</p>
                        </div>
                    </div>
                </ScrollReveal>
             ))}
          </div>
       </div>
    </section>
  );
};