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
      <div className="absolute top-12 w-64 md:w-96 lg:w-full">
        <Image
          src="/assets/makrab/tagline.svg"
          width={400}
          height={400}
          alt="tagline"
        />
      </div>

      {/* Background Text */}
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${league_gothic.className}`}
      >
        <p className="absolute top-[20%] -left-1/2 translate-x-1/2 -translate-y-1/2 text-[#FFFFFF] opacity-10 text-[150px] lg:text-[200px]">
          MAKRABMAKRAB
        </p>
        <p className="absolute top-[35%] -right-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFFFFF] opacity-10 text-[150px] lg:text-[200px]">
          202520252025
        </p>
        <p className="absolute top-[50%] -left-1/2 translate-x-1/2 -translate-y-1/2 text-[#FFFFFF] opacity-10 text-[150px] lg:text-[200px]">
          DOSCOMDOSCOM
        </p>
        <p className="absolute lg:hidden bottom-[35%] -left-1/2 -translate-x-1/2 translate-y-1/2 text-[#FFFFFF] opacity-10 text-[150px] lg:text-[200px]">
          RABMAKRABMAKRAB
        </p>
        <p className="absolute lg:hidden bottom-[20%] -right-1/2 translate-x-1/2 translate-y-1/2 text-[#FFFFFF] opacity-10 text-[150px] lg:text-[200px]">
          2025202520252025
        </p>

        <p className="absolute lg:hidden bottom-[5%] -left-1/2 -translate-x-1/2 translate-y-1/2 text-[#FFFFFF] opacity-10 text-[150px] lg:text-[200px]">
          DOSCOMDOSCOMDOSCOM
        </p>
      </div>

      {/* element kiri */}
      <div className="absolute bottom-0 inset-0 overflow-hidden ">
        <div className="absolute bottom-1/3 left-1/12 -translate-x-1/2 lg:translate-x-0 lg:-left-1/8 -translate-y-1/2 -rotate-90 flex items-center">
          <div className="flex gap-3 lg:text-xl mr-10">
            <p>+</p>
            <p>+</p>
          </div>
          <p className="whitespace-nowrap mr-10">GROW TOGETHER</p>
          <p className="whitespace-nowrap mr-14 font-bold">STAY TOGETHER</p>
          <p className="opacity-50">2025/2026</p>
        </div>
      </div>

      {/* element kanan */}
      <div className="absolute top-0 right-5 md:right-10 lg:right-20">
        <Image
          src="/assets/makrab/asset-1.svg"
          width={30}
          height={30}
          alt="asset 1"
        />
      </div>
      <div className="absolute bottom-1/3 translate-1/2 right-10 md:right-10 lg:right-20">
        <Image
          src="/assets/makrab/asset-2.svg"
          width={50}
          height={50}
          alt="asset 2"
        />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <div
            className={`${league_gothic.className} relative flex flex-col text-center text-[#FFFFFF]`}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#018BD2] rounded-full px-3 py-3.5 drop-shadow-[0_5.411px_5.411px_rgba(0,0,0,0.5)]">
              <p className="text-3xl">2025</p>
            </div>
            <div className="absolute w-16 lg:w-fit -right-1/6 top-1/2 -translate-x-1/2 -translate-y-1/3 lg:-right-1/4">
              {/* <div className="absolute -right-1/4 top-1/2 -translate-x-1/2 -translate-y-1/4 w-16"> */}
              <Image
                src="/assets/makrab/closed-envelope.svg"
                width={170}
                height={170}
                alt="closed envelope"
              />
            </div>
            <div className="text-8xl md:text-7xl lg:text-5xl xl:text-[200px] leading-20 lg:leading-40">
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
                {visitorName || "Sepuh Doscom"}
              </p>
            </>
          )}
        </div>
        <div className="flex justify-center mt-18">
          <button
            onClick={onUnlock}
            className="z-20 bg-[#FFFFFF] text-[#222222] font-bold px-5 py-2 flex gap-2 rounded-3xl absolute bottom-16 hover:cursor-pointer items-center"
          >
            <Image
              src="/assets/makrab/mail.svg"
              width={20}
              height={20}
              alt="mail"
            />
            <span className="text-xs md:text-sm lg:text-base">
              BUKA UNDANGAN
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
