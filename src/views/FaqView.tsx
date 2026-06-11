/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { FAQS } from "../data";
import { HelpCircle, ChevronDown, ChevronUp, Search, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FaqView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1"); // First open by default
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { label: "All Questions", id: "all" },
    { label: "Consultation Process", id: "consultations" },
    { label: "Safety & Hygiene", id: "safety" },
    { label: "Pricing & Packages", id: "pricing" },
    { label: "Recovery & Downtime", id: "recovery" },
    { label: "Aftercare Guidelines", id: "aftercare" },
    { label: "Treatments Overview", id: "treatments" }
  ];

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-cream/40 py-20 border-b border-gold-light/15 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">Support Desk</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-dark tracking-tight mb-6">
            Frequently Asked Patient Questions
          </h1>
          <p className="text-dark/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Transparent explanations concerning patient pathways. For any specialized diagnostic queries, please reach our clinic concierge desk directly.
          </p>
        </div>
      </section>

      {/* Accordion Categorized Content list */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Side panels with filters & search */}
          <div className="lg:col-span-4 space-y-6">
            {/* Search Input Box */}
            <div className="bg-cream/15 p-5 border border-gold-light/10 rounded-xl">
              <h4 className="font-serif text-sm font-bold text-dark mb-3">
                Search Clinic Database
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type symptoms or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-white text-xs text-dark border border-gold-light/20 focus:border-gold focus:outline-none rounded-lg"
                />
                <Search className="w-4 h-4 text-dark/40 absolute left-3 top-3" />
              </div>
            </div>

            {/* Category selection */}
            <div className="bg-cream/15 p-5 border border-gold-light/10 rounded-xl text-left">
              <h4 className="font-serif text-sm font-bold text-dark mb-3">
                Browse by Category
              </h4>
              <div className="flex flex-col gap-2.5">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setOpenFaqId(null);
                    }}
                    className={`text-left px-4.5 py-3 text-xs uppercase tracking-wider font-semibold transition-all rounded ${
                      selectedCategory === cat.id
                        ? "bg-gold text-white shadow-sm font-bold"
                        : "bg-white text-dark/70 hover:bg-gold-light/10 hover:text-gold border border-gold-light/10"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Concierge Hotline box */}
            <div className="bg-[#1A1A1A] p-6 border border-gold/20 rounded-xl text-white text-left relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-gold/5 rounded-full blur-xl animate-pulse" />
              <HelpCircle className="w-8 h-8 text-gold mb-4" />
              <h4 className="font-serif text-md font-bold text-white mb-2">Still have questions?</h4>
              <p className="text-xs text-cream/75 leading-relaxed mb-6">
                Our concierge desk is staffed by clinic coordinators ready to assist with custom pricing outlines and available booking matrices.
              </p>
              <a
                href="https://wa.me/919116055700"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white hover:text-white text-xs font-bold uppercase tracking-widest text-center transition-all shadow-lg rounded-full flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-98"
              >
                <svg 
                  viewBox="0 0 448 512" 
                  className="w-4 h-4 fill-white" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.2 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                Inquire on WhatsApp
              </a>
            </div>
          </div>

          {/* Accordion Questions Column */}
          <div className="lg:col-span-8 text-left">
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={`border rounded-xl bg-white transition-all duration-300 overflow-hidden ${
                        isOpen ? "border-gold shadow-md" : "border-gold-light/10 hover:border-gold/45 shadow-sm"
                      }`}
                    >
                      {/* Clickable Header bar */}
                      <div
                        onClick={() => toggleFaq(faq.id)}
                        className="p-5 flex justify-between items-center cursor-pointer select-none group"
                      >
                        <h4 className="font-serif text-sm sm:text-base font-bold text-dark group-hover:text-gold transition-colors duration-150 pr-4">
                          {faq.question}
                        </h4>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          isOpen ? "bg-gold text-white" : "bg-gold/10 text-gold"
                        }`}>
                          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>

                      {/* Content Section with expand animation */}
                      {isOpen && (
                        <div className="border-t border-gold/10 bg-cream/10 p-5 pl-7">
                          <p className="text-xs sm:text-sm text-dark/75 leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="mt-3 pt-2.5 border-t border-cream flex justify-between text-[10px] text-dark/45 uppercase tracking-wider font-mono">
                            <span>Subject: {faq.category} specifications</span>
                            <span>Verified Medical Info ✓</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-16 border rounded-xl border-dashed border-gold-light/25 bg-cream/5">
                  <Search className="w-10 h-10 text-gold/30 mx-auto mb-4" />
                  <h4 className="font-serif text-base font-bold text-dark mb-1">No Results Match Your Search</h4>
                  <p className="text-xs text-dark/50 max-w-sm mx-auto leading-relaxed">
                    We could not identify questions matching "{searchQuery}" inside the database. Try modifying your keywords or select another categories pillar.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
