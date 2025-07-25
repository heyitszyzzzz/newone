import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MT Joinery - Quality Craftsmanship",
  description:
    "Expert Joinery by Matthew with 7 years of industry experience, delivering high-quality craftsmanship and reliable service for all your home improvement needs.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-gray-800 bg-mt-light-gray`}>{children}</body>
    </html>
  )
}
