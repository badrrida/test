import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/7709452/pexels-photo-7709452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundPosition: '70% center'
        }}
      >
        <div className="absolute inset-0 bg-primary opacity-75"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-slide-in">
            Grow Your Startup <br />the Right Way
          </h1>
          <p className="font-body text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-in" style={{animationDelay: '0.3s'}}>
            SBIA provides expert guidance to innovative startups and established businesses seeking sustainable growth and market leadership.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.5s'}}>
            <button 
              onClick={() => scrollToSection('#services')}
              className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </button>
            <button 
              onClick={() => scrollToSection('#about')}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary font-medium rounded-full transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;