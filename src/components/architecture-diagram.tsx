"use client";

import React from "react";
import {
  CloudRain,
  Filter,
  Binary,
  ShieldAlert,
  Activity,
  MapPin,
  Gauge,
  Server,
  Cpu,
  AlertTriangle,
  Bell,
  LineChart,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  CloudRain,
  Filter,
  Binary,
  ShieldAlert,
  Activity,
  MapPin,
  Gauge,
  Server,
  Cpu,
  AlertTriangle,
  Bell,
  LineChart,
};

interface ArchitectureDiagramProps {
  steps: { title: string; desc: string; icon: string }[];
  projectName: string;
}

export default function ArchitectureDiagram({ steps, projectName }: ArchitectureDiagramProps) {
  return (
    <div className="w-full bg-navy-950/70 p-6 rounded-2xl border border-card-border">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-card-border/60">
        <div>
          <span className="text-[10px] font-mono text-electric-400 uppercase tracking-widest block font-semibold">
            SYSTEM PIPELINE ARCHITECTURE
          </span>
          <h4 className="text-sm sm:text-base font-semibold font-mono text-white">
            {projectName} • End-to-End Flow
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-muted hidden sm:inline">
          {steps.length} STAGES
        </span>
      </div>

      {/* Grid Flow Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        {steps.map((step, idx) => {
          const Icon = ICON_MAP[step.icon] || Cpu;
          const isLast = idx === steps.length - 1;

          return (
            <div
              key={step.title}
              className="relative rounded-xl bg-navy-900/60 border border-card-border p-4 hover:border-electric-400/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono text-electric-400 font-bold px-2 py-0.5 rounded bg-electric-400/10 border border-electric-400/20">
                    STAGE 0{idx + 1}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-navy-950 border border-card-border flex items-center justify-center text-slate-light group-hover:text-cyber-400 group-hover:border-cyber-400/40 transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h5 className="text-xs sm:text-sm font-semibold font-mono text-white mb-1.5 group-hover:text-electric-400 transition-colors">
                  {step.title}
                </h5>
                <p className="text-xs text-slate-muted leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              {!isLast && (
                <div className="mt-3 pt-2 border-t border-card-border/40 flex items-center justify-end text-[10px] font-mono text-slate-muted group-hover:text-electric-400">
                  <span className="mr-1">Next</span>
                  <ArrowRight className="w-3 h-3 hidden md:inline" />
                  <ArrowDown className="w-3 h-3 md:hidden" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
