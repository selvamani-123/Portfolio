import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  IndianRupee, 
  Clock, 
  Navigation, 
  Coffee, 
  Sparkles, 
  Layers, 
  User, 
  PhoneCall, 
  Compass, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  MapPin
} from 'lucide-react';
import MapView from './MapView';
import RouteComparison from './RouteComparison';
import ActiveNavigation from './ActiveNavigation';
import WorkerProfile from './WorkerProfile';

export default function WorkerDashboard({
  worker,
  routes,
  selectedRouteId,
  onSelectRoute,
  hazards,
  restStops,
  onOpenFatigueModal,
  onOpenSOS,
  onUpdateSubscription,
  isNavigating,
  setIsNavigating,
  vehiclePosition,
  setVehiclePosition,
  onDeliveryComplete
}) {
  const [activeTab, setActiveTab] = useState('navigate'); // 'navigate' | 'comparison' | 'profile'

  const selectedRoute = routes.find(r => r.id === selectedRouteId) || routes[1] || routes[0];

  const safetyScore = worker?.safetyProfile?.currentSafetyScore || 86;
  const isFatigued = worker?.currentShift?.activeHours >= 4.0;

  return (
    <div className="flex flex-col h-full bg-slate-950 text-slate-100 pb-20 sm:pb-6">
      
      {/* Top Rider Header Status Bar */}
      <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-safety-700 to-cyan-500 flex items-center justify-center font-black text-white text-sm shadow-md shadow-safety-600/30">
              RK
            </div>
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-900"></span>
          </div>

          <div>
            <div className="flex items-center space-x-1.5">
              <h2 className="font-bold text-white text-sm">{worker?.name || "Ramesh Kumar"}</h2>
              <span className="text-[10px] bg-safety-500/20 text-safety-400 font-mono px-1.5 py-0.5 rounded font-bold">
                {worker?.subscription?.plan || "PREMIUM"}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-slate-500" />
              <span className="truncate max-w-[160px]">{worker?.currentLocation?.address || "Koramangala, Bangalore"}</span>
            </p>
          </div>
        </div>

        {/* Shift Duration Pill */}
        <div className="text-right">
          <div className="flex items-center space-x-1 justify-end text-xs font-bold text-amber-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{worker?.currentShift?.activeHours || 4.5}h Active</span>
          </div>
          <span className="text-[10px] text-slate-400">14 Orders Done</span>
        </div>
      </div>

      {/* Fatigue Warning Banner (if shift > 4 hours) */}
      {isFatigued && (
        <div 
          onClick={onOpenFatigueModal}
          className="mx-4 mt-3 bg-gradient-to-r from-amber-950/70 via-amber-900/50 to-slate-900 border border-amber-500/50 p-3 rounded-2xl flex items-center justify-between cursor-pointer hover:border-amber-400 transition shadow-lg shadow-amber-950/40 animate-in slide-in-from-top-2"
        >
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-amber-500/20 rounded-xl text-amber-400 border border-amber-500/30">
              <Coffee className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xs font-bold text-amber-200">Fatigue Rest Alert</span>
                <span className="text-[9px] bg-amber-500/20 text-amber-300 font-bold px-1.5 py-0.5 rounded">
                  4.5h on road
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                Claim free chai & recharge at nearby safe rest hubs.
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
        </div>
      )}

      {/* Hero Metrics Row: Safety Score Gauge & Daily Earnings */}
      <div className="grid grid-cols-2 gap-3 px-4 mt-3">
        
        {/* Safety Score Card */}
        <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Safety Score</span>
            <ShieldCheck className="w-4 h-4 text-safety-400" />
          </div>

          <div className="flex items-baseline space-x-2 my-1">
            <span className="text-3xl font-black text-white">{safetyScore}</span>
            <span className="text-xs font-bold text-emerald-400 flex items-center">
              <TrendingUp className="w-3 h-3 mr-0.5" />
              +5.4%
            </span>
          </div>

          <div className="flex items-center justify-between text-[10px]">
            <span className="text-slate-400">Grade: <strong className="text-emerald-400 font-bold">A (Safe)</strong></span>
            <span className="text-safety-400 font-semibold">42 Hazards Avoided</span>
          </div>
        </div>

        {/* Earnings Card */}
        <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Today's Earnings</span>
            <IndianRupee className="w-4 h-4 text-earnings-400" />
          </div>

          <div className="flex items-baseline space-x-1 my-1">
            <span className="text-3xl font-black text-earnings-400">₹{worker?.todayEarnings?.total || 1055}</span>
          </div>

          <div className="flex items-center justify-between text-[10px]">
            <span className="text-emerald-400 font-semibold">+₹140 Safety Bonus</span>
            <span className="text-slate-400">Target: ₹1.2k</span>
          </div>
        </div>

      </div>

      {/* Main Tab Navigation Buttons */}
      <div className="flex px-4 mt-3 space-x-2">
        <button
          onClick={() => setActiveTab('navigate')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1.5 ${
            activeTab === 'navigate'
              ? 'bg-safety-600 text-white shadow-md shadow-safety-600/30'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Live Map</span>
        </button>

        <button
          onClick={() => setActiveTab('comparison')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1.5 ${
            activeTab === 'comparison'
              ? 'bg-safety-600 text-white shadow-md shadow-safety-600/30'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>3 Route Options</span>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1.5 ${
            activeTab === 'profile'
              ? 'bg-safety-600 text-white shadow-md shadow-safety-600/30'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>Profile / ₹99 Plan</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="flex-1 px-4 mt-3 flex flex-col min-h-[420px]">
        {activeTab === 'navigate' && (
          <div className="flex-1 flex flex-col space-y-3">
            {/* Interactive Map View */}
            <div className="w-full h-72 rounded-2xl overflow-hidden border border-slate-800 shadow-inner relative">
              <MapView
                routes={routes}
                selectedRouteId={selectedRouteId}
                onSelectRoute={onSelectRoute}
                hazards={hazards}
                restStops={restStops}
                vehiclePosition={vehiclePosition}
                isNavigating={isNavigating}
              />
            </div>

            {/* Navigation Active State or Quick Start Card */}
            {isNavigating ? (
              <ActiveNavigation
                route={selectedRoute}
                onEndNavigation={() => setIsNavigating(false)}
                onVehicleMove={(pos) => setVehiclePosition(pos)}
                onDeliveryComplete={onDeliveryComplete}
              />
            ) : (
              <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-safety-400 tracking-wider">
                      ACTIVE ORDER #8821
                    </span>
                    <h4 className="font-bold text-white text-sm">Indiranagar 100ft Road Drop</h4>
                  </div>
                  <span className="text-xs font-black text-earnings-400 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20">
                    ₹85.00 Payout
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs bg-slate-950/80 p-2 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Route Selected</span>
                    <strong className="text-white text-[11px] truncate block">{selectedRoute.title}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Safety Score</span>
                    <strong className="text-emerald-400">{selectedRoute.safetyScore}/100</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Bonus</span>
                    <strong className="text-earnings-400">+₹{selectedRoute.safetyBonus}</strong>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveTab('comparison')}
                    className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl border border-slate-700 transition"
                  >
                    Compare Routes
                  </button>

                  <button
                    onClick={() => setIsNavigating(true)}
                    className="flex-1 py-2.5 bg-safety-600 hover:bg-safety-500 text-white font-bold text-xs rounded-xl shadow-md shadow-safety-600/30 flex items-center justify-center space-x-1.5 transition"
                  >
                    <Navigation className="w-3.5 h-3.5 fill-white" />
                    <span>Start Navigation</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'comparison' && (
          <RouteComparison
            routes={routes}
            selectedRouteId={selectedRouteId}
            onSelectRoute={onSelectRoute}
            onStartNavigation={() => {
              setActiveTab('navigate');
              setIsNavigating(true);
            }}
          />
        )}

        {activeTab === 'profile' && (
          <WorkerProfile
            worker={worker}
            onUpdateSubscription={onUpdateSubscription}
          />
        )}
      </div>

    </div>
  );
}
