import Image from "next/image"
import Link from "next/link"

export default function DebunkingFitnessMyths() {
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
            Debunking Fitness Myths: What You Think You Know Might Be Holding You Back
          </h1>
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Woman confused by fitness myths"
            width={800}
            height={400}
            className="rounded-lg mb-8 w-full object-cover"
          />
          <p className="text-gray-700 mb-4">
            The fitness world is a minefield of misinformation. From social media gurus to old-school gym lore, it's
            easy to get caught up in myths that not only waste your time but can actively hinder your progress. At JMP
            Coaching, we believe in evidence-based strategies. Let&apos;s bust some common fitness myths and set the
            record straight!
          </p>

          <h2 className="text-2xl font-bold text-dark-pink mb-3">
            Myth 1: More is Always Better (More Workouts, More Cardio)
          </h2>
          <p className="text-gray-700 mb-4">
            **The Truth:** Your body needs time to recover and adapt. Overtraining can lead to fatigue, injury, and even
            muscle loss. For strength training, 2-3 high-quality sessions per week are often more effective than daily
            grueling workouts. For cardio, balance is key; excessive cardio can interfere with muscle gain and lead to
            burnout. Focus on smart, progressive training, not just volume.
          </p>

          <h2 className="text-2xl font-bold text-dark-pink mb-3">Myth 2: Carbs Are Bad and Make You Fat</h2>
          <p className="text-gray-700 mb-4">
            **The Truth:** Carbohydrates are your body&apos;s primary source of energy, especially for intense workouts.
            Cutting them out entirely can leave you feeling sluggish, impact your performance, and make your diet
            unsustainable. The key is choosing the right types of carbs (whole grains, fruits, vegetables) and managing
            portion sizes within your overall calorie goals. No single food group is inherently "bad."
          </p>

          <h2 className="text-2xl font-bold text-dark-pink mb-3">
            Myth 3: You Can Spot Reduce Fat (e.g., Crunches for Belly Fat)
          </h2>
          <p className="text-gray-700 mb-4">
            **The Truth:** Unfortunately, you can&apos;t choose where your body loses fat. While exercises like crunches
            strengthen your abdominal muscles, they won&apos;t specifically burn fat from your belly. Fat loss is a
            systemic process. To reduce fat in specific areas, you need overall fat loss through a consistent calorie
            deficit and a well-rounded training program.
          </p>

          <h2 className="text-2xl font-bold text-dark-pink mb-3">
            Myth 4: You Need to Feel Sore to Have a Good Workout
          </h2>
          <p className="text-gray-700 mb-4">
            **The Truth:** Delayed Onset Muscle Soreness (DOMS) is common, especially when starting a new routine or
            increasing intensity. However, it&apos;s not a reliable indicator of an effective workout. You can have a
            highly productive training session without feeling crippling soreness the next day. Focus on progressive
            overload, proper form, and consistent effort, not just how sore you feel.
          </p>

          <p className="text-gray-700 mb-6 font-semibold">
            Tired of navigating the confusing world of fitness alone? Our coaching app provides evidence-based workouts,
            flexible nutrition plans, and expert guidance to cut through the noise and get you real results.
          </p>
          <div className="text-center">
            <Link
              href={calendlyLink}
              target="_blank"
              className="bg-hot-pink text-lg text-white font-bold py-3 px-8 rounded-full inline-block hover:bg-darker-pink transition-colors duration-300"
            >
              Discover Our Proven Method – Apply Now!
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
