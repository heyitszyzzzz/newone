"use client"

import { useState } from "react"
import { ProjectDetailsForm } from "./optimizer/project-details-form"
import { FileUploadSection } from "./optimizer/file-upload-section"
import { MaterialSelection } from "./optimizer/material-selection"
import { CutListVisualization } from "./optimizer/cut-list-visualization"
import { ResultsSummary } from "./optimizer/results-summary"
import { OnboardingGuide } from "./optimizer/onboarding-guide"
import { ErrorBoundary } from "./optimizer/error-boundary"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Calculator, Upload, Settings, Eye, Download, CheckCircle, HelpCircle, Sparkles } from "lucide-react"

interface ProjectData {
  projectType: string
  dimensions: {
    length: number
    width: number
    height: number
  }
  description: string
  files: File[]
  selectedMaterials: string[]
  boardSizes: string[]
}

interface OptimizationResults {
  cutList: Array<{
    piece: string
    dimensions: string
    quantity: number
    material: string
  }>
  materialSummary: {
    totalBoards: number
    totalCost: number
    wastePercentage: number
    materials: Array<{
      type: string
      quantity: number
      cost: number
    }>
  }
  visualization: {
    layouts: Array<{
      boardId: string
      pieces: Array<{
        id: string
        x: number
        y: number
        width: number
        height: number
        label: string
      }>
    }>
  }
}

