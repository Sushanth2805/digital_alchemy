import React from 'react';
import  Navbar  from './components/Navbar';
import  Hero  from './components/Hero';
import  About  from './components/About';
import  Work  from './components/Work';
import  Services  from './components/Services';
import Team  from './components/Team';
import  Contact  from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-brand-orange selection:text-white relative font-sans overflow-hidden">
      {/* Global Noise Texture */}
      <div className="noise-overlay mix-blend-overlay opacity-[0.04]"></div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Team />
        <Contact />
      </main>
    </div>
  );
};

export default App;
