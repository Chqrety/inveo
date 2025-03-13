"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"

export default function Page() {
  const [input, setInput] = useState("")
  const [visitors, setVisitors] = useState<
    { id: number; name: string; position: string }[]
  >([])
  const [loading, setLoading] = useState(true)

  const handleSubmit = async () => {
    const rows = input.split("\n").map((line) => {
      const [name, position] = line.split("-").map((s) => s.trim())
      return { name, position }
    })

    const { error } = await supabase.from("visitors").insert(rows)
    if (error) console.error("Gagal menyimpan:", error)
    else alert("Berhasil disimpan!")
  }

  const fetchVisitors = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from("visitors")
      .select("id, name, position")
    if (error) {
      console.error("Error fetching visitors:", error)
    } else {
      setVisitors(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchVisitors() // Fetch data saat halaman pertama kali dimuat
  }, [])

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex flex-col mt-10 mb-8 px-10">
        <p className="text-3xl font-bold text-center">
          Kirim Undangan Untuk Para Tamu
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col px-10 mb-8 gap-1">
          <p className="mb-3">Petunjuk:</p>
          <div className="flex gap-3 items-center">
            <div className="bg-amber-500 w-fit h-fit rounded-2xl p-2">
              <Image src="/assets/next.svg" width={20} height={20} alt="next" />
            </div>
            <p>
              1. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis mollitia nesciunt excepturi ipsam quia voluptatibus
              blanditiis dolorem ut consequatur voluptatum.
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-amber-500 w-fit h-fit rounded-2xl p-2">
              <Image src="/assets/next.svg" width={20} height={20} alt="next" />
            </div>
            <p>
              1. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis mollitia nesciunt excepturi ipsam quia voluptatibus
              blanditiis dolorem ut consequatur voluptatum.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-8 mb-5">
        <p className="w-full font-semibold text-center">
          Buat undangan jadi lebih ekslusif dan personal di setiap undangan yang
          akan dikirimkan. <br />
          Silahkan Generate Link nya di bawah ini:
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="text-xs md:text-base flex flex-col gap-3 w-[80%] md:w-fit px-5 py-2 border border-gray-300 rounded-2xl xl:min-w-4xl">
          <p>Silahkan Masukkan Nama Tamu</p>
          <p>
            * Gunakan baris baru (↵) untuk memisahkan nama yang akan Anda
            undang.
          </p>
          <p className="italic text-gray-400">contoh: Agus Sucipto-Staff</p>
          <textarea
            className="textarea"
            placeholder="Nama-Jabatan"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <p>Silahkan Masukan Text Pengantar</p>
          <p>* Gunakan [link-undangan] agar otomatis tercantum link.</p>
          <p>* Gunakan [nama] untuk menyertakan nama.</p>
          <textarea
            className="textarea"
            placeholder="kata pengantar"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="btn bg-green-500 w-fit px-10"
          >
            <p>Buat Undangan</p>
          </button>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="text-xs md:text-base flex flex-col gap-2 w-[80%] md:w-fit xl:min-w-4xl px-5 py-7 border border-gray-300 rounded-2xl">
          <p className="font-bold">Daftar Nama Undangan</p>
          <div className="flex justify-end">
            <button
              className="btn bg-blue-500 text-white"
              onClick={fetchVisitors}
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                <>
                  <Image
                    src="/assets/reload.svg"
                    width={20}
                    height={20}
                    alt="reload"
                  />
                  <p>Reload</p>
                </>
              )}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : visitors.length > 0 ? (
                  visitors.map((visitor, index) => (
                    <tr key={visitor.id}>
                      <th>{index + 1}</th>
                      <td>{visitor.name}</td>
                      <td>{visitor.position}</td>
                      <td className="flex gap-2">
                        <button className="btn btn-sm bg-green-500">
                          Share ke WhatsApp
                        </button>
                        <button className="btn btn-sm bg-black text-white">
                          Copy Link
                        </button>
                        <button className="btn btn-sm bg-gray-500 text-white">
                          Copy Kata Pengantar
                        </button>
                        <button className="btn btn-sm bg-red-600 text-white">
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center">
                      Tidak ada data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
