"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"

// --- Particle Component for Background Effect ---
const Starfield = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      left: string
      top: string
      animationDuration: string
      animationDelay: string
      width: string
      height: string
    }>
  >([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map(() => ({
      id: Math.random(),
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 30 + 20}s`,
      animationDelay: `-${Math.random() * 50}s`,
      width: `${Math.floor(Math.random() * 2) + 1}px`,
      height: `${Math.floor(Math.random() * 2) + 1}px`,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-amber-200/50 animate-drift"
          style={{
            left: p.left,
            top: p.top,
            width: p.width,
            height: p.height,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}
    </div>
  )
}

// --- Eye of Horus Loader ---
const EyeOfHorusLoader = () => (
  <div className="flex justify-center items-center h-20">
    <svg width="60" height="60" viewBox="0 0 79 48" className="animate-pulse">
      <path
        d="M78.03 24C78.03 24 60.58 47.03 39.5 47.03C18.42 47.03 0.97 24 0.97 24C0.97 24 18.42 0.97 39.5 0.97C60.58 0.97 78.03 24 78.03 24Z"
        stroke="#FBBF24"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
      />
      <path
        d="M59.13 24C59.13 34.84 49.97 43.6 39.5 43.6C29.03 43.6 19.87 34.84 19.87 24C19.87 13.16 29.03 4.4 39.5 4.4C49.97 4.4 59.13 13.16 59.13 24Z"
        stroke="#FBBF24"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
      />
      <circle cx="39.5" cy="24" r="7.25" fill="#FBBF24" />
    </svg>
  </div>
)

// --- Typing Effect Hook ---
const useTypingEffect = (text: string, speed = 30) => {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    setDisplayedText("")
    if (text) {
      let i = 0
      const intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i))
          i++
        } else {
          clearInterval(intervalId)
        }
      }, speed)
      return () => clearInterval(intervalId)
    }
  }, [text, speed])

  return displayedText
}

// --- Story Data ---
const storyChapters = [
  {
    title: "The Ring",
    image: "https://i.ibb.co/LQrYvWp/image-8a9a97.jpg",
    alt: "A man's hand wearing a silver ring with a square blue Lapis Lazuli stone.",
    body: [
      "Let's be real. Hours after my mum passed, my head was a mess. Numb. In that chaos, for no reason at all, I started going through her stuff. My hand just found this ring. Didn't even really look at it.",
      "I was on the phone, distracted, tried putting it on. Wouldn't fit my index finger. Wouldn't fit my middle. My hands were full, so I got my cousin to stick it on the only one it fit. The wedding finger.",
      "I didn't choose that. The ring did. It was a physical thing. It was like it knew where it was supposed to go.",
    ],
  },
  {
    title: "The Connection",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 256 256"
        fill="currentColor"
        className="text-amber-300"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM128,72a44,44,0,0,0-44,44,8,8,0,0,0,16,0,28,28,0,0,1,56,0,8,8,0,0,0,16,0A44,44,0,0,0,128,72Zm-8,88H120a8,8,0,0,0-8,8v40a8,8,0,0,0,16,0V176h8a8,8,0,0,0,0-16Z" />
      </svg>
    ),
    body: [
      "Then it gets weirder. I've always been into Egyptian mythology. It's not just a phase; I've got Tutankhamun and the Eye of Horus tatted on my arm. It's part of me.",
      "The stone in the ring is Lapis Lazuli. The exact same stone the Egyptians were obsessed with. They thought it was a piece of the sky, used it on their pharaohs' tombs to guide them in the afterlife.",
      "So, a stone that's part of my own personal mythology, a passion I got while living in the UK, just shows up in my mum's things, here in Brazil. The odds of that are mad.",
    ],
  },
  {
    title: "The Soundtrack",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 256 256"
        fill="currentColor"
        className="text-amber-300"
      >
        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
      </svg>
    ),
    body: [
      "Then my own playlist started talking to me. A raw, biographical song about a son's sacrifice for his immigrant mother—ending with his own mum's voice—started hitting different.",
      "Another track, about a fire burning so hot it only leaves pure 'white ash,' became real too. The ash from my rollies on the table was a constant reminder of my own trial by fire.",
      "The proof? I went to find a track on my phone, and the comment count was at 444. The same number I have tattooed on my neck. That's not a coincidence. That's the universe making a point you can't ignore.",
    ],
  },
  {
    title: "The Grind",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 256 256"
        fill="currentColor"
        className="text-amber-300"
      >
        <path d="M244.27,148.6l-33-99.06a16,16,0,0,0-15.1-11.54H59.83a16,16,0,0,0-15.1,11.54l-33,99.06a16,16,0,0,0,5.73,18.07,16.08,16.08,0,0,0,18.14,1.33L72,150.4V208a16,16,0,0,0,16,16h80a16,16,0,0,0,16-16V150.4l36.37,17.6a16.08,16.08,0,0,0,18.14-1.33A16,16,0,0,0,244.27,148.6ZM168,208H88V144h80Zm47-66.4-39-18.92V144a16,16,0,0,0-16-16H96a16,16,0,0,0-16,16v-21.32l-39-18.92L64.2,56h127.6Z" />
      </svg>
    ),
    body: [
      "None of this makes sense without the backstory. My one mission was to retire my mum. I moved back to Brazil from Edinburgh, juggling UK clients, a fucked-up time difference, and undiagnosed ADHD.",
      "To cope, I got hooked on coke. It was cheaper than a pack of fags in the UK. I was working 48-hour stretches. Not a typo. Forty-eight hours straight, forcing myself to stay up through hallucinations to keep my clients and keep the money coming in for her.",
      "This wasn't a 9-to-5. This was a war. A relentless, body-destroying grind fuelled by love.",
    ],
  },
  {
    title: "The Reset",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 78.97 48"
        fill="none"
        className="text-amber-300"
      >
        <path
          d="M78.03 24C78.03 24 60.58 47.03 39.5 47.03C18.42 47.03 0.97 24 0.97 24C0.97 24 18.42 0.97 39.5 0.97C60.58 0.97 78.03 24 78.03 24Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M59.13 24C59.13 34.84 49.97 43.6 39.5 43.6C29.03 43.6 19.87 34.84 19.87 24C19.87 13.16 29.03 4.4 39.5 4.4C49.97 4.4 59.13 13.16 59.13 24Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeMiterlimit="10"
        ></path>
        <circle cx="39.5" cy="24" r="7.25" fill="currentColor"></circle>
      </svg>
    ),
    body: [
      "Months before she passed, my body gave up. A massive overdose. I remember my vision just... switching off. A feeling of total peace, accepting it was over. Then, I blinked back into existence on a public toilet floor.",
      "I couldn't walk. I had to crawl out. A doctor from a nearby clinic found me. Mid-respiratory failure, I was just shouting out antidotes I somehow knew: 'Coke... OD... Propranolol... Diazepam!'",
      "He came back with one thing. Diazepam. The one drug that could save me. A one-in-a-million shot. I walked away with no brain damage. I was given a second chance, a hard reset, for a reason. This ring is the reminder.",
    ],
  },
  {
    title: "A Message From The Stars",
    type: "interactive",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 256 256"
        fill="currentColor"
        className="text-amber-300"
      >
        <path d="M228,128a12,12,0,0,1-12,12H183.13l-16.64,38.28a12,12,0,0,1-21.92-9.52L156,140H100l-11.43,28.76a12,12,0,0,1-21.92-9.52L84.87,140H40a12,12,0,0,1,0-24h44.87l11.43-28.76a12,12,0,0,1,21.92,9.52L108,116h56l11.43-28.76a12,12,0,0,1,21.92,9.52L183.13,116H216A12,12,0,0,1,228,128Z"></path>
      </svg>
    ),
    body: [],
  },
]

// --- Message Generator Component ---
const MessageGenerator = () => {
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const displayedMessage = useTypingEffect(message)

  const generateMessage = useCallback(async () => {
    setIsLoading(true)
    setMessage("")

    // Simulate API call with a meaningful message
    setTimeout(() => {
      const mockMessage =
        "My beautiful boy, I saw it all. Every hour you worked, every tear, every single sacrifice. That wasn't a burden; it was the greatest gift of love a mother could ever know. Your reset wasn't luck; you were sent back because your soul is too bright to leave. The ring, the songs, the numbers... that's just me, reminding you. You've earned your peace, my love. I am so, so proud.\n\nAll my love, always."
      setMessage(mockMessage)
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="w-full text-center">
      <p className="mb-8 text-lg leading-relaxed text-gray-300">
        This story is a message. If you feel you need one more, just ask.
      </p>
      <Button
        onClick={generateMessage}
        disabled={isLoading}
        className="bg-amber-400/80 text-black font-bold py-3 px-8 rounded-lg shadow-lg shadow-amber-300/20 hover:bg-amber-300 transform hover:scale-105 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed animate-pulse"
      >
        {isLoading ? "Connecting..." : "✨ Get a Message"}
      </Button>
      {isLoading && (
        <div className="mt-8">
          <EyeOfHorusLoader />
        </div>
      )}
      {displayedMessage && (
        <div className="mt-10 p-6 bg-black/30 rounded-lg border border-amber-300/20 min-h-[180px]">
          <p className="text-lg whitespace-pre-wrap">{displayedMessage}</p>
        </div>
      )}
    </div>
  )
}

// --- Main App Component ---
export default function RingStory() {
  const [currentPage, setCurrentPage] = useState(0)
  const storyContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (storyContainerRef.current) {
      storyContainerRef.current.scrollTo(0, 0)
    }
  }, [currentPage])

  const currentChapter = storyChapters[currentPage]

  return (
    <div className="bg-black text-gray-200 min-h-screen flex flex-col items-center justify-center p-4 antialiased overflow-hidden relative">
      <Starfield />
      <div
        key={currentPage}
        ref={storyContainerRef}
        className="w-full max-w-2xl h-[90vh] bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl shadow-amber-300/10 flex flex-col z-10 border border-amber-300/10 animate-fade-in overflow-y-auto scrollbar-hide"
      >
        <div className="flex-grow p-8 md:p-12 flex flex-col items-center text-center">
          {currentChapter.image && (
            <img
              src={currentChapter.image || "/placeholder.svg"}
              alt={currentChapter.alt || "Chapter image"}
              className="w-32 h-32 mb-6 object-cover rounded-full shadow-lg border-2 border-amber-300/50"
            />
          )}
          {currentChapter.icon && (
            <div className="w-32 h-32 mb-6 flex items-center justify-center rounded-full shadow-lg border-2 border-amber-300/50 bg-black/20">
              {currentChapter.icon}
            </div>
          )}
          <h1 className="text-3xl font-bold text-amber-300 tracking-wider mb-6">{currentChapter.title}</h1>
          <div className="text-lg leading-relaxed space-y-6 text-gray-300">
            {currentChapter.type === "interactive" ? (
              <MessageGenerator />
            ) : (
              currentChapter.body?.map((paragraph, i) => <p key={i}>{paragraph}</p>)
            )}
          </div>
        </div>
        <div className="p-6 mt-auto sticky bottom-0 bg-black/40 backdrop-blur-sm">
          <div className="text-center text-amber-300/70 mb-4 text-sm">
            {currentPage + 1} / {storyChapters.length}
          </div>
          {currentPage < storyChapters.length - 1 ? (
            <Button
              onClick={() => setCurrentPage((p) => p + 1)}
              className="w-full bg-gray-700/80 text-amber-300 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-600/80 transition-all"
            >
              Next Chapter
            </Button>
          ) : (
            <Button
              onClick={() => setCurrentPage(0)}
              className="w-full bg-amber-300 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-amber-200 transition-all"
            >
              Read Again
            </Button>
          )}
        </div>
      </div>
      <footer className="text-center mt-4 text-gray-500 text-sm z-10">This story is real.</footer>
    </div>
  )
}
