/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CLINIC_INFO } from "../data";
import { Phone, Mail, MapPin, Sparkles, MessageCircle, Instagram, Facebook, Youtube, ShieldAlert } from "lucide-react";

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const treatmentLinks = [
    { name: "Luxury Botox", id: "botox" },
    { name: "Dermal Fillers", id: "fillers" },
    { name: "Triple Wavelength Laser", id: "laser-hair" },
    { name: "HydraFacial MD", id: "hydrafacial" },
    { name: "Autologous PRP Hair", id: "prp-hair" }
  ];

  const pageLinks = [
    { name: "Home", id: "home" },
    { name: "About Clinic", id: "about-clinic" },
    { name: "About Doctor", id: "about-doctor" },
    { name: "Treatments & Services", id: "treatments" },
    { name: "Before & After Results", id: "results" },
    { name: "Interior Gallery", id: "gallery" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Frequently Asked FAQs", id: "faq" },
    { name: "Contact & Address", id: "contact" }
  ];

  const handleLinkClick = (id: string) => {
    onPageChange(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="app-footer" className="bg-dark text-cream pt-16 pb-8 border-t border-gold/15 relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick("home")}>
              <div className="w-8 h-8 bg-gold/10 flex items-center justify-center border border-gold/30">
                <span className="font-serif font-semibold text-sm text-gold">JA</span>
              </div>
              <div>
                <h3 className="font-serif text-md font-bold text-white tracking-wide">JAIPUR AESTHETICS</h3>
                <p className="text-[8px] uppercase tracking-wider text-gold font-semibold">Luxury Medical Clinic</p>
              </div>
            </div>
            
            <p className="text-xs text-cream/70 leading-relaxed mt-2">
              An elite medical cosmetic medicine residency, blending high-end British clinical precision with warm curated luxury. Founded by AIIMS graduate Dr. Meera Vasudevan.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href={CLINIC_INFO.socialLinks.find(s => s.platform === "Instagram")?.url}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white text-gold transition-all duration-300 rounded-sm"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.socialLinks.find(s => s.platform === "Facebook")?.url}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white text-gold transition-all duration-300 rounded-sm"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.socialLinks.find(s => s.platform === "YouTube")?.url}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white text-gold transition-all duration-300 rounded-sm"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2.5">
              Clinic Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-xs text-cream/65 hover:text-gold transition-colors duration-150 text-left active:scale-95 duration-100"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments quick link */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2.5">
              Premium Treatments
            </h4>
            <ul className="flex flex-col gap-2.5">
              {treatmentLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      handleLinkClick("treatments");
                      setTimeout(() => {
                        const el = document.getElementById(`treatment-${link.id}`);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                      }, 400);
                    }}
                    className="text-xs text-cream/65 hover:text-gold transition-colors duration-150 flex items-center gap-1.5 text-left"
                  >
                    <Sparkles className="w-3 h-3 text-gold/60" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-gold pl-2.5">
              Concierge Desk
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-xs text-cream/75 leading-relaxed">
                  {CLINIC_INFO.address}
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="text-xs text-cream/75 hover:text-white transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-xs text-cream/75 hover:text-white transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </li>
              <li className="flex gap-2.5 items-start mt-2">
                <div className="text-[10px] bg-gold/10 px-2 py-1 rounded border border-gold/20 text-gold font-semibold uppercase tracking-wider">
                  Open Mon - Saturday: 10:30 AM - 7:30 PM
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Footprint */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="bg-white/[0.02] p-5 rounded border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex gap-2.5 items-start">
              <ShieldAlert className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] text-cream/50 leading-relaxed max-w-4xl">
                  <strong>Disclaimer:</strong> All aesthetic treatments, laser procedures, and injectables (Botox, Dermal Fillers) are carried out exclusively by board-certified clinical experts under stringent medical sanitization and US-FDA safety benchmarks. Clinical outcomes, restoration times, and satisfaction index metrics may naturally vary based on unique physiology.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 items-center justify-center mt-6 text-[10px] text-cream/45 border-b border-white/5 pb-6">
            <span className="font-semibold text-cream/60">Expert Highlights:</span>
            <span>Dermatologist in Jaipur</span> • <span>Botox Treatment Jaipur</span> • <span>Dermal Fillers Jaipur</span> • <span>Skin Rejuvenation Jaipur</span> • <span>Laser Hair Reduction Jaipur</span> • <span>Hair Restoration Jaipur</span> • <span>Anti-Aging Clinic Jaipur</span> • <span>Cosmetic Dermatology Jaipur</span>
          </div>
        </div>

        {/* Bottom micro copyright bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>© {currentYear} Jaipur Aesthetics Clinic. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-gold transition-colors cursor-pointer text-[11px]">Privacy Policy</span>
            <span className="hover:text-gold transition-colors cursor-pointer text-[11px]">Terms of Service</span>
            <span className="hover:text-gold transition-colors cursor-pointer text-[11px]">Patient Rights & Consent</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
