import { playball } from "@/app/fonts"
import Image from "next/image"
import Section4 from "./Section4"
import { CountDown } from ".."
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Section3() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
    "/assets/makrab/moment-1.png",
    "/assets/makrab/moment-1.png",
    "/assets/makrab/moment-1.png",
    "/assets/makrab/moment-1.png",
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
      {/* tambahan asset */}
      <div className="absolute top-0 right-20">
        <Image
          src="/assets/makrab/asset-1.svg"
          width={30}
          height={30}
          alt="asset 1"
        />
      </div>

      <div className="absolute bottom-0 inset-0 overflow-hidden text-[#fffff] ">
        <div className="absolute bottom-1/3 -left-1/8 -translate-y-1/2 -rotate-90 flex items-center">
          <div className="flex gap-3 text-xl mr-10">
            <p>+</p>
            <p>+</p>
          </div>
          <p className="mr-10">GROW TOGETHER</p>
          <p className="mr-14 font-bold">STAY TOGETHER</p>
          <p className="opacity-50">2025/2026</p>
        </div>
      </div>

      <div className="absolute bottom-1/3 translate-1/2 right-20">
        <Image
          src="/assets/makrab/asset-2.svg"
          width={50}
          height={50}
          alt="asset 2"
        />
      </div>

      <div className="flex justify-center w-fit bg-white px-10 py-5 rounded-lg text-black ml-16 mb-16">
        <p className="italic text-lg">
          <span className="font-bold">Let's build memories,</span> not just
          moments
        </p>
      </div>

      {/* Custom Image Carousel */}
      <div className="relative w-full max-w-6xl mx-auto mb-8 overflow-hidden rounded-lg">
        <div
          className=" flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
                src={image}
                width={800}
                height={533}
                alt={`moment ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex w-full justify-center gap-2 py-2 mb-14">
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
      </div>

      <div className="flex justify-center w-full mb-32">
        <p className="italic text-sm w-80 text-center">
          We sincerely thank you for your attention and participation. We look
          forward to creating unforgettable moments together at the Makrab
          event. See you at the Makrab!
        </p>
      </div>
    </div>
  )
}
