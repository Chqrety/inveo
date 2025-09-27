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
    <div className="relative flex flex-col h-[500px]">
      <Image
        className="absolute bottom-0"
        src="/assets/makrab/footer-2.png"
        width={1920}
        height={609}
        alt="footer"
      />
      <div className="flex z-10 mx-20 my-14">
        <div>
          <Image
            src="/assets/makrab/logo.svg"
            width={300}
            height={225}
            alt="logo"
          />
        </div>
        <div className="flex my-10 text-black gap-20">
          <div className="flex flex-col gap-10 mx-10">
            <a
              href="https://github.com/orgs/Dinus-Open-Source-Community"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-fit items-center gap-3"
            >
              <Image
                src={"/assets/makrab/github.svg"}
                width={30}
                height={30}
                alt="github"
              />
              <span className="italic">Dinus-Open-Source-Community</span>
            </a>
            <a
              href="https://www.instagram.com/doscomedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-fit items-center gap-3"
            >
              <Image
                src={"/assets/makrab/instagram.svg"}
                width={30}
                height={30}
                alt="instagram"
              />
              <p className="italic">doscomedia</p>
            </a>
            <a
              className="flex h-fit items-center gap-3"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=doscom.go@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/assets/makrab/email.svg"}
                width={30}
                height={30}
                alt="mail"
              />
              <p className="italic">doscom.go@gmail.com</p>
            </a>
            <a
              href="https://www.tiktok.com/@doscom.media"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-fit items-center gap-3"
            >
              <Image
                src={"/assets/makrab/tiktok.svg"}
                width={30}
                height={30}
                alt="tiktok"
              />
              <p className="italic">doscomedia</p>
            </a>
          </div>

          <div className="flex h-fit">
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
            <p className="font-bold">About Us:</p>
            <Image
              src={"/assets/makrab/qr.svg"}
              width={300}
              height={300}
              alt="qr"
            />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center mb-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative text-center flex flex-col items-center gap-8 w-[80%] px-5 pt-10 pb-5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-transparent rounded-3xl"
        >
          <div className="flex flex-col gap-3">
            <p className="text-4xl font-bold text-[#27445D]">RSVP</p>
            <p className="text-xs text-[#27445D]">
              Diharapkan kepada pada para undangan untuk mengisi form kehadiran
              dibawah ini
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-col items-start max-w-xs w-full text-black gap-1">
              <p className="text-sm">
                Nama Lengkap <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                value={visitor?.name || ""}
                placeholder="Tulis Nama Anda"
                className="bg-[#497D74]/10 w-full text-sm text-black p-3 rounded-[2px]"
                disabled
              />
            </div>
            <div className="flex flex-col items-start max-w-xs w-full text-black gap-1">
              <p className="text-sm">
                Konfirmasi Kehadiran <span className="text-red-500">*</span>
              </p>
              <select
                value={presence}
                onChange={(e) => setPresence(e.target.value)}
                className="select text-black bg-[#497D74]/10"
              >
                <option value="" disabled={true}>
                  Konfirmasi Kehadiran Anda
                </option>
                <option value="Hadir">Hadir nuzulul qur'an</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>
          </div>
          <div className=" flex justify-center">
            <button
              onClick={handleSubmit}
              className="btn btn-secondary border-none rounded-3xl px-5 xl:hover:btn-secondary text-[#EFE9D5]"
            >
              SUBMIT
            </button>
          </div>
        </motion.div>
      </div> */}
    </div>
  )
}
