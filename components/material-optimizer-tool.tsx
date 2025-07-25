"use client"

import { useState } from "react"
import { ProjectDetailsForm } from "./optimizer/project-details-form"
import { FileUploadSection } from "./optimizer/file-upload-section"
import { MaterialSelection } from "./optimizer/material-selection"
import { CutListVisualization } from "./optimizer/cut-list-visualization"
import { ResultsSummary } from "./optimizer/results-summary"
import { Calculator, Upload, Settings, Eye, Download, CheckCircle } from "lucide-react"

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

  const steps = [
    { id: 1, title: "Project Details", icon: Calculator, description: "Enter project specifications" },
    { id: 2, title: "Upload Plans", icon: Upload, description: "Upload sketches or blueprints" },
    { id: 3, title: "Material Selection", icon: Settings, description: "Choose materials and board sizes" },
    { id: 4, title: "Visualization", icon: Eye, description: "Review cut plan layout" },
    { id: 5, title: "Results", icon: Download, description: "Download cut-list and summary" },
  ]

  const handleOptimize = async () => {
    setIsProcessing(true)

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

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
          { type: "18mm Birch Plywood (8x4ft)", quantity: 2, cost: 89.99 },
          { type: "6mm MDF (8x4ft)", quantity: 1, cost: 25.5 },
        ],
      },
      visualization: {
        layouts: [
          {
            boardId: "Board 1 - 18mm Birch Plywood",
            pieces: [
              { id: "side1", x: 0, y: 0, width: 600, height: 2000, label: "Side Panel 1" },
              { id: "side2", x: 620, y: 0, width: 600, height: 2000, label: "Side Panel 2" },
              { id: "top", x: 1240, y: 0, width: 580, height: 600, label: "Top Panel" },
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

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  currentStep >= step.id
                    ? "bg-mt-yellow text-mt-black"
                    : currentStep === step.id
                      ? "bg-mt-yellow/20 text-mt-yellow border border-mt-yellow/30"
                      : "bg-white text-mt-gray-600 border border-mt-gray-200"
                }`}
              >
                {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                <div className="hidden sm:block">
                  <p className="font-semibold text-sm">{step.title}</p>
                  <p className="text-xs opacity-75">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

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
            <CutListVisualization results={results} onNext={() => setCurrentStep(5)} onBack={() => setCurrentStep(3)} />
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
    </section>
  )
}
