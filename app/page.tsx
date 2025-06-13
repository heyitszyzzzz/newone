"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"

// --- Audio Component ---
const BackgroundAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="fixed top-4 right-4 z-20 flex gap-2">
      <audio ref={audioRef} loop muted={isMuted} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" type="audio/mpeg" />
        <source
          src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/zapsplat_ambience_mystical_ethereal_pad_001_24004.mp3"
          type="audio/mpeg"
        />
      </audio>
      <button
        onClick={togglePlay}
        className="bg-black/50 text-amber-300 p-2 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm border border-amber-300/20"
        title={isPlaying ? "Pause ambient music" : "Play ambient music"}
      >
        {isPlaying ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
      <button
        onClick={toggleMute}
        className="bg-black/50 text-amber-300 p-2 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm border border-amber-300/20"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>
    </div>
  )
}

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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rg.jpg-lA6fcjZPmPgzNpYL4Sb4fb8hoDwBkg.jpeg",
    alt: "A hand wearing a silver ring with a square blue Lapis Lazuli stone on the ring finger.",
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
      "Then it gets weirder. I've always been into Egyptian mythology. It's not just a phase; it's a core part of my identity. So when I found out the stone in the ring was Lapis Lazuli, the exact same stone the Egyptians were obsessed with, it felt significant.",
      "They thought it was a piece of the sky, a guide for souls in the afterlife. So, a stone that's part of my own personal mythology just shows up in my mum's things. The odds of that are mad.",
    ],
  },
  {
    title: "The Prophecy on Skin",
    type: "gallery",
    body: [
      "And when I say it's a part of my identity, I mean it's literally written on my skin. This isn't just an interest; it's a story I've been carrying for years. Here's the proof.",
    ],
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed.jpg-JMscswTrved2bbqQ3RZ3wRdrbtNcD9.jpeg",
        alt: "Tattoo of Anubis with ankh symbol and Eye of Horus inside a pyramid on forearm",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tutt.jpg-7bJT9fKjgLWppvWN13ANbiNyP9cx0X.jpeg",
        alt: "Tattoo of Pharaoh Tutankhamun's death mask on arm",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kk.jpg-TBojg7Xnd1rwgVfYIK5nc9PUsgUnJK.jpeg",
        alt: "Tattoo of ornate gates with stairway surrounded by clouds",
      },
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
      "Then the outside world started confirming it. My own playlist served up a raw, biographical song about a son's sacrifice for his immigrant mother—ending with his real mum's voice.",
      "Another track, about a fire burning so hot it only leaves pure 'white ash,' became real too. The ash from my rollies on the table was a constant reminder of my own trial by fire.",
      "The proof? I went to find a track online, and the comment count was at 444. The same number I have tattooed on my neck. That's not a coincidence. That's the universe making a point you can't ignore.",
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
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_r3vnk5r3vnk5r3vn.png-rMPIRpMvZ7a33eSVVEmB1fmAwPuONG.jpeg",
    alt: "Egyptian pyramids under a cosmic starry sky with nebulae and constellation lines",
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
        This whole story isn't a coincidence. It's a message. If you feel you need one more, just ask.
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
      <BackgroundAudio />
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
            ) : currentChapter.type === "gallery" ? (
              <>
                {currentChapter.body?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {currentChapter.images?.map((img, i) => (
                    <img
                      key={i}
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      className="rounded-lg shadow-lg w-full h-auto object-cover border-2 border-amber-300/20 hover:border-amber-300/50 transition-all duration-300"
                    />
                  ))}
                </div>
              </>
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
