import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I had fencing added around high decking and also a new back gate and what a fantastic job! Matthew and Blair came on time, worked hard all day, did a fantastic job and tidied up after themselves. I will be using them again and cannot recommend highly enough.",
      author: "Ally",
      rating: 5,
    },
    {
      quote:
        "Highly recommend MT Joinery, work carried out quickly and professionally. So impressed with the level of expertise and knowledge I've booked MT Joinery to do further work at my home. Don't bother going anywhere else MT Joinery are the Company to chose!",
      author: "Maria Cunningham",
      rating: 5,
    },
    {
      quote:
        "Matthew replied to my request quickly and came out when he said he would. He immediately diagnosed the fault with our sliding door and made every effort to fix it. Including a trip to Screwfix to get a missing part. He was extremely reasonable and very pleasant.",
      author: "Lucy Wykes",
      rating: 5,
    },
    {
      quote:
        "Super friendly and accommodating young men. Provided advice and suggestions and chatted through options for achieving the look I wanted. Arrived when expected and did a first class job - really delighted with my new fencing.",
      author: "Vivienne",
      rating: 5,
    },
    {
      quote:
        "Got Matthew and Aiden in to lay a herringbone floor for us recently. Matthew was excellent at communication, came back with quotes quickly and was happy to accommodate what we wanted. The job turned out to be trickier than expected but the lads were quick to come up with solutions.",
      author: "Geraldine",
      rating: 5,
    },
    {
      quote:
        "Matthew, is a proper tradesman who clearly takes great pride in his work. Excellent job, removed all rubbish and cleared up after him. Very professional, highly recommended",
      author: "George Thomson",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-mt-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mt-yellow/20 rounded-full border border-mt-yellow/30 mb-6">
            <span className="text-mt-yellow text-sm font-medium">Client Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-mt-gray-300 max-w-2xl mx-auto">
            We have over 50 five-star reviews. Here are just a few.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-mt-black-light border border-mt-gray-800 hover:border-mt-yellow/30 rounded-2xl shadow-chrome-lg hover:shadow-chrome-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-mt-yellow/60" />
                <div className="flex items-center space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-mt-yellow fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-mt-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-mt-yellow/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-mt-yellow font-semibold text-sm">{testimonial.author.charAt(0)}</span>
                </div>
                <p className="font-semibold text-white">{testimonial.author}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
