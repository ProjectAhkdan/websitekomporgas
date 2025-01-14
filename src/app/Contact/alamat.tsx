import { alamat } from "../../data/data";

const Alamat = () => {
  return (
    <div>
      <div className="flex max-sm:flex-col items-center justify-center p-8 md:p-20 gap-5">
        {/* Address Section */}
        <div className="bg-white rounded-lg w-full md:w-1/2 p-2 shadow-lg">
          <h1 className="font-bold text-blue-600 text-2xl">Alamat</h1>
          <p className="text-gray-700 text-md mt-2">{alamat.address}</p>
        </div>
        
        {/* Phone Section */}
        <div className="bg-white rounded-lg w-full md:w-1/2 p-2 shadow-lg">
          <h1 className="font-bold text-blue-600 text-2xl">Telepon</h1>
          <p className="text-gray-700 text-md mt-2">{alamat.phone}</p>
        </div>
      </div>
      
      {/* Google Maps Section */}
      <div className="w-full h-fit mt-8">
        <iframe
          src="https://maps.google.com/maps?q=Jl.%20Raya%20Pasar%20Minggu%20No.%209B%2C%20pejaten&amp;t=m&amp;z=11&amp;output=embed&amp;iwloc=near"
          title="Jl. Raya Pasar Minggu No. 9B, pejaten"
          aria-label="Jl. Raya Pasar Minggu No. 9B, pejaten"
          width="100%"
          height="300"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Alamat;
