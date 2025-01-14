"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCallback } from "react";

const HeroHome = () => {
  const router = useRouter();

  const handleNavigation = useCallback(() => {
    router.push("/Contact");
  }, [router]);

  return (
    <div className="hero relative">
      <Image
        src="/assets/background-service-kompor-gas.jpg"
        alt="Background Service Kompor Gas"
        layout="fill"
        objectFit="cover"
        quality={75} 
        priority 
        className="z-[-1]"
      />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content py-20 text-neutral-content text-center">
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
            className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 font-medium text-white transition-all duration-300 hover:from-[#ffff] hover:to-[#2596be]"
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
