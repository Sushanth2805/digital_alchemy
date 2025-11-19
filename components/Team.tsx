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
    <section className="relative w-full py-20 md:py-32 bg-black">
       <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-16">
            <ScrollReveal animation="fade-up">
                <span className="text-sm font-semibold text-brand-orange mb-4 block">Our Team</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Meet The Team
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl">
                    A talented group of designers, developers, and strategists dedicated to creating exceptional digital experiences.
                </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {team.map((member, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                    <div className="group">
                        <div className="relative overflow-hidden aspect-square mb-4 rounded-lg">
                            <img 
                              src={member.img} 
                              alt={member.name} 
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-sm text-brand-orange">{member.role}</p>
                        </div>
                    </div>
                </ScrollReveal>
             ))}
          </div>
       </div>
    </section>
  );
};