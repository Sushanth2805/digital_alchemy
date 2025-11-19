import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'slide-in' | 'blur-in' | 'scale-up';
  delay?: number;
  className?: string;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  className = '',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20';
      case 'slide-in':
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20';
      case 'blur-in':
        return isVisible ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-lg scale-95';
      case 'scale-up':
        return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90';
      default:
        return isVisible ? 'opacity-100' : 'opacity-0';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};