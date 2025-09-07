import React, { useState } from "react";

const demoDefects = [
  "Color unevenness",
  "Size inconsistency",
  "Surface damage",
  "Moisture spots",
  "No visible defects",
];

function getRandomGrade() {
  const grades = ["A", "B", "C"];
  return grades[Math.floor(Math.random() * grades.length)];
}

function getRandomConfidence() {
  return (80 + Math.random() * 20).toFixed(2);
}

function getRandomDefects() {
  const n = Math.floor(Math.random() * 3);
  if (n === 0) return ["No visible defects"];
  return Array.from(
    { length: n },
    () => demoDefects[Math.floor(Math.random() * (demoDefects.length - 1))]
  );
}

import { Camera, CheckCircle, AlertTriangle } from "lucide-react";

const CropQualityGrader = () => {
  const [result, setResult] = useState<any>(null);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
      setLoading(true);
      setResult(null);
      setTimeout(() => {
        setResult({
          grade: getRandomGrade(),
          confidence: getRandomConfidence(),
          defects: getRandomDefects(),
        });
        setLoading(false);
      }, 1200);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <label
        htmlFor="crop-image-upload"
        className="w-full cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-green-400 bg-green-50 hover:bg-green-100 rounded-xl p-6 transition-all"
      >
        <Camera className="h-10 w-10 text-green-600 mb-2" />
        <span className="font-medium text-green-700">Upload Crop Image</span>
        <span className="text-xs text-gray-500">
          JPG, PNG, or JPEG (max 5MB)
        </span>
        <input
          id="crop-image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>
      {image && (
        <div className="w-full flex flex-col items-center">
          <img
            src={image}
            alt="Crop"
            className="rounded-lg shadow max-h-48 object-contain border mb-2"
          />
        </div>
      )}
      {loading && (
        <div className="flex items-center gap-2 text-green-700 font-medium animate-pulse">
          <Camera className="h-5 w-5 animate-spin" /> Analyzing image...
        </div>
      )}
      {result && (
        <div className="w-full bg-white rounded-xl shadow p-4 mt-2 border">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-800">
              Analysis Complete
            </span>
          </div>
          <div className="flex flex-wrap gap-4 mb-2">
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500">Grade</span>
              <span className="text-lg font-bold text-green-700">
                {result.grade}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500">Confidence</span>
              <span className="text-lg font-bold text-green-700">
                {result.confidence}%
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <span className="text-xs text-gray-700">
              Defects: {result.defects.join(", ")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropQualityGrader;
