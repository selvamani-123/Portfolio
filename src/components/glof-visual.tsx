"use client";

import React from "react";

export default function GlofVisual() {
  return (
    <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center p-8 relative overflow-hidden">
      {/* Abstract Map Layout */}
      <div className="w-full h-full max-w-lg mx-auto relative border border-white/5 bg-[#050505] rounded-md p-4 flex flex-col">
        
        {/* Overlay UI */}
        <div className="absolute top-4 left-4 z-10">
          <div className="text-[10px] font-mono text-neutral-muted bg-black/50 px-2 py-1 border border-white/10 rounded">
            GIS_MAPPING // RISK_ZONES
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-10">
          <div className="w-16 h-16 rounded-full border border-accent/20 flex items-center justify-center bg-accent/5 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full border border-accent/40 bg-accent/10" />
          </div>
        </div>

        {/* Topographic Lines (Abstract SVG) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <path d="M 0,50 Q 25,30 50,50 T 100,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            <path d="M 0,60 Q 25,40 50,60 T 100,60" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-white" />
            <path d="M 0,40 Q 25,20 50,40 T 100,40" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-white" />
            
            {/* River / Lake Representation */}
            <path d="M 30,50 Q 50,70 70,30" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" opacity="0.6" />
            <circle cx="70" cy="30" r="3" fill="currentColor" className="text-accent" />
            <circle cx="70" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" opacity="0.3" strokeDasharray="1,1" />
          </svg>
        </div>

        {/* Data Points */}
        <div className="absolute left-6 bottom-6 flex flex-col gap-2">
          <div className="h-1 w-8 bg-white/20 rounded" />
          <div className="h-1 w-12 bg-white/20 rounded" />
          <div className="h-1 w-6 bg-accent/40 rounded" />
        </div>

      </div>
    </div>
  );
}
