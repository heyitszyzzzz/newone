import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MaterialOptimizerTool } from "@/components/material-optimizer-tool"

export default function MaterialOptimizerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-mt-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-20 bg-mt-black text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-mt-yellow/20 rounded-full border border-mt-yellow/30 mb-6">
              <span className="text-mt-yellow text-sm font-medium">AI-Powered Tool</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Material Optimizer</h1>
            <p className="text-xl md:text-2xl text-mt-gray-300 max-w-3xl mx-auto mb-8">
              Get accurate material estimates and cut-lists for your joinery projects. Upload your plans or input
              dimensions to optimize material usage and reduce waste.
            </p>
          </div>
        </section>

        <MaterialOptimizerTool />
      </main>
      <Footer />
    </>
  )
}
