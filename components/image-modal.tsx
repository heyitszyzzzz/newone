"use client"

import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
}

export function ImageModal({ isOpen, onClose, src, alt }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-none bg-transparent flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
