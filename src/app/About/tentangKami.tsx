const TentangKami = () => {
  return (
    <div className="px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 py-8">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/logo-fav.png"
            alt="Technician"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Pusat Service Kompor Gas Panggilan
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Jaya Mandiri Teknik (JAMANTEK) merupakan perusahaan Service Kompor
            Gas Panggilan yang telah beroperasi sejak 2010. Kami hadir di
            tengah-tengah masyarakat dengan tujuan mempermudah masyarakat dalam
            mencari tempat service kompor gas. Kami menyadari tidak semua lokasi
            memiliki service center suatu merk kompor gas, maupun bengkel
            service kompor gas. Era modernisasi digital dan Sulitnya menemukan
            tempat service kompor gas inilah yang menjadi dasar usaha ini
            dibangun. Oleh karena itu, masyarakat harus mengetahui bahwa kami
            dapat membantu mereka tanpa harus kemana-mana, cukup dirumah saja
            dan kapan saja hanya dengan menggunakan HP.
          </p>
        </div>
      </div>

      <div className="py-8 text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Visi Misi Kami</h2>
        <div className="text-left max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">Visi</h3>
          <p className="mb-4">
            Menjaga keamanan dapur masyarakat dari potensi kebakaran yang
            disebabkan oleh rusaknya kompor gas / oven
          </p>
          <h3 className="text-xl font-semibold mb-2">Misi</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Meningkatkan kualitas reparasi dan semua masalah kerusakan kompor
              gas / oven sedetail mungkin sampai ke akar permasalahan
            </li>
            <li>
              Memperluas jangkauan layanan guna mempermudah masyarakat dalam
              menemukan tempat memperbaiki kompor gas / oven mereka
            </li>
            <li>
              Memberikan harga terjangkau dan tidak memberatkan masyarakat agar
              masyarakat tidak menunda-nunda perbaikan kompor gas / oven mereka
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 py-20">
        <div className="text-start text2xl font-bold">
            <h2 className=" font-bold text-blue-600">Merk</h2>
            <p className=" font-medium ">Teka, Delizia, Ariston, Tecnogas, Diamante, La Germania, Modena, Domo, Elba, Zerowatt, Italina, Electrolux, Azalea, Ram Armalia, Bompani, Bosch, Brandt, Covina, Frigidaire, Indesit, Itagas, Kelvinator, Linea, Philips, Smeg, Siemens, Zanussi</p>
        </div>
        <div className="text-end text2xl font-bold">
            <h2 className=" font-bold text-blue-600">Cakupan Lokasi :</h2>
            <p className=" font-medium ">Kota Tangerang, Kabupaten Tangerang, Kota Tangerang Selatan, Jakarta Barat, Jakarta Pusat, Jakarta Selatan, Jakarta Utara, Jakarta Timur, Kota Bekasi, Kabupaten Bekasi, Kabupaten Bogor, Kota Bogor, Kota Depok</p>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
