import { playball } from "@/app/fonts"
import Image from "next/image"
import { motion } from "framer-motion"
import { League_Gothic } from "next/font/google"

const league_gothic = League_Gothic({ subsets: ["latin"], weight: "400" })

export default function Section2() {
  return (
    <div className="relative pt-48 min-h-dvh bg-[#018bd2]">
      <div className="absolute left-0 right-0 mx-auto w-full h-screen md:h-fit flex justify-center bg-[#018bd2] z-0">
        <Image
          src="/assets/makrab/bg-section-2.png"
          width={1920}
          height={1080}
          alt="makrab"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* element kiri with motion */}
      <motion.div
        className="absolute bottom-0 inset-0 overflow-hidden text-[#018bd2] "
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
          src="/assets/makrab/asset-2-blue.svg"
          width={50}
          height={50}
          alt="asset 2"
        />
      </motion.div>

      {/* MAIN CONTENT with motion */}
      <motion.div
        className="w-full min-h-dvh relative z-20"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.33 }}
      >
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.33 }}
        >
          <p
            className={`${league_gothic.className} text-[#18336B] text-[90px] md:text-[128px]`}
          >
            MAKRAB
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row mx-16 md:mx-40 text-center">
          <motion.div
            className="flex flex-col w-full md:w-1/2 text-base md:text-2xl justify-center gap-5 md:gap-32 font-semibold"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.33 }}
          >
            <p className="text-[#18336B]">
              Makrab is an abbreviation from Indonesian, standing for “Malam
              Keakraban”, which literally means “Night of
              Togetherness/Closeness.”
            </p>
            <motion.div
              className="flex md:hidden w-full"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.33 }}
            >
              <Image
                src="/assets/makrab/envelope-2.png"
                width={625}
                height={612}
                alt="asset 3"
              />
            </motion.div>
            <p className="text-[#18336B] ml-0 md:ml-5">
              It refers to a social event, usually held at night, where members
              of a group gather to build closer relationships through various
              activities such as games, discussions, and performances.
            </p>
          </motion.div>
          <motion.div
            className="hidden md:flex w-1/2"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.33 }}
          >
            <Image
              src="/assets/makrab/envelope-2.png"
              width={625}
              height={612}
              alt="asset 3"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
