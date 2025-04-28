import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "SBIA - Soumia Benamar International Academy";
  }, []);

  return (
    <div className="font-body">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;