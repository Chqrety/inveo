import { useEffect, useState } from "react"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"
import Image from "next/image"

export default function Main({ isUnlocked }: { isUnlocked: boolean }) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAudio(new Audio("/assets/makrab/Hindia-Kita-ke-Sana.mp3"))
    }
  }, [])

  useEffect(() => {
    if (isUnlocked && audio) {
      audio.play()
      audio.loop = true
      setIsPlaying(true)
    }
  }, [isUnlocked, audio])

  const togglePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
      setIsPlaying(!isPlaying)
    }
  }
  return (
    <>
      <button
        onClick={togglePlayPause}
        className="fixed z-20 flex items-center gap-2 px-3 py-3 transform rounded-full bottom-5 right-3 bg-white/20 backdrop-blur-md text-lg text-white"
      >
        {isPlaying ? (
          <Image
            src="/assets/makrab/pause.svg"
            width={16}
            height={16}
            alt="pause"
          />
        ) : (
          <Image
            src="/assets/makrab/play.svg"
            width={16}
            height={16}
            alt="play"
          />
        )}
      </button>
      <div className="bg-[#018bd2]">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section5 />
        <Section4 />
      </div>
    </>
  )
}
