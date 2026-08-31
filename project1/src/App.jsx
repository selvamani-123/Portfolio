import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PitchTourModal from './components/PitchTourModal';
import WorkerDashboard from './components/worker/WorkerDashboard';
import EnterpriseDashboard from './components/enterprise/EnterpriseDashboard';
import FatigueModal from './components/worker/FatigueModal';
import SOSModal from './components/worker/SOSModal';
import { api } from './services/api';
import { 
  mockWorker, 
  mockRoutes, 
  mockAccidentZones, 
  mockRestStops, 
  mockEnterpriseFleet, 
  mockEnterpriseStats 
} from './data/mockData';
import { Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState('worker'); // 'worker' | 'enterprise'
  const [worker, setWorker] = useState(mockWorker);
  const [routes, setRoutes] = useState(mockRoutes);
  const [selectedRouteId, setSelectedRouteId] = useState('route-safetrack-balanced');
  const [hazards, setHazards] = useState(mockAccidentZones);
  const [restStops, setRestStops] = useState(mockRestStops);
  const [enterpriseStats, setEnterpriseStats] = useState(mockEnterpriseStats);
  const [enterpriseFleet, setEnterpriseFleet] = useState(mockEnterpriseFleet);

  // Modals & Navigation state
  const [isNavigating, setIsNavigating] = useState(false);
  const [isFatigueModalOpen, setIsFatigueModalOpen] = useState(false);
  const [isSOSModalOpen, setIsSOSModalOpen] = useState(false);
  const [isPitchTourOpen, setIsPitchTourOpen] = useState(false);
  const [vehiclePosition, setVehiclePosition] = useState([12.9280, 77.6200]);
  const [deviceFrameMode, setDeviceFrameMode] = useState(true);

  // Initial Data Fetch
  useEffect(() => {
    async function loadData() {
      try {
        const [dashData, routeData, entData] = await Promise.all([
          api.getWorkerDashboard(),
          api.getRoutes(),
          api.getEnterpriseAnalytics()
        ]);

        if (dashData?.worker) setWorker(dashData.worker);
        if (dashData?.restStops) setRestStops(dashData.restStops);
        if (routeData?.routes) setRoutes(routeData.routes);
        if (routeData?.hazardsAlongCorridor) setHazards(routeData.hazardsAlongCorridor);
        if (entData?.stats) setEnterpriseStats(entData.stats);
        if (entData?.fleet) setEnterpriseFleet(entData.fleet);
      } catch (err) {
        console.warn('Using mock data initial state:', err);
      }
    }
    loadData();
  }, []);

  const handleUpdateSubscription = async (plan) => {
    const res = await api.updateSubscription(plan);
    if (res?.subscription) {
      setWorker(prev => ({ ...prev, subscription: res.subscription }));
    }
  };

  const handleConfirmSOS = async () => {
    return await api.triggerSOS(vehiclePosition[0], vehiclePosition[1], "Emergency rider SOS broadcast");
  };

  const handleDeliveryComplete = (bonusEarned) => {
    setWorker(prev => ({
      ...prev,
      todayEarnings: {
        ...prev.todayEarnings,
        total: prev.todayEarnings.total + bonusEarned,
        safetyBonus: prev.todayEarnings.safetyBonus + 25
      },
      currentShift: {
        ...prev.currentShift,
        deliveriesCompleted: prev.currentShift.deliveriesCompleted + 1
      },
      safetyProfile: {
        ...prev.safetyProfile,
        avoidedHazardsCount: prev.safetyProfile.avoidedHazardsCount + 3
      }
    }));
  };

  const handleSelectRestStop = (stop) => {
    setVehiclePosition([stop.lat, stop.lng]);
    alert(`Rerouted to Safe Rest Stop: ${stop.name}. Free chai voucher code: SAFE-CHAI-${Math.floor(1000 + Math.random()*9000)}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-safety-600 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenSOS={() => setIsSOSModalOpen(true)}
        onOpenPitchTour={() => setIsPitchTourOpen(true)}
        worker={worker}
        isNavigating={isNavigating}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {activeView === 'worker' ? (
          <div className="flex-1 flex flex-col items-center justify-start py-4 px-2 sm:px-4">
            
            {/* Device View Frame Toggle on Desktop */}
            <div className="hidden lg:flex items-center space-x-2 mb-3 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800 text-xs">
              <span className="text-slate-400">Presentation Device Mode:</span>
              <button
                onClick={() => setDeviceFrameMode(true)}
                className={`px-2.5 py-1 rounded-full font-semibold transition flex items-center space-x-1 ${
                  deviceFrameMode ? 'bg-safety-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile Phone Mockup</span>
              </button>
              <button
                onClick={() => setDeviceFrameMode(false)}
                className={`px-2.5 py-1 rounded-full font-semibold transition flex items-center space-x-1 ${
                  !deviceFrameMode ? 'bg-safety-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Expanded Full Width</span>
              </button>
            </div>

            {/* Mobile View Frame */}
            <div className={deviceFrameMode ? "mobile-device-frame w-full border border-slate-700 bg-slate-950 shadow-2xl flex flex-col overflow-y-auto" : "w-full max-w-2xl bg-slate-900/60 border border-slate-800 rounded-2xl shadow-xl overflow-hidden"}>
              <WorkerDashboard
                worker={worker}
                routes={routes}
                selectedRouteId={selectedRouteId}
                onSelectRoute={(id) => setSelectedRouteId(id)}
                hazards={hazards}
                restStops={restStops}
                onOpenFatigueModal={() => setIsFatigueModalOpen(true)}
                onOpenSOS={() => setIsSOSModalOpen(true)}
                onUpdateSubscription={handleUpdateSubscription}
                isNavigating={isNavigating}
                setIsNavigating={setIsNavigating}
                vehiclePosition={vehiclePosition}
                setVehiclePosition={setVehiclePosition}
                onDeliveryComplete={handleDeliveryComplete}
              />
            </div>

          </div>
        ) : (
          <EnterpriseDashboard
            stats={enterpriseStats}
            fleet={enterpriseFleet}
            accidentZones={hazards}
          />
        )}
      </main>

      {/* Fatigue Modal */}
      <FatigueModal
        isOpen={isFatigueModalOpen}
        onClose={() => setIsFatigueModalOpen(false)}
        restStops={restStops}
        onSelectRestStop={handleSelectRestStop}
      />

      {/* SOS Modal */}
      <SOSModal
        isOpen={isSOSModalOpen}
        onClose={() => setIsSOSModalOpen(false)}
        worker={worker}
        onConfirmSOS={handleConfirmSOS}
      />

      {/* Pitch Tour Modal */}
      <PitchTourModal
        isOpen={isPitchTourOpen}
        onClose={() => setIsPitchTourOpen(false)}
        onSelectAction={(action) => {
          if (action === 'route-comparison') {
            setActiveView('worker');
          } else if (action === 'navigation') {
            setActiveView('worker');
            setIsNavigating(true);
          } else if (action === 'enterprise') {
            setActiveView('enterprise');
          }
        }}
      />

    </div>
  );
}
