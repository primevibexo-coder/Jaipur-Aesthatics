/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CLINIC_INFO } from "../data";
import { Phone, Mail, MapPin, Clock, MessageSquare, Landmark, CheckCircle, Send } from "lucide-react";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "inquiry",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate luxury API response trigger
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "inquiry", message: "" });
    }, 1200);
  };

  const handleOpenMap = () => {
    window.open("https://maps.google.com/?q=Janpath+C-Scheme+Jaipur+Crown+Galleria", "_blank");
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-cream/40 py-20 border-b border-gold-light/15 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">Reach Out</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-black text-dark tracking-tight mb-6">
            Inquire with Our Concierge Desk
          </h1>
          <p className="text-dark/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Our priority is to protect your comfort. For any custom booking arrangements, parking logistics, or treatment inquiries, reach us at your ease.
          </p>
        </div>
      </section>

      {/* Main Body contact columns */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-dark border-b border-cream pb-4">
              Clinic Coordinates
            </h3>

            {/* Address */}
            <div className="p-6 border border-gold-light/10 rounded-xl bg-cream/10 space-y-2">
              <div className="flex gap-3 items-center text-gold">
                <MapPin className="w-5 h-5 shrink-0" />
                <h4 className="font-serif text-md font-bold text-dark">Lounge Location</h4>
              </div>
              <p className="text-xs sm:text-sm text-dark/70 leading-relaxed pl-8">
                {CLINIC_INFO.address}
              </p>
            </div>

            {/* Calling Hotline */}
            <div className="p-6 border border-gold-light/10 rounded-xl bg-cream/10 space-y-2">
              <div className="flex gap-3 items-center text-gold">
                <Phone className="w-5 h-5 shrink-0" />
                <h4 className="font-serif text-md font-bold text-dark">Telephone Hotline</h4>
              </div>
              <p className="text-xs sm:text-sm text-dark/75 pl-8 font-medium">
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-gold transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </p>
            </div>

            {/* E-Mail */}
            <div className="p-6 border border-gold-light/10 rounded-xl bg-cream/10 space-y-2">
              <div className="flex gap-3 items-center text-gold">
                <Mail className="w-5 h-5 shrink-0" />
                <h4 className="font-serif text-md font-bold text-dark">Electronic Courier</h4>
              </div>
              <p className="text-xs sm:text-sm text-dark/75 pl-8 font-medium">
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-gold transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className="p-6 border border-gold-light/10 rounded-xl bg-[#1A1A1A] text-white space-y-4 relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-gold/5 rounded-full blur-xl" />
              <div className="flex gap-3 items-center text-gold">
                <Clock className="w-5 h-5 shrink-0 animate-pulse" />
                <h4 className="font-serif text-md font-bold text-white uppercase tracking-wider">Practice Hours</h4>
              </div>
              <div className="pl-8 space-y-2.5 text-xs text-cream/75">
                {CLINIC_INFO.workingHours.map((h, i) => (
                  <div key={i} className="flex justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    <span className="font-semibold">{h.days}:</span>
                    <span>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Form & Map Mock */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Interactive Form card */}
            <div className="bg-white border border-gold-light/15 rounded-2xl shadow-md p-8">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark mb-2">
                Send a Secure Dispatch
              </h3>
              <p className="text-xs text-dark/50 mb-8">
                Your patient identity and notes are handled in strict clinical confidentiality.
              </p>

              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto animate-bounce" />
                  <h4 className="font-serif text-lg font-bold">Inquiry Dispatch Successful</h4>
                  <p className="text-xs max-w-sm mx-auto leading-relaxed text-green-700">
                    Thank you. Your message has been classified securely inside our patient management ledger. A clinical receptionist will call or WhatsApp you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2 border border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-all text-xs font-semibold uppercase tracking-wider"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-bold text-dark/75 uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priyal Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-cream/20 text-dark border border-gold-light/15 focus:border-gold focus:outline-none rounded"
                      />
                    </div>
                    {/* Phone */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-bold text-dark/75 uppercase tracking-wider">Contact Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 99999 88888"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-cream/20 text-dark border border-gold-light/15 focus:border-gold focus:outline-none rounded"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-bold text-dark/75 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. priyal@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-cream/20 text-dark border border-gold-light/15 focus:border-gold focus:outline-none rounded"
                      />
                    </div>
                    {/* Subject */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-bold text-dark/75 uppercase tracking-wider">Subject Matter</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-cream/20 text-dark border border-gold-light/15 focus:border-gold focus:outline-none rounded h-[46px]"
                      >
                        <option value="inquiry">General Aesthetic Inquiry</option>
                        <option value="pricing">Treatment Plan Pricing Matrix</option>
                        <option value="press">Press & Media Contacts</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 text-left">
                    <label className="block text-xs font-bold text-dark/75 uppercase tracking-wider">Brief Message / Notes</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Outline any key concerns, symptoms, or requested booking weeks..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-cream/20 text-dark border border-gold-light/15 focus:border-gold focus:outline-none rounded resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 bg-dark hover:bg-gold text-cream hover:text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === "sending" ? (
                      "Transmitting..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Transmit Dispatch Securely
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Maps Representation Mock */}
            <div className="bg-cream/15 border border-gold-light/15 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-5 flex justify-between items-center bg-white border-b border-gold-light/10 text-left">
                <div>
                  <h4 className="font-serif text-md font-bold text-dark">Lounge Geographic Vector</h4>
                  <p className="text-[10px] text-dark/50"> Crown Galleria Building, Janpath, C-Scheme Road</p>
                </div>
                <button
                  onClick={handleOpenMap}
                  className="px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-cream text-xs uppercase tracking-wider font-bold transition-all cursor-pointer"
                >
                  Retrieve Live Navigation
                </button>
              </div>

              {/* Map vector mockup */}
              <div
                onClick={handleOpenMap}
                className="relative aspect-video w-full bg-[#E5E5E5] flex items-center justify-center cursor-pointer group"
              >
                {/* Simulated clean map graphic */}
                <div className="absolute inset-0 bg-[#F4F3F0] overflow-hidden opacity-90">
                  {/* Fake map streets */}
                  <div className="absolute top-1/2 left-0 right-0 h-4 bg-white transform rotate-3" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-white transform -rotate-12" />
                  <div className="absolute top-1/4 bottom-0 right-1/4 w-4 bg-white" />
                  
                  {/* Central Landmark Spot indicator */}
                  <div className="absolute top-[45%] left-[32%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="relative">
                      {/* Ring ripple animations */}
                      <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-gold/40 opacity-75 -left-2.5 -top-2.5" />
                      <div className="w-5 h-5 bg-dark border-2 border-gold rounded-full flex items-center justify-center text-gold shadow-lg z-10 relative">
                        <Landmark className="w-3 h-3" />
                      </div>
                    </div>
                    <span className="mt-1 bg-dark text-cream font-serif text-[10px] font-bold py-1 px-2 uppercase tracking-wider whitespace-nowrap shadow-md border border-gold/20">
                      Crown Galleria Suite
                    </span>
                  </div>
                </div>

                {/* Open Hint modal state */}
                <div className="absolute inset-x-0 bottom-4 text-center">
                  <div className="inline-block bg-white/95 backdrop-blur px-4 py-2 shadow-md rounded border border-gold-light/30 text-xs text-dark font-medium group-hover:scale-103 transition-transform">
                    📌 Location: Janpath, C-Scheme • Clinique Lounge Suite
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
