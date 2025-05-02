import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../data/navigation';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
            >
              <img 
                src="/sbia-logo.png" 
                alt="SBIA Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-body font-medium text-sm transition-colors duration-300 hover:text-accent ${
                  isScrolled ? 'text-neutral-darkGray' : 'text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-accent bg-accent text-white font-medium text-sm rounded-full transition-colors hover:bg-accent-dark"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute left-0 right-0 top-full">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-body font-medium text-neutral-darkGray hover:text-accent py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-accent bg-accent text-white font-medium text-sm rounded-full transition-colors hover:bg-accent-dark"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;