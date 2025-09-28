import { useVisitorStore } from "@/store/useVisitorStore"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import Image from "next/image"

export default function Section4() {
  const visitor = useVisitorStore(state => state.visitor)
  const [presence, setPresence] = useState("")

  const handleSubmit = async () => {
    if (!visitor?.name || !presence)
      return toast.warning("Harap lengkapi form!")

    const { error } = await supabase
      .from("visitors")
      .update({
        presence,
      })
      .eq("name", visitor.name)

    if (error) {
      toast.error("Gagal update data")
    } else {
      toast.success("Data berhasil dikirim!")
    }
  }

  useEffect(() => {
    console.log(visitor)
    if (visitor?.presence) {
      setPresence(visitor.presence)
    }
  }, [visitor])

  return (
    <div className="relative flex md:flex-col h-[500px]">
      <Image
        className="absolute bottom-0 h-full"
        src="/assets/makrab/footer-2.png"
        width={1920}
        height={609}
        alt="footer"
      />

      <div className="flex flex-col md:flex-row z-10 mx-auto md:mx-20 my-14">
        <div className="hidden md:flex justify-center">
          <Image
            src="/assets/makrab/logo.svg"
            width={300}
            height={225}
            alt="logo"
          />
        </div>
        <div className="flex flex-col md:flex-row my-10 text-black gap-7 md:gap-20 items-center md:items-start">
          {/* account */}
          <div className="flex flex-col gap-10 mx-10 text-xs md:text-base">
            {/* up */}
            <div className="flex md:flex-col gap-10">
              {/* github */}
              <a
                href="https://github.com/orgs/Dinus-Open-Source-Community"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-fit items-center gap-3"
              >
                {/* mobile */}
                <div
                  className="tooltip tooltip-top md:hidden"
                  data-tip="Dinus-Open-Source-Community"
                >
                  <Image
                    src={"/assets/makrab/github.svg"}
                    width={30}
                    height={30}
                    alt="github"
                  />
                </div>
                {/* desktop */}
                <div
                  className="tooltip tooltip-bottom hidden md:block"
                  data-tip="github"
                >
                  <Image
                    src={"/assets/makrab/github.svg"}
                    width={30}
                    height={30}
                    alt="github"
                  />
                </div>
                <span className="italic hidden md:block">
                  Dinus-Open-Source-Community
                </span>
              </a>
              {/* instagram */}
              <a
                href="https://www.instagram.com/doscomedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-fit items-center gap-3"
              >
                {/* mobile */}
                <div
                  className="tooltip tooltip-top md:hidden"
                  data-tip="Doscomedia"
                >
                  <Image
                    src={"/assets/makrab/instagram.svg"}
                    width={30}
                    height={30}
                    alt="instagram"
                  />
                </div>
                {/* desktop */}
                <div
                  className="tooltip tooltip-bottom hidden md:block"
                  data-tip="instagram"
                >
                  <Image
                    src={"/assets/makrab/instagram.svg"}
                    width={30}
                    height={30}
                    alt="instagram"
                  />
                </div>

                <p className="italic hidden md:block">doscomedia</p>
              </a>
            </div>
            <div className="flex md:flex-col gap-10">
              {/* email */}
              <a
                className="flex h-fit items-center gap-3"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=doscom.go@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* mobile */}
                <div
                  className="tooltip tooltip-bottom md:hidden"
                  data-tip="doscom.go@gmail.com"
                >
                  <Image
                    src={"/assets/makrab/email.svg"}
                    width={30}
                    height={30}
                    alt="email"
                  />
                </div>
                {/* desktop */}
                <div
                  className="tooltip tooltip-bottom hidden md:block"
                  data-tip="email"
                >
                  <Image
                    src={"/assets/makrab/email.svg"}
                    width={30}
                    height={30}
                    alt="email"
                  />
                </div>

                <p className="italic hidden md:block">doscom.go@gmail.com</p>
              </a>
              {/* tiktok */}
              <a
                href="https://www.tiktok.com/@doscom.media"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-fit items-center gap-3"
              >
                {/* mobile */}
                <div
                  className="tooltip tooltip-bottom md:hidden"
                  data-tip="Doscomedia"
                >
                  <Image
                    src={"/assets/makrab/tiktok.svg"}
                    width={30}
                    height={30}
                    alt="tiktok"
                  />
                </div>
                {/* desktop */}
                <div
                  className="tooltip tooltip-bottom hidden md:block"
                  data-tip="tiktok"
                >
                  <Image
                    src={"/assets/makrab/tiktok.svg"}
                    width={30}
                    height={30}
                    alt="tiktok"
                  />
                </div>
                <p className="italic hidden md:block">doscomedia</p>
              </a>
            </div>
          </div>

          <div className="h-fit hidden md:flex">
            <Image
              src={"/assets/makrab/phone.svg"}
              width={30}
              height={30}
              alt="phone"
            />
            <div className="flex flex-col">
              <p className="font-bold">Contact Person:</p>
              <p>+62 000-0000-0000</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-bold hidden md:block">About Us:</p>
            <Image
              className="w-[200px] md:w-full"
              src={"/assets/makrab/qr.svg"}
              width={300}
              height={300}
              alt="qr"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
