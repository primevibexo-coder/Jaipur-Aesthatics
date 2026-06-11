/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import { TESTIMONIALS } from "../data";
import { Star, Play, Pause, Quote, CheckCircle, Award } from "lucide-react";

export default function TestimonialsView() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-cream/40 py-20 border-b border-gold-light/15 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">Feedbacks</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-dark tracking-tight mb-6">
            Stories of Luminous Transformations
          </h1>
          <p className="text-dark/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover why elite socialites, doctors, and professionals across Jaipur trust Dr. Meera with their skin, hair, and anti-aging milestones.
          </p>
        </div>
      </section>

      {/* Trust & Google Ratings Dashboard Mockup */}
      <section className="py-12 bg-[#FAF8F5] border-b border-gold-light/10 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-10 border border-gold-light/15 rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-[#4285F4]/10 rounded-full flex items-center justify-center font-serif font-black text-2xl text-[#4285F4]">
                G
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold mb-1">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <Star className="w-4 h-4 fill-gold text-gold" />
                </div>
                <h4 className="font-serif text-lg font-bold text-dark">
                  Google Verified Clinic Rating
                </h4>
                <p className="text-xs text-dark/50">
                  5.0 ★ Rating based on 480+ local patient uploads in Jaipur.
                </p>
              </div>
            </div>

            <div className="w-px bg-cream self-stretch hidden md:block" />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <span className="block font-serif text-2xl font-bold text-dark">100%</span>
                <span className="text-[9px] uppercase tracking-wider text-dark/40 font-bold">Unretouched Photos</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-dark">0%</span>
                <span className="text-[9px] uppercase tracking-wider text-dark/40 font-bold">Hygiene Incidents</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-serif text-2xl font-bold text-[#A88F5E]">Harley St.</span>
                <span className="text-[9px] uppercase tracking-wider text-dark/40 font-bold">Elite Formulations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Module */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-5xl mx-auto">
          {/* Content info */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold font-mono block mb-3">Live Video Reviews</span>
            <h2 className="font-serif text-3xl font-black text-dark tracking-tight mb-6">
              Hear directly from our Patient Community
            </h2>
            <p className="text-sm sm:text-base text-dark/70 leading-relaxed mb-6">
              Watch Abhishek describe his experience undergoing Platelet-Rich Plasma (PRP) hair treatments at Jaipur Aesthetics Clinic.
            </p>
            <ul className="space-y-3.5 text-xs text-dark/80">
              <li className="flex gap-2 items-center">
                <CheckCircle className="w-4.5 h-4.5 text-gold shrink-0" />
                <span>Transparent explanation of post-procedure targets</span>
              </li>
              <li className="flex gap-2 items-center">
                <CheckCircle className="w-4.5 h-4.5 text-gold shrink-0" />
                <span>Description of the ice contact pain-free system</span>
              </li>
              <li className="flex gap-2 items-center">
                <CheckCircle className="w-4.5 h-4.5 text-gold shrink-0" />
                <span>Verified results after 4 distinct medical sessions</span>
              </li>
            </ul>
          </div>

          {/* Elegant video frame container */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-dark">
              <video
                ref={videoRef}
                src={TESTIMONIALS[1].videoUrl}
                className="w-full h-full object-cover"
                loop
                playsInline
                onClick={toggleVideo}
              />
              {/* Play overlays when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-dark/45 flex flex-col justify-center items-center cursor-pointer pointer-events-auto" onClick={toggleVideo}>
                  <div className="w-16 h-16 bg-gold hover:scale-110 active:scale-95 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 border-2 border-white">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-white/95 uppercase mt-4 font-bold">
                    Play Video Testimonial
                  </span>
                </div>
              )}

              {isPlaying && (
                <button
                  onClick={toggleVideo}
                  className="absolute bottom-4 right-4 p-2 bg-white/25 hover:bg-white/45 backdrop-blur text-white rounded-full transition-all"
                  aria-label="Pause Video"
                >
                  <Pause className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Written Feedbacks grid */}
      <section className="py-24 bg-cream/25 border-y border-gold-light/10 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold font-mono block mb-3 text-center">Patient Verifications</span>
          <h2 className="font-serif text-3xl font-black text-dark text-center mb-16">
            In-depth Patient Journey Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-xl border border-gold-light/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-gold/40">
                      <Quote className="w-10 h-10 transform -scale-y-100" />
                    </span>
                    <div className="flex text-gold">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm font-sans text-dark/80 italic leading-relaxed mb-8">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex gap-4 items-center pt-4 border-t border-cream">
                  <div className="w-12 h-12 rounded-full bg-gold/15 text-gold font-bold font-serif text-md flex items-center justify-center border border-gold/10 shrink-0">
                    {t.avatarText}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-dark">{t.name}</h4>
                    <p className="text-[10px] text-dark/45 font-mono">
                      {t.treatment} • {t.location}
                    </p>
                    <span className="text-[9px] text-[#4285F4] font-bold tracking-wider uppercase block mt-1">
                      ✓ Google verified review
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
