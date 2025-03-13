import { useParams } from "next/navigation"

export default function Section4() {
  const params = useParams()
  const formattedName = params.name
    ? decodeURIComponent(String(params.name)).replace(/-/g, " ")
    : ""

  return (
    <div className="relative flex flex-col bg-[#EEF3FF] py-12 ">
      <div className="flex justify-center mb-10">
        <div className="relative text-center flex flex-col items-center gap-8 w-[80%] px-5 pt-10 pb-5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-transparent rounded-3xl">
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
                value={formattedName}
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
                defaultValue="Konfirmasi Kehadiran"
                className="select text-black bg-[#497D74]/10"
              >
                <option disabled={true}>Konfirmasi Kehadiran Anda</option>
                <option value="Hadir">Hadir nuzulul qur'an</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>
          </div>
          <div className=" flex justify-center">
            <button className="btn btn-secondary border-none rounded-3xl px-5 xl:hover:btn-secondary text-[#EFE9D5]">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
