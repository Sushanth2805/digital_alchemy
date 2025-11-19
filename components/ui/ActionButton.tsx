import React from 'react';
import { ButtonProps } from '../../types';

export const ActionButton: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '' }) => {
  
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-200 rounded group cursor-pointer";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-brand-orange/90 shadow-lg shadow-brand-orange/20",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "bg-transparent border-2 border-white/20 text-white hover:border-white hover:bg-white/5",
    glass: "bg-white/10 border border-white/20 backdrop-blur-md text-white hover:bg-white/15"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="flex items-center gap-2">{children}</span>
    </button>
  );
};