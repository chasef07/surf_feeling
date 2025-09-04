// Global type definitions for the surf business app

export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in hours
  price: number; // VND
  priceUSD: number;
  maxParticipants: number;
  includes: string[];
}

export interface Rental {
  id: string;
  name: string;
  type: 'shortboard' | 'longboard' | 'funboard' | 'softboard';
  description: string;
  hourlyRate: number;
  dailyRate: number;
  weeklyRate: number;
  available: boolean;
  features: string[];
}

export interface Partner {
  id: string;
  name: string;
  type: 'accommodation' | 'tour_operator' | 'equipment_supplier' | 'surf_school';
  description: string;
  website?: string;
  contact?: string;
  logo?: string;
  benefits: string[];
}

export interface Instructor {
  id: string;
  name: string;
  nickname: string;
  experience: string;
  speciality: string;
  languages: string[];
  bio: string;
  certifications: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  service: 'lessons' | 'rentals' | 'general';
  message: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}