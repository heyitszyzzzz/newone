import { Card } from "@/components/ui/card"
import { Home, DoorOpen, Ruler, Fence, HardHat, CookingPotIcon as Kitchen, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Renovations & Extensions",
      description: "Transform your living spaces with seamless home extensions and comprehensive property renovations.",
      link: "/renovations",
    },
    {
      icon: DoorOpen,
      title: "Internal Doors",
      description: "Expert installation and fitting of all types of internal doors, ensuring perfect alignment.",
      link: "/doors-interiors",
    },
    {
      icon: Ruler,
      title: "Skirtings & Facings",
      description: "Precision fitting of skirting boards and architraves to enhance your interior aesthetics.",
      link: "/doors-interiors",
    },
    {
      icon: Fence,
      title: "Fencing",
      description: "Durable and aesthetically pleasing fencing solutions, from privacy to decorative boundaries.",
      link: "/outdoor-work",
    },
    {
      icon: HardHat,
      title: "Decking",
      description: "Custom-designed and expertly constructed decking for beautiful outdoor living areas.",
      link: "/outdoor-work",
    },
    {
      icon: Kitchen,
      title: "Kitchens & Bathrooms",
      description: "Bespoke kitchen and bathroom fitting services from design consultation to installation.",
      link: "/kitchens-bathrooms",
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-mt-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mt-yellow/10 rounded-full border border-mt-yellow/20 mb-6">
            <span className="text-mt-yellow text-sm font-medium">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-mt-black mb-4">Professional Joinery Services</h2>
          <p className="text-xl text-mt-gray-600 max-w-2xl mx-auto">
            From small repairs to complete renovations, we handle it all with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="group">
              <Card className="p-8 h-full bg-white hover:bg-mt-gray-50 border border-mt-gray-200 hover:border-mt-yellow/30 rounded-2xl shadow-chrome hover:shadow-chrome-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-mt-yellow/10 rounded-xl group-hover:bg-mt-yellow/20 transition-colors">
                    <service.icon className="w-8 h-8 text-mt-yellow" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-mt-gray-400 group-hover:text-mt-yellow group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-xl font-bold text-mt-black mb-3 group-hover:text-mt-yellow transition-colors">
                  {service.title}
                </h3>

                <p className="text-mt-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
