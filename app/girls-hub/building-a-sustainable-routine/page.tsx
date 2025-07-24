import Image from "next/image"
import Link from "next/link"

export default function BuildingASustainableRoutine() {
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
            Building a Sustainable Routine: Fitness That Fits Your Life, Not the Other Way Around
          </h1>
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Woman balancing work and fitness"
            width={800}
            height={400}
            className="rounded-lg mb-8 w-full object-cover"
          />
          <p className="text-gray-700 mb-4">
            Life is busy, and finding time for fitness can feel like an uphill battle. But what if your fitness routine
            wasn&apos;t another chore, but a seamless, enjoyable part of your week? Building a sustainable routine is
            about creating habits that stick, even when life gets hectic. Here&apos;s how to make fitness a long-term
            success.
          </p>

          <h2 className="text-2xl font-bold text-dark-pink mb-3">Time Management for Busy Women</h2>
          <p className="text-gray-700 mb-4">
            You don&apos;t need hours. Even 2-3 focused workouts per week can deliver incredible results.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>**Schedule It:** Treat your workouts like non-negotiable appointments in your calendar.</li>
            <li>
              **Short Bursts:** Can&apos;t do an hour? Break it into 20-30 minute sessions. Consistency beats duration.
            </li>
            <li>
              **Morning Advantage:** Many find morning workouts boost energy and ensure it gets done before daily
              demands pile up.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-dark-pink mb-3">Setting Goals That Motivate You</h2>
          <p className="text-gray-700 mb-4">Beyond just "losing weight," define what truly motivates you.</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>**SMART Goals:** Make them Specific, Measurable, Achievable, Relevant, and Time-bound.</li>
            <li>
              **Focus on Process:** Instead of just "lose 10 lbs," aim for "complete 3 workouts this week" or "eat 5
              servings of vegetables daily."
            </li>
            <li>
              **Non-Scale Victories:** Celebrate increased strength, better sleep, improved mood, or clothes fitting
              better.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-dark-pink mb-3">Overcoming Obstacles & Staying Motivated</h2>
          <p className="text-gray-700 mb-4">Obstacles are inevitable, but your response determines your success.</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>**Identify Triggers:** What makes you skip? Lack of time? Low energy? Plan for these.</li>
            <li>**Have a Backup Plan:** If the gym isn&apos;t an option, have a home workout ready.</li>
            <li>**Find Your Enjoyment:** If you hate running, don&apos;t run! Find activities you genuinely enjoy.</li>
            <li>**Seek Support:** A coach or community can provide accountability and encouragement.</li>
          </ul>

          <p className="text-gray-700 mb-6 font-semibold">
            Ready to build a fitness routine that you love and can stick with for life? Our coaching app provides
            personalized plans, and our video tutorials ensure you master every exercise.
          </p>
          <div className="text-center">
            <Link
              href="/girls-hub" // Link to the Girls Hub section or a specific video tutorial page
              className="bg-hot-pink text-lg text-white font-bold py-3 px-8 rounded-full inline-block hover:bg-darker-pink transition-colors duration-300 mr-4"
            >
              Explore Video Tutorials
            </Link>
            <Link
              href={calendlyLink}
              target="_blank"
              className="bg-hot-pink text-lg text-white font-bold py-3 px-8 rounded-full inline-block hover:bg-darker-pink transition-colors duration-300"
            >
              Get Your Personalized Plan!
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
