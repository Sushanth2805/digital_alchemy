import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

const projects = [
  {
    id: 1,
    title: "TechCorp Platform",
    category: "Web Application",
    description: "A comprehensive SaaS platform for project management with real-time collaboration",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2574&auto=format&fit=crop",
    size: "col-span-1 md:col-span-8",
    height: "h-[280px] md:h-[400px]"
  },
  {
    id: 2,
    title: "Boutique E-commerce",
    category: "Online Store",
    description: "Modern e-commerce experience with seamless checkout and inventory management",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    size: "col-span-1 md:col-span-4",
    height: "h-[280px] md:h-[400px]"
  },
  {
    id: 3,
    title: "Creative Portfolio",
    category: "Website Design",
    description: "Stunning portfolio website for a design agency showcasing their work",
    image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2574&auto=format&fit=crop",
    size: "col-span-1 md:col-span-4",
    height: "h-[280px] md:h-[400px]"
  },
  {
    id: 4,
    title: "FinanceHub Dashboard",
    category: "Data Visualization",
    description: "Interactive dashboard for financial analytics and reporting",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
    size: "col-span-1 md:col-span-8",
    height: "h-[280px] md:h-[400px]"
  }
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="relative w-full py-24 md:py-32 bg-neutral-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Masterpieces</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={200}>
             <div className="flex items-center gap-2 text-white border-b border-brand-orange pb-1 cursor-pointer hover:opacity-80 transition-opacity">
                 <span className="text-sm font-bold uppercase tracking-wider">View All Projects</span>
                 <ArrowUpRight className="w-4 h-4" />
             </div>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.id} animation="fade-up" delay={idx * 150}>
              <div className={`group cursor-pointer relative rounded-2xl overflow-hidden border border-white/5 ${idx % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'}`}>
                
                {/* Image */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                       <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-brand-orange mb-4 border border-white/10">
                         {project.category}
                       </span>
                       
                       <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                         {project.title}
                       </h3>
                       
                       <p className="text-gray-300 max-w-xl text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                         {project.description}
                       </p>
                   </div>
                   
                   {/* Floating Arrow */}
                   <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                       <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>
                
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};