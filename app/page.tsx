"use client"

import { useState } from "react"
import Image from "next/image" // Import the Image component
import {
  Menu,
  X,
  CheckCircle,
  Users,
  Target,
  MessageCircle,
  ChevronRight,
  Dumbbell,
  CalendarCheck,
  Handshake,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Reusable Primary CTA component
function PrimaryCTA() {
  return (
    <div className="flex flex-col items-center gap-2 text-center animate-fade-in-up delay-400">
      <a href="https://calendly.com/juliopedro1802/30min" target="_blank" rel="noopener noreferrer">
        <Button className="bg-accent-orange hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-orange/50 text-lg">
          Start My 6-Week Plan – Only 5 Spots Left
        </Button>
      </a>
      <p className="text-sm text-slate-300 font-medium">Limited to 5 spots/month</p>
    </div>
  )
}

export default function CoachingWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 relative overflow-x-hidden">
      {/* Background Glow Effect */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-cyan-500/15 via-transparent to-transparent blur-[150px] animate-pulse-glow" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/jmp-logo.png"
                alt="JMP Coaching Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="text-2xl font-bold text-cyan-400">JMP Coaching</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors">
                Home
              </a>
              <a href="#who-this-is-for" className="hover:text-cyan-400 transition-colors">
                Who It's For
              </a>
              <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">
                How It Works
              </a>
              <a href="#what-you-get" className="hover:text-cyan-400 transition-colors">
                What You Get
              </a>
              <a href="#testimonials" className="hover:text-cyan-400 transition-colors">
                Testimonials
              </a>
              <a href="#faq" className="hover:text-cyan-400 transition-colors">
                FAQ
              </a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-cyan-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in-down">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
                <a
                  href="#who-this-is-for"
                  className="hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Who It's For
                </a>
                <a
                  href="#how-it-works"
                  className="hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#what-you-get"
                  className="hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  What You Get
                </a>
                <a
                  href="#testimonials"
                  className="hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
                <a href="#faq" className="hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Party Hard. <span className="text-cyan-400 block">Get Shredded.</span> Repeat.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-slate-300 animate-fade-in-up delay-200">
            For nightlife-loving guys who want to build muscle, lose fat, and still enjoy weekends out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <PrimaryCTA />
          </div>
          <div className="mt-16 max-w-3xl mx-auto bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-cyan-500/20 animate-fade-in-up delay-500">
            <div className="relative w-full pt-[56.25%] flex items-center justify-center">
              {" "}
              {/* 16:9 Aspect Ratio */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-2xl font-semibold">
                Video Coming Soon!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section id="who-this-is-for" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
            This Is For <span className="text-cyan-400">You If...</span>
          </h2>
          <div className="max-w-4xl mx-auto text-left grid md:grid-cols-2 gap-8 text-lg text-slate-300 animate-fade-in-up delay-200">
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span>You love hitting the clubs and social events, but want to look good doing it.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span>You're tired of starting a fitness routine only to quit a few weeks later.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span>You want to build real muscle and lose stubborn fat, not just "tone up."</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span>You need a plan that actually fits your busy, unpredictable lifestyle.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span>You're ready to gain confidence and respect, both in and out of the gym.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <span>You're done with cookie-cutter programs and ready for personalized results.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section (3-Step Visual) */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in-up">
            Your <span className="text-cyan-400">3-Step Transformation</span>
          </h2>
          <p className="text-xl text-center text-slate-300 mb-16 animate-fade-in-up delay-200">
            Simple, effective, and designed for your lifestyle.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Custom Blueprint",
                description:
                  "We craft a personalized training and nutrition plan that fits your schedule, preferences, and party habits.",
                icon: <Target className="w-12 h-12 text-cyan-400" />,
              },
              {
                step: "02",
                title: "Execute & Adapt",
                description:
                  "You follow the plan, I provide weekly check-ins, adjustments, and accountability to keep you on track.",
                icon: <CalendarCheck className="w-12 h-12 text-cyan-400" />,
              },
              {
                step: "03",
                title: "Shredded & Confident",
                description:
                  "Achieve your dream physique, build unbreakable discipline, and enjoy your social life without guilt.",
                icon: <Dumbbell className="w-12 h-12 text-cyan-400" />,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-[#1a1a1a] border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section (Everfit App Features) */}
      <section id="what-you-get" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in-up">
            Your Transformation, Powered by <span className="text-cyan-400">Everfit</span>
          </h2>
          <p className="text-xl text-center text-slate-300 mb-16 animate-fade-in-up delay-200">
            Everything you need to get shredded, all in one powerful app.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">Custom Training Programs</h3>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Access your personalized workout plan with detailed video demonstrations for every exercise. Track your
                progress, log your lifts, and see yourself get stronger week by week.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Video tutorials for every exercise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Progressive overload tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Workout history and analytics</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="relative max-w-xs mx-auto">
                <Image
                  src="/images/app-workout.png"
                  alt="Everfit Training Interface"
                  width={300}
                  height={600}
                  className="w-full rounded-2xl shadow-2xl border border-cyan-500/20"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-up md:order-2">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">Flexible Nutrition Coaching</h3>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                No restrictive diets. Get a flexible nutrition strategy that fits your social life, whether you're
                partying, eating out, or meal prepping. Track macros, get meal ideas, and stay on track.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Personalized macro targets</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Meal planning and recipe suggestions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Integration with MyFitnessPal & other trackers</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up delay-200 md:order-1">
              <div className="relative max-w-xs mx-auto">
                <Image
                  src="/images/app-mealplan.png"
                  alt="Everfit Nutrition Interface"
                  width={300}
                  height={600}
                  className="w-full rounded-2xl shadow-2xl border border-cyan-500/20"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">Weekly Check-ins & Accountability</h3>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Stay consistent with weekly check-ins, habit tracking, and direct messaging with your coach. Get the
                support and accountability you need to break through plateaus and build lasting habits.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Weekly progress tracking and feedback</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Direct messaging with Coach Julio</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Habit tracking and mindset coaching</span>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="relative max-w-xs mx-auto">
                <Image
                  src="/images/app-details.png"
                  alt="Everfit Check-in Interface"
                  width={300}
                  height={600}
                  className="w-full rounded-2xl shadow-2xl border border-cyan-500/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in-up">
            Real Guys. <span className="text-cyan-400">Real Results.</span>
          </h2>
          <p className="text-xl text-center text-slate-300 mb-16 animate-fade-in-up delay-200">
            See how other nightlife-loving guys transformed their bodies and confidence.
          </p>

          {/* Social Proof Badge */}
          <div className="text-center mb-16 animate-fade-in-up delay-300">
            <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-3 text-cyan-400 font-semibold text-lg shadow-lg shadow-cyan-500/20">
              <Users className="w-6 h-6 mr-3" />
              <span>100+ Lives Transformed</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {/* Testimonial 1: Carlito (Front View) */}
            <Card className="bg-[#1a1a1a] border border-cyan-500/20 animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src="/images/testimonials/male-front-carlito-before-after.jpeg"
                      alt="Carlito Before/After"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      Before / After
                    </span>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-lg italic text-slate-300 mb-4">
                      "Mate see when I think about it so happy I came to see you that day was so nervous but buzzing I
                      done it, imagine I didn't start the gym wow, couldn't imagine life without gym like cheers again
                      for everything, changed my mindset completely gym is life"
                    </p>
                    <p className="font-semibold text-cyan-400">- Carlito</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2: Tristan (Back View) */}
            <Card className="bg-[#1a1a1a] border border-cyan-500/20 animate-fade-in-up delay-100">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src="/images/testimonials/male-back-before-after.jpeg"
                      alt="Tristan Before/After Back"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      Before / After
                    </span>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-lg italic text-slate-300 mb-4">
                      "Thank Man 😎 appreciate it loads, I'm very happy with how it's going and am really enjoying every
                      moment 🔥 Best moment so far is my Dad noticed gain in my arm on a video call to home 🤯🙌 I've
                      gained between 1.5 and 2cm on all the measurements which is crazy awesome"
                    </p>
                    <p className="font-semibold text-cyan-400">- Tristan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3: Jay (-20lbs Side View) */}
            <Card className="bg-[#1a1a1a] border border-cyan-500/20 animate-fade-in-up delay-200">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src="/images/testimonials/male-side-20lbs-before-after.jpeg"
                      alt="Jay Before/After -20lbs"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      Before / After
                    </span>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-lg italic text-slate-300 mb-4">
                      "Thanks man appreciate it, I really am enjoying it. And I now with you pointing out actually
                      noticed the difference more between the first photos and now. I have overall just been feeling
                      better and healthier overall. More energy and pump for each day from when I wake up I'm ready to
                      jump into the day and crush it"
                    </p>
                    <p className="font-semibold text-cyan-400">- Jay</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section - Meet Coach Julio */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            Meet Your <span className="text-cyan-400">Coach</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="relative max-w-md mx-auto">
                <Image
                  src="/images/coach-julio-new.jpeg"
                  alt="Coach Julio - Founder of JMP Coaching"
                  width={400}
                  height={600}
                  className="w-full rounded-2xl shadow-2xl border border-cyan-500/20"
                />
              </div>
            </div>

            <div className="animate-fade-in-up delay-200">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">I’m Julio, founder of JMP Coaching.</h3>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                I help guys who party hard get lean, strong, and confident — without quitting their lifestyle.
              </p>

              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I’ve lived the cycle: skipping meals, smashing nights out, trying the gym for a month then falling off.
                What changed for me wasn’t a perfect plan — it was discipline, structure, and learning to train around
                real life.
              </p>

              <p className="text-lg text-slate-300 mb-4 font-semibold text-cyan-400">
                Now I coach with that same mindset:
              </p>
              <ul className="space-y-3 text-slate-300 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>No shame, no BS.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Plans that fit your lifestyle.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>Structure that sticks — even on your worst week.</span>
                </li>
              </ul>

              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                You don’t need to give up your weekends to get in shape. You just need the right system — and someone
                who actually gets it.
              </p>

              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                If you’re ready to stop starting over, I’ll help you finish the job.
              </p>

              <div className="mt-8 flex items-center space-x-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300 font-semibold">100+ Life-Changing Transformations</span>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <PrimaryCTA />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in-up">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>
          <p className="text-xl text-center text-slate-300 mb-16 animate-fade-in-up delay-200">
            Got questions? I've got answers.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-cyan-500/20">
              <AccordionTrigger className="text-lg font-semibold text-cyan-400 hover:no-underline py-4">
                Can I still party and drink alcohol on this plan?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 leading-relaxed py-4">
                Absolutely. This program is designed for your lifestyle. We'll implement strategies to manage your
                nutrition and training around your social life, so you can enjoy your weekends without derailing your
                progress. It's about balance, not deprivation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-cyan-500/20">
              <AccordionTrigger className="text-lg font-semibold text-cyan-400 hover:no-underline py-4">
                What if I travel frequently for work or leisure?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 leading-relaxed py-4">
                No problem. Your training and nutrition plans are flexible and adaptable. We'll adjust your workouts to
                fit hotel gyms or bodyweight routines, and your nutrition strategy will account for eating out and
                travel schedules. Consistency is key, and we'll make it work wherever you are.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-cyan-500/20">
              <AccordionTrigger className="text-lg font-semibold text-cyan-400 hover:no-underline py-4">
                I've tried other programs and always quit. How is this different?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 leading-relaxed py-4">
                This isn't a generic program. It's personalized coaching with weekly 1:1 accountability. We focus on
                building sustainable habits and addressing the root causes of inconsistency. My goal is to empower you
                to build lifelong discipline, not just a temporary fix.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-cyan-500/20">
              <AccordionTrigger className="text-lg font-semibold text-cyan-400 hover:no-underline py-4">
                Do I need a gym membership or special equipment?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 leading-relaxed py-4">
                While a gym membership is recommended for optimal results, your program can be tailored to your
                available equipment, whether that's a home gym, limited equipment, or just bodyweight. We'll make the
                most of what you have.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-cyan-500/20">
              <AccordionTrigger className="text-lg font-semibold text-cyan-400 hover:no-underline py-4">
                How much time do I need to commit each week?
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 leading-relaxed py-4">
                Your training plan will be designed to fit your schedule, typically 3-5 days a week for 45-60 minutes
                per session. Nutrition takes minimal time with our flexible approach. The key is consistency, not
                endless hours. We'll find a rhythm that works for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-16 text-center">
            <PrimaryCTA />
          </div>
        </div>
      </section>

      {/* Contact Section (Existing, but re-ordered) */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
            Ready to <span className="text-cyan-400">Stop Starting Over</span>?
          </h2>
          <p className="text-xl text-slate-300 mb-12 animate-fade-in-up delay-200">
            Join 100+ clients who transformed their bodies and confidence in 6 months — without giving up their
            lifestyle
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-[#1a1a1a] border border-cyan-500/20 animate-fade-in-up delay-300">
              <CardContent className="p-8">
                <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Free Consultation</h3>
                <p className="text-slate-300 mb-6">
                  Book a complimentary 30-minute session to discuss your goals and see if we're a good fit.
                </p>
                <Button
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                  onClick={() => window.open("https://calendly.com/juliopedro1802/30min", "_blank")}
                >
                  Schedule Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border border-cyan-500/20 animate-fade-in-up delay-400">
              <CardContent className="p-8">
                <Handshake className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Apply for Coaching</h3>
                <p className="text-slate-300 mb-6">
                  Ready to commit? Fill out our application form to start your transformation journey.
                </p>
                <Button
                  className="w-full bg-accent-orange hover:bg-orange-600 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-orange/50"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSfEo-K1bcx8_Z2CRRvdnVazWfxDf-THuxPJOo2tHhW1ugiFCA/viewform?pli=1",
                      "_blank",
                    )
                  }
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image
              src="/images/jmp-logo.png"
              alt="JMP Coaching Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <div className="text-2xl font-bold text-cyan-400">JMP Coaching</div>
          </div>
          <p className="text-slate-400 mb-6">
            Transforming lives through personalized coaching and AI-powered insights
          </p>
          <div className="text-slate-500">© 2024 JMP Coaching. All rights reserved.</div>
        </div>
      </footer>

      {/* Sticky CTA Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/90 backdrop-blur-sm border-t border-cyan-500/10 py-3 px-4 md:hidden z-50">
        <div className="max-w-md mx-auto flex flex-col items-center gap-2">
          <a
            href="https://calendly.com/juliopedro1802/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full bg-accent-orange hover:bg-orange-600 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-orange/50 text-lg">
              Start My 6-Week Plan
            </Button>
          </a>
          <p className="text-xs text-slate-300 font-medium">Limited to 5 spots/month</p>
        </div>
      </div>
    </div>
  )
}
