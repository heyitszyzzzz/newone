import Image from "next/image"
import Link from "next/link"

export default function TheScienceOfSmallChanges() {
  const calendlyLink = "https://calendly.com/juliopedro1802/30min"

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

      <main className="flex-grow container mx-auto px-6 py-12">
        <article className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-dark-pink mb-6 text-center">
            The Science of Small Changes: Big Results from Little Efforts
          </h1>
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Woman making small, consistent changes"
            width={800}
            height={400}
            className="rounded-lg mb-8 w-full object-cover"
          />
          <p className="text-gray-700 mb-4">
            In the world of fitness, we often hear about extreme makeovers and grueling daily workouts. But what if we
            told you that the most profound transformations often come from consistent, small changes? It's not about
            doing everything perfectly, but about doing a few things consistently. This is the science of incremental
            progress, and it's your secret weapon for sustainable results.
          </p>

          <h2 className="text-2xl font-bold text-dark-pink mb-3">Why Consistency Trumps Intensity (Alone)</h2>
          <p className="text-gray-700 mb-4">
            Our bodies are incredible machines designed for adaptation. When you consistently apply a stimulus – like a
            well-structured workout – your body responds by getting stronger, building muscle, and burning fat. The
            magic isn't in a single, exhausting session, but in the cumulative effect of repeated, effective efforts.
            Think of it like saving money: small, regular deposits build a fortune over time.
          </p>

          <h2 className="text-2xl font-bold text-dark-pink mb-3">The Power of 2-3 Workouts Per Week</h2>
          <p className="text-gray-700 mb-4">
            You don't need to live in the gym to see incredible changes. Scientific research consistently shows that 2-3
            strength training sessions per week are highly effective for muscle growth (hypertrophy) and fat loss. This
            frequency allows for optimal muscle stimulation and, crucially, adequate recovery. Recovery is where your
            muscles actually grow stronger! Over-training can lead to burnout and plateaus, but smart, focused sessions
            a few times a week deliver maximum impact.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              **Progressive Overload:** Gradually increasing the challenge (more weight, reps, or sets) is key, not just
              more days.
            </li>
            <li>**Optimal Recovery:** Your muscles need time to repair and grow stronger between sessions.</li>
            <li>
              **Sustainability:** Fitting 2-3 workouts into a busy schedule is far more realistic, leading to long-term
              adherence.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-dark-pink mb-3">Actionable Tips for Immediate Progress</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              **Start Small:** Don't aim for perfection. Aim for consistency. Two solid workouts are better than five
              missed ones.
            </li>
            <li>
              **Focus on Form:** Quality over quantity. Proper form prevents injury and ensures muscles are effectively
              targeted.
            </li>
            <li>
              **Track Your Progress:** Seeing your strength increase or measurements change is incredibly motivating.
            </li>
            <li>
              **Celebrate Small Wins:** Acknowledge every workout, every healthy meal. These small victories build
              momentum.
            </li>
          </ul>

          <p className="text-gray-700 mb-6 font-semibold">
            Ready to unlock your body&apos;s potential with a plan that truly works for your life?
          </p>
          <div className="text-center">
            <Link
              href={calendlyLink}
              target="_blank"
              className="bg-hot-pink text-lg text-white font-bold py-3 px-8 rounded-full inline-block hover:bg-darker-pink transition-colors duration-300"
            >
              Book Your Free 1-on-1 Consultation!
            </Link>
          </div>
        </article>
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
