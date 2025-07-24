"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageModal } from "./image-modal"

export function GallerySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" })

  const galleryImages = [
    { src: "/images/gallery-modern-bathroom.jpg", alt: "Modern Bathroom Renovation" },
    { src: "/images/gallery-completed-decking.jpg", alt: "Completed Wooden Decking" },
    { src: "/images/gallery-fence-pergola-construction.jpg", alt: "Fence and Pergola Construction" },
    { src: "/images/gallery-kitchen-cabinets.jpg", alt: "Kitchen Cabinet Installation" },
    { src: "/images/gallery-internal-door.jpg", alt: "Internal Door Installation" },
    { src: "/images/gallery-hallway-doors.jpg", alt: "Hallway with new internal doors" },
    { src: "/images/gallery-decking-frame-construction-2.jpg", alt: "Decking frame construction in progress" },
  ]

  const openModal = (src: string, alt: string) => {
    setCurrentImage({ src, alt })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentImage({ src: "", alt: "" })
  }

  return (
    <section id="gallery" className="py-20 bg-mt-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Recent Work</h2>
          <p className="text-lg text-gray-600 mt-4">A glimpse into the quality and variety of our projects.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openModal(image.src, image.alt)}
              className="block w-full h-64 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-mt-yellow"
              aria-label={`View larger image of ${image.alt}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        src={currentImage.src || "/placeholder.svg"}
        alt={currentImage.alt}
      />
    </section>
  )
}
