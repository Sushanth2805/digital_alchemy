import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { StatCard } from './ui/StatCard';
import { ActionButton } from './ui/ActionButton';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-brand-dark text-white">
      
      {/* 1. DYNAMIC BACKGROUND LAYERS */}
      
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black z-0"></div>
      
      {/* Hero Image/3D Abstract */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            className="w-full h-full object-cover mix-blend-lighten opacity-60 animate-subtle-zoom origin-center saturate-0 contrast-125"
            alt="Abstract 3D Form"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>

      {/* Glowing Ambient Orbs */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[128px] animate-float mix-blend-screen z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[128px] animate-pulse mix-blend-screen z-0 pointer-events-none"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

      {/* 2. CONTENT STRUCTURE */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 min-h-screen flex flex-col justify-center py-24 md:py-0">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full lg:max-h-[800px] items-center">
            
            {/* LEFT COLUMN: Typography */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
                
                {/* Status Indicator */}
                <div className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-300">System Online v2.4</span>
                    </div>
                </div>

                {/* Main Headline - Staggered Reveal with Responsive Viewport Units */}
                <div className="space-y-[-5px] md:space-y-[-20px] relative">
                    <div className="overflow-hidden">
                        <h1 className="text-[13vw] md:text-8xl lg:text-[9rem] font-black tracking-tighter text-white animate-slide-reveal block leading-none" style={{ animationDelay: '0.2s' }}>
                            DIGITAL
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="text-[13vw] md:text-8xl lg:text-[9rem] font-black tracking-tighter text-transparent text-stroke-1 animate-slide-reveal block leading-none opacity-80" style={{ animationDelay: '0.3s' }}>
                            ALCHEMY
                        </h1>
                    </div>
                    <div className="overflow-hidden pt-4">
                        <p className="text-sm md:text-xl text-gray-400 font-light max-w-xl animate-slide-reveal border-l-2 border-brand-orange pl-4 md:pl-6 ml-1 md:ml-2" style={{ animationDelay: '0.5s' }}>
                            Transforming raw data into immersive digital experiences. Brutalist architecture meets neural aesthetics.
                        </p>
                    </div>
                </div>

                {/* Action Area */}
                <div className="flex flex-wrap gap-4 pt-4 md:pt-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                    <ActionButton variant="primary">
                        Start Initiative <ArrowRight className="w-4 h-4 ml-2" />
                    </ActionButton>
                    <ActionButton variant="glass">
                        <Play className="w-4 h-4 mr-2 fill-current" /> Watch Reel
                    </ActionButton>
                </div>
            </div>

            {/* RIGHT COLUMN: Stats & Visuals */}
            <div className="lg:col-span-5 hidden lg:flex flex-col justify-end h-full pb-20 relative">
                {/* Decorative vertical line */}
                <div className="absolute top-0 left-[-40px] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

                <div className="grid gap-4 relative">
                    {/* Floating 'Glass' Cards with specific delays */}
                    <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                        <StatCard 
                            value="204M+"
                            label="Neural Connections"
                            trend="System load: 42%"
                            variant="dark"
                        />
                    </div>
                    <div className="animate-fade-in-up opacity-0 ml-12" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                        <StatCard 
                            value="0.04s"
                            label="Interaction Latency"
                            trend="Optimized for Edge"
                            variant="light"
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Footer / Scroll Indicator */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex justify-between items-end z-20 pointer-events-none">
        <div className="hidden md:block font-mono text-xs text-gray-500">
            / EST. 2025<br/>
            / SAN FRANCISCO
        </div>
        
        <div className="flex flex-col items-center gap-2 animate-bounce opacity-50 mx-auto md:mx-0">
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
            <ChevronDown className="text-white w-4 h-4" />
        </div>

        <div className="hidden md:block font-mono text-xs text-gray-500 text-right">
            <span className="text-brand-orange">●</span> LIVE FEED<br/>
            ENCRYPTED
        </div>
      </div>
    </section>
  );
};