import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { AlertOctagon, Coffee, Navigation, Shield, Zap } from 'lucide-react';

// Custom Marker Icons
const createCustomIcon = (color, bgEmoji) => {
  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        box-shadow: 0 4px 10px rgba(0,0,0,0.6);
        border: 2px solid #ffffff;
      ">
        ${bgEmoji}
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18]
  });
};

const vehicleIcon = L.divIcon({
  className: 'vehicle-marker',
  html: `
    <div style="
      background-color: #2563eb;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      box-shadow: 0 0 15px #3b82f6;
      border: 3px solid #ffffff;
      animation: pulse 1.5s infinite;
    ">
      🛵
    </div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -20]
});

const startIcon = createCustomIcon('#10b981', '📍');
const endIcon = createCustomIcon('#8b5cf6', '🏁');
const hazardCriticalIcon = createCustomIcon('#ef4444', '⚠️');
const hazardHighIcon = createCustomIcon('#f59e0b', '🚧');
const restStopIcon = createCustomIcon('#06b6d4', '☕');

// Map Recenter Controller component
function MapController({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom || 13, { duration: 1.2 });
    }
  }, [center, zoom, map]);
  return null;
}

export default function MapView({ 
  routes = [], 
  selectedRouteId, 
  onSelectRoute, 
  hazards = [], 
  restStops = [], 
  vehiclePosition, 
  isNavigating = false 
}) {
  const defaultCenter = vehiclePosition || [12.9350, 77.6250];

  const selectedRoute = routes.find(r => r.id === selectedRouteId) || routes[1] || routes[0];

  return (
    <div className="w-full h-full relative overflow-hidden rounded-xl bg-slate-950">
      <MapContainer
        center={defaultCenter}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        {/* Sleek Dark CartoDB / OSM Tile Layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        <MapController center={vehiclePosition || defaultCenter} zoom={isNavigating ? 15 : 13} />

        {/* Polylines for each route option */}
        {routes.map((route) => {
          const isSelected = route.id === selectedRouteId;
          return (
            <Polyline
              key={route.id}
              positions={route.coordinates}
              pathOptions={{
                color: route.color || (route.id === 'route-risky' ? '#ef4444' : '#2563eb'),
                weight: isSelected ? 6 : 3,
                opacity: isSelected ? 0.95 : 0.45,
                dashArray: route.id === 'route-risky' ? '6, 8' : undefined,
                lineCap: 'round',
                lineJoin: 'round'
              }}
              eventHandlers={{
                click: () => onSelectRoute && onSelectRoute(route.id)
              }}
            />
          );
        })}

        {/* Start Point Marker */}
        {selectedRoute && selectedRoute.coordinates.length > 0 && (
          <Marker position={selectedRoute.coordinates[0]} icon={startIcon}>
            <Popup>
              <div className="text-xs p-1">
                <strong className="text-emerald-400 block text-sm">Pickup Location</strong>
                <span className="text-slate-300">Koramangala 4th Block, Hub #12</span>
              </div>
            </Popup>
          </Marker>
        )}

        {/* End Point Marker */}
        {selectedRoute && selectedRoute.coordinates.length > 0 && (
          <Marker position={selectedRoute.coordinates[selectedRoute.coordinates.length - 1]} icon={endIcon}>
            <Popup>
              <div className="text-xs p-1">
                <strong className="text-purple-400 block text-sm">Drop Destination</strong>
                <span className="text-slate-300">Indiranagar 100ft Road, Order #882</span>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Moving Vehicle Marker (during navigation or idle) */}
        {vehiclePosition && (
          <Marker position={vehiclePosition} icon={vehicleIcon}>
            <Popup>
              <div className="text-xs p-1 font-sans">
                <strong className="text-safety-400 block text-sm">Ramesh Kumar (KA 05 EQ 8821)</strong>
                <span className="text-slate-300">Speed: {isNavigating ? '32 km/h' : '0 km/h (Active)'}</span>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Hazard Blackspot Markers */}
        {hazards.map((h) => (
          <Marker
            key={h.id}
            position={[h.lat, h.lng]}
            icon={h.riskLevel === 'CRITICAL' ? hazardCriticalIcon : hazardHighIcon}
          >
            <Popup>
              <div className="text-xs p-1 space-y-1 font-sans max-w-xs">
                <div className="flex items-center space-x-1">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    h.riskLevel === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  }`}>
                    {h.riskLevel} HAZARD
                  </span>
                  <span className="text-slate-400 text-[10px]">Risk: {h.riskScore}/100</span>
                </div>
                <strong className="text-white block text-xs">{h.name}</strong>
                <p className="text-slate-300 text-[11px]">{h.description}</p>
                <div className="pt-1 text-[10px] text-amber-400 font-semibold">
                  ⚠️ {h.incidentsPastYear} incidents recorded here in past year.
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Safe Rest Stop Markers */}
        {restStops.map((rs) => (
          <Marker
            key={rs.id}
            position={[rs.lat, rs.lng]}
            icon={restStopIcon}
          >
            <Popup>
              <div className="text-xs p-1 space-y-1 font-sans max-w-xs">
                <div className="flex items-center space-x-1">
                  <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 px-1.5 py-0.5 rounded text-[10px] font-bold">
                    ☕ VERIFIED SAFE REST STOP
                  </span>
                </div>
                <strong className="text-white block text-xs">{rs.name}</strong>
                <p className="text-slate-300 text-[11px]">{rs.address}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {rs.amenities.map((am, i) => (
                    <span key={i} className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
                      ✓ {am}
                    </span>
                  ))}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

      </MapContainer>

      {/* Map Legend Floating Pill */}
      <div className="absolute top-3 right-3 z-10 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-2 rounded-xl text-[11px] shadow-lg space-y-1 pointer-events-auto">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-1 bg-red-500 rounded"></span>
          <span className="text-slate-300">Risky Corridor (42)</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-1 bg-blue-600 rounded"></span>
          <span className="text-slate-300">SAFETRACK (88)</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-1 bg-emerald-500 rounded"></span>
          <span className="text-slate-300">Ultra-Safe (97)</span>
        </div>
      </div>
    </div>
  );
}
