import React, { useRef, useState, useEffect } from 'react';
import { caseStudies } from '../data/caseStudies';

const CaseStudies: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load data with error handling
  useEffect(() => {
    try {
      if (caseStudies && caseStudies.length > 0) {
        setIsLoading(false);
      } else {
        setError('No case studies available');
      }
    } catch (err) {
      setError('Failed to load case studies');
    }
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const scrollToItem = (index: number) => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const items = container.querySelectorAll('.case-study-item');
      if (items[index]) {
        container.scrollTo({
          left: items[index].getBoundingClientRect().left + container.scrollLeft - container.getBoundingClientRect().left,
          behavior: 'smooth'
        });
      }
    }
  };

  // Initialize visibility observer with fallback
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    if (scrollContainer.current) {
      observer.observe(scrollContainer.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Scroll to active item when data loads
  useEffect(() => {
    if (!isLoading && scrollContainer.current) {
      scrollToItem(activeIndex);
    }
  }, [activeIndex, isLoading]);

  if (error) {
    return (
      <section id="case-studies" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent">Error: {error}</p>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section id="case-studies" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">Loading case studies...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="case-studies" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Success Stories
          </h2>
          <p className="font-body text-white/80">
            We've helped innovative companies across industries achieve remarkable growth and success.
          </p>
        </div>

        {/* Case Studies Carousel - Mobile */}
        <div className="relative">
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto gap-6 pb-6 md:hidden snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`case-study-item flex-shrink-0 w-[85%] snap-center bg-white rounded-lg shadow-lg overflow-hidden text-neutral-darkGray ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Image+Not+Found';
                  }}
                />
                <div className="p-6">
                  <div className="inline-block bg-accent/20 text-accent text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                    {study.industry}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary mb-2">
                    {study.title}
                  </h3>
                  <p className="font-body text-sm mb-4">
                    {study.description}
                  </p>
                  <div className="border-t border-neutral-gray pt-4">
                    <p className="font-body text-sm font-medium">
                      <span className="text-accent font-bold">Result: </span>
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Case Studies Grid - Desktop */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden text-neutral-darkGray transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Image+Not+Found';
                  }}
                />
                <div className="p-6">
                  <div className="inline-block bg-accent/20 text-accent text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                    {study.industry}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary mb-2">
                    {study.title}
                  </h3>
                  <p className="font-body text-sm mb-4">
                    {study.description}
                  </p>
                  <div className="border-t border-neutral-gray pt-4">
                    <p className="font-body text-sm font-medium">
                      <span className="text-accent font-bold">Result: </span>
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex justify-center mt-8 gap-2 md:hidden">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  activeIndex === index ? 'bg-accent' : 'bg-white/50'
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToItem(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;