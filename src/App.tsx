/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// View Imports
import HomeView from "./views/HomeView";
import AboutClinicView from "./views/AboutClinicView";
import AboutDoctorView from "./views/AboutDoctorView";
import TreatmentsView from "./views/TreatmentsView";
import ResultsView from "./views/ResultsView";
import GalleryView from "./views/GalleryView";
import TestimonialsView from "./views/TestimonialsView";
import FaqView from "./views/FaqView";
import ContactView from "./views/ContactView";
import BookView from "./views/BookView";

// Data Details
import { CLINIC_INFO } from "./data";
import { MessageSquare, Phone, Calendar, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activePage, setActivePage] = useState<string>("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Synchronize dynamic routes with browser hashes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const validPages = [
        "home",
        "about-clinic",
        "about-doctor",
        "treatments",
        "results",
        "gallery",
        "testimonials",
        "faq",
        "contact",
        "book"
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage("home");
      }
    };

    handleHashChange(); // Call once on bootstrap
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Monitor scrolling to present Go-to-Top triggers and WhatsApp docking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePageChange = (page: string) => {
    window.location.hash = page;
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hello Jaipur Aesthetics Clinic! I am interested in a premium consultation path.");
    window.open(`https://wa.me/919116055700?text=${text}`, "_blank");
  };

  // Switch Router Panel
  const renderActiveView = () => {
    switch (activePage) {
      case "home":
        return <HomeView onPageChange={handlePageChange} />;
      case "about-clinic":
        return <AboutClinicView />;
      case "about-doctor":
        return <AboutDoctorView />;
      case "treatments":
        return <TreatmentsView onPageChange={handlePageChange} />;
      case "results":
        return <ResultsView />;
      case "gallery":
        return <GalleryView />;
      case "testimonials":
        return <TestimonialsView />;
      case "faq":
        return <FaqView />;
      case "contact":
        return <ContactView />;
      case "book":
        return <BookView />;
      default:
        return <HomeView onPageChange={handlePageChange} />;
    }
  };

  return (
    <div id="clinic-app-root" className="min-h-screen flex flex-col bg-white text-dark antialiased">
      {/* Header bar */}
      <Header activePage={activePage} onPageChange={handlePageChange} />

      {/* Primary dynamic view container with modern transition fade effects */}
      <main className="flex-grow pb-16 lg:pb-0" id="main-view-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer bar */}
      <Footer onPageChange={handlePageChange} />

      {/* CONVERSION: FLOATING FIXED QUICK ACTIONS (Desktop Right side) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3.5 z-40 hidden lg:flex select-none">
        {/* Go to top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 bg-white hover:bg-gold text-dark hover:text-white border border-gold-light/25 flex items-center justify-center rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-gold cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Call clinic */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="w-12 h-12 bg-dark hover:bg-gold text-white border border-transparent hover:border-gold flex items-center justify-center rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Call clinic directly"
        >
          <Phone className="w-4.5 h-4.5" />
        </a>

        {/* WhatsApp Chat button */}
        <button
          onClick={handleWhatsAppChat}
          className="relative w-12 h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer animate-none group"
          aria-label="WhatsApp with clinic coordinators"
        >
          {/* Active pulse frame behind */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366]/35 animate-ping opacity-60 -z-10" />
          <svg 
            viewBox="0 0 448 512" 
            className="w-5 h-5 fill-white" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.2 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </button>
      </div>

      {/* CONVERSION: STICKY MOBILE CONVERSION BAR (Sticky at bottom on smaller devices) */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur border-t border-gold-light/20 p-3.5 z-30 flex justify-between gap-3 shadow-2xl lg:hidden select-none">
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex-1 py-3 bg-[#FAF8F5] hover:bg-cream/55 border border-gold-light/35 text-dark font-sans text-[11px] uppercase font-bold tracking-widest text-center flex items-center justify-center gap-1.5 rounded-full transition-all shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-gold" /> Call Now
        </a>
        <button
          onClick={() => handlePageChange("book")}
          className="flex-1 py-3 bg-dark hover:bg-gold text-white font-sans text-[11px] uppercase font-bold tracking-widest text-center flex items-center justify-center gap-1.5 rounded-full shadow-lg active:scale-95 transition-all"
        >
          <Calendar className="w-3.5 h-3.5" /> Book Consultation
        </button>
      </div>

      {/* MOBILE-ONLY DYNAMIC FLOATING WHATSAPP BUTTON (with intelligent scroll docking) */}
      <motion.button
        onClick={handleWhatsAppChat}
        className={`fixed z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center rounded-full shadow-2xl transition-all duration-500 ease-in-out cursor-pointer group select-none lg:hidden ${
          isScrolled
            ? "bottom-20 right-5 w-12 h-12"
            : "bottom-24 left-1/2 -translate-x-1/2 px-5 py-3 h-12 w-auto max-w-[220px]"
        }`}
        aria-label="WhatsApp with clinic coordinators"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366]/35 animate-ping opacity-60 -z-10" />
        <svg 
          viewBox="0 0 448 512" 
          className="w-5 h-5 fill-white flex-shrink-0" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.2 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
        <AnimatePresence>
          {!isScrolled && (
            <motion.span 
              initial={{ opacity: 0, width: 0, marginLeft: 0 }}
              animate={{ opacity: 1, width: "auto", marginLeft: 8 }}
              exit={{ opacity: 0, width: 0, marginLeft: 0 }}
              transition={{ duration: 0.2 }}
              className="text-white font-sans text-xs font-bold uppercase tracking-widest whitespace-nowrap overflow-hidden"
            >
              Chat on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
