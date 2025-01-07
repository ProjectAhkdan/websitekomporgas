import { alamat } from "../../data/data";

const Alamat = () => {
  return (
    <div>
      <div className=" flex items-center justify-center p-20">
        <div className=" bg-white rounded-lg w-full md:grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <h1 className="font-bold text-blue-600 text-2xl">Alamat</h1>
            <p className="text-gray-700 text-md">{alamat.address}</p>
          </div>
        </div>
        <div className=" bg-white rounded-lg w-full md:grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <h1 className="font-bold text-blue-600 text-2xl">Telepon</h1>
            <p className="text-gray-700 text-md">{alamat.phone}</p>
          </div>
        </div>
      </div>
      <div className=" w-full h-fit">
        <iframe
          src="https://maps.google.com/maps?q=Jl.%20Raya%20Pasar%20Minggu%20No.%209B%2C%20pejaten&amp;t=m&amp;z=11&amp;output=embed&amp;iwloc=near"
          title="Jl. Raya Pasar Minggu No. 9B, pejaten"
          aria-label="Jl. Raya Pasar Minggu No. 9B, pejaten"
          width="100%"
          height="300"
        ></iframe>
      </div>
    </div>
  );
};

export default Alamat;
