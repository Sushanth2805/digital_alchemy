import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Brain, Boxes, ScanFace, Zap, Globe, Code2 } from 'lucide-react';

const capabilities = [
  { icon: Brain, label: "Neural Networks", desc: "Custom LLM Integration" },
  { icon: Boxes, label: "3D WebGL", desc: "Immersive Browser Experiences" },
  { icon: ScanFace, label: "Computer Vision", desc: "Real-time AR & Tracking" },
  { icon: Zap, label: "Creative Automation", desc: "Procedural Asset Generation" },
  { icon: Globe, label: "Spatial Computing", desc: "VR/XR Environments" },
  { icon: Code2, label: "Full-Stack Eng", desc: "Scalable React Architecture" },
];

export const Services: React.FC = () => {
  return (
    <section className="relative w-full py-32 bg-brand-surface overflow-hidden">
       {/* Ambient Light */}
       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px]"></div>

       <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <ScrollReveal animation="fade-up">
                <h2 className="text-xs font-mono text-brand-orange tracking-widest mb-4 inline-flex items-center gap-2 border border-brand-orange/20 px-4 py-1 rounded-full">
                    SYSTEM CAPABILITIES
                </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4">
                    ENGINEERING THE <br/>
                    <span className="text-gray-500">IMPOSSIBLE</span>
                </h3>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
                <ScrollReveal key={idx} animation="scale-up" delay={idx * 100}>
                    <div className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-brand-orange/40 transition-all duration-500">
                        <div className="bg-black/80 backdrop-blur-xl p-8 rounded-xl h-full relative overflow-hidden group-hover:bg-black/60 transition-all">
                            
                            {/* Icon Background Glow */}
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-orange/50 transition-all duration-300">
                                    <cap.icon className="w-6 h-6 text-gray-300 group-hover:text-brand-orange transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{cap.label}</h4>
                                <p className="text-sm text-gray-500 font-mono">{cap.desc}</p>
                            </div>

                            {/* Bottom Line */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/0 to-transparent group-hover:via-brand-orange/50 transition-all duration-700"></div>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
          </div>
       </div>
    </section>
  );
};