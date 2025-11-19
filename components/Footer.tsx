import React from 'react';
import { Hexagon } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-neutral-950 pt-20 border-t border-white/5 overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none"></div>
       
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-12 relative z-10">
        
        {/* Large CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20 border-b border-white/5 pb-20">
            <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to start?</h2>
                <p className="text-gray-400 text-lg max-w-md">Let's build something amazing together. Reach out to discuss your next project.</p>
            </div>
            <a href="#contact" className="px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-brand-orange/20">
                Start a Project
            </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
             <div className="flex items-center gap-3 mb-6">
                <Hexagon className="w-8 h-8 text-brand-orange stroke-2" />
                <span className="font-bold text-2xl text-white tracking-tight">Digital Alchemy</span>
             </div>
             <p className="text-gray-400 leading-relaxed max-w-sm mb-8">
                A premium creative technology studio tailored for ambitious brands. We blend art, code, and strategy to create digital legacies.
             </p>
             <div className="flex gap-4">
                 {/* Social Placeholders */}
                 {[1, 2, 3].map((i) => (
                     <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all cursor-pointer">
                         <div className="w-4 h-4 bg-current rounded-sm"></div>
                     </div>
                 ))}
             </div>
          </div>

          {/* Links Column */}
          <div>
             <h4 className="text-white font-bold mb-6">Sitemap</h4>
             <ul className="space-y-4">
                 <li><a href="#work" className="text-gray-400 hover:text-brand-orange transition-colors">Selected Work</a></li>
                 <li><a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors">Our Services</a></li>
                 <li><a href="#about" className="text-gray-400 hover:text-brand-orange transition-colors">Company</a></li>
                 <li><a href="#contact" className="text-gray-400 hover:text-brand-orange transition-colors">Contact</a></li>
             </ul>
          </div>

          {/* Legal/Contact Column */}
          <div>
             <h4 className="text-white font-bold mb-6">Studio</h4>
             <ul className="space-y-4">
                 <li className="text-gray-400">San Francisco, CA</li>
                 <li className="text-gray-400">hello@digitalalchemy.com</li>
                 <li className="pt-4"><a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider">Privacy Policy</a></li>
                 <li><a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-wider">Terms of Service</a></li>
             </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600 font-mono uppercase tracking-widest">
            <p>© 2025 Digital Alchemy. All Rights Reserved.</p>
            <p>Designed & Developed by Obsidian</p>
        </div>
      </div>
    </footer>
  );
};

