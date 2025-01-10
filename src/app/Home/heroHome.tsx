"use client";

import { useRouter } from "next/navigation";

const HeroHome = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/Contact");
  };

  return (
    <div
      className="hero"
      style={{
        backgroundImage: 'url("/assets/background-service-kompor-gas.jpg")',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content py-10 text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Jasa Service Kompor Gas Tanam & Oven No.1
          </h1>
          <p className="mb-5">
            Jamantek spesialis service kompor gas panggilan terbesar se
            Jabodetabek. Kami disini sebagai solusi semua masalah yang terjadi
            pada kompor gas anda.
          </p>
          <button
            onClick={handleNavigation}
            className="inline-flex h-12 items-center justify-center rounded-md bg-[linear-gradient(110deg,#2596be,45%,#ffff,55%,#2596be)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors "
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
