import Image from "next/image"

export default function Section1() {
  return (
    <div className="relative pt-12 min-h-dvh bg-[#018bd2]">
      {/* tagline */}
      <div className="absolute top-12 w-64 md:w-96 lg:w-full">
        <Image
          src="/assets/makrab/tagline.svg"
          width={400}
          height={400}
          alt="tagline"
        />
      </div>

      {/* element kiri */}
      <div className="absolute bottom-0 inset-0 overflow-hidden text-white">
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

      {/* mobile */}
      <div className="flex flex-col lg:hidden justify-between items-center min-h-[500px] mt-20 w-60 mx-auto">
        <p className="text-center w-full text-white [text-shadow:0_1.655px_1.655px_rgba(0,0,0,0.25)] text-[10px]">
          We're inviting you to our Gathering Night to get to know each other
          better, share laughter, and build stronger friendships! Save the date!
        </p>
        <div className="absolute md:hidden w-80 lg:w-fit bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/3">
          <Image
            className="relative"
            src="/assets/makrab/opened-envelope.svg"
            width={700}
            height={700}
            alt="opened envelope"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
            <p className="text-center w-full text-white [text-shadow:0_1.655px_1.655px_rgba(0,0,0,0.25)] text-[9px]">
              18th October - 19th October 2025 <br /> 19.00 - Selesai (WIB)
              <br /> Villa Aldino, Bandungan
            </p>
          </div>
        </div>
        <div className="md:hidden text-white text-center w-full px-5 flex flex-col gap-8">
          <p className="text-center w-full text-[10px] [text-shadow:0_1.655px_1.655px_rgba(0,0,0,0.25)]">
            Don't miss the fun, games, and great <br /> moments. We hope to see
            you there!
          </p>
          <p className="text-sm">
            <span className="font-bold">CONTACT PERSON :</span> <br />
            0857-1208-4018 (RAFI)
          </p>
        </div>
      </div>

      {/* dekstop */}
      <div className="hidden md:flex justify-center">
        <div className="relative">
          <Image
            src="/assets/makrab/opened-envelope.svg"
            width={700}
            height={700}
            alt="opened envelope"
          />
          <div className="absolute top-1/2 xl:top-[23%] left-1/2 -translate-x-1/2 -translate-y-1/2 xl:translate-y-1/2 flex flex-col items-center gap-3">
            <p className="text-center w-full text-[10px] text-[#0050FD] [text-shadow:0_1.655px_1.655px_rgba(0,0,0,0.25)]">
              We're inviting you to our Gathering Night to get to know each
              other better, <br />
              share laughter, and build stronger friendships! Save the date!
            </p>
            <div className="flex flex-col w-fit text-[#0050FD] gap-2 text-center">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/makrab/calendar.svg"
                  width={24}
                  height={24}
                  alt="calendar icon"
                />
                <div className="text-[10px] border rounded-xl py-1 px-2 border-[#0050FD]">
                  <p>18th October - 19th October 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/makrab/clock.svg"
                  width={24}
                  height={24}
                  alt="clock icon"
                />
                <div className="text-[10px] border rounded-xl py-1 px-2 border-[#0050FD] w-full">
                  <p>19.00 - Selesai (WIB)</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/makrab/maps.svg"
                  width={24}
                  height={24}
                  alt="maps icon"
                />
                <div className="text-[10px] border rounded-xl py-1 px-2 border-[#0050FD] w-full">
                  <p>Villa Aldino, Bandungan</p>
                </div>
              </div>
            </div>
            <p className="text-center w-full text-[10px] text-[#0050FD] [text-shadow:0_1.655px_1.655px_rgba(0,0,0,0.25)]">
              Don't miss the fun, games, and great <br /> moments. We hope to
              see you there!
            </p>
          </div>
        </div>

        <div className="absolute bottom-40 xl:bottom-1/3 xl:-translate-y-1/2 text-[10px] text-white text-center w-full px-5">
          <p className="text-base">
            <span className="font-bold">CONTACT PERSON :</span> <br />
            0857-1208-4018 (RAFI)
          </p>
        </div>
      </div>
    </div>
  )
}
