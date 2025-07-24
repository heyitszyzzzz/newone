import Image from "next/image"
import Link from "next/link"
import { Newspaper, ArrowRight, Clock, User } from "lucide-react"

export default function GirlsHub() {
  const calendlyLink = "https://calendly.com/juliopedro1802/30min"

  const blogPosts = [
    {
      id: 1,
      title: "The Science of Small Changes",
      excerpt:
        "Discover how consistent, small actions (like 2-3 workouts per week) lead to massive transformations. Learn why incremental progress is your secret weapon for sustainable results.",
      slug: "the-science-of-small-changes",
      readTime: "4 min read",
      category: "Science & Research",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Debunking Fitness Myths",
      excerpt:
        "Separate fact from fiction and learn the truth about effective training and nutrition. We bust common misconceptions that might be holding you back from your goals.",
      slug: "debunking-fitness-myths",
      readTime: "5 min read",
      category: "Education",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Building a Sustainable Routine",
      excerpt:
        "Practical advice for creating a fitness routine that fits your busy lifestyle and lasts a lifetime. Time management tips and strategies for long-term success.",
      slug: "building-a-sustainable-routine",
      readTime: "6 min read",
      category: "Lifestyle",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/">
            <Image src="/images/logo.png" alt="JMP Coaching Logo" width={48} height={48} className="h-12 w-auto" />
          </Link>
          <div>
            <Link
              href={calendlyLink}
              target="_blank"
              className="bg-hot-pink text-white font-bold py-2 px-6 rounded-full hover:bg-darker-pink transition-colors duration-300"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-light-pink py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="text-hot-pink text-6xl mb-6 flex justify-center">
              <Newspaper className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark-pink leading-tight mb-4">Girls Hub</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Your source for empowerment, knowledge, and inspiration. Dive into evidence-based articles, practical
              tips, and success stories designed to support you on your fitness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="bg-hot-pink text-white font-bold py-3 px-8 rounded-full hover:bg-darker-pink transition-colors duration-300"
              >
                Get Personal Coaching
              </Link>
              <Link
                href="/#sobre"
                className="bg-white text-hot-pink font-bold py-3 px-8 rounded-full border-2 border-hot-pink hover:bg-hot-pink hover:text-white transition-colors duration-300"
              >
                Learn About Julio
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-hot-pink text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                      <User className="w-4 h-4 ml-4 mr-1" />
                      <span>Julio Pedro</span>
                    </div>
                    <h2 className="text-xl font-bold text-dark-pink mb-3 hover:text-hot-pink transition-colors">
                      <Link href={`/girls-hub/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/girls-hub/${post.slug}`}
                      className="inline-flex items-center text-hot-pink font-semibold hover:text-darker-pink transition-colors group"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter/CTA Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-pink mb-4">Ready to Transform Your Body & Mind?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              These articles are just the beginning. Get personalized coaching, custom workout plans, and direct support
              to achieve the transformation you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="bg-hot-pink text-lg text-white font-bold py-4 px-10 rounded-full hover:bg-darker-pink transition-colors duration-300"
              >
                Book Your Free Consultation
              </Link>
              <Link
                href="/"
                className="bg-gray-100 text-dark-pink text-lg font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                Explore Our Program
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Topics */}
        <section className="py-16 bg-lighter-pink">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-dark-pink mb-12">What You'll Learn in Girls Hub</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="font-bold text-dark-pink mb-2">Science-Based Training</h3>
                <p className="text-gray-600 text-sm">Evidence-backed methods for maximum results</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🍎</span>
                </div>
                <h3 className="font-bold text-dark-pink mb-2">Flexible Nutrition</h3>
                <p className="text-gray-600 text-sm">Sustainable eating strategies that work</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="font-bold text-dark-pink mb-2">Mindset & Motivation</h3>
                <p className="text-gray-600 text-sm">Building confidence and lasting habits</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="font-bold text-dark-pink mb-2">Time Management</h3>
                <p className="text-gray-600 text-sm">Fitting fitness into your busy life</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {"2024 JMP Coaching. All rights reserved."}</p>
          <p className="text-sm text-gray-400 mt-2">
            Made with <span className="text-pink-500">{"<3"}</span> for incredible women.
          </p>
        </div>
      </footer>
    </div>
  )
}
