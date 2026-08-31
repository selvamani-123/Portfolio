import React, { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { AlertTriangle, Filter, Flame, Eye, Layers } from 'lucide-react';

export default function HeatmapView({ accidentZones = [] }) {
  const [filterType, setFilterType] = useState('ALL');

  const filteredZones = accidentZones.filter(z => {
    if (filterType === 'ALL') return true;
    if (filterType === 'CRITICAL') return z.riskLevel === 'CRITICAL';
    if (filterType === 'DARK_ZONE') return z.type === 'DARK_ZONE';
    if (filterType === 'ROAD_HAZARD') return z.type === 'ROAD_HAZARD';
    return true;
  });

  const bangaloreCenter = [12.9350, 77.6250];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-[520px]">
      
      {/* Top Header with Filters */}
      <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 bg-rose-500/20 text-rose-400 rounded-xl border border-rose-500/30">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">City Accident Blackspot Heatmap</h3>
            <p className="text-xs text-slate-400">Bangalore Delivery Corridors • AI-Scored Incident Clusters</p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setFilterType('ALL')}
            className={`px-3 py-1 rounded-lg font-semibold transition ${
              filterType === 'ALL' ? 'bg-safety-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            All Hazards ({accidentZones.length})
          </button>
          <button
            onClick={() => setFilterType('CRITICAL')}
            className={`px-3 py-1 rounded-lg font-semibold transition ${
              filterType === 'CRITICAL' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Critical Blackspots
          </button>
          <button
            onClick={() => setFilterType('DARK_ZONE')}
            className={`px-3 py-1 rounded-lg font-semibold transition ${
              filterType === 'DARK_ZONE' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Unlit Dark Zones
          </button>
        </div>
      </div>

      {/* Map View */}
      <div className="flex-1 relative">
        <MapContainer
          center={bangaloreCenter}
          zoom={13}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; CARTO'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />

          {filteredZones.map((zone) => {
            const isCrit = zone.riskLevel === 'CRITICAL';
            const color = isCrit ? '#ef4444' : '#f59e0b';
            const radius = isCrit ? 26 : 18;

            return (
              <React.Fragment key={zone.id}>
                {/* Outer Heat Halo */}
                <CircleMarker
                  center={[zone.lat, zone.lng]}
                  radius={radius * 1.6}
                  pathOptions={{
                    color: color,
                    fillColor: color,
                    fillOpacity: 0.18,
                    weight: 0
                  }}
                />

                {/* Inner Core Marker */}
                <CircleMarker
                  center={[zone.lat, zone.lng]}
                  radius={radius}
                  pathOptions={{
                    color: '#ffffff',
                    fillColor: color,
                    fillOpacity: 0.8,
                    weight: 2
                  }}
                >
                  <Popup>
                    <div className="text-xs p-1 space-y-1 font-sans max-w-xs">
                      <div className="flex items-center space-x-1">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          isCrit ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-400'
                        }`}>
                          {zone.riskLevel}
                        </span>
                        <span className="text-slate-400">Risk Score: {zone.riskScore}/100</span>
                      </div>
                      <strong className="text-white block">{zone.name}</strong>
                      <p className="text-slate-300 text-[11px]">{zone.description}</p>
                      <div className="text-[10px] text-amber-400 pt-1 font-semibold">
                        🚨 {zone.incidentsPastYear} incidents recorded in 12 months.
                      </div>
                      <div className="text-[10px] text-safety-400">
                        ⚡ Recommended speed limit: {zone.recommendedSpeed} km/h
                      </div>
                    </div>
                  </Popup>
                </CircleMarker>
              </React.Fragment>
            );
          })}
        </MapContainer>

        {/* Floating Heatmap Summary Overlay */}
        <div className="absolute bottom-4 left-4 z-10 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-3 rounded-xl text-xs space-y-1.5 shadow-xl max-w-xs pointer-events-auto">
          <span className="font-bold text-white block text-xs">AI Fleet Routing Safeguard</span>
          <p className="text-[11px] text-slate-300">
            SAFETRACK automatically routes 94.2% of active fleet riders around these red heat clusters, preventing an estimated <strong>14.2 accidents per week</strong>.
          </p>
        </div>
      </div>

    </div>
  );
}
