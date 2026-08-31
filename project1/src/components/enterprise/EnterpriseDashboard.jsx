import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  TrendingDown, 
  TrendingUp, 
  Users, 
  IndianRupee, 
  Flame, 
  Radio, 
  Download, 
  Calendar,
  AlertOctagon,
  Sparkles
} from 'lucide-react';
import HeatmapView from './HeatmapView';
import FleetTable from './FleetTable';
import RoiCalculator from './RoiCalculator';

export default function EnterpriseDashboard({ stats, fleet, accidentZones }) {
  const [activeSection, setActiveSection] = useState('overview'); // 'overview' | 'heatmap' | 'fleet' | 'roi'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Enterprise Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-5 rounded-2xl">
        <div className="flex items-center space-x-3.5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-safety-600 via-safety-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-safety-600/30">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="font-extrabold text-white text-lg sm:text-xl">Enterprise Safety & Fleet Control Center</h2>
              <span className="text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                LIVE HUB
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Monitoring 1,420 active riders across Bangalore Metro delivery corridors
            </p>
          </div>
        </div>

        {/* Date / Download Report Actions */}
        <div className="flex items-center space-x-2.5">
          <div className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Q3 2026 Telemetry</span>
          </div>

          <button 
            onClick={() => alert("Report Exported: SAFETRACK_Q3_Enterprise_Safety_Report.pdf")}
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition flex items-center space-x-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export ESG Report</span>
          </button>
        </div>
      </div>

      {/* Top 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Fleet Safety Score */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Fleet Safety Score</span>
            <ShieldCheck className="w-4 h-4 text-safety-400" />
          </div>
          <div className="flex items-baseline space-x-2 my-2">
            <span className="text-3xl font-black text-white">{stats?.averageFleetSafetyScore || 84.8}</span>
            <span className="text-xs font-bold text-emerald-400 flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-0.5" />
              +7.2% vs Q2
            </span>
          </div>
          <span className="text-[11px] text-slate-400">Target: &gt; 80.0 Compliance</span>
        </div>

        {/* Accident Reduction Rate */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Accident Reduction</span>
            <TrendingDown className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline space-x-2 my-2">
            <span className="text-3xl font-black text-emerald-400">{stats?.accidentReductionRate || "-38.4%"}</span>
            <span className="text-xs font-bold text-slate-400">YoY Drop</span>
          </div>
          <span className="text-[11px] text-slate-400">18,450 Hazards Bypassed</span>
        </div>

        {/* Insurance Claim Payout Savings */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Insurance Payout Savings</span>
            <IndianRupee className="w-4 h-4 text-earnings-400" />
          </div>
          <div className="flex items-baseline space-x-2 my-2">
            <span className="text-3xl font-black text-earnings-400">₹24.6L</span>
            <span className="text-xs font-bold text-slate-400">/Quarter</span>
          </div>
          <span className="text-[11px] text-slate-400">Direct Claims Payout Saved</span>
        </div>

        {/* Rider Attrition Drop */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Rider Attrition Drop</span>
            <Users className="w-4 h-4 text-safety-400" />
          </div>
          <div className="flex items-baseline space-x-2 my-2">
            <span className="text-3xl font-black text-safety-400">{stats?.riderAttritionDrop || "-29.2%"}</span>
            <span className="text-xs font-bold text-emerald-400">Retention Boost</span>
          </div>
          <span className="text-[11px] text-slate-400">Saved ₹32L in re-hiring costs</span>
        </div>

      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveSection('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
            activeSection === 'overview'
              ? 'bg-safety-600 text-white shadow-md shadow-safety-600/30'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Flame className="w-3.5 h-3.5" />
          <span>Accident Heatmap & Hotspots</span>
        </button>

        <button
          onClick={() => setActiveSection('fleet')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
            activeSection === 'fleet'
              ? 'bg-safety-600 text-white shadow-md shadow-safety-600/30'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Radio className="w-3.5 h-3.5" />
          <span>Live Rider Telemetry</span>
        </button>

        <button
          onClick={() => setActiveSection('roi')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
            activeSection === 'roi'
              ? 'bg-safety-600 text-white shadow-md shadow-safety-600/30'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>ROI & Attrition Calculator</span>
        </button>
      </div>

      {/* Section Views */}
      {activeSection === 'overview' && (
        <div className="space-y-6">
          <HeatmapView accidentZones={accidentZones} />
        </div>
      )}

      {activeSection === 'fleet' && (
        <div className="space-y-6">
          <FleetTable fleet={fleet} />
        </div>
      )}

      {activeSection === 'roi' && (
        <div className="space-y-6">
          <RoiCalculator />
        </div>
      )}

    </div>
  );
}
