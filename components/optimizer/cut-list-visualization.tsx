"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

interface CutListVisualizationProps {
  results: OptimizationResults
  onNext: () => void
  onBack: () => void
}

export function CutListVisualization({ results, onNext, onBack }: CutListVisualizationProps) {
  const colors = [
    "#FFEB3B",
    "#FF9800",
    "#4CAF50",
    "#2196F3",
    "#9C27B0",
    "#F44336",
    "#00BCD4",
    "#8BC34A",
    "#FF5722",
    "#607D8B",
  ]

  return (
    <Card className="p-8 bg-white shadow-chrome border border-mt-gray-200">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-mt-black mb-4">Cut Plan Visualization</h2>
        <p className="text-mt-gray-600">Review how pieces will be arranged on each board to minimize waste.</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-4 bg-mt-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-mt-black">{results.materialSummary.totalBoards}</div>
          <div className="text-sm text-mt-gray-600">Total Boards</div>
        </div>
        <div className="text-center p-4 bg-mt-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">£{results.materialSummary.totalCost.toFixed(2)}</div>
          <div className="text-sm text-mt-gray-600">Estimated Cost</div>
        </div>
        <div className="text-center p-4 bg-mt-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">{results.materialSummary.wastePercentage}%</div>
          <div className="text-sm text-mt-gray-600">Material Waste</div>
        </div>
      </div>

      {/* Board Layouts */}
      <div className="space-y-8">
        {results.visualization.layouts.map((layout, boardIndex) => (
          <div key={boardIndex} className="border border-mt-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-mt-black mb-4">{layout.boardId}</h3>

            {/* SVG Visualization */}
            <div className="bg-mt-gray-50 p-4 rounded-lg overflow-x-auto">
              <svg width="800" height="400" viewBox="0 0 2440 1220" className="border border-mt-gray-300 bg-white">
                {/* Board outline */}
                <rect x="0" y="0" width="2440" height="1220" fill="none" stroke="#374151" strokeWidth="4" />

                {/* Pieces */}
                {layout.pieces.map((piece, pieceIndex) => (
                  <g key={piece.id}>
                    <rect
                      x={piece.x}
                      y={piece.y}
                      width={piece.width}
                      height={piece.height}
                      fill={colors[pieceIndex % colors.length]}
                      stroke="#1F2937"
                      strokeWidth="2"
                      opacity="0.8"
                    />
                    <text
                      x={piece.x + piece.width / 2}
                      y={piece.y + piece.height / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="24"
                      fontWeight="bold"
                      fill="#1F2937"
                    >
                      {piece.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Piece Legend */}
            <div className="mt-4 flex flex-wrap gap-2">
              {layout.pieces.map((piece, pieceIndex) => (
                <Badge
                  key={piece.id}
                  variant="secondary"
                  className="text-xs"
                  style={{ backgroundColor: colors[pieceIndex % colors.length] + "40" }}
                >
                  {piece.label}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Button variant="outline" onClick={onBack} className="px-8 py-3 bg-transparent">
          Back
        </Button>
        <Button onClick={onNext} className="bg-mt-yellow hover:bg-mt-yellow-dark text-mt-black font-semibold px-8 py-3">
          View Results
        </Button>
      </div>
    </Card>
  )
}
