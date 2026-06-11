/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";
import { Eye, X, ZoomIn, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryItem | null>(null);

  const categories = [
    { label: "All Photos", id: "all" },
    { label: "Clinic Interiors", id: "interiors" },
    { label: "Treatment Rooms", id: "treatment-rooms" },
    { label: "Advanced Equipment", id: "equipment" },
    { label: "Patient Journey", id: "journey" },
    { label: "Doctor Interactions", id: "interactions" }
  ];

  const filteredItems = selectedCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-cream/40 py-20 border-b border-gold-light/15 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">The Gallery</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-dark tracking-tight mb-6">
            A Sanctuary of Safety & Comfort
          </h1>
          <p className="text-dark/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tour the elegant lounge, autoclaved clinical procedure zones, and US-FDA equipped therapy stations of our premium C-Scheme luxury center.
          </p>
        </div>
      </section>

      {/* Filter Row */}
      <section className="py-8 bg-[#FAF8F5] border-b border-gold-light/10 text-center sticky top-[72px] md:top-[112px] z-30 shadow-sm overflow-x-auto">
        <div className="max-w-4xl mx-auto px-4 flex justify-start sm:justify-center gap-2 pb-1.5 min-w-[550px]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 pointer ${
                selectedCategory === cat.id
                  ? "bg-gold text-white shadow-sm font-bold"
                  : "bg-white text-dark/75 border border-gold-light/15 hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxImage(item)}
              className="group bg-white rounded-xl overflow-hidden border border-gold-light/15 shadow-sm hover:shadow-xl transition-all duration-300 cursor-zoom-in"
            >
              <div className="relative aspect-video sm:aspect-[4/3] overflow-hidden">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Hover overlay mask */}
                <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center text-dark hover:scale-110 active:scale-95 transition-transform shadow-lg">
                    <ZoomIn className="w-5 h-5 text-gold-dark" />
                  </div>
                </div>
              </div>

              <div className="p-5 text-left border-t border-cream">
                <h4 className="font-serif text-md font-bold text-dark group-hover:text-gold transition-colors duration-150">
                  {item.title}
                </h4>
                <p className="text-[10px] text-gold uppercase font-semibold tracking-wider mt-1.5">
                  Category: {item.category.replace("-", " ")}
                </p>
                <p className="text-xs text-dark/50 mt-1 lines-clamp-2">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Lightbox Modal Overlays */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setActiveLightboxImage(null)}
          >
            {/* Close trigger button */}
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="max-w-5xl w-full flex flex-col gap-4 bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video sm:aspect-[16/10] w-full max-h-[80vh] overflow-hidden rounded-xl border border-white/15 bg-black flex items-center justify-center shadow-2xl">
                <img
                  src={activeLightboxImage.url}
                  alt={activeLightboxImage.alt}
                  className="max-h-full max-w-full object-contain pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption metadata */}
              <div className="text-left bg-white/5 border border-white/10 p-5 rounded-xl flex items-start gap-4">
                <Info className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-white leading-none">
                    {activeLightboxImage.title}
                  </h3>
                  <p className="text-[10px] text-gold uppercase tracking-wider font-semibold mt-1">
                    {activeLightboxImage.category.replace("-", " ")} suite
                  </p>
                  <p className="text-xs text-cream/70 leading-relaxed mt-2 max-w-4xl">
                    {activeLightboxImage.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
