import React from 'react';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  // Dynamic icon rendering
  const getIcon = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons];
    return Icon ? <Icon size={32} className="text-accent" /> : null;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            Our Services
          </h2>
          <p className="font-body text-neutral-darkGray">
            SBIA offers comprehensive consulting services designed to help startups and businesses thrive in competitive markets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-neutral-lightGray p-6 rounded-lg shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-2 group"
            >
              {/* <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                {getIcon(service.icon)}
              </div> */}
              <h3 className="font-heading font-bold text-xl text-primary mb-6">
                {service.title}
              </h3>
              <p className="font-body text-neutral-darkGray">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => scrollToSection('#contact')}
            className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-full transition-all duration-300"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;