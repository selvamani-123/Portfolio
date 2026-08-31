import React from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Clock, 
  IndianRupee, 
  Navigation, 
  Sparkles, 
  CheckCircle2, 
  XCircle,
  Zap
} from 'lucide-react';

export default function RouteComparison({ routes, selectedRouteId, onSelectRoute, onStartNavigation }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center space-x-1.5">
            <span>Route Safety Optimizer</span>
            <span className="bg-safety-500/20 text-safety-400 text-[10px] px-1.5 py-0.5 rounded font-mono">
              3 OPTIONS
            </span>
          </h3>
          <p className="text-xs text-slate-400">Select your preferred route balance</p>
        </div>
      </div>

      {/* Route Cards */}
      <div className="space-y-2.5">
        {routes.map((route) => {
          const isSelected = route.id === selectedRouteId;
          const isRisky = route.id === 'route-risky';
          const isRecommended = route.isRecommended;

          return (
            <div
              key={route.id}
              onClick={() => onSelectRoute(route.id)}
              className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer relative ${
                isSelected
                  ? isRisky
                    ? 'bg-rose-950/30 border-rose-600 ring-2 ring-rose-500/30'
                    : 'bg-slate-900 border-safety-500 ring-2 ring-safety-500/30 shadow-lg shadow-safety-900/30'
                  : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              {/* Recommended Badge */}
              {isRecommended && (
                <div className="absolute -top-2.5 right-3 bg-gradient-to-r from-safety-600 to-blue-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-md flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>RECOMMENDED</span>
                </div>
              )}

              {isRisky && (
                <div className="absolute -top-2.5 right-3 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md flex items-center space-x-1">
                  <AlertTriangle className="w-3 h-3" />
                  <span>DANGEROUS CORRIDOR</span>
                </div>
              )}

              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm flex items-center space-x-2">
                    <span>{route.title}</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{route.subtitle}</p>
                </div>

                {/* Safety Score Meter */}
                <div className="text-right">
                  <div className={`text-base font-black ${
                    route.safetyScore >= 85 ? 'text-emerald-400' : route.safetyScore >= 70 ? 'text-blue-400' : 'text-rose-400'
                  }`}>
                    {route.safetyScore}<span className="text-[10px] text-slate-400">/100</span>
                  </div>
                  <span className="text-[9px] text-slate-400 uppercase font-semibold">Safety Score</span>
                </div>
              </div>

              {/* Stats Comparison Grid */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-2.5 border-t border-slate-800/80 text-xs">
                
                {/* Time */}
                <div className="flex items-center space-x-1.5 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white">{route.durationMins} min</span>
                    <span className="text-[10px] text-slate-400 block">{route.distanceKm} km</span>
                  </div>
                </div>

                {/* Hazards Encountered */}
                <div className="flex items-center space-x-1.5 text-slate-300">
                  {route.hazardsCount > 0 ? (
                    <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  )}
                  <div>
                    <span className={`font-bold ${route.hazardsCount > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {route.hazardsCount > 0 ? `${route.hazardsCount} Hazards` : '0 Hazards'}
                    </span>
                    <span className="text-[10px] text-slate-400 block">
                      {route.hazardsCount > 0 ? 'High risk' : 'Clear roads'}
                    </span>
                  </div>
                </div>

                {/* Earnings & Safety Bonus */}
                <div className="flex items-center space-x-1.5 text-slate-300">
                  <IndianRupee className="w-3.5 h-3.5 text-earnings-500 shrink-0" />
                  <div>
                    <span className="font-extrabold text-earnings-400">₹{route.totalEarnings}</span>
                    {route.safetyBonus > 0 ? (
                      <span className="text-[10px] text-emerald-400 block font-semibold">+₹{route.safetyBonus} bonus</span>
                    ) : (
                      <span className="text-[10px] text-slate-500 block">No bonus</span>
                    )}
                  </div>
                </div>

              </div>

              {/* Key Benefits or Risk Alerts */}
              {route.benefits && (
                <div className="mt-2 text-[11px] text-slate-300 space-y-0.5">
                  {route.benefits.map((b, i) => (
                    <div key={i} className="flex items-center space-x-1.5 text-emerald-400/90">
                      <span className="text-xs">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              )}

              {route.hazardList && route.hazardList.length > 0 && (
                <div className="mt-2 text-[11px] text-rose-400 space-y-0.5">
                  {route.hazardList.map((h, i) => (
                    <div key={i} className="flex items-center space-x-1.5 text-rose-400">
                      <span>⚠️</span>
                      <span className="truncate">{h.name}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Start Navigation CTA */}
      <button
        onClick={onStartNavigation}
        className="w-full py-3 bg-gradient-to-r from-safety-600 via-safety-500 to-blue-600 hover:from-safety-500 hover:to-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-safety-600/30 flex items-center justify-center space-x-2 transition transform active:scale-[0.98]"
      >
        <Navigation className="w-4 h-4 fill-white" />
        <span>Start Safe Navigation (+₹25 Bonus)</span>
      </button>
    </div>
  );
}
