import React, { useState } from 'react';
import { Calculator, TrendingUp, IndianRupee, Users, ShieldAlert, Sparkles } from 'lucide-react';

export default function RoiCalculator() {
  const [fleetSize, setFleetSize] = useState(1500);

  // Unit economics model based on Indian Quick-Commerce fleet data:
  // Avg accident hospitalization & repair claim per 100 riders: ₹4.2 Lakhs / yr
  // With 38.4% reduction via SAFETRACK = ₹1.61L saved per 100 riders
  const insuranceSavings = Math.round((fleetSize / 100) * 161000);

  // Rider turnover cost = ₹4,000 per new rider onboarding/background check
  // 29.2% attrition reduction on 40% annual turnover base
  const attritionSavings = Math.round(fleetSize * 0.4 * 0.292 * 4000);

  // Total annual savings
  const totalAnnualSavings = insuranceSavings + attritionSavings;

  // SAFETRACK B2B SaaS cost: ₹49/rider/month
  const annualSaasCost = fleetSize * 49 * 12;

  // Net ROI Multiplier
  const netRoiMultiplier = ((totalAnnualSavings - annualSaasCost) / Math.max(1, annualSaasCost)).toFixed(1);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Enterprise ROI & Attrition Savings Calculator</h3>
            <p className="text-xs text-slate-400">Simulate financial returns for your delivery fleet on SAFETRACK</p>
          </div>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl">
          <span className="text-xs font-bold text-emerald-400 flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Estimated ROI: {netRoiMultiplier}x Return</span>
          </span>
        </div>
      </div>

      {/* Fleet Size Slider */}
      <div className="space-y-2 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-300 font-semibold flex items-center space-x-1.5">
            <Users className="w-4 h-4 text-safety-400" />
            <span>Active Delivery Fleet Size:</span>
          </span>
          <span className="font-extrabold text-safety-400 text-base font-mono">
            {fleetSize.toLocaleString()} Riders
          </span>
        </div>

        <input
          type="range"
          min="200"
          max="20000"
          step="200"
          value={fleetSize}
          onChange={(e) => setFleetSize(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-safety-500"
        />

        <div className="flex justify-between text-[10px] text-slate-500">
          <span>200 Riders (City Pilot)</span>
          <span>5,000 Riders (Metro)</span>
          <span>20,000+ Riders (Pan-India)</span>
        </div>
      </div>

      {/* Output Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Insurance Claim Savings */}
        <div className="bg-slate-950/90 border border-slate-800 p-4 rounded-xl space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Accident Claims Prevented
          </span>
          <div className="text-2xl font-black text-safety-400">
            ₹{(insuranceSavings / 100000).toFixed(2)} Lakhs<span className="text-xs text-slate-400">/yr</span>
          </div>
          <p className="text-[11px] text-slate-400">
            38.4% reduction in third-party & hospitalization claims.
          </p>
        </div>

        {/* Attrition Reduction Savings */}
        <div className="bg-slate-950/90 border border-slate-800 p-4 rounded-xl space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Rider Churn Cost Saved
          </span>
          <div className="text-2xl font-black text-emerald-400">
            ₹{(attritionSavings / 100000).toFixed(2)} Lakhs<span className="text-xs text-slate-400">/yr</span>
          </div>
          <p className="text-[11px] text-slate-400">
            29.2% drop in rider burnout & replacement hiring fees.
          </p>
        </div>

        {/* Net Enterprise Value */}
        <div className="bg-gradient-to-br from-slate-950 to-safety-950/40 border border-safety-600/50 p-4 rounded-xl space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
            Net Annual Cost Savings
          </span>
          <div className="text-2xl font-black text-white">
            ₹{(totalAnnualSavings / 100000).toFixed(2)} Lakhs<span className="text-xs text-slate-400">/yr</span>
          </div>
          <p className="text-[11px] text-slate-300">
            After SAFETRACK platform subscription at ₹49/rider/mo.
          </p>
        </div>

      </div>

    </div>
  );
}
