"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileText, ImageIcon, X, AlertCircle } from "lucide-react"

interface FileUploadSectionProps {
  files: File[]
  onFilesChange: (files: File[]) => void
  onNext: () => void
  onBack: () => void
}

export function FileUploadSection({ files, onFilesChange, onNext, onBack }: FileUploadSectionProps) {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)

      const droppedFiles = Array.from(e.dataTransfer.files)
      const validFiles = droppedFiles.filter((file) => file.type.includes("image/") || file.type === "application/pdf")

      onFilesChange([...files, ...validFiles])
    },
    [files, onFilesChange],
  )

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      onFilesChange([...files, ...selectedFiles])
    }
  }

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index)
    onFilesChange(newFiles)
  }

  const getFileIcon = (file: File) => {
    if (file.type.includes("image/")) return <ImageIcon className="w-6 h-6 text-mt-yellow" />
    if (file.type === "application/pdf") return <FileText className="w-6 h-6 text-red-500" />
    return <FileText className="w-6 h-6 text-mt-gray-500" />
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <Card className="p-8 bg-white shadow-chrome border border-mt-gray-200">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-mt-black mb-4">Upload Plans & Sketches</h2>
        <p className="text-mt-gray-600">
          Upload architectural drawings, sketches, or reference images to help us understand your project better.
        </p>
      </div>

      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
          dragActive
            ? "border-mt-yellow bg-mt-yellow/5"
            : "border-mt-gray-300 hover:border-mt-yellow/50 hover:bg-mt-gray-50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          accept="image/*,.pdf"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        <Upload className="w-12 h-12 text-mt-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-mt-black mb-2">Drop files here or click to browse</h3>
        <p className="text-mt-gray-600 mb-4">Supports PDF, PNG, JPG files up to 10MB each</p>
        <Button
          variant="outline"
          className="border-mt-yellow text-mt-yellow hover:bg-mt-yellow hover:text-mt-black bg-transparent"
        >
          Choose Files
        </Button>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-mt-black mb-4">Uploaded Files</h3>
          <div className="space-y-3">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-mt-gray-50 rounded-lg border border-mt-gray-200"
              >
                <div className="flex items-center space-x-3">
                  {getFileIcon(file)}
                  <div>
                    <p className="font-medium text-mt-black">{file.name}</p>
                    <p className="text-sm text-mt-gray-600">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Optional Step</h4>
            <p className="text-sm text-blue-800">
              While uploading plans helps us provide more accurate estimates, you can skip this step if you don't have
              any files to upload.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Button variant="outline" onClick={onBack} className="px-8 py-3 bg-transparent">
          Back
        </Button>
        <Button onClick={onNext} className="bg-mt-yellow hover:bg-mt-yellow-dark text-mt-black font-semibold px-8 py-3">
          Next: Select Materials
        </Button>
      </div>
    </Card>
  )
}
