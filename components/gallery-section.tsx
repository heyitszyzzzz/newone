"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageModal } from "./image-modal"

export function GallerySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" })

  const galleryImages = [
    // Bathroom Projects
    { src: "/images/gallery-modern-grey-bathroom.jpg", alt: "Modern Grey Bathroom with Glass Shower" },
    { src: "/images/gallery-modern-bathroom.jpg", alt: "Contemporary Bathroom Renovation" },

    // Decking Projects
    { src: "/images/gallery-composite-decking.jpg", alt: "Professional Composite Decking Installation" },
    { src: "/images/gallery-completed-decking.jpg", alt: "Completed Wooden Decking Project" },

    // Fencing & Gates
    { src: "/images/gallery-wooden-fence-installation.jpg", alt: "Wooden Fence Installation" },
    { src: "/images/gallery-wooden-garden-gate.jpg", alt: "Custom Wooden Garden Gate" },
    { src: "/images/gallery-fence-pergola-construction.jpg", alt: "Fence and Pergola Construction" },

    // Doors & Interior Work
    { src: "/images/gallery-white-internal-door.jpg", alt: "White Internal Door Installation" },
    { src: "/images/gallery-internal-door.jpg", alt: "Internal Door Fitting" },
    { src: "/images/gallery-hallway-doors.jpg", alt: "Hallway with Multiple Internal Doors" },

    // Kitchen & Construction
    { src: "/images/gallery-kitchen-cabinets.jpg", alt: "Kitchen Cabinet Installation" },
    { src: "/images/gallery-decking-frame-construction-2.jpg", alt: "Decking Frame Construction" },
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
    <section id="gallery" className="py-24 bg-gradient-to-b from-mt-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mt-yellow/10 rounded-full border border-mt-yellow/20 mb-6">
            <span className="text-mt-yellow text-sm font-medium">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-mt-black mb-4">Recent Projects</h2>
          <p className="text-xl text-mt-gray-600 max-w-2xl mx-auto">
            Explore our latest work showcasing quality craftsmanship across all our services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openModal(image.src, image.alt)}
              className="group relative w-full h-64 rounded-2xl overflow-hidden shadow-chrome hover:shadow-chrome-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-mt-yellow/50"
              aria-label={`View larger image of ${image.alt}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mt-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium truncate">{image.alt}</p>
                </div>
              </div>
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
