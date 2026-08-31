import React, { useState } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  AlertCircle, 
  Target, 
  TrendingUp, 
  Layers, 
  Award, 
  ShieldCheck, 
  DollarSign, 
  HeartHandshake
} from 'lucide-react';

export default function PitchTourModal({ isOpen, onClose, onSelectAction }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      badge: "EUREKA! 2026 • THE PROBLEM",
      title: "The Silent Crisis in India's 15 Million Gig Delivery Workforce",
      icon: <AlertCircle className="w-8 h-8 text-rose-500" />,
      content: (
        <div className="space-y-4 text-sm text-slate-300">
          <p className="leading-relaxed">
            Quick-commerce (Zepto, Blinkit, Swiggy Instamart) and food platforms push 10-minute delivery promises. Riders face unlit roads, sudden potholes, and 12-hour continuous shifts leading to severe fatigue.
          </p>
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-slate-900/90 border border-red-500/30 p-3 rounded-xl text-center">
              <span className="block text-2xl font-black text-rose-400">38%</span>
              <span className="text-xs text-slate-400">Riders report regular road accidents or near-misses</span>
            </div>
            <div className="bg-slate-900/90 border border-amber-500/30 p-3 rounded-xl text-center">
              <span className="block text-2xl font-black text-amber-400">&gt; 4 hrs</span>
              <span className="text-xs text-slate-400">Continuous riding cuts reflex speeds by 42%</span>
            </div>
            <div className="bg-slate-900/90 border border-blue-500/30 p-3 rounded-xl text-center">
              <span className="block text-2xl font-black text-safety-400">35%+</span>
              <span className="text-xs text-slate-400">Annual fleet attrition due to injuries & unsafe stress</span>
            </div>
          </div>
        </div>
      ),
      actionText: "See SAFETRACK Solution",
      actionHandler: () => setCurrentSlide(1)
    },
    {
      badge: "THE SOLUTION",
      title: "SAFETRACK: Safety-First Navigation & Efficiency Platform",
      icon: <ShieldCheck className="w-8 h-8 text-safety-400" />,
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p className="leading-relaxed">
            SAFETRACK reroutes gig riders away from accident blackspots and unlit danger zones while rewarding them with <strong className="text-earnings-400">₹25-₹35 safety bonuses</strong> per delivery.
          </p>
          <div className="space-y-2 pt-1">
            <div className="flex items-start space-x-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
              <span className="text-safety-400 font-bold text-xs bg-safety-500/10 px-2 py-0.5 rounded">1</span>
              <div>
                <strong className="text-white">Accident-Scored Routing:</strong> Evaluates street lighting, road pothole telemetry, and collision history.
              </div>
            </div>
            <div className="flex items-start space-x-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
              <span className="text-earnings-400 font-bold text-xs bg-earnings-500/10 px-2 py-0.5 rounded">2</span>
              <div>
                <strong className="text-white">Rest & Fatigue Guard:</strong> Triggers refreshment vouchers and safe rest hub waypoints after 4h riding.
              </div>
            </div>
            <div className="flex items-start space-x-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
              <span className="text-amber-400 font-bold text-xs bg-amber-500/10 px-2 py-0.5 rounded">3</span>
              <div>
                <strong className="text-white">Micro-Subscription (₹99/mo):</strong> Bundles ₹5,00,000 accidental cover & emergency SOS.
              </div>
            </div>
          </div>
        </div>
      ),
      actionText: "Try Route Optimizer",
      actionHandler: () => {
        onClose();
        if (onSelectAction) onSelectAction('route-comparison');
      }
    },
    {
      badge: "LIVE DEMO VALUE PROPOSITION",
      title: "Before vs After: The 2-Minute Tradeoff",
      icon: <Target className="w-8 h-8 text-earnings-400" />,
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-rose-950/40 border border-rose-800/60 p-3 rounded-xl">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">Standard Route (Before)</span>
              <ul className="text-xs space-y-1.5 text-slate-300">
                <li className="text-rose-300">❌ Safety Score: 42/100 (High Risk)</li>
                <li>⏱️ Duration: 16 mins</li>
                <li className="text-rose-300">⚠️ 3 Danger Zones (Silk Board crash hub)</li>
                <li>💰 Earnings: ₹60 flat</li>
              </ul>
            </div>

            <div className="bg-safety-950/40 border border-safety-700/60 p-3 rounded-xl">
              <span className="text-xs font-bold text-safety-400 uppercase tracking-wider block mb-1">SAFETRACK (After)</span>
              <ul className="text-xs space-y-1.5 text-slate-200">
                <li className="text-safety-300 font-semibold">✅ Safety Score: 88/100 (Safe)</li>
                <li>⏱️ Duration: 18 mins (+2 mins)</li>
                <li className="text-emerald-400 font-semibold">🛡️ Zero Critical Blackspots</li>
                <li className="text-earnings-400 font-bold">💰 Earnings: ₹85 (+₹25 Bonus)</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 italic">
            *Riders trade just 2 minutes for zero accident encounters and a 41% higher payout!
          </p>
        </div>
      ),
      actionText: "Explore Live Navigation",
      actionHandler: () => {
        onClose();
        if (onSelectAction) onSelectAction('navigation');
      }
    },
    {
      badge: "BUSINESS MODEL & B2B ROI",
      title: "Win-Win Unit Economics for Riders & Platforms",
      icon: <DollarSign className="w-8 h-8 text-amber-400" />,
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
              <h4 className="font-bold text-white text-xs mb-1 flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-safety-400"></span>
                <span>B2C Rider Subscription</span>
              </h4>
              <p className="text-xs text-slate-400">
                <strong>₹99/month</strong> per rider for ₹5L insurance cover, hazard audio warnings, and priority dispatch.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
              <h4 className="font-bold text-white text-xs mb-1 flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-earnings-400"></span>
                <span>B2B Enterprise SaaS</span>
              </h4>
              <p className="text-xs text-slate-400">
                <strong>₹49/rider/month</strong> for fleet platforms. Cuts fleet insurance payouts by <strong>₹98L/year</strong>.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-xs space-y-1">
            <div className="flex justify-between">
              <span className="text-slate-400">TAM (India Gig Delivery Logistics):</span>
              <span className="text-white font-bold">₹4,200 Crores</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Fleet Attrition Reduction:</span>
              <span className="text-emerald-400 font-bold">-29.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Insurance Claim Reduction:</span>
              <span className="text-safety-400 font-bold">-38.4%</span>
            </div>
          </div>
        </div>
      ),
      actionText: "View Enterprise Dashboard",
      actionHandler: () => {
        onClose();
        if (onSelectAction) onSelectAction('enterprise');
      }
    }
  ];

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold uppercase tracking-wider text-safety-400 bg-safety-500/10 px-2.5 py-1 rounded-md border border-safety-500/20">
              {slide.badge}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
              {slide.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-snug">
                {slide.title}
              </h3>
            </div>
          </div>

          {slide.content}
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/80">
          <div className="flex items-center space-x-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  currentSlide === idx ? 'w-6 bg-safety-500' : 'bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-2">
            {currentSlide > 0 && (
              <button
                onClick={() => setCurrentSlide(currentSlide - 1)}
                className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition flex items-center space-x-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            )}

            <button
              onClick={slide.actionHandler}
              className="px-4 py-2 text-xs font-bold text-white bg-safety-600 hover:bg-safety-500 rounded-lg shadow-md shadow-safety-600/30 transition flex items-center space-x-1"
            >
              <span>{slide.actionText}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
