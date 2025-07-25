"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, RefreshCw, Lightbulb } from "lucide-react"

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

interface ResultsSummaryProps {
  results: OptimizationResults
  projectData: ProjectData
  onBack: () => void
  onStartNew: () => void
}

export function ResultsSummary({ results, projectData, onBack, onStartNew }: ResultsSummaryProps) {
  const downloadCSV = () => {
    const csvContent = [
      ["Piece", "Dimensions", "Quantity", "Material"],
      ...results.cutList.map((item) => [item.piece, item.dimensions, item.quantity.toString(), item.material]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${projectData.projectType}_cutlist.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const downloadPDF = () => {
    // In a real implementation, this would generate a proper PDF
    alert("PDF download would be implemented with a PDF generation library")
  }

  const suggestions = [
    "Consider using 12mm plywood for non-structural shelves to reduce cost",
    "Grouping similar cuts can improve efficiency during construction",
    "Leave 3-5mm extra on length for final trimming and fitting",
  ]

  return (
    <div className="space-y-8">
      {/* Summary Card */}
      <Card className="p-8 bg-white shadow-chrome border border-mt-gray-200">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-mt-black mb-4">Material Summary & Cut List</h2>
          <p className="text-mt-gray-600">
            Your optimized material plan is ready. Download the cut list and start your project!
          </p>
        </div>

        {/* Project Overview */}
        <div className="mb-8 p-6 bg-mt-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-mt-black mb-4">Project Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-mt-gray-600">Project Type:</span>
              <p className="font-semibold text-mt-black">{projectData.projectType}</p>
            </div>
            <div>
              <span className="text-sm text-mt-gray-600">Dimensions:</span>
              <p className="font-semibold text-mt-black">
                {projectData.dimensions.length} × {projectData.dimensions.width} × {projectData.dimensions.height}mm
              </p>
            </div>
          </div>
        </div>

        {/* Material Summary */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-mt-black mb-4">Material Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{results.materialSummary.totalBoards}</div>
              <div className="text-sm text-blue-800">Total Boards</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-600">£{results.materialSummary.totalCost.toFixed(2)}</div>
              <div className="text-sm text-green-800">Estimated Cost</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-2xl font-bold text-orange-600">{results.materialSummary.wastePercentage}%</div>
              <div className="text-sm text-orange-800">Material Waste</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-600">{results.cutList.length}</div>
              <div className="text-sm text-purple-800">Total Pieces</div>
            </div>
          </div>

          {/* Material Breakdown */}
          <div className="space-y-3">
            {results.materialSummary.materials.map((material, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-white border border-mt-gray-200 rounded-lg"
              >
                <div>
                  <h4 className="font-semibold text-mt-black">{material.type}</h4>
                  <p className="text-sm text-mt-gray-600">Quantity: {material.quantity}</p>
                </div>
                <Badge variant="secondary" className="bg-mt-yellow/20 text-mt-black">
                  £{material.cost.toFixed(2)}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Cut List */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-mt-black mb-4">Detailed Cut List</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-mt-gray-200">
              <thead>
                <tr className="bg-mt-gray-50">
                  <th className="border border-mt-gray-200 px-4 py-3 text-left font-semibold text-mt-black">Piece</th>
                  <th className="border border-mt-gray-200 px-4 py-3 text-left font-semibold text-mt-black">
                    Dimensions
                  </th>
                  <th className="border border-mt-gray-200 px-4 py-3 text-left font-semibold text-mt-black">Qty</th>
                  <th className="border border-mt-gray-200 px-4 py-3 text-left font-semibold text-mt-black">
                    Material
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.cutList.map((item, index) => (
                  <tr key={index} className="hover:bg-mt-gray-50">
                    <td className="border border-mt-gray-200 px-4 py-3 text-mt-black">{item.piece}</td>
                    <td className="border border-mt-gray-200 px-4 py-3 text-mt-black">{item.dimensions}</td>
                    <td className="border border-mt-gray-200 px-4 py-3 text-mt-black">{item.quantity}</td>
                    <td className="border border-mt-gray-200 px-4 py-3 text-mt-gray-600">{item.material}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Download Options */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-mt-black mb-4">Download Options</h3>
          <div className="flex flex-wrap gap-4">
            <Button onClick={downloadCSV} className="bg-green-600 hover:bg-green-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              Download CSV
            </Button>
            <Button onClick={downloadPDF} className="bg-red-600 hover:bg-red-700 text-white">
              <FileText className="w-4 h-4 mr-2" />
              Download PDF Report
            </Button>
          </div>
        </div>

        {/* Suggestions */}
        <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <Lightbulb className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Optimization Suggestions</h3>
              <ul className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="text-sm text-blue-800 flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" onClick={onBack} className="px-8 py-3 bg-transparent">
            Back to Visualization
          </Button>
          <Button
            onClick={onStartNew}
            className="bg-mt-yellow hover:bg-mt-yellow-dark text-mt-black font-semibold px-8 py-3"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Start New Project
          </Button>
        </div>
      </Card>
    </div>
  )
}
