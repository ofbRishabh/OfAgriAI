import React, { useState } from 'react';

const demoYields = {
  wheat: 32,
  rice: 28,
  vegetables: 18,
  pulses: 14,
};

const YieldPredictionSystem = () => {
  const [inputs, setInputs] = useState({
    crop: 'wheat',
    area: 1,
    sowingDate: '',
    location: '',
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const base = demoYields[inputs.crop as keyof typeof demoYields] || 20;
      const yieldVal = (base * Number(inputs.area) * (0.9 + Math.random() * 0.2)).toFixed(2);
      setResult({ yield: yieldVal });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-4 border rounded mb-6">
      <h2 className="font-bold mb-2">Yield Prediction System (Demo)</h2>
      <form onSubmit={handlePredict} className="space-y-2">
        <div>
          <label>Crop: </label>
          <select name="crop" value={inputs.crop} onChange={handleChange}>
            <option value="wheat">Wheat</option>
            <option value="rice">Rice</option>
            <option value="vegetables">Vegetables</option>
            <option value="pulses">Pulses</option>
          </select>
        </div>
        <div>
          <label>Area (acres): </label>
          <input type="number" name="area" value={inputs.area} onChange={handleChange} min={0.1} step={0.1} />
        </div>
        <div>
          <label>Sowing Date: </label>
          <input type="date" name="sowingDate" value={inputs.sowingDate} onChange={handleChange} />
        </div>
        <div>
          <label>Location: </label>
          <input type="text" name="location" value={inputs.location} onChange={handleChange} />
        </div>
        <button className="bg-blue-600 text-white px-3 py-1 rounded" type="submit" disabled={loading}>
          {loading ? 'Predicting...' : 'Predict Yield'}
        </button>
      </form>
      {result && (
        <div className="mt-2">Predicted Yield: <b>{result.yield} quintals</b></div>
      )}
    </div>
  );
};

export default YieldPredictionSystem;
