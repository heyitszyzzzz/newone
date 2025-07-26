"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { validateDimensions, validateProjectType, type ValidationError } from "./validation-utils"
import {
  Calculator,
  HelpCircle,
  Ruler,
  AlertCircle,
  Home,
  BookOpen,
  ChefHat,
  StepBackIcon as Stairs,
  Archive,
  Grid3X3,
  Laptop,
  Wrench,
} from "lucide-react"

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

interface ProjectDetailsFormProps {
  data: ProjectData
  onUpdate: (updates: Partial<ProjectData>) => void
  onNext: () => void
}

export function ProjectDetailsForm({ data, onUpdate, onNext }: ProjectDetailsFormProps) {
  const [errors, setErrors] = useState<ValidationError[]>([])
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const projectTypes = [
    { value: "Wardrobe", label: "Wardrobe", icon: Home, description: "Built-in or freestanding wardrobes" },
    { value: "Bookcase", label: "Bookcase", icon: BookOpen, description: "Shelving units and bookcases" },
    { value: "Kitchen Cabinets", label: "Kitchen Cabinets", icon: ChefHat, description: "Kitchen cabinet units" },
    { value: "Staircase", label: "Staircase", icon: Stairs, description: "Staircases and handrails" },
    { value: "Built-in Storage", label: "Built-in Storage", icon: Archive, description: "Custom storage solutions" },
    {
      value: "Shelving Unit",
      label: "Shelving Unit",
      icon: Grid3X3,
      description: "Wall-mounted or freestanding shelves",
    },
    { value: "Desk/Table", label: "Desk/Table", icon: Laptop, description: "Desks, tables, and workbenches" },
    { value: "Custom Furniture", label: "Custom Furniture", icon: Wrench, description: "Bespoke furniture pieces" },
  ]

  const handleDimensionChange = (dimension: keyof typeof data.dimensions, value: string) => {
    const numValue = Number.parseFloat(value) || 0
    const newDimensions = {
      ...data.dimensions,
      [dimension]: numValue,
    }

    onUpdate({ dimensions: newDimensions })
    setTouched((prev) => ({ ...prev, [dimension]: true }))

    // Validate dimensions in real-time
    const validation = validateDimensions(newDimensions)
    setErrors((prev) => prev.filter((e) => !["length", "width", "height"].includes(e.field)).concat(validation.errors))
  }

  const handleProjectTypeChange = (value: string) => {
    onUpdate({ projectType: value })
    setTouched((prev) => ({ ...prev, projectType: true }))

    // Validate project type
    const validation = validateProjectType(value)
    setErrors((prev) => prev.filter((e) => e.field !== "projectType").concat(validation.errors))
  }

  const handleNext = () => {
    // Validate all fields
    const dimensionValidation = validateDimensions(data.dimensions)
    const projectTypeValidation = validateProjectType(data.projectType)

    const allErrors = [...dimensionValidation.errors, ...projectTypeValidation.errors]
    setErrors(allErrors)

    // Mark all fields as touched
    setTouched({
      projectType: true,
      length: true,
      width: true,
      height: true,
    })

    if (allErrors.length === 0) {
      onNext()
    }
  }

  const getFieldError = (field: string) => errors.find((e) => e.field === field)
  const hasFieldError = (field: string) => touched[field] && getFieldError(field)

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Header with visual appeal */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-mt-yellow to-mt-yellow-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Calculator className="w-10 h-10 text-mt-black" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-mt-black mb-2">Project Details</h2>
          <p className="text-mt-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Tell us about your project so we can provide accurate material calculations and cutting plans.
          </p>
        </div>

        <Card className="p-4 sm:p-8 bg-gradient-to-br from-white to-mt-gray-50 shadow-chrome-lg border border-mt-gray-200">
          <div className="space-y-6">
            {/* Project Type Selection with Icons */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Label htmlFor="projectType" className="text-base font-semibold text-mt-black">
                  What are you building?
                </Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-4 h-4 text-mt-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Select the type of project you're working on. This helps us provide more accurate material
                      estimates.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>

              <Select value={data.projectType} onValueChange={handleProjectTypeChange}>
                <SelectTrigger className={`w-full h-14 ${hasFieldError("projectType") ? "border-red-500" : ""}`}>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center space-x-3 py-1">
                        <type.icon className="w-5 h-5 text-mt-yellow" />
                        <div>
                          <div className="font-medium">{type.label}</div>
                          <div className="text-xs text-mt-gray-500">{type.description}</div>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasFieldError("projectType") && (
                <Alert variant="destructive" className="mt-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{getFieldError("projectType")?.message}</AlertDescription>
                </Alert>
              )}
            </div>

            {/* Dimensions with Visual Indicators */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Ruler className="w-5 h-5 text-mt-yellow" />
                <Label className="text-base font-semibold text-mt-black">Overall Dimensions</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-4 h-4 text-mt-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enter the overall external dimensions of your project in millimeters (mm)</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Visual dimension guide */}
              <div className="bg-mt-gray-100 p-4 rounded-lg mb-4">
                <div className="relative">
                  <svg viewBox="0 0 300 200" className="w-full h-32 sm:h-40">
                    {/* 3D Box representation */}
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
                      </pattern>
                    </defs>

                    {/* Back face */}
                    <polygon points="50,50 200,50 230,20 80,20" fill="#f3f4f6" stroke="#6b7280" strokeWidth="2" />
                    {/* Right face */}
                    <polygon points="200,50 230,20 230,120 200,150" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
                    {/* Front face */}
                    <polygon points="50,50 200,50 200,150 50,150" fill="#f9fafb" stroke="#6b7280" strokeWidth="2" />

                    {/* Dimension labels */}
                    <text x="125" y="170" textAnchor="middle" className="text-xs fill-mt-gray-600">
                      Length
                    </text>
                    <text
                      x="40"
                      y="100"
                      textAnchor="middle"
                      className="text-xs fill-mt-gray-600"
                      transform="rotate(-90 40 100)"
                    >
                      Height
                    </text>
                    <text
                      x="240"
                      y="70"
                      textAnchor="middle"
                      className="text-xs fill-mt-gray-600"
                      transform="rotate(-45 240 70)"
                    >
                      Width
                    </text>

                    {/* Dimension lines */}
                    <line
                      x1="50"
                      y1="160"
                      x2="200"
                      y2="160"
                      stroke="#fbbf24"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                    <line x1="40" y1="50" x2="40" y2="150" stroke="#fbbf24" strokeWidth="2" />
                    <line x1="210" y1="40" x2="240" y2="110" stroke="#fbbf24" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="length" className="text-sm text-mt-gray-600 mb-2 block">
                    Length (mm)
                  </Label>
                  <Input
                    id="length"
                    type="number"
                    placeholder="e.g., 2000"
                    value={data.dimensions.length || ""}
                    onChange={(e) => handleDimensionChange("length", e.target.value)}
                    className={`w-full h-12 text-base ${hasFieldError("length") ? "border-red-500" : ""}`}
                  />
                  {hasFieldError("length") && (
                    <p className="text-red-500 text-xs mt-1">{getFieldError("length")?.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="width" className="text-sm text-mt-gray-600 mb-2 block">
                    Width (mm)
                  </Label>
                  <Input
                    id="width"
                    type="number"
                    placeholder="e.g., 600"
                    value={data.dimensions.width || ""}
                    onChange={(e) => handleDimensionChange("width", e.target.value)}
                    className={`w-full h-12 text-base ${hasFieldError("width") ? "border-red-500" : ""}`}
                  />
                  {hasFieldError("width") && (
                    <p className="text-red-500 text-xs mt-1">{getFieldError("width")?.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="height" className="text-sm text-mt-gray-600 mb-2 block">
                    Height (mm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="e.g., 2400"
                    value={data.dimensions.height || ""}
                    onChange={(e) => handleDimensionChange("height", e.target.value)}
                    className={`w-full h-12 text-base ${hasFieldError("height") ? "border-red-500" : ""}`}
                  />
                  {hasFieldError("height") && (
                    <p className="text-red-500 text-xs mt-1">{getFieldError("height")?.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Label htmlFor="description" className="text-base font-semibold text-mt-black">
                  Additional Details (Optional)
                </Label>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-4 h-4 text-mt-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Describe specific requirements like number of shelves, doors, drawers, or special features</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Textarea
                id="description"
                placeholder="Describe any specific requirements, number of shelves, doors, drawers, etc."
                value={data.description}
                onChange={(e) => onUpdate({ description: e.target.value })}
                rows={4}
                className="w-full text-base"
              />
            </div>

            {/* Next Button */}
            <div className="flex justify-end pt-6">
              <Button
                onClick={handleNext}
                className="w-full sm:w-auto bg-mt-yellow hover:bg-mt-yellow-dark text-mt-black font-semibold px-8 py-3 h-12 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Next: Upload Plans
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </TooltipProvider>
  )
}
