import React, { useState } from "react";
import { BarChart3, TrendingUp, Brain, AlertTriangle } from "lucide-react";

const demandData = [
  { crop: "Wheat", current: 8500, predicted: 9200, change: "+8%" },
  { crop: "Rice", current: 7200, predicted: 6800, change: "-5%" },
  { crop: "Tomatoes", current: 3400, predicted: 4100, change: "+20%" },
  { crop: "Pulses", current: 2100, predicted: 2350, change: "+12%" },
];

const AIDemandForecasting = () => {
  const [loading, setLoading] = useState(false);
  const [showForecast, setShowForecast] = useState(false);

  const handleForecast = () => {
    setLoading(true);
    setTimeout(() => {
      setShowForecast(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="font-semibold text-blue-700 mb-4 flex items-center gap-2">
        <Brain className="h-5 w-5" /> AI Demand Forecasting
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold mb-4 transition"
        onClick={handleForecast}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Generate 30-Day Forecast"}
      </button>

      {showForecast && (
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700 mb-2">
            Predicted Demand vs Current
          </div>
          {demandData.map((item) => (
            <div key={item.crop} className="bg-blue-50 rounded p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{item.crop}</span>
                <span
                  className={`text-sm font-semibold ${
                    item.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.change}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Current: {item.current} quintals</span>
                <span>Predicted: {item.predicted} quintals</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AIDemandForecasting;
