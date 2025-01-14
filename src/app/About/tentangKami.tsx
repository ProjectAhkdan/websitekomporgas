import Image from "next/image";

const TentangKami = () => {
  return (
    <div className="px-4 lg:px-16">
      {/* Section: Deskripsi */}
      <div className="flex flex-col lg:flex-row items-center gap-8 py-8">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/assets/perbaikan4.jpg"
            alt="Technician"
            width={500}
            height={500}
            className="max-w-full h-auto rounded-xl"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Pusat Service Kompor Gas Panggilan
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Jaya Mandiri Teknik (JAMANTEK) merupakan perusahaan Service Kompor
            Gas Panggilan yang telah beroperasi sejak 2010. Kami hadir untuk
            mempermudah masyarakat dalam mencari layanan service kompor gas,
            memberikan kemudahan tanpa harus keluar rumah, cukup dengan
            smartphone.
          </p>
        </div>
      </div>

      {/* Section: Visi dan Misi */}
      <div className="py-8 text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Visi Misi Kami</h2>
        <div className="text-left max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">Visi</h3>
          <p className="mb-4">
            Menjaga keamanan dapur masyarakat dari potensi kebakaran akibat
            kerusakan kompor gas atau oven.
          </p>
          <h3 className="text-xl font-semibold mb-2">Misi</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Menyelesaikan kerusakan kompor gas atau oven secara mendetail dan
              efektif.
            </li>
            <li>
              Memperluas jangkauan layanan untuk memudahkan masyarakat dalam
              mencari solusi perbaikan.
            </li>
            <li>
              Memberikan layanan dengan harga terjangkau tanpa membebani
              masyarakat.
            </li>
          </ul>
        </div>
      </div>

      {/* Section: Merk dan Lokasi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-2">Cakupan Lokasi</h2>
          <p className="text-gray-700">
            Kota Tangerang, Kabupaten Tangerang, Kota Tangerang Selatan, Jakarta
            Barat, Jakarta Pusat, Jakarta Selatan, Jakarta Utara, Jakarta Timur,
            Kota Bekasi, Kabupaten Bekasi, Kabupaten Bogor, Kota Bogor, Kota
            Depok.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
