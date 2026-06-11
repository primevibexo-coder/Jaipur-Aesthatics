/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { TREATMENTS } from "../data";
import { Sparkles, Clock, AlertTriangle, ListChecks, ArrowUpRight, FlameKindling, Info } from "lucide-react";

interface TreatmentsViewProps {
  onPageChange: (page: string) => void;
}

export default function TreatmentsView({ onPageChange }: TreatmentsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedTreatmentId, setExpandedTreatmentId] = useState<string | null>(null);

  const categories = [
    { label: "All Treatments", id: "all" },
    { label: "Injectables", id: "injectables" },
    { label: "Laser Therapy", id: "laser" },
    { label: "Facial Care", id: "facial" },
    { label: "Skin & Texture", id: "skin" },
    { label: "Hair Restoration", id: "hair" },
    { label: "Anti-Aging Lift", id: "anti-aging" }
  ];

  const filteredTreatments = selectedCategory === "all"
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedTreatmentId(expandedTreatmentId === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-cream/40 py-20 border-b border-gold-light/15 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">Our Services</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-dark tracking-tight mb-6">
            Bespoke Medical & Aesthetic Procedures
          </h1>
          <p className="text-dark/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every procedure is executed with meticulous safety standards under Dr. Meera Vasudevan, deploying elite international formulation marks to protect your dermal integrity.
          </p>
        </div>
      </section>

      {/* Interactive Category Filter Pills */}
      <section className="py-10 bg-[#FAF8F5] border-b border-gold-light/10 sticky top-[72px] md:top-[112px] z-30 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex justify-start md:justify-center gap-2 pb-2 min-w-[700px]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setExpandedTreatmentId(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 pointer ${
                selectedCategory === cat.id
                  ? "bg-gold text-white shadow-md border-transparent scale-102 font-bold"
                  : "bg-white text-dark/75 border border-gold-light/20 hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Treatments Catalog Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 gap-8">
          {filteredTreatments.map((treatment) => {
            const isExpanded = expandedTreatmentId === treatment.id;

            return (
              <div
                key={treatment.id}
                id={`treatment-${treatment.id}`}
                className={`bg-white rounded-xl border transition-all duration-400 overflow-hidden ${
                  isExpanded
                    ? "border-gold scale-[1.01] shadow-xl"
                    : "border-gold-light/15 hover:border-gold/50 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Micro Header click zone */}
                <div
                  onClick={() => toggleExpand(treatment.id)}
                  className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer select-none group"
                >
                  <div className="flex gap-4 items-start text-left">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border ${
                      isExpanded ? "bg-gold text-white border-gold" : "bg-gold/10 text-gold border-gold/15"
                    }`}>
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-black text-dark group-hover:text-gold transition-colors duration-200">
                        {treatment.name}
                      </h3>
                      <p className="text-xs text-dark/45 font-mono uppercase tracking-wider mt-1">
                        Category: {treatment.category} • Avg Duration: {treatment.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t border-cream pt-4 md:pt-0 md:border-t-0">
                    <div className="flex gap-6 text-xs text-dark/60 font-medium">
                      <span>{treatment.sessionsRequired}</span>
                    </div>
                    <span className="text-xs uppercase font-bold tracking-widest text-gold group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                      {isExpanded ? "Collapse Details ↑" : "Explore Scientifics →"}
                    </span>
                  </div>
                </div>

                {/* Expanded content view */}
                {isExpanded && (
                  <div className="border-t border-gold/10 bg-cream/10 p-6 md:p-10 text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                      {/* Left Column Overview */}
                      <div className="lg:col-span-7 space-y-6">
                        <div>
                          <h4 className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#A88F5E] mb-2 flex items-center gap-1.5">
                            <Info className="w-3.5 h-3.5" /> Clinical Overview
                          </h4>
                          <p className="text-sm text-dark/85 leading-relaxed">
                            {treatment.longDesc}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#A88F5E] mb-3 flex items-center gap-1.5">
                            <ListChecks className="w-3.5 h-3.5" /> What are the Benefits?
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-dark/80">
                            {treatment.benefits.map((benefit, bIdx) => (
                              <li key={bIdx} className="flex gap-2 items-start">
                                <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column Step-by-Step Procedure */}
                      <div className="lg:col-span-5 bg-white p-6 border border-gold-light/10 rounded-xl space-y-5">
                        <h4 className="text-[10px] font-mono uppercase font-bold tracking-widest text-gold shadow-sm pb-2 border-b border-cream">
                          Our Step-by-Step Clinical Protocol
                        </h4>
                        <ol className="space-y-4">
                          {treatment.procedure.map((step, sIdx) => (
                            <li key={sIdx} className="flex gap-3 text-xs leading-relaxed">
                              <span className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center font-mono font-bold shrink-0">
                                {sIdx + 1}
                              </span>
                              <span className="text-dark/75">{step}</span>
                            </li>
                          ))}
                        </ol>

                        <div className="mt-6 pt-4 border-t border-cream">
                          <h5 className="text-[10px] font-mono uppercase font-bold tracking-widest text-dark/70 mb-1.5 flex items-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5 text-gold shrink-0" /> Rest & Healing Guidelines:
                          </h5>
                          <p className="text-[11px] text-dark/60 leading-relaxed">
                            {treatment.recovery}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Integrated CTA inside treatment */}
                    <div className="mt-10 pt-6 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center gap-5">
                      <div>
                        <h4 className="font-serif text-md font-bold text-dark">
                          Interested in our {treatment.name}?
                        </h4>
                        <p className="text-xs text-dark/50 mt-1">
                          Schedule a private clinical vector planning session with Dr. Meera.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          onPageChange("book");
                          localStorage.setItem("preferredTreatment", treatment.id);
                        }}
                        className="w-full sm:w-auto px-8 py-3.5 bg-dark hover:bg-gold text-cream hover:text-white rounded-full font-semibold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
                      >
                        Book Appointment For This Treatment
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Global disclaimer */}
      <section className="bg-[#FAF8F5] py-14 border-t border-gold-light/15 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-dark/45 leading-relaxed italic max-w-xl mx-auto">
            Disclaimer: All procedures are initiated after clinical consultation. Duration standards, sessions required, and final visual results may naturally differ depending on anatomical parameters.
          </p>
        </div>
      </section>
    </div>
  );
}
