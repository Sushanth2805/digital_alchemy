import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-neutral-950 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Title Area - Sticky on Desktop */}
          <div className="lg:sticky lg:top-32">
             <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">About Us</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                  We craft <span className="text-white">digital products</span> that <span className="text-gray-500">people love to use.</span>
                </h2>
                
                <div className="h-1 w-24 bg-brand-orange rounded-full"></div>
             </ScrollReveal>
          </div>

          {/* Content Area */}
          <div className="pt-4">
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12">
                Digital Alchemy is a creative technology studio where <span className="text-white font-medium">design meets engineering</span>. We don't just build websites; we create immersive digital ecosystems that drive growth.
              </p>
              
              <div className="space-y-12">
                  <div className="group">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-mono text-brand-orange">01</span>
                          Strategic Vision
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed pl-11 border-l border-white/10 group-hover:border-brand-orange/50 transition-colors duration-300">
                          We look beyond code to understand your business goals, ensuring every pixel serves a purpose in your broader strategy.
                      </p>
                  </div>

                  <div className="group">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-mono text-brand-orange">02</span>
                          Technical Excellence
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed pl-11 border-l border-white/10 group-hover:border-brand-orange/50 transition-colors duration-300">
                          We use cutting-edge technologies to build robust, scalable, and high-performance applications that stand the test of time.
                      </p>
                  </div>
                  
                  <div className="group">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-mono text-brand-orange">03</span>
                          User-Centric
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed pl-11 border-l border-white/10 group-hover:border-brand-orange/50 transition-colors duration-300">
                          Our design philosophy puts the user first, creating intuitive interfaces that are accessible, engaging, and delightful.
                      </p>
                  </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};