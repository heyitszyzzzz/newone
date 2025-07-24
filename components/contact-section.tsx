"use client"

import { Phone, Mail, Calendar } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-mt-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mt-yellow/10 rounded-full border border-mt-yellow/20 mb-6">
            <span className="text-mt-yellow text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-mt-black mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-mt-gray-600 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote and let's bring your vision to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-2xl shadow-chrome border border-mt-gray-200">
              <h3 className="text-2xl font-bold text-mt-black mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="p-3 bg-mt-yellow/10 rounded-xl mr-4 group-hover:bg-mt-yellow/20 transition-colors">
                    <Phone className="w-6 h-6 text-mt-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-mt-gray-600 mb-1">Call us directly</p>
                    <a
                      href="tel:07708088177"
                      className="text-lg font-semibold text-mt-black hover:text-mt-yellow transition-colors"
                    >
                      07708 088177
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="p-3 bg-mt-yellow/10 rounded-xl mr-4 group-hover:bg-mt-yellow/20 transition-colors">
                    <Mail className="w-6 h-6 text-mt-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-mt-gray-600 mb-1">Send us an email</p>
                    <a
                      href="mailto:contact@mtjoinery.com"
                      className="text-lg font-semibold text-mt-black hover:text-mt-yellow transition-colors"
                    >
                      contact@mtjoinery.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking */}
            <div className="bg-mt-black p-8 rounded-2xl shadow-chrome-lg text-center">
              <div className="p-4 bg-mt-yellow/20 rounded-xl inline-flex mb-6">
                <Calendar className="w-8 h-8 text-mt-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Book a Consultation</h3>
              <p className="text-mt-gray-300 mb-8 leading-relaxed">
                Schedule a free consultation at your convenience to discuss your project in detail.
              </p>
              <a
                href="https://calendly.com/your-mtjoinery-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-mt-yellow hover:bg-mt-yellow-dark text-mt-black font-semibold rounded-xl transition-all duration-200 shadow-chrome-lg hover:shadow-chrome-xl hover:scale-105"
              >
                Book Now on Calendly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
