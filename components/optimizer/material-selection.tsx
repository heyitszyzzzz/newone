"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"

interface MaterialSelectionProps {
  selectedMaterials: string[]
  boardSizes: string[]
  onMaterialsChange: (materials: string[]) => void
  onBoardSizesChange: (sizes: string[]) => void
  onOptimize: () => void
  onBack: () => void
  isProcessing: boolean
}

export function MaterialSelection({
  selectedMaterials,
  boardSizes,
  onMaterialsChange,
  onBoardSizesChange,
  onOptimize,
  onBack,
  isProcessing,
}: MaterialSelectionProps) {
  const materials = [
    {
      id: "birch-plywood-18mm",
      name: "18mm Birch Plywood",
      price: "£89.99",
      description: "High-quality hardwood plywood",
    },
    { id: "mdf-18mm", name: "18mm MDF", price: "£45.99", description: "Medium Density Fibreboard" },
    { id: "pine-18mm", name: "18mm Pine Board", price: "£35.99", description: "Softwood construction board" },
    { id: "oak-18mm", name: "18mm Oak Veneer", price: "£125.99", description: "Premium oak veneered board" },
    { id: "mdf-6mm", name: "6mm MDF", price: "£25.50", description: "Thin MDF for backing panels" },
    { id: "plywood-12mm", name: "12mm Plywood", price: "£55.99", description: "Multi-purpose plywood" },
  ]

  const standardSizes = [
    { id: "8x4", name: "8ft x 4ft (2440mm x 1220mm)", description: "Standard sheet size" },
    { id: "10x4", name: "10ft x 4ft (3050mm x 1220mm)", description: "Extended length sheet" },
    { id: "6x4", name: "6ft x 4ft (1830mm x 1220mm)", description: "Compact sheet size" },
    { id: "8x2", name: "8ft x 2ft (2440mm x 610mm)", description: "Half-width sheet" },
  ]

  const handleMaterialToggle = (materialId: string) => {
    if (selectedMaterials.includes(materialId)) {
      onMaterialsChange(selectedMaterials.filter((id) => id !== materialId))
    } else {
      onMaterialsChange([...selectedMaterials, materialId])
    }
  }

  const handleSizeToggle = (sizeId: string) => {
    if (boardSizes.includes(sizeId)) {
      onBoardSizesChange(boardSizes.filter((id) => id !== sizeId))
    } else {
      onBoardSizesChange([...boardSizes, sizeId])
    }
  }

  const isFormValid = selectedMaterials.length > 0 && boardSizes.length > 0

  return (
    <Card className="p-8 bg-white shadow-chrome border border-mt-gray-200">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-mt-black mb-4">Material Selection</h2>
        <p className="text-mt-gray-600">Choose the materials and board sizes you'd like to use for your project.</p>
      </div>

      {/* Material Types */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-mt-black mb-4">Material Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {materials.map((material) => (
            <div
              key={material.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                selectedMaterials.includes(material.id)
                  ? "border-mt-yellow bg-mt-yellow/5"
                  : "border-mt-gray-200 hover:border-mt-yellow/50"
              }`}
              onClick={() => handleMaterialToggle(material.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    checked={selectedMaterials.includes(material.id)}
                    onChange={() => handleMaterialToggle(material.id)}
                    className="mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-mt-black">{material.name}</h4>
                    <p className="text-sm text-mt-gray-600 mb-2">{material.description}</p>
                    <Badge variant="secondary" className="bg-mt-yellow/20 text-mt-black">
                      {material.price} per sheet
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Board Sizes */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-mt-black mb-4">Available Board Sizes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {standardSizes.map((size) => (
            <div
              key={size.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                boardSizes.includes(size.id)
                  ? "border-mt-yellow bg-mt-yellow/5"
                  : "border-mt-gray-200 hover:border-mt-yellow/50"
              }`}
              onClick={() => handleSizeToggle(size.id)}
            >
              <div className="flex items-start space-x-3">
                <Checkbox
                  checked={boardSizes.includes(size.id)}
                  onChange={() => handleSizeToggle(size.id)}
                  className="mt-1"
                />
                <div>
                  <h4 className="font-semibold text-mt-black">{size.name}</h4>
                  <p className="text-sm text-mt-gray-600">{size.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Button variant="outline" onClick={onBack} disabled={isProcessing} className="px-8 py-3 bg-transparent">
          Back
        </Button>
        <Button
          onClick={onOptimize}
          disabled={!isFormValid || isProcessing}
          className="bg-mt-yellow hover:bg-mt-yellow-dark text-mt-black font-semibold px-8 py-3"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Optimizing...
            </>
          ) : (
            "Optimize Materials"
          )}
        </Button>
      </div>
    </Card>
  )
}
