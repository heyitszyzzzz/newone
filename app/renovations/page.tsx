import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import Image from "next/image"
import Link from "next/link"
import { Home, CheckCircle } from "lucide-react"

export default function RenovationsPage() {
  const renovationServices = [
    "Complete home renovations",
    "Single room makeovers",
    "Home extensions",
    "Structural alterations",
    "Property modernization",
    "Planning and design consultation",
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-mt-black text-white py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="flex items-center mb-6">
              <Home className="w-8 h-8 text-mt-yellow mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold">Renovations & Extensions</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Transform your living space with our comprehensive renovation and extension services. From concept to
              completion, we bring your vision to life.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-mt-yellow hover:bg-mt-yellow-dark text-mt-black font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Get Your Free Quote
            </Link>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 bg-mt-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
                <ul className="space-y-4">
                  {renovationServices.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-mt-yellow mr-3 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/gallery-kitchen-cabinets.jpg"
                  alt="Kitchen renovation"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/gallery-modern-bathroom.jpg"
                  alt="Bathroom renovation"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
