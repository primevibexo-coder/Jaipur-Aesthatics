/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BEFORE_AFTER_ITEMS } from "../data";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { ShieldCheck, Info, Sparkles } from "lucide-react";

export default function ResultsView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { label: "All Results", id: "all" },
    { label: "Skin & Texture", id: "skin" },
    { label: "Hair Restoration", id: "hair" },
    { label: "Facial Harmonization", id: "facial" },
    { label: "Anti-Aging Lift", id: "anti-aging" }
  ];

  const filteredItems = selectedCategory === "all"
    ? BEFORE_AFTER_ITEMS
    : BEFORE_AFTER_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-cream/40 py-20 border-b border-gold-light/15 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">Case Studies</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-dark tracking-tight mb-6">
            Witness Real Scientific Transformations
          </h1>
          <p className="text-dark/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Observe the authentic outcomes authored by Dr. Meera. All photography displays unretouched, honest patient results showcasing proper anatomical correction.
          </p>
        </div>
      </section>

      {/* Filter Tabs Row */}
      <section className="py-8 bg-[#FAF8F5] border-b border-gold-light/10 text-center sticky top-[72px] md:top-[112px] z-30 shadow-sm overflow-x-auto select-none">
        <div className="max-w-4xl mx-auto px-4 flex justify-start sm:justify-center gap-2 pb-1.5 min-w-[500px]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 pointer ${
                selectedCategory === cat.id
                  ? "bg-dark text-white shadow-sm font-bold"
                  : "bg-white text-dark/75 border border-gold-light/15 hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Grid Area */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Compliance Warning banner */}
        <div className="bg-cream/20 border border-gold-light/25 p-5 rounded-xl mb-12 max-w-4xl mx-auto flex items-start gap-4">
          <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
          <div>
            <span className="block text-xs font-bold font-mono uppercase tracking-widest text-gold-dark mb-1">
              Ethical Photography Compliance & Consent
            </span>
            <p className="text-xs text-dark/70 leading-relaxed">
              Every transformation showcased in this portfolio was conducted at Jaipur Aesthetics Clinic and is shared under active, signed clinical consent documents. Photos represent genuine lighting, featuring 100% unretouched skin textures with zero digital filters or smoothing treatments.
            </p>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {filteredItems.map((item) => (
              <div key={item.id} className="transition-all duration-300">
                <BeforeAfterSlider item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center max-w-md mx-auto">
            <Info className="w-12 h-12 text-gold/40 mx-auto mb-4" />
            <h4 className="font-serif text-lg font-bold text-dark mb-1">Coming Soon</h4>
            <p className="text-xs text-dark/50">
              Dr. Meera is currently collecting post-session photography for this category. Check back shortly for verified, genuine clinical outcomes.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
