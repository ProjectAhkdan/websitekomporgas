
import Link from "next/link";
import { BackgroundGradientAnimation } from "./ui/backgroundGradient";
import { whatsappConfig } from "@/data/data";

const CallatAction = () => {
    const {phoneNumber, message} = whatsappConfig;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="overflow-hidden -z-10">
      <BackgroundGradientAnimation>
        <div className="absolute z-40 inset-0 grid grid-rows-2 gap-0 items-center justify-center text-black font-bold px-4 text-xl text-center">
          <p className="drop-shadow-2xl">
            Butuh Service Kompor Gas / Oven Sekarang? Hubungi Kami
          </p>
          <div className="w-full grid grid-cols-2 gap-4">
              <Link className="btn btn-default w-full" href="tel:081214446687">Telepon</Link>
              <Link className="btn btn-primary w-fit" href={url}>
                Whatsapp
              </Link>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default CallatAction;
