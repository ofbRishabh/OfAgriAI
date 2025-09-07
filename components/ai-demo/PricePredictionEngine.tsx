import React, { useState } from "react";

const demoPrices = [
  2100, 2200, 2150, 2250, 2300, 2280, 2350, 2400, 2380, 2450, 2500,
];

function getRandomForecast() {
  const base = demoPrices[demoPrices.length - 1];
  return Array.from({ length: 7 }, (_, i) => ({
    day: `Day ${i + 1}`,
    price: Math.round(base + (Math.random() - 0.5) * 100),
    confLow: base - 100,
    confHigh: base + 100,
  }));
}

import { TrendingUp, CalendarCheck2 } from "lucide-react";

const PricePredictionEngine = () => {
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handlePredict = () => {
    setLoading(true);
    setTimeout(() => {
      setForecast(getRandomForecast());
      setLoading(false);
    }, 1000);
  };

  // Calculate trend for color
  const getTrendColor = (price: number, base: number) => {
    if (price > base) return "text-green-700";
    if (price < base) return "text-red-600";
    return "text-gray-700";
  };

  const basePrice = 2450;

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow p-4 border flex flex-col">
      <div className="font-bold text-green-700 mb-2 flex items-center gap-2">
        <TrendingUp className="h-4 w-4" /> Price Prediction Engine
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="text-2xl font-bold text-green-700">
          ₹{basePrice}/quintal
        </div>
        <span className="text-xs text-gray-500">Current Market Price</span>
      </div>
      <button
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold w-full transition mb-3"
        onClick={handlePredict}
        disabled={loading}
      >
        {loading ? "Predicting..." : "Get 7-Day Forecast"}
      </button>
      {forecast.length > 0 && (
        <div className="mt-2">
          <div className="flex items-center gap-2 mb-2 text-green-800 font-medium">
            <CalendarCheck2 className="h-4 w-4" /> 7-Day Price Forecast
          </div>
          <table className="w-full text-sm rounded overflow-hidden">
            <thead>
              <tr className="bg-green-50">
                <th className="py-2 px-2 text-left">Day</th>
                <th className="py-2 px-2 text-left">Price (₹/qtl)</th>
                <th className="py-2 px-2 text-left">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {forecast.map((f, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-1 px-2 font-medium">{f.day}</td>
                  <td
                    className={`py-1 px-2 font-semibold ${getTrendColor(
                      f.price,
                      basePrice
                    )}`}
                  >
                    {f.price}
                  </td>
                  <td className="py-1 px-2 text-gray-700">
                    {f.confLow} - {f.confHigh}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-3 text-center">
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
              Recommendation:{" "}
              {forecast[3].price > basePrice
                ? "Hold for higher price"
                : "Consider selling soon"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricePredictionEngine;
