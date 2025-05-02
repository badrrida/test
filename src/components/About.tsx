import React, { useEffect, useRef, useState } from 'react';
import { statistics } from '../data/statistics';

const About: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-neutral-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="./about.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Soumia Benamar" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto object-cover"
                style={{ aspectRatio: '3/4' }}
              />
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-accent p-4 rounded-lg shadow-md">
                <p className="font-heading font-bold text-white">20+ Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-3/4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
              About SBIA
            </h2>
            <p className="font-body text-neutral-darkGray mb-6">
            SB International Academy ‘s commitment lies in providing personalized guidance and comprehensive assistance to individuals & organizations to achieve excellence in their respective endeavors.
            We aspire to be the catalyst for positive change, driving innovation, sustainability, and progress, while always putting our clients at the heart of our mission.</p>

            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
            OUR VISION & MISSION
            </h2>
            <p className="font-body text-neutral-darkGray mb-8">

            To be the foremost consultancy company, globally recognized for excellence, innovation, and unwavering commitment to our clients' success. Our vision is to lead the way in shaping a brighter, more sustainable future through strategic insights and unparalleled expertise.
Our mission is to empower individuals & organizations to thrive in a rapidly evolving business landscape. We achieve this by providing expert guidance, actionable insights, and tailored strategies that drive growth and efficiency.            </p>

            {/* Statistics */}
            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-8">
              {statistics.map((stat, index) => (
                <div 
                  key={stat.title} 
                  className="bg-white p-6 rounded-lg shadow-card transition-transform duration-300 hover:shadow-hover hover:-translate-y-1"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    opacity: animateStats ? 1 : 0,
                    transform: animateStats ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease'
                  }}
                >
                  <h3 className="font-heading font-bold text-3xl text-accent mb-2">
                    {stat.value}
                  </h3>
                  <h4 className="font-heading font-bold text-lg text-primary mb-2">
                    {stat.title}
                  </h4>
                  <p className="font-body text-[13px] text-neutral-darkGray">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;