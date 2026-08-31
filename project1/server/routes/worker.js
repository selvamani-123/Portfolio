import express from 'express';
import { db } from '../db.js';

const router = express.Router();

// GET /api/worker/dashboard
router.get('/dashboard', (req, res) => {
  const worker = db.workers[0];
  res.json({
    success: true,
    data: {
      worker,
      fatigueAlert: worker.currentShift.activeHours >= 4.0 ? {
        triggered: true,
        message: `High Fatigue Warning: You have been riding for ${worker.currentShift.activeHours} consecutive hours. Reaction times decrease by 42%.`,
        recommendation: "Take a 15-minute break at an affiliated Safe Rest Hub to unlock a ₹20 Refreshment Voucher.",
        nearestRestStop: db.restStops[0]
      } : { triggered: false },
      restStops: db.restStops
    }
  });
});

// POST /api/worker/register
router.post('/register', (req, res) => {
  const { name, phone, platform, vehicleNumber } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ success: false, message: "Name and Phone number are required." });
  }

  const newWorker = {
    id: `w-${Date.now().toString().slice(-4)}`,
    name,
    phone,
    platform: platform || "Delivery Partner",
    vehicleNumber: vehicleNumber || "KA 01 XY 1234",
    currentLocation: {
      lat: 12.9280,
      lng: 77.6200,
      address: "Koramangala, Bangalore"
    },
    currentShift: {
      startTime: new Date().toISOString(),
      activeHours: 0.2,
      deliveriesCompleted: 0,
      fatigueStatus: "NORMAL",
      fatigueScore: 10
    },
    todayEarnings: {
      basePay: 0,
      safetyBonus: 0,
      tips: 0,
      total: 0,
      target: 1200
    },
    safetyProfile: {
      currentSafetyScore: 90,
      weeklyTrend: "+0.0%",
      safeKmTraveled: 0,
      avoidedHazardsCount: 0,
      cleanRideStreakDays: 1,
      badges: ["New Safety Enrolled"]
    },
    subscription: {
      plan: "FREE",
      price: 0,
      status: "ACTIVE",
      features: ["Standard Route Warning", "Basic Support"],
      insuranceClaimReady: false
    }
  };

  db.workers.push(newWorker);
  res.status(201).json({ success: true, message: "Worker successfully registered on SAFETRACK", worker: newWorker });
});

// POST /api/worker/subscribe
router.post('/subscribe', (req, res) => {
  const { plan } = req.body; // 'FREE' or 'PREMIUM'
  const worker = db.workers[0];

  if (plan === 'PREMIUM') {
    worker.subscription = {
      plan: "PREMIUM",
      price: 99,
      status: "ACTIVE",
      renewsOn: new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString().split('T')[0],
      features: [
        "Real-time Hazard Audio Warning",
        "₹5,00,000 Accidental Hospitalization Cover",
        "Instant SOS Emergency Dispatch",
        "₹25 extra incentive/safe route completion"
      ],
      insuranceClaimReady: true,
      insuranceId: `ICICI-LOMB-SAFE-${Math.floor(10000 + Math.random() * 90000)}`
    };
    return res.json({
      success: true,
      message: "Upgraded to SAFETRACK Premium (₹99/month). ₹5 Lakh accidental cover activated!",
      subscription: worker.subscription
    });
  } else {
    worker.subscription = {
      plan: "FREE",
      price: 0,
      status: "ACTIVE",
      features: ["Standard Route Warning", "Basic Support"],
      insuranceClaimReady: false
    };
    return res.json({
      success: true,
      message: "Switched to Free Tier.",
      subscription: worker.subscription
    });
  }
});

// POST /api/worker/sos
router.post('/sos', (req, res) => {
  const { lat, lng, reason } = req.body;
  const worker = db.workers[0];

  const sosRecord = {
    incidentId: `SOS-${Date.now().toString().slice(-6)}`,
    timestamp: new Date().toISOString(),
    workerId: worker.id,
    workerName: worker.name,
    phone: worker.phone,
    vehicleNumber: worker.vehicleNumber,
    coordinates: {
      lat: lat || worker.currentLocation.lat,
      lng: lng || worker.currentLocation.lng
    },
    reason: reason || "Emergency SOS Triggered by Rider",
    emergencyContactsAlerted: ["Fleet Supervisor (+91 99000 11223)", "108 Ambulance Dispatch", "Emergency Family Contact"],
    status: "DISPATCHED",
    etaMins: 4
  };

  res.json({
    success: true,
    message: "SOS Alert Dispatched. Emergency fleet team and ambulance notified immediately.",
    data: sosRecord
  });
});

// GET /api/worker/rest-stops
router.get('/rest-stops', (req, res) => {
  res.json({ success: true, restStops: db.restStops });
});

export default router;
