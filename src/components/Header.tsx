/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { CLINIC_INFO } from "../data";
import { Menu, X, Phone, Calendar, Sparkles, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ activePage, onPageChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor screen scrolling to apply sleek transparency transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Clinic", id: "about-clinic" },
    { label: "About Doctor", id: "about-doctor" },
    { label: "Treatments", id: "treatments" },
    { label: "Results", id: "results" },
    { label: "Gallery", id: "gallery" },
    { label: "Testimonials", id: "testimonials" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavItemClick = (id: string) => {
    onPageChange(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top micro bar for high-end feel */}
      <div className="bg-dark text-cream text-[11px] font-medium tracking-widest py-2 px-4 flex justify-between items-center z-50 relative border-b border-gold/10 hidden md:flex">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            Jaipur's Finest Artistry & Medical Precision
          </span>
          <span className="text-gold-light/40">|</span>
          <span className="text-gold-light/80">C-Scheme, Jaipur, RJ</span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="hover:text-gold transition-colors duration-150 flex items-center gap-1.5"
          >
            <Phone className="w-3 h-3 text-gold" /> {CLINIC_INFO.phone}
          </a>
          <span className="text-gold-light/40">|</span>
          <span>Mon - Sat: 10:30 AM - 7:30 PM</span>
        </div>
      </div>

      <header
        id="app-header"
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-cream"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Brand area */}
          <div
            onClick={() => handleNavItemClick("home")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-gold/5 flex items-center justify-center rounded-sm border border-gold/30 group-hover:bg-gold/15 transition-all duration-300">
              <span className="font-serif font-semibold text-lg text-gold group-hover:scale-105 transition-transform">
                JA
              </span>
            </div>
            <div>
              <h1 className="font-serif text-lg md:text-xl font-bold text-dark tracking-wide leading-none select-none group-hover:text-gold transition-colors duration-200">
                JAIPUR AESTHETICS
              </h1>
              <p className="text-[9px] uppercase tracking-[0.25em] text-gold font-semibold mt-1">
                Luxury Aesthetic Clinic
              </p>
            </div>
          </div>

          {/* Desktop Navigation Link Cluster */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavItemClick(item.id)}
                  className={`relative px-3.5 py-2 text-xs uppercase tracking-wider font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive ? "text-gold" : "text-dark/75 hover:text-gold"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Call to Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavItemClick("book")}
              className="px-6 py-2.5 bg-dark hover:bg-gold text-cream hover:text-white rounded-full border border-dark hover:border-gold font-sans font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" /> Book Consultation
            </button>
          </div>

          {/* Mobile Hamburguer button toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavItemClick("book")}
              className="px-4 py-1.5 bg-dark text-white text-[10px] uppercase font-bold tracking-wider rounded-full flex items-center gap-1 shadow-sm cursor-pointer hover:bg-gold transition-colors"
            >
              <Calendar className="w-3 h-3" /> Book
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-dark hover:text-gold transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-In Premium Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/60 z-50 lg:hidden backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 w-80 h-full bg-cream p-6 flex flex-col z-50 shadow-2xl justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex justify-between items-center mb-10 pb-4 border-b border-gold/10">
                  <div>
                    <h2 className="font-serif font-bold text-lg text-dark tracking-wide">
                      JAIPUR AESTHETICS
                    </h2>
                    <p className="text-[9px] uppercase tracking-wider text-gold font-semibold">
                      Luxury Medical Clinic
                    </p>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 text-dark/75 hover:text-gold"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1.5">
                  {navItems.map((item) => {
                    const isActive = activePage === item.id;
                    return (
                      <button
                        key={item.id}
                        id={`mob-nav-${item.id}`}
                        onClick={() => handleNavItemClick(item.id)}
                        className={`text-left px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-150 rounded-lg ${
                          isActive
                            ? "bg-gold text-white"
                            : "text-dark/80 hover:bg-gold-light/10 hover:text-gold"
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="mt-8 border-t border-gold/10 pt-6">
                <button
                  onClick={() => handleNavItemClick("book")}
                  className="w-full py-3.5 bg-dark hover:bg-gold text-white text-xs uppercase font-bold tracking-widest text-center transition-all duration-300 shadow-lg flex items-center justify-center gap-2 rounded-full cursor-pointer"
                >
                  <Calendar className="w-4 h-4" /> Book Consultation
                </button>

                <div className="mt-5 flex items-center justify-center gap-4 text-xs font-mono text-dark/50">
                  <span>Tel: {CLINIC_INFO.phone}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
