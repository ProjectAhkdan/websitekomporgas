import Image from "next/image";

const Spesialis = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          alt="servis-kompor"
          src="/assets/service-kompor.jpeg"
          className="max-w-sm rounded-lg shadow-2xl"
          width={300}
          height={300}
          priority 
        />
        <div className="lg:ml-10 text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Spesialis Servis Kompor Gas Terpercaya Sejak 2010
          </h1>
          <h2 className="py-6 text-xl font-semibold">Jaya Mandiri Teknik</h2>
          <p className="text-lg leading-relaxed">
            Sejak 2010, kami telah membantu permasalahan kompor gas di seluruh
            Jabodetabek baik dalam skala rumah tangga, UMKM, restoran, maupun
            pantry perusahaan. Dengan menjadi penyedia jasa service kompor gas
            panggilan terbesar saat ini, kami berkomitmen untuk memberikan
            layanan terbaik dengan proses cepat, hasil rapi, yang ditangani oleh
            tim profesional dan berpengalaman tinggi dalam perbaikan kompor gas
            tanam, freestanding, dan oven semua merek.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spesialis;
