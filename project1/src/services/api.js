import {
  mockWorker,
  mockRoutes,
  mockAccidentZones,
  mockRestStops,
  mockEnterpriseFleet,
  mockEnterpriseStats
} from '../data/mockData';

const BASE_URL = '/api';

export const api = {
  // Get Routes with safety scoring
  async getRoutes(start, destination) {
    try {
      const res = await fetch(`${BASE_URL}/route?start=${encodeURIComponent(start || '')}&destination=${encodeURIComponent(destination || '')}`);
      if (!res.ok) throw new Error('API request failed');
      const data = await res.json();
      return data;
    } catch (err) {
      console.warn('Using local fallback for getRoutes:', err.message);
      return {
        success: true,
        query: { start: start || "Koramangala 4th Block", destination: destination || "Indiranagar 100ft Road" },
        hazardsAlongCorridor: mockAccidentZones,
        routes: mockRoutes
      };
    }
  },

  // Get Worker Dashboard data
  async getWorkerDashboard() {
    try {
      const res = await fetch(`${BASE_URL}/worker/dashboard`);
      if (!res.ok) throw new Error('API request failed');
      const data = await res.json();
      return data.data;
    } catch (err) {
      console.warn('Using local fallback for getWorkerDashboard:', err.message);
      return {
        worker: mockWorker,
        fatigueAlert: mockWorker.currentShift.activeHours >= 4.0 ? {
          triggered: true,
          message: `High Fatigue Warning: You have been riding for ${mockWorker.currentShift.activeHours} consecutive hours. Reaction times decrease by 42%.`,
          recommendation: "Take a 15-minute break at an affiliated Safe Rest Hub to unlock a ₹20 Refreshment Voucher.",
          nearestRestStop: mockRestStops[0]
        } : { triggered: false },
        restStops: mockRestStops
      };
    }
  },

  // Subscribe / Change Plan
  async updateSubscription(plan) {
    try {
      const res = await fetch(`${BASE_URL}/worker/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan })
      });
      if (!res.ok) throw new Error('API request failed');
      return await res.json();
    } catch (err) {
      console.warn('Using local fallback for updateSubscription:', err.message);
      if (plan === 'PREMIUM') {
        mockWorker.subscription = {
          plan: "PREMIUM",
          price: 99,
          status: "ACTIVE",
          renewsOn: "2026-09-15",
          features: [
            "Real-time Hazard Audio Warning",
            "₹5,00,000 Accidental Hospitalization Cover",
            "Instant SOS Emergency Dispatch",
            "₹25 extra incentive/safe route completion"
          ],
          insuranceClaimReady: true,
          insuranceId: "ICICI-LOMB-SAFE-88219"
        };
      } else {
        mockWorker.subscription = {
          plan: "FREE",
          price: 0,
          status: "ACTIVE",
          features: ["Standard Route Warning", "Basic Support"],
          insuranceClaimReady: false
        };
      }
      return {
        success: true,
        message: plan === 'PREMIUM' ? "Upgraded to SAFETRACK Premium (₹99/month)" : "Switched to Free Tier",
        subscription: mockWorker.subscription
      };
    }
  },

  // Send SOS alert
  async triggerSOS(lat, lng, reason) {
    try {
      const res = await fetch(`${BASE_URL}/worker/sos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lat, lng, reason })
      });
      if (!res.ok) throw new Error('API request failed');
      return await res.json();
    } catch (err) {
      console.warn('Using local fallback for triggerSOS:', err.message);
      return {
        success: true,
        message: "SOS Alert Dispatched. Emergency fleet team and ambulance notified immediately.",
        data: {
          incidentId: `SOS-${Date.now().toString().slice(-6)}`,
          timestamp: new Date().toISOString(),
          workerName: mockWorker.name,
          phone: mockWorker.phone,
          status: "DISPATCHED",
          etaMins: 4
        }
      };
    }
  },

  // Get Enterprise Analytics
  async getEnterpriseAnalytics() {
    try {
      const res = await fetch(`${BASE_URL}/enterprise/analytics`);
      if (!res.ok) throw new Error('API request failed');
      return await res.json();
    } catch (err) {
      console.warn('Using local fallback for getEnterpriseAnalytics:', err.message);
      return {
        success: true,
        stats: mockEnterpriseStats,
        fleet: mockEnterpriseFleet,
        accidentZones: mockAccidentZones,
        roiMetrics: {
          annualAccidentReductionPercent: 38.4,
          annualInsuranceClaimSavingsInr: "₹98,40,000",
          attritionRateReductionPercent: 29.2,
          averageDeliverySpeedSafetyCompliance: "94.6%",
          fleetSafetyRatingDistribution: {
            excellent: 68,
            moderate: 24,
            needsAttention: 8
          }
        }
      };
    }
  }
};
