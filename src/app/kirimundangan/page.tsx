import Image from "next/image"

export default function Page() {
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
        <div className="text-xs md:text-base flex flex-col gap-3 w-[80%] md:w-fit px-5 py-2 border border-gray-300 rounded-2xl">
          <p>Silahkan Masukkan Nama Tamu</p>
          <p>
            * Gunakan baris baru (↵) untuk memisahkan nama yang akan Anda
            undang.
          </p>
          <p className="italic text-gray-400">contoh: Agus Sucipto-Staff</p>
          <textarea className="textarea" placeholder="Nama-Jabatan"></textarea>
          <p>Silahkan Masukan Text Pengantar</p>
          <p>
            * Isikan text ini [link-undangan] pada text pengantar agar otomatis
            tercantumkan link kehalaman undangan.
          </p>
          <p>
            * Anda juga bisa menggunakan [nama] untuk menyertakan nama yang Anda
            undang.
          </p>
          <textarea
            className="textarea"
            placeholder="kata pengantar"
          ></textarea>
          <button className="btn bg-green-500 w-fit px-10">
            <p>Buat Undangan</p>
          </button>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="text-xs md:text-base flex flex-col gap-3 w-[80%] md:w-fit px-5 py-2 border border-gray-300 rounded-2xl">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th></th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>
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
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
