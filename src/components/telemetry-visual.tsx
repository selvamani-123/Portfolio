"use client";

import React from "react";

export default function TelemetryVisual() {
  return (
    <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center p-8 relative overflow-hidden">
      {/* Abstract Dashboard Layout */}
      <div className="w-full h-full max-w-lg mx-auto flex flex-col gap-4">
        
        {/* Top Header line */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="text-[10px] font-mono text-neutral-muted">TELEMETRY_STREAM_ACTIVE</div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-accent/80" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Content Grids */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          
          {/* Main Chart Area */}
          <div className="col-span-2 border border-white/5 bg-[#050505] rounded-md p-4 flex flex-col relative overflow-hidden">
            <div className="text-[10px] font-mono text-neutral-muted mb-auto">SENSOR_ANALYTICS</div>
            
            {/* Abstract Line Chart */}
            <div className="h-16 w-full flex items-end gap-1 mt-6 opacity-40">
              <div className="flex-1 h-[20%] bg-white" />
              <div className="flex-1 h-[40%] bg-white" />
              <div className="flex-1 h-[30%] bg-white" />
              <div className="flex-1 h-[60%] bg-white" />
              <div className="flex-1 h-[45%] bg-white" />
              <div className="flex-1 h-[80%] bg-accent" />
              <div className="flex-1 h-[50%] bg-white" />
              <div className="flex-1 h-[90%] bg-white" />
              <div className="flex-1 h-[30%] bg-white" />
              <div className="flex-1 h-[40%] bg-white" />
            </div>
          </div>

          {/* Metric Cards */}
          <div className="border border-white/5 bg-[#050505] rounded-md p-4 flex flex-col justify-between">
            <div className="text-[10px] font-mono text-neutral-muted">RPM_DELTA</div>
            <div className="text-xl font-sans text-white font-medium tracking-tight">4,280</div>
          </div>

          <div className="border border-white/5 bg-[#050505] rounded-md p-4 flex flex-col justify-between">
            <div className="text-[10px] font-mono text-neutral-muted">TEMP_CORE</div>
            <div className="text-xl font-sans text-white font-medium tracking-tight">88.5°</div>
          </div>

        </div>

      </div>
    </div>
  );
}
