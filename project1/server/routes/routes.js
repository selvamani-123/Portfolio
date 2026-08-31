import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const accidentZones = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/accidentZones.json'), 'utf-8'));

const router = express.Router();

// GET /api/route?start=&destination=
router.get('/', (req, res) => {
  const { start, destination } = req.query;

  const startLoc = start || "Koramangala 4th Block";
  const destLoc = destination || "Indiranagar 100ft Road";

  // Waypoints for Route 1 (Risky Direct Route through Silk Board / Ejipura bottleneck)
  const routeDirectCoords = [
    [12.9280, 77.6200], // Start
    [12.9220, 77.6210],
    [12.9176, 77.6234], // Near Silk Board Hotspot (CRITICAL HAZARD)
    [12.9352, 77.6245], // Pothole & Skidding Zone (HIGH HAZARD)
    [12.9421, 77.6312], // Ejipura Low Light Zone (HIGH HAZARD)
    [12.9510, 77.6380],
    [12.9600, 77.6420],
    [12.9716, 77.6412]  // Destination (Indiranagar)
  ];

  // Waypoints for Route 2 (SAFETRACK Balanced - Recommended Safe Connector)
  const routeBalancedCoords = [
    [12.9280, 77.6200], // Start
    [12.9310, 77.6230],
    [12.9340, 77.6290], // Detour bypassing Silk board and Ejipura dark zone
    [12.9430, 77.6390], // Wide 4-lane illuminated corridor
    [12.9520, 77.6430],
    [12.9620, 77.6425],
    [12.9716, 77.6412]  // Destination
  ];

  // Waypoints for Route 3 (SAFETRACK Ultra-Safe - Arterial Highway with Dedicated Two-Wheeler Lane)
  const routeUltraSafeCoords = [
    [12.9280, 77.6200], // Start
    [12.9325, 77.6175],
    [12.9390, 77.6180], // Inner Ring Main Arterial (Signalized & Monitored)
    [12.9480, 77.6260],
    [12.9580, 77.6350],
    [12.9660, 77.6400],
    [12.9716, 77.6412]  // Destination
  ];

  const routes = [
    {
      id: "route-risky",
      title: "Direct Route (Standard Navigation)",
      subtitle: "Shortest distance but high accident & pothole density",
      isRecommended: false,
      safetyScore: 42,
      safetyGrade: "D - HIGH RISK",
      color: "#ef4444",
      distanceKm: 5.2,
      durationMins: 16,
      estimatedEarnings: 60,
      safetyBonus: 0,
      totalEarnings: 60,
      hazardsCount: 3,
      hazardList: [
        { type: "CRITICAL", name: "Silk Board Blind Curve Collision Hotspot" },
        { type: "HIGH", name: "Sony World Submerged Pothole Corridor" },
        { type: "HIGH", name: "Ejipura Low Lighting Dark Corridor" }
      ],
      coordinates: routeDirectCoords
    },
    {
      id: "route-safetrack-balanced",
      title: "SAFETRACK Optimized (Recommended)",
      subtitle: "Smart bypass of 3 danger blackspots via illuminated avenues",
      isRecommended: true,
      safetyScore: 88,
      safetyGrade: "A - EXCELLENT SAFETY",
      color: "#2563eb",
      distanceKm: 5.9,
      durationMins: 18,
      estimatedEarnings: 60,
      safetyBonus: 25,
      totalEarnings: 85,
      hazardsCount: 0,
      hazardList: [],
      benefits: [
        "Avoids 3 high-collision intersections",
        "100% LED Street-lit route",
        "Qualifies for +₹25 Safe Delivery Enterprise Bonus"
      ],
      coordinates: routeBalancedCoords
    },
    {
      id: "route-safetrack-ultrasafe",
      title: "SAFETRACK Ultra-Safe",
      subtitle: "Signal-synchronized arterial roads with dedicated bike lanes",
      isRecommended: false,
      safetyScore: 97,
      safetyGrade: "A+ - MAXIMUM PROTECTION",
      color: "#10b981",
      distanceKm: 6.4,
      durationMins: 20,
      estimatedEarnings: 60,
      safetyBonus: 35,
      totalEarnings: 95,
      hazardsCount: 0,
      hazardList: [],
      benefits: [
        "Zero accident records in last 18 months",
        "Broad 4-lane arterial road with CCTV coverage",
        "Qualifies for +₹35 Premium Safety Tier Bonus"
      ],
      coordinates: routeUltraSafeCoords
    }
  ];

  res.json({
    success: true,
    query: { start: startLoc, destination: destLoc },
    hazardsAlongCorridor: accidentZones,
    routes
  });
});

export default router;
