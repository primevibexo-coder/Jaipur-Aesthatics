/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { BeforeAfterItem } from "../types";
import { Sparkles, ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  item: BeforeAfterItem;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ item }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div id={`slider-${item.id}`} className="bg-white rounded-xl overflow-hidden border border-gold-light/10 luxury-shadow flex flex-col h-full">
      {/* Slider Area */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] select-none overflow-hidden cursor-ew-resize group"
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* Before Image (Background) */}
        <img
          src={item.beforeImage}
          alt={`Before ${item.title}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 glass-panel px-3 py-1 text-xs font-semibold uppercase tracking-wider text-dark rounded-full shadow-sm z-30">
          Before
        </div>

        {/* After Image (Foreground with Clip) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={item.afterImage}
            alt={`After ${item.title}`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-4 right-4 bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white rounded-full shadow-sm z-30">
          After
        </div>

        {/* Dynamic Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gold hover:bg-gold-dark z-20 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 bg-gold hover:scale-105 active:scale-95 text-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto cursor-ew-resize transition-transform duration-150 border-2 border-white">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>

        {/* Hover Hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-panel py-1 px-4 text-[11px] text-dark/70 rounded-full font-medium pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300 shadow-sm flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-gold" /> Drag slider to compare results
        </div>
      </div>

      {/* Description Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-serif text-lg font-bold text-dark mb-1 group-hover:text-gold transition-colors duration-200">
            {item.title}
          </h4>
          <p className="text-xs text-dark/50 font-mono uppercase tracking-wider mb-2">
            Concern: {item.concern}
          </p>
          <p className="text-sm text-dark/70 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-cream flex items-center justify-between text-xs font-medium">
          <span className="text-gold uppercase tracking-wider font-semibold">
            {item.category} aesthetics
          </span>
          <span className="text-dark/40">
            Timeline: {item.timeframe}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
