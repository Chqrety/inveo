import { League_Gothic } from "next/font/google"
import Image from "next/image"

const league_gothic = League_Gothic({ subsets: ["latin"], weight: "400" })

interface LockScreenProps {
  onUnlock: () => void
  visitorName?: string
  visitorPosition?: string
  loading: boolean
}

export default function LockScreen({
  onUnlock,
  visitorName,
  visitorPosition,
  loading,
}: LockScreenProps) {
  return (
    <div className="relative pt-24 xl:pt-32 h-dvh bg-[#018bd2]">
      {/* tagline */}
      <div className="absolute top-12">
        <Image
          src="/assets/makrab/tagline.svg"
          width={400}
          height={400}
          alt="makrab logo"
        />
      </div>

      {/* Background Text */}
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${league_gothic.className}`}
      >
        <p className="absolute top-[20%] -left-1/2 translate-x-1/2 -translate-y-1/2 text-[#FFFFFF] opacity-10 text-[200px]">
          MAKRABMAKRAB
        </p>
        <p className="absolute top-1/2 -right-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFFFFF] opacity-10 text-[200px]">
          202520252025
        </p>
        <p className="absolute bottom-[20%] -left-1/2 translate-x-1/2 translate-y-1/2 text-[#FFFFFF] opacity-10 text-[200px]">
          DOSCOMDOSCOM
        </p>
      </div>

      <div className="absolute bottom-0 inset-0 overflow-hidden ">
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

      <div className="absolute top-0 right-20">
        <Image
          src="/assets/makrab/asset-1.svg"
          width={30}
          height={30}
          alt="asset 1"
        />
      </div>

      <div className="absolute bottom-1/3 translate-1/2 right-20">
        <Image
          src="/assets/makrab/asset-2.svg"
          width={50}
          height={50}
          alt="asset 2"
        />
      </div>

      {/* <div className="absolute top-0 flex">
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
      </div> */}
      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <div
            className={`${league_gothic.className} relative flex flex-col text-center gap-1 text-[#FFFFFF]`}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#018BD2] rounded-full px-3 py-3.5 drop-shadow-[0_5.411px_5.411px_rgba(0,0,0,0.5)]">
              <p className="text-3xl">2025</p>
            </div>
            <div className="absolute -right-1/4 top-1/2 -translate-x-1/2 -translate-y-1/4">
              <Image
                src="/assets/makrab/closed-envelope.svg"
                width={170}
                height={170}
                alt="closed envelope"
              />
            </div>
            <div className="text-5xl md:text-3xl lg:text-5xl xl:text-[200px] leading-40">
              <p>MAKRAB</p>
              <p>DOSCOM</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-32 left-1/2 text-center -translate-x-1/2 z-20 text-[#FFFFFF]">
          <p className="text-xs italic">Kepada Yth:</p>
          {loading ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            <>
              <p className="text-lg font-bold">
                {visitorName || "Nama Alumni"}
              </p>
              <p className="font-semibold">{visitorPosition || "Sekum"}</p>
            </>
          )}
        </div>
        <div className="flex justify-center mt-18">
          <button
            onClick={onUnlock}
            className="z-20 bg-[#FFFFFF] text-[#222222] font-bold px-5 py-2 flex gap-2 rounded-3xl absolute bottom-16 hover:cursor-pointer"
          >
            <Image
              src="/assets/makrab/mail.svg"
              width={20}
              height={20}
              alt="mail"
            />
            BUKA UNDANGAN
          </button>
        </div>
        {/* <div className="flex flex-col items-center">
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
        <div className="absolute bottom-32 left-1/2 text-center -translate-x-1/2 z-20 text-[#06205B] lg:text-[#efe9d5]">
          <p className="text-xs font-semibold">Kepada Yth:</p>
          {loading ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            <>
              <p className="font-bold text">{visitorName || "Guest"}</p>
              <p className="text-sm italic font-bold">
                {visitorPosition || "No Posiitons"}
              </p>
            </>
          )}
        </div>
        <div className="flex justify-center mt-18">
          <button
            onClick={onUnlock}
            className="z-20 bg-[#06205B] lg:bg-teal-800 px-5 py-2 flex gap-2 rounded-3xl absolute bottom-16 hover:cursor-pointer"
          >
            <Image src="/assets/mail.svg" width={20} height={20} alt="mail" />
            BUKA UNDANGAN
          </button>
        </div> */}
        {/* <Image
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
        /> */}
      </div>
    </div>
  )
}
