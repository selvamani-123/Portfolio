import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Coffee, 
  Search, 
  CheckCircle2, 
  Clock, 
  Radio, 
  Send,
  Zap
} from 'lucide-react';

export default function FleetTable({ fleet = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [notifiedRiders, setNotifiedRiders] = useState({});

  const filteredFleet = fleet.filter(r => 
    r.riderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.phone.includes(searchTerm)
  );

  const handleSendRestPing = (riderId) => {
    setNotifiedRiders(prev => ({ ...prev, [riderId]: true }));
    setTimeout(() => {
      setNotifiedRiders(prev => ({ ...prev, [riderId]: 'sent' }));
    }, 800);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col">
      
      {/* Header */}
      <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-bold text-white text-sm">Live Fleet Safety Telemetry</h3>
          <p className="text-xs text-slate-400">Real-time fatigue, speed compliance, and safety scoring</p>
        </div>

        {/* Search */}
        <div className="relative w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search rider or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-safety-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-950/60 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
            <tr>
              <th className="px-4 py-3">Rider Name</th>
              <th className="px-4 py-3">Active Shift</th>
              <th className="px-4 py-3">Safety Score</th>
              <th className="px-4 py-3">Live Speed</th>
              <th className="px-4 py-3">Risk Proximity</th>
              <th className="px-4 py-3">Tier</th>
              <th className="px-4 py-3 text-right">Dispatcher Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-sans">
            {filteredFleet.map((rider) => {
              const isFatigued = rider.activeShiftHours >= 4.0;
              const hasSentPing = notifiedRiders[rider.id];

              return (
                <tr key={rider.id} className="hover:bg-slate-800/40 transition">
                  
                  {/* Rider Name & Phone */}
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-white text-xs">
                        {rider.riderName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <strong className="text-white block">{rider.riderName}</strong>
                        <span className="text-[10px] text-slate-400">{rider.phone}</span>
                      </div>
                    </div>
                  </td>

                  {/* Active Shift Hours */}
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span className={`font-bold ${isFatigued ? 'text-amber-400' : 'text-slate-200'}`}>
                        {rider.activeShiftHours} hrs
                      </span>
                    </div>
                    {isFatigued && (
                      <span className="text-[9px] bg-amber-500/20 text-amber-300 font-bold px-1.5 py-0.2 rounded mt-0.5 inline-block">
                        FATIGUE ALERT
                      </span>
                    )}
                  </td>

                  {/* Safety Score */}
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <span className={`font-black text-sm ${
                        rider.safetyScore >= 80 ? 'text-emerald-400' : rider.safetyScore >= 60 ? 'text-amber-400' : 'text-rose-400'
                      }`}>
                        {rider.safetyScore}
                      </span>
                      <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${rider.safetyScore >= 80 ? 'bg-emerald-500' : rider.safetyScore >= 60 ? 'bg-amber-500' : 'bg-rose-500'}`}
                          style={{ width: `${rider.safetyScore}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Live Speed */}
                  <td className="px-4 py-3 font-mono">
                    <span className="text-white font-bold">{rider.currentSpeedKmph}</span>
                    <span className="text-[10px] text-slate-400"> km/h</span>
                  </td>

                  {/* Risk Proximity */}
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      rider.riskZoneProximity === 'SAFE'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : rider.riskZoneProximity === 'LOW'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                    }`}>
                      {rider.riskZoneProximity}
                    </span>
                  </td>

                  {/* Tier */}
                  <td className="px-4 py-3">
                    <span className={`text-[10px] font-bold ${
                      rider.subscriptionTier === 'PREMIUM' ? 'text-safety-400' : 'text-slate-400'
                    }`}>
                      {rider.subscriptionTier}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-4 py-3 text-right">
                    {isFatigued ? (
                      <button
                        onClick={() => handleSendRestPing(rider.id)}
                        disabled={!!hasSentPing}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center space-x-1 ml-auto ${
                          hasSentPing
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                        }`}
                      >
                        {hasSentPing ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Voucher Sent</span>
                          </>
                        ) : (
                          <>
                            <Coffee className="w-3.5 h-3.5" />
                            <span>Dispatch Rest Voucher</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <span className="text-[10px] text-slate-500">Normal Shift</span>
                    )}
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}
