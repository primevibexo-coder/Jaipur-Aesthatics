/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CLINIC_INFO, GALLERY_ITEMS } from "../data";
import { Sparkles, Trophy, ShieldCheck, Heart, Eye } from "lucide-react";

export default function AboutClinicView() {
  const coreValues = [
    {
      title: "Scientific Rigour",
      desc: "All clinical approaches are mathematically calibrated and validated by globally peer-reviewed research. We prioritize authentic medical proof over hype.",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />
    },
    {
      title: "Elegant Balance",
      desc: "We practice facial cosmetology as an art. We preserve facial movement, muscle dynamism, and structural ratios, rejecting the standard 'over-filled' look.",
      icon: <Sparkles className="w-6 h-6 text-gold" />
    },
    {
      title: "Impeccable Safety & Hygiene",
      desc: "We enforce absolute autoclaved sterility, disposable micro-syringes, surgical-grade ventilation, and airtight hygiene routines.",
      icon: <Trophy className="w-6 h-6 text-gold" />
    },
    {
      title: "Discreet Luxury Hospitality",
      desc: "Every patient's privacy is protected. Experience private entryways, high-end private styling chambers, and personalized clinical care.",
      icon: <Heart className="w-6 h-6 text-gold" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header (Hero style) */}
      <section className="bg-cream/40 py-20 border-b border-gold-light/15 text-center px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">Our Legacy</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-dark tracking-tight mb-6">
            Boutique Medical Excellence Meet Discreet Luxury
          </h1>
          <p className="text-dark/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover Jaipur's pre-eminent private aesthetic dermatology clinic, where world-class scientific protocol is delivered within an atmosphere of timeless classic comfort.
          </p>
        </div>
      </section>

      {/* Clinic Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold font-mono block mb-3">The Genesis</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-dark tracking-tight mb-6">
              Challenging Sterile Compositions, Restoring Individual Harmony
            </h2>
            <div className="text-sm sm:text-base text-dark/70 space-y-5 leading-relaxed">
              <p>
                Founded in 2019 by world-class cosmetic dermatologist Dr. Meera Vasudevan, Jaipur Aesthetics Clinic was conceptualized to challenge the sterile, assembly-line experience typical of traditional urban health conglomerates.
              </p>
              <p>
                Our vision is rooted in international excellence. After serving in AIIMS (New Delhi) and completing elite clinical fellowships on Harley Street in London, Dr. Meera recognized a severe gap: patients deserved both top-tier advanced micro-materials and a high-end, relaxing patient journey.
              </p>
              <p>
                We established our clinic in the luxury C-Scheme neighborhood. Outfitted with peak-performance, US-FDA cleared platforms and high-comfort interiors, we cater to Jaipur's most discerning community members who demand high medical authenticity and gorgeous, realistic results.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-light/10">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                alt="Clinic Lobby"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -right-4 glass-panel py-3 px-6 rounded-xl shadow-lg border border-gold-light/20 text-left">
              <span className="block font-serif text-xl font-bold text-dark">10,000+</span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-gold">Procedures Conducted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values Grid */}
      <section className="py-24 bg-cream/25 border-y border-gold-light/10 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-12 border-b border-gold-light/15">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-bold font-mono">Our Mission</span>
              <h3 className="font-serif text-2xl font-bold text-dark mt-2 mb-4">Empowering Confidence through Medical Precision</h3>
              <p className="text-sm text-dark/70 leading-relaxed">
                To elevate the standard of aesthetic medicine in Rajasthan by combining peerless clinical science, premium certified formulas, and a hyper-personalized patient-centric framework. We strive to highlight your natural balance securely.
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-bold font-mono">Our Vision</span>
              <h3 className="font-serif text-2xl font-bold text-dark mt-2 mb-4">Establishing a Global Benchmark in Aesthetic Artistry</h3>
              <p className="text-sm text-dark/70 leading-relaxed">
                To be universally recognized as India's premier boutique dermatology space, leading the industry in ethical medical practices, global wellness standard designs, and natural-looking transformations that enrich our patients' social well-being.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-dark text-center mb-12">
              Our Core Philosophical Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((val, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gold-light/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-5">
                    {val.icon}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-dark mb-2.5">{val.title}</h4>
                  <p className="text-xs text-dark/70 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure and Safety */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
                alt="Elite Laser Suite"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold font-mono block mb-3">Advanced Clinical Tech</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-dark tracking-tight mb-6">
              World-Class Technology & Sterile Safety Layout
            </h2>
            <p className="text-sm sm:text-base text-dark/75 leading-relaxed mb-8">
              At Jaipur Aesthetics Clinic, your safety is non-negotiable. Our clinic features advanced mechanical safety units and US-FDA cleared machinery. We bypass generic, copycat devices entirely, purchasing only certified platforms directly from international medical authorized distributors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="p-5 border-l-2 border-gold bg-cream/10">
                <h4 className="font-serif text-md font-bold text-dark mb-1.5">Soprano Titanium (USA)</h4>
                <p className="text-xs text-dark/70 leading-relaxed">
                  Triple-wavelength laser technology that cools on contact, guaranteeing secure hair-removal results in record times.
                </p>
              </div>
              <div className="p-5 border-l-2 border-gold bg-cream/10">
                <h4 className="font-serif text-md font-bold text-dark mb-1.5">Dermapen 4 MD Suite</h4>
                <p className="text-xs text-dark/70 leading-relaxed">
                  FDA-cleared skin scar induction system delivering uniform cellular micro-punctures to generate collagen safely.
                </p>
              </div>
              <div className="p-5 border-l-2 border-gold bg-cream/10">
                <h4 className="font-serif text-md font-bold text-dark mb-1.5">Airtight HEPA Air Flow</h4>
                <p className="text-xs text-dark/70 leading-relaxed">
                  Continuous high-efficiency hospital particulate filtration that removes micro-pathogens from all treatment zones.
                </p>
              </div>
              <div className="p-5 border-l-2 border-gold bg-cream/10">
                <h4 className="font-serif text-md font-bold text-dark mb-1.5">Allergan Clinical Storage</h4>
                <p className="text-xs text-dark/70 leading-relaxed">
                  Cold-chain refrigeration modules that safeguard chemical stability of luxury injectables for flawless clinical potency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlight row */}
      <section className="py-20 bg-cream/15 border-t border-gold-light/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold font-mono block mb-3">Interior Comforts</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-dark mb-10">
            Impeccable Space Curated for Relaxation
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <div key={item.id} className="relative aspect-video rounded-lg overflow-hidden group shadow-sm shrink-0">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                  <span className="text-white text-xs font-serif font-semibold">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
