// components/CallatAction.tsx

import Link from "next/link";
import { BackgroundGradientAnimation } from "./ui/backgroundGradient";

const CallatAction = () => {
  return (
    <div className="overflow-hidden -z-10">
      <BackgroundGradientAnimation>
        <div className="absolute z-40 inset-0 grid grid-rows-2 gap-0 items-center justify-center text-black font-bold px-4 pointer-events-none text-xl text-center">
          <p className="drop-shadow-2xl">
            Butuh Service Kompor Gas / Oven Sekarang? Hubungi Kami
          </p>
          <div className="w-full grid grid-cols-2 gap-4 -z-50">
            <button className="btn btn-default hover:cursor-pointer">
              <Link href="tel:081214446687">Telepon</Link>
            </button>
            <button className="btn btn-primary hover:cursor-pointer">
              <Link href="https://api.whatsapp.com/send?phone=6281214446687&text=Halo%20Jaya%20Mandiri%20Teknik%2C%20saya%20mau%20service&l=id">
                Whatsapp
              </Link>
            </button>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default CallatAction;
