"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Play, Target, Zap, Download } from "lucide-react"

interface OnboardingGuideProps {
  isOpen: boolean
  onClose: () => void
}

export function OnboardingGuide({ isOpen, onClose }: OnboardingGuideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Welcome to Material Optimizer",
      icon: Target,
      content: (
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-mt-yellow/20 rounded-full flex items-center justify-center mx-auto">
            <Target className="w-8 h-8 text-mt-yellow" />
          </div>
          <p className="text-mt-gray-600">
            This AI-powered tool helps you calculate exact material requirements and optimize cutting plans for your
            joinery projects.
          </p>
          <div className="bg-mt-gray-50 p-4 rounded-lg">
            <p className="text-sm text-mt-gray-700">
              <strong>Perfect for:</strong> Wardrobes, bookcases, kitchen cabinets, and custom furniture projects
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "How It Works",
      icon: Zap,
      content: (
        <div className="space-y-4">
          <div className="w-16 h-16 bg-mt-yellow/20 rounded-full flex items-center justify-center mx-auto">
            <Zap className="w-8 h-8 text-mt-yellow" />
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-mt-yellow rounded-full flex items-center justify-center text-xs font-bold text-mt-black">
                1
              </div>
              <p className="text-sm text-mt-gray-600">Enter your project details and dimensions</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-mt-yellow rounded-full flex items-center justify-center text-xs font-bold text-mt-black">
                2
              </div>
              <p className="text-sm text-mt-gray-600">Upload plans or sketches (optional)</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-mt-yellow rounded-full flex items-center justify-center text-xs font-bold text-mt-black">
                3
              </div>
              <p className="text-sm text-mt-gray-600">Select materials and board sizes</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-mt-yellow rounded-full flex items-center justify-center text-xs font-bold text-mt-black">
                4
              </div>
              <p className="text-sm text-mt-gray-600">Get optimized cut lists and cost estimates</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Key Benefits",
      icon: Download,
      content: (
        <div className="space-y-4">
          <div className="w-16 h-16 bg-mt-yellow/20 rounded-full flex items-center justify-center mx-auto">
            <Download className="w-8 h-8 text-mt-yellow" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 text-sm">Reduce Waste</h4>
              <p className="text-xs text-green-700">Minimize material waste with optimized cutting plans</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 text-sm">Save Money</h4>
              <p className="text-xs text-blue-700">Accurate cost estimates help you budget effectively</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 text-sm">Save Time</h4>
              <p className="text-xs text-purple-700">No more manual calculations or guesswork</p>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 text-sm">Professional Results</h4>
              <p className="text-xs text-orange-700">Download detailed cut lists and material summaries</p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-mt-black">Getting Started</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="mb-6">
            <div className="flex justify-center space-x-2 mb-4">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentStep ? "bg-mt-yellow" : "bg-mt-gray-300"
                  }`}
                />
              ))}
            </div>
            <h3 className="text-lg font-semibold text-mt-black mb-4 text-center">{steps[currentStep].title}</h3>
            {steps[currentStep].content}
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button
                onClick={onClose}
                className="bg-mt-yellow hover:bg-mt-yellow-dark text-mt-black flex items-center"
              >
                <Play className="w-4 h-4 mr-1" />
                Get Started
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                className="bg-mt-yellow hover:bg-mt-yellow-dark text-mt-black flex items-center"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}
