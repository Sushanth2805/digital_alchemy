import React from 'react';
import { ButtonProps } from '../../types';

export const ActionButton: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '' }) => {
  
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-sm group cursor-pointer";
  
  const variants = {
    primary: "bg-white text-black border border-white hover:bg-brand-orange hover:border-brand-orange hover:text-white",
    secondary: "bg-transparent border border-white/20 text-white hover:border-white",
    outline: "bg-transparent border border-white/30 text-white hover:border-brand-orange hover:text-brand-orange",
    glass: "bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/30"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Shine Effect for Primary Button */}
      {variant === 'primary' && (
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 pointer-events-none"></div>
      )}
      <span className="relative z-20 flex items-center gap-2">{children}</span>
    </button>
  );
};