import React from 'react';
import { 
  X, 
  Coffee, 
  BatteryCharging, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Sparkles,
  Gift
} from 'lucide-react';

export default function FatigueModal({ isOpen, onClose, restStops = [], onSelectRestStop }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-slate-900 border border-amber-500/50 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-950/80 via-amber-900/60 to-slate-900 px-5 py-4 border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-amber-500/20 rounded-lg border border-amber-500/40 text-amber-400">
              <Coffee className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Fatigue Alert & Rest Guard</h3>
              <span className="text-[10px] text-amber-300 font-semibold uppercase tracking-wide">
                4.5 Hours Active Shift Detected
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 text-xs">
          
          {/* Warning Card */}
          <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-amber-200 text-xs font-bold block">
                Reflexes drop by 42% after 4 hours of continuous riding.
              </strong>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Take a 15-minute hydration & recharge break to reset your fatigue score and qualify for the ₹20 Refreshment Voucher!
              </p>
            </div>
          </div>

          {/* Reward Voucher Promo */}
          <div className="bg-gradient-to-r from-emerald-950/50 to-slate-900 border border-emerald-500/30 p-3 rounded-xl flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <Gift className="w-5 h-5 text-emerald-400" />
              <div>
                <span className="font-bold text-white text-xs block">Free Chai & Water Voucher Unlocked</span>
                <span className="text-[10px] text-emerald-300">Valid at all partner Shell & Chai Point stops</span>
              </div>
            </div>
            <span className="px-2 py-1 bg-emerald-500 text-slate-950 font-black rounded-lg text-[10px]">
              ₹20 FREE
            </span>
          </div>

          {/* Rest Stop List */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-slate-400">
              Nearby Partner Rest Stops (Under 1.5 km)
            </h4>

            {restStops.map((stop) => (
              <div
                key={stop.id}
                className="bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 p-3 rounded-xl space-y-2 transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-white text-xs">{stop.name}</h5>
                    <span className="text-[11px] text-slate-400">{stop.address}</span>
                  </div>
                  <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
                    {stop.distanceKm} km away
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {stop.amenities.map((am, i) => (
                    <span key={i} className="text-[9px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md">
                      ✓ {am}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (onSelectRestStop) onSelectRestStop(stop);
                    onClose();
                  }}
                  className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-lg transition flex items-center justify-center space-x-1.5 shadow-md shadow-cyan-600/20"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Navigate to this Rest Hub</span>
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
