import { playball } from "@/app/fonts"
import Image from "next/image"
import { CountDown } from ".."
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Section3() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
    "/assets/makrab/moment-1.jpg",
    "/assets/makrab/moment-2.jpg",
    "/assets/makrab/moment-3.jpg",
    "/assets/makrab/moment-4.jpg",
  ]

  // Auto-slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative flex flex-col pt-12 mt-32">
      {/* element kiri with motion */}
      <motion.div
        className="absolute bottom-0 inset-0 overflow-hidden text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.66 }}
      >
        <div className="absolute bottom-1/3 left-1/12 -translate-x-1/2 lg:translate-x-0 lg:-left-1/8 -translate-y-1/2 -rotate-90 flex items-center">
          <div className="flex gap-3 lg:text-xl mr-10">
            <p>+</p>
            <p>+</p>
          </div>
          <p className="whitespace-nowrap mr-10">GROW TOGETHER</p>
          <p className="whitespace-nowrap mr-14 font-bold">STAY TOGETHER</p>
          <p className="opacity-50">2025/2026</p>
        </div>
      </motion.div>

      {/* element kanan with motion */}
      <motion.div
        className="absolute top-0 right-5 md:right-10 lg:right-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.66 }}
      >
        <Image
          src="/assets/makrab/asset-1.svg"
          width={30}
          height={30}
          alt="asset 1"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 translate-1/2 right-10 md:right-10 lg:right-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.66 }}
      >
        <Image
          src="/assets/makrab/asset-2.svg"
          width={50}
          height={50}
          alt="asset 2"
        />
      </motion.div>

      {/* Main content with motion */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.97, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.33 }}
      >
        <motion.div
          className="flex justify-center w-fit bg-white px-3 py-5 mx-auto md:px-10 md:py-5 rounded-lg text-black md:ml-16 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.33 }}
        >
          <p className="italic text-sm md:text-lg">
            <span className="font-bold">Let's build memories,</span> not just
            moments
          </p>
        </motion.div>

        {/* Custom Image Carousel with motion */}
        <motion.div
          className="relative w-full max-w-3xs md:max-w-6xl mx-auto mb-8 overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.33 }}
        >
          <div
            className=" flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="w-full flex-shrink-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                viewport={{ once: false, amount: 0.33 }}
              >
                <button
                  type="button"
                  className="relative w-full aspect-square md:aspect-video"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <Image
                    src={image}
                    fill
                    alt={`moment ${index + 1}`}
                    className="object-cover rounded-lg"
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pagination with motion */}
        <motion.div
          className="flex w-full justify-center gap-2 py-2 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.33 }}
        >
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center w-full mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.33 }}
        >
          <p className="italic text-xs md:text-sm w-60 md:w-80 text-center">
            We sincerely thank you for your attention and participation. We look
            forward to creating unforgettable moments together at the Makrab
            event. See you at the Makrab!
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
