"use client"

import { useEffect, useState } from "react"
import { LockScreen, Section1 } from "../components"
import { AnimatePresence, motion } from "framer-motion"

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [audio] = useState(() => new Audio("/assets/backsound-ramadhan.mp3"))
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isUnlocked) {
      audio.play()
      audio.loop = true
      setIsPlaying(true)
    }
  }, [isUnlocked, audio])

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <AnimatePresence mode="wait">
      {isUnlocked ? (
        <motion.div
          key="section1"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Section1 />
          <div className="fixed flex items-center gap-2 px-5 py-3 transform rounded-full bottom-5 right-3 bg-white/20 backdrop-blur-md">
            <button onClick={togglePlayPause} className="text-lg text-white">
              {isPlaying ? "⏸" : "▶"}
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="lockscreen"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <LockScreen onUnlock={() => setIsUnlocked(true)} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
