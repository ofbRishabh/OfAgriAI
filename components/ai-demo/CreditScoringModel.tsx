import React, { useState } from 'react';

import { ShieldCheck } from "lucide-react";

const CreditScoringModel = () => {
  const [inputs, setInputs] = useState({
    cropHistory: 3,
    salesPattern: 2,
    mobileUsage: 2,
    socialConnections: 1,
    landRecords: 1,
    repayment: 1,
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputs({ ...inputs, [e.target.name]: Number(e.target.value) });
  };

  const handleScore = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      // Simple demo scoring
      const score = Object.values(inputs).reduce((a, b) => a + b, 0) * 10 + Math.floor(Math.random() * 10);
      let risk = 'Low';
      if (score < 40) risk = 'High';
      else if (score < 55) risk = 'Medium';
      setResult({ score, risk });
      setLoading(false);
    }, 900);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow p-4 border flex flex-col">
      <div className="font-bold text-purple-700 mb-2 flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Credit Scoring Model</div>
      <form onSubmit={handleScore} className="space-y-4 mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Crop History (years)</label>
            <input type="number" name="cropHistory" value={inputs.cropHistory} onChange={handleChange} min={0} max={10} className="w-full border-2 border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sales Pattern (1-5)</label>
            <input type="number" name="salesPattern" value={inputs.salesPattern} onChange={handleChange} min={1} max={5} className="w-full border-2 border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Usage (1-5)</label>
            <input type="number" name="mobileUsage" value={inputs.mobileUsage} onChange={handleChange} min={1} max={5} className="w-full border-2 border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Social Connections (1-5)</label>
            <input type="number" name="socialConnections" value={inputs.socialConnections} onChange={handleChange} min={1} max={5} className="w-full border-2 border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Land Records</label>
            <select name="landRecords" value={inputs.landRecords} onChange={handleChange} className="w-full border-2 border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400">
              <option value={1}>Available</option>
              <option value={0}>Not Available</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Repayment History</label>
            <select name="repayment" value={inputs.repayment} onChange={handleChange} className="w-full border-2 border-purple-200 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400">
              <option value={1}>Good</option>
              <option value={0}>No/Bad</option>
            </select>
          </div>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold w-full transition" type="submit" disabled={loading}>
          {loading ? 'Scoring...' : 'Get Credit Score'}
        </button>
      </form>
      {result && (
        <div className="mt-4 flex flex-col items-center">
          <div className="text-lg font-bold text-purple-700">Score: {result.score}</div>
          <div className={`text-base font-semibold mt-1 ${result.risk === 'Low' ? 'text-green-600' : result.risk === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>Risk: {result.risk}</div>
        </div>
      )}
      {/* Powered by Oxyzo badge */}
      <div className="mt-6 flex justify-center">
        <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold border border-blue-200">
          <img src="/placeholder-logo.png" alt="Oxyzo" className="h-4 w-4 rounded bg-white border" />
          Powered by Oxyzo
        </span>
      </div>
    </div>
  );
};

export default CreditScoringModel;
