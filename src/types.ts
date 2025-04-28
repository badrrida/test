export interface NavItem {
  name: string;
  href: string;
}

export interface Statistic {
  value: string;
  title: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  industry: string;
  result: string;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
}