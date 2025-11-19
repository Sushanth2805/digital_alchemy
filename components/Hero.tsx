import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { ActionButton } from './ui/ActionButton';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-neutral-950 text-white pt-20">
      
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Base */}
        <div className="absolute inset-0 bg-neutral-950"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] animate-pulse mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] animate-pulse mix-blend-screen" style={{ animationDelay: '2s' }}></div>
        
        {/* Modern Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Typography & content */}
        <div className="max-w-3xl pt-10 lg:pt-0">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 backdrop-blur-md mb-8 animate-fade-in-up shadow-[0_0_15px_rgba(255,59,0,0.1)]">
                <Sparkles className="w-3 h-3 text-brand-orange" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Creative Technology Studio</span>
            </div>

            {/* Main Headline with Gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                We Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Digital Experiences</span> <br />
                That <span className="text-brand-orange underline decoration-brand-orange/30 decoration-4 underline-offset-8">Matter</span>.
            </h1>

            {/* Clear Description */}
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                From interactive websites to immersive web applications, we transform your ideas into engaging digital products that users love.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-12 mb-12 border-y border-white/5 py-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div>
                    <div className="text-3xl font-bold text-white mb-1">50+</div>
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Projects</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-white mb-1">98%</div>
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Satisfaction</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-white mb-1">5Y+</div>
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Experience</div>
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <ActionButton variant="primary">
                    View Our Work <ArrowRight className="w-4 h-4 ml-2" />
                </ActionButton>
                <ActionButton variant="glass">
                    Get In Touch
                </ActionButton>
            </div>
        </div>

        {/* Right: Abstract Visual Composition */}
        <div className="hidden lg:block relative h-[600px] w-full animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full h-full perspective-1000">
                
                {/* Code Editor Glass Card */}
                <div 
                    className="absolute top-[5%] right-[5%] w-[90%] h-[80%] bg-[#0a0a0a]/90 border border-white/10 rounded-xl backdrop-blur-xl shadow-2xl transition-transform duration-200 ease-out overflow-hidden group"
                    style={{ transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px) rotateY(-2deg)` }}
                >
                    {/* Editor Header */}
                    <div className="w-full h-10 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="text-[10px] font-mono text-gray-500">alchemy.config.ts</div>
                    </div>

                    {/* Editor Content */}
                    <div className="p-6 font-mono text-sm space-y-2 text-gray-400">
                        <div className="flex">
                            <span className="text-purple-400 mr-2">const</span>
                            <span className="text-yellow-200">DigitalAlchemy</span>
                            <span className="text-white mr-2"> = </span>
                            <span className="text-white">{'{'}</span>
                        </div>
                        <div className="pl-4">
                            <span className="text-blue-300">innovation:</span> <span className="text-brand-orange">true</span>,
                        </div>
                        <div className="pl-4">
                            <span className="text-blue-300">creativity:</span> <span className="text-green-300">"unbounded"</span>,
                        </div>
                         <div className="pl-4">
                            <span className="text-blue-300">experience:</span> <span className="text-white">['Web', 'Mobile', 'XR']</span>,
                        </div>
                        <div className="pl-4">
                             <span className="text-blue-300">stack:</span> <span className="text-white">{'{'}</span>
                        </div>
                        <div className="pl-8">
                             <span className="text-gray-500">// Modern tech stack</span>
                        </div>
                        <div className="pl-8">
                             <span className="text-purple-400">framework:</span> <span className="text-green-300">"Next.js"</span>,
                        </div>
                        <div className="pl-8">
                             <span className="text-purple-400">styling:</span> <span className="text-green-300">"Tailwind"</span>
                        </div>
                        <div className="pl-4">
                             <span className="text-white">{'}'}</span>
                        </div>
                        <div>
                            <span className="text-white">{'}'}</span>;
                        </div>
                        
                         <div className="pt-4 flex items-center gap-2">
                            <span className="text-purple-400">export default</span>
                            <span className="text-yellow-200">DigitalAlchemy</span>;
                            <span className="animate-pulse text-brand-orange">|</span>
                        </div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 blur-3xl pointer-events-none"></div>
                </div>

                {/* Floating Elements */}
                <div 
                    className="absolute top-[20%] left-[-10%] w-[180px] p-4 bg-neutral-900/90 border border-white/10 rounded-lg backdrop-blur-md shadow-xl z-20"
                    style={{ transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)` }}
                >
                     <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                            <Sparkles size={14} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-white">AI-Powered</div>
                            <div className="text-[10px] text-gray-500">Optimization</div>
                        </div>
                     </div>
                     <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                         <div className="bg-brand-orange h-full w-[85%] animate-pulse"></div>
                     </div>
                </div>
                
                <div 
                    className="absolute bottom-[15%] right-[-5%] w-[220px] p-4 bg-neutral-900/90 border border-white/10 rounded-lg backdrop-blur-md shadow-xl z-20"
                    style={{ transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)` }}
                >
                     <div className="flex justify-between items-center mb-3">
                         <span className="text-xs font-bold text-white">Performance</span>
                         <span className="text-xs text-green-400 font-mono">99.8%</span>
                     </div>
                     <div className="flex items-end gap-1 h-10">
                         {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                             <div key={i} className="flex-1 bg-white/10 rounded-sm hover:bg-brand-orange/80 transition-colors" style={{ height: `${h}%` }}></div>
                         ))}
                     </div>
                </div>

            </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 z-20">
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Scroll to explore</span>
        <ChevronDown className="text-gray-500 w-4 h-4" />
      </div>
    </section>
  );
};