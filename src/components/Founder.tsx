import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { achievements } from '../data/achievements';

const Founder: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="founder" className="py-20 bg-neutral-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              Meet Soumia Benamar
            </h2>
            <p className="font-body text-neutral-darkGray mb-6">
              Soumia Benamar is an internationally recognized business strategist, startup mentor, and innovation expert with a passion for helping entrepreneurs unlock their full potential.
            </p>
            <p className="font-body text-neutral-darkGray mb-8">
              With over 15 years of experience working with startups and established companies across the globe, Soumia brings a unique perspective that combines strategic thinking, practical implementation, and cultural intelligence.
            </p>

            {/* Achievements Timeline */}
            <div className="mt-10 space-y-8">
              <h3 className="font-heading font-bold text-xl text-primary">Achievements</h3>
              <div className="relative pl-8 border-l-2 border-accent space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[25px] w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-heading font-bold">
                      {achievement.year}
                    </div>
                    <div className="pt-1.5">
                      <h4 className="font-heading font-bold text-lg text-primary mb-1">
                        {achievement.title}
                      </h4>
                      <p className="font-body text-sm text-neutral-darkGray">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image and Testimonials */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative mb-10">
              <img 
                src="./sb.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Soumia Benamar" 
                className="rounded-lg shadow-lg w-full object-cover"
                // style={{ aspectRatio: '4/3' }}
              />
            </div>

            {/* Testimonials */}
            <div className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1">
                <div 
                  className="bg-accent h-full"
                  style={{ 
                    width: `${((activeTestimonial + 1) / testimonials.length) * 100}%`,
                    transition: 'width 1s linear'
                  }}
                ></div>
              </div>
              
              <div className="relative h-[180px]">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ${
                      activeTestimonial === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="font-body text-lg italic text-neutral-darkGray mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-heading font-bold text-primary">
                        {testimonial.author}
                      </p>
                      <p className="font-body text-sm text-neutral-darkGray">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      activeTestimonial === index ? 'bg-accent' : 'bg-neutral-gray'
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;