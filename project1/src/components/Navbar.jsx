import React from 'react';
import { 
  ShieldCheck, 
  Smartphone, 
  Building2, 
  Sparkles, 
  AlertTriangle, 
  Activity, 
  Volume2
} from 'lucide-react';

export default function Navbar({ activeView, setActiveView, onOpenSOS, onOpenPitchTour, worker, isNavigating }) {
  return (
    <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveView('worker')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-safety-700 via-safety-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-safety-600/30">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  SAFE<span className="text-safety-500">TRACK</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-safety-500/20 text-safety-400 px-2 py-0.5 rounded-full border border-safety-500/30">
                  EUREKA 2026
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Intelligent Gig Worker Safety & Route Efficiency</p>
            </div>
          </div>

          {/* Center View Selector */}
          <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800 shadow-inner">
            <button
              onClick={() => setActiveView('worker')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeView === 'worker'
                  ? 'bg-safety-600 text-white shadow-md shadow-safety-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Worker App</span>
            </button>

            <button
              onClick={() => setActiveView('enterprise')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeView === 'enterprise'
                  ? 'bg-safety-600 text-white shadow-md shadow-safety-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Enterprise B2B</span>
            </button>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Pitch Tour Button */}
            <button
              onClick={onOpenPitchTour}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 hover:text-amber-200 hover:border-amber-400 rounded-lg text-xs font-semibold transition shadow-sm"
              title="2-Minute Pitch Deck for Judges"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="hidden sm:inline">2-Min Pitch Guide</span>
              <span className="sm:hidden">Pitch</span>
            </button>

            {/* Quick SOS Trigger */}
            <button
              onClick={onOpenSOS}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-red-600/90 hover:bg-red-500 text-white font-bold rounded-lg text-xs shadow-md shadow-red-600/30 transition transform active:scale-95 sos-pulse"
              title="Emergency SOS Broadcast"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>SOS</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
