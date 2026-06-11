/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { TREATMENTS, BEFORE_AFTER_ITEMS, TESTIMONIALS, CLINIC_INFO, DOCTOR_PROFILE } from "../data";
import { motion } from "motion/react";
import { Sparkles, Phone, MessageSquare, Shield, Award, Users, ThumbsUp, ChevronLeft, ChevronRight, Star, Heart, Activity } from "lucide-react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

interface HomeViewProps {
  onPageChange: (page: string) => void;
}

export default function HomeView({ onPageChange }: HomeViewProps) {
  // Testimonial Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // WhatsApp helper
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Jaipur Aesthetics Clinic, I would like to inquire about a premium consultation.");
    window.open(`https://wa.me/919116055700?text=${message}`, "_blank");
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* 1. LUXURY HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-cream/30 pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Abstract luxury backdrop accents */}
        <div className="absolute top-0 right-0 w-[45%] h-full bg-cream/70 rounded-bl-[120px] -z-10 hidden md:block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
            alt="Jaipur Aesthetics Luxury Lounge"
            className="w-full h-full object-cover opacity-60 mix-blend-multiply scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-transparent to-transparent" />
        </div>

        {/* Ambient glow particles */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-gold/20 rounded-full blur-xl animate-bounce" />
        <div className="absolute bottom-1/4 right-[20%] w-6 h-6 bg-accent/20 rounded-full blur-xl animate-pulse" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 bg-gold/10 border border-gold/25 px-4.5 py-1.5 rounded-full mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-[11px] uppercase tracking-widest font-bold text-gold-dark font-mono">
                The Pinnacle of Medical Artistry
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-dark tracking-tight leading-[115%] mb-6"
            >
              Enhance Your Natural Beauty with <span className="text-gold">Expert Aesthetic Care</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-base sm:text-lg text-dark/70 leading-relaxed max-w-xl mb-10 font-sans"
            >
              Advanced skin, hair and facial aesthetic treatments delivered with surgical precision, safety certifications and customized luxury care in Jaipur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => onPageChange("book")}
                className="px-8 py-4 bg-dark hover:bg-gold text-cream hover:text-white rounded-full cursor-pointer border border-dark hover:border-gold font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:scale-[1.03] text-center"
              >
                Book Appointment
              </button>
              <button
                onClick={handleWhatsApp}
                className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg border-none cursor-pointer"
              >
                <svg 
                  viewBox="0 0 448 512" 
                  className="w-4 h-4 fill-white" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.2 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg> WhatsApp Concierge
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-8 border-t border-dark/10 pt-8"
            >
              <div>
                <span className="block font-serif text-3xl font-bold text-dark mb-1">14+</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-dark/50">Years Medical Practice</span>
              </div>
              <div className="w-px bg-dark/15 self-stretch hidden sm:block" />
              <div>
                <span className="block font-serif text-3xl font-bold text-dark mb-1">10,000+</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-dark/50">Perfect Procedures</span>
              </div>
              <div className="w-px bg-dark/15 self-stretch idden sm:block" />
              <div>
                <span className="block font-serif text-3xl font-bold text-dark mb-1">99.4%</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-dark/50">Patient Satisfaction</span>
              </div>
            </motion.div>
          </div>

          {/* Luxury Hero Image Card for Mobile and Desktop Overlay */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-[3/4] w-full max-w-sm mx-auto shadow-2xl rounded-2xl overflow-hidden border-2 border-gold-light/20 bg-white"
            >
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                alt="Radiant cosmetic treatment facial"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <div className="flex items-center gap-1.5 mb-1.5 text-gold">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <Star className="w-4 h-4 fill-gold text-gold" />
                </div>
                <h4 className="font-serif text-lg font-bold leading-snug">
                  "The most personalized and aesthetic experience in Rajasthan."
                </h4>
                <p className="text-[10px] font-mono uppercase tracking-widest text-gold-light mt-1 text-white/70">
                  Ridhima Sen, Patient
                </p>
              </div>
            </motion.div>

            {/* Float badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 bg-white/95 backdrop-blur px-5 py-3 shadow-xl rounded-xl border border-gold-light/30 text-left z-20 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Shield className="w-5 h-5 shadow-inner" />
              </div>
              <div>
                <span className="block text-xs font-bold text-dark">US-FDA Approved</span>
                <span className="text-[9px] text-dark/50">Clinically safe technologies</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATOR BAR */}
      <section className="bg-dark text-cream py-10 relative border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <Award className="w-6 h-6 text-gold" />
              <span className="text-xs uppercase tracking-widest font-semibold text-white/95">Expert Medical Care</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Activity className="w-6 h-6 text-gold" />
              <span className="text-xs uppercase tracking-widest font-semibold text-white/95">Advanced Technology</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-gold" />
              <span className="text-xs uppercase tracking-widest font-semibold text-white/95">Personalized Plans</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Users className="w-6 h-6 text-gold" />
              <span className="text-xs uppercase tracking-widest font-semibold text-white/95">Dermatological Focus</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center gap-2">
              <ThumbsUp className="w-6 h-6 text-gold" />
              <span className="text-xs uppercase tracking-widest font-semibold text-white/95">99.4% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED TREATMENTS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">Our Offerings</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight mb-4">
            Physician-led Elite Aesthetic Treatments
          </h2>
          <p className="text-dark/65 max-w-2xl mx-auto mb-16 text-sm">
            Discover a sophisticated curation of medical-grade treatments carefully tailored to address your skin, hair, and anti-aging aspirations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TREATMENTS.slice(0, 6).map((treatment) => (
              <div
                key={treatment.id}
                id={`featured-treatment-${treatment.id}`}
                className="group bg-cream/10 border border-gold-light/15 p-8 rounded-xl text-left luxury-shadow-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-dark mb-3 group-hover:text-gold transition-colors duration-200">
                    {treatment.name}
                  </h3>
                  <p className="text-xs text-dark/45 font-mono uppercase tracking-wider mb-4">
                    Category: {treatment.category}
                  </p>
                  <p className="text-sm text-dark/70 leading-relaxed mb-6 line-clamp-3">
                    {treatment.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-cream flex justify-between items-center">
                  <span className="text-xs text-dark/40 font-mono">⏱️ {treatment.duration}</span>
                  <button
                    onClick={() => {
                      onPageChange("treatments");
                      setTimeout(() => {
                        const el = document.getElementById(`treatment-${treatment.id}`);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                      }, 300);
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-gold hover:text-dark transition-colors flex items-center gap-1"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button
              onClick={() => onPageChange("treatments")}
              className="px-8 py-3.5 bg-dark hover:bg-gold text-cream hover:text-white rounded-none border border-dark hover:border-gold font-semibold text-xs uppercase tracking-widest transition-all duration-300"
            >
              View All Treatments & Services
            </button>
          </div>
        </div>
      </section>

      {/* 4. DOCTOR PERSONAL BRANDING */}
      <section className="py-24 bg-cream/25 border-y border-gold-light/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Col */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                  alt="Dr. Meera Vasudevan"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Floating clinical signature badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-xl shadow-lg border border-gold-light/30">
                  <span className="block font-serif text-sm font-bold text-dark">{DOCTOR_PROFILE.name}</span>
                  <span className="text-[10px] text-gold uppercase tracking-wider font-semibold">{DOCTOR_PROFILE.title}</span>
                </div>
              </div>
              {/* Decorative radial blur */}
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-gold/10 rounded-full blur-2xl -z-10" />
            </div>

            {/* Bio content col */}
            <div className="lg:col-span-7 text-left flex flex-col items-start">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">Our Director</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight mb-6">
                Meet {DOCTOR_PROFILE.name}
              </h2>
              <p className="text-xs font-mono uppercase tracking-widest text-[#A88F5E] mb-6 font-bold flex items-center gap-2">
                <Award className="w-4 h-4" /> AIIMS (New Delhi) Gold Medalist • Harley Street Trained (London)
              </p>
              
              <p className="text-sm sm:text-base text-dark/70 leading-relaxed mb-6">
                {DOCTOR_PROFILE.biography}
              </p>

              <blockquote className="border-l-4 border-gold pl-4.5 py-2 text-dark/80 italic text-sm mb-8 bg-gold/5 max-w-xl">
                "{DOCTOR_PROFILE.philosophy}"
              </blockquote>

              <h4 className="font-serif text-md font-bold uppercase tracking-wider text-dark mb-4">
                Elite Qualifications & Credentials
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10 w-full text-xs text-dark/80">
                {DOCTOR_PROFILE.qualifications.map((qual, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onPageChange("about-doctor")}
                  className="px-8 py-3.5 bg-dark hover:bg-gold text-cream hover:text-white rounded-full border border-dark hover:border-gold font-semibold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                >
                  Meet Dr. Meera
                </button>
                <button
                  onClick={() => onPageChange("book")}
                  className="px-8 py-3.5 bg-transparent hover:bg-gold-light/10 text-dark rounded-full border border-dark/30 hover:border-gold-dark font-semibold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEFORE & AFTER PREVIEW */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">Case Studies</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight mb-4">
            Real Transformations, Flawless Results
          </h2>
          <p className="text-dark/65 max-w-2xl mx-auto mb-16 text-sm">
            Experience the exquisite visual symmetry curated by Dr. Meera. Slide the bar from left to right to interactively view the dramatic yet incredibly natural transitions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {BEFORE_AFTER_ITEMS.slice(0, 2).map((item) => (
              <BeforeAfterSlider key={item.id} item={item} />
            ))}
          </div>

          <p className="text-[11px] text-dark/45 mt-8 max-w-md mx-auto italic">
            *Disclaimer: Individual clinical results can differ naturally depending on personal skin biology and anatomical guidelines.
          </p>

          <div className="mt-10">
            <button
              onClick={() => onPageChange("results")}
              className="px-8 py-3.5 bg-dark hover:bg-gold text-cream hover:text-white rounded-none border border-dark hover:border-gold font-semibold text-xs uppercase tracking-widest transition-all duration-300"
            >
              View More Results
            </button>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL CAROUSEL */}
      <section className="py-24 bg-cream/35 border-y border-gold-light/10 relative overflow-hidden text-left">
        <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10 hidden md:block">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white hover:bg-gold border border-gold-light/20 text-dark hover:text-white flex items-center justify-center rounded-full shadow-md hover:scale-105 transition-all"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10 hidden md:block">
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white hover:bg-gold border border-gold-light/20 text-dark hover:text-white flex items-center justify-center rounded-full shadow-md hover:scale-105 transition-all"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">Testimonial</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-dark mb-12">
            Loved By Rajasthan's Finest Communities
          </h2>

          <div className="min-h-[280px] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-1.5 mb-6 text-gold">
              {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>

            <p className="font-serif text-lg sm:text-xl lg:text-2xl text-dark/85 leading-relaxed italic max-w-3xl mb-8">
              "{TESTIMONIALS[activeTestimonial].text}"
            </p>

            <div className="flex items-center gap-4.5">
              <div className="w-14 h-14 rounded-full bg-gold/15 text-gold flex items-center justify-center font-bold font-serif text-lg border border-gold/25 shadow-inner">
                {TESTIMONIALS[activeTestimonial].avatarText}
              </div>
              <div className="text-left">
                <span className="block font-serif text-md font-bold text-dark text-white/90">
                  {TESTIMONIALS[activeTestimonial].name}
                </span>
                <span className="block text-xs text-dark/50">
                  {TESTIMONIALS[activeTestimonial].treatment} • {TESTIMONIALS[activeTestimonial].location}
                </span>
                <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider flex items-center gap-1 mt-1">
                  ✓ Verified Google Review
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2.5 mt-10">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? "bg-gold w-8" : "bg-dark/15 hover:bg-gold/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE JAIPUR AESTHETICS CLINIC */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">The JA Difference</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-dark tracking-tight mb-4">
            Why Discerning Patients Choose Us
          </h2>
          <p className="text-dark/65 max-w-2xl mx-auto mb-16 text-sm">
            We hold ourselves to the gold standards of medical safety, high-end hospitality, and customized aesthetic ratios.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="p-8 border border-gold-light/10 rounded-xl bg-cream/15">
              <Award className="w-8 h-8 text-gold mb-5" />
              <h3 className="font-serif text-lg font-bold text-dark mb-2">Personalized Treatment Plans</h3>
              <p className="text-xs text-dark/70 leading-relaxed">
                No cookie-cutter routines. We customize laser depths, acid concentrates, and injection volumes to respect your natural contours.
              </p>
            </div>
            <div className="p-8 border border-gold-light/10 rounded-xl bg-cream/15">
              <Activity className="w-8 h-8 text-gold mb-5" />
              <h3 className="font-serif text-lg font-bold text-dark mb-2">US-FDA Approved Technology</h3>
              <p className="text-xs text-dark/70 leading-relaxed">
                We utilize peak-performance platforms including Soprano Titanium Ice Lasers, Dermapen 4, and authentic HydraFacial MD Elite systems.
              </p>
            </div>
            <div className="p-8 border border-gold-light/10 rounded-xl bg-cream/15">
              <Sparkles className="w-8 h-8 text-gold mb-5" />
              <h3 className="font-serif text-lg font-bold text-dark mb-2">Natural-Looking Outcomes</h3>
              <p className="text-xs text-dark/70 leading-relaxed">
                Dr. Meera enforces an elegant design standard: soften wrinkles and replenish natural volume to reveal a harmonized, refreshed appearance.
              </p>
            </div>
            <div className="p-8 border border-gold-light/10 rounded-xl bg-cream/15">
              <Users className="w-8 h-8 text-gold mb-5" />
              <h3 className="font-serif text-lg font-bold text-dark mb-2">Experienced Specialists</h3>
              <p className="text-xs text-dark/70 leading-relaxed">
                Every treatment is conducted under Dr. Meera's expert supervision and backed by the clinic's stellar reputation.
              </p>
            </div>
            <div className="p-8 border border-gold-light/10 rounded-xl bg-cream/15">
              <Shield className="w-8 h-8 text-gold mb-5" />
              <h3 className="font-serif text-lg font-bold text-dark mb-2">Safety-First Protocols</h3>
              <p className="text-xs text-dark/70 leading-relaxed">
                We enforce ultra-rigorous chemical sterilization, airtight clinical environments, and premium disposable micro-materials.
              </p>
            </div>
            <div className="p-8 border border-gold-light/10 rounded-xl bg-cream/15">
              <Heart className="w-8 h-8 text-gold mb-5" />
              <h3 className="font-serif text-lg font-bold text-dark mb-2">Premium Hospitality Experience</h3>
              <p className="text-xs text-dark/70 leading-relaxed">
                Indulge in private clinical rooms, gourmet green teas, comfortable styling sections, and a warm, supportive staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONSULTATION CTA ZONE */}
      <section className="bg-dark text-cream py-20 relative overflow-hidden text-center border-t border-gold/20">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800')" }} />
        
        <div className="absolute -bottom-24 right-1/4 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Sparkles className="w-10 h-10 text-gold mx-auto mb-6 animate-pulse" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Start Your Aesthetic Transformation Today
          </h2>
          <p className="text-cream/70 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-10">
            Let us partner with you to align, restore, and preserve your vibrant youthful features with Jaipur's most prestigious dermatology clinic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onPageChange("book")}
              className="px-8 py-4 bg-gold hover:bg-gold-dark text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:scale-[1.03] cursor-pointer"
            >
              Book In-Clinic Consultation
            </button>
            <button
              onClick={handleWhatsApp}
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md hover:scale-[1.03] border-none cursor-pointer"
            >
              <svg 
                viewBox="0 0 448 512" 
                className="w-4.5 h-4.5 fill-white" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.2 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              Chat on WhatsApp
            </button>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-gold hover:bg-white/5 rounded-full text-cream hover:text-gold font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-gold" /> Call Clinic Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
