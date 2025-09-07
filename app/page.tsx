"use client";

import type React from "react";
import { useState } from "react";
import CropQualityGrader from "@/components/ai-demo/CropQualityGrader";
import PricePredictionEngine from "@/components/ai-demo/PricePredictionEngine";
import YieldPredictionSystem from "@/components/ai-demo/YieldPredictionSystem";
import AdvisoryChatbot from "@/components/ai-demo/AdvisoryChatbot";
import CreditScoringModel from "@/components/ai-demo/CreditScoringModel";
import AIProcurementDashboard from "@/components/ai-demo/ProcurementDashboard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Smartphone,
  Monitor,
  ShoppingCart,
  Camera,
  TrendingUp,
  CreditCard,
  BarChart3,
  MapPin,
  Calendar,
  PieChart,
  Truck,
  FileCheck,
  Filter,
  Download,
  Shield,
  Leaf,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
} from "lucide-react";

export default function OfAgriAIDemo() {
  const [activeDemo, setActiveDemo] = useState<
    "landing" | "farmer" | "procurement" | "buyer"
  >("landing");
  const [cropGrading, setCropGrading] = useState<
    "idle" | "analyzing" | "complete"
  >("idle");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setCropGrading("analyzing");
        setTimeout(() => setCropGrading("complete"), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              OfAgriAI
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Powered by AI, Enabled by OfBusiness + Oxyzo
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Revolutionizing agricultural supply chains through AI-powered
            solutions that connect farmers, aggregators, and buyers seamlessly.
          </p>
        </div>

        {/* Demo Entry Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setActiveDemo("farmer")}
          >
            <CardHeader className="text-center">
              <Smartphone className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle>Farmer Mobile App</CardTitle>
              <CardDescription>
                AI-powered crop grading, price forecasting, and instant credit
                access for farmers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4 text-sm">
                <div className="flex items-start gap-2">
                  <Camera className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-700">
                      AI Crop Grading
                    </div>
                    <div className="text-gray-600">
                      Computer Vision + Machine Learning for 95% accurate
                      quality assessment
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-blue-700">
                      Price Forecasting
                    </div>
                    <div className="text-gray-600">
                      Deep Learning models predicting market prices with 90%
                      accuracy
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CreditCard className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-purple-700">
                      Instant Credit
                    </div>
                    <div className="text-gray-600">
                      AI-driven creditworthiness assessment using farming data
                      and IoT sensors
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <BarChart3 className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-orange-700">
                      Farm Analytics
                    </div>
                    <div className="text-gray-600">
                      Predictive analytics for yield optimization and resource
                      management
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full" size="lg">
                Try Farmer Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setActiveDemo("procurement")}
          >
            <CardHeader className="text-center">
              <Monitor className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle>Procurement Dashboard</CardTitle>
              <CardDescription>
                Real-time monitoring, demand forecasting, and smart logistics
                for aggregators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-700">
                      Regional Heat Map
                    </div>
                    <div className="text-gray-600">
                      Real-time AI analysis of crop arrivals and regional supply
                      patterns
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-blue-700">
                      Demand Forecasting
                    </div>
                    <div className="text-gray-600">
                      Neural networks predicting demand patterns 30 days in
                      advance
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <PieChart className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-purple-700">
                      Quality Distribution
                    </div>
                    <div className="text-gray-600">
                      Automated quality classification using AI image
                      recognition
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Truck className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-orange-700">
                      Smart Logistics
                    </div>
                    <div className="text-gray-600">
                      AI route optimization reducing transportation costs by 20%
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full" size="lg">
                Try Procurement Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setActiveDemo("buyer")}
          >
            <CardHeader className="text-center">
              <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle>Buyer Portal</CardTitle>
              <CardDescription>
                Bulk ordering, quality verification, and supply chain
                traceability for buyers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4 text-sm">
                <div className="flex items-start gap-2">
                  <ShoppingCart className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-700">
                      Bulk Ordering
                    </div>
                    <div className="text-gray-600">
                      AI-powered matching of buyer requirements with available
                      inventory
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-blue-700">
                      Quality Certificates
                    </div>
                    <div className="text-gray-600">
                      Blockchain-verified AI quality assessments with QR
                      authentication
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Globe className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-purple-700">
                      Traceability
                    </div>
                    <div className="text-gray-600">
                      AI-enabled end-to-end supply chain tracking with farmer
                      verification
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <BarChart3 className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-orange-700">
                      Market Intelligence
                    </div>
                    <div className="text-gray-600">
                      Real-time AI market analysis with predictive pricing
                      insights
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full" size="lg">
                Try Buyer Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Impact Metrics */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Platform Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-chart-1 mb-1">95%+</div>
                <div className="text-sm text-muted-foreground">
                  AI Grading Accuracy
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-chart-2 mb-1">90%+</div>
                <div className="text-sm text-muted-foreground">
                  Price Prediction Accuracy
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-chart-3 mb-1">20%</div>
                <div className="text-sm text-muted-foreground">
                  Logistics Cost Reduction
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-chart-1 mb-1">50%</div>
                <div className="text-sm text-muted-foreground">
                  Post-Harvest Loss Reduction
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose OfAgriAI Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose OfAgriAI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology solving real-world agricultural challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  AI-Powered Grading
                </h3>
                <p className="text-muted-foreground mb-3">
                  95% accurate crop quality assessment using computer vision and
                  machine learning
                </p>
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-muted-foreground">
                  Accuracy Rate
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Blockchain Verification
                </h3>
                <p className="text-muted-foreground mb-3">
                  Immutable quality certificates and complete supply chain
                  transparency
                </p>
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-muted-foreground">
                  Transparency
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Price Forecasting
                </h3>
                <p className="text-muted-foreground mb-3">
                  90% accurate price predictions to optimize farmer selling
                  decisions
                </p>
                <div className="text-2xl font-bold text-purple-600">90%</div>
                <div className="text-sm text-muted-foreground">
                  Prediction Accuracy
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Farmer Network</h3>
                <p className="text-muted-foreground mb-3">
                  15M+ farmers connected to efficient supply chain
                  infrastructure
                </p>
                <div className="text-2xl font-bold text-orange-600">15M+</div>
                <div className="text-sm text-muted-foreground">
                  Connected Farmers
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Loss Reduction</h3>
                <p className="text-muted-foreground mb-3">
                  50% reduction in post-harvest losses through optimized
                  logistics
                </p>
                <div className="text-2xl font-bold text-red-600">50%</div>
                <div className="text-sm text-muted-foreground">
                  Loss Reduction
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Quality Assurance
                </h3>
                <p className="text-muted-foreground mb-3">
                  ISO certified processes ensuring food safety and quality
                  standards
                </p>
                <div className="text-2xl font-bold text-teal-600">ISO</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  // Farmer App as a full web app with sidebar navigation and improved UI
  const [farmerSection, setFarmerSection] = useState<string>("grading");
  const sectionList = [
    { key: "grading", label: "Crop Grading" },
    { key: "price", label: "Price Forecast" },
    { key: "yield", label: "Yield Prediction" },
    { key: "advisory", label: "Advisory Chatbot" },
    { key: "credit", label: "Credit Scoring" },
  ];

  const FarmerApp = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r shadow-lg flex flex-col py-6 px-4 min-h-screen">
        <div className="mb-8 flex items-center gap-2">
          <Leaf className="h-7 w-7 text-green-600" />
          <span className="font-bold text-lg text-green-700">OfAgriAI</span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {sectionList.map((s) => (
              <li key={s.key}>
                <button
                  className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
                    farmerSection === s.key
                      ? "bg-green-100 text-green-800 shadow"
                      : "hover:bg-green-50 text-gray-700"
                  }`}
                  onClick={() => setFarmerSection(s.key)}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setActiveDemo("landing")}
          >
            ← Back to Home
          </Button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-green-700 text-white px-8 py-5 shadow flex items-center gap-4">
          <Smartphone className="h-6 w-6 text-white" />
          <h1 className="text-2xl font-bold tracking-tight">
            Farmer Web App Demo
          </h1>
        </header>
        {/* Section Content */}
        <section className="flex-1 p-8 max-w-3xl mx-auto w-full">
          {farmerSection === "grading" && (
            <div className="mb-8 animate-fade-in">
              <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center gap-2">
                <Camera className="h-5 w-5" /> Crop Quality Grading
              </h2>
              <div className="bg-white rounded-xl shadow p-6">
                <CropQualityGrader />
              </div>
            </div>
          )}
          {farmerSection === "price" && (
            <div className="mb-8 animate-fade-in">
              <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" /> Price Prediction
              </h2>
              <div className="bg-white rounded-xl shadow p-6">
                <PricePredictionEngine />
              </div>
            </div>
          )}
          {farmerSection === "yield" && (
            <div className="mb-8 animate-fade-in">
              <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center gap-2">
                <BarChart3 className="h-5 w-5" /> Yield Prediction
              </h2>
              <div className="bg-white rounded-xl shadow p-6">
                <YieldPredictionSystem />
              </div>
            </div>
          )}
          {farmerSection === "advisory" && (
            <div className="mb-8 animate-fade-in">
              <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center gap-2">
                <Zap className="h-5 w-5" /> Advisory Chatbot
              </h2>
              <div className="bg-white rounded-xl shadow p-6">
                <AdvisoryChatbot />
              </div>
            </div>
          )}
          {farmerSection === "credit" && (
            <div className="mb-8 animate-fade-in">
              <h2 className="text-xl font-semibold mb-4 text-green-800 flex items-center gap-2">
                <CreditCard className="h-5 w-5" /> Credit Scoring
              </h2>
              <div className="bg-white rounded-xl shadow p-6">
                <CreditScoringModel />
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );

  const ProcurementDashboard = () => (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Button
              variant="ghost"
              onClick={() => setActiveDemo("landing")}
              className="mb-2"
            >
              ← Back to Landing
            </Button>
            <h1 className="text-3xl font-bold">Procurement Dashboard</h1>
            <p className="text-muted-foreground">
              Real-time supply chain intelligence
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Today's Arrivals
                  </p>
                  <p className="text-2xl font-bold">2,847</p>
                  <p className="text-xs text-chart-1">+12% from yesterday</p>
                </div>
                <Truck className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Quality Grade A
                  </p>
                  <p className="text-2xl font-bold">68%</p>
                  <p className="text-xs text-chart-1">+5% this week</p>
                </div>
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Cost Savings</p>
                  <p className="text-2xl font-bold">₹45L</p>
                  <p className="text-xs text-chart-1">This month</p>
                </div>
                <Target className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Active Farmers
                  </p>
                  <p className="text-2xl font-bold">12,450</p>
                  <p className="text-xs text-chart-1">+8% this month</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Regional Heat Map */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Regional Crop Arrivals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded">
                    <div className="font-semibold">Punjab</div>
                    <div className="text-2xl font-bold text-chart-1">1,245</div>
                    <div className="text-sm text-muted-foreground">
                      quintals today
                    </div>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <div className="font-semibold">Haryana</div>
                    <div className="text-2xl font-bold text-chart-2">987</div>
                    <div className="text-sm text-muted-foreground">
                      quintals today
                    </div>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <div className="font-semibold">UP</div>
                    <div className="text-2xl font-bold text-chart-3">756</div>
                    <div className="text-sm text-muted-foreground">
                      quintals today
                    </div>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <div className="font-semibold">Rajasthan</div>
                    <div className="text-2xl font-bold text-chart-4">432</div>
                    <div className="text-sm text-muted-foreground">
                      quintals today
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demand Forecasting */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                30-Day Demand Forecast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Wheat</span>
                    <div className="flex items-center gap-2">
                      <Progress value={85} className="w-20" />
                      <span className="text-sm font-semibold">
                        8,500 quintals
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rice</span>
                    <div className="flex items-center gap-2">
                      <Progress value={70} className="w-20" />
                      <span className="text-sm font-semibold">
                        7,200 quintals
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tomatoes</span>
                    <div className="flex items-center gap-2">
                      <Progress value={60} className="w-20" />
                      <span className="text-sm font-semibold">
                        3,400 quintals
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quality Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="h-5 w-5 mr-2" />
                Quality Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-chart-1 rounded-full"></div>
                      <span>Premium Grade</span>
                    </div>
                    <span className="font-semibold">68%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-chart-2 rounded-full"></div>
                      <span>Standard Grade</span>
                    </div>
                    <span className="font-semibold">28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-chart-3 rounded-full"></div>
                      <span>Below Standard</span>
                    </div>
                    <span className="font-semibold">4%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smart Logistics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="h-5 w-5 mr-2" />
                Smart Logistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-primary/10 p-3 rounded">
                  <div className="font-semibold text-primary">
                    Route Optimization Active
                  </div>
                  <div className="text-sm text-muted-foreground">
                    20% cost reduction achieved
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Delhi → Mumbai</span>
                    <Badge variant="secondary">Optimized</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Pune → Bangalore</span>
                    <Badge variant="secondary">In Transit</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Chennai → Hyderabad</span>
                    <Badge variant="outline">Scheduled</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const BuyerPortal = () => (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Button
              variant="ghost"
              onClick={() => setActiveDemo("landing")}
              className="mb-2"
            >
              ← Back to Landing
            </Button>
            <h1 className="text-3xl font-bold">Buyer Portal</h1>
            <p className="text-muted-foreground">
              Premium quality agricultural products with complete traceability
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter Products
            </Button>
            <Button size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              View Cart (3)
            </Button>
          </div>
        </div>

        {/* Market Intelligence */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              Market Intelligence Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-chart-1">₹2,450</div>
                <div className="text-sm text-muted-foreground">
                  Wheat/quintal
                </div>
                <div className="text-xs text-chart-1">+3% today</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-chart-2">₹3,200</div>
                <div className="text-sm text-muted-foreground">
                  Rice/quintal
                </div>
                <div className="text-xs text-chart-3">-1% today</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-chart-3">₹1,800</div>
                <div className="text-sm text-muted-foreground">
                  Tomato/quintal
                </div>
                <div className="text-xs text-chart-1">+8% today</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-chart-4">₹4,500</div>
                <div className="text-sm text-muted-foreground">
                  Basmati/quintal
                </div>
                <div className="text-xs text-chart-1">+2% today</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Lots */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Available Lots - AI Verified Quality</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold">
                      Premium Wheat - Lot #WH2024001
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Punjab, India • Harvested: Dec 2024
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">₹2,450/quintal</div>
                    <Badge variant="default" className="bg-primary">
                      Grade A
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Quantity
                    </div>
                    <div className="font-semibold">500 quintals</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Moisture
                    </div>
                    <div className="font-semibold">12.5%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Protein</div>
                    <div className="font-semibold">11.8%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      AI Confidence
                    </div>
                    <div className="font-semibold text-primary">96%</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">Add to Cart</Button>
                  <Button variant="outline" size="sm">
                    <FileCheck className="h-4 w-4 mr-2" />
                    View Certificate
                  </Button>
                  <Button variant="outline" size="sm">
                    View Traceability
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold">
                      Organic Basmati Rice - Lot #BR2024002
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Haryana, India • Harvested: Nov 2024
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">₹4,500/quintal</div>
                    <Badge variant="default" className="bg-primary">
                      Grade A+
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Quantity
                    </div>
                    <div className="font-semibold">200 quintals</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Length</div>
                    <div className="font-semibold">6.8mm</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Aroma</div>
                    <div className="font-semibold">Excellent</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      AI Confidence
                    </div>
                    <div className="font-semibold text-primary">98%</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">Add to Cart</Button>
                  <Button variant="outline" size="sm">
                    <FileCheck className="h-4 w-4 mr-2" />
                    View Certificate
                  </Button>
                  <Button variant="outline" size="sm">
                    View Traceability
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Traceability Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Sample Traceability Timeline - Lot #WH2024001</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <div className="font-semibold">Farm Harvest</div>
                  <div className="text-sm text-muted-foreground">
                    Dec 15, 2024 • Farmer: Rajesh Kumar, Punjab
                  </div>
                </div>
                <Badge variant="outline">Verified</Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <div className="font-semibold">AI Quality Grading</div>
                  <div className="text-sm text-muted-foreground">
                    Dec 16, 2024 • Grade A (96% confidence)
                  </div>
                </div>
                <Badge variant="outline">Verified</Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <div className="font-semibold">Warehouse Storage</div>
                  <div className="text-sm text-muted-foreground">
                    Dec 17, 2024 • OfBusiness Warehouse, Ludhiana
                  </div>
                </div>
                <Badge variant="outline">Verified</Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                <div className="flex-1">
                  <div className="font-semibold">Ready for Dispatch</div>
                  <div className="text-sm text-muted-foreground">
                    Available for immediate shipping
                  </div>
                </div>
                <Badge variant="secondary">Current</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {activeDemo === "landing" && <LandingPage />}
      {activeDemo === "farmer" && <FarmerApp />}
      {activeDemo === "procurement" && (
        <AIProcurementDashboard onBack={() => setActiveDemo("landing")} />
      )}
      {activeDemo === "buyer" && <BuyerPortal />}
    </div>
  );
}
