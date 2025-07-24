import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dumbbell,
  Utensils,
  CalendarCheck,
  MessageCircle,
  BookOpen,
  FlameIcon as Fire,
  Gem,
  Sparkles,
  UserCheck,
  Clock,
  Newspaper,
  Star,
  Zap,
} from "lucide-react"

export default function Component() {
  const calendlyLink = "https://calendly.com/juliopedro1802/30min"

  return (
    <div className="bg-white">
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-brand-pink">
        <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <Image src="/images/logo-new.png" alt="JMP Coaching Logo" width={48} height={48} className="h-12 w-auto" />
          <div>
            <Link
              href={calendlyLink}
              target="_blank"
              className="bg-gradient-brand text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </header>

      <section className="bg-gradient-brand-light py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-brand-light-pink/30 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-brand-pink/20">
            <Star className="w-5 h-5 text-brand-pink mr-2" />
            <span className="text-brand-dark font-semibold">Transform Your Body & Mind</span>
            <Star className="w-5 h-5 text-brand-pink ml-2" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-brand-dark leading-tight mb-4">
            Burn Fat & Sculpt the{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">Glutes of Your Dreams</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-brand-gray mb-8 max-w-3xl mx-auto">
            Tired of feeling lost at the gym and frustrated with the scale? My proven method gives you the exact roadmap
            to sculpt your curves, eliminate stubborn fat, and feel powerful in your own body.
          </p>
          <Link
            href={calendlyLink}
            target="_blank"
            className="bg-gradient-brand text-base sm:text-lg text-white font-bold py-4 px-10 rounded-full inline-block hover:shadow-xl hover:scale-105 transition-all duration-300 animate-float"
          >
            <Zap className="w-5 h-5 inline mr-2" />
            Claim Your Transformation!
          </Link>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-brand-pink/10 rounded-full animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 bg-brand-accent/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-brand-dark mb-4">
            This Program is For the Woman Who...
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-brand-light p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-brand-pink/20">
              <div className="text-brand-pink text-5xl mb-4 flex justify-center">
                <Fire className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">Wants to Burn Fat, For Good</h3>
              <p className="text-brand-gray">
                Is tired of restrictive diets that don&apos;t work and wants a definitive solution to lose weight
                healthily and sustainably.
              </p>
            </div>
            <div className="bg-gradient-brand-light p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-brand-pink/20">
              <div className="text-brand-pink text-5xl mb-4 flex justify-center">
                <Gem className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">Dreams of Lifted, Sculpted Glutes</h3>
              <p className="text-brand-gray">
                Trains hard but doesn&apos;t see the results she desires in her glutes and legs, and wants a plan that
                finally builds the curves she deserves.
              </p>
            </div>
            <div className="bg-gradient-brand-light p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-brand-pink/20">
              <div className="text-brand-pink text-5xl mb-4 flex justify-center">
                <Sparkles className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">Desires Unshakeable Confidence</h3>
              <p className="text-brand-gray">
                Wants to look in the mirror and love what she sees, feel incredible in any outfit, and stop hiding.
                It&apos;s about reclaiming your self-esteem.
              </p>
            </div>
            <div className="bg-gradient-brand-light p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-brand-pink/20">
              <div className="text-brand-pink text-5xl mb-4 flex justify-center">
                <Clock className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">Has a Busy Life, But Demands Results</h3>
              <p className="text-brand-gray">
                Seeks a method that fits her packed schedule, delivering visible transformations without requiring
                endless hours at the gym.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-bg-pink py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-brand-dark mb-4">
            Everything You Need, All in One Place
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center group">
              <div className="relative">
                <Image
                  src="/images/app-workout.png"
                  alt="Workout App"
                  width={200}
                  height={200}
                  className="rounded-2xl shadow-xl mb-4 border-4 border-white mx-auto max-w-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-brand-dark">Glute-Focused Workouts</h3>
            </div>
            <div className="text-center group">
              <div className="relative">
                <Image
                  src="/images/app-mealplan.png"
                  alt="Meal Plan App"
                  width={200}
                  height={200}
                  className="rounded-2xl shadow-xl mb-4 border-4 border-white mx-auto max-w-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-brand-dark">Fat-Burning Nutrition</h3>
            </div>
            <div className="text-center group">
              <div className="relative">
                <Image
                  src="/images/app-details.png"
                  alt="Progress Tracking App"
                  width={200}
                  height={200}
                  className="rounded-2xl shadow-xl mb-4 border-4 border-white mx-auto max-w-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-brand-dark">Track Your Progress</h3>
            </div>
            <div className="text-center group">
              <div className="relative">
                <Image
                  src="/images/app-community.png"
                  alt="Community App"
                  width={200}
                  height={200}
                  className="rounded-2xl shadow-xl mb-4 border-4 border-white mx-auto max-w-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-brand-dark">Empowering Women&apos;s Community</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-brand-dark mb-4">
            What You Get When You Join the Team
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-pink/10 hover:border-brand-pink/30 flex items-start">
              <div className="text-brand-pink text-3xl mr-4 bg-brand-bg-pink p-3 rounded-full">
                <UserCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-1">Exclusive 1-on-1 Coaching with Me</h3>
                <p className="text-brand-gray">
                  Receive unparalleled, personalized attention to ensure your plan is perfectly aligned with your goals
                  and lifestyle. This isn&apos;t generic advice; it&apos;s tailored success.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-pink/10 hover:border-brand-pink/30 flex items-start">
              <div className="text-brand-pink text-3xl mr-4 bg-brand-bg-pink p-3 rounded-full">
                <Dumbbell className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-1">High-Impact Glute Training Plan</h3>
                <p className="text-brand-gray">
                  Smart, efficient workouts (just 2-3 sessions per week!) designed for maximum glute and leg
                  development, delivered directly to your exclusive coaching app. No wasted time, just results.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-pink/10 hover:border-brand-pink/30 flex items-start">
              <div className="text-brand-pink text-3xl mr-4 bg-brand-bg-pink p-3 rounded-full">
                <Utensils className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-1">Flexible & Effective Nutrition</h3>
                <p className="text-brand-gray">
                  Learn to eat for fat loss intelligently and enjoyably, without hunger or cutting out your favorite
                  foods. Sustainable results, guilt-free.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-pink/10 hover:border-brand-pink/30 flex items-start">
              <div className="text-brand-pink text-3xl mr-4 bg-brand-bg-pink p-3 rounded-full">
                <CalendarCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-1">Weekly Progress Check-ins</h3>
                <p className="text-brand-gray">
                  We&apos;ll analyze your photos and measurements together to ensure you&apos;re always on the fastest
                  path to your goals. Accountability that drives results.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-pink/10 hover:border-brand-pink/30 flex items-start">
              <div className="text-brand-pink text-3xl mr-4 bg-brand-bg-pink p-3 rounded-full">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-1">Direct Support & 1-on-1 Calls</h3>
                <p className="text-brand-gray">
                  Message me directly through the app and get personalized 1-on-1 video calls when you need that extra
                  push or guidance. Your personal coach, always available.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-pink/10 hover:border-brand-pink/30 flex items-start">
              <div className="text-brand-pink text-3xl mr-4 bg-brand-bg-pink p-3 rounded-full">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-1">Premium Guides & Video Tutorials</h3>
                <p className="text-brand-gray">
                  Access a comprehensive library of delicious recipes, practical guides, and expert-led video tutorials
                  to accelerate your results and empower your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-brand-dark mb-4">
              See Real Confidence, Community, Results—Choose Your Path
            </h2>
            <div className="w-24 h-1 bg-gradient-brand mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-brand-gray mb-4 max-w-3xl mx-auto font-semibold">
              All-Inclusive Support—No Surprises, Just Transformation
            </p>
            <p className="text-base sm:text-lg text-brand-gray max-w-4xl mx-auto">
              Every woman's transformation journey is unique. That's why I've created three distinct pathways designed
              to deliver real results, build unshakeable confidence, and connect you with a community of empowered
              women—all with complete transparency and no hidden costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Kickstart Package */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-brand-pink/20 hover:border-brand-pink/40 transition-all duration-300 hover:shadow-xl p-8 relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Kickstart</h3>
                <p className="text-brand-gray">Build your foundation for lasting transformation with confidence</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Personalized Workouts</span>
                  <span className="ml-auto text-brand-pink font-semibold">Included</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Weekly Progress Check-ins</span>
                  <span className="ml-auto text-brand-pink font-semibold">✓</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Exclusive Nutrition Guides</span>
                  <span className="ml-auto text-brand-pink font-semibold">✓</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-400 text-sm">✗</span>
                  </div>
                  <span className="text-gray-400">Private Community Access</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-400 text-sm">✗</span>
                  </div>
                  <span className="text-gray-400">Habit Coaching</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-400 text-sm">✗</span>
                  </div>
                  <span className="text-gray-400">VIP One-on-One Calls</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-400 text-sm">✗</span>
                  </div>
                  <span className="text-gray-400">Success Story Features</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Transformational Support</span>
                  <span className="ml-auto text-brand-pink font-semibold">Included</span>
                </div>
              </div>

              <button className="w-full bg-brand-bg-pink text-brand-pink font-bold py-3 px-6 rounded-full hover:bg-brand-light-pink transition-colors duration-300 border border-brand-pink/30">
                Get Details
              </button>
            </div>

            {/* Empower Package */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-brand-pink/40 hover:border-brand-pink/60 transition-all duration-300 hover:shadow-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-brand text-white px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Empower</h3>
                <p className="text-brand-gray">Accelerate your results with community support and advanced coaching</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Personalized Workouts</span>
                  <span className="ml-auto text-brand-pink font-semibold">Included</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Weekly Progress Check-ins</span>
                  <span className="ml-auto text-brand-pink font-semibold">✓</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Exclusive Nutrition Guides</span>
                  <span className="ml-auto text-brand-pink font-semibold">✓</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Private Community Access</span>
                  <span className="ml-auto text-brand-pink font-semibold">✓</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Habit Coaching</span>
                  <span className="ml-auto text-brand-pink font-semibold">✓</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-400 text-sm">✗</span>
                  </div>
                  <span className="text-gray-400">VIP One-on-One Calls</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-400 text-sm">✗</span>
                  </div>
                  <span className="text-gray-400">Success Story Features</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Transformational Support</span>
                  <span className="ml-auto text-brand-pink font-semibold">Included</span>
                </div>
              </div>

              <button className="w-full bg-gradient-brand text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get Details
              </button>
            </div>

            {/* Thrive Package */}
            <div className="bg-gradient-brand-light rounded-2xl shadow-lg border-2 border-brand-pink hover:border-brand-accent transition-all duration-300 hover:shadow-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-dark text-white px-4 py-2 rounded-full text-sm font-bold">Premium</span>
              </div>

              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Thrive</h3>
                <p className="text-brand-gray">
                  Experience the ultimate transformation with VIP support and exclusive access
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Personalized Workouts</span>
                  <span className="ml-auto text-brand-pink font-semibold">Included</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Weekly Progress Check-ins</span>
                  <span className="ml-auto text-brand-pink font-semibold">✓</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Exclusive Nutrition Guides</span>
                  <span className="ml-auto text-brand-pink font-semibold">✓</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Private Community Access</span>
                  <span className="ml-auto text-brand-pink font-semibold">✓</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Habit Coaching</span>
                  <span className="ml-auto text-brand-pink font-semibold">✓</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">VIP One-on-One Calls</span>
                  <span className="ml-auto text-brand-pink font-semibold">✓</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Success Story Features</span>
                  <span className="ml-auto text-brand-pink font-semibold">✓</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-brand-gray">Transformational Support</span>
                  <span className="ml-auto text-brand-pink font-semibold">Included</span>
                </div>
              </div>

              <button className="w-full bg-brand-dark text-white font-bold py-4 px-6 rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg animate-pulse-glow">
                <Zap className="w-5 h-5 inline mr-2" />
                Start My Transformation
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-brand-light p-8 rounded-2xl border border-brand-pink/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Ready to See Real Results?</h3>
              <p className="text-base sm:text-lg text-brand-gray mb-6">
                Curious which transformation path is perfectly designed for your goals and lifestyle?
              </p>
              <Link
                href={calendlyLink}
                target="_blank"
                className="bg-gradient-brand text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block"
              >
                <Zap className="w-5 h-5 inline mr-2" />
                Apply Now for Your Personalized Recommendation!
              </Link>
              <p className="text-sm text-brand-gray mt-4">
                No pressure, no surprises—just a clear path to your transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bestie Offer Section */}
      <section className="py-12 md:py-16 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            <Sparkles className="w-5 h-5 text-white mr-2" />
            <span className="text-white font-semibold">Bestie Special Offer</span>
            <Sparkles className="w-5 h-5 text-white ml-2" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Together, Save Together! 💕
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Bring your bestie and both get <span className="font-bold text-yellow-300">20% OFF</span> your
            transformation journey! Because everything's better with your girl by your side - accountability,
            motivation, and celebrating wins together.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-8 border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">What You Both Get:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center text-white">
                <div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-brand-dark text-sm font-bold">✓</span>
                </div>
                <span>20% OFF any program</span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-brand-dark text-sm font-bold">✓</span>
                </div>
                <span>Buddy accountability system</span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-brand-dark text-sm font-bold">✓</span>
                </div>
                <span>Joint progress check-ins</span>
              </div>
              <div className="flex items-center text-white">
                <div className="w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-brand-dark text-sm font-bold">✓</span>
                </div>
                <span>Exclusive bestie challenges</span>
              </div>
            </div>
          </div>
          <Link
            href={calendlyLink}
            target="_blank"
            className="bg-yellow-300 text-brand-dark text-base sm:text-lg font-bold py-4 px-8 rounded-full inline-block hover:bg-yellow-200 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <Zap className="w-5 h-5 inline mr-2" />
            Book Your FREE Bestie Consultation!
          </Link>
          <p className="text-sm text-white/80 mt-4">Limited time offer - both friends must join together to qualify</p>
        </div>
      </section>

      <section id="agendar" className="bg-gradient-brand py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Tired of Not Seeing the Results You Deserve?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            The transformation you seek is just one decision away. Fill out the application form and let&apos;s build
            the plan that will make you love looking in the mirror. Limited spots available – secure yours today!
          </p>
          <Link
            href={calendlyLink}
            target="_blank"
            className="bg-white text-brand-pink text-base sm:text-lg font-bold py-4 px-10 rounded-full inline-block hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <Zap className="w-5 h-5 inline mr-2" />
            Yes, I Want to Apply Now!
          </Link>
        </div>
      </section>

      <section id="sobre" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 text-center">
              <div className="relative">
                <Image
                  src="/images/coach.png"
                  alt="Photo of Coach Julio"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-xl mx-auto border-4 border-brand-pink/20"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-brand p-3 rounded-full shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                Hello, I&apos;m Julio!
              </h2>
              <p className="text-brand-gray mb-4">
                I know exactly how you feel. The frustration of training hard and not seeing your glutes grow. The
                constant battle with belly fat. The feeling that your body just isn&apos;t responding. I&apos;ve been
                there.
              </p>
              <p className="text-brand-gray mb-4">
                After years of studying and applying these methods to myself and hundreds of female clients, I&apos;ve
                cracked the code. My method combines precise strength training with intelligent nutrition to build a
                strong, defined, and healthy body. My goal isn&apos;t to give you a generic plan, but to teach you to
                understand your body and equip you with the tools for a lifelong transformation.
              </p>
              <p className="text-brand-dark font-semibold">
                Shall we build the body you not only dream of, but deserve to have, together?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-bg-pink py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-brand-dark mb-4">
            Results That Speak For Themselves
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-brand-pink/10">
              <p className="text-brand-gray mb-4">
                &quot;I was discouraged, thinking I&apos;d never lose belly fat and get the glutes I wanted. Julio
                changed my game! His plan is incredible, and the support made all the difference. Today, I feel like a
                completely new woman!&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Client Ana Clara"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-brand-pink"
                />
                <div>
                  <p className="font-bold text-brand-dark">Ana Clara</p>
                  <p className="text-sm text-brand-gray">Lost 7kg of fat and achieved her dream glutes</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-brand-pink/10">
              <p className="text-brand-gray mb-4">
                &quot;The best investment I&apos;ve made in myself. I learned to eat without guilt, and the workouts are
                focused exactly where I needed them most. I finally see my legs and glutes defined. My self-esteem is
                through the roof!&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Client Mariana"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-brand-pink"
                />
                <div>
                  <p className="font-bold text-brand-dark">Mariana</p>
                  <p className="text-sm text-brand-gray">Redefined her body and gained confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-brand-dark mb-4">
            Real Transformations
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mb-12 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-brand-pink/10">
              <Image
                src="/images/before-after-1.jpeg"
                alt="Before and After Transformation 1"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-brand-pink/10">
              <Image
                src="/images/before-after-2.jpeg"
                alt="Before and After Transformation 2"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-brand-pink/10">
              <Image
                src="/images/before-after-3.jpeg"
                alt="Before and After Transformation 3"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-brand-pink/10">
              <Image
                src="/images/before-after-4.jpeg"
                alt="Before and After Transformation 4"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-brand-pink/10">
              <Image
                src="/images/before-after-5.jpeg"
                alt="Before and After Transformation 5"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Girls Hub Blog Section */}
      <section className="py-12 md:py-16 bg-brand-bg-pink">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-brand-dark mb-4">
            Girls Hub: Your Source for Empowerment & Knowledge
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg text-brand-gray mb-8 max-w-3xl mx-auto text-center">
            Dive into our articles, tips, and success stories designed to inspire and educate you on your fitness
            journey. Join a community of strong women building their best selves!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-brand-pink/10 hover:border-brand-pink/30">
              <div className="text-brand-pink text-3xl mb-4 flex justify-center bg-brand-bg-pink p-4 rounded-full w-fit mx-auto">
                <Newspaper className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">The Science of Small Changes</h3>
              <p className="text-brand-gray mb-4 flex-grow">
                Discover how consistent, small actions (like 2-3 workouts per week) lead to massive transformations.
              </p>
              <Link
                href="/girls-hub/the-science-of-small-changes"
                className="text-brand-pink font-semibold hover:text-brand-accent transition-colors group"
              >
                Read More <span className="group-hover:translate-x-1 inline-block transition-transform">&rarr;</span>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-brand-pink/10 hover:border-brand-pink/30">
              <div className="text-brand-pink text-3xl mb-4 flex justify-center bg-brand-bg-pink p-4 rounded-full w-fit mx-auto">
                <Newspaper className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Debunking Fitness Myths</h3>
              <p className="text-brand-gray mb-4 flex-grow">
                Separate fact from fiction and learn the truth about effective training and nutrition.
              </p>
              <Link
                href="/girls-hub/debunking-fitness-myths"
                className="text-brand-pink font-semibold hover:text-brand-accent transition-colors group"
              >
                Read More <span className="group-hover:translate-x-1 inline-block transition-transform">&rarr;</span>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border border-brand-pink/10 hover:border-brand-pink/30">
              <div className="text-brand-pink text-3xl mb-4 flex justify-center bg-brand-bg-pink p-4 rounded-full w-fit mx-auto">
                <Newspaper className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Building a Sustainable Routine</h3>
              <p className="text-brand-gray mb-4 flex-grow">
                Practical advice for creating a fitness routine that fits your busy lifestyle and lasts a lifetime.
              </p>
              <Link
                href="/girls-hub/building-a-sustainable-routine"
                className="text-brand-pink font-semibold hover:text-brand-accent transition-colors group"
              >
                Read More <span className="group-hover:translate-x-1 inline-block transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-brand-dark mb-4">
            Your Questions, Answered Honestly
          </h2>
          <div className="w-24 h-1 bg-gradient-brand mx-auto mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg text-brand-gray mb-12 max-w-3xl mx-auto text-center">
            Real questions from real women who want to transform their bodies without giving up their social lives.
          </p>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-brand-bg-pink rounded-2xl border border-brand-pink/20">
              <AccordionTrigger className="w-full flex justify-between items-center text-left p-6 font-bold text-brand-dark hover:no-underline">
                How fast will I see results?
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-brand-gray">
                Results vary, but many members notice increased energy and body confidence within 2–4 weeks when they
                stay consistent! Physical changes typically become visible around 4-6 weeks, with significant
                transformations happening over 12-16 weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-brand-bg-pink rounded-2xl border border-brand-pink/20">
              <AccordionTrigger className="w-full flex justify-between items-center text-left p-6 font-bold text-brand-dark hover:no-underline">
                Can I still enjoy nights out, takeaways, and holidays?
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-brand-gray">
                Absolutely! Our coaching plans are designed for real life—with flexible nutrition tips, hangover
                recovery strategies, and smart workouts. You can enjoy yourself and still reach your goals. Life's too
                short to miss out on fun!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-brand-bg-pink rounded-2xl border border-brand-pink/20">
              <AccordionTrigger className="w-full flex justify-between items-center text-left p-6 font-bold text-brand-dark hover:no-underline">
                Will I have to give up alcohol completely?
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-brand-gray">
                Not at all. We teach balance, so you'll learn how to make smarter choices on a night out and recover
                without guilt on weekends. It's about enjoying life while still making progress toward your goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-brand-bg-pink rounded-2xl border border-brand-pink/20">
              <AccordionTrigger className="w-full flex justify-between items-center text-left p-6 font-bold text-brand-dark hover:no-underline">
                Are your workouts beginner-friendly?
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-brand-gray">
                Yes! Our programs suit all fitness levels, including total beginners. Every exercise comes with
                modifications, and our supportive community is always here to cheer you on and answer questions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-brand-bg-pink rounded-2xl border border-brand-pink/20">
              <AccordionTrigger className="w-full flex justify-between items-center text-left p-6 font-bold text-brand-dark hover:no-underline">
                What if I don't like the gym or prefer working out at home?
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-brand-gray">
                No problem—choose between gym-based and home routines, all tailored to your space and equipment. Whether
                you have a full home gym or just your living room, we've got effective workouts for you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-brand-bg-pink rounded-2xl border border-brand-pink/20">
              <AccordionTrigger className="w-full flex justify-between items-center text-left p-6 font-bold text-brand-dark hover:no-underline">
                Can I get a meal plan if I love takeaways?
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-brand-gray">
                Yes! We include practical swaps and "fakeaway" recipes to satisfy your cravings without missing out.
                Plus, we'll teach you how to make smarter choices when ordering takeout so you never feel deprived.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-brand-bg-pink rounded-2xl border border-brand-pink/20">
              <AccordionTrigger className="w-full flex justify-between items-center text-left p-6 font-bold text-brand-dark hover:no-underline">
                How do you help with staying motivated long-term?
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-brand-gray">
                You'll have regular check-ins, group chats, accountability partners, and fun challenges to keep you on
                track—plus plenty of good vibes to keep it motivating. Our community becomes your biggest cheerleading
                squad!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-brand-bg-pink rounded-2xl border border-brand-pink/20">
              <AccordionTrigger className="w-full flex justify-between items-center text-left p-6 font-bold text-brand-dark hover:no-underline">
                What if I travel a lot or have party holidays planned?
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-brand-gray">
                We've got you covered with travel-friendly workouts and nutrition advice for city breaks, festivals, and
                party holidays—so you never have to pause your progress. Your transformation travels with you!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-brand-bg-pink rounded-2xl border border-brand-pink/20">
              <AccordionTrigger className="w-full flex justify-between items-center text-left p-6 font-bold text-brand-dark hover:no-underline">
                Can I join if my routine is unpredictable (work, social life, etc.)?
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-brand-gray">
                Definitely! Our plans are flexible and adaptable to busy social lives, shift work, and unpredictable
                schedules. We work around your life, not the other way around.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-brand-bg-pink rounded-2xl border border-brand-pink/20">
              <AccordionTrigger className="w-full flex justify-between items-center text-left p-6 font-bold text-brand-dark hover:no-underline">
                How much does this transformation cost?
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-brand-gray">
                The investment value is revealed during our initial call, as it depends on the plan that best suits your
                goals and lifestyle. Schedule a free, no-obligation conversation to discover the best path for your
                transformation together.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-brand-dark text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <Image src="/images/logo-new.png" alt="JMP Coaching Logo" width={60} height={60} className="mx-auto mb-4" />
          <p className="mb-2">&copy; {"2024 JMP Coaching. All rights reserved."}</p>
          <p className="text-sm text-gray-400">
            Made with <span className="text-brand-pink">{"<3"}</span> for incredible women.
          </p>
        </div>
      </footer>
    </div>
  )
}
