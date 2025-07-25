"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Renovations", href: "/renovations" },
    { name: "Doors & Interiors", href: "/doors-interiors" },
    { name: "Outdoor Work", href: "/outdoor-work" },
    { name: "Kitchens & Bathrooms", href: "/kitchens-bathrooms" },
    { name: "Material Optimizer", href: "/material-optimizer" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-mt-gray-200 shadow-chrome">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/images/mt-joinery-logo.jpg"
              alt="MT Joinery Logo"
              width={100}
              height={40}
              className="h-10 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </div>
          <span className="text-xl font-bold text-mt-black hidden sm:block group-hover:text-mt-yellow transition-colors">
            MT Joinery
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-mt-gray-700 hover:text-mt-black hover:bg-mt-gray-100 rounded-lg transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            className="p-2 text-mt-gray-700 hover:text-mt-black hover:bg-mt-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-mt-gray-200 shadow-chrome">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-6 py-3 text-sm font-medium text-mt-gray-700 hover:text-mt-black hover:bg-mt-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
