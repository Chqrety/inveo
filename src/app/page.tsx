"use client"

import { useState } from "react"
import { LockScreen, Main } from "../components"
import { AnimatePresence, motion } from "framer-motion"

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false)

  return (
    <div className="relative w-full h-screen">
      <Main isUnlocked={isUnlocked} />

      <AnimatePresence>
        {!isUnlocked && (
          <motion.div
            key="lockscreen"
            className="absolute top-0 left-0 flex items-center justify-center bg-[#06205b]"
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <LockScreen onUnlock={() => setIsUnlocked(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
