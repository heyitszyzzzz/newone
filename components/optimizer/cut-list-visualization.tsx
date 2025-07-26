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
    <Card className="p-4 sm:p-8 bg-white shadow-chrome border border-mt-gray-200">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-mt-black mb-4">Cut Plan Visualization</h2>
        <p className="text-mt-gray-600 text-sm sm:text-base">
          Review how pieces will be arranged on each board to minimize waste.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="text-center p-4 bg-mt-gray-50 rounded-lg">
          <div className="text-xl sm:text-2xl font-bold text-mt-black">{results.materialSummary.totalBoards}</div>
          <div className="text-xs sm:text-sm text-mt-gray-600">Total Boards</div>
        </div>
        <div className="text-center p-4 bg-mt-gray-50 rounded-lg">
          <div className="text-xl sm:text-2xl font-bold text-green-600">
            £{results.materialSummary.totalCost.toFixed(2)}
          </div>
          <div className="text-xs sm:text-sm text-mt-gray-600">Estimated Cost</div>
        </div>
        <div className="text-center p-4 bg-mt-gray-50 rounded-lg">
          <div className="text-xl sm:text-2xl font-bold text-orange-600">
            {results.materialSummary.wastePercentage}%
          </div>
          <div className="text-xs sm:text-sm text-mt-gray-600">Material Waste</div>
        </div>
      </div>

      {/* Board Layouts */}
      <div className="space-y-6 sm:space-y-8">
        {results.visualization.layouts.map((layout, boardIndex) => (
          <div key={boardIndex} className="border border-mt-gray-200 rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-mt-black mb-4">{layout.boardId}</h3>

            {/* SVG Visualization */}
            <div className="bg-mt-gray-50 p-2 sm:p-4 rounded-lg overflow-x-auto">
              <svg
                width="100%"
                height="300"
                viewBox="0 0 2440 1220"
                className="border border-mt-gray-300 bg-white min-w-[300px]"
                preserveAspectRatio="xMidYMid meet"
              >
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
                      fontSize="20"
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
      <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6 sm:pt-8">
        <Button
          variant="outline"
          onClick={onBack}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 h-12 bg-transparent order-2 sm:order-1"
        >
          Back
        </Button>
        <Button
          onClick={onNext}
          className="w-full sm:w-auto bg-mt-yellow hover:bg-mt-yellow-dark text-mt-black font-semibold px-6 sm:px-8 py-3 h-12 order-1 sm:order-2"
        >
          View Results
        </Button>
      </div>
    </Card>
  )
}
