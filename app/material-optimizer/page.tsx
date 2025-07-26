import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MaterialOptimizerTool } from "@/components/material-optimizer-tool"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Material Optimizer | MT Joinery - Smart Construction Planning",
  description:
    "Use our AI-powered Material Optimizer to calculate exact material requirements, minimize waste, and get optimized cutting plans for your joinery projects. Save time and money with intelligent construction planning.",
  keywords: "material calculator, cutting list, joinery planning, construction optimizer, waste reduction, AI tools",
}

export default function MaterialOptimizerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <MaterialOptimizerTool />
      </main>
      <Footer />
    </>
  )
}
