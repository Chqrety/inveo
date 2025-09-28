"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"
import { ItemInstruksi, ModalSepuh } from "@/components"
import { toast } from "react-toastify"

export default function Page() {
  const [entrys, setEntrys] = useState<
    {
      id: number
      name: string
      amount: number
      presence: string
    }[]
  >([])
  const [loading, setLoading] = useState(true)
  const rowsPerPage = 25
  const [currentPage, setCurrentPage] = useState(1)

  const fetchEntrys = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from("entrys")
      .select("id, name, amount, presence")
      .order("name", { ascending: true })
    if (error) {
      console.error("Error fetching entrys:", error)
    } else {
      setEntrys(data)
      toast.success("Berhasil memperbarui data")
    }
    setLoading(false)
  }

  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = entrys.slice(indexOfFirstRow, indexOfLastRow)
  const totalPages = Math.ceil(entrys.length / rowsPerPage)

  const handleDelete = async (id: number) => {
    const loadingToast = toast.info("Menghapus data...")
    const { error } = await supabase.from("entrys").delete().eq("id", id)
    if (error) {
      toast.update(loadingToast, {
        render: `Gagal menghapus data: ${error.message}`,
        type: "error",
        isLoading: false,
      })
    } else {
      toast.update(loadingToast, {
        render: "Data berhasil dihapus!",
        type: "success",
        isLoading: false,
      })
      fetchEntrys?.()
    }
  }

  useEffect(() => {
    fetchEntrys()
  }, [])

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex flex-col mt-10 mb-8 px-10">
        <p className="text-3xl font-bold text-center">
          Daftar Sepuh yang Bakal Datang
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="text-xs md:text-base flex flex-col gap-2 w-[80%] md:w-fit xl:min-w-4xl px-5 py-7 border border-gray-300 rounded-2xl">
          <p className="font-bold">Daftar Kehadiran</p>
          <div className="flex justify-end gap-1">
            <ModalSepuh />
            <button
              className="btn bg-blue-500 text-white rounded-4xl lg:rounded-[5px]"
              onClick={fetchEntrys}
            >
              {loading ? (
                <span className="loading loading-spinner loading-md" />
              ) : (
                <>
                  <Image
                    src="/assets/makrab/reload.svg"
                    width={20}
                    height={20}
                    alt="reload"
                  />
                  <p className="hidden lg:block">Reload</p>
                </>
              )}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jumlah Peserta</th>
                  <th>Kehadiran</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : currentRows.length > 0 ? (
                  currentRows.map((entry, index) => (
                    <tr
                      key={entry.id}
                      className={
                        entry.presence === "Hadir"
                          ? "bg-green-100"
                          : entry.presence === "Tidak Hadir"
                          ? "bg-red-100"
                          : ""
                      }
                    >
                      <th>{index + 1}</th>
                      <td>{entry.name}</td>
                      <td>{entry.amount} Orang</td>
                      <td>{entry.presence}</td>
                      <td className="flex gap-2 flex-wrap w-[240px] lg:w-full">
                        <button
                          onClick={() => handleDelete(entry.id)}
                          className="btn flex items-center btn-sm col-span-1 bg-red-600 text-white rounded-4xl lg:rounded-[5px]"
                        >
                          <Image
                            src="/assets/makrab/delete.svg"
                            width={20}
                            height={20}
                            alt="delete"
                          />
                          <p className="hidden lg:block">Delete</p>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center">
                      Tidak ada data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="join mt-4 flex justify-center">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`join-item btn ${
                  currentPage === i + 1 ? "btn-active" : ""
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
