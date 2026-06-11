/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { TREATMENTS, CLINIC_INFO } from "../data";
import { Calendar, Clock, User, CheckCircle, ArrowRight, ArrowLeft, ArrowUpRight, MessageSquare, PhoneCall } from "lucide-react";

export default function BookView() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    treatmentId: "",
    date: "",
    timeSlot: "morning", // morning, afternoon, evening
    name: "",
    phone: "",
    email: "",
    notes: ""
  });
  const [reservationId, setReservationId] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Pre-load treatment selection if patient requested it via Learn more pages.
  useEffect(() => {
    const cachedTreatmentId = localStorage.getItem("preferredTreatment");
    if (cachedTreatmentId) {
      setFormData((prev) => ({ ...prev, treatmentId: cachedTreatmentId }));
      // Wipe cache afterward
      localStorage.removeItem("preferredTreatment");
    } else if (TREATMENTS.length > 0) {
      // Default to first treatment
      setFormData((prev) => ({ ...prev, treatmentId: TREATMENTS[0].id }));
    }
  }, []);

  const handleNextStep = () => {
    if (step === 1 && !formData.treatmentId) return;
    if (step === 2 && !formData.date) return;
    setStep((prev) => Math.min(3, prev + 1));
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;

    setSubmitting(true);

    // Simulate high-end server check reservation locking
    setTimeout(() => {
      const generatedId = "JA-" + Math.floor(100000 + Math.random() * 900000);
      setReservationId(generatedId);
      
      // Store locally so patient can review their appointment
      const localHistory = JSON.parse(localStorage.getItem("ja_appointments") || "[]");
      localHistory.push({
        ...formData,
        id: generatedId,
        timestamp: new Date().toISOString(),
        treatmentName: TREATMENTS.find(t => t.id === formData.treatmentId)?.name || "Bespoke consultation"
      });
      localStorage.setItem("ja_appointments", JSON.stringify(localHistory));

      setSubmitting(false);
      setStep(4); // Trigger success boarding card layout
    }, 1500);
  };

  const selectedTreatment = TREATMENTS.find((t) => t.id === formData.treatmentId);

  // WhatsApp helper
  const handleWhatsAppInstantLock = () => {
    const text = `Hello Jaipur Aesthetics, my name is ${formData.name}. I have requested appointment Reservation: ${reservationId}. Treatment: ${selectedTreatment?.name || "Premium Consultation"}. Preferred Date: ${formData.date}, Shift: ${formData.timeSlot.toUpperCase()}. Kindly lock my slot!`;
    window.open(`https://wa.me/919116055700?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-cream/40 py-16 border-b border-gold-light/15 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold font-mono block mb-3">Scheduling</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-dark tracking-tight mb-2">
            Secure Your Private Consultation
          </h1>
          <p className="text-dark/55 max-w-xl mx-auto text-xs sm:text-sm">
            Review calendar weeks, coordinate shifts, and provide baseline physiological markers. All procedures are planned post personal skin mapping.
          </p>
        </div>
      </section>

      {/* Main Reservation Module */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mx-auto bg-white border border-gold-light/15 shadow-xl rounded-2xl overflow-hidden">
          
          {/* Progress Indicators (hide on success step 4) */}
          {step < 4 && (
            <div className="bg-[#FAF8F5] border-b border-gold-light/10 p-5 flex justify-between items-center text-xs font-mono uppercase tracking-wider font-bold">
              <div className="flex items-center gap-1.5">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-dark text-white" : "bg-dark/15 text-dark/45"
                }`}>1</span>
                <span className={step === 1 ? "text-gold" : "text-dark/45"}>Procedure</span>
              </div>
              <div className="h-px bg-gold-light/30 flex-1 mx-4" />
              <div className="flex items-center gap-1.5">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-dark text-white" : "bg-dark/15 text-dark/45"
                }`}>2</span>
                <span className={step === 2 ? "text-gold" : "text-dark/45"}>Preferred Date</span>
              </div>
              <div className="h-px bg-gold-light/30 flex-1 mx-4" />
              <div className="flex items-center gap-1.5">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  step >= 3 ? "bg-dark text-white" : "bg-dark/15 text-dark/45"
                }`}>3</span>
                <span className={step === 3 ? "text-gold" : "text-dark/45"}>Identity Details</span>
              </div>
            </div>
          )}

          {/* Step 1: Select Treatment */}
          {step === 1 && (
            <div className="p-8 space-y-6">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-dark/70 uppercase tracking-widest">
                  1. Choose Aesthetic Specialty / Procedure
                </label>
                <select
                  value={formData.treatmentId}
                  onChange={(e) => setFormData({ ...formData, treatmentId: e.target.value })}
                  className="w-full px-4 py-3 border border-gold-light/20 focus:border-gold focus:outline-none bg-cream/10 rounded h-12 text-sm text-dark font-medium"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} (Avg: {t.duration})
                    </option>
                  ))}
                </select>
              </div>

              {selectedTreatment && (
                <div className="p-5 bg-gold/5 border border-gold/15 rounded-xl text-left space-y-2">
                  <span className="inline-block text-[9px] uppercase tracking-wider bg-gold text-white px-2 py-0.5 rounded font-bold font-mono">
                    Treatment Specs Verified
                  </span>
                  <h4 className="font-serif text-md font-bold text-dark">{selectedTreatment.name}</h4>
                  <p className="text-xs text-dark/70 leading-relaxed">{selectedTreatment.shortDesc}</p>
                  <p className="text-[11px] text-[#A88F5E] font-medium pt-1.5">
                    ⏱️ Session duration: {selectedTreatment.duration} • Scope: {selectedTreatment.sessionsRequired}
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-cream flex justify-end">
                <button
                  onClick={handleNextStep}
                  className="px-6 py-3 bg-dark hover:bg-gold text-cream hover:text-white rounded-full text-xs uppercase font-bold tracking-widest flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  Continue to Calendar <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Date & Shift */}
          {step === 2 && (
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Calendar Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-dark/70 uppercase tracking-widest flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gold" /> Choose Target Date
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3.5 bg-cream/5 border border-gold-light/20 focus:outline-none focus:border-gold text-sm text-dark"
                  />
                  <span className="block text-[10px] text-dark/45 italic leading-snug">
                    *Our team will crosscheck this specific date against physician agendas. Sunday hours are prior-booking only.
                  </span>
                </div>

                {/* Hours Shift selection */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-dark/70 uppercase tracking-widest flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gold" /> Preferred Day Shift
                  </label>
                  
                  <div className="flex flex-col gap-2.5">
                    <label className={`p-3.5 border rounded-lg cursor-pointer flex justify-between items-center hover:bg-gold-light/5 text-xs font-semibold ${
                      formData.timeSlot === "morning" ? "border-gold bg-gold/5 font-bold" : "border-gold-light/10"
                    }`}>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="shift"
                          checked={formData.timeSlot === "morning"}
                          onChange={() => setFormData({ ...formData, timeSlot: "morning" })}
                          className="text-gold focus:ring-gold"
                        />
                        <span>Morning Shift</span>
                      </div>
                      <span className="text-dark/45 font-mono">10:30 AM - 01:00 PM</span>
                    </label>

                    <label className={`p-3.5 border rounded-lg cursor-pointer flex justify-between items-center hover:bg-gold-light/5 text-xs font-semibold ${
                      formData.timeSlot === "afternoon" ? "border-gold bg-gold/5 font-bold" : "border-gold-light/10"
                    }`}>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="shift"
                          checked={formData.timeSlot === "afternoon"}
                          onChange={() => setFormData({ ...formData, timeSlot: "afternoon" })}
                          className="text-gold focus:ring-gold"
                        />
                        <span>Midday / Afternoon Shift</span>
                      </div>
                      <span className="text-dark/45 font-mono">01:30 PM - 04:30 PM</span>
                    </label>

                    <label className={`p-3.5 border rounded-lg cursor-pointer flex justify-between items-center hover:bg-gold-light/5 text-xs font-semibold ${
                      formData.timeSlot === "evening" ? "border-gold bg-gold/5 font-bold" : "border-gold-light/10"
                    }`}>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="shift"
                          checked={formData.timeSlot === "evening"}
                          onChange={() => setFormData({ ...formData, timeSlot: "evening" })}
                          className="text-gold focus:ring-gold"
                        />
                        <span>Late Evening Shift</span>
                      </div>
                      <span className="text-dark/45 font-mono">05:00 PM - 07:30 PM</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-cream flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className="px-5 py-3 border border-dark/25 text-dark rounded-full text-xs uppercase font-bold tracking-wider flex items-center gap-1.5 hover:bg-cream/20 cursor-pointer transition-colors active:scale-95"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={!formData.date}
                  className="px-6 py-3 bg-dark disabled:bg-dark/30 hover:bg-gold text-cream hover:text-white rounded-full text-xs uppercase font-bold tracking-widest flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  Provide Identity info <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Identity & Concerns */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-dark/70 uppercase tracking-widest flex items-center gap-1">
                    <User className="w-4 h-4 text-gold" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyal Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-cream/10 border border-gold-light/15 focus:outline-none focus:border-gold text-sm text-dark font-medium rounded"
                  />
                </div>
                {/* Contact Phone */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-dark/70 uppercase tracking-widest">Contact Phone (WhatsApp Ready)</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 99999 88888"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-cream/10 border border-gold-light/15 focus:outline-none focus:border-gold text-sm text-dark font-medium rounded"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-bold text-dark/70 uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. priyal@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-cream/10 border border-gold-light/15 focus:outline-none focus:border-gold text-sm text-dark font-medium rounded"
                />
              </div>

              {/* Specific concerns */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-bold text-dark/70 uppercase tracking-widest">Specific Clinical Concerns / Acne History</label>
                <textarea
                  rows={4}
                  placeholder="Tell Dr. Meera about dynamic wrinkles, scar depths, hair loss weeks, or previous treatments..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-cream/10 border border-gold-light/15 focus:outline-none focus:border-gold text-xs text-dark rounded resize-none"
                />
              </div>

              <div className="pt-6 border-t border-cream flex justify-between items-center">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-3 border border-dark/25 text-dark rounded-full text-xs uppercase font-bold tracking-wider flex items-center gap-1.5 hover:bg-cream/20 cursor-pointer transition-colors active:scale-95"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-8 py-3.5 bg-gold hover:bg-gold-dark text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                >
                  {submitting ? "Locking Reservation..." : "Complete Booking"}
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Booking Success Boarding Card */}
          {step === 4 && (
            <div className="p-8 sm:p-12 text-center space-y-8 bg-gradient-to-b from-cream/25 to-white">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10 animate-pulse" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-dark tracking-tight">
                  Seat Reservation Registered!
                </h3>
                <p className="text-xs text-dark/50 uppercase tracking-widest font-mono">
                  Temporary Ticker ID: <span className="font-bold text-gold-dark">{reservationId}</span>
                </p>
                <p className="text-sm text-dark/70 max-w-md mx-auto leading-relaxed pt-2">
                  Thank you, <strong>{formData.name}</strong>. Your clinical request has been staged in our calendar system.
                </p>
              </div>

              {/* Physical coupon/ticket representation */}
              <div className="max-w-md mx-auto bg-white border-2 border-dashed border-gold-light/35 p-6 rounded-xl shadow-md text-left space-y-4 font-sans relative">
                {/* Ticket punch holes */}
                <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#FAF8F5] border-r border-[#FAF8F5] rounded-full" />
                <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#FAF8F5] border-l border-[#FAF8F5] rounded-full" />

                <div className="flex justify-between border-b pb-3 border-cream text-xs font-mono">
                  <span className="text-dark/40 uppercase">Aesthetic Lounge Route</span>
                  <span className="text-gold font-bold uppercase">C-Scheme, Jaipur</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
                  <div>
                    <span className="block text-[9px] uppercase text-dark/40 font-mono">Patient</span>
                    <span className="text-dark">{formData.name}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase text-dark/40 font-mono">Treatment Target</span>
                    <span className="text-dark text-gold truncate block">{selectedTreatment?.name || "Bespoke Consulting"}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase text-dark/40 font-mono">Proposed Date</span>
                    <span className="text-dark">{formData.date}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase text-dark/40 font-mono">Preferred Time</span>
                    <span className="text-dark uppercase">{formData.timeSlot} Shift</span>
                  </div>
                </div>

                <div className="pt-2 text-center text-[10px] text-dark/45">
                  ✓ Present this boarding card on arrival at Crown Galleria, C-Scheme.
                </div>
              </div>

              {/* Optimization WhatsApp nudge */}
              <div className="max-w-md mx-auto bg-green-50/50 p-5 rounded-xl border border-green-200 text-left space-y-3.5">
                <p className="text-xs text-green-800 leading-relaxed">
                  <strong>Bypass Standard Queue:</strong> Tap the button below to instantly relay your Temporary ID directly to our WhatsApp front desk. We can lock the precise hour slot instantly!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleWhatsAppInstantLock}
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer border-none"
                  >
                    <svg 
                      viewBox="0 0 448 512" 
                      className="w-4 h-4 fill-white" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.2 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    Lock Instantly on WhatsApp
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-cream">
                <button
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      treatmentId: TREATMENTS[0].id,
                      date: "",
                      timeSlot: "morning",
                      name: "",
                      phone: "",
                      email: "",
                      notes: ""
                    });
                  }}
                  className="text-xs font-bold uppercase tracking-widest text-dark hover:text-gold transition-colors block mx-auto underline"
                >
                  Schedule Another Procedure Consultation
                </button>
              </div>

            </div>
          )}

        </div>
      </section>
    </div>
  );
}
