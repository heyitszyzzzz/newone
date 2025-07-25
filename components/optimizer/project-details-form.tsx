"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
  const projectTypes = [
    "Wardrobe",
    "Bookcase",
    "Kitchen Cabinets",
    "Staircase",
    "Built-in Storage",
    "Shelving Unit",
    "Desk/Table",
    "Custom Furniture",
    "Other",
  ]

  const handleDimensionChange = (dimension: keyof typeof data.dimensions, value: string) => {
    const numValue = Number.parseFloat(value) || 0
    onUpdate({
      dimensions: {
        ...data.dimensions,
        [dimension]: numValue,
      },
    })
  }

  const isFormValid = data.projectType && data.dimensions.length > 0 && data.dimensions.width > 0

  return (
    <Card className="p-8 bg-white shadow-chrome border border-mt-gray-200">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-mt-black mb-4">Project Details</h2>
        <p className="text-mt-gray-600">Tell us about your project so we can provide accurate material calculations.</p>
      </div>

      <div className="space-y-6">
        {/* Project Type */}
        <div>
          <Label htmlFor="projectType" className="text-base font-semibold text-mt-black mb-2 block">
            What are you building?
          </Label>
          <Select value={data.projectType} onValueChange={(value) => onUpdate({ projectType: value })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Dimensions */}
        <div>
          <Label className="text-base font-semibold text-mt-black mb-4 block">Overall Dimensions (mm)</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="length" className="text-sm text-mt-gray-600 mb-1 block">
                Length
              </Label>
              <Input
                id="length"
                type="number"
                placeholder="e.g., 2000"
                value={data.dimensions.length || ""}
                onChange={(e) => handleDimensionChange("length", e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="width" className="text-sm text-mt-gray-600 mb-1 block">
                Width
              </Label>
              <Input
                id="width"
                type="number"
                placeholder="e.g., 600"
                value={data.dimensions.width || ""}
                onChange={(e) => handleDimensionChange("width", e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="height" className="text-sm text-mt-gray-600 mb-1 block">
                Height
              </Label>
              <Input
                id="height"
                type="number"
                placeholder="e.g., 2400"
                value={data.dimensions.height || ""}
                onChange={(e) => handleDimensionChange("height", e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description" className="text-base font-semibold text-mt-black mb-2 block">
            Additional Details (Optional)
          </Label>
          <Textarea
            id="description"
            placeholder="Describe any specific requirements, number of shelves, doors, drawers, etc."
            value={data.description}
            onChange={(e) => onUpdate({ description: e.target.value })}
            rows={4}
            className="w-full"
          />
        </div>

        {/* Next Button */}
        <div className="flex justify-end pt-6">
          <Button
            onClick={onNext}
            disabled={!isFormValid}
            className="bg-mt-yellow hover:bg-mt-yellow-dark text-mt-black font-semibold px-8 py-3"
          >
            Next: Upload Plans
          </Button>
        </div>
      </div>
    </Card>
  )
}
