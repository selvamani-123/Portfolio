export const mockAccidentZones = [
  {
    id: "haz-1",
    name: "Silk Board Junction High-Crash Zone",
    lat: 12.9176,
    lng: 77.6234,
    riskLevel: "CRITICAL",
    riskScore: 92,
    type: "ACCIDENT_HOTSPOT",
    description: "Heavy vehicle blind spots and frequent two-wheeler collisions.",
    incidentsPastYear: 38,
    recommendedSpeed: 25
  },
  {
    id: "haz-2",
    name: "Sony World Signal Potholes & Skidding",
    lat: 12.9352,
    lng: 77.6245,
    riskLevel: "HIGH",
    riskScore: 78,
    type: "ROAD_HAZARD",
    description: "Submerged craters and skidding risk during evening hours.",
    incidentsPastYear: 21,
    recommendedSpeed: 20
  },
  {
    id: "haz-3",
    name: "Ejipura Inner Ring Low Lighting & Construction",
    lat: 12.9421,
    lng: 77.6312,
    riskLevel: "HIGH",
    riskScore: 74,
    type: "DARK_ZONE",
    description: "Poor visibility after 8:00 PM and narrow detour barricades.",
    incidentsPastYear: 19,
    recommendedSpeed: 30
  },
  {
    id: "haz-4",
    name: "Koramangala 80ft Sudden U-Turn Cross",
    lat: 12.9388,
    lng: 77.6189,
    riskLevel: "MODERATE",
    riskScore: 55,
    type: "BLIND_INTERSECTION",
    description: "Unsignaled crossing with heavy pedestrian flow.",
    incidentsPastYear: 14,
    recommendedSpeed: 35
  }
];

export const mockWorker = {
  id: "w-101",
  name: "Ramesh Kumar",
  phone: "+91 98765 43210",
  platform: "Zomato / Swiggy Gig Partner",
  vehicleNumber: "KA 05 EQ 8821",
  currentLocation: {
    lat: 12.9280,
    lng: 77.6200,
    address: "Koramangala 4th Block, Bangalore"
  },
  currentShift: {
    startTime: new Date(Date.now() - 4.5 * 3600 * 1000).toISOString(),
    activeHours: 4.5,
    deliveriesCompleted: 14,
    fatigueStatus: "WARNING",
    fatigueScore: 78
  },
  todayEarnings: {
    basePay: 820,
    safetyBonus: 140,
    tips: 95,
    total: 1055,
    target: 1200
  },
  safetyProfile: {
    currentSafetyScore: 86,
    weeklyTrend: "+5.4%",
    safeKmTraveled: 184.2,
    avoidedHazardsCount: 42,
    cleanRideStreakDays: 19,
    badges: ["Night Owl Pro", "Zero Violation Hero", "Safe Route Champion"]
  },
  subscription: {
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
  }
};

export const mockRestStops = [
  {
    id: "rs-1",
    name: "Shell Petrol Pump Safe Resting Zone",
    address: "100ft Road, Indiranagar",
    lat: 12.9320,
    lng: 77.6270,
    distanceKm: 0.8,
    amenities: ["Clean Washroom", "Free Drinking Water", "Fast EV/Phone Charging", "Seating Lounge"],
    rating: 4.8,
    isOpen24x7: true
  },
  {
    id: "rs-2",
    name: "Zomato Rider Shelter & Chai Point Hub",
    address: "80ft Road, Koramangala 6th Block",
    lat: 12.9240,
    lng: 77.6150,
    distanceKm: 1.2,
    amenities: ["Free Chai Voucher", "Phone Charging", "First Aid Kit", "Helmet Sanitizer"],
    rating: 4.9,
    isOpen24x7: true
  }
];

export const mockRoutes = [
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
    coordinates: [
      [12.9280, 77.6200],
      [12.9220, 77.6210],
      [12.9176, 77.6234],
      [12.9352, 77.6245],
      [12.9421, 77.6312],
      [12.9510, 77.6380],
      [12.9600, 77.6420],
      [12.9716, 77.6412]
    ]
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
    coordinates: [
      [12.9280, 77.6200],
      [12.9310, 77.6230],
      [12.9340, 77.6290],
      [12.9430, 77.6390],
      [12.9520, 77.6430],
      [12.9620, 77.6425],
      [12.9716, 77.6412]
    ]
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
    coordinates: [
      [12.9280, 77.6200],
      [12.9325, 77.6175],
      [12.9390, 77.6180],
      [12.9480, 77.6260],
      [12.9580, 77.6350],
      [12.9660, 77.6400],
      [12.9716, 77.6412]
    ]
  }
];

export const mockEnterpriseFleet = [
  {
    id: "fl-1",
    riderName: "Ramesh Kumar",
    phone: "+91 98765 43210",
    activeShiftHours: 4.5,
    safetyScore: 86,
    status: "ON_DELIVERY",
    currentSpeedKmph: 32,
    riskZoneProximity: "LOW",
    subscriptionTier: "PREMIUM"
  },
  {
    id: "fl-2",
    riderName: "Arun V.",
    phone: "+91 98221 11452",
    activeShiftHours: 5.2,
    safetyScore: 62,
    status: "FATIGUED_ALERT",
    currentSpeedKmph: 46,
    riskZoneProximity: "HIGH",
    subscriptionTier: "FREE"
  },
  {
    id: "fl-3",
    riderName: "Priya Sundaram",
    phone: "+91 97412 88931",
    activeShiftHours: 2.1,
    safetyScore: 94,
    status: "ON_DELIVERY",
    currentSpeedKmph: 28,
    riskZoneProximity: "SAFE",
    subscriptionTier: "PREMIUM"
  },
  {
    id: "fl-4",
    riderName: "Imran Khan",
    phone: "+91 99165 77234",
    activeShiftHours: 6.0,
    safetyScore: 54,
    status: "RESTING",
    currentSpeedKmph: 0,
    riskZoneProximity: "SAFE",
    subscriptionTier: "FREE"
  },
  {
    id: "fl-5",
    riderName: "Deepak Joshi",
    phone: "+91 98801 33412",
    activeShiftHours: 3.4,
    safetyScore: 91,
    status: "ON_DELIVERY",
    currentSpeedKmph: 30,
    riskZoneProximity: "SAFE",
    subscriptionTier: "PREMIUM"
  }
];

export const mockEnterpriseStats = {
  totalActiveRiders: 1420,
  averageFleetSafetyScore: 84.8,
  accidentReductionRate: "-38.4%",
  insurancePayoutSavings: "₹24.6 Lakhs/Quarter",
  riderAttritionDrop: "-29.2%",
  totalHazardsAvoidedThisMonth: 18450,
  sosIncidentsTriggered: 3,
  sosAverageResponseTime: "3.8 mins"
};
