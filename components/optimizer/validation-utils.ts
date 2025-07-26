export interface ValidationError {
  field: string
  message: string
  type: "required" | "invalid" | "range" | "format"
}

export interface ValidationResult {
  isValid: boolean
  errors: ValidationError[]
}

export function validateDimensions(dimensions: { length: number; width: number; height: number }): ValidationResult {
  const errors: ValidationError[] = []

  // Check for required fields
  if (!dimensions.length || dimensions.length <= 0) {
    errors.push({
      field: "length",
      message: "Length is required and must be greater than 0",
      type: "required",
    })
  }

  if (!dimensions.width || dimensions.width <= 0) {
    errors.push({
      field: "width",
      message: "Width is required and must be greater than 0",
      type: "required",
    })
  }

  if (!dimensions.height || dimensions.height <= 0) {
    errors.push({
      field: "height",
      message: "Height is required and must be greater than 0",
      type: "required",
    })
  }

  // Check for reasonable ranges (in mm)
  if (dimensions.length > 0 && (dimensions.length < 10 || dimensions.length > 10000)) {
    errors.push({
      field: "length",
      message: "Length must be between 10mm and 10,000mm (10m)",
      type: "range",
    })
  }

  if (dimensions.width > 0 && (dimensions.width < 10 || dimensions.width > 10000)) {
    errors.push({
      field: "width",
      message: "Width must be between 10mm and 10,000mm (10m)",
      type: "range",
    })
  }

  if (dimensions.height > 0 && (dimensions.height < 10 || dimensions.height > 10000)) {
    errors.push({
      field: "height",
      message: "Height must be between 10mm and 10,000mm (10m)",
      type: "range",
    })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export function validateProjectType(projectType: string): ValidationResult {
  const errors: ValidationError[] = []

  if (!projectType || projectType.trim() === "") {
    errors.push({
      field: "projectType",
      message: "Please select a project type",
      type: "required",
    })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export function validateMaterialSelection(materials: string[], boardSizes: string[]): ValidationResult {
  const errors: ValidationError[] = []

  if (materials.length === 0) {
    errors.push({
      field: "materials",
      message: "Please select at least one material type",
      type: "required",
    })
  }

  if (boardSizes.length === 0) {
    errors.push({
      field: "boardSizes",
      message: "Please select at least one board size",
      type: "required",
    })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export function validateFileUpload(files: File[]): ValidationResult {
  const errors: ValidationError[] = []
  const maxFileSize = 10 * 1024 * 1024 // 10MB
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "application/pdf"]

  files.forEach((file, index) => {
    if (file.size > maxFileSize) {
      errors.push({
        field: `file-${index}`,
        message: `File "${file.name}" is too large. Maximum size is 10MB.`,
        type: "range",
      })
    }

    if (!allowedTypes.includes(file.type)) {
      errors.push({
        field: `file-${index}`,
        message: `File "${file.name}" has an unsupported format. Please use JPG, PNG, GIF, or PDF.`,
        type: "format",
      })
    }
  })

  return {
    isValid: errors.length === 0,
    errors,
  }
}
