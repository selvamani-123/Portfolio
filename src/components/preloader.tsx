"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, CheckCircle } from "lucide-react";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING KERNEL...");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const statuses = [
      { at: 15, text: "LOADING DEV ENVIRONMENT..." },
      { at: 45, text: "MOUNTING BENTO MODULES..." },
      { at: 75, text: "CONNECTING AI / GIS RADAR..." },
      { at: 95, text: "SELVAMANI M PORTFOLIO READY" },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        const currentTarget = statuses.find((s) => next >= s.at);
        if (currentTarget) {
          setStatusText(currentTarget.text);
        }
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white font-mono select-none px-4"
        >
          {/* Ambient Background Pulse */}
          <div className="absolute w-72 h-72 rounded-full bg-cyber-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-sm space-y-6">
            {/* Brand Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-cyber-400 animate-ping" />
                <span className="text-xs font-bold tracking-widest text-white">
                  SELVAMANI M
                </span>
              </div>
              <span className="text-[10px] text-neutral-muted">v2026.08.30</span>
            </div>

            {/* Progress Bar & Percentage */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-neutral-muted">
                <span className="text-cyber-300 font-semibold">{statusText}</span>
                <span className="text-white font-bold">{progress}%</span>
              </div>

              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-white to-cyber-400 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* System Status Indicators */}
            <div className="grid grid-cols-2 gap-2 text-[10px] text-neutral-muted pt-2">
              <div className="flex items-center gap-1.5 bg-white/[0.02] p-2 rounded border border-white/5">
                <Terminal className="w-3 h-3 text-cyber-400" />
                <span>CORE: ONLINE</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.02] p-2 rounded border border-white/5">
                <Cpu className="w-3 h-3 text-cyber-400" />
                <span>CGPA 9.17 • 3RD YR</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
