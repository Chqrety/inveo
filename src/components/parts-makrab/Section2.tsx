import { playball } from "@/app/fonts"
import Image from "next/image"
import { motion } from "framer-motion"
import { League_Gothic } from "next/font/google"

const league_gothic = League_Gothic({ subsets: ["latin"], weight: "400" })

export default function Section2() {
  return (
    <div className="relative pt-48 min-h-dvh bg-[#018bd2]">
      <div className="absolute top-0 right-20">
        <Image
          src="/assets/makrab/asset-1.svg"
          width={30}
          height={30}
          alt="asset 1"
        />
      </div>

      <div className="absolute left-0 right-0 mx-auto w-full flex justify-center bg-[#018bd2] z-0">
        <Image
          src="/assets/makrab/bg-section-2.png"
          width={1920}
          height={1080}
          alt="makrab"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="absolute bottom-0 inset-0 overflow-hidden text-[#018bd2] ">
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
          src="/assets/makrab/asset-2-blue.svg"
          width={50}
          height={50}
          alt="asset 2"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full min-h-dvh relative z-20">
        <div className="flex justify-center">
          <p
            className={`${league_gothic.className} text-[#18336B] text-[128px]`}
          >
            MAKRAB
          </p>
        </div>
        <div className="flex mx-40">
          <div className="flex flex-col w-1/2 text-2xl justify-center gap-32 font-semibold">
            <p className="text-[#18336B]">
              Makrab is an abbreviation from Indonesian, standing for “Malam
              Keakraban”, which literally means “Night of
              Togetherness/Closeness.”
            </p>
            <p className="text-[#18336B] ml-5">
              It refers to a social event, usually held at night, where members
              of a group gather to build closer relationships through various
              activities such as games, discussions, and performances.
            </p>
          </div>
          <div className="flex w-1/2">
            <Image
              src="/assets/makrab/envelope-2.png"
              width={625}
              height={612}
              alt="asset 3"
            />
          </div>
        </div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 lg:hidden"
      >
        <Image
          src="/assets/top-section-2.svg"
          width={500}
          height={500}
          alt="topsection2"
        />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center mb-10"
      >
        <div className="text-xs text-center flex flex-col gap-5 w-[80%] px-5 py-10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-transparent rounded-3xl">
          <p className="w-full text-xl">Save the Date</p>
          <div>
            <p className="text-xl">Senin, 17 Maret 2025</p>
            <p className={`${playball.className} text-2xl`}>
              17 Ramadhan 1446 H
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className={`${playball.className} text-sm`}>
              16.00 WIB - selesai
            </p>
            <p className="text-xs">
              Lantai 7, PT. Penjaminan Jamkrindo Syariah
            </p>
            <p className="text-xs italic font-semibold">
              Dresscode: Baju Muslim Putih
            </p>
          </div>
          <p>
            Kami sangat mengharapkan kehadiran Bapak/Ibu/Saudara/i untuk
            bersama-sama meraih keberkahan Ramadan. Semoga kebersamaan ini
            semakin mempererat ukhuwah Islamiyah di antara kita semua.
          </p>
          <p>Terimakasih</p>
          <p className={`${playball.className} text-lg`}>
            Wassalamu'alaikum Warahmatullahi <br /> Wabarakatuh
          </p>
          <p>
            Hormat kami, <br />
            PT. Penjaminan Jamkrindo Syariah
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          className="block lg:hidden"
          src="/assets/bottom-section-2.svg"
          width={500}
          height={500}
          alt="bottomsection"
        />
      </motion.div> */}
    </div>
  )
}
