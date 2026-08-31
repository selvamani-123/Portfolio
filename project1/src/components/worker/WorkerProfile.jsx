import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Zap, 
  IndianRupee, 
  FileText, 
  Sparkles, 
  Check, 
  Calendar, 
  User, 
  Phone, 
  Truck
} from 'lucide-react';

export default function WorkerProfile({ worker, onUpdateSubscription }) {
  const [isUpgrading, setIsUpgrading] = useState(false);

  const isPremium = worker?.subscription?.plan === 'PREMIUM';

  const handleTogglePlan = async () => {
    setIsUpgrading(true);
    const newPlan = isPremium ? 'FREE' : 'PREMIUM';
    await onUpdateSubscription(newPlan);
    setIsUpgrading(false);
  };

  return (
    <div className="space-y-4">
      
      {/* Profile Header */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center space-x-3.5">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-safety-600 to-cyan-500 flex items-center justify-center text-xl font-black text-white shadow-lg shadow-safety-600/30">
          RK
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="font-extrabold text-white text-base">{worker?.name || "Ramesh Kumar"}</h3>
            <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
              VERIFIED RIDER
            </span>
          </div>
          <p className="text-xs text-slate-400">{worker?.platform || "Zomato / Swiggy Gig Partner"}</p>
          <div className="flex items-center space-x-3 text-[11px] text-slate-400 mt-1">
            <span className="flex items-center space-x-1">
              <Phone className="w-3 h-3 text-slate-500" />
              <span>{worker?.phone || "+91 98765 43210"}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Truck className="w-3 h-3 text-slate-500" />
              <span>{worker?.vehicleNumber || "KA 05 EQ 8821"}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Subscription Card: Free vs Premium ₹99/month */}
      <div className={`p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
        isPremium 
          ? 'bg-gradient-to-b from-slate-900 via-safety-950/40 to-slate-900 border-safety-500 shadow-xl shadow-safety-900/30' 
          : 'bg-slate-900 border-slate-800'
      }`}>
        
        {/* Glow effect for premium */}
        {isPremium && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-safety-500/10 rounded-full blur-2xl pointer-events-none" />
        )}

        <div className="flex items-center justify-between mb-3">
          <div>
            <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
              isPremium 
                ? 'bg-safety-500/20 text-safety-400 border-safety-500/40' 
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}>
              {isPremium ? '★ SAFETRACK PREMIUM SUBSCRIBER' : 'FREE TIER'}
            </span>
            <h4 className="font-extrabold text-white text-lg mt-1">
              {isPremium ? '₹99 / Month Plan' : 'Standard Free Account'}
            </h4>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-400 block">Status</span>
            <span className="text-xs font-bold text-emerald-400 flex items-center space-x-1 justify-end">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Active</span>
            </span>
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-2 py-2 border-y border-slate-800/80 text-xs">
          <div className="flex items-center space-x-2 text-slate-200">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>₹5,00,000</strong> Accidental Hospitalization & Disability Cover</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-200">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Turn-by-turn Audio Hazard Proximity Warnings</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-200">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Earn <strong>+₹25 to +₹35 bonus</strong> for every safe delivery route</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-200">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>1-Tap Emergency SOS with 4-min ambulance dispatch ETA</span>
          </div>
        </div>

        {/* Insurance Certificate Badge (if Premium) */}
        {isPremium && (
          <div className="mt-3 p-3 bg-safety-950/60 border border-safety-700/60 rounded-xl flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="w-6 h-6 text-safety-400 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Insurance Policy Active</span>
                <span className="text-xs font-mono font-bold text-white">{worker?.subscription?.insuranceId || "ICICI-LOMB-SAFE-88219"}</span>
              </div>
            </div>
            <span className="text-[10px] text-safety-300 font-bold bg-safety-500/20 px-2 py-1 rounded-lg border border-safety-500/30">
              ₹5 Lakh Cover
            </span>
          </div>
        )}

        {/* Toggle / Upgrade Button */}
        <div className="mt-4">
          <button
            onClick={handleTogglePlan}
            disabled={isUpgrading}
            className={`w-full py-2.5 rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center space-x-2 ${
              isPremium
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                : 'bg-gradient-to-r from-safety-600 to-blue-600 hover:from-safety-500 hover:to-blue-500 text-white shadow-safety-600/30'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>
              {isUpgrading 
                ? 'Processing...' 
                : isPremium 
                  ? 'Switch to Free Tier (Demo)' 
                  : 'Upgrade to Premium (₹99/mo + ₹5L Cover)'}
            </span>
          </button>
        </div>

      </div>

      {/* Safety Badges & Milestones */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-white text-xs uppercase tracking-wider text-slate-400">
            Safety Badges & Milestones
          </h4>
          <span className="text-[11px] font-bold text-safety-400">19 Day Streak 🔥</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl text-center">
            <span className="text-xl block mb-1">🦉</span>
            <strong className="text-[10px] text-white block">Night Owl Pro</strong>
            <span className="text-[9px] text-slate-400">100% lit routes</span>
          </div>

          <div className="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl text-center">
            <span className="text-xl block mb-1">🛡️</span>
            <strong className="text-[10px] text-white block">Zero Violation</strong>
            <span className="text-[9px] text-slate-400">0 speed alerts</span>
          </div>

          <div className="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl text-center">
            <span className="text-xl block mb-1">🌟</span>
            <strong className="text-[10px] text-white block">Safe Champion</strong>
            <span className="text-[9px] text-slate-400">42 hazards bypassed</span>
          </div>
        </div>
      </div>

      {/* Weekly Earnings History */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3">
        <h4 className="font-bold text-white text-xs uppercase tracking-wider text-slate-400">
          This Week's Earnings Summary
        </h4>

        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center text-slate-300">
            <span>Base Delivery Payouts:</span>
            <span className="font-bold text-white">₹4,850</span>
          </div>
          <div className="flex justify-between items-center text-emerald-400 font-semibold">
            <span>SAFETRACK Safety Bonus Earned:</span>
            <span className="font-bold">+₹1,240</span>
          </div>
          <div className="flex justify-between items-center text-slate-300">
            <span>Customer Tips:</span>
            <span className="font-bold text-white">₹620</span>
          </div>
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-sm font-extrabold text-white">
            <span>Total Earnings:</span>
            <span className="text-earnings-400 text-base">₹6,710</span>
          </div>
        </div>
      </div>

    </div>
  );
}
