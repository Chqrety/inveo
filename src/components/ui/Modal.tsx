import Image from "next/image"
import { useRef } from "react"

export default function Modal() {
  const modalRef = useRef<HTMLDialogElement>(null)

  return (
    <>
      <button
        className=" btn-outline btn rounded-4xl xl:rounded-[5px]"
        onClick={() => modalRef.current?.showModal()}
      >
        <Image src={"/assets/info.svg"} width={20} height={20} alt="info" />
        <p className="hidden lg:block">Info</p>
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box lg:w-full lg:max-w-5xl">
          <h3 className="font-bold text-base">
            Hello!, Silahkan baca informasi berikut
          </h3>
          <p className="py-4">
            Terdapat beberapa tombol yang bisa digunakan dibawah ini, yaitu:
          </p>

          <div className="grid grid-cols-6 items-center text-left gap-2">
            <button className="btn btn-sm col-span-1 lg:col-span-1 bg-blue-500 text-white rounded-4xl lg:rounded-[5px]">
              <Image
                src="/assets/reload.svg"
                width={20}
                height={20}
                alt="reload"
              />
              <p className="hidden lg:block">Reload</p>
            </button>
            <p className="col-span-5">
              : Gunakan untuk melakukan reload data table
            </p>

            <button className="btn btn-sm col-span-1 bg-green-500 text-white rounded-4xl lg:rounded-[5px]">
              <Image
                src="/assets/whatsapp.svg"
                width={20}
                height={20}
                alt="reload"
              />
              <p className="hidden lg:block">Share ke WhatsApp</p>
            </button>
            <p className="col-span-5">
              : Gunakan untuk membagikan melalui WhatsApp
            </p>

            <button className="btn btn-sm col-span-1 bg-slate-900 text-white rounded-4xl lg:rounded-[5px]">
              <Image
                src="/assets/link.svg"
                width={20}
                height={20}
                alt="reload"
              />
              <p className="hidden lg:block">Copy Link</p>
            </button>
            <p className="col-span-5">: Gunakan untuk menyalin link undangan</p>

            <button className="btn btn-sm col-span-1 bg-gray-500 text-white rounded-4xl lg:rounded-[5px]">
              <Image
                src="/assets/copy.svg"
                width={20}
                height={20}
                alt="reload"
              />
              <p className="hidden lg:block">Copy kata pengantar</p>
            </button>
            <p className="col-span-5">
              : Gunakan untuk menyalin kata pengantar
            </p>

            <button className="btn btn-sm col-span-1 bg-red-600 text-white rounded-4xl lg:rounded-[5px]">
              <Image
                src="/assets/delete.svg"
                width={20}
                height={20}
                alt="reload"
              />
              <p className="hidden lg:block">Delete</p>
            </button>
            <p className="col-span-5">: Gunakan untuk menghapus data</p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  )
}
