import { playball } from "@/app/fonts"
import Image from "next/image"

export default function Section2() {
  return (
    <div className="relative pt-48">
      <Image
        className="absolute top-0 left-0"
        src="/assets/top-section-2.svg"
        width={500}
        height={500}
        alt="topsection2"
      />
      <div className="flex justify-center mb-10">
        <div className="text-xs text-center flex flex-col gap-5 w-[80%] px-5 py-10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-transparent rounded-3xl">
          <p className="w-full text-xl">Save the Date</p>
          <div>
            <p className="text-xl">Senin, 17 Maret 2025</p>
            <p className={`${playball.className} text-2xl`}>
              17 Ramadhan 1446 H
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
      </div>
      <Image
        src="/assets/bottom-section-2.svg"
        width={500}
        height={500}
        alt="bottomsection"
      />
    </div>
  )
}
