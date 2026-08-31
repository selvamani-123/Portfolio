import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  X, 
  PhoneCall, 
  MapPin, 
  ShieldAlert, 
  CheckCircle2, 
  Clock,
  Radio
} from 'lucide-react';

export default function SOSModal({ isOpen, onClose, worker, onConfirmSOS }) {
  const [countdown, setCountdown] = useState(5);
  const [isDispatched, setIsDispatched] = useState(false);
  const [sosResult, setSosResult] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setCountdown(5);
      setIsDispatched(false);
      setSosResult(null);
      return;
    }

    if (countdown > 0 && !isDispatched) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !isDispatched) {
      handleSendSOS();
    }
  }, [isOpen, countdown, isDispatched]);

  const handleSendSOS = async () => {
    setIsDispatched(true);
    if (onConfirmSOS) {
      const res = await onConfirmSOS();
      setSosResult(res);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-red-950/90 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-slate-900 border-2 border-red-500 rounded-3xl shadow-2xl overflow-hidden text-white">
        
        {/* Top Warning Banner */}
        <div className="bg-red-600 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="w-6 h-6 text-white animate-bounce" />
            <h3 className="font-black text-base tracking-wide uppercase">Emergency SOS Triggered</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 bg-red-700 hover:bg-red-800 rounded-lg text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-center">
          
          {!isDispatched ? (
            <>
              <div className="w-24 h-24 mx-auto rounded-full bg-red-500/20 border-4 border-red-500 flex items-center justify-center shadow-lg shadow-red-500/40 sos-pulse">
                <span className="text-4xl font-black text-red-400">{countdown}</span>
              </div>

              <div>
                <h4 className="text-lg font-bold">Dispatching Emergency Response</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
                  Alerting 108 Emergency Medical Services, Fleet Emergency Team, and Family Contact with your live GPS location.
                </p>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-xs text-left space-y-1">
                <div className="flex items-center space-x-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="truncate"><strong>Location:</strong> {worker?.currentLocation?.address || "12.9280 N, 77.6200 E (Koramangala)"}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Radio className="w-4 h-4 text-safety-400 shrink-0" />
                  <span><strong>Rider:</strong> {worker?.name} ({worker?.vehicleNumber})</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition"
                >
                  Cancel (False Alarm)
                </button>
                <button
                  onClick={handleSendSOS}
                  className="flex-1 py-3 bg-red-600 hover:bg-red-500 text-white font-black text-xs rounded-xl shadow-lg shadow-red-600/40 transition"
                >
                  Dispatch NOW
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border-4 border-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 animate-in zoom-in duration-200" />
              </div>

              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  DISPATCH CONFIRMED
                </span>
                <h4 className="text-lg font-black text-white mt-2">Help is On The Way!</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Incident ID: <strong className="text-safety-400 font-mono">{sosResult?.data?.incidentId || "SOS-991204"}</strong>
                </p>
              </div>

              <div className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 text-xs text-left space-y-2">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Ambulance Status:</span>
                  <span className="font-bold text-emerald-400">Dispatched (ETA: 4 mins)</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Fleet Supervisor:</span>
                  <span className="font-bold text-white">Notified & Tracking</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Insurance Policy:</span>
                  <span className="font-bold text-safety-400">₹5,00,000 Hospitalization Active</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition"
              >
                Close & Keep Live Tracking Active
              </button>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
