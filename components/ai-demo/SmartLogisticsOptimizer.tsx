import React, { useState } from "react";
import { Truck, Route, Clock, MapPin } from "lucide-react";

const routeData = [
  {
    from: "Delhi",
    to: "Mumbai",
    distance: "1,420 km",
    optimized: "1,285 km",
    savings: "9.5%",
    time: "18h",
  },
  {
    from: "Pune",
    to: "Bangalore",
    distance: "842 km",
    optimized: "798 km",
    savings: "5.2%",
    time: "12h",
  },
  {
    from: "Chennai",
    to: "Hyderabad",
    distance: "628 km",
    optimized: "590 km",
    savings: "6.1%",
    time: "9h",
  },
];

const SmartLogisticsOptimizer = () => {
  const [loading, setLoading] = useState(false);
  const [optimized, setOptimized] = useState(false);

  const handleOptimize = () => {
    setLoading(true);
    setTimeout(() => {
      setOptimized(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="font-semibold text-blue-700 mb-4 flex items-center gap-2">
        <Route className="h-5 w-5" /> Smart Logistics AI
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold mb-4 transition"
        onClick={handleOptimize}
        disabled={loading}
      >
        {loading ? "Optimizing Routes..." : "Optimize All Routes"}
      </button>

      {optimized && (
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700 mb-2">
            Route Optimization Results
          </div>
          {routeData.map((route, index) => (
            <div
              key={index}
              className="bg-green-50 rounded p-3 border border-green-200"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">
                    {route.from} → {route.to}
                  </span>
                </div>
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  -{route.savings} saved
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div>Original: {route.distance}</div>
                <div>Optimized: {route.optimized}</div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {route.time}
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="h-3 w-3" />
                  In Transit
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SmartLogisticsOptimizer;
