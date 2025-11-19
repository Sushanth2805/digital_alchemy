import React from 'react';
import { StatCardProps } from '../../types';
import { Activity, Cpu } from 'lucide-react';

interface EnhancedStatCardProps extends StatCardProps {
    variant?: 'dark' | 'light';
}

export const StatCard: React.FC<EnhancedStatCardProps> = ({ value, label, trend, variant = 'dark' }) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`
        relative overflow-hidden rounded-xl p-6 transition-all duration-500 group hover:-translate-y-1
        ${isDark 
            ? 'glass-panel bg-black/40' 
            : 'bg-white/5 border border-white/10 backdrop-blur-sm'}
    `}>
      {/* Hover Gradient Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-purple-600 opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
      
      <div className="relative flex justify-between items-start">
        <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mb-1 flex items-center gap-2">
                {label}
                {isDark ? <Activity size={12} className="text-brand-orange" /> : <Cpu size={12} className="text-blue-400" />}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2">
                {value}
            </h3>
        </div>
      </div>
      
      <div className="relative mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
         <span className="text-xs text-gray-500 font-mono">{trend}</span>
         <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-1 h-3 rounded-full ${i > 2 ? 'bg-gray-700' : isDark ? 'bg-brand-orange' : 'bg-blue-500'} opacity-${i > 2 ? '30' : '100'}`}></div>
            ))}
         </div>
      </div>
    </div>
  );
};