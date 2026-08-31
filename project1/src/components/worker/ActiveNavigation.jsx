import React, { useState, useEffect } from 'react';
import { 
  Navigation, 
  Volume2, 
  VolumeX, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  CornerUpRight, 
  CornerUpLeft, 
  ArrowUp, 
  X,
  Sparkles,
  IndianRupee,
  Gauge
} from 'lucide-react';

export default function ActiveNavigation({ 
  route, 
  onEndNavigation, 
  onVehicleMove, 
  onDeliveryComplete 
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [speed, setSpeed] = useState(32);
  const [isMuted, setIsMuted] = useState(false);
  const [hazardAlert, setHazardAlert] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const coordinates = route?.coordinates || [];

  // Simulated instructions along the route
  const instructions = [
    { text: "Head North on 80ft Road toward 4th Block", distance: "350m", icon: <ArrowUp className="w-5 h-5 text-white" /> },
    { text: "Turn right onto 100ft Illuminated Bypass", distance: "200m", icon: <CornerUpRight className="w-5 h-5 text-white" /> },
    { text: "Continue straight on Safe Corridor", distance: "1.2km", icon: <ArrowUp className="w-5 h-5 text-white" /> },
    { text: "Turn left towards Indiranagar Metro Link", distance: "400m", icon: <CornerUpLeft className="w-5 h-5 text-white" /> },
    { text: "Arriving at Indiranagar 100ft Road Drop point", distance: "50m", icon: <CheckCircle2 className="w-5 h-5 text-white" /> }
  ];

  // Move vehicle along route coordinates every 2.5 seconds
  useEffect(() => {
    if (coordinates.length === 0 || isCompleted) return;

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        const next = prev + 1;
        if (next < coordinates.length) {
          if (onVehicleMove) onVehicleMove(coordinates[next]);

          // Trigger simulated hazard warning midway
          if (next === 2) {
            setHazardAlert({
              title: "Hazard Avoidance Active",
              description: "SAFETRACK successfully bypassed the Sony World pothole crater. Route remains clear!",
              type: "SUCCESS"
            });
            // Speech synthesis simulated voice
            if (!isMuted && window.speechSynthesis) {
              const utterance = new SpeechSynthesisUtterance("Hazard successfully bypassed. Safe delivery corridor active.");
              utterance.rate = 1.1;
              window.speechSynthesis.speak(utterance);
            }
          }

          // Fluctuating speed simulation
          setSpeed(Math.floor(28 + Math.random() * 8));
          return next;
        } else {
          clearInterval(interval);
          setIsCompleted(true);
          return prev;
        }
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [coordinates, isCompleted, isMuted]);

  const currentInstruction = instructions[Math.min(stepIndex, instructions.length - 1)];
  const progressPercent = Math.min(100, Math.round(((stepIndex + 1) / Math.max(coordinates.length, 1)) * 100));

  if (isCompleted) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-5 rounded-2xl shadow-2xl text-center space-y-4 animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
          <Sparkles className="w-8 h-8 text-emerald-400 animate-bounce" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            DELIVERY COMPLETED SAFELY
          </span>
          <h3 className="text-xl font-black text-white mt-2">Zero Hazard Incident!</h3>
          <p className="text-xs text-slate-300 mt-1">
            You completed the delivery via the SAFETRACK Safe Route.
          </p>
        </div>

        <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-2 text-xs">
          <div className="flex justify-between items-center text-slate-300">
            <span>Base Delivery Fee:</span>
            <span className="font-bold text-white">₹60.00</span>
          </div>
          <div className="flex justify-between items-center text-emerald-400">
            <span className="font-semibold flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Safe Delivery Bonus:</span>
            </span>
            <span className="font-bold text-base">+₹25.00</span>
          </div>
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-sm font-extrabold">
            <span className="text-white">Total Credited:</span>
            <span className="text-earnings-400 text-lg">₹85.00</span>
          </div>
        </div>

        <button
          onClick={() => {
            if (onDeliveryComplete) onDeliveryComplete(85);
            onEndNavigation();
          }}
          className="w-full py-3 bg-earnings-500 hover:bg-earnings-600 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-earnings-500/30 transition transform active:scale-95"
        >
          Collect Earnings & Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      
      {/* Top Turn Instruction Banner */}
      <div className="bg-slate-900 border border-safety-600/60 p-4 rounded-2xl shadow-xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-safety-600 rounded-xl flex items-center justify-center shadow-md shadow-safety-600/40">
            {currentInstruction.icon}
          </div>
          <div>
            <span className="text-xs text-safety-400 font-bold block">{currentInstruction.distance}</span>
            <h4 className="text-sm font-bold text-white leading-tight">{currentInstruction.text}</h4>
          </div>
        </div>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition"
          title={isMuted ? "Unmute Voice Guidance" : "Mute Voice Guidance"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-safety-400" />}
        </button>
      </div>

      {/* Proximity Hazard Alert Toast (if any) */}
      {hazardAlert && (
        <div className="bg-emerald-950/80 border border-emerald-500/50 p-3 rounded-xl shadow-lg flex items-start space-x-2.5 animate-in slide-in-from-top duration-300">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="flex-1 text-xs">
            <strong className="text-emerald-300 block font-bold">{hazardAlert.title}</strong>
            <p className="text-slate-300 text-[11px]">{hazardAlert.description}</p>
          </div>
          <button onClick={() => setHazardAlert(null)} className="text-slate-400 hover:text-white">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Live Telemetry & Speed HUD */}
      <div className="grid grid-cols-3 gap-2 bg-slate-900/90 border border-slate-800 p-3 rounded-xl text-center">
        <div>
          <span className="text-[10px] text-slate-400 block font-semibold uppercase">Live Speed</span>
          <div className="text-lg font-black text-white flex items-center justify-center space-x-0.5">
            <span>{speed}</span>
            <span className="text-[10px] text-slate-400">km/h</span>
          </div>
          <span className="text-[9px] text-emerald-400">Within Safe Limit</span>
        </div>

        <div>
          <span className="text-[10px] text-slate-400 block font-semibold uppercase">Remaining</span>
          <div className="text-lg font-black text-safety-400">
            {Math.max(1, 18 - Math.round(stepIndex * 3))}<span className="text-[10px] text-slate-400"> min</span>
          </div>
          <span className="text-[9px] text-slate-400">{(5.9 - stepIndex * 0.9).toFixed(1)} km</span>
        </div>

        <div>
          <span className="text-[10px] text-slate-400 block font-semibold uppercase">Safety Bonus</span>
          <div className="text-lg font-black text-earnings-400">
            +₹25
          </div>
          <span className="text-[9px] text-emerald-400">Guaranteed</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
          <span>Route Progress</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-safety-500 to-emerald-400 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* End Navigation / Exit Button */}
      <div className="flex items-center space-x-2 pt-1">
        <button
          onClick={onEndNavigation}
          className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl border border-slate-700 transition"
        >
          Cancel Navigation
        </button>

        <button
          onClick={() => {
            setIsCompleted(true);
          }}
          className="flex-1 py-2.5 bg-safety-600 hover:bg-safety-500 text-white font-bold text-xs rounded-xl shadow-md shadow-safety-600/30 transition"
        >
          Simulate Dropoff
        </button>
      </div>

    </div>
  );
}
