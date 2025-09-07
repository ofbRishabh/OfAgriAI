import React, { useState } from "react";
import {
  Truck,
  Shield,
  Target,
  Users,
  MapPin,
  Calendar,
  PieChart,
  TrendingUp,
  Download,
  Filter,
  ArrowLeft,
} from "lucide-react";
import AIDemandForecasting from "./AIDemandForecasting";
import SmartLogisticsOptimizer from "./SmartLogisticsOptimizer";
import AIQualityAnalyzer from "./AIQualityAnalyzer";

const demoArrivals = [
  { region: "Punjab", value: 1245 },
  { region: "Haryana", value: 987 },
  { region: "UP", value: 756 },
  { region: "Rajasthan", value: 432 },
];

const demoDemand = [
  { crop: "Wheat", value: 8500, percent: 85 },
  { crop: "Rice", value: 7200, percent: 70 },
  { crop: "Tomatoes", value: 3400, percent: 60 },
  { crop: "Pulses", value: 2100, percent: 40 },
];

const demoQuality = [
  { label: "Premium Grade", value: 68, color: "bg-chart-1" },
  { label: "Standard Grade", value: 28, color: "bg-chart-2" },
  { label: "Below Standard", value: 4, color: "bg-chart-3" },
];

const ProcurementDashboard = ({ onBack }: { onBack: () => void }) => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      <header className="bg-blue-700 text-white px-8 py-5 shadow flex items-center gap-4">
        <button
          onClick={onBack}
          className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <Truck className="h-6 w-6 text-white" />
        <h1 className="text-2xl font-bold tracking-tight flex-1">
          Procurement Dashboard
        </h1>
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-1 rounded flex items-center gap-2"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <Filter className="h-4 w-4" /> Filters
        </button>
        <button className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-1 rounded flex items-center gap-2 ml-2">
          <Download className="h-4 w-4" /> Export
        </button>
      </header>
      <main className="flex-1 p-8 max-w-6xl mx-auto w-full">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
            <div className="text-2xl font-bold text-blue-700 mb-1">2,847</div>
            <div className="text-sm text-gray-500 mb-2">Today's Arrivals</div>
            <Truck className="h-7 w-7 text-blue-500" />
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
            <div className="text-2xl font-bold text-green-700 mb-1">68%</div>
            <div className="text-sm text-gray-500 mb-2">Quality Grade A</div>
            <Shield className="h-7 w-7 text-green-500" />
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
            <div className="text-2xl font-bold text-purple-700 mb-1">₹45L</div>
            <div className="text-sm text-gray-500 mb-2">Cost Savings</div>
            <Target className="h-7 w-7 text-purple-500" />
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
            <div className="text-2xl font-bold text-orange-700 mb-1">
              12,450
            </div>
            <div className="text-sm text-gray-500 mb-2">Active Farmers</div>
            <Users className="h-7 w-7 text-orange-500" />
          </div>
        </div>
        {/* Regional Arrivals & AI Demand Forecast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Regional Crop Arrivals
            </div>
            <div className="grid grid-cols-2 gap-4">
              {demoArrivals.map((r) => (
                <div
                  key={r.region}
                  className="bg-blue-50 rounded p-3 flex flex-col items-center"
                >
                  <div className="font-semibold">{r.region}</div>
                  <div className="text-2xl font-bold text-blue-700">
                    {r.value}
                  </div>
                  <div className="text-xs text-gray-500">quintals today</div>
                </div>
              ))}
            </div>
          </div>
          <AIDemandForecasting />
        </div>
        {/* AI Quality Analysis & Smart Logistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <AIQualityAnalyzer />
          <SmartLogisticsOptimizer />
        </div>
        {/* Powered by OfBusiness */}
        <div className="flex justify-center mt-8">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold border border-blue-200">
            <img
              src="/placeholder-logo.png"
              alt="OfBusiness"
              className="h-4 w-4 rounded bg-white border"
            />
            Powered by OfBusiness
          </span>
        </div>
      </main>
    </div>
  );
};

export default ProcurementDashboard;
