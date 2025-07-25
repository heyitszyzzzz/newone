import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Joinery workshop background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mt-black/80 via-mt-black/60 to-mt-black/40"></div>
      </div>

      <div className="relative z-20 container mx-auto px-6 py-32 md:py-40 lg:py-48">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 bg-mt-yellow/20 backdrop-blur-sm rounded-full border border-mt-yellow/30 mb-8">
            <span className="text-mt-yellow text-sm font-medium">7+ Years Experience</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-mt-gray-300 bg-clip-text text-transparent">
            Expert Joinery by Matthew
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-mt-gray-200 max-w-2xl leading-relaxed">
            Delivering high-quality craftsmanship and reliable service for all your home improvement needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-mt-yellow hover:bg-mt-yellow-dark text-mt-black font-semibold rounded-xl transition-all duration-200 shadow-chrome-lg hover:shadow-chrome-xl hover:scale-105"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
