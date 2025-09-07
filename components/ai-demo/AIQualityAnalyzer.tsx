import React, { useState } from 'react';
import { Shield, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const qualityData = [
  { lot: 'WH2024001', grade: 'A', confidence: 96, defects: ['None detected'], status: 'approved' },
  { lot: 'RC2024002', grade: 'B', confidence: 88, defects: ['Minor color variation'], status: 'approved' },
  { lot: 'TM2024003', grade: 'C', confidence: 92, defects: ['Size inconsistency', 'Surface damage'], status: 'rejected' },
  { lot: 'PL2024004', grade: 'A', confidence: 94, defects: ['None detected'], status: 'approved' },
];

const AIQualityAnalyzer = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setShowResults(true);
      setAnalyzing(false);
    }, 2500);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'rejected': return <XCircle className="h-4 w-4 text-red-600" />;
      default: return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-700 bg-green-100';
      case 'B': return 'text-yellow-700 bg-yellow-100';
      case 'C': return 'text-red-700 bg-red-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="font-semibold text-blue-700 mb-4 flex items-center gap-2">
        <Shield className="h-5 w-5" /> AI Quality Analysis
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold mb-4 transition"
        onClick={handleAnalyze}
        disabled={analyzing}
      >
        {analyzing ? 'Analyzing Quality...' : 'Analyze Recent Lots'}
      </button>
      
      {showResults && (
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700 mb-2">Quality Analysis Results</div>
          {qualityData.map((lot) => (
            <div key={lot.lot} className="border rounded p-3">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  {getStatusIcon(lot.status)}
                  <span className="font-medium">Lot #{lot.lot}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getGradeColor(lot.grade)}`}>
                    Grade {lot.grade}
                  </span>
                  <span className="text-xs text-gray-500">{lot.confidence}% confidence</span>
                </div>
              </div>
              <div className="text-xs text-gray-600">
                Defects: {lot.defects.join(', ')}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AIQualityAnalyzer;