export function MaterialOptimizerTool() {
  const [currentStep, setCurrentStep] = useState(1)
  const [projectData, setProjectData] = useState<ProjectData>({
    projectType: "",
    dimensions: { length: 0, width: 0, height: 0 },
    description: "",
    files: [],
    selectedMaterials: [],
    boardSizes: [],
  })
  const [results, setResults] = useState<OptimizationResults | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [processingStep, setProcessingStep] = useState("")
  const [processingProgress, setProcessingProgress] = useState(0)

  const steps = [
    {
      id: 1,
      title: "Project Details",
      icon: Calculator,
      description: "Enter project specifications",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Upload Plans",
      icon: Upload,
      description: "Upload sketches or blueprints",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Material Selection",
      icon: Settings,
      description: "Choose materials and board sizes",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "Visualization",
      icon: Eye,
      description: "Review cut plan layout",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      title: "Results",
      icon: Download,
      description: "Download cut-list and summary",
      color: "from-red-500 to-red-600",
    },
  ]

  const handleOptimize = async () => {
    setIsProcessing(true)
    setProcessingProgress(0)

    const processingSteps = [
      { message: "Analyzing project dimensions...", duration: 800 },
      { message: "Processing uploaded plans...", duration: 600 },
      { message: "Calculating optimal cuts...", duration: 1000 },
      { message: "Minimizing material waste...", duration: 700 },
      { message: "Generating visualization...", duration: 500 },
      { message: "Finalizing results...", duration: 400 },
    ]

    for (let i = 0; i < processingSteps.length; i++) {
      setProcessingStep(processingSteps[i].message)
      setProcessingProgress(((i + 1) / processingSteps.length) * 100)
      await new Promise((resolve) => setTimeout(resolve, processingSteps[i].duration))
    }

    // Mock results - in real implementation, this would call an AI service
    const mockResults: OptimizationResults = {
      cutList: [
        { piece: "Side Panel", dimensions: "600mm x 2000mm", quantity: 2, material: "18mm Birch Plywood" },
        { piece: "Top/Bottom", dimensions: "580mm x 600mm", quantity: 2, material: "18mm Birch Plywood" },
        { piece: "Back Panel", dimensions: "564mm x 1964mm", quantity: 1, material: "6mm MDF" },
        { piece: "Shelves", dimensions: "564mm x 580mm", quantity: 3, material: "18mm Birch Plywood" },
        { piece: "Door", dimensions: "582mm x 1000mm", quantity: 2, material: "18mm Birch Plywood" },
      ],
      materialSummary: {
        totalBoards: 3,
        totalCost: 245.5,
        wastePercentage: 12.5,
        materials: [
          { type: "18mm Birch Plywood (8x4ft)", quantity: 2, cost: 189.98 },
          { type: "6mm MDF (8x4ft)", quantity: 1, cost: 25.5 },
        ],
      },
      visualization: {
        layouts: [
          {
            boardId: "Board 1 - 18mm Birch Plywood",
            pieces: [
              { id: "side1", x: 0, y: 0, width: 600, height: 2000, label: "Side 1" },
              { id: "side2", x: 620, y: 0, width: 600, height: 2000, label: "Side 2" },
              { id: "top", x: 1240, y: 0, width: 580, height: 600, label: "Top" },
            ],
          },
        ],
      },
    }

    setResults(mockResults)
    setIsProcessing(false)
    setCurrentStep(5)
  }

  const updateProjectData = (updates: Partial<ProjectData>) => {
    setProjectData((prev) => ({ ...prev, ...updates }))
  }

  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100

  return (
    <ErrorBoundary>
      <section className="py-12 sm:py-20 bg-gradient-to-br from-mt-gray-50 via-white to-mt-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section with Enhanced Visuals */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-mt-yellow via-mt-yellow-dark to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mt-black mb-4">
              AI-Powered Material Optimizer
            </h1>
            <p className="text-lg sm:text-xl text-mt-gray-600 max-w-3xl mx-auto mb-8">
              Get precise material calculations, optimized cutting plans, and cost estimates for your joinery projects
              in minutes.
            </p>

            {/* Help Button */}
            <Button
              variant="outline"
              onClick={() => setShowOnboarding(true)}
              className="mb-8 border-mt-yellow text-mt-yellow hover:bg-mt-yellow hover:text-mt-black"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              How it works
            </Button>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8 sm:mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-mt-gray-600">Progress</span>
                  <span className="text-sm font-medium text-mt-gray-600">{Math.round(progressPercentage)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>

              {/* Step Indicators */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all text-xs sm:text-sm ${
                      currentStep > step.id
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : currentStep === step.id
                          ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                          : "bg-white text-mt-gray-600 border border-mt-gray-200"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <step.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    <div className="hidden sm:block">
                      <p className="font-semibold text-xs sm:text-sm">{step.title}</p>
                      <p className="text-xs opacity-75 hidden lg:block">{step.description}</p>
                    </div>
                    <div className="sm:hidden">
                      <p className="font-semibold text-xs">{step.id}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Processing Overlay */}
          {isProcessing && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-mt-yellow to-mt-yellow-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-mt-black animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-mt-black mb-2">AI Processing</h3>
                  <p className="text-mt-gray-600 mb-6">{processingStep}</p>
                  <Progress value={processingProgress} className="h-3 mb-4" />
                  <p className="text-sm text-mt-gray-500">{Math.round(processingProgress)}% complete</p>
                </div>
              </div>
            </div>
          )}

          {/* Step Content */}
          <div className="max-w-4xl mx-auto">
            {currentStep === 1 && (
              <ProjectDetailsForm data={projectData} onUpdate={updateProjectData} onNext={() => setCurrentStep(2)} />
            )}

            {currentStep === 2 && (
              <FileUploadSection
                files={projectData.files}
                onFilesChange={(files) => updateProjectData({ files })}
                onNext={() => setCurrentStep(3)}
                onBack={() => setCurrentStep(1)}
              />
            )}

            {currentStep === 3 && (
              <MaterialSelection
                selectedMaterials={projectData.selectedMaterials}
                boardSizes={projectData.boardSizes}
                onMaterialsChange={(selectedMaterials) => updateProjectData({ selectedMaterials })}
                onBoardSizesChange={(boardSizes) => updateProjectData({ boardSizes })}
                onOptimize={handleOptimize}
                onBack={() => setCurrentStep(2)}
                isProcessing={isProcessing}
              />
            )}

            {currentStep === 4 && results && (
              <CutListVisualization
                results={results}
                onNext={() => setCurrentStep(5)}
                onBack={() => setCurrentStep(3)}
              />
            )}

            {currentStep === 5 && results && (
              <ResultsSummary
                results={results}
                projectData={projectData}
                onBack={() => setCurrentStep(4)}
                onStartNew={() => {
                  setCurrentStep(1)
                  setResults(null)
                  setProjectData({
                    projectType: "",
                    dimensions: { length: 0, width: 0, height: 0 },
                    description: "",
                    files: [],
                    selectedMaterials: [],
                    boardSizes: [],
                  })
                }}
              />
            )}
          </div>
        </div>

        {/* Onboarding Guide */}
        <OnboardingGuide isOpen={showOnboarding} onClose={() => setShowOnboarding(false)} />
      </section>
    </ErrorBoundary>
  )
}
