"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { materialPricingService, type MaterialPrice } from "./material-pricing-service"
import { validateMaterialSelection, type ValidationError } from "./validation-utils"
import {
  Loader2,
  Settings,
  HelpCircle,
  Edit3,
  RefreshCw,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Package,
  Ruler,
} from "lucide-react"

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
  const [materials, setMaterials] = useState<MaterialPrice[]>([])
  const [editingPrice, setEditingPrice] = useState<string | null>(null)
  const [tempPrice, setTempPrice] = useState<string>("")
  const [isUpdatingPrices, setIsUpdatingPrices] = useState(false)
  const [errors, setErrors] = useState<ValidationError[]>([])
  const [showPriceEditor, setShowPriceEditor] = useState(false)

  const standardSizes = [
    {
      id: "8x4",
      name: "8ft x 4ft",
      description: "2440mm x 1220mm - Standard sheet",
      icon: Package,
      popular: true,
    },
    {
      id: "10x4",
      name: "10ft x 4ft",
      description: "3050mm x 1220mm - Extended length",
      icon: Package,
      popular: false,
    },
    {
      id: "6x4",
      name: "6ft x 4ft",
      description: "1830mm x 1220mm - Compact size",
      icon: Package,
      popular: false,
    },
    {
      id: "8x2",
      name: "8ft x 2ft",
      description: "2440mm x 610mm - Half-width",
      icon: Package,
      popular: false,
    },
  ]

  useEffect(() => {
    setMaterials(materialPricingService.getAllPrices())
  }, [])

  const handleMaterialToggle = (materialId: string) => {
    const newSelection = selectedMaterials.includes(materialId)
      ? selectedMaterials.filter((id) => id !== materialId)
      : [...selectedMaterials, materialId]

    onMaterialsChange(newSelection)

    // Validate selection
    const validation = validateMaterialSelection(newSelection, boardSizes)
    setErrors((prev) =>
      prev.filter((e) => e.field !== "materials").concat(validation.errors.filter((e) => e.field === "materials")),
    )
  }

  const handleSizeToggle = (sizeId: string) => {
    const newSelection = boardSizes.includes(sizeId)
      ? boardSizes.filter((id) => id !== sizeId)
      : [...boardSizes, sizeId]

    onBoardSizesChange(newSelection)

    // Validate selection
    const validation = validateMaterialSelection(selectedMaterials, newSelection)
    setErrors((prev) =>
      prev.filter((e) => e.field !== "boardSizes").concat(validation.errors.filter((e) => e.field === "boardSizes")),
    )
  }

  const handlePriceEdit = (materialId: string, currentPrice: number) => {
    setEditingPrice(materialId)
    setTempPrice(currentPrice.toString())
  }

  const handlePriceSave = (materialId: string) => {
    const newPrice = Number.parseFloat(tempPrice)
    if (!isNaN(newPrice) && newPrice > 0) {
      materialPricingService.updatePrice({
        materialId,
        newPrice,
        source: "user",
      })
      setMaterials(materialPricingService.getAllPrices())
    }
    setEditingPrice(null)
    setTempPrice("")
  }

  const handlePriceCancel = () => {
    setEditingPrice(null)
    setTempPrice("")
  }

  const handleUpdatePrices = async () => {
    setIsUpdatingPrices(true)
    try {
      await materialPricingService.fetchLatestPrices()
      setMaterials(materialPricingService.getAllPrices())
    } catch (error) {
      console.error("Failed to update prices:", error)
    } finally {
      setIsUpdatingPrices(false)
    }
  }

  const handleOptimize = () => {
    const validation = validateMaterialSelection(selectedMaterials, boardSizes)
    setErrors(validation.errors)

    if (validation.isValid) {
      onOptimize()
    }
  }

  const getFieldError = (field: string) => errors.find((e) => e.field === field)

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-mt-yellow to-mt-yellow-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Settings className="w-10 h-10 text-mt-black" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-mt-black mb-2">Material Selection</h2>
          <p className="text-mt-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Choose the materials and board sizes you'd like to use for your project.
          </p>
        </div>

        <Card className="p-4 sm:p-8 bg-gradient-to-br from-white to-mt-gray-50 shadow-chrome-lg border border-mt-gray-200">
          <div className="space-y-8">
            {/* Price Update Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-3">
                <DollarSign className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 text-sm">Material Prices</h3>
                  <p className="text-xs text-blue-800">
                    Prices are updated regularly. You can also customize prices for your local suppliers.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPriceEditor(!showPriceEditor)}
                  className="text-blue-700 border-blue-300 hover:bg-blue-100"
                >
                  <Edit3 className="w-4 h-4 mr-1" />
                  Edit Prices
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleUpdatePrices}
                  disabled={isUpdatingPrices}
                  className="text-blue-700 border-blue-300 hover:bg-blue-100 bg-transparent"
                >
                  {isUpdatingPrices ? (
                    <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                  ) : (
                    <RefreshCw className="w-4 h-4 mr-1" />
                  )}
                  Update Prices
                </Button>
              </div>
            </div>

            {/* Material Types */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Package className="w-5 h-5 text-mt-yellow" />
                <h3 className="text-lg sm:text-xl font-semibold text-mt-black">Material Types</h3>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-4 h-4 text-mt-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Select the materials you want to use. You can choose multiple materials for different parts of
                      your project.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {getFieldError("materials") && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{getFieldError("materials")?.message}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-1 gap-4">
                {materials.map((material) => (
                  <div
                    key={material.id}
                    className={`p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md ${
                      selectedMaterials.includes(material.id)
                        ? "border-mt-yellow bg-mt-yellow/5 shadow-md"
                        : "border-mt-gray-200 hover:border-mt-yellow/50 bg-white"
                    }`}
                    onClick={() => handleMaterialToggle(material.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        checked={selectedMaterials.includes(material.id)}
                        readOnly
                        className="mt-1 flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h4 className="font-semibold text-mt-black text-sm sm:text-base">{material.name}</h4>
                            <p className="text-xs sm:text-sm text-mt-gray-600 mb-2">{material.unit}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {editingPrice === material.id && showPriceEditor ? (
                              <div className="flex items-center space-x-2">
                                <Input
                                  type="number"
                                  value={tempPrice}
                                  onChange={(e) => setTempPrice(e.target.value)}
                                  className="w-20 h-8 text-sm"
                                  step="0.01"
                                />
                                <Button size="sm" onClick={() => handlePriceSave(material.id)} className="h-8 px-2">
                                  <CheckCircle className="w-3 h-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={handlePriceCancel}
                                  className="h-8 px-2 bg-transparent"
                                >
                                  ×
                                </Button>
                              </div>
                            ) : (
                              <>
                                <Badge variant="secondary" className="bg-mt-yellow/20 text-mt-black text-xs">
                                  £{material.basePrice.toFixed(2)}
                                </Badge>
                                {showPriceEditor && (
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handlePriceEdit(material.id, material.basePrice)
                                    }}
                                    className="h-8 w-8 p-0"
                                  >
                                    <Edit3 className="w-3 h-3" />
                                  </Button>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                        {material.supplier && (
                          <p className="text-xs text-mt-gray-500 mt-1">Supplier: {material.supplier}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Board Sizes */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Ruler className="w-5 h-5 text-mt-yellow" />
                <h3 className="text-lg sm:text-xl font-semibold text-mt-black">Available Board Sizes</h3>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-4 h-4 text-mt-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Select the board sizes available from your supplier. The optimizer will use these to create the
                      most efficient cutting plan.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {getFieldError("boardSizes") && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{getFieldError("boardSizes")?.message}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {standardSizes.map((size) => (
                  <div
                    key={size.id}
                    className={`p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md relative ${
                      boardSizes.includes(size.id)
                        ? "border-mt-yellow bg-mt-yellow/5 shadow-md"
                        : "border-mt-gray-200 hover:border-mt-yellow/50 bg-white"
                    }`}
                    onClick={() => handleSizeToggle(size.id)}
                  >
                    {size.popular && (
                      <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs">Popular</Badge>
                    )}
                    <div className="flex items-start space-x-3">
                      <Checkbox checked={boardSizes.includes(size.id)} readOnly className="mt-1 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <size.icon className="w-4 h-4 text-mt-yellow" />
                          <h4 className="font-semibold text-mt-black text-sm sm:text-base">{size.name}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-mt-gray-600">{size.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6 border-t border-mt-gray-200">
              <Button
                variant="outline"
                onClick={onBack}
                disabled={isProcessing}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 h-12 bg-transparent order-2 sm:order-1"
              >
                Back
              </Button>
              <Button
                onClick={handleOptimize}
                disabled={isProcessing || errors.length > 0}
                className="w-full sm:w-auto bg-mt-yellow hover:bg-mt-yellow-dark text-mt-black font-semibold px-6 sm:px-8 py-3 h-12 order-1 sm:order-2 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Optimizing Materials...
                  </>
                ) : (
                  "Optimize Materials"
                )}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </TooltipProvider>
  )
}
