import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { ActionButton } from './ui/ActionButton';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative w-full py-20 md:py-32 bg-neutral-950">
       <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Text */}
          <div>
            <ScrollReveal animation="fade-up">
                <span className="text-sm font-semibold text-brand-orange mb-4 block">Get In Touch</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Let's Work Together
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                    Have a project in mind? We'd love to hear about it. Fill out the form and we'll get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-white font-semibold mb-2">Email</h3>
                        <p className="text-gray-400">hello@digitalalchemy.com</p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-2">Phone</h3>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="bg-neutral-900 p-8 rounded-lg border border-white/10">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-white mb-2">Name</label>
                        <input 
                          type="text" 
                          placeholder="Your name" 
                          className="w-full bg-neutral-800 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" 
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-white mb-2">Email</label>
                        <input 
                          type="email" 
                          placeholder="your@email.com" 
                          className="w-full bg-neutral-800 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" 
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white mb-2">Message</label>
                        <textarea 
                          rows={5} 
                          placeholder="Tell us about your project..." 
                          className="w-full bg-neutral-800 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all resize-none"
                        ></textarea>
                    </div>

                    <ActionButton variant="primary" className="w-full">
                        Send Message
                    </ActionButton>
                </form>
            </div>
          </ScrollReveal>

       </div>
       </div>
    </section>
  );
};