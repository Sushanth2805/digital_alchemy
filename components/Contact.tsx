import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { ActionButton } from './ui/ActionButton';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center bg-black overflow-hidden pt-20">
       {/* Parallax Background Orbs */}
       <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[100px] animate-float"></div>
       <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse"></div>
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

       <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: CTA Text */}
          <div>
            <ScrollReveal animation="slide-in">
                <h2 className="text-sm font-mono text-brand-orange tracking-widest mb-6">READY TO DEPLOY?</h2>
                <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                    START THE <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">INITIATIVE</span>
                </h3>
                <p className="text-xl text-gray-400 max-w-md mb-12">
                    Let's build something that hasn't been imagined yet. We are currently accepting new partnerships for Q4 2025.
                </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
                <div className="flex gap-6 mb-12">
                    {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                        <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                            <Icon size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                    ))}
                </div>
            </ScrollReveal>
          </div>

          {/* Right: Glass Form */}
          <ScrollReveal animation="blur-in" delay={300}>
            <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-purple-500 to-brand-orange animate-shine bg-[length:200%_100%]"></div>
                
                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-gray-500 uppercase">Identity</label>
                        <input type="text" placeholder="Name or Organization" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all" />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-gray-500 uppercase">Frequency</label>
                        <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-mono text-gray-500 uppercase">Transmission</label>
                        <textarea rows={4} placeholder="Project Details..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all resize-none"></textarea>
                    </div>

                    <ActionButton variant="primary" className="w-full py-5">
                        Transmit Request
                    </ActionButton>
                </form>
            </div>
          </ScrollReveal>

       </div>

       {/* Copyright */}
       <div className="absolute bottom-8 w-full text-center">
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                © 2025 OBSIDIAN.AI / ALL SYSTEMS NOMINAL
            </p>
       </div>
    </section>
  );
};