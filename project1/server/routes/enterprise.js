import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { db } from '../db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const accidentZones = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/accidentZones.json'), 'utf-8'));

const router = express.Router();

// GET /api/enterprise/analytics
router.get('/analytics', (req, res) => {
  res.json({
    success: true,
    stats: db.enterpriseStats,
    fleet: db.enterpriseFleet,
    accidentZones,
    roiMetrics: {
      annualAccidentReductionPercent: 38.4,
      annualInsuranceClaimSavingsInr: "₹98,40,000",
      attritionRateReductionPercent: 29.2,
      averageDeliverySpeedSafetyCompliance: "94.6%",
      fleetSafetyRatingDistribution: {
        excellent: 68, // %
        moderate: 24,  // %
        needsAttention: 8 // %
      }
    }
  });
});

// GET /api/enterprise/heatmap
router.get('/heatmap', (req, res) => {
  // Array of [lat, lng, intensity]
  const heatmapData = [
    { lat: 12.9176, lng: 77.6234, intensity: 0.95, name: "Silk Board Junction Hotspot" },
    { lat: 12.9352, lng: 77.6245, intensity: 0.85, name: "Sony World Signal Potholes" },
    { lat: 12.9421, lng: 77.6312, intensity: 0.80, name: "Ejipura Dark Corridor" },
    { lat: 12.9388, lng: 77.6189, intensity: 0.65, name: "Koramangala 80ft Junction" },
    { lat: 12.9224, lng: 77.6198, intensity: 0.60, name: "Madiwala Market Corridor" },
    { lat: 12.9550, lng: 77.6380, intensity: 0.70, name: "Domlur Flyover Ramp" },
    { lat: 12.9640, lng: 77.6410, intensity: 0.75, name: "HAL Airport Road Crossing" }
  ];

  res.json({
    success: true,
    points: heatmapData
  });
});

export default router;
