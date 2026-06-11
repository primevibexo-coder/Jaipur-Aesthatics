/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Treatment {
  id: string;
  name: string;
  category: "skin" | "hair" | "facial" | "anti-aging" | "injectables" | "laser";
  iconName: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  procedure: string[];
  recovery: string;
  duration: string;
  sessionsRequired: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: "skin" | "hair" | "facial" | "anti-aging";
  beforeImage: string;
  afterImage: string;
  description: string;
  concern: string;
  timeframe: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  text: string;
  isGoogleVerified: boolean;
  videoUrl?: string; // Optional URL for video testimonials
  avatarText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "consultations" | "pricing" | "recovery" | "safety" | "treatments" | "appointments" | "aftercare";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "interiors" | "treatment-rooms" | "equipment" | "journey" | "interactions";
  url: string;
  alt: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  biography: string;
  qualifications: string[];
  experienceYears: number;
  memberships: string[];
  certifications: string[];
  awards: string[];
  philosophy: string;
  timeline: { year: string; title: string; description: string }[];
  speakingEngagements: string[];
}

export interface ClinicInfo {
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  workingHours: { days: string; hours: string }[];
  socialLinks: { platform: string; url: string }[];
  locationCoords: { lat: number; lng: number };
}
