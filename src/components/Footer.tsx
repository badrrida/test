import React, { useState } from 'react';
import { socialLinks } from '../data/socialLinks';
import * as LucideIcons from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const getIcon = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons];
    return Icon ? <Icon size={18} /> : null;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    // Simulate subscription process
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail('');
    }, 500);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-full">
                <span className="text-white font-heading font-bold text-lg">SB</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">SBIA</span>
            </div>
            <p className="font-body text-white/80 mb-6">
              Empowering entrepreneurs and business leaders through strategic guidance, innovative solutions, and hands-on mentorship.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors"
                  aria-label={`Follow on ${link.platform}`}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#about" 
                  className="font-body text-white/80 hover:text-accent transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#about');
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="font-body text-white/80 hover:text-accent transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#services');
                  }}
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#case-studies" 
                  className="font-body text-white/80 hover:text-accent transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#case-studies');
                  }}
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="font-body text-white/80 hover:text-accent transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="font-body text-white/80 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-white/80 hover:text-accent transition-colors">
                  Startup Guide
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-white/80 hover:text-accent transition-colors">
                  Investment Tips
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-white/80 hover:text-accent transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Newsletter</h3>
            <p className="font-body text-white/80 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            {isSubscribed ? (
              <div className="bg-primary p-4 rounded border border-accent/50">
                <p className="font-body text-white font-medium">
                  Thank you for subscribing! You'll receive our updates soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe}>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Your email address"
                    className={`w-full px-4 py-2.5 bg-white/10 border ${
                      emailError ? 'border-error' : 'border-white/20'
                    } rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent`}
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-error/90">{emailError}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-sm text-white/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Soumia Benamar International Academy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="font-body text-sm text-white/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-white/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="font-body text-sm text-white/60 hover:text-accent transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;