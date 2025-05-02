import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import * as LucideIcons from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1500);
    }
  };

  // Get icon component from string name
  const getIcon = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons];
    return Icon ? <Icon size={18} /> : null;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
            Get in Touch
          </h2>
          <p className="font-body text-neutral-darkGray">
            Have questions or want to learn more about how SBIA can help your business? Reach out to us today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-3/5">
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-2">Thank You!</h3>
                <p className="font-body text-neutral-darkGray mb-6">
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary hover:bg-primary-light text-white font-medium text-sm rounded-full transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-neutral-lightGray p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block font-body font-medium text-neutral-darkGray mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-error' : 'border-neutral-gray'
                      } focus:outline-none focus:border-primary`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-error">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body font-medium text-neutral-darkGray mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-error' : 'border-neutral-gray'
                      } focus:outline-none focus:border-primary`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block font-body font-medium text-neutral-darkGray mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-gray focus:outline-none focus:border-primary"
                  >
                    <option value="">Select a topic</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="mentorship">Startup Mentorship</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block font-body font-medium text-neutral-darkGray mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-error' : 'border-neutral-gray'
                    } focus:outline-none focus:border-primary`}
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-error">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-medium text-white ${
                    isSubmitting ? 'bg-primary/70' : 'bg-primary hover:bg-primary-light'
                  } transition-colors`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="lg:w-2/5">
            <div className="bg-primary text-white p-8 rounded-lg h-full">
              <h3 className="font-heading font-bold text-2xl mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">
                      Location
                    </h4>
                    <p className="font-body text-white/80">
                      
                      Abu Dhabi<br /> United Arab Emirates
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">
                      Phone
                    </h4>
                    <p className="font-body text-white/80">
                    +971 56 413 6867
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">
                      Email
                    </h4>
                    <p className="font-body text-white/80">
                      info@sbia.ae
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-heading font-bold text-lg mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                <a
                      // key={link.platform}
                      href='https://www.instagram.com/dr.soumiabenamar?igsh=MWVqejBlbTd0YzlndA=='
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10  flex items-center justify-center text-white hover:bg-accent hover:text-white transition-colors"
                      aria-label=''
                    >
                      <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/>
                      
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;