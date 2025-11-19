import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Brain, Boxes, ScanFace, Zap, Globe, Code2 } from 'lucide-react';

const capabilities = [
  { icon: Code2, label: "Web Development", desc: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript" },
  { icon: Brain, label: "UI/UX Design", desc: "User-centered design that balances aesthetics with functionality and accessibility" },
  { icon: Boxes, label: "E-commerce Solutions", desc: "Full-featured online stores with secure payments, inventory management, and analytics" },
  { icon: Zap, label: "Performance Optimization", desc: "Fast-loading, SEO-friendly websites optimized for search engines and user experience" },
  { icon: Globe, label: "Responsive Design", desc: "Mobile-first designs that work seamlessly across all devices and screen sizes" },
  { icon: ScanFace, label: "Maintenance & Support", desc: "Ongoing support, updates, and improvements to keep your site running smoothly" },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative w-full py-24 md:py-32 bg-neutral-950 overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 pointer-events-none"></div>
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none"></div>

       <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Capabilities</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                    Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Digital Excellence</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                    We combine technical expertise with creative innovation to deliver solutions that drive real business growth.
                </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                    <div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
                        
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-orange/30 group-hover:shadow-[0_0_20px_rgba(255,59,0,0.15)] transition-all duration-300">
                                <cap.icon className="w-7 h-7 text-gray-300 group-hover:text-brand-orange transition-colors" />
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">{cap.label}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{cap.desc}</p>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
          </div>
       </div>
    </section>
  );
};