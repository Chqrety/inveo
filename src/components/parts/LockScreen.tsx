import { Berkshire_Swash } from "next/font/google"
import Image from "next/image"

const berkshire = Berkshire_Swash({ subsets: ["latin"], weight: "400" })

interface LockScreenProps {
  onUnlock: () => void
  visitorName?: string
  visitorPosition?: string
}

export default function LockScreen({
  onUnlock,
  visitorName,
  visitorPosition,
}: LockScreenProps) {
  return (
    <div className="relative pt-24 xl:pt-64 h-dvh">
      {/* <div className="absolute w-10 h-10 bg-black sm:bg-red-500 top-1/2 left-32 md:bg-orange-500 lg:bg-amber-500 xl:bg-lime-500" /> */}
      {/* <p>hello wasdorld</p> */}
      <div className="absolute top-0 flex">
        <Image
          src="/assets/lantern.png"
          width={700}
          height={700}
          alt="lantern"
        />
        <Image
          className="hidden md:block"
          src="/assets/lantern.png"
          width={700}
          height={700}
          alt="lantern"
        />
        <Image
          className="hidden md:block"
          src="/assets/lantern.png"
          width={700}
          height={700}
          alt="lantern"
        />
      </div>
      <div className="flex flex-col gap-8 ">
        <div className="flex justify-center">
          <div
            className={`${berkshire.className} flex flex-col text-center gap-1 text-[#FFE5AA]`}
          >
            <div className="text-5xl md:text-3xl lg:text-5xl xl:text-7xl drop-shadow-[0_0_10px_rgba(255,229,170,0.8)]">
              <p>Nuzulul</p>
              <p>Qur'an</p>
            </div>
            <div className="text-3xl drop-shadow-[0_0_10px_rgba(255,229,170,0.8)]">
              <p>dan</p>
              <p>Buka Bersama</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col xl:flex-row max-w-[80%] justify-between w-full items-center gap-6">
            <div className="w-full text-center xl:w-1/6">
              <p className="text-lg font-bold xl:text-xl">
                PT. JAMKRINDO SYARIAH
              </p>
              <p className="text-xs xl:text-base">17 MARET 2025/</p>
              <p className="text-xs xl:text-base">17 RAMADHAN 1446 H</p>
            </div>
            <div className="w-full text-xs text-center xl:text-base xl:w-1/6">
              <p>
                “Indeed, We sent the Qur'an down during the Night of Decree. And
                what can make you know what is the Night of Decree? The Night of
                Decree is better than a thousand months.”
              </p>
              <p className="text-center">(QS 97: 1-3)</p>
            </div>
          </div>
        </div>
        <div className="absolute z-10 flex justify-center -translate-x-1/2 bottom-52 left-1/2">
          <Image src="/assets/quran.png" width={200} height={200} alt="quran" />
        </div>
        <div className="absolute bottom-32 left-1/2 text-center -translate-x-1/2 z-20 text-[#06205B]">
          <p className="text-xs font-semibold">Kepada Yth:</p>
          <p className="font-bold text">{visitorName || "Guest"}</p>
          <p className="text-sm italic font-bold">
            {visitorPosition || "No Posiitons"}
          </p>
        </div>
        <div className="flex justify-center mt-18">
          <button
            onClick={onUnlock}
            className="z-20 bg-[#06205B] px-5 py-2 flex gap-2 rounded-3xl absolute bottom-16 hover:cursor-pointer"
          >
            <Image src="/assets/mail.svg" width={20} height={20} alt="mail" />
            BUKA UNDANGAN
          </button>
        </div>
        <Image
          className="absolute left-0 bottom-28 xl:bottom-0"
          src="/assets/cloud1-back.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute right-0 bottom-28 xl:bottom-0"
          src="/assets/cloud4-back.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute left-0 z-10 bottom-24 xl:bottom-0"
          src="/assets/cloud1-top.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute right-0 z-10 bottom-24 xl:bottom-0"
          src="/assets/cloud4-top.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute left-0 z-10 bottom-12 xl:bottom-0"
          src="/assets/cloud1-mid.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute right-0 z-10 bottom-12 xl:bottom-0"
          src="/assets/cloud4-mid.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute bottom-0 right-0 z-10 xl:bottom-0"
          src="/assets/cloud2-down.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute bottom-0 left-0 z-10 xl:bottom-0"
          src="/assets/cloud3-down.png"
          width={300}
          height={300}
          alt="cloud"
        />
      </div>
    </div>
  )
}
