/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { DOCTOR_PROFILE } from "../data";
import { Award, BookOpen, Clock, Globe, ShieldCheck, Heart, Landmark, CheckCircle, FileText } from "lucide-react";

export default function AboutDoctorView() {
  return (
    <div className="bg-white">
      {/* Editorial Header Section */}
      <section className="bg-[#FAF8F5] py-24 border-b border-gold-light/10 overflow-hidden text-left relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Bio Content */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">Chef de Clinique</span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-black text-dark tracking-tight mb-2">
                {DOCTOR_PROFILE.name}
              </h1>
              <p className="text-md font-serif text-gold font-semibold uppercase tracking-wider mb-6">
                {DOCTOR_PROFILE.title}
              </p>

              <p className="text-base text-dark/75 leading-relaxed mb-6 font-sans">
                {DOCTOR_PROFILE.biography}
              </p>

              <blockquote className="border-l-4 border-gold bg-gold/5 pl-4.5 py-3 pr-2 rounded text-dark/80 italic text-sm mb-6 max-w-xl">
                "{DOCTOR_PROFILE.philosophy}"
              </blockquote>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-gold/10 text-gold-dark border border-gold/15 px-3 py-1 text-xs font-mono font-bold rounded-sm">
                  14+ Years Clinical Experience
                </span>
                <span className="bg-gold/10 text-gold-dark border border-gold/15 px-3 py-1 text-xs font-mono font-bold rounded-sm">
                  AIIMS (New Delhi) MD
                </span>
                <span className="bg-gold/10 text-gold-dark border border-gold/15 px-3 py-1 text-xs font-mono font-bold rounded-sm">
                  Harley Street Fellow
                </span>
              </div>
            </div>

            {/* Premium Doctor Photo */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-cream">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                  alt="Dr. Meera Vasudevan profile"
                  className="w-full h-full object-cover scale-102 hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Gold seal overlay */}
              <div className="absolute -top-6 -left-4 bg-dark text-white rounded-full w-24 h-24 flex flex-col items-center justify-center p-3 text-center border-2 border-gold shadow-lg rotate-12">
                <Award className="w-6 h-6 text-gold mb-1" />
                <span className="text-[8px] uppercase font-bold tracking-wider leading-none text-gold">AIIMS Gold Medal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications, Board Certs, Memberships Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Qualifications */}
          <div className="p-8 bg-cream/15 border border-gold-light/10 rounded-xl">
            <div className="w-10 h-10 bg-gold/10 text-gold rounded-lg flex items-center justify-center mb-6">
              <Landmark className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-dark mb-4">Clinical Degrees</h3>
            <ul className="flex flex-col gap-3">
              {DOCTOR_PROFILE.qualifications.map((item, index) => (
                <li key={index} className="flex gap-2 items-start text-xs text-dark/75 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Memberships */}
          <div className="p-8 bg-cream/15 border border-gold-light/10 rounded-xl">
            <div className="w-10 h-10 bg-gold/10 text-gold rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-dark mb-4">Elite Memberships</h3>
            <ul className="flex flex-col gap-3">
              {DOCTOR_PROFILE.memberships.map((item, index) => (
                <li key={index} className="flex gap-2 items-start text-xs text-dark/75 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications & Specialties */}
          <div className="p-8 bg-cream/15 border border-gold-light/10 rounded-xl">
            <div className="w-10 h-10 bg-gold/10 text-gold rounded-lg flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-dark mb-4">Certifications</h3>
            <ul className="flex flex-col gap-3">
              {DOCTOR_PROFILE.certifications.map((item, index) => (
                <li key={index} className="flex gap-2 items-start text-xs text-dark/75 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Career Milestones Timeline */}
      <section className="py-24 bg-cream/15 border-y border-gold-light/10 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold font-mono block mb-3 text-center">Achievements</span>
          <h2 className="font-serif text-3xl font-black text-dark tracking-tight mb-16 text-center">
            Dr. Meera's Medical Timeline
          </h2>

          <div className="relative border-l border-gold/30 ml-4 md:ml-32">
            {DOCTOR_PROFILE.timeline.map((milestone, index) => (
              <div key={index} className="mb-12 last:mb-0 relative pl-8 md:pl-10">
                {/* Year tag for large screen */}
                <span className="hidden md:block absolute right-full mr-10 top-0.5 font-serif text-xl font-black text-gold">
                  {milestone.year}
                </span>

                {/* Mobile year fallback */}
                <span className="md:hidden block font-serif text-md font-bold text-gold mb-1">
                  {milestone.year}
                </span>

                {/* Point dot indicator */}
                <div className="absolute top-0.5 left-0 -translate-x-[4.5px] w-3.5 h-3.5 rounded-full bg-gold border border-white shadow-md" />

                <h3 className="font-serif text-lg font-bold text-dark mb-2">{milestone.title}</h3>
                <p className="text-xs sm:text-sm text-dark/70 leading-relaxed max-w-2xl">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Speaking Engagements & Peer Reviews */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 bg-dark text-white p-8 rounded-xl relative overflow-hidden border border-gold/25">
            <div className="absolute -bottom-24 -right-12 w-48 h-48 bg-gold/5 rounded-full blur-2xl" />
            <BookOpen className="w-10 h-10 text-gold mb-6" />
            <h3 className="font-serif text-xl font-bold text-white mb-4">Scientific Publications & Peer Reviews</h3>
            <p className="text-xs text-cream/70 leading-relaxed mb-6">
              Dr. Meera values high scientific verification. She participates frequently in medical clinical journals, authoring peer-reviewed chapters on barrier repair formulations and high-frequency laser treatment parameters on Indian skin types.
            </p>
            <div className="border-t border-white/10 pt-4 text-[10px] text-gold uppercase tracking-widest font-bold">
              ✓ Active Board Evaluator
            </div>
          </div>

          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold font-mono block mb-3">Global Panelist</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-dark tracking-tight mb-8">
              Speaking Engagements & Advanced Symposia
            </h2>

            <div className="space-y-4">
              {DOCTOR_PROFILE.speakingEngagements.map((speak, index) => (
                <div key={index} className="p-5 border border-gold-light/10 bg-cream/5 hover:bg-cream/15 transition-all text-sm rounded flex gap-4 items-start">
                  <FileText className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-dark/85 leading-relaxed">{speak}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
