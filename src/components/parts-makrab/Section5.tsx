import { useVisitorStore } from "@/store/useVisitorStore"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { toast } from "react-toastify"

export default function Section5() {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [presence, setPresence] = useState("")

  const handleSubmit = async () => {
    if (!name || !amount || !presence) {
      toast.warning("Harap lengkapi form!")
      return
    }
    const { error } = await supabase.from("entrys").insert([
      {
        name,
        amount: Number(amount),
        presence,
      },
    ])
    if (error) {
      toast.error("Gagal mengirim data")
    } else {
      toast.success("Data berhasil dikirim!")
      setName("")
      setAmount("")
      setPresence("")
    }
  }

  return (
    <div className="relative flex flex-col py-12 ">
      <div className="flex justify-center mb-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white relative text-center flex flex-col items-center gap-8 w-[80%] px-5 pt-10 pb-5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-3xl"
        >
          <div className="flex flex-col gap-3 ">
            <p className="text-4xl font-bold text-[#18336B]">RSVP</p>
            <p className="text-xs text-[#18336B]">
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
                placeholder="Tulis Nama Anda"
                value={name}
                onChange={e => setName(e.target.value)}
                className="input bg-[#018bd2]/10 w-full text-sm text-black p-3 rounded-[2px]"
              />
            </div>
            <div className="flex flex-col items-start max-w-xs w-full text-black gap-1">
              <div className="flex flex-col text-start">
                <p className="text-sm">
                  Jumlah Peserta <span className="text-red-500">*</span>
                </p>
                <p className="text-[9px]">
                  (Jika sendiri, isi 1. Jika bersama keluarga, tuliskan jumlah
                  totalnya)
                </p>
              </div>
              <input
                type="number"
                min={1}
                placeholder="1 Orang"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                className="input bg-[#018bd2]/10 w-full text-sm text-black p-3 rounded-[2px]"
              />
            </div>
            <div className="flex flex-col items-start max-w-xs w-full text-black gap-1">
              <p className="text-sm">
                Konfirmasi Kehadiran <span className="text-red-500">*</span>
              </p>
              <select
                value={presence}
                onChange={e => setPresence(e.target.value)}
                className="select text-black bg-[#018bd2]/10"
              >
                <option value="" disabled={true}>
                  Konfirmasi Kehadiran Anda
                </option>
                <option value="Hadir">Hadir Makrab</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>
          </div>
          <div className=" flex justify-center">
            <button
              onClick={handleSubmit}
              className="btn btn-primary border-none rounded-3xl px-5 xl:hover:btn-primary text-[#ffffff]"
            >
              SUBMIT
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
