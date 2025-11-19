import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-brand-orange selection:text-white relative font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
