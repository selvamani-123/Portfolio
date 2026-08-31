// In-Memory Simulated Database with initial seed data

export const db = {
  workers: [
    {
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
        startTime: new Date(Date.now() - 4.5 * 3600 * 1000).toISOString(), // 4.5 hours active
        activeHours: 4.5,
        deliveriesCompleted: 14,
        fatigueStatus: "WARNING", // "NORMAL" | "WARNING" | "CRITICAL"
        fatigueScore: 78 // out of 100 (higher = more fatigued)
      },
      todayEarnings: {
        basePay: 820,
        safetyBonus: 140, // Bonus earned for choosing safe routes
        tips: 95,
        total: 1055,
        target: 1200
      },
      safetyProfile: {
        currentSafetyScore: 86, // 0-100
        weeklyTrend: "+5.4%",
        safeKmTraveled: 184.2,
        avoidedHazardsCount: 42,
        cleanRideStreakDays: 19,
        badges: ["Night Owl Pro", "Zero Violation Hero", "Safe Route Champion"]
      },
      subscription: {
        plan: "PREMIUM", // "FREE" | "PREMIUM"
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
    }
  ],

  restStops: [
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
      amenities: ["Free Chai Voucher", "Phone Charging", "First Aid Kit", "Helmet Sanitization"],
      rating: 4.9,
      isOpen24x7: true
    }
  ],

  enterpriseFleet: [
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
  ],

  enterpriseStats: {
    totalActiveRiders: 1420,
    averageFleetSafetyScore: 84.8,
    accidentReductionRate: "-38.4%",
    insurancePayoutSavings: "₹24.6 Lakhs/Quarter",
    riderAttritionDrop: "-29.2%",
    totalHazardsAvoidedThisMonth: 18450,
    sosIncidentsTriggered: 3,
    sosAverageResponseTime: "3.8 mins"
  }
};
