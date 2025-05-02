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
    <section id="case-studies" className="py-20 bg-slate-200  text-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-black mb-4">
            Worked With
          </h2>
          <p className="font-body text-black/80">
            We've helped innovative companies across industries achieve remarkable growth and success.
          </p>
        </div>

        {/* Case Studies Carousel - Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 items-center">
          <img className='mx-auto my-auto mix-blend-multiply scale-[0.7]' src="./lv.svg" alt="" />
          <img className='mx-auto my-auto' src="./burj-al-arab.svg" alt="" />
          <img className='mx-auto my-auto' src="./es.svg" alt="" />
          <img className='mx-auto my-auto' src="./fp.svg" alt="" />
          <img className='mx-auto my-auto' src="./hs.png" alt="" />
          <img className='mx-auto my-auto' src="./pv.png" alt="" />
          <img className='mx-auto my-auto' src="./ror.svg" alt="" />
          <img className='mx-auto my-auto' src="./rr.svg" alt="" />
        </div>        
      </div>
    </section>
  );
};

export default CaseStudies;