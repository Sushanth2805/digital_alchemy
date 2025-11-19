import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

const projects = [
  {
    id: 1,
    title: "NEURAL SYMPHONY",
    category: "AI / AUDIO VISUALIZATION",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2574&auto=format&fit=crop",
    size: "col-span-1 md:col-span-8",
    height: "h-[280px] md:h-[500px]"
  },
  {
    id: 2,
    title: "VOID WALKER",
    category: "WEBGL EXPERIENCE",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    size: "col-span-1 md:col-span-4",
    height: "h-[280px] md:h-[500px]"
  },
  {
    id: 3,
    title: "AEON FLUX",
    category: "IMMERSIVE COMMERCE",
    image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2574&auto=format&fit=crop",
    size: "col-span-1 md:col-span-4",
    height: "h-[300px] md:h-[600px]"
  },
  {
    id: 4,
    title: "CYBER DYNAMICS",
    category: "ROBOTICS INTERFACE",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
    size: "col-span-1 md:col-span-8",
    height: "h-[300px] md:h-[600px]"
  }
];

export const Work: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-neutral-950 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
          <ScrollReveal animation="slide-in">
            <h2 className="text-xs font-mono text-brand-orange tracking-widest mb-4 flex items-center gap-2">
               <span className="w-8 h-px bg-brand-orange"></span>
               02 / SELECTED WORKS
            </h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter text-white">
              DIGITAL <span className="text-stroke-1 text-transparent">ARTIFACTS</span>
            </h3>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={200}>
            <a href="#" className="group flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition-colors mt-8 md:mt-0">
              VIEW ALL PROJECTS
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, idx) => (
            <div key={project.id} className={`${project.size} group cursor-pointer relative`}>
               <ScrollReveal animation="blur-in" delay={idx * 150} className="h-full w-full">
                 <div className={`relative w-full ${project.height} overflow-hidden rounded-sm`}>
                    {/* Image */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-500"></div>
                    
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 mix-blend-overlay"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="overflow-hidden mb-2">
                        <p className="font-mono text-[10px] md:text-xs text-brand-orange mb-1 md:transform md:-translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          {project.category}
                        </p>
                      </div>
                      <h4 className="text-2xl md:text-4xl font-bold text-white leading-none group-hover:text-transparent group-hover:text-stroke-1 transition-colors duration-300">
                        {project.title}
                      </h4>
                    </div>

                    {/* Hover Icon */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-0">
                        <ArrowUpRight className="text-white w-4 h-4 md:w-5 md:h-5" />
                    </div>
                 </div>
               </ScrollReveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};